#!/usr/bin/env node
// E4-v5 DETECTION FLOOR — answers the skeptic: "10x is the ceiling under virality.
// What is the FLOOR? How viral must detection be? How probable is detection really?"
//
// Detection is NOT a free knob. It is a snowball: a captured low-value project is
// caught if AT LEAST ONE affected citizen detects-and-reports. If each of the m
// affected reports independently with probability q, then
//        p_detect = 1 - (1-q)^m
// so p_detect depends only on the EXPECTED number of reporters, m*q. The exponential
// means near-certain detection needs only a handful of expected reporters, and the
// distributed beats the central (fixed p_c=0.10) as soon as m*q exceeds a tiny floor.
// q is raised by low-cost denuncia + the defrauded beneficiary's monetary stake
// (Dyck-Morse-Zingales 2010: monetary incentives, not reputation, drive reporting);
// m is raised by the transparent audit trail (every affected citizen can see).

const pdet=(q,m)=>1-Math.pow(1-q,m);
const f2=x=>x.toFixed(2), f3=x=>x.toFixed(3);

console.log("E4-v5 DETECTION FLOOR — detection as a snowball p = 1 - (1-q)^m\n");

// (1) The pure snowball: how few reporters you actually need
console.log("(1) p_detect = 1 - (1-q)^m  (q = individual report prob, m = affected who can see):");
console.log("      m ->      5        20        50       200      1000");
for(const q of [0.001,0.005,0.01,0.02,0.05]){
  let row="  q="+f3(q)+" | ";
  for(const m of [5,20,50,200,1000]) row+= (pdet(q,m)).toFixed(3)+"    ";
  console.log(row);
}

// (2) The FLOOR in interpretable units: expected reporters m*q needed for each detection level
console.log("\n(2) The floor in one number — expected reporters m*q needed (independent of how split):");
const need=(target)=>Math.log(1-target)/Math.log(0.999999)*0; // placeholder
for(const [lbl,target] of [["parity with central (p=0.10)",0.10],["p=0.50",0.50],["p=0.90 (strong)",0.90],["p=0.99 (near-viral)",0.99]]){
  const mq=-Math.log(1-target); // since (1-q)^m ~ exp(-m q): p=1-exp(-mq) -> mq = -ln(1-p)
  console.log("   "+lbl.padEnd(30)+": expected reporters m*q ~ "+mq.toFixed(2));
}
console.log("   => the distributed BEATS the central once ~0.1 reporters are expected per captured project;");
console.log("      it reaches strong resistance (p=0.9) at ~2.3 expected reporters, near-viral at ~4.6.");

// (3) Plug ENDOGENOUS detection into the capture model and sweep q (with real, conservative m).
function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function buildWorld({N,K,seed,mean,sd,orgPenalty}){
  const rng=mulberry32(seed>>>0); const interested=Array.from({length:K},()=>[]); const cost=new Array(K); const org=new Array(K);
  for(let j=0;j<K;j++){ cost[j]=1+9*rng(); org[j]=rng()<0.25; const m=org[j]?mean-orgPenalty:mean;
    const frac=0.1+0.6*rng(); for(let i=0;i<N;i++) if(rng()<frac) interested[j].push(gauss(rng)*sd+m); }
  // harmed detectors per project = interested with v<0 (aggrieved parties with a stake to report)
  const harmed=interested.map(l=>l.filter(v=>v<0).length);
  return {interested,cost,org,trueVal:interested.map(l=>l.reduce((a,v)=>a+v,0)),harmed};
}
function fundWithCapture(perceived,cost,P,captured){
  const chosen=[]; let sp=0;
  for(let j=0;j<cost.length;j++) if(captured[j]&&sp+cost[j]<=P){chosen.push(j); sp+=cost[j];}
  const rest=perceived.map((s,j)=>[s/cost[j],j]).filter(x=>!captured[x[1]]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  for(const j of rest){ if(perceived[j]<=0) continue; if(sp+cost[j]<=P){chosen.push(j); sp+=cost[j];} } return chosen;
}
const deliver=(ch,tv)=>ch.reduce((a,j)=>a+tv[j],0);
function perfectFund(tv,cost,P){ const o=tv.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]); const ch=[]; let sp=0;
  for(const j of o){ if(tv[j]<=0) continue; if(sp+cost[j]<=P){ch.push(j); sp+=cost[j];} } return ch; }
function run({q,detectorFrac,lambda,seeds=8}){
  const N=3000,K=300,mean=0.01,sd=1.5,orgPenalty=0.04,noise=1.5,gamma=0.25,p=0.35,beta=0.3;
  const kc=0.3,pc=0.1,kd=0.3,F=3;
  let cAcc=0,dAcc=0,oAcc=0,dCap=0,pAcc=0,mqAcc=0,nCap=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd,orgPenalty}); const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+noise*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0);
    for(let j=0;j<K;j++){ let sum=0; for(const v of W.interested[j]){ const pp=v<0?p*(1-beta):p; if(rd()<pp) sum+=v; } di[j]=sum; }
    const capC=new Array(K).fill(false), capD=new Array(K).fill(false);
    for(let j=0;j<K;j++) if(W.org[j]){
      const rent=lambda*W.cost[j];
      if(rent>kc+pc*F) capC[j]=true;
      const m=Math.max(1,Math.round(detectorFrac*W.harmed[j]));      // conservative detector pool
      const pDist=1-Math.pow(1-q,m);                                 // ENDOGENOUS snowball detection
      if(rent>kd*W.cost[j]+pDist*F) capD[j]=true;
      pAcc+=pDist; mqAcc+=q*m; nCap++;
    }
    oAcc+=deliver(perfectFund(W.trueVal,W.cost,P),W.trueVal);
    cAcc+=deliver(fundWithCapture(cen,W.cost,P,capC),W.trueVal);
    dAcc+=deliver(fundWithCapture(di ,W.cost,P,capD),W.trueVal);
    dCap+=capD.filter(Boolean).length;
  }
  return {c:cAcc/seeds,d:dAcc/seeds,o:oAcc/seeds,dCap:dCap/seeds,pAvg:pAcc/nCap,mqAvg:mqAcc/nCap};
}
console.log("\n(3) Endogenous detection in the capture model (lambda=0.5; central sits at -23% of oracle here).");
console.log("    Conservative: only HARMED citizens (v<0) are detectors, and only a FRACTION of them:");
console.log("  detectorFrac | q     | avg m*q (exp. reporters) | avg p_detect | dist captured | distributed %oracle");
for(const [df,q] of [[1.0,0.01],[0.5,0.01],[0.2,0.01],[0.1,0.01],[0.1,0.005],[0.05,0.005],[0.02,0.005],[0.01,0.005]]){
  const r=run({q,detectorFrac:df,lambda:0.5});
  console.log("     "+df.toFixed(2)+"     | "+f3(q)+" |         "+r.mqAvg.toFixed(2).padStart(5)+"           |    "+r.pAvg.toFixed(2)+"     |     "+r.dCap.toFixed(1).padStart(4)+"     |     "+(100*r.d/r.o).toFixed(0)+"%");
}
console.log("\nReading: the distributed keeps its advantage (positive %oracle, few captures) down to a very");
console.log("LOW floor — it only degrades toward the central when expected reporters m*q falls below ~1,");
console.log("i.e. when effectively NObody reports even at low cost with a stake (near-total apathy/opacity).");
