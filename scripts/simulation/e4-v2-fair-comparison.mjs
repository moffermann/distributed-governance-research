#!/usr/bin/env node
// E4-v2 — Fair central-vs-distributed comparison.
// Deterministic (mulberry32). Implements research/e4-v2-fair-comparison-design.md.
//
// Value has NO objective component. For each citizen i who cares about project j:
//   N_ij = mu_ij (attribute-predictable, >=0) + eps_ij (idiosyncratic, mean 0, sd sigmaIdio)
// True project value = sum over carers of N_ij (can be negative if disvaluers dominate).
//
// Institutions (all select the same fund fraction = 1/3, top-ranked):
//   - central-ideal : ranks by sum(mu_ij) — MAXIMALLY advantaged: it knows the true
//     attribute mean perfectly, infinite free capacity, no scale/lobby/corruption.
//     Its ONLY blindness is eps (subjective, unobservable from attributes).
//   - central-real  : central-ideal + dysfunction (lobby inflation + noise), tuned to a
//     target real-world approval (~43%).
//   - distributed   : each carer REVEALS N_ij with prob p (participation); non-participants
//     fall to the default (their attribute-level mu, routed by their equal share);
//     a fraction beta of projects are captured (organized inflation of their estimate).
//
// Metrics per institution: true value delivered (sum of true N over funded projects) and
// APPROVAL = % of citizens whose net valuation of the funded portfolio is positive.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function topK(scores,k){return scores.map((s,j)=>[s,j]).sort((a,b)=>b[0]-a[0]).slice(0,k).map(x=>x[1]);}

function buildWorld({N,M,kCare,sigmaLocal,sigmaIndiv,muMean,muSd,seed}){
  const rng=mulberry32(seed>>>0);
  const carers=Array.from({length:N},()=>[]);      // project -> [{i,mu,Nij}]
  const citizen=Array.from({length:M},()=>[]);      // citizen -> [{j,mu,Nij}]
  const organized=new Array(N); for(let j=0;j<N;j++) organized[j]=rng()<0.25;
  // delta_j: CORRELATED local taste shared by a project's neighbourhood — the part of
  // value that attributes cannot predict AND that does NOT average out (Hayek's dispersed
  // LOCAL knowledge). This is the decisive component; sigmaLocal is its magnitude.
  const delta=new Array(N); for(let j=0;j<N;j++) delta[j]=sigmaLocal*gauss(rng);
  for(let i=0;i<M;i++){
    const set=new Set(); while(set.size<kCare) set.add(Math.floor(rng()*N));
    for(const j of set){
      const mu=Math.max(0,muMean+muSd*gauss(rng));            // attribute-predictable, >=0
      const Nij=mu + delta[j] + sigmaIndiv*gauss(rng);        // TRUE valuation (can be <0)
      const r={i,j,mu,Nij};
      carers[j].push(r); citizen[i].push(r);
    }
  }
  const projTrue=new Array(N).fill(0), projMu=new Array(N).fill(0);
  for(let j=0;j<N;j++) for(const r of carers[j]){projTrue[j]+=r.Nij; projMu[j]+=r.mu;}
  return {rng,carers,citizen,projTrue,projMu,organized};
}

// approval = share of citizens with positive net valuation of the funded set
function approval(citizen,fundedSet){
  let sat=0;
  for(const list of citizen){
    let s=0; for(const r of list) if(fundedSet.has(r.j)) s+=r.Nij;
    if(s>0) sat++;
  }
  return sat/citizen.length;
}
function trueDelivered(projTrue,funded){let s=0;for(const j of funded)s+=projTrue[j];return s;}

function distributedEstimate(W,{p,beta,seed}){
  const rng=mulberry32((seed^0x9e3779b9)>>>0);
  const est=new Array(W.projTrue.length).fill(0);
  // each carer reveals N_ij with prob p; else default contributes mu_ij
  for(let j=0;j<est.length;j++){
    for(const r of W.carers[j]) est[j]+= (rng()<p) ? r.Nij : r.mu;
  }
  // capture: a fraction beta of the ORGANIZED projects get inflated by an organized ring
  if(beta>0){
    for(let j=0;j<est.length;j++) if(W.organized[j] && rng()<beta){
      est[j]+= 0.8*Math.abs(W.projMu[j]) + 2.0; // pump regardless of true value
    }
  }
  return est;
}
function realCentralEstimate(W,{dysfunction,seed}){
  const rng=mulberry32((seed^0x85ebca6b)>>>0);
  const scale=W.projMu.reduce((a,b)=>a+b,0)/W.projMu.length; // typical project magnitude
  const est=W.projMu.slice();
  for(let j=0;j<est.length;j++){
    est[j]+= dysfunction*scale*gauss(rng);                       // incompetence/capacity blend toward random
    if(W.organized[j]) est[j]+= dysfunction*scale*(0.5+rng());   // lobby capture of the planner
  }
  return est;
}

function evaluate({N,M,kCare,sigmaLocal,sigmaIndiv=0.4,p,beta,dysfunction,seeds}){
  const acc={idealAppr:0,idealDeliv:0,distAppr:0,distDeliv:0,realAppr:0,realDeliv:0,oracle:0};
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,M,kCare,sigmaLocal,sigmaIndiv,muMean:1.0,muSd:0.5,seed:1000+s});
    const k=Math.round(N/3);
    const oracle=new Set(topK(W.projTrue,k));                              // best possible
    const ideal=new Set(topK(W.projMu,k));                                 // central, blind to eps
    const dist =new Set(topK(distributedEstimate(W,{p,beta,seed:1000+s}),k));
    const real =new Set(topK(realCentralEstimate(W,{dysfunction,seed:1000+s}),k));
    acc.oracle    += trueDelivered(W.projTrue,oracle);
    acc.idealDeliv+= trueDelivered(W.projTrue,ideal); acc.idealAppr+=approval(W.citizen,ideal);
    acc.distDeliv += trueDelivered(W.projTrue,dist);  acc.distAppr +=approval(W.citizen,dist);
    acc.realDeliv += trueDelivered(W.projTrue,real);  acc.realAppr +=approval(W.citizen,real);
  }
  const n=seeds;
  return {
    idealAppr:acc.idealAppr/n, distAppr:acc.distAppr/n, realAppr:acc.realAppr/n,
    idealEff:acc.idealDeliv/acc.oracle, distEff:acc.distDeliv/acc.oracle, realEff:acc.realDeliv/acc.oracle,
  };
}

const M=6000,kCare=5,seeds=8;
const pct=x=>(100*x).toFixed(1)+'%';

console.log("E4-v2 — fair central-vs-distributed (deterministic, "+seeds+" seeds, M="+M+")\n");

// (A) The decisive axis: the CORRELATED local-taste share sigmaLocal (N=200, p=1.0, beta=0)
console.log("(A) Approval as the correlated local-taste share grows (N=200, p=1.0, beta=0):");
console.log("  sigmaLocal | central-ideal | distributed | distrib advantage");
for(const sig of [0.0,0.3,0.6,1.0,1.5]){
  const r=evaluate({N:200,M,kCare,sigmaLocal:sig,p:1.0,beta:0,dysfunction:0,seeds});
  console.log("   "+sig.toFixed(1)+"       |   "+pct(r.idealAppr)+"      |   "+pct(r.distAppr)+"    |  +"+(100*(r.distAppr-r.idealAppr)).toFixed(1)+" pts");
}

// (B) Participation p and capture beta erode the distributed advantage (N=200, sigmaLocal=1.0)
console.log("\n(B) Distributed under partial participation p and capture beta (N=200, sigmaLocal=1.0):");
console.log("  p    beta | distributed approval  (vs central-ideal "+pct(evaluate({N:200,M,kCare,sigmaLocal:1.0,p:1,beta:0,dysfunction:0,seeds}).idealAppr)+")");
for(const [p,beta] of [[1.0,0],[0.6,0],[0.3,0],[0.6,0.3],[0.3,0.5]]){
  const r=evaluate({N:200,M,kCare,sigmaLocal:1.0,p,beta,dysfunction:0,seeds});
  console.log("  "+p.toFixed(1)+"  "+beta.toFixed(1)+"  |   "+pct(r.distAppr));
}

// (C) Scale (sigmaLocal=1.0, p=0.6, beta=0.3): the blindness is present at every scale
console.log("\n(C) Across scale (sigmaLocal=1.0, p=0.6, beta=0.3):");
console.log("   N    | central-ideal | distributed");
for(const N of [40,200,1000]){
  const r=evaluate({N,M,kCare,sigmaLocal:1.0,p:0.6,beta:0.3,dysfunction:0,seeds});
  console.log("  "+String(N).padStart(4)+"  |   "+pct(r.idealAppr)+"      |   "+pct(r.distAppr));
}

// (D) Realistic status quo calibrated toward ~43% approval (N=200, sigmaLocal=1.0, p=0.6, beta=0.3)
console.log("\n(D) Realistic status quo (ideal central + dysfunction) vs distributed (N=200, sigmaLocal=1.0, p=0.6, beta=0.3):");
console.log("  dysfunction | status-quo approval | distributed approval");
for(const d of [0,0.5,1.0,1.5,2.0]){
  const r=evaluate({N:200,M,kCare,sigmaLocal:1.0,p:0.6,beta:0.3,dysfunction:d,seeds});
  console.log("     "+d.toFixed(1)+"      |    "+pct(r.realAppr)+"        |    "+pct(r.distAppr));
}
