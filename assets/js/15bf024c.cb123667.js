"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73769],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>p});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),h=c(a),p=i,m=h["".concat(s,".").concat(p)]||h[p]||d[p]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function p(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var c=2;c<o;c++)r[c]=a[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},81424:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var n=a(87462),i=(a(67294),a(3905));const o={keywords:["Smart Contracts","Chain","EVM","Solidity","Tooling","wasp-cli","hardhat","metamask","JSON-RPC"],description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure hardhat, metamask, remix, Ether.js and Web3.js among others.",image:"/img/logo/WASP_logo_dark.png"},r="EVM Tooling",l={unversionedId:"guide/evm/tooling",id:"guide/evm/tooling",title:"EVM Tooling",description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure hardhat, metamask, remix, Ether.js and Web3.js among others.",source:"@site/content/build/wasp/production/documentation/docs/guide/evm/tooling.md",sourceDirName:"guide/evm",slug:"/guide/evm/tooling",permalink:"/smart-contracts/guide/evm/tooling",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/master/documentation/content/build/wasp/production/documentation/docs/guide/evm/tooling.md",tags:[],version:"current",frontMatter:{keywords:["Smart Contracts","Chain","EVM","Solidity","Tooling","wasp-cli","hardhat","metamask","JSON-RPC"],description:"Existing EVM tooling is compatible and can be used directly with an IOTA Smart Contracts chain running EVM. You can configure hardhat, metamask, remix, Ether.js and Web3.js among others.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Creating an EVM Chain",permalink:"/smart-contracts/guide/evm/create-chain"},next:{title:"Solidity Smart Contract Example",permalink:"/smart-contracts/guide/evm/examples/introduction"}},s={},c=[{value:"Tooling Considerations",id:"tooling-considerations",level:2},{value:"Wasp-cli",id:"wasp-cli",level:2},{value:"MetaMask",id:"metamask",level:2},{value:"Remix",id:"remix",level:3},{value:"Video Tutorial",id:"video-tutorial",level:2},{value:"Hardhat",id:"hardhat",level:2},{value:"Video Tutorial",id:"video-tutorial-1",level:2},{value:"Ethers.js/Web3.js",id:"ethersjsweb3js",level:2},{value:"Other Tooling",id:"other-tooling",level:2}],u={toc:c};function d(e){let{components:t,...o}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"evm-tooling"},"EVM Tooling"),(0,i.kt)("p",null,"EVM on IOTA Smart Contracts has been integrated in a way that the existing EVM tooling is compatible, and can be used directly with an IOTA Smart Contracts chain running EVM as long as a couple of things are taken into account."),(0,i.kt)("h2",{id:"tooling-considerations"},"Tooling Considerations"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please make sure you use the correct JSON-RPC endpoint URL in your tooling for your chain. If you run locally this will simply be ",(0,i.kt)("inlineCode",{parentName:"li"},"localhost:8545"),"."),(0,i.kt)("li",{parentName:"ol"},"Please make sure you use the right ",(0,i.kt)("inlineCode",{parentName:"li"},"Chain ID")," as configured while starting the JSON-RPC service. If you did not explicitly define this while starting the service, the default Chain ID will be ",(0,i.kt)("inlineCode",{parentName:"li"},"1074"),". "),(0,i.kt)("li",{parentName:"ol"},"Fees are being handled on the IOTA Smart Contracts chain level, not EVM level. Because of this, you can simply use a gas price of 0 on EVM level at this point in time.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Re-using an existing Chain ID is not recommended and can be a security risk. For any serious chain you will be running make sure you register a unique Chain ID on ",(0,i.kt)("a",{parentName:"p",href:"https://chainlist.org/"},"Chainlist")," and use that instead of the default.")),(0,i.kt)("h2",{id:"wasp-cli"},"Wasp-cli"),(0,i.kt)("p",null,"The Wasp CLI has some very basic functionalities to manage an EVM chain. Given the compatibility with existing tooling, only the basics are covered to get started with IOTA Smart Contracts and EVM. You can currently either run a JSON-RPC server, or deploy the EVM Chain itself on an IOTA Smart Contracts chain. To see the available options and configuration parameters simply run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli chain evm\n")),(0,i.kt)("h2",{id:"metamask"},"MetaMask"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://metamask.io/"},"MetaMask")," is a popular EVM compatible wallet which runs in a browser extension that allows you to let your wallet interact with web applications utilizing an EVM chain (dApps). "),(0,i.kt)("p",null,"To use your EVM chain with MetaMask, simply open up MetaMask and click on the network drop-down list at the very top. At the bottom of this list you will see the option ",(0,i.kt)("inlineCode",{parentName:"p"},"Custom RPC"),", click on this. For a local setup use the values as shown in the image below:"),(0,i.kt)("p",null,(0,i.kt)("a",{target:"_blank",href:a(80311).Z},(0,i.kt)("img",{alt:"MetaMask Network",src:a(14431).Z,width:"358",height:"597"}))),(0,i.kt)("p",null,"Make sure that your ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC Url")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain ID")," are set correctly and match the settings you've chosen running your JSON-RPC endpoint. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Network Name")," can be whatever you see fit."),(0,i.kt)("p",null,"If you wish to use additional EVM chains with Metamask, you can simply add more Custom RPC networks, as long as they have a unique ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC Url"),". Once this is done, you can start using MetaMask to manage your EVM wallet or issue/sign transactions with any dApp running on that network. "),(0,i.kt)("h3",{id:"remix"},"Remix"),(0,i.kt)("p",null,"If you also want to use the ",(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix IDE")," to deploy any regular Solidity Smart Contract, you should set the environment as ",(0,i.kt)("strong",{parentName:"p"},"Injected Web3"),", which should then connect with your MetaMask wallet."),(0,i.kt)("h2",{id:"video-tutorial"},"Video Tutorial"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/yOyl30LQfac",title:"Deploy Solidity Contract via Remix + Metamask",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"hardhat"},"Hardhat"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://hardhat.org/"},"Hardhat")," is a commandline toolbox that allows you to deploy, test, verify, and interact with Solidity smart contracts on an EVM chain. EVM chains running on IOTA Smart Contracts are compatible with Hardhat; simply make sure you add the correct network parameters to your ",(0,i.kt)("inlineCode",{parentName:"p"},"hardhat.config.js"),", for example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-javascript"},"networks: {\n    local: {\n        url: 'http://localhost:8545',\n        chainId: 1074,\n        accounts: [privkey],\n        timeout: 60000\n    }\n}\n")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Currently, there is no validation service available for EVM/Solidity smart contracts on IOTA Smart Contracts, which is often offered through block explorer API's.")),(0,i.kt)("h2",{id:"video-tutorial-1"},"Video Tutorial"),(0,i.kt)("iframe",{width:"560",height:"315",src:"https://www.youtube.com/embed/zfc4ENTQkDE",title:"Deploy Solidity Contracts with Hardhat",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0}),(0,i.kt)("h2",{id:"ethersjsweb3js"},"Ethers.js/Web3.js"),(0,i.kt)("p",null,"As long as you input the right configuration parameters for the JSON-RPC endpoint to talk to, ",(0,i.kt)("a",{parentName:"p",href:"https://docs.ethers.io/"},"Ethers.js")," and ",(0,i.kt)("a",{parentName:"p",href:"https://web3js.readthedocs.io/"},"Web3.js")," are also compatible with EVM chains on IOTA Smart Contracts. Alternatively you can let both interact through MetaMask instead so that it uses the network as configured in MetaMask. For more information on this, read their documentation."),(0,i.kt)("h2",{id:"other-tooling"},"Other Tooling"),(0,i.kt)("p",null,"Most other tooling available will be compatible as well as long as you enter the correct ",(0,i.kt)("inlineCode",{parentName:"p"},"Chain ID")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"RPC Url"),"."))}d.isMDXComponent=!0},80311:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/files/metamask_network-cbc823ddea74052c9769089f219c4447.png"},14431:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/metamask_network-cbc823ddea74052c9769089f219c4447.png"}}]);