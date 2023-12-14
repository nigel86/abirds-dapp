var m=Object.defineProperty;var w=(s,e,t)=>e in s?m(s,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[e]=t;var n=(s,e,t)=>(w(s,typeof e!="symbol"?e+"":e,t),t);import{aC as W,C,A as f,a as y,aD as R,c as T,d as A,i as E,G as S,h as b,f as O,k as v,l as D,al as F,v as o,n as V,o as _,p as c,T as u}from"./index.b79cd932.js";import{S as B}from"./erc-20-standard-10861ed4.browser.esm.d8315d7d.js";const h=class extends B{constructor(t,a,r){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},l=arguments.length>4?arguments[4]:void 0,g=arguments.length>5?arguments[5]:void 0,d=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new C(t,a,l,i,r);super(d,r,g);n(this,"claim",c((()=>{var t=this;return async function(a){let r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.claimTo.prepare(await t.contractWrapper.getSignerAddress(),a,r)}})()));n(this,"claimTo",c((()=>{var t=this;return async function(a,r){let i=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!0;return t.erc20.claimTo.prepare(a,r,{checkERC20Allowance:i})}})()));n(this,"delegateTo",c(async t=>u.fromContractWrapper({contractWrapper:this.contractWrapper,method:"delegate",args:[await o(t)]})));n(this,"burnTokens",c(async t=>this.erc20.burn.prepare(t)));n(this,"burnFrom",c(async(t,a)=>this.erc20.burnFrom.prepare(t,a)));this.abi=f.parse(l||[]),this.metadata=new y(this.contractWrapper,R,this.storage),this.app=new T(this.contractWrapper,this.metadata,this.storage),this.roles=new A(this.contractWrapper,h.contractRoles),this.encoder=new E(this.contractWrapper),this.estimator=new S(this.contractWrapper),this.events=new b(this.contractWrapper),this.sales=new O(this.contractWrapper),this.platformFees=new v(this.contractWrapper),this.interceptor=new D(this.contractWrapper),this.claimConditions=new F(this.contractWrapper,this.metadata,this.storage)}async getVoteBalance(){return await this.getVoteBalanceOf(await this.contractWrapper.getSignerAddress())}async getVoteBalanceOf(t){return await this.erc20.getValue(await this.contractWrapper.read("getVotes",[await o(t)]))}async getDelegation(){return await this.getDelegationOf(await this.contractWrapper.getSignerAddress())}async getDelegationOf(t){return await this.contractWrapper.read("delegates",[await o(t)])}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[V("transfer"),_])}async prepare(t,a,r){return u.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}};let p=h;n(p,"contractRoles",W);export{p as TokenDrop};
