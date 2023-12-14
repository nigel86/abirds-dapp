import{aY as u,aZ as d,aK as o,a_ as h}from"./index.b79cd932.js";class p extends u{constructor(r){let{chains:e=d,options:s}=r;super(),this.chains=e,this.options=s}getBlockExplorerUrls(r){var s,n;const e=(n=(s=r.explorers)==null?void 0:s.map(a=>a.url))!=null?n:[];return e.length>0?e:void 0}isChainUnsupported(r){return!this.chains.some(e=>e.chainId===r)}updateChains(r){this.chains=r}}class c extends Error{constructor(r,e){const{cause:s,code:n,data:a}=e;if(!Number.isInteger(n))throw new Error('"code" must be an integer.');if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string.');super(`${r}. Cause: ${JSON.stringify(s)}`),this.cause=s,this.code=n,this.data=a}}class i extends c{constructor(r,e){const{cause:s,code:n,data:a}=e;if(!(Number.isInteger(n)&&n>=1e3&&n<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(r,{cause:s,code:n,data:a})}}class m extends Error{constructor(){super(...arguments),o(this,"name","AddChainError"),o(this,"message","Error adding chain")}}class E extends Error{constructor(r){let{chainId:e,connectorId:s}=r;super(`Chain "${e}" not configured for connector "${s}".`),o(this,"name","ChainNotConfigured")}}class g extends Error{constructor(){super(...arguments),o(this,"name","ConnectorNotFoundError"),o(this,"message","Connector not found")}}class C extends c{constructor(r){super("Resource unavailable",{cause:r,code:-32002}),o(this,"name","ResourceUnavailable")}}class f extends i{constructor(r){super("Error switching chain",{cause:r,code:4902}),o(this,"name","SwitchChainError")}}class x extends i{constructor(r){super("User rejected request",{cause:r,code:4001}),o(this,"name","UserRejectedRequestError")}}function R(t){return h(t).map(r=>{try{const e=new URL(r);return e.hostname.endsWith(".thirdweb.com")&&(e.pathname="",e.search=""),e.toString()}catch{return r}})}export{m as A,g as C,C as R,f as S,x as U,p as W,E as a,R as g};
