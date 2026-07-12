#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// E4-v3 SCENARIOS — the distributed-vs-status-quo advantage anchored to gamma
// (the central's perception of diffuse harm) as three literature-grounded regimes,
// instead of one blended number. gamma is set LOW by default because the harm of
// ordinary public projects (a pitch, a road, a library, an aid program) is not
// evident: it is diffuse (Bastiat 1850, the unseen), unorganized (Olson 1965;
// Wilson 1973 client politics), illegible to the centre (Scott 1998), and
// under-reported (Latane & Darley 1968). The centre systematically OVERSTATES
// benefit (Flyvbjerg optimism bias / strategic misrepresentation) and even funds
// net-negative projects on purpose (Robinson & Torvik 2005, white elephants).
//   Scenario A  Normal politics (diffuse harm, client goods):  gamma in {0.0, 0.1}
//   Scenario B  Contested / salient externalities:             gamma in {0.25, 0.5}
//   Scenario C  Evident harm (institutional crisis, revolt):   gamma in {0.75, 1.0}
// Other axes swept over the same plausible box in every scenario.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function buildWorld({N,K,seed,mean,sd}){
  const rng=mulberry32(seed>>>0); const interested=Array.from({length:K},()=>[]); const cost=new Array(K);
  for(let j=0;j<K;j++){ cost[j]=1+9*rng(); const frac=0.1+0.6*rng(); for(let i=0;i<N;i++) if(rng()<frac) interested[j].push(gauss(rng)*sd+mean); }
  return {interested,cost,trueVal:interested.map(l=>l.reduce((a,v)=>a+v,0))};
}
function fund(scores,cost,P,gate){
  const order=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]); const ch=[]; let sp=0;
  for(const j of order){ if(scores[j]<=0) continue; if(gate&&gate[j]) continue; if(sp+cost[j]<=P){ch.push(j); sp+=cost[j];} } return ch;
}
const deliver=(ch,tv)=>ch.reduce((a,j)=>a+tv[j],0);
function cell({N,K,mean,sd,sigmaProxy,gamma,p,seeds}){
  let c=0,d=0,o=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd}); const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+sigmaProxy*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0), gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){let sum=0; for(const v of W.interested[j]) if(rd()<p) sum+=v; di[j]=sum; if(sum<=0)gate[j]=true;}
    o+=deliver(fund(W.trueVal,W.cost,P),W.trueVal); c+=deliver(fund(cen,W.cost,P),W.trueVal); d+=deliver(fund(di,W.cost,P,gate),W.trueVal);
  }
  return {c:c/seeds,d:d/seeds,o:o/seeds};
}
const q=(a,x)=>{const s=[...a].sort((u,v)=>u-v); return s[Math.min(s.length-1,Math.floor(x*s.length))];};
const N=3000,K=300,seeds=6;
const grid={mean:[0.0,0.01,0.02],sd:[1.0,2.0],noise:[1.0,1.5,2.0],p:[0.2,0.35,0.5]};
const scenarios=[
  ["A  Normal politics (diffuse harm / client goods)",[0.0,0.1]],
  ["B  Contested projects (salient externalities)   ",[0.25,0.5]],
  ["C  Evident harm (institutional crisis / revolt) ",[0.75,1.0]],
];
console.log("E4-v3 SCENARIOS — distributed vs status quo by gamma regime (deterministic, "+seeds+" seeds)\n");
console.log("Scenario                                            | status quo | distributed | advantage (dist/central)");
for(const [name,gammas] of scenarios){
  const df=[],cf=[],rat=[]; let harm=0,tot=0;
  for(const gamma of gammas) for(const mean of grid.mean) for(const sd of grid.sd) for(const noise of grid.noise) for(const p of grid.p){
    const r=cell({N,K,mean,sd,sigmaProxy:noise,gamma,p,seeds}); df.push(r.d/r.o); cf.push(r.c/r.o); tot++;
    if(r.c<0) harm++; if(r.c>0.05*r.o) rat.push(r.d/r.c);
  }
  const md=q(df,0.5), mc=q(cf,0.5);
  const rlo=rat.length?q(rat,0.25):NaN, rmd=rat.length?q(rat,0.5):NaN, rhi=rat.length?q(rat,0.75):NaN;
  const adv=rat.length?("+"+((rmd-1)*100).toFixed(0)+"% median ("+rmd.toFixed(2)+"x); IQR "+rlo.toFixed(2)+"-"+rhi.toFixed(2)+"x"):"n/a";
  console.log(name+"| "+(100*mc).toFixed(0).padStart(3)+"% oracle |  "+(100*md).toFixed(0).padStart(3)+"% oracle | "+adv);
  if(harm>0) console.log("     (status quo delivers NET-NEGATIVE value in "+harm+"/"+tot+" combos of this scenario -> advantage unbounded there)");
}
console.log("\nNote: the box conservatively spans world mean 0..+0.02 (neutral to mildly-positive projects),");
console.log("heterogeneity sigma 1-2, proxy noise 1-2, participation 0.2-0.5. Magnitudes are model-internal.");
