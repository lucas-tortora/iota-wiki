"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[47162],{20073:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return h}});var n=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],s={description:"Frequently asked questions regarding the Chrysalis implementation.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["FAQ","dust protection","coordicide","transactions","hornet","bee","libraries","wallet.rs","iota.rs","Firefly","C","spent addresses","bundle mining","explanation"]},l="FAQ",d={unversionedId:"faq",id:"faq",title:"FAQ",description:"Frequently asked questions regarding the Chrysalis implementation.",source:"@site/content/build/introduction-docs/production/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/introduction/faq",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/content/build/introduction-docs/production/docs/faq.md",tags:[],version:"current",frontMatter:{description:"Frequently asked questions regarding the Chrysalis implementation.",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["FAQ","dust protection","coordicide","transactions","hornet","bee","libraries","wallet.rs","iota.rs","Firefly","C","spent addresses","bundle mining","explanation"]},sidebar:"mySidebar",previous:{title:"Resources",permalink:"/introduction/resources"}},c={},h=[{value:"Which Libraries are Available for Chrysalis?",id:"which-libraries-are-available-for-chrysalis",level:2},{value:"What is Dust Protection and How Does it Work?",id:"what-is-dust-protection-and-how-does-it-work",level:2},{value:"What is Happening with Coordicide?",id:"what-is-happening-with-coordicide",level:2},{value:"When is a Transaction on the Network Considered Final/Irreversible?",id:"when-is-a-transaction-on-the-network-considered-finalirreversible",level:2},{value:"Hornet or Bee? Which Node Software Should I Use?",id:"hornet-or-bee-which-node-software-should-i-use",level:2},{value:"What are Spent Addresses and Why are they Dangerous?",id:"what-are-spent-addresses-and-why-are-they-dangerous",level:2},{value:"What is Bundle Mining?",id:"what-is-bundle-mining",level:2}],u={toc:h};function p(e){var t=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"faq"},"FAQ"),(0,i.kt)("h2",{id:"which-libraries-are-available-for-chrysalis"},"Which Libraries are Available for Chrysalis?"),(0,i.kt)("p",null,"At this time, there are a handful of libraries available for Chrysalis which are outlined below:"),(0,i.kt)("p",null,"A low-level library called ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs"},"iota.rs")," which is a client library meant to connect to an IOTA node for core interactions with the Tangle. It is written in Rust and there are currently two bindings for Node.js and Python allowing you to use this library from those languages as well. "),(0,i.kt)("p",null,"For value transactions, there is the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wallet.rs"},"wallet.rs")," library which provides a stateful way to manage IOTA coins for one or multiple accounts. It is also written in Rust and there are currently two bindings for Node.js and Python. "),(0,i.kt)("p",null,"Additionally, there is also a native C (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.c"},"iota.c"),") and an alternative, native javascript (",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.js/tree/chrysalis"},"iota.js"),") client library. "),(0,i.kt)("h2",{id:"what-is-dust-protection-and-how-does-it-work"},"What is Dust Protection and How Does it Work?"),(0,i.kt)("p",null,"Since IOTA is feeless and has the ability to send microtransactions, attackers could use this to spam the network with very low-value transactions, which we call dust. To avoid this, we only allow microtransactions below 1Mi of IOTA tokens to another address if you already have at least 1Mi on that address."),(0,i.kt)("p",null,"For reference, you can read more about Dust Protection on this ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/protocol-rfcs/pull/32"},"RFC"),"."),(0,i.kt)("h2",{id:"what-is-happening-with-coordicide"},"What is Happening with Coordicide?"),(0,i.kt)("p",null,"The Chrysalis release still depends on the Coordinator/Compass to run and issue milestones. The next big release after Chrysalis will be Coordicide, where we will get rid of that dependency. This release is currently in a research/testing phase and will be the main priority after the Chrysalis release."),(0,i.kt)("h2",{id:"when-is-a-transaction-on-the-network-considered-finalirreversible"},"When is a Transaction on the Network Considered Final/Irreversible?"),(0,i.kt)("p",null,"On average, confirmation times on the new network are around 10 seconds. Once a transaction is set to confirm its final transaction, you do not have block confirmations like with blockchain."),(0,i.kt)("h2",{id:"hornet-or-bee-which-node-software-should-i-use"},"Hornet or Bee? Which Node Software Should I Use?"),(0,i.kt)("p",null,"You can either pick ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/bee/getting_started/getting_started"},"Bee")," (Rust based) or ",(0,i.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/welcome"},"Hornet")," (Go based). We currently recommend Hornet since it is the most complete version of the node software. Bee is still missing some optional features you might wish to use."),(0,i.kt)("h2",{id:"what-are-spent-addresses-and-why-are-they-dangerous"},"What are Spent Addresses and Why are they Dangerous?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"In the IOTA 1.0 network, IOTA used Winternitz One Time Signatures (W-OTS) - think of these as, more or less, an authenticator and validator for a transaction. These keys and signatures are highly secure against malicious attacks for signing transactions. But, on the downside, by signing a transaction, W-OTS reveals parts of a private key for the specific address tokens are being spent from. "),(0,i.kt)("li",{parentName:"ul"},"With W-OTS, every time a signature is used to spend tokens from a particular address, any remaining tokens need to be moved onto a new address to prevent malicious actors from brute-forcing (trial-and-error guessing) the remaining parts of the private key for the address. That\u2019s the main reason why this signature scheme is considered to be a \u201cone-time signature\u201d. "),(0,i.kt)("li",{parentName:"ul"},"So, after our Chrysalis update, we are now using the Ed25519, based on the EdDSA, scheme instead of W-OTS. The advantage is that the new scheme addresses all of the issues that W-OTS originally had. Ed25519 verifies both single-signature and batch verification (taking care of the remaining tokens) very quickly, as well as faster key generation and smaller signatures which make it very secure. ")),(0,i.kt)("h2",{id:"what-is-bundle-mining"},"What is Bundle Mining?"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"If you have spent addresses, it means you accidentally received funds to an address that was already spent from, and these funds are not safe to send again due to W-OTS. "),(0,i.kt)("li",{parentName:"ul"},"To secure your spent addresses during the migration, ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/firefly"},"Firefly")," will try to find a new bundle that reveals the least amount of additional private key parts compared to previous signatures."),(0,i.kt)("li",{parentName:"ul"},"This process will take 10 minutes per spent address and upon completion you will be presented with a risk calculation (very high, high, medium, low, very low). We recommended that you repeat the process if it returns a bundle with medium risk or higher, particularly for significant sums of IOTA. You have the option to select which addresses you want to mine for, and again which you want to rerun the process for.")))}p.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=d(r),p=a,f=u["".concat(l,".").concat(p)]||u[p]||h[p]||i;return r?n.createElement(f,o(o({ref:t},c),{},{components:r})):n.createElement(f,o({ref:t},c))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"}}]);