"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[13271],{99061:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return h}});var i=n(87462),a=n(63366),o=(n(67294),n(3905)),r=n(2206),s=["components"],l={title:"Create a Decentralized Identity",sidebar_label:"Create a DID Document",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},d=void 0,c={unversionedId:"getting_started/create_and_publish",id:"getting_started/create_and_publish",title:"Create a Decentralized Identity",description:"Create DID Documents and publish them to the Tangle",source:"@site/content/build/identity.rs/develop/documentation/docs/getting_started/create_and_publish.mdx",sourceDirName:"getting_started",slug:"/getting_started/create_and_publish",permalink:"/identity.rs/develop/getting_started/create_and_publish",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/getting_started/create_and_publish.mdx",tags:[],version:"current",frontMatter:{title:"Create a Decentralized Identity",sidebar_label:"Create a DID Document",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},sidebar:"docs",previous:{title:"Install the Library",permalink:"/identity.rs/develop/getting_started/install"},next:{title:"Introduction",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/overview"}},u={},h=[{value:"Identity Generation Process",id:"identity-generation-process",level:2},{value:"Using the Account Module",id:"using-the-account-module",level:2}],p={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"If you want to benefit from Self-Sovereign Identity, you need to create a ",(0,o.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/overview"},"Decentralized Identity"),". This identity consists of many parts that have different functions. This page will cover the basics about identity creation and publishing to the Tangle."),(0,o.kt)("h2",{id:"identity-generation-process"},"Identity Generation Process"),(0,o.kt)("p",null,"The generation of an identity starts with a randomly generated ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Public-key_cryptography"},"asymmetric key pair"),". You can generate it with the IOTA Identity framework, or you can provide it as a parameter during the creation process. The public key is hashed using the ",(0,o.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/BLAKE_(hash_function)"},(0,o.kt)("inlineCode",{parentName:"a"},"Blake2b-256")," algorithm"),". This hash becomes the DID, creating a permanent and provable link between the initial keypair and the DID. The public key is then embedded into the initial DID Document and is used for verifying signatures created with the corresponding private key."),(0,o.kt)("h2",{id:"using-the-account-module"},"Using the Account Module"),(0,o.kt)("p",null,"The following example uses the high-level account module of the IOTA Identity framework to create an identity. You should use the account module for most of your use cases, but a lower-level API is also available should you need more flexibility at the cost of more complexity. For more information on APIs please visit the ",(0,o.kt)("a",{parentName:"p",href:"../libraries/rust/getting_started#api-reference"},"Rust API Reference")," or the ",(0,o.kt)("a",{parentName:"p",href:"../libraries/wasm/api_reference"},"WASM API Reference"),"."),(0,o.kt)("admonition",{title:"Using Replit",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Select your programming language of choice and press the green play button to execute the example.")),(0,o.kt)(r.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/create-did?lite=true",rustContent:'// Copyright 2020-2021 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! cargo run --example account_create\n\nuse std::path::PathBuf;\n\nuse identity_iota::account::Account;\nuse identity_iota::account::IdentitySetup;\nuse identity_iota::account::Result;\nuse identity_iota::account_storage::Stronghold;\nuse identity_iota::client::ExplorerUrl;\nuse identity_iota::iota_core::IotaDID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  pretty_env_logger::init();\n\n  // Sets the location and password for the Stronghold\n  //\n  // Stronghold is an encrypted file that manages private keys.\n  // It implements best practices for security and is the recommended way of handling private keys.\n  let stronghold_path: PathBuf = "./example-strong.hodl".into();\n  let password: String = "my-password".to_owned();\n  let stronghold: Stronghold = Stronghold::new(&stronghold_path, password, None).await?;\n\n  // Create a new identity using Stronghold as local storage.\n  //\n  // The creation step generates a keypair, builds an identity\n  // and publishes it to the IOTA mainnet.\n  let account: Account = Account::builder()\n    .storage(stronghold)\n    .create_identity(IdentitySetup::default())\n    .await?;\n\n  // Retrieve the did of the newly created identity.\n  let iota_did: &IotaDID = account.did();\n\n  // Print the local state of the DID Document\n  println!("[Example] Local Document from {} = {:#?}", iota_did, account.document());\n\n  // Prints the Identity Resolver Explorer URL.\n  // The entire history can be observed on this page by clicking "Loading History".\n  let explorer: &ExplorerUrl = ExplorerUrl::mainnet();\n  println!(\n    "[Example] Explore the DID Document = {}",\n    explorer.resolver_url(iota_did)?\n  );\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/bindings/wasm/examples-account/src/create_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/examples_legacy/account/create_did.rs",mdxType:"CodeSnippet"}),(0,o.kt)("p",null,"The first step in this example is the creation of an account. The account is a stateful object that manages one or more identities. The account provides an interface to execute high-level operations on identities, such as ",(0,o.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/create"},"creating")," and ",(0,o.kt)("a",{parentName:"p",href:"../concepts/decentralized_identifiers/update"},"updating"),") them."),(0,o.kt)("p",null,"Next, the identity is created and published to the IOTA Tangle. This operation will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Generate a private key."),(0,o.kt)("li",{parentName:"ol"},"Store it in the account."),(0,o.kt)("li",{parentName:"ol"},"Generate a DID."),(0,o.kt)("li",{parentName:"ol"},"Generate a DID Document."),(0,o.kt)("li",{parentName:"ol"},"Publish it to the Tangle.")),(0,o.kt)("p",null,"Once the DID Document is uploaded to the Tangle, it becomes immutable, meaning that this version of the identity can never be altered or removed. The only way to update or delete an identity is by publishing a new version, which we will discuss in the next section. This immutability is what makes a Decentralized Identity solution based on Distributed Ledger Technology (DLT) trustworthy. The public keys inside the DID Document can never be changed without having access to the private key, allowing the users to completely control their own identities."),(0,o.kt)("p",null,"The rest of the example shows how to retrieve (resolve) the identity from the Tangle and how it can be deleted."))}m.isMDXComponent=!0},2206:function(e,t,n){n.d(t,{Z:function(){return r}});var i=n(86010),a=n(67294),o=n(69319);function r(e){var t=e.nodeReplitLink,n=e.rustContent,r=e.nodeGithubLink,s=e.rustGithubLink,l=a.useState("node"),d=l[0],c=l[1],u=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((function(){var e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),c(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},t&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:function(){localStorage.setItem("lang","node"),c("node")}},"Node.js"),n&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:function(){localStorage.setItem("lang","rust"),c("rust")}},"Rust")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===d?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(o.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},n))),a.createElement("div",{className:(0,i.Z)("githubLink")},r&&"node"===d&&a.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",u),s&&"rust"===d&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}}}]);