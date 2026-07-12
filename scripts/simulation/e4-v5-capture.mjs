#!/usr/bin/env node
// LEGACY RUNTIME GUARD (reproduction-only) — pre-v1.14 engine with retired multiplier/ratio framing.
// NOT the v1.14 evidence path (npm run e4:evidence). Set E4_ALLOW_LEGACY=1 to run for v1.12/v1.13 reproduction.
if (process.env.E4_ALLOW_LEGACY !== "1") { console.error("[legacy guard] pre-v1.14 engine; NOT v1.14 evidence. Set E4_ALLOW_LEGACY=1 to reproduce v1.12/v1.13 only."); process.exit(2); }

// E4-v5 — SYMMETRIC CAPTURE game on top of the E4-v4 frictions frontier.
// The adversarial review demanded capture on the distributed side; fairness demands
// modelling capture on the CENTRAL too (deliberately left out of E4-v3/v4). An
// organized group targets LOW-social-value projects it wants funded for private
// rents. It captures a project only if profitable, a la Becker (1968):
//     rent(j) > acquisition_cost + P(detection) * penalty
// The asymmetry is DERIVED from the mechanism and anchored to literature, NOT chosen:
//   acquisition:  CENTRAL = small FIXED cost (bribe few deciders; veto-player access,
//                 Stokes 2005 needs no mass monitoring). DISTRIBUTED = scales with the
//                 project (must swing many equal-wallet supporters; money can't buy
//                 wallets, only persuasion).
//   P(detection): CENTRAL = low & fixed (concentrated enforcement catches little -
//                 Dyck-Morse-Zingales 2010: SEC 6%, auditors 14%; and citizen denuncia
//                 is costly -> under-provided, Olson/Latane). DISTRIBUTED = SATURATING
//                 ~1 (viral, "takes a village"; low-cost denuncia + the defrauded
//                 direct-beneficiary has a monetary stake to report - the incentive
//                 Dyck et al find effective).
//   penalty f:    MODELLED EQUAL on both sides (conservative). Core v0's permanent
//                 reputational persistence (EMA decay) is a real but UNCLAIMED margin.
// The deterrence asymmetry therefore comes ONLY from p (Becker: same f, different p)
// and from acquisition scaling. Ties E4 (allocation) to the +43% integrity layer.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}

// organized ~25% of projects are "convenience" targets: LOWER social value (mean shifted
// down) but they yield private rents to the group. Non-organized: normal mean.
function buildWorld({N,K,seed,mean,sd,orgPenalty}){
  const rng=mulberry32(seed>>>0); const interested=Array.from({length:K},()=>[]); const cost=new Array(K); const org=new Array(K);
  for(let j=0;j<K;j++){ cost[j]=1+9*rng(); org[j]=rng()<0.25; const m = org[j]? mean-orgPenalty : mean;
    const frac=0.1+0.6*rng(); for(let i=0;i<N;i++) if(rng()<frac) interested[j].push(gauss(rng)*sd+m); }
  return {interested,cost,org,trueVal:interested.map(l=>l.reduce((a,v)=>a+v,0)),nInt:interested.map(l=>l.length)};
}
// fund: force-fund the captured set first (consume budget), then fund the rest greedily
// by perceived value/cost with what remains.
function fundWithCapture(perceived,cost,P,captured){
  const chosen=[]; let sp=0;
  for(let j=0;j<cost.length;j++) if(captured[j] && sp+cost[j]<=P){chosen.push(j); sp+=cost[j];}
  const rest=perceived.map((s,j)=>[s/cost[j],j]).filter(x=>!captured[x[1]]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]);
  for(const j of rest){ if(perceived[j]<=0) continue; if(sp+cost[j]<=P){chosen.push(j); sp+=cost[j];} }
  return chosen;
}
const deliver=(ch,tv)=>ch.reduce((a,j)=>a+tv[j],0);

function run({N,K,mean,sd,orgPenalty,noise,gamma,p,beta,lambda,seeds,
             kc,pc,kd,pd,F,pdCap=1.0}){
  let cAcc=0,dAcc=0,oAcc=0, cCap=0,dCap=0, budgetAcc=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:2000+s,mean,sd,orgPenalty}); const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((3000+s)>>>0), rd=mulberry32((4000+s)>>>0);
    // perceived values (E4-v4): central gamma-blind noisy; distributed beta-biased true sample
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+noise*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0);
    for(let j=0;j<K;j++){ let sum=0; for(const v of W.interested[j]){ const pp=v<0?p*(1-beta):p; if(rd()<pp) sum+=v; } di[j]=sum; }
    // capture decision per organized project (rent = lambda * cost)
    const capC=new Array(K).fill(false), capD=new Array(K).fill(false);
    for(let j=0;j<K;j++) if(W.org[j]){
      const rent=lambda*W.cost[j];
      const costCentral = kc + pc*F;                         // fixed acquisition + low detection
      const pDist = pdCap*(1-Math.exp(-W.nInt[j]/40));       // SATURATING/viral detection (ceiling pdCap)
      const costDist = kd*W.cost[j] + pDist*F;               // acquisition scales + near-certain sanction
      if(rent>costCentral) capC[j]=true;
      if(rent>costDist)    capD[j]=true;
    }
    const oracle=perfectFund(W.trueVal,W.cost,P);
    const cSel=fundWithCapture(cen,W.cost,P,capC);
    const dSel=fundWithCapture(di ,W.cost,P,capD);
    oAcc+=deliver(oracle,W.trueVal); cAcc+=deliver(cSel,W.trueVal); dAcc+=deliver(dSel,W.trueVal);
    cCap+=capC.filter(Boolean).length; dCap+=capD.filter(Boolean).length; budgetAcc+=P;
  }
  return {c:cAcc/seeds,d:dAcc/seeds,o:oAcc/seeds,cCap:cCap/seeds,dCap:dCap/seeds};
}
function perfectFund(tv,cost,P){ const order=tv.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]); const ch=[]; let sp=0;
  for(const j of order){ if(tv[j]<=0) continue; if(sp+cost[j]<=P){ch.push(j); sp+=cost[j];} } return ch; }

const N=3000,K=300,seeds=8;
// realistic representative point on the honest frontier + literature-anchored capture costs
const base={N,K,mean:0.01,sd:1.5,orgPenalty:0.04,noise:1.5,gamma:0.25,p:0.35,beta:0.3,seeds,
            kc:0.3,pc:0.1,kd:0.3,pd:0.97,F:3};
const pctOr=(x,o)=>(100*x/o).toFixed(0)+'%';
const advCol=(d,c)=>(d>0&&c>0)?(d/c).toFixed(2)+'x':'  n/a'; // ratio only meaningful when both positive
console.log("E4-v5 SYMMETRIC CAPTURE (deterministic, "+seeds+" seeds; representative point gamma=0.25, beta=0.30)\n");
console.log("Organized group targets ~25% (~75) low-value 'convenience' projects; captures if rent > cost (Becker).");
console.log("Central: acquisition fixed 0.3 + detection p=0.10. Distributed: acquisition 0.3*C + detection p~1 (viral). penalty f=3 both.");
console.log("lambda = private rent as a fraction of project cost. %oracle can be NEGATIVE = active harm delivered.\n");
console.log("  lambda | central %oracle | distributed %oracle | (adv if both +) | central captured | dist captured");
for(const lambda of [0,0.05,0.1,0.2,0.3,0.5,0.8,1.2,2.0]){
  const r=run({...base,lambda});
  console.log("   "+lambda.toFixed(2).padStart(4)+"  |      "+pctOr(r.c,r.o).padStart(4)+"       |       "+pctOr(r.d,r.o).padStart(4)+"        |     "+advCol(r.d,r.c)+"      |      "+r.cCap.toFixed(1).padStart(4)+"        |     "+r.dCap.toFixed(1));
}
console.log("\nKey object = the CAPTURE THRESHOLD: the rent level lambda at which each institution is");
console.log("cheap enough to capture that it turns NET-NEGATIVE (delivers active harm).");

// isolation check: start from the PARITY point (gamma=0.5, beta=0.5) so capture is the ONLY driver
console.log("\nIsolation — from a near-parity frontier point (gamma=0.5, beta=0.5): capture is the sole driver:");
console.log("  lambda | central %oracle | distributed %oracle");
for(const lambda of [0,0.3,0.8]){
  const r=run({...base,gamma:0.5,beta:0.5,lambda});
  console.log("   "+lambda.toFixed(2)+"  |      "+pctOr(r.c,r.o).padStart(4)+"       |       "+pctOr(r.d,r.o).padStart(4));
}

// sensitivity to the STRONG assumption: distributed detection probability pd (viral vs not)
console.log("\nSensitivity — distributed detection probability (the strong assumption), lambda=0.5:");
console.log("  detection model         | dist captured | distributed %oracle");
for(const [lbl,mult] of [["viral ~1 (baseline)",1.0],["moderate ~0.6",0.6],["weak ~0.3",0.3],["as weak as central 0.1",0.1]]){
  // override detection by scaling the saturating curve's ceiling via pd cap
  const r=run({...base,lambda:0.5, pdCap:mult});
  console.log("  "+lbl.padEnd(23)+" |      "+r.dCap.toFixed(1).padStart(4)+"     |       "+pctOr(r.d,r.o));
}

// sensitivity: distributed acquisition multiplier kd (equal-wallet / many-supporters cost)
console.log("\nSensitivity — distributed acquisition cost multiplier kd (equal-wallet scaling), lambda=0.5:");
console.log("  kd  | dist captured | distributed %oracle");
for(const kd of [0.1,0.2,0.3,0.5]){
  const r=run({...base,lambda:0.5,kd});
  console.log("  "+kd.toFixed(1)+" |      "+r.dCap.toFixed(1).padStart(4)+"     |       "+pctOr(r.d,r.o));
}
