import{E as d,_ as e,t as h}from"./index.b2a93cd6.js";class p extends d{constructor(r){let{chains:s=h,options:t}=r;super(),e(this,"id",void 0),e(this,"name",void 0),e(this,"chains",void 0),e(this,"options",void 0),e(this,"ready",void 0),this.chains=s,this.options=t}getBlockExplorerUrls(r){var t,o;const s=(o=(t=r.explorers)==null?void 0:t.map(a=>a.url))!=null?o:[];return s.length>0?s:void 0}isChainUnsupported(r){return!this.chains.some(s=>s.chainId===r)}updateChains(r){this.chains=r}}class i extends Error{constructor(r,s){const{cause:t,code:o,data:a}=s;if(!Number.isInteger(o))throw new Error('"code" must be an integer.');if(!r||typeof r!="string")throw new Error('"message" must be a nonempty string.');super(`${r}. Cause: ${t}`),e(this,"cause",void 0),e(this,"code",void 0),e(this,"data",void 0),this.cause=t,this.code=o,this.data=a}}class c extends i{constructor(r,s){const{cause:t,code:o,data:a}=s;if(!(Number.isInteger(o)&&o>=1e3&&o<=4999))throw new Error('"code" must be an integer such that: 1000 <= code <= 4999');super(r,{cause:t,code:o,data:a})}}class l extends Error{constructor(){super(...arguments),e(this,"name","AddChainError"),e(this,"message","Error adding chain")}}class E extends Error{constructor(r){let{chainId:s,connectorId:t}=r;super(`Chain "${s}" not configured for connector "${t}".`),e(this,"name","ChainNotConfigured")}}class m extends Error{constructor(){super(...arguments),e(this,"name","ConnectorNotFoundError"),e(this,"message","Connector not found")}}class C extends i{constructor(r){super("Resource unavailable",{cause:r,code:-32002}),e(this,"name","ResourceUnavailable")}}class g extends c{constructor(r){super("Error switching chain",{cause:r,code:4902}),e(this,"name","SwitchChainError")}}class f extends c{constructor(r){super("User rejected request",{cause:r,code:4001}),e(this,"name","UserRejectedRequestError")}}export{l as A,E as C,C as R,g as S,f as U,p as W,m as a};
