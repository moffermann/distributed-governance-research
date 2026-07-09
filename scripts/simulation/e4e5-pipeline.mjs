#!/usr/bin/env node
// E4/E5 UNIFIED PIPELINE — three-stage O-ring (macro planning x allocation x delivery)
// on E4's matrix world, at scale, worker-parallel, with 95%/99% CIs.
// Pre-registration: research/e4e5-pipeline-preregistration.md.
//
// Efficiency: stream each seed's world ONCE, accumulating per project j:
//   Sp,Sm  (true value parts; T_j = Sp - Sm)
//   cenPos,cenNeg  (central perceived value split at 0, so central(eta)=cenPos+eta*cenNeg)
// Then evaluate the WHOLE (eta,beta) frontier cheaply. Distributed at scale uses its
// large-sample mean p*(Sp - (1-beta)*Sm) (sampling error -> 0 as N grows; verified
// separately). O(K) memory, so N up to 1e6 is fine.
//
// Usage: node e4e5-pipeline.mjs [N] [seeds] [K] [workers]

import { Worker, isMainThread, parentPort, workerData } from 'node:worker_threads';
import os from 'node:os';
import { fileURLToPath } from 'node:url';
import { writeFileSync } from 'node:fs';
import { execSync } from 'node:child_process';

function seedFor(a,b){ let h=(a>>>0); h=Math.imul(h^0x9e3779b9,0x85ebca6b); h^=(b>>>0); h=Math.imul(h^(h>>>13),0xc2b2ae35); return (h^(h>>>16))>>>0; }
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function mkGauss(rng){ let s=null; return ()=>{ if(s!==null){const t=s;s=null;return t;} let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();const r=Math.sqrt(-2*Math.log(u)),a=2*Math.PI*v;s=r*Math.sin(a);return r*Math.cos(a);}; }
function gauss1(rng){ let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v); }
function gammaS(rng,a){ if(a<1) return gammaS(rng,a+1)*Math.pow(rng()||1e-12,1/a); const d=a-1/3,c=1/Math.sqrt(9*d); while(true){ let x,g; do{x=gauss1(rng);g=1+c*x;}while(g<=0); g=g*g*g; const u=rng(); if(u<1-0.0331*x*x*x*x) return d*g; if(Math.log(u||1e-12)<0.5*x*x+d*(1-g+Math.log(g))) return d*g; } }
function betaS(rng,a,b){ const x=gammaS(rng,a),y=gammaS(rng,b); return x/(x+y); }   // Beta for polarized sector ideological positions

const PARAMS = {
  K: 1000, A: 20, mean: 0.01, sd: 1.5, noise: 1.5, p: 0.35, costHi: 10,
  projSpread: 0.02,                              // PER-PROJECT harm heterogeneity: each project has its own mean (some net-harmful) -> a project is its own thing, not a slave to its sector
  sectorTilt: 0.01,                              // mild per-category tilt so grouping projects by category yields genuinely different sector net-values (value EMERGES from the projects)
  kSectors: 10,                                  // fixed number of sectors both institutions select (level field), discarding the rest
  // partisan bias (central only): issue ownership (Petrocik 1996) — each sector has an ideological
  // position (Beta-polarized: strongly owned by one side), the governing party boosts aligned
  // sectors independent of value. deltaPartisan = tilt as a fraction of the TRUE sector-value spread
  // (calibrated to the signal, not the level); modest per Potrafke 2011 (real but small, weakened post-1990).
  deltaPartisan: 0.3, betaA: 0.5, betaB: 0.5,
  // CITIZEN preference polarization: a citizen's valuation = consensual base + polar*camp*sector_position
  // + idiosyncratic noise. polar=0 -> Normal (old model); polar>0 -> ideological sectors get BIMODAL
  // valuations (in-group values, out-group is harmed). Sector-specific + swept: literature says the mass
  // public is mostly centrist/unimodal (Fiorina 2005; DiMaggio et al. 1996) but polarization is real and
  // rising on some issues via partisan sorting (Abramowitz & Saunders 2008).
  polar: 1.0, harmMult: 1.0,                     // harmMult>1: the out-group is harmed MORE than the in-group benefits (asymmetric: Olson's diffuse costs at the ideological scale) -> divisive projects go net-negative
  fWeak: 0.60, fVer: 0.86,                       // delivery fractions (f_ver/f_weak≈1.43 = +43%, in the leak band)
  ETAS: [0.0, 0.1, 0.25, 0.5, 0.75, 1.0],
  BETAS: [0.0, 0.3],
};

// ---- stream one seed's world -> per-project accumulators ----
// Projects have their OWN value (project mean = base + a mild sector tilt + project idiosyncrasy);
// the SECTOR is only a category, whose value is inferred by summing its projects (below).
function buildSeed(seed, N, K, mean, sd, noise){
  const {A, projSpread, sectorTilt, betaA, betaB, polar, harmMult}=PARAMS; const per=Math.ceil(K/A);
  const srng=mulberry32(seedFor(seed, 777777));
  const sTilt=new Float64Array(A), pos=new Float64Array(A);
  for(let a=0;a<A;a++){ sTilt[a]=sectorTilt*gauss1(srng); pos[a]=2*betaS(srng,betaA,betaB)-1; }  // sector value-tilt + polarized ideological position in [-1,1]
  const gov = gauss1(srng) > 0 ? 1 : -1;                                 // governing party ideology this period (+/-1)
  const Sp=new Float64Array(K), Sm=new Float64Array(K), cPos=new Float64Array(K), cNeg=new Float64Array(K), cost=new Float64Array(K);
  for(let j=0;j<K;j++){
    const a=(j/per)|0; const pa=pos[a];
    const rng=mulberry32(seedFor(seed, j+1)); const G=mkGauss(rng);
    cost[j]=1+(PARAMS.costHi-1)*rng();
    const projMean = mean + sTilt[a] + projSpread*G();                  // the project's own consensual mean
    const frac=0.1+0.6*rng(); const n=Math.round(frac*N);
    let sp=0,sm=0,cp=0,cn=0;
    for(let k=0;k<n;k++){
      const camp = G()>0 ? 1 : -1;                   // citizen's ideological camp (balanced population)
      const align = camp*pa;                         // >0 aligned (in-group), <0 opposed (out-group)
      const v = projMean + (align>0 ? polar*align : polar*align*harmMult) + G()*sd;  // in-group benefit vs (possibly larger) out-group harm + idiosyncratic
      if(v>0) sp+=v; else sm+=-v;
      let pe=v+noise*G();
      if(pe>=0) cp+=pe; else cn+=pe;                 // central perceived split at 0 (blind to harm)
    }
    Sp[j]=sp; Sm[j]=sm; cPos[j]=cp; cNeg[j]=cn;
  }
  return {Sp,Sm,cPos,cNeg,cost,pos,gov};
}

// greedy fund by perceived value/cost, skip perc<=0, until budget
function alloc(perc, cost, idx, budget){
  const order=idx.slice().sort((a,b)=> (perc[b]/cost[b]) - (perc[a]/cost[a]));
  const chosen=[]; let sp=0;
  for(const j of order){ if(perc[j]<=0) continue; if(sp+cost[j]<=budget){chosen.push(j); sp+=cost[j];} }
  return chosen;
}
const deliver=(funded, T, f)=>{ let s=0; for(const j of funded) s+=T[j]; return s*f; };

// two-layer: allocation x delivery (single pool)
function twoLayer(perc, T, cost, K, budget, f){
  const idx=Array.from({length:K},(_,j)=>j);
  return deliver(alloc(perc,cost,idx,budget), T, f);
}
// three-layer MACRO: sector VALUE is inferred by summing the projects in each category
// (perc = the matrix that institution sees: true for distributed/oracle, harm-blind for
// central). Both pick the top-k sectors by the value they see; the central additionally
// carries an ideological/political bias (Olson lobby at the macro level). Then the whole
// budget is allocated within the chosen k sectors (E4), and delivered.
function threeLayer(perc, T, cost, K, A, budget, f, ptilt){
  const per=Math.ceil(K/A);
  const sScore=new Float64Array(A);
  for(let j=0;j<K;j++) sScore[(j/per)|0]+=perc[j];                        // sector value = sum of its projects (as seen)
  for(let a=0;a<A;a++) sScore[a]+=ptilt[a];                               // partisan tilt (central only; zeros for distributed/oracle)
  const order=Array.from({length:A},(_,a)=>a).sort((x,y)=>sScore[y]-sScore[x]);
  const chosen=new Set(order.slice(0,PARAMS.kSectors));                   // top-k sectors, discard the rest (same k both sides)
  const idx=[]; for(let j=0;j<K;j++) if(chosen.has((j/per)|0)) idx.push(j);
  return deliver(alloc(perc,cost,idx,budget), T, f);
}

function evalSeed(seed, N){
  const {K,A,mean,sd,noise,p,fWeak,fVer,deltaPartisan,ETAS,BETAS}=PARAMS;
  const W=buildSeed(seed,N,K,mean,sd,noise);
  const {Sp,Sm,cPos,cNeg,cost,pos,gov}=W;
  const T=new Float64Array(K); for(let j=0;j<K;j++) T[j]=Sp[j]-Sm[j];
  const budget=cost.reduce((a,b)=>a+b,0)/3;
  // partisan tilt on the central, scaled to the TRUE inter-sector value spread (the signal)
  const per=Math.ceil(K/A); const trueSec=new Float64Array(A);
  for(let j=0;j<K;j++) trueSec[(j/per)|0]+=T[j];
  let m=0; for(let a=0;a<A;a++) m+=trueSec[a]; m/=A;
  let vr=0; for(let a=0;a<A;a++) vr+=(trueSec[a]-m)*(trueSec[a]-m); const sigTrue=Math.sqrt(vr/A);
  const ptilt=new Float64Array(A), zero=new Float64Array(A);
  for(let a=0;a<A;a++) ptilt[a]=deltaPartisan*sigTrue*gov*pos[a];         // governing party boosts aligned sectors, modest tilt vs the signal
  const points=[];
  for(const eta of ETAS) for(const beta of BETAS){
    const cen=new Float64Array(K), dis=new Float64Array(K);
    for(let j=0;j<K;j++){ cen[j]=cPos[j]+eta*cNeg[j]; dis[j]=p*(Sp[j]-(1-beta)*Sm[j]); }
    const c2=twoLayer(cen,T,cost,K,budget,fWeak), d2=twoLayer(dis,T,cost,K,budget,fVer), o2=twoLayer(T,T,cost,K,budget,1.0);
    // central: harm-blind view + partisan tilt; distributed/oracle: no partisan tilt
    const c3=threeLayer(cen,T,cost,K,A,budget,fWeak,ptilt), d3=threeLayer(dis,T,cost,K,A,budget,fVer,zero), o3=threeLayer(T,T,cost,K,A,budget,1.0,zero);
    points.push({eta,beta,c2,d2,o2,c3,d3,o3});
  }
  return points;
}

if(!isMainThread){
  const {seeds,N,overrides}=workerData;
  Object.assign(PARAMS, overrides);                                      // FIX: propagate main-thread param overrides (deltaPartisan, K, ...) to workers
  const out=seeds.map(s=>({seed:s, points:evalSeed(s,N)}));
  parentPort.postMessage(out);
} else {
  const positional=process.argv.slice(2).filter(a=>!a.startsWith("--"));   // strip --flags so they never occupy a positional slot
  const N=+(positional[0]||100000), SEEDS=+(positional[1]||40), Kc=+(positional[2]||PARAMS.K), NW=+(positional[3]||Math.max(1,Math.min(os.cpus().length-2, SEEDS)));
  PARAMS.K=Kc;
  if(positional[4]!==undefined) PARAMS.deltaPartisan=+positional[4];       // argv[6] positional (back-compat): sweep partisan tilt (0 isolates the harm-blindness macro effect)
  if(positional[5]!==undefined) PARAMS.polar=+positional[5];               // argv[7]: sweep citizen preference polarization (0 = Normal valuations)
  if(positional[6]!==undefined) PARAMS.harmMult=+positional[6];            // argv[8]: out-group harm multiplier (>1 = asymmetric net harm)
  for(const a of process.argv.slice(2)) if(a.startsWith("--")){            // named flags --key=value override ANY param (safer than positional); take precedence
    const [k,v]=a.slice(2).split("="); if(k in PARAMS && v!==undefined) PARAMS[k]=isNaN(+v)?v:+v;
  }
  const t0=Date.now();
  const seedList=Array.from({length:SEEDS},(_,i)=>1000+i);
  const chunks=Array.from({length:NW},()=>[]); seedList.forEach((s,i)=>chunks[i%NW].push(s));
  const __file=fileURLToPath(import.meta.url);
  const all=[];
  await Promise.all(chunks.filter(c=>c.length).map(seeds=>new Promise((res,rej)=>{
    const w=new Worker(__file,{workerData:{seeds,N,overrides:{...PARAMS}}});   // FIX: pass the FULL param set (no curated subset) so every main-thread override reaches workers — the earlier subset silently dropped sweeps
    w.on('message',m=>{all.push(...m); res();}); w.on('error',rej);
  })));
  // aggregate per (eta,beta).
  const key=p=>p.eta+","+p.beta; const groups={};
  for(const r of all) for(const p of r.points){ (groups[key(p)]??=[]).push(p); }
  const sum=a=>a.reduce((p,c)=>p+c,0);
  // ---- assertion (true invariant): the oracle funds only T>0 projects, so its delivered value
  // can never be NEGATIVE. It CAN legitimately be ~0 in a fully net-harmful world (harmMult≫1),
  // which is a degenerate scope-condition corner, not a bug — those cells are guarded, not asserted.
  for(const g of Object.values(groups)) for(const p of g){
    if(p.o2<-1e-9 || p.o3<-1e-9) throw new Error("assertion failed: oracle delivered value must be ≥ 0 (o2="+p.o2+", o3="+p.o3+")");
  }
  // Degeneracy: the oracle-normalized frame is valid only when the oracle is a proper positive
  // scale AND neither arm is harm-dominated. In a (near-)fully net-harmful world (harmMult≫1) the
  // oracle collapses to a sliver and both arms deliver net harm — then Δ=(d−c)/o inflates without
  // bound and NO oracle-normalized number is meaningful. This is the named scope-condition corner,
  // flagged not reported. (Main regime harmMult=1: both arms are positive fractions of oracle.)
  const degen=(d,c,o)=>{ const So=sum(o); if(So<=1e-9*(Math.abs(sum(d))+Math.abs(sum(c))+1e-12)) return true; return sum(c)/So<-0.05 || sum(d)/So<-0.05; };
  // PRIMARY metric: oracle-normalized additive contrast Δ = (Σd − Σc)/Σo — bounded and finite in
  // every corner (unlike the ratio d/c, which explodes when Σc → 0 in harm-dominated cells).
  // MC CI = paired bootstrap over the SEEDS (worlds): this is Monte-Carlo error over n=40 worlds,
  // NOT a 1M-citizen precision. The wide *parametric* band is the η-frontier below, reported apart.
  function bootDelta(d,c,o,lo,hi,B=4000){
    const n=d.length, rng=mulberry32(135791), rs=new Array(B);
    for(let b=0;b<B;b++){ let sd=0,sc=0,so=0; for(let i=0;i<n;i++){const k=(rng()*n)|0; sd+=d[k];sc+=c[k];so+=o[k];} rs[b]=(sd-sc)/so; }
    rs.sort((a,b)=>a-b); const pk=x=>rs[Math.max(0,Math.min(B-1,Math.round(x*(B-1))))];
    return {lo:pk(lo), hi:pk(hi)};
  }
  // SECONDARY metric: the compound ratio d/c, but reported ONLY through a Fieller interval that
  // self-gates — when the central-delivered mean is not significantly > 0 (a≤0), the ratio is
  // unbounded/uninterpretable and we say so instead of printing a spurious "0.03x".
  const stats=a=>{ const n=a.length; let m=0; for(const x of a) m+=x; m/=n; let v=0; for(const x of a) v+=(x-m)*(x-m); return {n,m,v:v/(n-1)}; };
  const cov=(a,b)=>{ const n=a.length; let ma=0,mb=0; for(let i=0;i<n;i++){ma+=a[i];mb+=b[i];} ma/=n;mb/=n; let c=0; for(let i=0;i<n;i++) c+=(a[i]-ma)*(b[i]-mb); return c/(n-1); };
  function fieller(x,y,t=1.96){                                    // CI for E[x]/E[y] from paired samples
    const n=x.length, sx=stats(x), sy=stats(y), Sxy=cov(x,y), xb=sx.m, yb=sy.m, Sxx=sx.v, Syy=sy.v;
    const a=yb*yb - t*t*Syy/n, b=-2*(xb*yb - t*t*Sxy/n), c=xb*xb - t*t*Sxx/n, R=xb/yb;   // a>0 ⇔ denom significantly>0 = validity gate
    if(a<=0) return {R, stable:false};
    const disc=b*b-4*a*c; if(disc<0) return {R, stable:false};
    const r1=(-b-Math.sqrt(disc))/(2*a), r2=(-b+Math.sqrt(disc))/(2*a);
    return {R, lo:Math.min(r1,r2), hi:Math.max(r1,r2), stable:true};
  }
  const f=x=>x.toFixed(2);
  const gitSha=(()=>{ try{ return execSync("git rev-parse --short HEAD",{cwd:fileURLToPath(new URL('.',import.meta.url))}).toString().trim(); }catch{ return "unknown"; } })();
  console.log("E4/E5 UNIFIED PIPELINE — N="+N.toLocaleString()+", K="+PARAMS.K+", A="+PARAMS.A+" sectors (top "+PARAMS.kSectors+"), projSpread="+PARAMS.projSpread+", polar(citizen)="+PARAMS.polar+", partisan="+PARAMS.deltaPartisan+", seeds="+SEEDS+", workers="+NW+", git="+gitSha+"  ("+((Date.now()-t0)/1000).toFixed(1)+"s)");
  console.log("delivery f_weak="+PARAMS.fWeak+" f_ver="+PARAMS.fVer+" (ratio "+(PARAMS.fVer/PARAMS.fWeak).toFixed(2)+"x)");
  console.log("PRIMARY: Δ3=(d−c)/oracle [95% MC CI over "+SEEDS+" worlds].  SECONDARY (gated): compound d/c via Fieller — 'unstable' = central not sig.>0.\n");
  console.log("  eta  beta | cen %orac |  Δ2   |  Δ3=(d−c)/o [95% MC CI]  | ratio d/c 3L (gated Fieller)");
  const frontier=[];
  for(const eta of PARAMS.ETAS) for(const beta of PARAMS.BETAS){
    const g=groups[eta+","+beta]; if(!g) continue;
    const c2=g.map(p=>p.c2),d2=g.map(p=>p.d2),o2=g.map(p=>p.o2),c3=g.map(p=>p.c3),d3=g.map(p=>p.d3),o3=g.map(p=>p.o3);
    const So2=sum(o2), So3=sum(o3);
    if(degen(d3,c3,o3)){ console.log("  "+eta.toFixed(2)+" "+beta.toFixed(2)+" |    —     |  degenerate: harm-dominated world (oracle collapses; Δ,ratio undefined)"); frontier.push({eta,beta,degenerate:true}); continue; }
    const D2=(sum(d2)-sum(c2))/So2, D3=(sum(d3)-sum(c3))/So3, cor=100*sum(c2)/So2;
    const bD3=bootDelta(d3,c3,o3,0.025,0.975), fi=fieller(d3,c3);
    const ratio = fi.stable ? (f(fi.R)+"x ["+f(fi.lo)+","+f(fi.hi)+"]") : ("unstable (R≈"+f(fi.R)+", denom~0)");
    console.log("  "+eta.toFixed(2)+" "+beta.toFixed(2)+" |   "+cor.toFixed(0).padStart(3)+"%   | "+(D2>=0?"+":"")+f(D2)+" | "+((D3>=0?"+":"")+f(D3)+" ["+f(bD3.lo)+","+f(bD3.hi)+"]").padEnd(24)+" | "+ratio);
    frontier.push({eta,beta,cenPctOracle:+cor.toFixed(1),D2:+D2.toFixed(4),D3:+D3.toFixed(4),D3ci:[+bD3.lo.toFixed(4),+bD3.hi.toFixed(4)],ratio3:fi.stable?+fi.R.toFixed(3):null,ratio3ci:fi.stable?[+fi.lo.toFixed(3),+fi.hi.toFixed(3)]:null,ratio3stable:fi.stable});
  }
  let realistic=null;
  const gr=groups["0.1,0.3"];
  const degR=gr?degen(gr.map(p=>p.d3),gr.map(p=>p.c3),gr.map(p=>p.o3)):true;
  if(gr && degR){ console.log("\nREALISTIC REGIME (eta=0.10, beta=0.30): degenerate — harm-dominated world at these params; Δ/ratio undefined."); }
  else if(gr){ const c2=gr.map(p=>p.c2),d2=gr.map(p=>p.d2),o2=gr.map(p=>p.o2),c3=gr.map(p=>p.c3),d3=gr.map(p=>p.d3),o3=gr.map(p=>p.o3);
    const D3=(sum(d3)-sum(c3))/sum(o3), Dt=sum(d3)/sum(o3), Ct=sum(c3)/sum(o3);
    const ci95=bootDelta(d3,c3,o3,0.025,0.975), ci99=bootDelta(d3,c3,o3,0.005,0.995), fi=fieller(d3,c3);
    console.log("\nREALISTIC REGIME (eta=0.10, beta=0.30) — n="+SEEDS+" worlds:");
    console.log("  PRIMARY  Δ3=(d−c)/oracle: "+(D3>=0?"+":"")+f(D3)+"   MC 95% ["+f(ci95.lo)+","+f(ci95.hi)+"]   99% ["+f(ci99.lo)+","+f(ci99.hi)+"]   (D̃="+f(Dt)+", C̃="+f(Ct)+" of oracle)");
    console.log("  SECONDARY compound d/c: "+(fi.stable?f(fi.R)+"x  Fieller 95% ["+f(fi.lo)+","+f(fi.hi)+"]":"unstable")+"   delivery-only floor "+(PARAMS.fVer/PARAMS.fWeak).toFixed(2)+"x");
    console.log("  NOTE: the CI above is Monte-Carlo error over "+SEEDS+" worlds (not 1M-citizen precision). The wide parametric band is the η-frontier above.");
    realistic={D3:+D3.toFixed(4),D3_mc95:[+ci95.lo.toFixed(4),+ci95.hi.toFixed(4)],D3_mc99:[+ci99.lo.toFixed(4),+ci99.hi.toFixed(4)],Dtilde:+Dt.toFixed(4),Ctilde:+Ct.toFixed(4),ratio:fi.stable?+fi.R.toFixed(3):null,ratioFieller95:fi.stable?[+fi.lo.toFixed(3),+fi.hi.toFixed(3)]:null,deliveryFloor:+(PARAMS.fVer/PARAMS.fWeak).toFixed(3)};
  }
  // ---- JSON sidecar: params + git SHA + results, for provenance / downstream analysis ----
  try{
    const sidecar={ generatedBySeconds:+((Date.now()-t0)/1000).toFixed(1), git:gitSha, N, seeds:SEEDS, workers:NW, params:{...PARAMS}, realistic, frontier };
    const out=fileURLToPath(new URL('../../research/e4e5-pipeline-run.json', import.meta.url));
    writeFileSync(out, JSON.stringify(sidecar,null,2));
    console.log("\nsidecar: research/e4e5-pipeline-run.json (params + git "+gitSha+" + results)");
  }catch(e){ console.log("\n(sidecar write skipped: "+e.message+")"); }
}
