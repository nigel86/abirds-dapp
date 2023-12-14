import{aK as l,aV as p,aJ as m,aM as w,aN as f,aW as g,b5 as C}from"./index.b79cd932.js";import{C as I,U as u,R as v}from"./url-bc88b2b6.browser.esm.36ecca18.js";import{I as R}from"./thirdweb-dev-wallets-evm-connectors-injected.browser.esm.6ae160b5.js";var r=new WeakMap;class P extends R{constructor(t){const n={...{name:"Rainbow Wallet",shimDisconnect:!0,shimChainChangedDisconnect:!0,getProvider:C},...t.options};super({chains:t.chains,options:n,connectorStorage:t.connectorStorage}),l(this,"id",p.rainbow),m(this,r,{writable:!0,value:void 0}),w(this,r,n.UNSTABLE_shimOnConnectSelectAccount)}async connect(){var c,n;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();if(!e)throw new I;this.setupListeners(),this.emit("message",{type:"connecting"});let i=null;if(f(this,r)&&((c=this.options)==null?void 0:c.shimDisconnect)&&!Boolean(this.connectorStorage.getItem(this.shimDisconnectKey))&&(i=await this.getAccount().catch(()=>null),!!i))try{await e.request({method:"wallet_requestPermissions",params:[{eth_accounts:{}}]})}catch(d){if(this.isUserRejectedRequestError(d))throw new u(d)}if(!i){const o=await e.request({method:"eth_requestAccounts"});i=g(o[0])}let s=await this.getChainId(),a=this.isChainUnsupported(s);if(t.chainId&&s!==t.chainId)try{await this.switchChain(t.chainId),s=t.chainId,a=this.isChainUnsupported(t.chainId)}catch(o){console.error(`Could not switch to chain id : ${t.chainId}`,o)}(n=this.options)!=null&&n.shimDisconnect&&await this.connectorStorage.setItem(this.shimDisconnectKey,"true");const h={chain:{id:s,unsupported:a},provider:e,account:i};return this.emit("connect",h),h}catch(e){throw this.isUserRejectedRequestError(e)?new u(e):e.code===-32002?new v(e):e}}}export{P as RainbowConnector};
