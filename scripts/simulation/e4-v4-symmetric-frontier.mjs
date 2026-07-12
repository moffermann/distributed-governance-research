#!/usr/bin/env node
// ============================================================================================================
// LEGACY (pre-v1.14). This engine reproduces the v1.12/v1.13 deposited record and uses the RETIRED D/C ratio
// and 'x' multiplier framing. It is NOT part of the v1.14 evidence path and CANNOT feed v1.14 artifacts: the
// v1.14 evidence path is the exclusive `npm run e4:evidence` (scripts/simulation/e4-v5/), whose closed output
// schema + embargo adapter mechanically reject D/C and 'x'. Kept only for provenance/reproduction of v1.13.
// ============================================================================================================
// E4-v4 — SYMMETRIC-FRICTIONS rebuild (supersedes E4-v3 after adversarial review).
// The review showed the ~1.7x headline was an artifact of an asymmetry: the
// distributed arm was an unbiased truth-oracle on its sample while the central was
// harm-blind. Fix: give BOTH institutions a friction in perceiving true value,
// including harm, and report a 2D FRONTIER (no headline multiplier).
//
//   Central   perceives each interested cell as V + Normal(0,noise), then attenuates
//             perceived harm by gamma in [0,1]  (0 = blind to harm; 1 = full harm
//             perception = a competent, accountable planner with EIA/audit/hearings).
//   Distributed  a participation-p sample of the interested reveal their TRUE value
//             (the funder knows their own value — no revelation noise), BUT the
//             diffusely-HARMED under-participate: a citizen with v<0 participates at
//             p*(1-beta). beta in [0,1] = participation bias / voice inequality
//             (0 = representative turnout; 1 = the harmed are absent, Olson/bystander
//             applied symmetrically). This is the SAME collective-action logic the
//             model uses to justify the central's blindness, now applied to the
//             platform too. The equal-wallet + default layer + low-cost objection
//             channel are the design features meant to keep beta LOW.
//
// Both fund greedily by perceived value/cost, skip perceived<=0, budget = SumC/3.
// Score = TRUE value delivered / oracle. Advantage = distributed / central.

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
function cell({N,K,mean,sd,noise,gamma,p,beta,capture,seeds}){
  let c=0,d=0,o=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd}); const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+noise*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0), gate=new Array(K).fill(false), organized=new Array(K);
    for(let j=0;j<K;j++) organized[j]=rd()<0.25;
    for(let j=0;j<K;j++){ let sum=0;
      for(const v of W.interested[j]){ const pp = v<0 ? p*(1-beta) : p;  // harmed under-participate
        if(rd()<pp) sum += v; }
      if(capture>0 && organized[j] && rd()<capture) sum += 0.8*Math.abs(W.trueVal[j])+2.0; // coordinated inflation
      di[j]=sum; if(sum<=0)gate[j]=true; }
    o+=deliver(fund(W.trueVal,W.cost,P),W.trueVal); c+=deliver(fund(cen,W.cost,P),W.trueVal); d+=deliver(fund(di,W.cost,P,gate),W.trueVal);
  }
  return {c:c/seeds,d:d/seeds,o:o/seeds};
}
const q=(a,x)=>{const s=[...a].sort((u,v)=>u-v); return s[Math.min(s.length-1,Math.floor(x*s.length))];};
const N=3000,K=300,seeds=6;
const G=[0,0.25,0.5,0.75,1.0], B=[0,0.25,0.5,0.75,1.0];
// compute each (gamma,beta) cell's box summary ONCE and cache it (fast + reproducible)
const cache={};
function summary(gamma,beta){ const key=gamma+","+beta; if(cache[key]) return cache[key];
  const rat=[],cf=[],df=[]; let n=0,fav=0;
  for(const mean of [0,0.01,0.02]) for(const sd of [1,2]) for(const noise of [1,1.5,2]) for(const p of [0.2,0.35,0.5]){
    const r=cell({N,K,mean,sd,noise,gamma,p,beta,capture:0,seeds}); n++;
    if(r.d>r.c) fav++; cf.push(r.c/r.o); df.push(r.d/r.o); if(r.c>0.05*r.o) rat.push(r.d/r.c); }
  return cache[key]={med:rat.length?q(rat,0.5):NaN, fav, n, cf:q(cf,0.5), df:q(df,0.5)};
}
const medAdv=(g,b)=>summary(g,b).med;
// capture variant (capture>0; used only for the small robustness block, not cached)
function medAdvCap(gamma,beta,capture){ const rat=[];
  for(const mean of [0,0.01,0.02]) for(const sd of [1,2]) for(const noise of [1,1.5,2]) for(const p of [0.2,0.35,0.5]){
    const r=cell({N,K,mean,sd,noise,gamma,p,beta,capture,seeds}); if(r.c>0.05*r.o) rat.push(r.d/r.c); }
  return rat.length?q(rat,0.5):NaN;
}
console.log("E4-v4 SYMMETRIC-FRICTIONS FRONTIER (deterministic, "+seeds+" seeds; median advantage distributed/central over the box)\n");
console.log("rows = gamma (central harm-perception: 0 blind ... 1 accountable planner)");
console.log("cols = beta (platform participation bias: 0 representative ... 1 harmed absent)\n");
process.stdout.write("  gamma\\beta |");
for(const b of B) process.stdout.write("  b="+b.toFixed(2));
console.log("\n  ----------+"+"--------".repeat(B.length));
for(const g of G){ process.stdout.write("   g="+g.toFixed(2)+"   |");
  for(const b of B){ const a=medAdv(g,b); process.stdout.write("  "+(a>=1?" ":"")+a.toFixed(2)); }
  console.log(""); }
console.log("\nReading: advantage>1 = distributed delivers more true value; ~1 = parity; <1 = central wins.");
console.log("The distributed edge exists only where the platform's voice bias (beta) is milder than");
console.log("the central's harm-blindness (low gamma). It is NOT a property of aggregation per se.");
console.log("Closed form (see e4-analytical-backbone): the parity locus is exactly beta* = 1 - gamma.");

// Metric fix (constructive review): the D/C ratio explodes as central %oracle -> 0, so also report
// %OF ORACLE for each institution and the FRACTION of the 54-point box favoring the distributed.
console.log("\nRobustness view (metric-honest): median % of oracle delivered, and box points favoring distributed:");
console.log("  gamma beta | central %oracle | distributed %oracle | frac of box favoring distributed");
for(const g of G) for(const b of B){ const s=summary(g,b);
  console.log("   "+g.toFixed(2)+" "+b.toFixed(2)+" |      "+(100*s.cf).toFixed(0).padStart(4)+"%      |       "+(100*s.df).toFixed(0).padStart(4)+"%        |        "+s.fav+"/"+s.n);
}

// crossover: for each gamma, the beta at which advantage hits parity (interpolated on the grid)
console.log("\nParity crossover (beta where distributed advantage falls to ~1.0), per gamma:");
for(const g of G){ let cross="never (>1 across all beta)"; let prev=medAdv(g,0);
  for(const b of B.slice(1)){ const a=medAdv(g,b); if(a<=1.0){ cross="beta ~ "+b.toFixed(2)+" (adv "+a.toFixed(2)+"x)"; break; } prev=a; }
  if(medAdv(g,0)<=1.0) cross="already <=1 at beta=0";
  console.log("   gamma="+g.toFixed(2)+": "+cross); }

// capture robustness at a representative low-friction corner
console.log("\nCapture robustness (gamma=0, beta=0.25) — coordinated inflation of organized projects:");
for(const cap of [0,0.2,0.5]) console.log("   capture="+cap.toFixed(1)+": advantage "+(cap===0?medAdv(0,0.25):medAdvCap(0,0.25,cap)).toFixed(2)+"x");
