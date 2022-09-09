"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34395],{3905:(t,e,r)=>{r.d(e,{Zo:()=>l,kt:()=>d});var n=r(67294);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function c(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function o(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?c(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},c=Object.keys(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(t);for(n=0;n<c.length;n++)r=c[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var s=n.createContext({}),p=function(t){var e=n.useContext(s),r=e;return t&&(r="function"==typeof t?t(e):o(o({},e),t)),r},l=function(t){var e=p(t.components);return n.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,c=t.originalType,s=t.parentName,l=i(t,["components","mdxType","originalType","parentName"]),m=p(r),d=a,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||c;return r?n.createElement(h,o(o({ref:e},l),{},{components:r})):n.createElement(h,o({ref:e},l))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var c=r.length,o=new Array(c);o[0]=m;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=t,i.mdxType="string"==typeof t?t:a,o[1]=i;for(var p=2;p<c;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},15167:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>c,metadata:()=>i,toc:()=>p});var n=r(87462),a=(r(67294),r(3905));const c={keywords:["Smart Contracts","Architecture","Ethereum","Implementation"],description:"IOTA Smart Contracts allow anyone to start their own chain and validators. Link to full technical description of the IOTA Smart Contarcts architecture and whitepaper",image:"/img/multichain.png"},o="IOTA Smart Contracts Architecture",i={unversionedId:"guide/core_concepts/iscp-architecture",id:"guide/core_concepts/iscp-architecture",title:"IOTA Smart Contracts Architecture",description:"IOTA Smart Contracts allow anyone to start their own chain and validators. Link to full technical description of the IOTA Smart Contarcts architecture and whitepaper",source:"@site/content/build/wasp/production/documentation/docs/guide/core_concepts/iscp-architecture.md",sourceDirName:"guide/core_concepts",slug:"/guide/core_concepts/iscp-architecture",permalink:"/smart-contracts/guide/core_concepts/iscp-architecture",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/core_concepts/iscp-architecture.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Architecture","Ethereum","Implementation"],description:"IOTA Smart Contracts allow anyone to start their own chain and validators. Link to full technical description of the IOTA Smart Contarcts architecture and whitepaper",image:"/img/multichain.png"},sidebar:"tutorialSidebar",previous:{title:"Smart Contracts",permalink:"/smart-contracts/guide/core_concepts/smart-contracts"},next:{title:"Validators",permalink:"/smart-contracts/guide/core_concepts/validators"}},s={},p=[],l={toc:p};function u(t){let{components:e,...c}=t;return(0,a.kt)("wrapper",(0,n.Z)({},l,c,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"iota-smart-contracts-architecture"},"IOTA Smart Contracts Architecture"),(0,a.kt)("p",null,"With IOTA Smart Contracts, anyone can start their own chain and define the validators."),(0,a.kt)("p",null,"Each chain has its own state where a state update (going from one block to the next) is hashed and published to the Tangle, which moves the state anchor on Layer 1."),(0,a.kt)("p",null,"The multi-chain nature of the IOTA Smart Contracts makes it a more complex implementation of smart contracts, over say Ethereum, as illustrated here:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"IOTA Smart Contracts multichain architecture",src:r(30354).Z,width:"862",height:"588"})),(0,a.kt)("p",null,"The comprehensive overview of architectural design decisions of IOTA Smart Contracts can be found in the\n",(0,a.kt)("a",{parentName:"p",href:"https://files.iota.org/papers/ISC_WP_Nov_10_2021.pdf"},"whitepaper"),"."))}u.isMDXComponent=!0},30354:(t,e,r)=>{r.d(e,{Z:()=>n});const n=r.p+"assets/images/multichain-4f8c53ab2ddaac9eeefe509a54e8f7ee.png"}}]);