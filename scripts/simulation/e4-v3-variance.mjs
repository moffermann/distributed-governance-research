#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// E4-v3 SENSITIVITY to the VARIANCE (heterogeneity) of individual valuations.
// Same mechanics as e4-v3-value-matrix.mjs. After the CLT result (shape is
// irrelevant), the two surviving moments are the cell MEAN (done: negative
// loading) and the cell SD sigma_V (done here).
//
// KEY subtlety — scale invariance: multiplying ALL of {value, mean, proxy noise}
// by a constant k rescales every score by k, leaves all rankings/funded sets
// unchanged, and leaves every ratio-to-oracle IDENTICAL. So the ABSOLUTE sigma_V
// is meaningless; only sigma_V RELATIVE to the cell mean (the heterogeneity /
// coefficient of variation) matters. Table (0) demonstrates the invariance;
// tables (1)-(2) sweep the real knob with proxy noise held RELATIVE to sigma_V
// (constant signal-to-noise), so the sweep isolates heterogeneity from noise.
//
// Mechanism under test: as individuals disagree more (sigma_V up, more genuine
// disvaluers around the mean), the demand-blind central (gamma=0) zeroes ever
// more true harm -> its cost of harm-blindness should GROW. The distributed sees
// the true negatives from its sample -> should stay robust. gamma=1 (central
// perceives harm) isolates the harm-blindness cost from proxy noise.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}

// value = gauss * sd + mean   (Normal; shape shown irrelevant by the CLT test)
function buildWorld({N,K,seed,mean,sd}){
  const rng=mulberry32(seed>>>0);
  const interested=Array.from({length:K},()=>[]);
  const cost=new Array(K);
  let neg=0,cnt=0;
  for(let j=0;j<K;j++){
    cost[j]=1+9*rng();
    const frac=0.1+0.6*rng();
    for(let i=0;i<N;i++) if(rng()<frac){const v=gauss(rng)*sd+mean; interested[j].push({i,v}); if(v<0)neg++; cnt++;}
  }
  const trueVal=interested.map(list=>list.reduce((a,r)=>a+r.v,0));
  return {interested,cost,trueVal,disvaluerShare:neg/cnt,posShare:trueVal.filter(v=>v>0).length/K};
}
function fund(scores,cost,P,{gate=null}={}){
  const order=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  const chosen=[]; let spent=0;
  for(const j of order){ if(scores[j]<=0) continue; if(gate&&gate[j]) continue; if(spent+cost[j]<=P){chosen.push(j); spent+=cost[j];} }
  return chosen;
}
const deliver=(chosen,trueVal)=>chosen.reduce((a,j)=>a+trueVal[j],0);

function evaluate({N,K,mean,sd,sigmaProxy,gamma,p,lambda,seeds}){
  let cAcc=0,dAcc=0,oAcc=0,disAcc=0,posAcc=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd});
    const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rngC=mulberry32((3000+s)>>>0), rngD=mulberry32((4000+s)>>>0);
    const central=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const r of W.interested[j]){let per=r.v+sigmaProxy*gauss(rngC); if(per<0) per*=gamma; central[j]+=per;}
    const dist=new Array(K).fill(0), gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){let sum=0; for(const r of W.interested[j]) if(rngD()<p) sum+=r.v; dist[j]=sum; if(sum<=lambda*W.cost[j]) gate[j]=true;}
    oAcc+=deliver(fund(W.trueVal,W.cost,P),W.trueVal);
    cAcc+=deliver(fund(central,W.cost,P),W.trueVal);
    dAcc+=deliver(fund(dist,W.cost,P,{gate}),W.trueVal);
    disAcc+=W.disvaluerShare; posAcc+=W.posShare;
  }
  return {oAbs:oAcc/seeds,cAbs:cAcc/seeds,dAbs:dAcc/seeds,disvaluer:disAcc/seeds,posShare:posAcc/seeds};
}

const N=3000,K=300,seeds=8,lambda=0.0,p=0.3;
const pct=x=>(100*x).toFixed(0)+'%';
const ratio=(x,o)=>Math.abs(o)<1e-6?" n/a":(100*x/o).toFixed(0)+"%";
const f0=x=>x.toFixed(0);
console.log("E4-v3 VARIANCE / heterogeneity sensitivity (deterministic, "+seeds+" seeds, N="+N+", K="+K+")\n");

// (0) SCALE INVARIANCE: scale value mean, sd AND proxy noise by k -> ratios identical.
console.log("(0) Scale invariance — scale {mean, sd, noise} by k together (gamma=0, p=0.3):");
console.log("     k   | central (% oracle) | distributed (% oracle)   [should be constant]");
for(const k of [0.5,1.0,2.0,4.0]){
  const r=evaluate({N,K,mean:0.02*k,sd:1.0*k,sigmaProxy:1.5*k,gamma:0,p,lambda,seeds});
  console.log("    "+k.toFixed(1).padStart(3)+"  |        "+ratio(r.cAbs,r.oAbs).padStart(5)+"       |        "+ratio(r.dAbs,r.oAbs));
}

// (1) THE REAL KNOB: heterogeneity sigma_V at fixed mildly-positive mean (0.02),
//     proxy noise RELATIVE (1.0 * sigma_V, constant S/N). Central blind vs seeing.
console.log("\n(1) Heterogeneity sweep sigma_V (mean 0.02, relative proxy noise = 1.0*sigma_V, p=0.3):");
console.log("  sigma_V | %disvaluers | %proj net-pos | oracle | central gamma=0 | central gamma=1 | distributed");
for(const sd of [0.5,1.0,2.0,4.0,8.0]){
  const b=evaluate({N,K,mean:0.02,sd,sigmaProxy:1.0*sd,gamma:0,p,lambda,seeds});
  const g=evaluate({N,K,mean:0.02,sd,sigmaProxy:1.0*sd,gamma:1,p,lambda,seeds});
  console.log("   "+sd.toFixed(1).padStart(4)+"   |     "+pct(b.disvaluer).padStart(4)+"    |     "+pct(b.posShare).padStart(4)+"      |  "+f0(b.oAbs).padStart(5)+" |  "+ratio(b.cAbs,b.oAbs).padStart(6)+"        |  "+ratio(g.cAbs,g.oAbs).padStart(6)+"        |  "+ratio(b.dAbs,b.oAbs));
}

// (2) Robustness under ABSOLUTE proxy noise (fixed 1.5) — is the finding a noise artifact?
console.log("\n(2) Same heterogeneity sweep but ABSOLUTE proxy noise = 1.5 (gamma=0, p=0.3):");
console.log("  sigma_V | %proj net-pos | oracle | central (%oracle) | distributed (%oracle)");
for(const sd of [0.5,1.0,2.0,4.0,8.0]){
  const r=evaluate({N,K,mean:0.02,sd,sigmaProxy:1.5,gamma:0,p,lambda,seeds});
  console.log("   "+sd.toFixed(1).padStart(4)+"   |     "+pct(r.posShare).padStart(4)+"      |  "+f0(r.oAbs).padStart(5)+" |     "+ratio(r.cAbs,r.oAbs).padStart(6)+"        |     "+ratio(r.dAbs,r.oAbs));
}
