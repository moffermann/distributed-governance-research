#!/usr/bin/env node
// E4-v3 HEADLINE RANGE — how much better is distributed allocation than the
// status-quo central, across a DEFENSIBLE parameter box (not a cherry-picked
// corner). Reports the full distribution of the advantage so the abstract can
// carry an honest RANGE, and states where the status quo turns net-harmful.
//
// The box (each axis a declared, defensible interval; we sweep the whole grid):
//   world mean   cellMean in {0.0, 0.01, 0.02}   (neutral to mildly-positive public projects)
//   heterogeneity sigma_V in {1.0, 2.0}           (moderate/high dispersion = the Hayek/subjective regime)
//   central harm-blindness gamma in {0.0, 0.25, 0.5}  (Olson axis: fully to half demand-blind)
//   central proxy noise in {1.0, 1.5, 2.0}        (moderate to high)
//   distributed participation p in {0.2, 0.35, 0.5}  (a fraction of the interested show up)
// Metric per cell: true value delivered by distributed vs by central (both scored on
// the TRUE value of what each one funds), and each as a fraction of the oracle.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function buildWorld({N,K,seed,mean,sd}){
  const rng=mulberry32(seed>>>0);
  const interested=Array.from({length:K},()=>[]); const cost=new Array(K);
  for(let j=0;j<K;j++){ cost[j]=1+9*rng(); const frac=0.1+0.6*rng();
    for(let i=0;i<N;i++) if(rng()<frac) interested[j].push(gauss(rng)*sd+mean); }
  const trueVal=interested.map(l=>l.reduce((a,v)=>a+v,0));
  return {interested,cost,trueVal};
}
function fund(scores,cost,P,gate){
  const order=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  const ch=[]; let sp=0;
  for(const j of order){ if(scores[j]<=0) continue; if(gate&&gate[j]) continue; if(sp+cost[j]<=P){ch.push(j); sp+=cost[j];} }
  return ch;
}
const deliver=(ch,tv)=>ch.reduce((a,j)=>a+tv[j],0);
function cell({N,K,mean,sd,sigmaProxy,gamma,p,seeds}){
  let c=0,d=0,o=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd});
    const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+sigmaProxy*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0), gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){let sum=0; for(const v of W.interested[j]) if(rd()<p) sum+=v; di[j]=sum; if(sum<=0)gate[j]=true;}
    o+=deliver(fund(W.trueVal,W.cost,P),W.trueVal);
    c+=deliver(fund(cen,W.cost,P),W.trueVal);
    d+=deliver(fund(di,W.cost,P,gate),W.trueVal);
  }
  return {c:c/seeds,d:d/seeds,o:o/seeds};
}

const N=3000,K=300,seeds=6;
const box={mean:[0.0,0.01,0.02],sd:[1.0,2.0],gamma:[0.0,0.25,0.5],noise:[1.0,1.5,2.0],p:[0.2,0.35,0.5]};
const rows=[];
for(const mean of box.mean) for(const sd of box.sd) for(const gamma of box.gamma)
  for(const noise of box.noise) for(const p of box.p){
    const r=cell({N,K,mean,sd,sigmaProxy:noise,gamma,p,seeds});
    rows.push({mean,sd,gamma,noise,p,...r,cf:r.c/r.o,df:r.d/r.o});
  }

const q=(a,x)=>{const s=[...a].sort((u,v)=>u-v); return s[Math.min(s.length-1,Math.floor(x*s.length))];};
const cf=rows.map(r=>r.cf), df=rows.map(r=>r.df);
const harm=rows.filter(r=>r.c<0).length, total=rows.length;
// advantage ratio distributed/central where central delivers positive value
const posC=rows.filter(r=>r.c>0.05*r.o);
const rat=posC.map(r=>r.d/r.c);
const pctv=x=>(100*x).toFixed(0)+'%';

console.log("E4-v3 HEADLINE RANGE over a declared defensible box ("+total+" parameter combos, "+seeds+" seeds each)\n");
console.log("Distributed delivered value (% of oracle-achievable):  min "+pctv(q(df,0))+"  median "+pctv(q(df,0.5))+"  max "+pctv(q(df,0.999)));
console.log("Status-quo central   (% of oracle-achievable):         min "+pctv(q(cf,0))+"  median "+pctv(q(cf,0.5))+"  max "+pctv(q(cf,0.999)));
console.log("\nStatus quo delivers NET-NEGATIVE value (active harm) in "+harm+"/"+total+" of the box ("+pctv(harm/total)+").");
console.log("(No ratio is defined there — the distributed advantage is effectively unbounded.)");
console.log("\nWhere the status quo delivers meaningfully positive value ("+posC.length+"/"+total+" combos),");
console.log("the distributed-over-status-quo advantage distributed/central:");
console.log("   min +"+((q(rat,0)-1)*100).toFixed(0)+"%   p25 +"+((q(rat,0.25)-1)*100).toFixed(0)+"%   median +"+((q(rat,0.5)-1)*100).toFixed(0)+"%   p75 +"+((q(rat,0.75)-1)*100).toFixed(0)+"%   max +"+((q(rat,0.999)-1)*100).toFixed(0)+"%");
console.log("   (i.e. "+(q(rat,0)).toFixed(2)+"x to "+(q(rat,0.999)).toFixed(2)+"x; median "+(q(rat,0.5)).toFixed(2)+"x)");

// a single representative "realistic status quo" point for reference
const rep=cell({N,K,mean:0.01,sd:2.0,sigmaProxy:1.5,gamma:0.25,p:0.35,seeds});
console.log("\nRepresentative point (mean 0.01, sigma 2.0, noise 1.5, gamma 0.25, p 0.35):");
console.log("   distributed "+pctv(rep.d/rep.o)+" of oracle vs status quo "+pctv(rep.c/rep.o)+"  ->  "+(rep.d/rep.c).toFixed(2)+"x (+"+((rep.d/rep.c-1)*100).toFixed(0)+"%)");
