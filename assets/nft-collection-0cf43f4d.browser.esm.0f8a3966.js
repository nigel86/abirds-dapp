var d=Object.defineProperty;var l=(s,a,t)=>a in s?d(s,a,{enumerable:!0,configurable:!0,writable:!0,value:t}):s[a]=t;var e=(s,a,t)=>(l(s,typeof a!="symbol"?a+"":a,t),t);import{N as g,C as W,A as w,a as C,ai as y,c as f,d as T,e as R,f as S,i as E,G as b,h as A,k as B,l as M,aj as O,m as k,n as v,o as I,p as c,T as P}from"./index.b79cd932.js";import{S as x}from"./erc-721-standard-c858f30e.browser.esm.2edaa370.js";const o=class extends x{constructor(t,r,n){let h=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},p=arguments.length>4?arguments[4]:void 0,m=arguments.length>5?arguments[5]:void 0,u=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,r,p,h,n);super(u,n,m);e(this,"mint",c(async t=>this.erc721.mint.prepare(t)));e(this,"mintTo",c(async(t,r)=>this.erc721.mintTo.prepare(t,r)));e(this,"mintBatch",c(async t=>this.erc721.mintBatch.prepare(t)));e(this,"mintBatchTo",c(async(t,r)=>this.erc721.mintBatchTo.prepare(t,r)));e(this,"burn",c(t=>this.erc721.burn.prepare(t)));this.abi=w.parse(p||[]),this.metadata=new C(this.contractWrapper,y,this.storage),this.app=new f(this.contractWrapper,this.metadata,this.storage),this.roles=new T(this.contractWrapper,o.contractRoles),this.royalties=new R(this.contractWrapper,this.metadata),this.sales=new S(this.contractWrapper),this.encoder=new E(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new A(this.contractWrapper),this.platformFees=new B(this.contractWrapper),this.interceptor=new M(this.contractWrapper),this.signature=new O(this.contractWrapper,this.storage),this.owner=new k(this.contractWrapper)}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async isTransferRestricted(){return!await this.contractWrapper.read("hasRole",[v("transfer"),I])}async getMintTransaction(t,r){return this.erc721.getMintTransaction(t,r)}async prepare(t,r,n){return P.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:r,overrides:n})}async call(t,r,n){return this.contractWrapper.call(t,r,n)}};let i=o;e(i,"contractRoles",g);export{i as NFTCollection};
