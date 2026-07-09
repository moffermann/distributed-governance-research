#!/usr/bin/env node
// E4-v3 CONFIRMATORY validation on HELD-OUT seeds (bases 5000/6000/7000, which
// played no role in the exploratory design). Tests the 6 pre-registered
// predictions of research/e4-v3-preregistration.md and prints PASS/PARTIAL/FAIL.
// Same locked mechanics as e4-v3-value-matrix.mjs.

function mulberry32(a){return function(){a|=0;a=a+0x6D2B79F5|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296};}
function gauss(rng){let u=0,v=0;while(u===0)u=rng();while(v===0)v=rng();return Math.sqrt(-2*Math.log(u))*Math.cos(2*Math.PI*v);}
function gammaS(rng,a){ if(a<1) return gammaS(rng,a+1)*Math.pow(rng()||1e-12,1/a);
  const d=a-1/3,c=1/Math.sqrt(9*d); while(true){ let x,v; do{x=gauss(rng);v=1+c*x;}while(v<=0); v=v*v*v; const u=rng();
    if(u<1-0.0331*x*x*x*x) return d*v; if(Math.log(u||1e-12)<0.5*x*x+d*(1-v+Math.log(v))) return d*v; } }
function makeSampler(spec,mean,sd){ if(spec==='normal') return rng=>gauss(rng)*sd+mean;
  const {a,b}=spec, m=a/(a+b), s=Math.sqrt(a*b/((a+b)*(a+b)*(a+b+1)));
  return rng=>{const ga=gammaS(rng,a),gb=gammaS(rng,b); return ((ga/(ga+gb)-m)/s)*sd+mean;}; }

function buildWorld({N,K,seed,spec,mean,sd}){
  const rng=mulberry32(seed>>>0); const sample=makeSampler(spec,mean,sd);
  const interested=Array.from({length:K},()=>[]); const cost=new Array(K);
  for(let j=0;j<K;j++){ cost[j]=1+9*rng(); const frac=0.1+0.6*rng(); for(let i=0;i<N;i++) if(rng()<frac) interested[j].push(sample(rng)); }
  return {interested,cost,trueVal:interested.map(l=>l.reduce((a,v)=>a+v,0))};
}
function fund(scores,cost,P,gate){
  const order=scores.map((s,j)=>[s/cost[j],j]).sort((a,b)=>b[0]-a[0]).map(x=>x[1]); const ch=[]; let sp=0;
  for(const j of order){ if(scores[j]<=0) continue; if(gate&&gate[j]) continue; if(sp+cost[j]<=P){ch.push(j); sp+=cost[j];} } return ch;
}
const deliver=(ch,tv)=>ch.reduce((a,j)=>a+tv[j],0);
// HELD-OUT seed bases: world 5000, central 6000, distributed 7000
function cell({N,K,spec='normal',mean,sd,sigmaProxy,gamma,p,seeds}){
  let c=0,d=0,o=0;
  for(let s=0;s<seeds;s++){
    const W=buildWorld({N,K,seed:5000+s,spec,mean,sd}); const P=W.cost.reduce((a,b)=>a+b,0)/3;
    const rc=mulberry32((6000+s)>>>0), rd=mulberry32((7000+s)>>>0);
    const cen=new Array(K).fill(0);
    for(let j=0;j<K;j++) for(const v of W.interested[j]){let pe=v+sigmaProxy*gauss(rc); if(pe<0)pe*=gamma; cen[j]+=pe;}
    const di=new Array(K).fill(0), gate=new Array(K).fill(false);
    for(let j=0;j<K;j++){let sum=0; for(const v of W.interested[j]) if(rd()<p) sum+=v; di[j]=sum; if(sum<=0)gate[j]=true;}
    o+=deliver(fund(W.trueVal,W.cost,P),W.trueVal); c+=deliver(fund(cen,W.cost,P),W.trueVal); d+=deliver(fund(di,W.cost,P,gate),W.trueVal);
  }
  return {c:c/seeds,d:d/seeds,o:o/seeds};
}
const q=(a,x)=>{const s=[...a].sort((u,v)=>u-v); return s[Math.min(s.length-1,Math.floor(x*s.length))];};
const N=3000,K=300,seeds=6; const tag=b=>b?"PASS":"FAIL";
console.log("E4-v3 CONFIRMATORY validation on HELD-OUT seeds (world 5000, central 6000, dist 7000; "+seeds+" seeds)\n");

// P1: distributed >= central across the box; central shortfall grows as gamma->0 and sigma rises
{ let distGE=0,tot=0; const box=[];
  for(const mean of [0,0.01,0.02]) for(const sd of [1,2]) for(const noise of [1,1.5,2]) for(const p of [0.2,0.35,0.5]) for(const gamma of [0,0.25,0.5]){
    const r=cell({N,K,mean,sd,sigmaProxy:noise,gamma,p,seeds}); tot++; if(r.d>=r.c-0.02*r.o) distGE++; box.push({sd,gamma,cf:r.c/r.o}); }
  const cg0=box.filter(b=>b.gamma===0).reduce((a,b)=>a+b.cf,0), cg5=box.filter(b=>b.gamma===0.5).reduce((a,b)=>a+b.cf,0);
  const cs1=box.filter(b=>b.sd===1&&b.gamma===0).reduce((a,b)=>a+b.cf,0), cs2=box.filter(b=>b.sd===2&&b.gamma===0).reduce((a,b)=>a+b.cf,0);
  const ok=(distGE>=tot-1)&&(cg0<cg5)&&(cs2<cs1);
  console.log("P1 "+tag(ok)+"  distributed>=central in "+distGE+"/"+tot+"; central(gamma0)<central(gamma.5): "+(cg0<cg5)+"; central worse at sigma2 than sigma1 (gamma0): "+(cs2<cs1)); }

// P2: negative-mean -> central active harm; distributed far less harm
{ const a=cell({N,K,mean:-0.02,sd:1,sigmaProxy:1.5,gamma:0,p:0.3,seeds}), b=cell({N,K,mean:-0.04,sd:1,sigmaProxy:1.5,gamma:0,p:0.3,seeds});
  const harm=a.c<0&&b.c<0, less=Math.abs(a.d)<0.5*Math.abs(a.c)&&Math.abs(b.d)<0.5*Math.abs(b.c);
  console.log("P2 "+tag(harm&&less)+"  central active harm (c<0): -0.02="+a.c.toFixed(0)+" -0.04="+b.c.toFixed(0)+"; distributed far less harm: -0.02="+a.d.toFixed(0)+" -0.04="+b.d.toFixed(0)); }

// P3: shape invariance Normal vs Beta(2,5) at mean 0
{ const nm=cell({N,K,spec:'normal',mean:0,sd:1,sigmaProxy:1.5,gamma:0,p:0.3,seeds});
  const bt=cell({N,K,spec:{a:2,b:5},mean:0,sd:1,sigmaProxy:1.5,gamma:0,p:0.3,seeds});
  const dc=Math.abs(nm.d/nm.o-bt.d/bt.o), cc=Math.abs(nm.c/nm.o-bt.c/bt.o); const ok=dc<0.08&&cc<0.08;
  console.log("P3 "+tag(ok)+"  |dist_normal-dist_beta|="+(100*dc).toFixed(1)+"pts, |cen_normal-cen_beta|="+(100*cc).toFixed(1)+"pts (both <8)"); }

// P4: scale invariance (scale mean, sd, noise by k)
{ const rs=[0.5,1,2,4].map(k=>cell({N,K,mean:0.02*k,sd:1*k,sigmaProxy:1.5*k,gamma:0,p:0.3,seeds}));
  const cf=rs.map(r=>Math.round(1000*r.c/r.o)), df=rs.map(r=>Math.round(1000*r.d/r.o));
  const ok=new Set(cf).size===1&&new Set(df).size===1;
  console.log("P4 "+tag(ok)+"  central %oracle x1000 across k: ["+cf.join(",")+"]; distributed: ["+df.join(",")+"]"); }

// P5: scenario ladder A>B>C, C~parity
{ const med=g=>{const rat=[]; for(const gamma of g) for(const mean of [0,0.01,0.02]) for(const sd of [1,2]) for(const noise of [1,1.5,2]) for(const p of [0.2,0.35,0.5]){ const r=cell({N,K,mean,sd,sigmaProxy:noise,gamma,p,seeds}); if(r.c>0.05*r.o) rat.push(r.d/r.c);} return q(rat,0.5);};
  const A=med([0,0.1]),B=med([0.25,0.5]),C=med([0.75,1]); const ok=A>B&&B>C&&C<1.2;
  console.log("P5 "+tag(ok)+"  median advantage A="+A.toFixed(2)+"x > B="+B.toFixed(2)+"x > C="+C.toFixed(2)+"x (C near parity)"); }

// P6: participation monotonicity, -> oracle at p=1
{ const ds=[0.05,0.1,0.3,0.6,1.0].map(p=>cell({N,K,mean:0.01,sd:1.5,sigmaProxy:1.5,gamma:0,p,seeds})).map(r=>r.d/r.o);
  let mono=true; for(let i=1;i<ds.length;i++) if(ds[i]<ds[i-1]-0.02) mono=false; const ok=mono&&ds[ds.length-1]>0.9;
  console.log("P6 "+tag(ok)+"  distributed %oracle by p [.05,.1,.3,.6,1]: ["+ds.map(x=>(100*x).toFixed(0)).join(",")+"] monotone & ->oracle"); }
