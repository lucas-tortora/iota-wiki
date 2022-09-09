"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39025],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(67294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function c(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var s=n.createContext({}),l=function(e){var t=n.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):c(c({},t),e)),o},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=l(o),m=a,h=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return o?n.createElement(h,c(c({ref:t},u),{},{components:o})):n.createElement(h,c({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,c=new Array(r);c[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<r;l++)c[l]=o[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},92130:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var n=o(87462),a=(o(67294),o(3905)),r=o(54411),c=o(43305);const i={keywords:["Smart Contracts","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},s="How to Deposit to a Chain",l={unversionedId:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",id:"guide/core_concepts/accounts/how-to-deposit-to-a-chain",title:"How to Deposit to a Chain",description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",sourceDirName:"guide/core_concepts/accounts",slug:"/guide/core_concepts/accounts/how-to-deposit-to-a-chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-deposit-to-a-chain",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/accounts/how-to-deposit-to-a-chain.mdx",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","deposit","transfer","chain","Rust","Solo"],description:"The `deposit` entrypoint credits the transferred IOTAS into your on-chain account.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"How Accounts Work",permalink:"/smart-contracts/guide/core_concepts/accounts/how-accounts-work"},next:{title:"How to Withdraw From a Chain",permalink:"/smart-contracts/guide/core_concepts/accounts/how-to-withdraw-from-a-chain"}},u={},p=[],d={toc:p};function m(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},d,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-deposit-to-a-chain"},"How to Deposit to a Chain"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"deposit")," entrypoint credits the transferred IOTAS into your on-chain account."),(0,a.kt)(r.Z,{defaultValue:"solo",values:[{label:"Solo",value:"solo"},{label:"Solo (Schema)",value:"soloctx"},{label:"Rust (Schema)",value:"rust"},{label:"Go (Schema)",value:"go"}],mdxType:"Tabs"},(0,a.kt)(c.Z,{value:"solo",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from wallet into chain\nreq := solo.NewCallParams(accounts.Contract.Name, accounts.FuncDeposit.Name)\n_, err := chain.PostRequestSync(req.WithIotas(N), wallet)\nrequire.NoError(t, err)\n"))),(0,a.kt)(c.Z,{value:"soloctx",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from wallet into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx.Sign(wallet))\nd.Func.TransferIotas(N).PostToChain(chainID)\nrequire.NoError(t, ctx.Err)\n"))),(0,a.kt)(c.Z,{value:"rust",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-rust"},"// deposits N iotas from current SC into chain *chainID*\nlet d = coreaccounts::ScFuncs::deposit(ctx);\nd.func.transfer_iotas(N).post_to_chain(chainID);\n"))),(0,a.kt)(c.Z,{value:"go",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-go"},"// deposits N iotas from current SC into chain *chainID*\nd := coreaccounts.ScFuncs.Deposit(ctx)\nd.Func.TransferIotas(N).PostToChain(chainID)\n")))))}m.isMDXComponent=!0},43305:(e,t,o)=>{o.d(t,{Z:()=>c});var n=o(67294),a=o(86010);const r="tabItem__kUE";function c(e){let{children:t,hidden:o,className:c}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(r,c),hidden:o},t)}},54411:(e,t,o)=>{o.d(t,{Z:()=>m});var n=o(87462),a=o(67294),r=o(86010),c=o(51048),i=o(33609),s=o(1943),l=o(72957);const u="tabList_fbd4",p="tabItem_v5XY";function d(e){var t,o;const{lazy:c,block:d,defaultValue:m,values:h,groupId:f,className:b}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=h?h:v.map((e=>{let{props:{value:t,label:o,attributes:n}}=e;return{value:t,label:o,attributes:n}})),y=(0,i.l)(g,((e,t)=>e.value===t.value));if(y.length>0)throw new Error('Docusaurus error: Duplicate values "'+y.map((e=>e.value)).join(", ")+'" found in <Tabs>. Every value needs to be unique.');const w=null===m?m:null!=(t=null!=m?m:null==(o=v.find((e=>e.props.default)))?void 0:o.props.value)?t:v[0].props.value;if(null!==w&&!g.some((e=>e.value===w)))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+g.map((e=>e.value)).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");const{tabGroupChoices:k,setTabGroupChoices:T}=(0,s.U)(),[N,O]=(0,a.useState)(w),S=[],{blockElementScrollPositionUntilNextRender:x}=(0,l.o5)();if(null!=f){const e=k[f];null!=e&&e!==N&&g.some((t=>t.value===e))&&O(e)}const E=e=>{const t=e.currentTarget,o=S.indexOf(t),n=g[o].value;n!==N&&(x(t),O(n),null!=f&&T(f,String(n)))},_=e=>{var t;let o=null;switch(e.key){case"ArrowRight":{var n;const t=S.indexOf(e.currentTarget)+1;o=null!=(n=S[t])?n:S[0];break}case"ArrowLeft":{var a;const t=S.indexOf(e.currentTarget)-1;o=null!=(a=S[t])?a:S[S.length-1];break}}null==(t=o)||t.focus()};return a.createElement("div",{className:(0,r.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":d},b)},g.map((e=>{let{value:t,label:o,attributes:c}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>S.push(e),onKeyDown:_,onFocus:E,onClick:E},c,{className:(0,r.Z)("tabs__item",p,null==c?void 0:c.className,{"tabs__item--active":N===t})}),null!=o?o:t)}))),c?(0,a.cloneElement)(v.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function m(e){const t=(0,c.Z)();return a.createElement(d,(0,n.Z)({key:String(t)},e))}}}]);