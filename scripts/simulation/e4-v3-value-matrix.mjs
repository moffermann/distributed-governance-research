#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// E4-v3 — Value-matrix comparison (author's design).
// Deterministic (mulberry32). Replaces E4.
//
// World: N people, K projects. Sparse value matrix V: each project j has an
// "interested" set I_j (a large but proper subset of the N people, size varies);
// for i in I_j, V[i][j] ~ Normal(0,1) (a person intrinsically values OR dis-values
// a project); for i not in I_j, V[i][j] = 0 (indifferent). TRUE project value =
// column sum = sum over I_j of V[i][j] (can be net negative).
//
// Costs: C_j > 0 random. Budget P = (1/3) * sum(C).  Same P for both institutions.
//
// CENTRAL (status quo): sees a NOISY, DEMAND-BLIND proxy of every interested cell:
//   perceived_ij = V_ij + Normal(0, sigmaProxy); if perceived_ij < 0 -> *= gamma.
//   (gamma in [0,1] = how much anti-value it perceives; 0 = only demand, blind to harm.)
//   Perceived project value = sum over I_j. Funds greedily by perceived value/cost until P.
//
// DISTRIBUTED (Core v0): only a random SAMPLE S_j (participation p of I_j) reveal their
//   TRUE valuation (no noise: you know your own value). Sampled value = sum over S_j.
//   A project is fundable if sampled value > threshold (lambda * C_j). Funds greedily by
//   sampled value/cost until P.
//
// SCORE: for each funded set, sum the TRUE column value of the funded projects. Compare.
// ORACLE = fund greedily by TRUE value/cost (best achievable) for normalization.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}

function buildWorld({N,K,seed}){
  const rng=mulberry32(seed>>>0);
  const interested=Array.from({length:K},()=>[]);   // project -> [ {i, v} ]
  const cost=new Array(K);
  for(let j=0;j<K;j++){
    cost[j]=1+9*rng();                               // C_j in (1,10)
    const frac=0.1+0.6*rng();                        // this project interests 10-70% of people
    for(let i=0;i<N;i++) if(rng()<frac) interested[j].push({i,v:gauss(rng)}); // V_ij ~ N(0,1)
  }
  const trueVal=interested.map(list=>list.reduce((a,r)=>a+r.v,0)); // true column value
  return {rng,interested,cost,trueVal};
}

// greedy fund by score/cost until budget P; optional per-project minimum on `gate`
function fund(scores,cost,P,{gate=null}={}){
  const order=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  const chosen=[]; let spent=0;
  for(const j of order){
    if(gate && gate[j]) continue;                    // fails the fundability gate
    if(spent+cost[j]<=P){chosen.push(j); spent+=cost[j];}
  }
  return chosen;
}
function delivered(chosen,trueVal){return chosen.reduce((a,j)=>a+trueVal[j],0);}

function evaluate({N,K,sigmaProxy,gamma,p,lambda,seeds}){
  let cAcc=0,dAcc=0,oAcc=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s});
    const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rngC=mulberry32((3000+s)>>>0), rngD=mulberry32((4000+s)>>>0);
    // central: noisy, demand-blind perceived value over ALL interested
    const central=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const r of W.interested[j]){
      let per=r.v+sigmaProxy*gauss(rngC);
      if(per<0) per*=gamma;
      central[j]+=per;
    }
    // distributed: TRUE value over a random SAMPLE (participation p) of the interested
    const dist=new Array(K).fill(0);
    const gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){
      let sum=0;
      for(const r of W.interested[j]) if(rngD()<p) sum+=r.v;   // sampled participants reveal true value
      dist[j]=sum;
      if(sum<=lambda*W.cost[j]) gate[j]=true;                  // fails threshold (money+support requirement)
    }
    const oracle=fund(W.trueVal,W.cost,P);
    const cSel=fund(central,W.cost,P);
    const dSel=fund(dist,W.cost,P,{gate});
    oAcc+=delivered(oracle,W.trueVal);
    cAcc+=delivered(cSel,W.trueVal);
    dAcc+=delivered(dSel,W.trueVal);
  }
  return {central:cAcc/oAcc, dist:dAcc/oAcc}; // fraction of oracle-achievable true value
}

const N=3000,K=300,seeds=8,lambda=0.0;
const pct=x=>(100*x).toFixed(1)+'%';
console.log("E4-v3 — value-matrix comparison (deterministic, "+seeds+" seeds, N="+N+", K="+K+")");
console.log("value = fraction of oracle-achievable TRUE value delivered\n");

// (A) Central noise x demand-blindness gamma (participation p=0.3)
console.log("(A) Central (status quo) vs distributed, by proxy noise and demand-blindness gamma (p=0.3):");
console.log("  proxyNoise | gamma | central | distributed");
for(const sig of [0.5,1.5,3.0]) for(const g of [0.0,0.5,1.0]){
  const r=evaluate({N,K,sigmaProxy:sig,gamma:g,p:0.3,lambda,seeds});
  console.log("     "+sig.toFixed(1)+"     |  "+g.toFixed(1)+"  |  "+pct(r.central)+"  |   "+pct(r.dist));
}

// (B) Distributed under participation p (central fixed: noise 1.5, gamma 0)
console.log("\n(B) Distributed by participation p (central: noise=1.5, gamma=0 -> "+pct(evaluate({N,K,sigmaProxy:1.5,gamma:0,p:0.3,lambda,seeds}).central)+"):");
console.log("   p    | distributed");
for(const p of [0.05,0.1,0.3,0.6,1.0]){
  const r=evaluate({N,K,sigmaProxy:1.5,gamma:0,p,lambda,seeds});
  console.log("  "+p.toFixed(2)+"  |   "+pct(r.dist));
}
