"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9672],{20961:function(e,t,i){i.r(t),i.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return p}});var n=i(87462),r=i(63366),a=(i(67294),i(3905)),s=["components"],o={title:"Verifiable Credentials Overview",sidebar_label:"Overview",description:"Verifiable Credentials are statements about the holder. They can be verified online or in person, and the holder decides who to share them with.",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","person"]},l=void 0,c={unversionedId:"concepts/verifiable_credentials/overview",id:"concepts/verifiable_credentials/overview",title:"Verifiable Credentials Overview",description:"Verifiable Credentials are statements about the holder. They can be verified online or in person, and the holder decides who to share them with.",source:"@site/content/build/identity.rs/develop/documentation/docs/concepts/verifiable_credentials/overview.md",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/overview",permalink:"/identity.rs/develop/concepts/verifiable_credentials/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/concepts/verifiable_credentials/overview.md",tags:[],version:"current",frontMatter:{title:"Verifiable Credentials Overview",sidebar_label:"Overview",description:"Verifiable Credentials are statements about the holder. They can be verified online or in person, and the holder decides who to share them with.",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","person"]},sidebar:"docs",previous:{title:"Create a DID on a Private Tangle",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/private_tangle"},next:{title:"Create and Sign",permalink:"/identity.rs/develop/concepts/verifiable_credentials/create"}},d={},p=[{value:"Verifiable Credentials in IOTA",id:"verifiable-credentials-in-iota",level:3}],h={toc:p};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Credentials are statements about an entity, such as properties that the entity possesses or capabilities that they have (like drivers licences, passports, or a person's age). Verifiable Credentials (VCs) are statements (eg. Alice has a drivers licence) that can be cryptographically verified by a third party, either online or in person. Additionally, the holder of the VC decides what is shared and who it is shared with."),(0,a.kt)("p",null,"There are several types of actors that play different roles in a verifiable credential system. We'll start with a common example of how things work in the world today using physical credentials and centralized databases, and outline the roles that various entities play in the Verifiable Credential system."),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Example - Passport Issuance")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"A government (the ",(0,a.kt)("em",{parentName:"p"},"Issuer"),") issues a passport asserting citizenship (the ",(0,a.kt)("em",{parentName:"p"},"Verifiable Credential"),") to Alice (the ",(0,a.kt)("em",{parentName:"p"},"Subject")," and ",(0,a.kt)("em",{parentName:"p"},"Holder"),"), and writes the information to a database (the ",(0,a.kt)("em",{parentName:"p"},"Verifiable Data Registry"),"). When crossing the border, Alice (the ",(0,a.kt)("em",{parentName:"p"},"Holder"),") presents her passport to a border agent (the ",(0,a.kt)("em",{parentName:"p"},"Verifier"),") who can verify that Alice (the ",(0,a.kt)("em",{parentName:"p"},"Subject"),") is indeed a citizen."))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Subject:")," An entity about which claims are made \u2013 Alice (the ",(0,a.kt)("em",{parentName:"p"},"Subject"),") is a citizen of this country."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Holder:")," An entity which possesses verifiable credentials \u2013 Alice (the ",(0,a.kt)("em",{parentName:"p"},"Holder"),") possesses the passport (the ",(0,a.kt)("em",{parentName:"p"},"VC"),")."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Issuer:")," An entity which asserts claims about a subject \u2013 The governing body (the ",(0,a.kt)("em",{parentName:"p"},"Issuer"),"), which is trusted, issues Alice a passport."),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Verifier:")," An entity which check's if the VC a holder presents is legitimate \u2013 The border agent (the ",(0,a.kt)("em",{parentName:"p"},"Verifier"),") trusts the government (the ",(0,a.kt)("em",{parentName:"p"},"Issuer"),") which issued Alice her passport, and validates that Alice (the ",(0,a.kt)("em",{parentName:"p"},"Subject"),") is a citizen."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"See the ",(0,a.kt)("a",{parentName:"p",href:"https://w3c.github.io/vc-data-model/"},"Verifiable Credentials Data Model 1.0 Specification")," for more information."))),(0,a.kt)("h3",{id:"verifiable-credentials-in-iota"},"Verifiable Credentials in IOTA"),(0,a.kt)("p",null,"In the IOTA Identity framework, instead of a physical passport being given to Alice with the passport information being written into a centralized database owned by the government, Alice receives a digital verifiable credential, and the information required for verification in the future is written to the Tangle."),(0,a.kt)("p",null,"At a high level, the creation and verification of a VC on IOTA works as follows:"),(0,a.kt)("p",null,"The first step is to create a verifiable credential which requires the subject (Alice) and issuer (the government) to have DIDs published to the Tangle, and a set of statements being asserted (that Alice has a passport). The issuer signs the credential with their private key and publishes the public key to the Tangle."),(0,a.kt)("p",null,"Once the issuer is confident that the credential satisfies its expectation (after validating the credential's properties), the credential is stored and transmitted to the subject in a secure manner (off-chain)."),(0,a.kt)("p",null,"Validation is performed by looking up the issuer's public key on the Tangle, the holder proving ownership of their DID to the verifier (evidence), and validating that the credential has indeed been signed by the issuing party."),(0,a.kt)("p",null,"The remaining chapters in this section explore creation, verification, and revocation of VCs in more detail."))}m.isMDXComponent=!0},3905:function(e,t,i){i.d(t,{Zo:function(){return d},kt:function(){return m}});var n=i(67294);function r(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){r(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,r=function(e,t){if(null==e)return{};var i,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||(r[i]=e[i]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)i=a[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(r[i]=e[i])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},d=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var i=e.components,r=e.mdxType,a=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),h=c(i),m=r,u=h["".concat(l,".").concat(m)]||h[m]||p[m]||a;return i?n.createElement(u,s(s({ref:t},d),{},{components:i})):n.createElement(u,s({ref:t},d))}));function m(e,t){var i=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=i.length,s=new Array(a);s[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var c=2;c<a;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}h.displayName="MDXCreateElement"}}]);