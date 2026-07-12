#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// VERIFICATION of Reviewer-2's decisive counterfactual: does the ~1.7x headline
// survive if the DISTRIBUTED arm faces the SAME frictions the model attributes to
// the central? Central is held UNCHANGED. We add to the distributed side only:
//   (i) self-knowledge noise selfSd: citizen reveals v + N(0,selfSd) (they cited
//       manipulation/mis-judgement), and
//   (ii) biased participation: the diffusely-HARMED under-participate (Olson /
//       bystander applied symmetrically) — a citizen with v<0 participates with
//       prob p*harmedFactor instead of p. This makes the distributed sample
//       over-represent beneficiaries -> its estimate biases UP, like the central.
// Advantage = median over the Scenario-A box (gamma in {0,0.1}) of distributed/central.

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
function cell({N,K,mean,sd,sigmaProxy,gamma,p,selfSd,harmedFactor,seeds}){
  let c=0,d=0,o=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd}); const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+sigmaProxy*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0), gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){ let sum=0;
      for(const v of W.interested[j]){ const pp = v<0 ? p*harmedFactor : p;       // harmed under-participate
        if(rd()<pp) sum += v + (selfSd>0? selfSd*gauss(rd):0); }                   // reveal with self-knowledge noise
      di[j]=sum; if(sum<=0)gate[j]=true; }
    o+=deliver(fund(W.trueVal,W.cost,P),W.trueVal); c+=deliver(fund(cen,W.cost,P),W.trueVal); d+=deliver(fund(di,W.cost,P,gate),W.trueVal);
  }
  return {c:c/seeds,d:d/seeds,o:o/seeds};
}
const q=(a,x)=>{const s=[...a].sort((u,v)=>u-v); return s[Math.min(s.length-1,Math.floor(x*s.length))];};
const N=3000,K=300,seeds=6;
function medAdv(selfSd,harmedFactor){ const rat=[];
  for(const gamma of [0,0.1]) for(const mean of [0,0.01,0.02]) for(const sd of [1,2]) for(const noise of [1,1.5,2]) for(const p of [0.2,0.35,0.5]){
    const r=cell({N,K,mean,sd,sigmaProxy:noise,gamma,p,selfSd,harmedFactor,seeds}); if(r.c>0.05*r.o) rat.push(r.d/r.c); }
  return q(rat,0.5);
}
console.log("VERIFY Reviewer-2: distributed-vs-central median advantage over Scenario-A box (central UNCHANGED)\n");
console.log("  selfSd | harmed participation | median advantage");
for(const [ss,hf,lbl] of [[0,1.0,"published baseline"],[1.5,1.0,"+ self-knowledge noise 1.5"],[0,0.5,"+ harmed participate 0.5x"],[0,0.25,"+ harmed participate 0.25x"],[1.0,0.5,"+ both (selfSd 1.0, harmed 0.5x)"]]){
  console.log("   "+ss.toFixed(1)+"    |        "+hf.toFixed(2)+"          |   "+medAdv(ss,hf).toFixed(2)+"x    ("+lbl+")");
}
