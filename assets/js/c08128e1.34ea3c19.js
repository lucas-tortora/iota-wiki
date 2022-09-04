"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47362],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return d}});var a=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,a)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function i(e,t){if(null==e)return{};var o,a,n=function(e,t){if(null==e)return{};var o,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)o=r[a],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var o=e.components,n=e.mdxType,r=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=c(o),d=n,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return o?a.createElement(h,l(l({ref:t},p),{},{components:o})):a.createElement(h,l({ref:t},p))}));function d(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=o.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var c=2;c<r;c++)l[c]=o[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,o)}m.displayName="MDXCreateElement"},3261:function(e,t,o){o.r(t),o.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u}});var a=o(87462),n=o(63366),r=(o(67294),o(3905)),l=["components"],i={description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install","how-to"]},s="Testing Smart Contracts with Solo",c={unversionedId:"guide/solo/what-is-solo",id:"guide/solo/what-is-solo",title:"Testing Smart Contracts with Solo",description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols.",source:"@site/content/build/wasp/develop/documentation/docs/guide/solo/what-is-solo.md",sourceDirName:"guide/solo",slug:"/guide/solo/what-is-solo",permalink:"/smart-contracts/develop/guide/solo/what-is-solo",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/solo/what-is-solo.md",tags:[],version:"current",frontMatter:{description:"Solo is a testing framework that allows developers to validate real smart contracts and entire inter-chain protocols.",image:"/img/logo/WASP_logo_dark.png",keywords:["testing framework","golang","rust","inter-chain protocols","validate smart contracts","install","how-to"]},sidebar:"tutorialSidebar",previous:{title:"The Common Account",permalink:"/smart-contracts/develop/guide/core_concepts/accounts/the-common-account"},next:{title:"First Example",permalink:"/smart-contracts/develop/guide/solo/first-example"}},p={},u=[{value:"What is Solo?",id:"what-is-solo",level:2},{value:"Installation",id:"installation",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Access the Solo Framework",id:"access-the-solo-framework",level:3},{value:"Clone the Wasp Repository",id:"clone-the-wasp-repository",level:4},{value:"Install the Solo Package",id:"install-the-solo-package",level:4},{value:"Example Contracts",id:"example-contracts",level:3},{value:"Run <code>*_test</code> Files",id:"run-_test-files",level:3}],m={toc:u};function d(e){var t=e.components,o=(0,n.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"testing-smart-contracts-with-solo"},"Testing Smart Contracts with Solo"),(0,r.kt)("h2",{id:"what-is-solo"},"What is Solo?"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/packages/solo"},(0,r.kt)("em",{parentName:"a"},"Solo"))," is a testing framework that allows developers to\nvalidate real smart contracts and entire inter-chain protocols before deploying them on the distributed network."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://tip.golang.org/doc/go1.18"},"Go (version 1.18)"),". As ",(0,r.kt)("em",{parentName:"p"},"Solo")," tests are written in Go, you must\n",(0,r.kt)("a",{parentName:"p",href:"https://go.dev/doc/install"},"install Go"),"."),(0,r.kt)("h3",{id:"access-the-solo-framework"},"Access the Solo Framework"),(0,r.kt)("p",null,"You can access the Solo package by cloning the ",(0,r.kt)("a",{parentName:"p",href:"#clone-the-wasp-repository"},"Wasp repository"),"\nor ",(0,r.kt)("a",{parentName:"p",href:"#install-the-solo-package"},"installing the Solo package"),"."),(0,r.kt)("h4",{id:"clone-the-wasp-repository"},"Clone the Wasp Repository"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Solo")," is part of the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp.git"},(0,r.kt)("em",{parentName:"a"},"Wasp")," codebase repository"),". You can access the Solo\nframework by cloning the repository with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/iotaledger/wasp.git\n")),(0,r.kt)("p",null,"After you have cloned the repository, you can access the Solo package in the ",(0,r.kt)("inlineCode",{parentName:"p"},"/packages/solo")," folder."),(0,r.kt)("h4",{id:"install-the-solo-package"},"Install the Solo Package"),(0,r.kt)("p",null,"You can install the Solo package separately using the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"go get github.com/iotaledger/wasp/packages/solo\n")),(0,r.kt)("admonition",{title:"Go Docs",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"You can browse the Solo Go API reference (updated to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," branch) in\n",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/iotaledger/wasp/packages/solo"},"go-docs"),".")),(0,r.kt)("h3",{id:"example-contracts"},"Example Contracts"),(0,r.kt)("p",null,"You will need a smart contract to test along with Solo.\nYou can find example implementations of Rust/Wasm smart contracts, including source code and tests, in the Wasp\nrepository\u2019s ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/contracts/wasm"},"contracts/wasm folder"),"."),(0,r.kt)("p",null,"For information on creating Wasm smart contracts, refer to the ",(0,r.kt)("a",{parentName:"p",href:"/smart-contracts/develop/guide/wasm_vm/intro"},"Wasm VM chapter"),"."),(0,r.kt)("p",null,"The following sections will present some Solo usage examples. You can find the example code in\nthe ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples"},"Wasp repository"),"."),(0,r.kt)("h3",{id:"run-_test-files"},"Run ",(0,r.kt)("inlineCode",{parentName:"h3"},"*_test")," Files"),(0,r.kt)("p",null,"You can run ",(0,r.kt)("inlineCode",{parentName:"p"},"*_test")," files by moving to their directory and running the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"go test\n")),(0,r.kt)("p",null,"If you run this command from the ",(0,r.kt)("inlineCode",{parentName:"p"},"/documentation/tutorial-examples")," folder, you will run the\n",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/tree/develop/documentation/tutorial-examples/tutorial-test.go"},"Tutorial Test"),", which\ncontains all the examples explained in the following sections."))}d.isMDXComponent=!0}}]);