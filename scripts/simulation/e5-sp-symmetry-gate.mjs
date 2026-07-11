#!/usr/bin/env node
// SYMMETRY GATE (go/no-go) — pre-registered in audits/2026-07-10/symmetry-gate-preregistration.md.
// Designed by the independent auditor (Codex) to be adversarial. Selection-only test (delivery at parity).
//
// Both arms share: candidate pool, exact costs, budget, truth net=S-h*cost, report noise ~N(0,tau),
// greedy budget rule, and eligibility by each arm's OWN noisy estimate (hatNet>0). No oracle gate.
//   DISTRIBUTED: endogenous coverage — interested citizen reports w.p. p (v>=0) or p*(1-beta) (v<0);
//                hatS_D = sum(reports)/p.  (adverse voice bias preserved: negatives under-counted)
//   CENTRAL:     competent value-reader, appraisal budget = distributed's EXPECTED #reports, spread
//                EVENLY across projects (fixed bandwidth); hatS_C = reach*mean(sampled reports);
//                score = (1-lambda)*z(hatNet_C/cost) + lambda*z(P/cost). Credit biases RANKING, not eligibility.
//   ORACLE:      full-information greedy on true net/cost.
// Delta=(D-C)/O on TRUE net delivered. GO/NO-GO evaluated against the frozen pre-registration.

// ---- deterministic primitives (copied verbatim from e5-sp-model.mjs) ----
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function seedFor(a,b){ let h=(a>>>0); h=Math.imul(h^0x9e3779b9,0x85ebca6b); h^=(b>>>0); h=Math.imul(h^(h>>>13),0xc2b2ae35); return (h^(h>>>16))>>>0; }
function mkGauss(rng){ let s=null; return ()=>{ if(s!==null){const t=s;s=null;return t;} let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();const r=Math.sqrt(-2*Math.log(u)),a=2*Math.PI*v;s=r*Math.sin(a);return r*Math.cos(a);}; }
function corr(x,y){ const n=x.length; let mx=0,my=0; for(let i=0;i<n;i++){mx+=x[i];my+=y[i];} mx/=n;my/=n;
  let sxy=0,sxx=0,syy=0; for(let i=0;i<n;i++){const dx=x[i]-mx,dy=y[i]-my; sxy+=dx*dy;sxx+=dx*dx;syy+=dy*dy;} return sxy/Math.sqrt(sxx*syy); }
function bootDelta(d,c,o,lo,hi,B=4000){ const n=d.length, rng=mulberry32(13579), rs=new Array(B);
  for(let b=0;b<B;b++){ let sd=0,sc=0,so=0; for(let i=0;i<n;i++){const k=(rng()*n)|0; sd+=d[k];sc+=c[k];so+=o[k];} rs[b]=(sd-sc)/so; }
  rs.sort((a,b)=>a-b); const pk=x=>rs[Math.max(0,Math.min(B-1,Math.round(x*(B-1))))]; return {lo:pk(lo),hi:pk(hi)}; }
const sum=a=>a.reduce((p,x)=>p+x,0);
const mean=a=>a.length? sum(a)/a.length : 0;
function median(a){ const b=[...a].sort((x,y)=>x-y); const n=b.length; if(!n) return 0; return n%2? b[(n-1)/2] : (b[n/2-1]+b[n/2])/2; }
function zscore(a){ const m=mean(a); let s=0; for(const x of a) s+=(x-m)*(x-m); s=Math.sqrt(s/(a.length||1))||1; return a.map(x=>(x-m)/s); }

// ---- world params (canonical faithful-split; FROZEN) ----
const WP={ N:5000, K:500, mean:0.27, sd:1.0, projSpread:0.15, costHi:10, muF:-4, sigF:1.5, sigP:1.0, eta:0.1, budgetFrac:1/3 };

// buildWorld: copied verbatim from e5-sp-model.mjs (truth generation identical) ----
function buildWorld(seed, rho){
  const {N,K,mean,sd,projSpread,costHi}=WP;
  const rng=mulberry32(seedFor(seed, 999)); const g=mkGauss(rng);
  const interested=Array.from({length:K},()=>[]); const cost=new Float64Array(K);
  const S=new Float64Array(K), P=new Float64Array(K), reachA=new Float64Array(K);
  const rc=Math.sqrt(Math.max(0,1-rho*rho)), {muF,sigF,sigP}=WP;
  for(let j=0;j<K;j++){
    cost[j]=1+(costHi-1)*rng();
    const a=g();
    const frac=Math.min(0.9, Math.max(0.005, Math.exp(muF+sigF*a)));
    const projQual=mean+projSpread*g();
    const cLat=rho*a+rc*g();
    let reach=0, sSum=0;
    for(let i=0;i<N;i++){ if(rng()<frac){ const v=projQual+sd*g(); interested[j].push(v); reach++; sSum+=v; } }
    S[j]=sSum; P[j]=Math.exp(sigP*cLat); reachA[j]=reach;
  }
  return {interested,cost,S,P,reach:reachA};
}

// greedy fill: rank eligible projects by score desc, take while budget allows (exact costs) ----
function greedy(score, eligible, cost, K, budget){
  const idx=Array.from({length:K},(_,j)=>j).filter(j=>eligible[j]).sort((a,b)=>score[b]-score[a]);
  const chosen=[]; let sp=0;
  for(const j of idx){ if(sp+cost[j]<=budget){ chosen.push(j); sp+=cost[j]; } }
  return chosen;
}

// one world under (lambda,h,p,beta,tau) ----
function evalWorld(seed, rho, lambda, h, p, beta, tau){
  const {K,budgetFrac}=WP;
  const W=buildWorld(seed,rho); const {interested,cost,S,P,reach}=W;
  let tot=0; for(let j=0;j<K;j++) tot+=cost[j]; const budget=tot*budgetFrac;
  const net=new Float64Array(K); for(let j=0;j<K;j++) net[j]=S[j]-h*cost[j];
  const rd=mulberry32(seedFor(seed, 4242)); const gd=mkGauss(mulberry32(seedFor(seed, 7777)));

  // DISTRIBUTED: endogenous participation sample; estimate hatS_D = sum(reports)/p
  const hatNetD=new Float64Array(K), scoreD=new Float64Array(K), eligD=new Array(K).fill(false);
  let expReports=0;                                   // expected TOTAL distributed reports (for the central's budget)
  for(let j=0;j<K;j++){
    let sumR=0;
    for(const v of interested[j]){ const pp = v<0 ? p*(1-beta) : p; expReports += pp; if(rd()<pp) sumR += v + tau*gd(); }
    const hatS = sumR/p; hatNetD[j]=hatS - h*cost[j]; scoreD[j]=hatNetD[j]/cost[j]; eligD[j]=hatNetD[j]>0;
  }

  // CENTRAL: appraisal budget matched in expectation to distributed (equal up to per-project rounding of mC), spread EVENLY (fixed bandwidth per project)
  const mC=Math.max(1, Math.round(expReports/K));
  const hatNetC=new Float64Array(K), eligC=new Array(K).fill(false);
  const valPerCost=new Float64Array(K), credPerCost=new Float64Array(K);
  for(let j=0;j<K;j++){
    const list=interested[j];
    let obs=0;
    if(list.length>0){ for(let s=0;s<mC;s++){ const v=list[(rd()*list.length)|0]; obs += v + tau*gd(); } obs/=mC; }
    const hatS = reach[j]*obs;                          // central knows reach; unbiased but noisy
    hatNetC[j]=hatS - h*cost[j]; eligC[j]=hatNetC[j]>0;
    valPerCost[j]=hatNetC[j]/cost[j]; credPerCost[j]=P[j]/cost[j];
  }
  const z1=zscore(Array.from(valPerCost)), z2=zscore(Array.from(credPerCost));
  const scoreC=new Float64Array(K); for(let j=0;j<K;j++) scoreC[j]=(1-lambda)*z1[j]+lambda*z2[j];

  // ORACLE: full-information greedy on true net/cost
  const scoreO=new Float64Array(K), eligO=new Array(K).fill(false);
  for(let j=0;j<K;j++){ scoreO[j]=net[j]/cost[j]; eligO[j]=net[j]>0; }

  const fD=greedy(scoreD,eligD,cost,K,budget), fC=greedy(scoreC,eligC,cost,K,budget), fO=greedy(scoreO,eligO,cost,K,budget);
  const val=(set)=>{ let s=0; for(const j of set) s+=net[j]; return s; };   // delivered TRUE net, f=1.0
  const D=val(fD), C=val(fC), O=val(fO);
  return {D,C,O,S,P};
}

// ---- run a cell (100 worlds) ----
const SEEDBASE=20260710, WORLDS=100;
function cell(rho,lambda,h,p,beta,tau){
  const D=[],C=[],O=[],Delta=[]; let SS=[],PP=[];
  for(let i=0;i<WORLDS;i++){
    const r=evalWorld(SEEDBASE+i, rho, lambda, h, p, beta, tau);
    D.push(r.D); C.push(r.C); O.push(r.O); Delta.push((r.D-r.C)/r.O);
    if(i<8){ SS=SS.concat(Array.from(r.S)); PP=PP.concat(Array.from(r.P)); }  // corr(S,P) below is an 8-WORLD DIAGNOSTIC only (kept frozen for reproducibility); it is NOT a decision quantity — cell membership and the gate use latent rho, not this corr, so the NO-GO verdict is unaffected. Full-100-world corr differs by <=0.02.
  }
  const b=bootDelta(D,C,O,0.025,0.975);
  return { rho,lambda,h, corrSP:corr(SS,PP), meanDelta:mean(Delta), medianDelta:median(Delta),
           lo:b.lo, hi:b.hi, D,C,O,Delta, pass:mean(Delta)>0 };
}

const REG={ base:{p:0.35,beta:0.30,tau:0.5}, adv:{p:0.15,beta:0.60,tau:1.0} };
const LAMBDAS=[0,0.1,0.2,0.3], RHOS=[0,0.5,1], HS=[1.5,2.5,4];

console.log("SYMMETRY GATE — selection-only, delivery at parity (f=1.0). "+WORLDS+" worlds, seedBase="+SEEDBASE+".");
console.log("Both arms: same pool/costs/budget/noise; own noisy eligibility (no oracle gate). Central: value-reader + bounded credit (lambda), even appraisal bandwidth.\n");

function runRegime(name, R){
  console.log("=== "+name.toUpperCase()+" regime (p="+R.p+", beta="+R.beta+", tau="+R.tau+") ===");
  console.log("  lam | rho | corrSP(8w diag) |  h  | mean D | med D  |  95% CI          | cell");
  const cells={};
  for(const lam of LAMBDAS) for(const rho of RHOS) for(const h of HS){
    const c=cell(rho,lam,h,R.p,R.beta,R.tau); cells[[lam,rho,h].join(",")]=c;
    const f=x=>(x>=0?"+":"")+x.toFixed(3);
    console.log("  "+lam.toFixed(1)+" | "+rho.toFixed(1)+" | "+c.corrSP.toFixed(2).padStart(5)+"  | "+h.toString().padStart(3)+" | "+f(c.meanDelta).padStart(6)+" | "+f(c.medianDelta).padStart(6)+" | ["+f(c.lo)+","+f(c.hi)+"]".padEnd(6)+" | "+(c.pass?"D>C":"---"));
  }
  console.log("");
  return cells;
}
const baseCells=runRegime("base", REG.base);
const advCells =runRegime("adversarial", REG.adv);

// ---- pre-registered gate evaluation ----
function pool(cells, lams, rhos){ const D=[],C=[],O=[],Delta=[]; let n=0,posCells=0;
  for(const lam of lams) for(const rho of rhos) for(const h of HS){ const c=cells[[lam,rho,h].join(",")];
    D.push(...c.D); C.push(...c.C); O.push(...c.O); Delta.push(...c.Delta); n++; if(c.meanDelta>0) posCells++; }
  return {D,C,O,Delta,n,posCells}; }

const P1=pool(baseCells,[0.1,0.2,0.3],[0,0.5]);       // 18 primary cells
const b1=bootDelta(P1.D,P1.C,P1.O,0.025,0.975);
const A1=pool(advCells,[0.1,0.2,0.3],[0,0.5]);        // adversarial, same lambda/rho domain
const NC=pool(baseCells,[0],[0,0.5]);                 // lambda=0 negative control (6 cells)

const c1 = P1.posCells>=15;
const c2 = median(P1.Delta)>=0.05;
const c3 = b1.lo>0;
const c4 = median(A1.Delta)>=0;
const GO = c1&&c2&&c3&&c4;
const ncMed=median(NC.Delta), ncFlag=ncMed>0.05;

console.log("================ PRE-REGISTERED GATE ================");
console.log("Primary domain: baseline, lambda in {.1,.2,.3}, rho in {0,.5}, h in {1.5,2.5,4} = "+P1.n+" cells.");
console.log("  [C1] cells with mean Delta>0:  "+P1.posCells+"/18   (need >=15)      -> "+(c1?"PASS":"FAIL"));
console.log("  [C2] pooled median Delta:      "+median(P1.Delta).toFixed(3)+"        (need >=0.05)    -> "+(c2?"PASS":"FAIL"));
console.log("  [C3] pooled 95% lower bound:   "+b1.lo.toFixed(3)+"        (need >0)        -> "+(c3?"PASS":"FAIL"));
console.log("  [C4] adversarial median Delta: "+median(A1.Delta).toFixed(3)+"        (need >=0)       -> "+(c4?"PASS":"FAIL"));
console.log("  ----------------------------------------------------------------");
console.log("  VERDICT: "+(GO?"*** GO ***  (distributed advantage survives symmetry -> rebuild worth it)":"*** NO-GO ***  (advantage does not survive -> architecture/mechanism paper, path B)"));
console.log("  Negative control (lambda=0) pooled median Delta: "+ncMed.toFixed(3)+(ncFlag?"  !! >0.05 -> PAUSE: hidden asymmetry suspected":"  (<=0.05, ok)"));
console.log("=====================================================");
