#!/usr/bin/env node
// E5 v2 / corrected-E4 — S/P value model ON E4's coverage world (research/e4e5-value-model-v2.md).
//
// REUSES E4-v4's coverage structure (it was already there, per the author): each project has an
// INTERESTED SET (a subset of citizens who value it), and the DISTRIBUTED is a participation sample
// in which the diffusely-harmed under-participate at rate beta (voice bias / coverage friction).
// The ONE thing v2 changes vs E4: the CENTRAL's objective. E4's central scored a harm-blind proxy
// of true value; v2's central maximizes P = CREDIT-CLAIMING (reach x visibility), structurally
// misaligned with social value S at level rho = corr(S,P) (Gilens-Page). Harm-blindness is retired
// to a secondary weight w on a value term; the random-noise term is gone.
//
// NEW vs E4's world: per-project QUALITY heterogeneity (projSpread) so projects genuinely differ in
// social value (E4 gave every project the same mean -> nothing for rho to bite on).
//
// central[j]  = (1-w)*creditScale*P[j] + w*harmBlindValue[j]        (w=0 pure agenda-capture; w=1 -> E4)
// distributed[j] = sum of PARTICIPATING interested (harmed at p*(1-beta))   (coverage, from E4)
// oracle[j]   = true social value S[j] = sum of interested valuations
// All scored on delivered TRUE S. Delivery: central f_weak, distributed f_ver (1.43x).
//
// Usage: node e5-sp-model.mjs [N] [K] [seeds] [--projSpread=] [--beta=] [--w=] [--eta=] [--mean=] [--sd=]

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function seedFor(a,b){ let h=(a>>>0); h=Math.imul(h^0x9e3779b9,0x85ebca6b); h^=(b>>>0); h=Math.imul(h^(h>>>13),0xc2b2ae35); return (h^(h>>>16))>>>0; }
function mkGauss(rng){ let s=null; return ()=>{ if(s!==null){const t=s;s=null;return t;} let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();const r=Math.sqrt(-2*Math.log(u)),a=2*Math.PI*v;s=r*Math.sin(a);return r*Math.cos(a);}; }

const PARAMS = {
  N: 5000, K: 500, seeds: 20, seedBase: 1000,   // seedBase: exploration used 1000; set e.g. 5000 for a HELD-OUT confirmation run
  mean: 0.40,          // consensual base quality per interested citizen (high -> net-neg share <1%)
  sd: 1.0,             // idiosyncratic spread of individual valuations around the project quality
  projSpread: 0.15,    // per-unit quality heterogeneity (small; kept modest so net-neg stays <1%)
  muF: -1.5, sigF: 1.2, // REACH: interested fraction = exp(muF + sigF*a), heavy-tailed -> value heterogeneity lives in REACH (stadium >> rural school), NOT in net-neg share
  sigP: 1.0,           // credit spread: P = exp(sigP * creditLatent), where creditLatent corr rho with the REACH latent (decoupled at rho<1 -> a high-reach project CAN be low-P: the invisible sewer)
  costHi: 10, budgetFrac: 1/3,
  p: 0.35, beta: 0.30, // distributed participation rate and voice bias (harmed under-participate) -- COVERAGE, from E4
  w: 0.0,              // central's weight on (harm-blind) VALUE vs credit P.  w=0 pure agenda-capture; w=1 -> E4
  eta: 0.1,            // harm-blindness of the value term (only matters if w>0)
  concentrate: 0,      // lumpiness gate regime: 0 = SPREAD (pessimistic); 1 = CONCENTRATE (Core v0 earmarked vouchers + 90-day recycle)
  byValue: 0,          // distributed funding order: 0 = value/cost (efficient); 1 = pure VALUE (atomized voucher-holders fund what they value, ignore cost)
  A: 20, kCat: 10,     // --cats 3-layer decomposition: number of categories and the top-k macro gate
  fWeak: 0.60, fVer: 0.86,
  RHOS: [1.0, 0.8, 0.6, 0.4, 0.2, 0.0],   // agenda alignment corr(S,P) sweep
};

function buildWorld(seed, rho){
  const {N,K,mean,sd,projSpread,costHi}=PARAMS;
  const rng=mulberry32(seedFor(seed, 999)); const g=mkGauss(rng);
  const interested=Array.from({length:K},()=>[]); const cost=new Float64Array(K);
  const S=new Float64Array(K), P=new Float64Array(K), cHarmBlind=new Float64Array(K), reachA=new Float64Array(K);
  const rc=Math.sqrt(Math.max(0,1-rho*rho)), eta=PARAMS.eta, {muF,sigF,sigP}=PARAMS;
  for(let j=0;j<K;j++){
    cost[j]=1+(costHi-1)*rng();
    const a=g();                                        // REACH latent (heavy-tailed magnitude): value heterogeneity lives here
    const frac=Math.min(0.9, Math.max(0.005, Math.exp(muF+sigF*a)));  // heavy-tailed interested fraction (stadium ~0.9 ... rural school ~0.01)
    const projQual=mean+projSpread*g();                 // per-unit social quality (high mean -> net-neg <1%)
    const cLat=rho*a+rc*g();                            // CREDIT latent, corr rho with the reach latent; decoupled at rho<1 (a big-reach project can be low-P: the invisible sewer)
    let reach=0, sSum=0, hb=0;
    for(let i=0;i<N;i++){ if(rng()<frac){ const v=projQual+sd*g(); interested[j].push(v); reach++; sSum+=v;
      hb += (v<0 ? eta*v : v); } }                       // central's harm-blind read of value (attenuate v<0 by eta)
    S[j]=sSum;                                           // true social value = reach x quality (heavy-tailed via reach, lopsided-positive)
    P[j]=Math.exp(sigP*cLat);                            // credit-claiming, DECOUPLED from reach at rho<1
    cHarmBlind[j]=hb; reachA[j]=reach;
  }
  return {interested,cost,S,P,cHarmBlind,reach:reachA};
}

function fund(score, cost, K, budget, gate, byValue){
  // byValue=false -> rank by value/cost (efficient, knapsack-greedy); true -> rank by pure VALUE
  // (what atomized voucher-holders do when they fund what they value most, ignoring cost-efficiency).
  const idx=Array.from({length:K},(_,j)=>j).sort((a,b)=> (byValue? score[b]-score[a] : score[b]/cost[b]-score[a]/cost[a]));
  const chosen=[]; let sp=0;
  for(const j of idx){ if(score[j]<=0) continue; if(gate&&gate[j]) continue; if(sp+cost[j]<=budget){chosen.push(j); sp+=cost[j];} }
  return chosen;
}
const deliver=(funded,S,f)=>{ let s=0; for(const j of funded) s+=S[j]; return s*f; };

function evalWorld(seed, rho, lumpiness=0){
  const {K,p,beta,w,fWeak,fVer,budgetFrac}=PARAMS;
  const W=buildWorld(seed,rho); const {interested,cost,S,P,cHarmBlind,reach}=W;
  let tot=0; for(let j=0;j<K;j++) tot+=cost[j]; const budget=tot*budgetFrac;
  const rd=mulberry32(seedFor(seed, 4242));
  // DISTRIBUTED: participation sample of the interested; the harmed (v<0) under-participate (coverage, E4)
  const dis=new Float64Array(K);
  for(let j=0;j<K;j++){ let sum=0; for(const v of interested[j]){ const pp = v<0 ? p*(1-beta) : p; if(rd()<pp) sum+=v; } dis[j]=sum; }
  // LUMPINESS THRESHOLD: the atomized distributed can only BUILD project j if its funder base can pool its cost.
  // Raising capacity ~ reach_j * omega (omega = budget per interested-slot). Gate j if reach*omega < L*cost.
  // The CENTRAL funds from a pooled budget -> NO per-project threshold. So the threshold hurts only the distributed's tail.
  let gate=null, gatedOracleVal=0;
  if(lumpiness>0){
    // omega = the funding a project draws PER interested citizen. Two regimes:
    //  - SPREAD (old, pessimistic): each voucher split across ALL a citizen's covered projects -> omega = budget/totReach.
    //  - CONCENTRATE (Core v0): earmarked vouchers + the 90-day return-and-reallocate rule let a beneficiary put their
    //    FULL voucher (budget/N) on a project they value -> omega = budget/N. This is the faithful Core-v0 upper bound:
    //    a project is unbuildable only if even its full funder base concentrating can't cover the cost.
    let totReach=0; for(let j=0;j<K;j++) totReach+=reach[j];
    const omega = PARAMS.concentrate ? budget/PARAMS.N : budget/(totReach||1);
    gate=new Array(K).fill(false);
    for(let j=0;j<K;j++) if(reach[j]*omega < lumpiness*cost[j]){ gate[j]=true; if(S[j]>0) gatedOracleVal+=S[j]; } }
  // CENTRAL: (1-w) credit P + w harm-blind value. creditScale puts P on the value scale (match mean magnitude).
  let mS=0,mP=0; for(let j=0;j<K;j++){ mS+=Math.abs(S[j]); mP+=Math.abs(P[j]); } const creditScale=mS/(mP||1);
  const cen=new Float64Array(K); for(let j=0;j<K;j++) cen[j]=(1-w)*creditScale*P[j] + w*cHarmBlind[j];
  const o=deliver(fund(S,cost,K,budget),S,1.0);                        // oracle: optimal (value/cost knapsack)
  const d=deliver(fund(dis,cost,K,budget,gate,PARAMS.byValue),S,fVer); // distributed: gated by threshold; funds by value or value/cost
  const c=deliver(fund(cen,cost,K,budget),S,fWeak);                    // central: pooled budget, no threshold
  let neg=0,gatedN=0; for(let j=0;j<K;j++){ if(S[j]<0) neg++; if(gate&&gate[j]) gatedN++; }
  return {o,d,c,negShare:neg/K,gatedN,gatedOracleVal,S,P};
}

// ---- 3-LAYER decomposition: macro (category gate) x allocation (project) x delivery ----
// Categories carry agenda-capture too: a category's credit catP is misaligned rho with its social
// value catS (whole self-serving categories -- 'governance reform' -- over valuable ones -- 'elderly
// care'). The central gates to top-k categories by catP; oracle/distributed by catS. macro factor =
// (3-layer ratio)/(2-layer ratio) isolates the category-exclusion contribution.
function evalCat(seed, rho, A, kCat){
  const W=buildWorld(seed,rho); const {interested,cost,S,P}=W; const K=PARAMS.K, per=Math.ceil(K/A);
  const cat=new Int32Array(K); for(let j=0;j<K;j++) cat[j]=Math.min(A-1,(j/per)|0);
  const catS=new Float64Array(A); for(let j=0;j<K;j++) catS[cat[j]]+=S[j];
  let m=0; for(let a=0;a<A;a++) m+=catS[a]; m/=A; let v=0; for(let a=0;a<A;a++) v+=(catS[a]-m)*(catS[a]-m); const sd=Math.sqrt(v/A)||1;
  const rg=mulberry32(seedFor(seed,555)); const g=mkGauss(rg); const rc=Math.sqrt(Math.max(0,1-rho*rho));
  const catP=new Float64Array(A); for(let a=0;a<A;a++) catP[a]=Math.exp(rho*((catS[a]-m)/sd)+rc*g());  // category credit, misaligned rho with category value
  const rd=mulberry32(seedFor(seed,4242)); const dis=new Float64Array(K);
  for(let j=0;j<K;j++){ let s=0; for(const vv of interested[j]){ const pp=vv<0?PARAMS.p*(1-PARAMS.beta):PARAMS.p; if(rd()<pp) s+=vv; } dis[j]=s; }
  const catDis=new Float64Array(A); for(let j=0;j<K;j++) catDis[cat[j]]+=dis[j];
  let tot=0; for(let j=0;j<K;j++) tot+=cost[j]; const budget=tot*PARAMS.budgetFrac; const bv=PARAMS.byValue;
  const topk=(score)=>{ const set=new Set(Array.from({length:A},(_,a)=>a).sort((x,y)=>score[y]-score[x]).slice(0,kCat)); const ga=new Array(K).fill(false); for(let j=0;j<K;j++) if(!set.has(cat[j])) ga[j]=true; return ga; };
  return {
    o2:deliver(fund(S,cost,K,budget,null,bv),S,1.0),  d2:deliver(fund(dis,cost,K,budget,null,bv),S,PARAMS.fVer),  c2:deliver(fund(P,cost,K,budget,null,bv),S,PARAMS.fWeak),
    o3:deliver(fund(S,cost,K,budget,topk(catS),bv),S,1.0), d3:deliver(fund(dis,cost,K,budget,topk(catDis),bv),S,PARAMS.fVer), c3:deliver(fund(P,cost,K,budget,topk(catP),bv),S,PARAMS.fWeak)
  };
}

function corr(x,y){ const n=x.length; let mx=0,my=0; for(let i=0;i<n;i++){mx+=x[i];my+=y[i];} mx/=n;my/=n;
  let sxy=0,sxx=0,syy=0; for(let i=0;i<n;i++){const dx=x[i]-mx,dy=y[i]-my; sxy+=dx*dy;sxx+=dx*dx;syy+=dy*dy;} return sxy/Math.sqrt(sxx*syy); }
function bootDelta(d,c,o,lo,hi,B=4000){ const n=d.length, rng=mulberry32(13579), rs=new Array(B);
  for(let b=0;b<B;b++){ let sd=0,sc=0,so=0; for(let i=0;i<n;i++){const k=(rng()*n)|0; sd+=d[k];sc+=c[k];so+=o[k];} rs[b]=(sd-sc)/so; }
  rs.sort((a,b)=>a-b); const pk=x=>rs[Math.max(0,Math.min(B-1,Math.round(x*(B-1))))]; return {lo:pk(lo),hi:pk(hi)}; }

const pos=process.argv.slice(2).filter(a=>!a.startsWith("--"));
if(pos[0]!==undefined) PARAMS.N=+pos[0]; if(pos[1]!==undefined) PARAMS.K=+pos[1]; if(pos[2]!==undefined) PARAMS.seeds=+pos[2];
for(const a of process.argv.slice(2)) if(a.startsWith("--")){ const [k,v]=a.slice(2).split("="); if(k in PARAMS && v!==undefined) PARAMS[k]=isNaN(+v)?v:+v; }

const t0=Date.now();
const f=x=>x.toFixed(2); const sum=a=>a.reduce((p,x)=>p+x,0);

// ---- TORNADO: robustness of the calibrated headline to each knob (one-at-a-time, at fixed rho) ----
if(process.argv.includes("--tornado")){
  const rho0=(PARAMS.rho!==undefined?PARAMS.rho:0.3);   // ~ corr(S,P)~0.2, mid calibrated band
  const run=()=>{ const R=Array.from({length:PARAMS.seeds},(_,i)=>PARAMS.seedBase+i).map(s=>evalWorld(s,rho0)); return sum(R.map(r=>r.d))/sum(R.map(r=>r.c)); };
  const base=run();
  console.log("TORNADO — headline ratio d/c robustness at fixed rho="+rho0+" (Core-v0 config), one knob at a time:");
  console.log("  baseline ratio = "+f(base)+"x\n");
  console.log("  knob                | low -> ratio | high -> ratio | grounding");
  const knobs=[
    ["beta (voice bias)",       "beta", 0.3, 0.5, "Verba-Schlozman-Brady"],
    ["mean (net-neg share)",    "mean", 0.30, 0.55, "0.30~7% neg .. 0.55~0% neg"],
    ["fVer (delivery, /0.60)",  "fVer", 0.78, 0.90, "band 1.3x-1.5x (Reinikka-Svensson/Olken)"],
    ["sigF (reach heavy-tail)", "sigF", 1.2, 1.8, "coverage/value spread"],
    ["w (harm-blind 2ndary)",   "w",    0.0, 0.3, "0=pure agenda .. 0.3=some value-caring"],
  ];
  const orig={}; for(const [,k] of knobs) orig[k]=PARAMS[k];
  for(const [label,k,lo,hi,note] of knobs){
    PARAMS[k]=lo; const rl=run(); PARAMS[k]=hi; const rh=run(); PARAMS[k]=orig[k];
    console.log("  "+label.padEnd(20)+"| "+lo.toString().padStart(4)+" -> "+f(rl)+"x  | "+hi.toString().padStart(4)+" -> "+f(rh)+"x  | "+note);
  }
  console.log("\n("+((Date.now()-t0)/1000).toFixed(1)+"s)  The headline is DOMINATED by corr(S,P) (the frontier axis, Gilens-Page). At fixed rho, the other knobs move it modestly -> robust.");
  process.exit(0);
}

// ---- LUMPINESS THRESHOLD SWEEP: does the invisible low-reach tail survive an atomized distributed? ----
if(process.argv.includes("--sweepL")){
  const rhoSweep=(PARAMS.rho!==undefined?PARAMS.rho:0.2);   // fix rho at a realistic captured-agenda point
  console.log("LUMPINESS SWEEP (atomized distributed can only build project j if reach*omega >= L*cost; central pooled, no threshold)");
  console.log("  N="+PARAMS.N+", K="+PARAMS.K+", seeds="+PARAMS.seeds+", rho="+rhoSweep+", beta="+PARAMS.beta+", mean="+PARAMS.mean+"\n");
  console.log("   L   | projects gated | oracle-value gated | dis %oracle |  Delta=(d-c)/o  | ratio d/c");
  for(const L of [0, 0.5, 1, 2, 4, 8, 16]){
    const R=Array.from({length:PARAMS.seeds},(_,i)=>PARAMS.seedBase+i).map(s=>evalWorld(s,rhoSweep,L));
    const d=R.map(r=>r.d), c=R.map(r=>r.c), o=R.map(r=>r.o);
    const Delta=(sum(d)-sum(c))/sum(o), ratio=sum(d)/sum(c), dOra=100*(sum(d)/PARAMS.fVer)/sum(o);
    const gN=sum(R.map(r=>r.gatedN))/R.length, gV=100*sum(R.map(r=>r.gatedOracleVal))/sum(o.map((x)=>x));  // gated oracle value as % of delivered oracle
    console.log("  "+L.toFixed(1).padStart(4)+" |   "+gN.toFixed(0).padStart(4)+"/"+PARAMS.K+"    |     "+gV.toFixed(1).padStart(5)+"%       |    "+dOra.toFixed(0).padStart(3)+"%     |  "+(Delta>=0?"+":"")+f(Delta)+"  |  "+f(ratio)+"x");
  }
  console.log("\n("+((Date.now()-t0)/1000).toFixed(1)+"s)  L=0 = no threshold. As L rises, low-reach projects can't pool their cost -> drop from the distributed.");
  console.log("  This is the RAW threshold problem, BEFORE the design's rescue layers (assurance contracts / matching-funds / default routing).");
  process.exit(0);
}

// ---- 3-LAYER DECOMPOSITION: macro (category) x allocation (project) x delivery ----
if(process.argv.includes("--cats")){
  const A=(PARAMS.A!==undefined?PARAMS.A:20), kCat=(PARAMS.kCat!==undefined?PARAMS.kCat:10);
  console.log("3-LAYER DECOMPOSITION (A="+A+" categories, top-"+kCat+" gate; byValue="+PARAMS.byValue+", concentrate n/a here)\n");
  console.log("  rho  | corr(S,P) | cen%oracle 2L | cen%oracle 3L |  macro   | allocation | delivery | 3-layer ratio");
  for(const rho of PARAMS.RHOS){
    const R=Array.from({length:PARAMS.seeds},(_,i)=>PARAMS.seedBase+i).map(s=>evalCat(s,rho,A,kCat));
    const S2=k=>sum(R.map(r=>r[k]));
    const r2=S2('d2')/S2('c2'), r3=S2('d3')/S2('c3'), deliv=PARAMS.fVer/PARAMS.fWeak;
    const macro=r3/r2, alloc=r2/deliv;
    const c2o=100*(S2('c2')/PARAMS.fWeak)/S2('o2'), c3o=100*(S2('c3')/PARAMS.fWeak)/S2('o3');
    console.log("  "+rho.toFixed(1)+"  |    "+"?".padStart(4)+"   |     "+c2o.toFixed(0).padStart(3)+"%      |     "+c3o.toFixed(0).padStart(3)+"%      |  "+f(macro)+"x  |   "+f(alloc)+"x   |  "+f(deliv)+"x  |  "+f(r3)+"x");
  }
  console.log("\n("+((Date.now()-t0)/1000).toFixed(1)+"s)  3-layer ratio = macro x allocation x delivery. macro = (3L ratio)/(2L ratio) = the category-exclusion contribution.");
  process.exit(0);
}

console.log("E5 v2 / corrected-E4 — central max P (credit), distributed max S via participation coverage (beta="+PARAMS.beta+"), oracle max S.");
console.log("  N="+PARAMS.N+", K="+PARAMS.K+", seeds="+PARAMS.seeds+", mean="+PARAMS.mean+", sd="+PARAMS.sd+", projSpread="+PARAMS.projSpread+", w(value weight)="+PARAMS.w+", delivery "+PARAMS.fWeak+"/"+PARAMS.fVer+" (1.43x)");
console.log("  rho=corr(S,P) agenda<->value misalignment. rho=1 & w=0 -> P~=S -> parity; w=1 -> E4 (harm-blind central).\n");
console.log("  rho  | corr(S,P) | net-neg% | cen %oracle | dis %oracle |  Delta=(d-c)/o [95% CI]  | ratio d/c");
for(const rho of PARAMS.RHOS){
  const R=Array.from({length:PARAMS.seeds},(_,i)=>PARAMS.seedBase+i).map(s=>evalWorld(s,rho));
  const d=R.map(r=>r.d), c=R.map(r=>r.c), o=R.map(r=>r.o);
  const Delta=(sum(d)-sum(c))/sum(o), ratio=sum(d)/sum(c);
  const cOra=100*(sum(c)/PARAMS.fWeak)/sum(o), dOra=100*(sum(d)/PARAMS.fVer)/sum(o);
  let SS=[],PP=[]; for(let i=0;i<Math.min(4,R.length);i++){ SS=SS.concat(Array.from(R[i].S)); PP=PP.concat(Array.from(R[i].P)); }
  const rSP=corr(SS,PP), neg=100*sum(R.map(r=>r.negShare))/R.length, b=bootDelta(d,c,o,0.025,0.975);
  console.log("  "+rho.toFixed(1)+"  |   "+rSP.toFixed(2).padStart(5)+"   |  "+neg.toFixed(1).padStart(4)+"%  |    "+cOra.toFixed(0).padStart(3)+"%     |    "+dOra.toFixed(0).padStart(3)+"%     |  "+((Delta>=0?"+":"")+f(Delta)+" ["+f(b.lo)+","+f(b.hi)+"]").padEnd(22)+" |  "+f(ratio)+"x");
}
console.log("\n("+((Date.now()-t0)/1000).toFixed(1)+"s)  dis %oracle<100 now reflects REAL coverage friction (beta="+PARAMS.beta+"): the swarm no longer = oracle.");
