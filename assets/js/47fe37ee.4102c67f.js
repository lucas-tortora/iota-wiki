"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[9930],{58967:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return u},default:function(){return m},frontMatter:function(){return d},metadata:function(){return l},toc:function(){return h}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),o=n(2206),s=["components"],d={title:"Creating a Decentralized Identity",sidebar_label:"Create and Publish",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},u=void 0,l={unversionedId:"concepts/decentralized_identifiers/create",id:"concepts/decentralized_identifiers/create",title:"Creating a Decentralized Identity",description:"Create DID Documents and publish them to the Tangle",source:"@site/content/build/identity.rs/develop/documentation/docs/concepts/decentralized_identifiers/create.mdx",sourceDirName:"concepts/decentralized_identifiers",slug:"/concepts/decentralized_identifiers/create",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/create",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/concepts/decentralized_identifiers/create.mdx",tags:[],version:"current",frontMatter:{title:"Creating a Decentralized Identity",sidebar_label:"Create and Publish",description:"Create DID Documents and publish them to the Tangle",image:"/img/Identity_icon.png",keywords:["Documents","DID","Tangle","Create","Publish"]},sidebar:"docs",previous:{title:"Alias Output",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/alias"},next:{title:"Update",permalink:"/identity.rs/develop/concepts/decentralized_identifiers/update"}},c={},h=[{value:"Creating an Identity Using the Account",id:"creating-an-identity-using-the-account",level:2},{value:"Identity Generation Process",id:"identity-generation-process",level:3}],p={toc:h};function m(e){var t=e.components,n=(0,a.Z)(e,s);return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"When someone or something wants to benefit from Self-Sovereign Identity, they must first create a Decentralized Identity. This identity consists of many parts that have different functions. This page will cover both the basics and the details about identity creation and publishing."),(0,r.kt)("h2",{id:"creating-an-identity-using-the-account"},"Creating an Identity Using the Account"),(0,r.kt)("admonition",{title:"Using Replit",type:"tip"},(0,r.kt)("p",{parentName:"admonition"},"Select your programming language of choice and press the green play button to execute the example.")),(0,r.kt)(o.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/Create-DID-07?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\nuse anyhow::Context;\nuse examples::get_address_with_funds;\nuse examples::random_stronghold_path;\nuse examples::NETWORK_ENDPOINT;\nuse identity_core::convert::ToJson;\nuse identity_core::crypto::KeyPair;\nuse identity_core::crypto::KeyType;\nuse identity_did::verification::MethodScope;\nuse identity_stardust::NetworkName;\nuse identity_stardust::StardustClientExt;\nuse identity_stardust::StardustDocument;\nuse identity_stardust::StardustIdentityClientExt;\nuse identity_stardust::StardustVerificationMethod;\nuse iota_client::block::address::Address;\nuse iota_client::block::output::AliasOutput;\nuse iota_client::secret::stronghold::StrongholdSecretManager;\nuse iota_client::secret::SecretManager;\nuse iota_client::Client;\n\n/// Demonstrates how to create a DID Document and publish it in a new Alias Output.\n#[tokio::main]\nasync fn main() -> anyhow::Result<()> {\n  // Create a new client to interact with the IOTA ledger.\n  let client: Client = Client::builder().with_primary_node(NETWORK_ENDPOINT, None)?.finish()?;\n\n  // Create a new secret manager backed by a Stronghold.\n  let mut secret_manager: SecretManager = SecretManager::Stronghold(\n    StrongholdSecretManager::builder()\n      .password("secure_password")\n      .build(random_stronghold_path())?,\n  );\n\n  // Get an address and with funds for testing.\n  let address: Address = get_address_with_funds(&client, &mut secret_manager)\n    .await\n    .context("failed to get address with funds")?;\n\n  // Get the Bech32 human-readable part (HRP) of the network.\n  let network_name: NetworkName = client.network_name().await?;\n\n  // Create a new DID document with a placeholder DID.\n  // The DID will be derived from the Alias Id of the Alias Output after publishing.\n  let mut document: StardustDocument = StardustDocument::new(&network_name);\n\n  // Insert a new Ed25519 verification method in the DID document.\n  let keypair: KeyPair = KeyPair::new(KeyType::Ed25519)?;\n  let method: StardustVerificationMethod =\n    StardustVerificationMethod::new(document.id().clone(), keypair.type_(), keypair.public(), "#key-1")?;\n  document.insert_method(method, MethodScope::VerificationMethod)?;\n\n  // Construct an Alias Output containing the DID document, with the wallet address\n  // set as both the state controller and governor.\n  let alias_output: AliasOutput = client.new_did_output(address, document, None).await?;\n  println!("Alias Output: {}", alias_output.to_json()?);\n\n  // Publish the Alias Output and get the published DID document.\n  let document: StardustDocument = client.publish_did_output(&secret_manager, alias_output).await?;\n  println!("Published DID document: {:#}", document);\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/bindings/wasm/examples-account/src/create_did.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/identity_stardust/examples/ex0_create_did.rs",mdxType:"CodeSnippet"}),(0,r.kt)("p",null,"This examples creates a new address with funds using the faucet on the testnet. Next, it creates a new DID Document with a verification method. This DID Document is then published in an Alias Output making the DID available in the ledger state and resolvable by any node."),(0,r.kt)("p",null,"Note that using the faucet is only possible on the testnet. Once the Stardust update is released on the Shimmer network or the IOTA network, an output with funds is required to create a new Alias Output that represents a DID."),(0,r.kt)("p",null,"Updating the identity is also possible, which will be discussed in the next section, but all previous states of the DID Document will still be stored in permanodes or any third party recording the network activity."),(0,r.kt)("h3",{id:"identity-generation-process"},"Identity Generation Process"),(0,r.kt)("p",null,"In order to create a Alias Output, an existing output is required to make a transaction. For that a new Address is generated and a Basic Output controlled by this address is created using the faucet."),(0,r.kt)("p",null,"A DID Document is then created which includes one verification method. At this point the DID itself is unknown since the Alias Output is not published yet and didn't get an ",(0,r.kt)("inlineCode",{parentName:"p"},"Alias ID")," assigned. For that a placeholder ",(0,r.kt)("inlineCode",{parentName:"p"},"did:stardust:0x0000000000000000000000000000000000000000000000000000000000000000")," is used to reference the DID inside the document."),(0,r.kt)("p",null,"An Alias Output is created which contains an encoded version of the DID Document in its ",(0,r.kt)("inlineCode",{parentName:"p"},"State Metadata")," and has the state controller and the governor set to the generated Ed25519 address. Note that controllers don't have to be Ed25519 addresses, they can be any type of output. However, they must be unlocked in order perform a state or governance transition when the DID Document is updated or destroyed."),(0,r.kt)("p",null,"The byte cost for the document is then automatically calculated and a new transaction is published that includes the Basic Output as input and the newly generated Alias Output as output as well as a Basic Output which contains the remaining IOTA coins."),(0,r.kt)("p",null,"Once the transaction is confirmed, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Alias ID")," would be assigned and the DID can be derived from it. Now The DID Document is stored on the ledger and can be resolved using any node. See the further examples for ",(0,r.kt)("a",{parentName:"p",href:"./update"},"updating")," and ",(0,r.kt)("a",{parentName:"p",href:"./resolve"},"resolving")," DID."))}m.isMDXComponent=!0},2206:function(e,t,n){n.d(t,{Z:function(){return o}});var i=n(86010),a=n(67294),r=n(69319);function o(e){var t=e.nodeReplitLink,n=e.rustContent,o=e.nodeGithubLink,s=e.rustGithubLink,d=a.useState("node"),u=d[0],l=d[1],c=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((function(){var e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||n||(i="node"),l(i)})),a.createElement("div",null,a.createElement("div",{className:(0,i.Z)("langSelector")},t&&a.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===u,inactiveButton:"node"!==u}),onClick:function(){localStorage.setItem("lang","node"),l("node")}},"Node.js"),n&&a.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==u,inactiveButton:"rust"!==u}),onClick:function(){localStorage.setItem("lang","rust"),l("rust")}},"Rust")),a.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===u?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,i.Z)("rustContainer")},a.createElement(r.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},n))),a.createElement("div",{className:(0,i.Z)("githubLink")},o&&"node"===u&&a.createElement("a",{href:o,target:"_blank"},"GitHub\xa0",c),s&&"rust"===u&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",c)))}}}]);