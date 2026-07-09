#!/usr/bin/env node
// E4-v4 ROBUSTNESS to the silent structural constants (constructive round).
// The frontier (beta < 1-gamma) was computed at fixed N=3000, K=300, interested
// fraction 10-70%, budget 1/3, cost~Uniform(1,10). A reviewer will name the
// constants held fixed. We re-test the distributed advantage at a representative
// frontier point (gamma=0.25, beta=0.30) and check the parity LAW at a few cells,
// under: (i) SMALL interested sets (where the CLT washout does NOT hold and
// sampling error genuinely bites), (ii) budget scarcity 1/5 and 1/2, (iii)
// heavy-tailed lognormal costs. If the ordering survives, the constants are not
// load-bearing; where it changes, that is the honest boundary.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function buildWorld({N,K,seed,mean,sd,setSize,costDist}){
  const rng=mulberry32(seed>>>0); const interested=Array.from({length:K},()=>[]); const cost=new Array(K);
  for(let j=0;j<K;j++){
    cost[j] = costDist==='lognormal' ? Math.exp(1.0+0.9*gauss(rng)) : 1+9*rng();   // heavy-tailed vs uniform
    if(setSize){ // fixed small interested set
      const m=setSize.lo+Math.floor(rng()*(setSize.hi-setSize.lo+1));
      for(let k=0;k<m;k++) interested[j].push(gauss(rng)*sd+mean);
    } else {
      const frac=0.1+0.6*rng(); for(let i=0;i<N;i++) if(rng()<frac) interested[j].push(gauss(rng)*sd+mean);
    }
  }
  return {interested,cost,trueVal:interested.map(l=>l.reduce((a,v)=>a+v,0))};
}
function fund(scores,cost,P){ const o=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]); const ch=[]; let sp=0;
  for(const j of o){ if(scores[j]<=0) continue; if(sp+cost[j]<=P){ch.push(j); sp+=cost[j];} } return ch; }
const deliver=(ch,tv)=>ch.reduce((a,j)=>a+tv[j],0);
function cell({N,K,mean,sd,noise,gamma,p,beta,budgetFrac,setSize,costDist,seeds}){
  let c=0,d=0,o=0,fav=0,n=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd,setSize,costDist}); const P=W.cost.reduce((a,b)=>a+b,0)*budgetFrac;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+noise*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0);
    for(let j=0;j<K;j++){ let sum=0; for(const v of W.interested[j]){ const pp=v<0?p*(1-beta):p; if(rd()<pp) sum+=v; } di[j]=sum; }
    const oo=deliver(fund(W.trueVal,W.cost,P),W.trueVal), cc=deliver(fund(cen,W.cost,P),W.trueVal), dd=deliver(fund(di,W.cost,P),W.trueVal);
    o+=oo; c+=cc; d+=dd; if(dd>cc) fav++; n++;
  }
  return {cf:c/o,df:d/o,fav:fav+"/"+n};
}
const N=3000,K=300,seeds=8, base={N,K,mean:0.01,sd:1.5,noise:1.5,p:0.35};
const pc=x=>(100*x).toFixed(0)+'%';
console.log("E4-v4 ROBUSTNESS to silent constants (representative point gamma=0.25, beta=0.30 unless noted)\n");

console.log("(i) INTERESTED-SET SIZE (CLT washout does NOT hold for small sets):");
console.log("  set size        | central %oracle | distributed %oracle | favoring dist");
for(const [lbl,ss] of [["default 10-70% (~1200)",null],["small 20-60",{lo:20,hi:60}],["tiny 5-30",{lo:5,hi:30}],["very tiny 3-12",{lo:3,hi:12}]]){
  const r=cell({...base,gamma:0.25,beta:0.30,budgetFrac:1/3,setSize:ss,costDist:'uniform',seeds});
  console.log("  "+lbl.padEnd(16)+" |      "+pc(r.cf).padStart(4)+"      |       "+pc(r.df).padStart(4)+"        |    "+r.fav);
}

console.log("\n(ii) BUDGET SCARCITY (fraction of total cost funded):");
console.log("  budget frac | central %oracle | distributed %oracle | favoring dist");
for(const bf of [1/5,1/3,1/2]){
  const r=cell({...base,gamma:0.25,beta:0.30,budgetFrac:bf,setSize:null,costDist:'uniform',seeds});
  console.log("     1/"+Math.round(1/bf)+"     |      "+pc(r.cf).padStart(4)+"      |       "+pc(r.df).padStart(4)+"        |    "+r.fav);
}

console.log("\n(iii) COST DISTRIBUTION (greedy value/cost is sensitive to the cost tail):");
console.log("  cost dist   | central %oracle | distributed %oracle | favoring dist");
for(const cd of ['uniform','lognormal']){
  const r=cell({...base,gamma:0.25,beta:0.30,budgetFrac:1/3,setSize:null,costDist:cd,seeds});
  console.log("  "+cd.padEnd(10)+" |      "+pc(r.cf).padStart(4)+"      |       "+pc(r.df).padStart(4)+"        |    "+r.fav);
}

console.log("\n(iv) PARITY LAW beta*=1-gamma under TINY sets (5-30) — must still cross near the anti-diagonal:");
console.log("  gamma beta | distributed %oracle - central %oracle (sign: + dist wins)");
for(const [g,b] of [[0.25,0.5],[0.25,0.75],[0.5,0.25],[0.5,0.5],[0.5,0.75],[0.75,0.25]]){
  const r=cell({...base,gamma:g,beta:b,budgetFrac:1/3,setSize:{lo:5,hi:30},costDist:'uniform',seeds});
  const gap=100*(r.df-r.cf);
  console.log("   "+g.toFixed(2)+"  "+b.toFixed(2)+" |   "+(gap>=0?"+":"")+gap.toFixed(0)+" pts   (g+b="+(g+b).toFixed(2)+(Math.abs(g+b-1)<0.01?" = parity line":"")+")");
}
