import{b2 as I,aK as c,aV as P,aJ as w,aW as l,a$ as m,aN as o,aL as v,b4 as E,aM as C,b0 as _,b3 as f}from"./index.b79cd932.js";import{W as b,U as u,a as U,g as W,A,S as R}from"./url-bc88b2b6.browser.esm.36ecca18.js";var h=new WeakMap,d=new WeakMap,g=new WeakSet;class D extends b{constructor(t){let{chains:e,options:a}=t;super({chains:e,options:{reloadOnDisconnect:!1,...a}}),I(this,g),c(this,"id",P.coinbase),c(this,"name","Coinbase Wallet"),c(this,"ready",!0),w(this,h,{writable:!0,value:void 0}),w(this,d,{writable:!0,value:void 0}),c(this,"onAccountsChanged",n=>{n.length===0?this.emit("disconnect"):this.emit("change",{account:l(n[0])})}),c(this,"onChainChanged",n=>{const i=v(n),s=this.isChainUnsupported(i);this.emit("change",{chain:{id:i,unsupported:s}})}),c(this,"onDisconnect",()=>{this.emit("disconnect")})}async connect(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};try{const e=await this.getProvider();this.setupListeners(),this.emit("message",{type:"connecting"});const a=await e.enable(),n=l(a[0]);let i=await this.getChainId(),s=this.isChainUnsupported(i);if(t&&i!==t)try{i=(await this.switchChain(t)).chainId,s=this.isChainUnsupported(i)}catch(r){console.error(`Connected but failed to switch to desired chain ${t}`,r)}return{account:n,chain:{id:i,unsupported:s},provider:new m(e)}}catch(e){throw/(user closed modal|accounts received is empty)/i.test(e.message)?new u(e):e}}async disconnect(){if(!o(this,d))return;const t=await this.getProvider();t.removeListener("accountsChanged",this.onAccountsChanged),t.removeListener("chainChanged",this.onChainChanged),t.removeListener("disconnect",this.onDisconnect),t.disconnect(),t.close()}async getAccount(){const e=await(await this.getProvider()).request({method:"eth_accounts"});if(e.length===0)throw new Error("No accounts found");return l(e[0])}async getChainId(){const t=await this.getProvider();return v(t.chainId)}async getProvider(){var t;if(!o(this,d)){let e=(await E(()=>import("./index.eaa483b6.js").then(r=>r.i),["assets/index.eaa483b6.js","assets/index.b79cd932.js","assets/index.79157e20.css","assets/index.2f580430.js","assets/tslib.2a512910.js"])).default;typeof e!="function"&&typeof e.default=="function"&&(e=e.default),C(this,h,new e(this.options));const a=(t=o(this,h).walletExtension)==null?void 0:t.getChainId(),n=this.chains.find(r=>this.options.chainId?r.chainId===this.options.chainId:r.chainId===a)||this.chains[0],i=this.options.chainId||(n==null?void 0:n.chainId),s=this.options.jsonRpcUrl||(n==null?void 0:n.rpc[0]);C(this,d,o(this,h).makeWeb3Provider(s,i))}return o(this,d)}async getSigner(){let{chainId:t}=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const[e,a]=await Promise.all([this.getProvider(),this.getAccount()]);return new m(e,t).getSigner(a)}async isAuthorized(){try{return!!await this.getAccount()}catch{return!1}}async switchChain(t){var n;const e=await this.getProvider(),a=_(t);try{return await e.request({method:"wallet_switchEthereumChain",params:[{chainId:a}]}),(n=this.chains.find(i=>i.chainId===t))!=null?n:{chainId:t,name:`Chain ${a}`,slug:`${a}`,nativeCurrency:{name:"Ether",decimals:18,symbol:"ETH"},rpc:[""],testnet:!1,chain:"ethereum",shortName:"eth"}}catch(i){const s=this.chains.find(r=>r.chainId===t);if(!s)throw new U({chainId:t,connectorId:this.id});if(i.code===4902)try{return await e.request({method:"wallet_addEthereumChain",params:[{chainId:a,chainName:s.name,nativeCurrency:s.nativeCurrency,rpcUrls:W(s),blockExplorerUrls:this.getBlockExplorerUrls(s)}]}),s}catch(r){throw f(this,g,y).call(this,r)?new u(r):new A}throw f(this,g,y).call(this,i)?new u(i):new R(i)}}async setupListeners(){const t=await this.getProvider();t.on("accountsChanged",this.onAccountsChanged),t.on("chainChanged",this.onChainChanged),t.on("disconnect",this.onDisconnect)}async getQrUrl(){if(await this.getProvider(),!o(this,h))throw new Error("Coinbase Wallet SDK not initialized");return o(this,h).getQrUrl()}}function y(p){return/(user rejected)/i.test(p.message)}export{D as CoinbaseWalletConnector};
