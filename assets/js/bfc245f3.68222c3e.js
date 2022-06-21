"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[49982],{82088:function(e,t,i){i.r(t),i.d(t,{assets:function(){return l},contentTitle:function(){return d},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return h}});var n=i(87462),a=i(63366),o=(i(67294),i(3905)),r=["components"],s={title:"DID Introduction",sidebar_label:"Introduction",description:"The Decentralized Identifiers (DID) standard from W3C is the fundamental standard that supports the concept of a decentralized digital identity. Explore the basic aspects of the DID standard.",image:"/img/Identity_icon.png",keywords:["public keys","Method Specification","Decentralized Identifiers","overview","DLT"]},d="Decentralized Identifiers (DID)",c={unversionedId:"concepts/decentralized_identifiers/overview",id:"concepts/decentralized_identifiers/overview",title:"DID Introduction",description:"The Decentralized Identifiers (DID) standard from W3C is the fundamental standard that supports the concept of a decentralized digital identity. Explore the basic aspects of the DID standard.",source:"@site/content/build/identity.rs/v0.5.0/documentation/docs/concepts/decentralized_identifiers/overview.md",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/overview",permalink:"/identity.rs/0.5/concepts/decentralized_identifiers/overview",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.5/documentation/content/build/identity.rs/v0.5.0/documentation/docs/concepts/decentralized_identifiers/overview.md",tags:[],version:"current",frontMatter:{title:"DID Introduction",sidebar_label:"Introduction",description:"The Decentralized Identifiers (DID) standard from W3C is the fundamental standard that supports the concept of a decentralized digital identity. Explore the basic aspects of the DID standard.",image:"/img/Identity_icon.png",keywords:["public keys","Method Specification","Decentralized Identifiers","overview","DLT"]},sidebar:"docs",previous:{title:"Create a DID Document",permalink:"/identity.rs/0.5/getting_started/create_and_publish"},next:{title:"Create and Publish",permalink:"/identity.rs/0.5/concepts/decentralized_identifiers/create"}},l={},h=[{value:"Chapter Overview",id:"chapter-overview",level:2},{value:"Decentralized Identifiers",id:"decentralized-identifiers",level:2},{value:"DID Documents",id:"did-documents",level:2},{value:"Why use DIDs?",id:"why-use-dids",level:2},{value:"Why use IOTA Identity over other implementations?",id:"why-use-iota-identity-over-other-implementations",level:2},{value:"Feeless",id:"feeless",level:3},{value:"Ease-of-use",id:"ease-of-use",level:3},{value:"General Purpose DLT",id:"general-purpose-dlt",level:3}],p={toc:h};function u(e){var t=e.components,i=(0,a.Z)(e,r);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"decentralized-identifiers-did"},"Decentralized Identifiers (DID)"),(0,o.kt)("p",null,"The Decentralized Identifiers (DID) standard from the World Wide Web Consortium (W3C) is the fundamental standard that supports the concept of a decentralized digital identity. A DID is a unique identifier that contains information that can be resolved to a DID Document. This document contains data such as public keys, enabling the holder to prove ownership over their personal data, but also URIs that link to public information about the identity. This implementation complies to the ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-core//"},"DID specifications v1.0 Working"),"."),(0,o.kt)("p",null,"In the IOTA Identity framework, we have implemented the DID standard according to the ",(0,o.kt)("inlineCode",{parentName:"p"},"iota")," ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/0.5/specs/did/iota_did_method_spec"},"DID Method Specification"),". We recommend seeing the ",(0,o.kt)("inlineCode",{parentName:"p"},"iota")," DID Method Specification as the golden standard for DID on IOTA. Other implementations of DID on IOTA are recommended to follow the ",(0,o.kt)("inlineCode",{parentName:"p"},"iota")," DID Method Specification. However, it is not necessary to implement a novel Method implementation for every project, so feel free to utilize this framework directly. "),(0,o.kt)("p",null,"An example of a DID conforming to the ",(0,o.kt)("inlineCode",{parentName:"p"},"iota")," method specification:\n",(0,o.kt)("inlineCode",{parentName:"p"},"did:iota:8dQAzVbbf6FLW9ckwyCBnKmcMGcUV9LYJoXtgQkHcNQy")),(0,o.kt)("h2",{id:"chapter-overview"},"Chapter Overview"),(0,o.kt)("p",null,"In this chapter, we will explain the basic aspects of the DID standard. We will explore the how and why of DID Documents and why IOTA is a very suitable technology to host the DID Documents and the rest of a Self-Sovereign Identity (SSI) Framework."),(0,o.kt)("h2",{id:"decentralized-identifiers"},"Decentralized Identifiers"),(0,o.kt)("p",null,"A Decentralized Identifier, or DID, is a unique identifier that is tied to a subject. This subject can be anything, like a person, an organization, an IoT device, or even an object. The identifier can be used by the subject to identify themselves through a digital format, providing a basis for online identification. The identifier looks like a set of random characters that includes some prefixes to determine which standard and implementation is used:"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"did:iota:8dQAzVbbf6FLW9ckwyCBnKmcMGcUV9LYJoXtgQkHcNQy")),(0,o.kt)("p",null,"The World Wide Web Consortium (W3C) is a well-known standardization body that has standardized how DIDs should look and work. This provides a basis for different technologies that implement the DID standard to achieve interoperability. A full list of all implementations can be found ",(0,o.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/did-spec-registries/#did-methods"},"here.")," Please keep in mind that unfortunately most of these methods are outdated and not maintained."),(0,o.kt)("h2",{id:"did-documents"},"DID Documents"),(0,o.kt)("p",null,"The purpose of a DID is to help navigate to a DID Document, which is a document containing more information regarding the identity subject. This document contains data such as public keys, enabling the subject to prove ownership over their personal data, but also URIs that link to public information about the identity."),(0,o.kt)("p",null,"The identifier contains all information to resolve a DID, providing the latest DID Document. The first three characters ",(0,o.kt)("inlineCode",{parentName:"p"},"did")," indicate that the DID standard from W3C must be used to resolve the identifier. It is followed by a unique method name, in our case ",(0,o.kt)("inlineCode",{parentName:"p"},"iota"),", to indicate that the IOTA method is used. The IOTA method is a specific implementation that follows the following ",(0,o.kt)("a",{parentName:"p",href:"/identity.rs/0.5/specs/did/iota_did_method_spec"},"method spec"),". This provides unique rules for the protocol to follow to result in the latest DID Document. In our case, it describes how DID Documents are uploaded and queried to and from the IOTA Tangle. Lastly, a DID contains a set of random characters that are unique per identity, this makes the identity unique and makes sure every identity resolves to a unique DID Document. "),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Requires basic knowledge of Asymmetric Encryption")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The following and later sections require some basic knowledge of Asymmetric Encryption. Please read or view some materials on the subject before continuing."))),(0,o.kt)("p",null,"A DID Document mostly contains two important pieces of data: public keys and services. The public keys can be used to prove ownership over the identity, by cryptographically signing something with the associated private key. The public key can be used to verify that the identity subject signed the data and therefore controls the private key. Ownership over the private keys, therefore, proves ownership over the identity. This also means that it is very important to keep the private keys safe and secure. In addition, the public keys allow users to send encrypted data to the identity, using their public key, that only the identity owner can decrypt."),(0,o.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Never share your private keys, seeds, passphrases with anyone. Not even IOTA Foundation members. This may lead to loss of IOTA funds or control over your own digital identity."))),(0,o.kt)("p",null,"Services are URIs that point to more information about the identity. This could be something as simple as a website for an organizational identity. These services are publicly available for all to read and should therefore not contain Personal Identifiable Information (PII) in the case of human identities."),(0,o.kt)("h2",{id:"why-use-dids"},"Why use DIDs?"),(0,o.kt)("p",null,"DIDs allow any subject to have a unique identifier, that they can prove ownership of and at the same time provide a way to send them encrypted messages. The Identity is Self-Sovereign, meaning the subject is in control of when the identity is created but also destroyed."),(0,o.kt)("p",null,"DIDs become more interesting in combination with Verifiable Credentials, which will be covered in a later section. In essence, Verifiable Credentials (VCs) are signed statements by trusted third parties about a certain identity. The signer, or Issuer, is referenced by the DID and so is the subject, often called the Holder. The Holder controls a copy of this statement and share it with other parties, the Verifiers, that can verify the statement and check which party made the statement, without having to ask the Issuer. Instead, they can verify the signature of the Issuer by checking the Issuers DID Document. This whole setup puts Holders back in control over their own data, but also makes the data much more trustworthy as it has become verifiable."),(0,o.kt)("h2",{id:"why-use-iota-identity-over-other-implementations"},"Why use IOTA Identity over other implementations?"),(0,o.kt)("p",null,"IOTA Identity is a framework to implement Self-Sovereign Identities on IOTA. Inherently, IOTA provides some unique features that have a major impact on the usability of the framework."),(0,o.kt)("h3",{id:"feeless"},"Feeless"),(0,o.kt)("p",null,"IOTA is a feeless Distributed Ledger Technology, which means that messages can immutably be stored inside the Tangle at no cost, nor a requirement of holding any cryptocurrency tokens. That means that SSI applications can directly deploy towards the main network without any problems, as compared to most other SSI solutions running on a test network or having cryptocurrency requirements. This doesn't just make IOTA Identity have predictable costs and prevent issues around cryptocurrency holding taxes and legislation, it also makes it a fair network as anyone would be able to create one or more identities at no cost. The wealth of someone is irrelevant, making it the most inclusive SSI solution."),(0,o.kt)("h3",{id:"ease-of-use"},"Ease-of-use"),(0,o.kt)("p",null,"Without the need for a token, IOTA Identity can directly be used on the main network without having to purchase and manage a cryptocurrency token. In addition, the framework provides easy-to-use APIs that allow both standardized behavior or flexible, yet more complex access. Lastly, IOTA Identity provides a ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/stronghold.rs/welcome/",title:"Stronghold is an open-source software library that was originally built to protect IOTA Seeds, but can be used to protect any digital secret."},"Stronghold")," solution for managing secrets securely, without requiring developers to reinvent the security wheel."),(0,o.kt)("h3",{id:"general-purpose-dlt"},"General Purpose DLT"),(0,o.kt)("p",null,"IOTA is a general-purpose DLT as compared to some for-purpose DLTs with restricted use cases. That means that SSI can easily be combined with other DLT features such as payments, data streams, smart contracts, and access control. It will no longer be needed to utilize multiple DLT projects alongside each other."))}u.isMDXComponent=!0},3905:function(e,t,i){i.d(t,{Zo:function(){return l},kt:function(){return u}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function o(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function r(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?o(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):o(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function s(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)i=o[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var d=n.createContext({}),c=function(e){var t=n.useContext(d),i=t;return e&&(i="function"==typeof e?e(t):r(r({},t),e)),i},l=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),p=c(i),u=a,m=p["".concat(d,".").concat(u)]||p[u]||h[u]||o;return i?n.createElement(m,r(r({ref:t},l),{},{components:i})):n.createElement(m,r({ref:t},l))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=i.length,r=new Array(o);r[0]=p;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var c=2;c<o;c++)r[c]=i[c];return n.createElement.apply(null,r)}return n.createElement.apply(null,i)}p.displayName="MDXCreateElement"}}]);