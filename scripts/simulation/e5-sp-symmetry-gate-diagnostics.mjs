#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// SYMMETRY-GATE DIAGNOSTICS (post-hoc; does NOT reopen the frozen gate).
// Two integrity checks Codex requested after the NO-GO verdict:
//   (1) WORLD-CLUSTER BOOTSTRAP of the pooled primary-domain CI. The gate's pooled CI treated the 18
//       correlated cells (same 100 worlds) as independent -> artificially narrow. Here the resample unit
//       is the WORLD (each world contributes to all 18 cells), which is the honest interval.
//   (2) APPRAISAL-ALLOCATION diagnostic: is the adversarial>baseline advantage a genuine even-bandwidth
//       effect, or a bug? Compare central appraisal RMSE by reach decile under EVEN vs REACH-PROPORTIONAL
//       allocation, and separate the p / beta / tau contributions to the advantage.
// Frozen world params + gate mechanics are reused verbatim; only the central allocation scheme varies.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function seedFor(a,b){ let h=(a>>>0); h=Math.imul(h^0x9e3779b9,0x85ebca6b); h^=(b>>>0); h=Math.imul(h^(h>>>13),0xc2b2ae35); return (h^(h>>>16))>>>0; }
function mkGauss(rng){ let s=null; return ()=>{ if(s!==null){const t=s;s=null;return t;} let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();const r=Math.sqrt(-2*Math.log(u)),a=2*Math.PI*v;s=r*Math.sin(a);return r*Math.cos(a);}; }
const sum=a=>a.reduce((p,x)=>p+x,0);
const mean=a=>a.length? sum(a)/a.length : 0;
function median(a){ const b=[...a].sort((x,y)=>x-y); const n=b.length; if(!n) return 0; return n%2? b[(n-1)/2] : (b[n/2-1]+b[n/2])/2; }
function zscore(a){ const m=mean(a); let s=0; for(const x of a) s+=(x-m)*(x-m); s=Math.sqrt(s/(a.length||1))||1; return a.map(x=>(x-m)/s); }

const WP={ N:5000, K:500, mean:0.27, sd:1.0, projSpread:0.15, costHi:10, muF:-4, sigF:1.5, sigP:1.0, budgetFrac:1/3 };
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
function greedy(score, eligible, cost, K, budget){
  const idx=Array.from({length:K},(_,j)=>j).filter(j=>eligible[j]).sort((a,b)=>score[b]-score[a]);
  const chosen=[]; let sp=0; for(const j of idx){ if(sp+cost[j]<=budget){ chosen.push(j); sp+=cost[j]; } } return chosen;
}
// eval one world; centralAlloc in {'even','propreach'}. Returns D,C,O and per-project central appraisal error.
function evalWorld(seed, rho, lambda, h, p, beta, tau, centralAlloc){
  const {K,budgetFrac}=WP;
  const W=buildWorld(seed,rho); const {interested,cost,S,P,reach}=W;
  let tot=0; for(let j=0;j<K;j++) tot+=cost[j]; const budget=tot*budgetFrac;
  const net=new Float64Array(K); for(let j=0;j<K;j++) net[j]=S[j]-h*cost[j];
  const rd=mulberry32(seedFor(seed, 4242)); const gd=mkGauss(mulberry32(seedFor(seed, 7777)));
  // distributed
  const scoreD=new Float64Array(K), eligD=new Array(K).fill(false); let expReports=0;
  for(let j=0;j<K;j++){ let sumR=0;
    for(const v of interested[j]){ const pp=v<0?p*(1-beta):p; expReports+=pp; if(rd()<pp) sumR+=v+tau*gd(); }
    const hatS=sumR/p; const hn=hatS-h*cost[j]; scoreD[j]=hn/cost[j]; eligD[j]=hn>0; }
  // central appraisal budget = expected distributed reports; allocated EVEN or PROP-REACH
  const totReach=sum(Array.from(reach))||1;
  const hatSC=new Float64Array(K), eligC=new Array(K).fill(false), vpc=new Float64Array(K), cpc=new Float64Array(K);
  for(let j=0;j<K;j++){
    const list=interested[j];
    const mC = centralAlloc==='propreach' ? Math.max(1, Math.round(expReports*reach[j]/totReach))
                                           : Math.max(1, Math.round(expReports/K));
    let obs=0; if(list.length>0){ for(let s=0;s<mC;s++){ const v=list[(rd()*list.length)|0]; obs+=v+tau*gd(); } obs/=mC; }
    const hS=reach[j]*obs; hatSC[j]=hS; const hn=hS-h*cost[j]; eligC[j]=hn>0; vpc[j]=hn/cost[j]; cpc[j]=P[j]/cost[j];
  }
  const z1=zscore(Array.from(vpc)), z2=zscore(Array.from(cpc));
  const scoreC=new Float64Array(K); for(let j=0;j<K;j++) scoreC[j]=(1-lambda)*z1[j]+lambda*z2[j];
  const scoreO=new Float64Array(K), eligO=new Array(K).fill(false);
  for(let j=0;j<K;j++){ scoreO[j]=net[j]/cost[j]; eligO[j]=net[j]>0; }
  const val=set=>{ let s=0; for(const j of set) s+=net[j]; return s; };
  const D=val(greedy(scoreD,eligD,cost,K,budget)), C=val(greedy(scoreC,eligC,cost,K,budget)), O=val(greedy(scoreO,eligO,cost,K,budget));
  return {D,C,O,reach,S,hatSC};
}

const SEEDBASE=20260710, WORLDS=100;
const LAMS=[0.1,0.2,0.3], RHOS=[0,0.5], HS=[1.5,2.5,4];
const BASE={p:0.35,beta:0.30,tau:0.5}, ADV={p:0.15,beta:0.60,tau:1.0};

// ---------- (1) WORLD-CLUSTER BOOTSTRAP over the 18 primary baseline cells ----------
// per-world aggregated sums over the 18 cells:
const wD=new Array(WORLDS).fill(0), wC=new Array(WORLDS).fill(0), wO=new Array(WORLDS).fill(0);
for(let i=0;i<WORLDS;i++){ for(const lam of LAMS) for(const rho of RHOS) for(const h of HS){
  const r=evalWorld(SEEDBASE+i,rho,lam,h,BASE.p,BASE.beta,BASE.tau,'even'); wD[i]+=r.D; wC[i]+=r.C; wO[i]+=r.O; } }
function clusterBoot(wD,wC,wO,B=8000){ const n=wD.length, rng=mulberry32(20260710), rs=new Array(B);
  for(let b=0;b<B;b++){ let sD=0,sC=0,sO=0; for(let i=0;i<n;i++){ const k=(rng()*n)|0; sD+=wD[k]; sC+=wC[k]; sO+=wO[k]; } rs[b]=(sD-sC)/sO; }
  rs.sort((a,b)=>a-b); const pk=x=>rs[Math.max(0,Math.min(B-1,Math.round(x*(B-1))))]; return {lo:pk(0.025),hi:pk(0.975),mid:(sum(wD)-sum(wC))/sum(wO)}; }
const cb=clusterBoot(wD,wC,wO);
console.log("=== (1) WORLD-CLUSTER BOOTSTRAP (primary domain, 18 baseline cells, resample unit = world) ===");
console.log("  pooled Delta = "+cb.mid.toFixed(4)+"   world-cluster 95% CI = ["+cb.lo.toFixed(4)+", "+cb.hi.toFixed(4)+"]");
console.log("  (frozen-gate naive CI was ~[0.025,0.025]; the cluster CI is the honest, wider interval. Sign unchanged.)\n");

// ---------- (2a) APPRAISAL RMSE by reach decile: EVEN vs PROP-REACH ----------
function rmseByDecile(regime, alloc){
  const recs=[]; // {reach, err}
  for(let i=0;i<WORLDS;i++){ const r=evalWorld(SEEDBASE+i,0.5,0.2,2.5,regime.p,regime.beta,regime.tau,alloc);
    for(let j=0;j<WP.K;j++) recs.push({reach:r.reach[j], err:r.hatSC[j]-r.S[j]}); }
  recs.sort((a,b)=>a.reach-b.reach); const n=recs.length, out=[];
  for(let d=0;d<10;d++){ const lo=Math.floor(d*n/10), hi=Math.floor((d+1)*n/10); let se=0,rr=0;
    for(let k=lo;k<hi;k++){ se+=recs[k].err*recs[k].err; rr+=recs[k].reach; }
    out.push({rmse:Math.sqrt(se/(hi-lo)), meanReach:rr/(hi-lo)}); }
  return out;
}
console.log("=== (2a) CENTRAL APPRAISAL RMSE (hatS_C - S) by reach decile ===");
for(const [rn,rg] of [["BASE",BASE],["ADV",ADV]]){
  const ev=rmseByDecile(rg,'even'), pr=rmseByDecile(rg,'propreach');
  console.log("  "+rn+" regime — decile(meanReach):  RMSE_even -> RMSE_propreach");
  for(let d=0;d<10;d++) console.log("    D"+(d+1)+" (reach~"+ev[d].meanReach.toFixed(0).padStart(4)+"):  "+ev[d].rmse.toFixed(1).padStart(7)+"  -> "+pr[d].rmse.toFixed(1).padStart(7));
}
console.log("");

// ---------- (2b) SEPARATE p / beta / tau contributions to the advantage ----------
function pooledMedian(regime){ const Delta=[];
  for(const lam of LAMS) for(const rho of RHOS) for(const h of HS) for(let i=0;i<WORLDS;i++){
    const r=evalWorld(SEEDBASE+i,rho,lam,h,regime.p,regime.beta,regime.tau,'even'); Delta.push((r.D-r.C)/r.O); }
  return median(Delta); }
console.log("=== (2b) One-at-a-time move from BASE -> ADV (pooled median Delta, primary domain) ===");
console.log("  baseline (p=.35,beta=.30,tau=.5):        "+pooledMedian(BASE).toFixed(4));
console.log("  +p only  (p=.15):                        "+pooledMedian({p:0.15,beta:0.30,tau:0.5}).toFixed(4));
console.log("  +beta only (beta=.60):                   "+pooledMedian({p:0.35,beta:0.60,tau:0.5}).toFixed(4));
console.log("  +tau only (tau=1.0):                     "+pooledMedian({p:0.35,beta:0.30,tau:1.0}).toFixed(4));
console.log("  full adversarial (p=.15,beta=.6,tau=1):  "+pooledMedian(ADV).toFixed(4));
console.log("\n(interpretation: if the jump is driven by p/tau via high-reach appraisal noise, prop-reach allocation should shrink RMSE on the top deciles and the adversarial gap.)");
