#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// E4-v3 SENSITIVITY — does the result survive a non-Normal, negatively-loaded
// value distribution? Same mechanics as e4-v3-value-matrix.mjs; the ONLY change
// is the shape of V_ij. We separate two effects cleanly:
//   (i)  SKEW/shape  : Normal (symmetric) vs Beta(a,b) (right-skewed => a mass of
//        mildly-harmed people + a thin tail of enthusiasts). Every distribution is
//        standardized to sd=1 so the proxy noise is comparable across rows.
//   (ii) MEAN shift  : mShift moves the whole world's mean below 0 (most projects
//        net-negative) WITHOUT changing the shape. Isolates "the world is worse"
//        from "the world is skewed".
// The zero point is meaningful (benefit vs harm), so we never re-center to 0.
//
// Why this is the decisive stress test: the demand-blind central (gamma=0) zeroes
// out the negatives it perceives. Under a symmetric Normal that discards ~half the
// signal; under a negatively-loaded Beta it discards the DOMINANT mass and funds
// off the enthusiast tail alone -> it should fund net-harmful projects. The
// distributed arm sees TRUE value (incl. the negatives) from its sample, so it
// should reject them. Prediction: the distributed advantage GROWS as the world
// loads negative, and central true-value-delivered can go NEGATIVE (active harm).

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
// Marsaglia-Tsang gamma, then Beta = ga/(ga+gb) — deterministic on the same rng.
function gammaSample(rng,a){
  if(a<1) return gammaSample(rng,a+1)*Math.pow(rng()||1e-12,1/a);
  const d=a-1/3, c=1/Math.sqrt(9*d);
  while(true){
    let x,v; do{x=gauss(rng); v=1+c*x;}while(v<=0);
    v=v*v*v; const u=rng();
    if(u<1-0.0331*x*x*x*x) return d*v;
    if(Math.log(u||1e-12)<0.5*x*x+d*(1-v+Math.log(v))) return d*v;
  }
}
// value spec -> standardized (sd 1) draw, then + mShift. kind: 'normal' | {a,b}
function makeSampler(spec,mShift){
  if(spec==='normal') return rng=>gauss(rng)+mShift;
  const {a,b}=spec, m=a/(a+b), sd=Math.sqrt(a*b/((a+b)*(a+b)*(a+b+1)));
  return rng=>{const ga=gammaSample(rng,a), gb=gammaSample(rng,b); return (ga/(ga+gb)-m)/sd+mShift;};
}

function buildWorld({N,K,seed,sampleV}){
  const rng=mulberry32(seed>>>0);
  const interested=Array.from({length:K},()=>[]);
  const cost=new Array(K);
  let cellSum=0,cellN=0,cellSq=0;
  for(let j=0;j<K;j++){
    cost[j]=1+9*rng();
    const frac=0.1+0.6*rng();
    for(let i=0;i<N;i++) if(rng()<frac){const v=sampleV(rng); interested[j].push({i,v}); cellSum+=v; cellSq+=v*v; cellN++;}
  }
  const trueVal=interested.map(list=>list.reduce((a,r)=>a+r.v,0));
  const posShare=trueVal.filter(v=>v>0).length/K;
  return {interested,cost,trueVal,cellMean:cellSum/cellN,cellSd:Math.sqrt(cellSq/cellN-(cellSum/cellN)**2),posShare};
}

// greedy by score/cost; skip score<=0 (never fund what you perceive as worthless);
// optional gate (distributed threshold). Stops at budget P.
function fund(scores,cost,P,{gate=null}={}){
  const order=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  const chosen=[]; let spent=0;
  for(const j of order){
    if(scores[j]<=0) continue;
    if(gate && gate[j]) continue;
    if(spent+cost[j]<=P){chosen.push(j); spent+=cost[j];}
  }
  return chosen;
}
const deliver=(chosen,trueVal)=>chosen.reduce((a,j)=>a+trueVal[j],0);

function evaluate({N,K,spec,mShift,sigmaProxy,gamma,p,lambda,seeds}){
  let cAcc=0,dAcc=0,oAcc=0,cAbs=0,dAbs=0,oAbs=0,meanAcc=0,posAcc=0;
  for(let s=0;s<seeds;s++){
    const sampleV=makeSampler(spec,mShift);
    const W=buildWorld({N,K,seed:2000+s,sampleV});
    const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rngC=mulberry32((3000+s)>>>0), rngD=mulberry32((4000+s)>>>0);
    const central=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const r of W.interested[j]){let per=r.v+sigmaProxy*gauss(rngC); if(per<0) per*=gamma; central[j]+=per;}
    const dist=new Array(K).fill(0), gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){let sum=0; for(const r of W.interested[j]) if(rngD()<p) sum+=r.v; dist[j]=sum; if(sum<=lambda*W.cost[j]) gate[j]=true;}
    const oracle=fund(W.trueVal,W.cost,P), cSel=fund(central,W.cost,P), dSel=fund(dist,W.cost,P,{gate});
    const o=deliver(oracle,W.trueVal), c=deliver(cSel,W.trueVal), d=deliver(dSel,W.trueVal);
    oAbs+=o; cAbs+=c; dAbs+=d; oAcc+=o; cAcc+=c; dAcc+=d; meanAcc+=W.cellMean; posAcc+=W.posShare;
  }
  return {central:cAcc/oAcc, dist:dAcc/oAcc, oAbs:oAbs/seeds, cAbs:cAbs/seeds, dAbs:dAbs/seeds,
          worldMean:meanAcc/seeds, posShare:posAcc/seeds};
}

const N=3000,K=300,seeds=8,lambda=0.0,sig=1.5,gam=0,p=0.3;
const pct=x=>(100*x).toFixed(0)+'%';
const ratio=(x,o)=>Math.abs(o)<1e-6?" n/a":(100*x/o).toFixed(0)+"%";
const f0=x=>x.toFixed(0);
console.log("E4-v3 SENSITIVITY to the value distribution (deterministic, "+seeds+" seeds, N="+N+", K="+K+")");
console.log("central: proxy noise=1.5, gamma=0 (demand-blind) | distributed: p=0.3\n");

// (1) SHAPE at cell-mean 0: does the individual-value distribution shape matter? (CLT test)
console.log("(1) SHAPE of individual value at cell-mean 0 (symmetric world). Does the shape matter?");
console.log("  shape                 | %proj net-positive | central | distributed  (% of oracle)");
for(const [name,spec] of [["Normal (symmetric)  ",'normal'],["Beta(2,5) right-skew",{a:2,b:5}],["Beta(2,10) strong RS",{a:2,b:10}],["Beta(5,2) LEFT-skew ",{a:5,b:2}]]){
  const r=evaluate({N,K,spec,mShift:0,sigmaProxy:sig,gamma:gam,p,lambda,seeds});
  console.log("  "+name+"  |       "+pct(r.posShare).padStart(4)+"          |  "+ratio(r.cAbs,r.oAbs).padStart(5)+"  |   "+ratio(r.dAbs,r.oAbs));
}

// (2) THE REAL KNOB: cell mean (is the typical citizen net-helped or net-harmed?). Absolute true value.
console.log("\n(2) NEGATIVE LOADING via cell mean (Normal shape). ABSOLUTE true value delivered (neg = active harm):");
console.log("  cellMean | %proj net-positive |  oracle | central | distributed");
for(const mS of [0.02,0.01,0.0,-0.01,-0.02,-0.04]){
  const r=evaluate({N,K,spec:'normal',mShift:mS,sigmaProxy:sig,gamma:gam,p,lambda,seeds});
  console.log("   "+mS.toFixed(2).padStart(5)+"  |       "+pct(r.posShare).padStart(4)+"          |  "+f0(r.oAbs).padStart(5)+"  |  "+f0(r.cAbs).padStart(6)+" |  "+f0(r.dAbs).padStart(5));
}

// (3) Same negative-loading sweep, Beta(2,5) shape — confirm the shape does not change the story
console.log("\n(3) Same sweep with Beta(2,5) right-skew shape (confirms shape-invariance):");
console.log("  cellMean | %proj net-positive |  oracle | central | distributed");
for(const mS of [0.02,0.01,0.0,-0.01,-0.02,-0.04]){
  const r=evaluate({N,K,spec:{a:2,b:5},mShift:mS,sigmaProxy:sig,gamma:gam,p,lambda,seeds});
  console.log("   "+mS.toFixed(2).padStart(5)+"  |       "+pct(r.posShare).padStart(4)+"          |  "+f0(r.oAbs).padStart(5)+"  |  "+f0(r.cAbs).padStart(6)+" |  "+f0(r.dAbs).padStart(5));
}

// (4) Does seeing harm (gamma->1) rescue the central in a mildly-negative world?
console.log("\n(4) gamma sensitivity in a mildly negative world (Beta(2,5), cellMean -0.02): does perceiving harm save the central?");
console.log("  gamma |  oracle | central | distributed");
for(const g of [0.0,0.5,1.0]){
  const r=evaluate({N,K,spec:{a:2,b:5},mShift:-0.02,sigmaProxy:sig,gamma:g,p,lambda,seeds});
  console.log("   "+g.toFixed(1)+"  |  "+f0(r.oAbs).padStart(5)+"  |  "+f0(r.cAbs).padStart(6)+" |  "+f0(r.dAbs).padStart(5));
}
