import{x as c,aG as d}from"./index.b2a93cd6.js";async function w(a,e,n){const r=a.getProvider(),t=new c(r,e,d,{}),s=await a.getSignerAddress(),o=a.readContract.address;return(await t.readContract.allowance(s,o)).gte(n)}export{w as h};