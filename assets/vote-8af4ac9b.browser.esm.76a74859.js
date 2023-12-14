var g=Object.defineProperty;var m=(n,t,a)=>t in n?g(n,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):n[t]=a;var i=(n,t,a)=>(m(n,typeof t!="symbol"?t+"":t,a),a);import{C as W,A as v,a as w,aG as f,c as A,i as y,G as b,h as C,l as k,B as P,v as h,aH as u,Y as x,O as V,ag as E,J as T,X as S,p as l,T as p}from"./index.b79cd932.js";let d=function(n){return n[n.Against=0]="Against",n[n.For=1]="For",n[n.Abstain=2]="Abstain",n}({});class B{constructor(t,a,r){i(this,"propose",l(async(t,a)=>{a||(a=[{toAddress:this.contractWrapper.address,nativeTokenValue:0,transactionData:"0x"}]);const r=a.map(e=>e.toAddress),o=a.map(e=>e.nativeTokenValue),c=a.map(e=>e.transactionData);return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:"propose",args:[r,o,c,t],parse:e=>({id:this.contractWrapper.parseLogs("ProposalCreated",e==null?void 0:e.logs)[0].args.proposalId,receipt:e})})}));i(this,"vote",l((()=>{var t=this;return async function(a,r){let o=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"";return await t.ensureExists(a),p.fromContractWrapper({contractWrapper:t.contractWrapper,method:"castVoteWithReason",args:[a,r,o]})}})()));i(this,"execute",l(async t=>{await this.ensureExists(t);const a=await this.get(t),r=a.executions.map(s=>s.toAddress),o=a.executions.map(s=>s.nativeTokenValue),c=a.executions.map(s=>s.transactionData),e=u(a.description);return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:"execute",args:[r,o,c,e]})}));let o=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},c=arguments.length>4?arguments[4]:void 0,e=arguments.length>5?arguments[5]:void 0,s=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new W(t,a,c,o,r);this._chainId=e,this.abi=v.parse(c||[]),this.contractWrapper=s,this.storage=r,this.metadata=new w(this.contractWrapper,f,this.storage),this.app=new A(this.contractWrapper,this.metadata,this.storage),this.encoder=new y(this.contractWrapper),this.estimator=new b(this.contractWrapper),this.events=new C(this.contractWrapper),this.interceptor=new k(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async get(t){const r=(await this.getAll()).filter(o=>o.proposalId.eq(P.from(t)));if(r.length===0)throw new Error("proposal not found");return r[0]}async getAll(){return Promise.all((await this.contractWrapper.read("getAllProposals",[])).map(async t=>({proposalId:t.proposalId,proposer:t.proposer,description:t.description,startBlock:t.startBlock,endBlock:t.endBlock,state:await this.contractWrapper.read("state",[t.proposalId]),votes:await this.getProposalVotes(t.proposalId),executions:t[3].map((a,r)=>({toAddress:t.targets[r],nativeTokenValue:a,transactionData:t.calldatas[r]}))})))}async getProposalVotes(t){const a=await this.contractWrapper.read("proposalVotes",[t]);return[{type:d.Against,label:"Against",count:a.againstVotes},{type:d.For,label:"For",count:a.forVotes},{type:d.Abstain,label:"Abstain",count:a.abstainVotes}]}async hasVoted(t,a){return a||(a=await this.contractWrapper.getSignerAddress()),this.contractWrapper.read("hasVoted",[t,await h(a)])}async canExecute(t){await this.ensureExists(t);const a=await this.get(t),r=a.executions.map(s=>s.toAddress),o=a.executions.map(s=>s.nativeTokenValue),c=a.executions.map(s=>s.transactionData),e=u(a.description);try{return await this.contractWrapper.callStatic().execute(r,o,c,e),!0}catch{return!1}}async balance(){const t=await this.contractWrapper.getProvider().getBalance(this.contractWrapper.address);return{name:"",symbol:"",decimals:18,value:t,displayValue:x(t,18)}}async balanceOfToken(t){const a=new V(await h(t),E,this.contractWrapper.getProvider());return await T(this.contractWrapper.getProvider(),t,await a.balanceOf(this.contractWrapper.address))}async ensureExists(t){try{await this.contractWrapper.read("state",[t])}catch{throw Error(`Proposal ${t} not found`)}}async settings(){const[t,a,r,o,c]=await Promise.all([this.contractWrapper.read("votingDelay",[]),this.contractWrapper.read("votingPeriod",[]),this.contractWrapper.read("token",[]),this.contractWrapper.read("quorumNumerator",[]),this.contractWrapper.read("proposalThreshold",[])]),e=await S(this.contractWrapper.getProvider(),r);return{votingDelay:t.toString(),votingPeriod:a.toString(),votingTokenAddress:r,votingTokenMetadata:e,votingQuorumFraction:o.toString(),proposalTokenThreshold:c.toString()}}async prepare(t,a,r){return p.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:r})}async call(t,a,r){return this.contractWrapper.call(t,a,r)}}export{B as Vote};
