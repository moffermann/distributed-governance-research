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

function seedFor(a,b){ let h=(a>>>0); h=Math.imul(h^0x9e3779b9,0x85ebca6b); h^=(b>>>0); h=Math.imul(h^(h>>>13),0xc2b2ae35); return (h^(h>>>16))>>>0; }
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function mkGauss(rng){ let s=null; return ()=>{ if(s!==null){const t=s;s=null;return t;} let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();const r=Math.sqrt(-2*Math.log(u)),a=2*Math.PI*v;s=r*Math.sin(a);return r*Math.cos(a);}; }

const PARAMS = {
  K: 1000, A: 20, mean: 0.01, sd: 1.5, noise: 1.5, p: 0.35, costHi: 10,
  projSpread: 0.02,                              // PER-PROJECT harm heterogeneity: each project has its own mean (some net-harmful) -> a project is its own thing, not a slave to its sector
  sectorTilt: 0.01,                              // mild per-category tilt so grouping projects by category yields genuinely different sector net-values (value EMERGES from the projects)
  kSectors: 10,                                  // fixed number of sectors both institutions select (level field), discarding the rest
  lambdaIdeo: 0.30,                              // central-only ideological/political bias on sector selection (Olson lobby at the macro level), as a fraction of typical sector value
  fWeak: 0.60, fVer: 0.86,                       // delivery fractions (f_ver/f_weak≈1.43 = +43%, in the leak band)
  ETAS: [0.0, 0.1, 0.25, 0.5, 0.75, 1.0],
  BETAS: [0.0, 0.3],
};

// ---- stream one seed's world -> per-project accumulators ----
// Projects have their OWN value (project mean = base + a mild sector tilt + project idiosyncrasy);
// the SECTOR is only a category, whose value is inferred by summing its projects (below).
function buildSeed(seed, N, K, mean, sd, noise){
  const {A, projSpread, sectorTilt}=PARAMS; const per=Math.ceil(K/A);
  const srng=mulberry32(seedFor(seed, 777777)); const SG=mkGauss(srng);
  const sTilt=new Float64Array(A), ideo=new Float64Array(A);
  for(let a=0;a<A;a++){ sTilt[a]=sectorTilt*SG(); ideo[a]=SG(); }        // sector tilt + per-sector ideological preference
  const Sp=new Float64Array(K), Sm=new Float64Array(K), cPos=new Float64Array(K), cNeg=new Float64Array(K), cost=new Float64Array(K);
  for(let j=0;j<K;j++){
    const a=(j/per)|0;
    const rng=mulberry32(seedFor(seed, j+1)); const G=mkGauss(rng);
    cost[j]=1+(PARAMS.costHi-1)*rng();
    const projMean = mean + sTilt[a] + projSpread*G();                  // the project's own mean (its own harm content)
    const frac=0.1+0.6*rng(); const n=Math.round(frac*N);
    let sp=0,sm=0,cp=0,cn=0;
    for(let k=0;k<n;k++){
      const v=G()*sd+projMean;
      if(v>0) sp+=v; else sm+=-v;
      let pe=v+noise*G();
      if(pe>=0) cp+=pe; else cn+=pe;                 // central perceived split at 0
    }
    Sp[j]=sp; Sm[j]=sm; cPos[j]=cp; cNeg[j]=cn;
  }
  return {Sp,Sm,cPos,cNeg,cost,ideo};
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
function threeLayer(perc, T, cost, K, A, budget, f, ideo, lambdaIdeo){
  const per=Math.ceil(K/A);
  const sScore=new Float64Array(A);
  for(let j=0;j<K;j++) sScore[(j/per)|0]+=perc[j];                        // sector value = sum of its projects (as seen)
  if(lambdaIdeo>0){ let avg=0; for(let a=0;a<A;a++) avg+=Math.abs(sScore[a]); avg/=A;
    for(let a=0;a<A;a++) sScore[a]+=lambdaIdeo*avg*ideo[a]; }             // central-only ideological distortion of sector ranking
  const order=Array.from({length:A},(_,a)=>a).sort((x,y)=>sScore[y]-sScore[x]);
  const chosen=new Set(order.slice(0,PARAMS.kSectors));                   // top-k sectors, discard the rest (same k both sides)
  const idx=[]; for(let j=0;j<K;j++) if(chosen.has((j/per)|0)) idx.push(j);
  return deliver(alloc(perc,cost,idx,budget), T, f);
}

function evalSeed(seed, N){
  const {K,A,mean,sd,noise,p,fWeak,fVer,lambdaIdeo,ETAS,BETAS}=PARAMS;
  const W=buildSeed(seed,N,K,mean,sd,noise);
  const {Sp,Sm,cPos,cNeg,cost,ideo}=W;
  const T=new Float64Array(K); for(let j=0;j<K;j++) T[j]=Sp[j]-Sm[j];
  const budget=cost.reduce((a,b)=>a+b,0)/3;
  const points=[];
  for(const eta of ETAS) for(const beta of BETAS){
    const cen=new Float64Array(K), dis=new Float64Array(K);
    for(let j=0;j<K;j++){ cen[j]=cPos[j]+eta*cNeg[j]; dis[j]=p*(Sp[j]-(1-beta)*Sm[j]); }
    const c2=twoLayer(cen,T,cost,K,budget,fWeak), d2=twoLayer(dis,T,cost,K,budget,fVer), o2=twoLayer(T,T,cost,K,budget,1.0);
    // central: harm-blind view + ideological bias; distributed/oracle: no ideological bias
    const c3=threeLayer(cen,T,cost,K,A,budget,fWeak,ideo,lambdaIdeo), d3=threeLayer(dis,T,cost,K,A,budget,fVer,ideo,0), o3=threeLayer(T,T,cost,K,A,budget,1.0,ideo,0);
    points.push({eta,beta,c2,d2,o2,c3,d3,o3});
  }
  return points;
}

if(!isMainThread){
  const {seeds,N}=workerData;
  const out=seeds.map(s=>({seed:s, points:evalSeed(s,N)}));
  parentPort.postMessage(out);
} else {
  const N=+(process.argv[2]||100000), SEEDS=+(process.argv[3]||40), Kc=+(process.argv[4]||PARAMS.K), NW=+(process.argv[5]||Math.max(1,Math.min(os.cpus().length-2, SEEDS)));
  PARAMS.K=Kc;
  if(process.argv[6]!==undefined) PARAMS.lambdaIdeo=+process.argv[6];   // sweep ideological bias (0 isolates the harm-blindness macro effect)
  const t0=Date.now();
  const seedList=Array.from({length:SEEDS},(_,i)=>1000+i);
  const chunks=Array.from({length:NW},()=>[]); seedList.forEach((s,i)=>chunks[i%NW].push(s));
  const __file=fileURLToPath(import.meta.url);
  const all=[];
  await Promise.all(chunks.filter(c=>c.length).map(seeds=>new Promise((res,rej)=>{
    const w=new Worker(__file,{workerData:{seeds,N}});
    w.on('message',m=>{all.push(...m); res();}); w.on('error',rej);
  })));
  // aggregate per (eta,beta). Compound = ratio-of-MEANS (stable), 95% bootstrap CI over seeds.
  const key=p=>p.eta+","+p.beta; const groups={};
  for(const r of all) for(const p of r.points){ (groups[key(p)]??=[]).push(p); }
  const sum=a=>a.reduce((p,c)=>p+c,0);
  function boot(num, den, lo, hi, B=4000){
    const n=num.length, rng=mulberry32(987654), rs=new Array(B);
    for(let b=0;b<B;b++){ let sn=0,sd=0; for(let i=0;i<n;i++){const k=(rng()*n)|0; sn+=num[k]; sd+=den[k];} rs[b]=sn/sd; }
    rs.sort((a,b)=>a-b); const pk=x=>rs[Math.max(0,Math.min(B-1,Math.round(x*(B-1))))];
    return {lo:pk(lo), hi:pk(hi)};
  }
  console.log("E4/E5 UNIFIED PIPELINE — N="+N.toLocaleString()+", K="+PARAMS.K+", A="+PARAMS.A+" sectors (pick top "+PARAMS.kSectors+"), projSpread="+PARAMS.projSpread+", sectorTilt="+PARAMS.sectorTilt+", ideoBias="+PARAMS.lambdaIdeo+", seeds="+SEEDS+", workers="+NW+"  ("+((Date.now()-t0)/1000).toFixed(1)+"s)");
  console.log("delivery f_weak="+PARAMS.fWeak+" f_ver="+PARAMS.fVer+" (ratio "+(PARAMS.fVer/PARAMS.fWeak).toFixed(2)+"x); compound = distributed/central (ratio of means, 95% bootstrap CI)\n");
  console.log("  eta  beta | cen %orac | 2-layer compound [95% CI]     | 3-layer compound [95% CI]     | 3L vs 2L");
  for(const eta of PARAMS.ETAS) for(const beta of PARAMS.BETAS){
    const g=groups[eta+","+beta]; if(!g) continue;
    const c2=g.map(p=>p.c2),d2=g.map(p=>p.d2),o2=g.map(p=>p.o2),c3=g.map(p=>p.c3),d3=g.map(p=>p.d3);
    const m2=sum(d2)/sum(c2), m3=sum(d3)/sum(c3), cor=100*sum(c2)/sum(o2);
    const b2=boot(d2,c2,0.025,0.975), b3=boot(d3,c3,0.025,0.975); const f=x=>x.toFixed(2);
    console.log("  "+eta.toFixed(2)+" "+beta.toFixed(2)+" |   "+cor.toFixed(0).padStart(3)+"%   |  "+(f(m2)+"x ["+f(b2.lo)+","+f(b2.hi)+"]").padEnd(24)+" |  "+(f(m3)+"x ["+f(b3.lo)+","+f(b3.hi)+"]").padEnd(24)+" |  "+(m3>=m2?"+":"")+((m3/m2-1)*100).toFixed(0)+"%");
  }
  const gr=groups["0.1,0.3"];
  if(gr){ const c2=gr.map(p=>p.c2),d2=gr.map(p=>p.d2),c3=gr.map(p=>p.c3),d3=gr.map(p=>p.d3); const f=x=>x.toFixed(2);
    const a=boot(d2,c2,0.025,0.975),b=boot(d2,c2,0.005,0.995),c=boot(d3,c3,0.025,0.975),d=boot(d3,c3,0.005,0.995);
    console.log("\nREALISTIC REGIME (eta=0.10, beta=0.30):");
    console.log("  2-layer compound: "+f(sum(d2)/sum(c2))+"x   95% ["+f(a.lo)+","+f(a.hi)+"]   99% ["+f(b.lo)+","+f(b.hi)+"]");
    console.log("  3-layer compound: "+f(sum(d3)/sum(c3))+"x   95% ["+f(c.lo)+","+f(c.hi)+"]   99% ["+f(d.lo)+","+f(d.hi)+"]");
    console.log("  delivery-only floor: "+(PARAMS.fVer/PARAMS.fWeak).toFixed(2)+"x");
  }
}
