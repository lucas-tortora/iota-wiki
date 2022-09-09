"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9899],{3905:(t,e,r)=>{r.d(e,{Zo:()=>m,kt:()=>h});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function s(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},o=Object.keys(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)r=o[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var c=a.createContext({}),l=function(t){var e=a.useContext(c),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=l(t.components);return a.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,o=t.originalType,c=t.parentName,m=s(t,["components","mdxType","originalType","parentName"]),p=l(r),h=n,d=p["".concat(c,".").concat(h)]||p[h]||u[h]||o;return r?a.createElement(d,i(i({ref:e},m),{},{components:r})):a.createElement(d,i({ref:e},m))}));function h(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var o=r.length,i=new Array(o);i[0]=p;var s={};for(var c in e)hasOwnProperty.call(e,c)&&(s[c]=e[c]);s.originalType=t,s.mdxType="string"==typeof t?t:n,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58474:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=r(87462),n=(r(67294),r(3905));const o={keywords:["EVM","EVM chain","Solidity","Smart Contracts","Ethereum"],description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity,this means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png"},i="EVM/Solidity Based Smart Contracts",s={unversionedId:"guide/evm/introduction",id:"guide/evm/introduction",title:"EVM/Solidity Based Smart Contracts",description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity,this means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts.",source:"@site/content/build/wasp/production/documentation/docs/guide/evm/introduction.md",sourceDirName:"guide/evm",slug:"/guide/evm/introduction",permalink:"/smart-contracts/guide/evm/introduction",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/evm/introduction.md",tags:[],version:"current",frontMatter:{keywords:["EVM","EVM chain","Solidity","Smart Contracts","Ethereum"],description:"The current release of IOTA Smart Contracts also has experimental support for EVM/Solidity,this means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Colored Tokens and Time Locks",permalink:"/smart-contracts/guide/schema/timelock"},next:{title:"EVM Limitations within IOTA Smart Contracts",permalink:"/smart-contracts/guide/evm/limitations"}},c={},l=[{value:"What is EVM/Solidity",id:"what-is-evmsolidity",level:3},{value:"How IOTA Smart Contracts Work With EVM",id:"how-iota-smart-contracts-work-with-evm",level:3}],m={toc:l};function u(t){let{components:e,...r}=t;return(0,n.kt)("wrapper",(0,a.Z)({},m,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"evmsolidity-based-smart-contracts"},"EVM/Solidity Based Smart Contracts"),(0,n.kt)("p",null,"The current release of IOTA Smart Contracts has experimental support for EVM/Solidity smart contracts as well as Wasm based smart contracts. This means that existing smart contracts and tooling from other EVM based chains like Ethereum are fully compatible with EVM chains running on IOTA Smart Contracts. This allows us to offer the existing ecosystem around EVM/Solidity a familiar alternative."),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"This experimental implementation currently does not have the ability yet to interact with Layer 1 IOTA tokens. We will bring support for this in a later release.")),(0,n.kt)("h3",{id:"what-is-evmsolidity"},"What is EVM/Solidity"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/evm/"},"EVM"),' stands for "Ethereum Virtual Machine", which currently is the tried and proven virtual machine running most smart contract implementations. ',(0,n.kt)("a",{parentName:"p",href:"https://soliditylang.org/"},"Solidity")," is the programming language of choice with EVM, and has been created for this specific purpose."),(0,n.kt)("p",null,"The main benefit of using EVM/Solidity right now is the sheer amount of resources available from it from years of development and experimentation on Ethereum. There are many articles, tutorials, examples and tools available for EVM/Solidity, and the IOTA Smart Contracts implementation is fully compatible with them. If you have experience developing on other EVM based chains you will feel right at home, and any existing contracts you've written will probably need no (or very minimal) changes to function on IOTA Smart Contracts as well."),(0,n.kt)("h3",{id:"how-iota-smart-contracts-work-with-evm"},"How IOTA Smart Contracts Work With EVM"),(0,n.kt)("p",null,"With IOTA Smart Contracts, an EVM based chain runs inside an IOTA Smart Contracts chain as an IOTA Smart Contracts smart contract. Because of this, it is possible to run both Wasm based smart contracts and an EVM chain in a single IOTA Smart Contracts chain. We offer an EVM compatible JSON-RPC server as part of the ",(0,n.kt)("inlineCode",{parentName:"p"},"wasp-cli"),", which allows you to connect to these EVM Chains using existing tooling like ",(0,n.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask"),", ",(0,n.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," or ",(0,n.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat"),". Deploying to a new EVM chain is as easy as pointing your tools to the address of your JSON-RPC gateway."))}u.isMDXComponent=!0}}]);