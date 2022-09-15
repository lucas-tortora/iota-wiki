"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[23788],{1607:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>l,toc:()=>c});var i=a(87462),n=(a(67294),a(3905));var r=a(82756);const s={title:"Create a Verifiable Credential",sidebar_label:"Create and Sign",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","Create","sign"]},o=void 0,l={unversionedId:"concepts/verifiable_credentials/create",id:"concepts/verifiable_credentials/create",title:"Create a Verifiable Credential",description:"Explain how a VC is created and verified",source:"@site/content/build/identity.rs/v0.6.0/documentation/docs/concepts/verifiable_credentials/create.mdx",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/create",permalink:"/identity.rs/concepts/verifiable_credentials/create",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/support/v0.6/documentation/content/build/identity.rs/v0.6.0/documentation/docs/concepts/verifiable_credentials/create.mdx",tags:[],version:"current",frontMatter:{title:"Create a Verifiable Credential",sidebar_label:"Create and Sign",description:"Explain how a VC is created and verified",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","Create","sign"]},sidebar:"docs",previous:{title:"Overview",permalink:"/identity.rs/concepts/verifiable_credentials/overview"},next:{title:"Revocation",permalink:"/identity.rs/concepts/verifiable_credentials/revocation"}},d={},c=[{value:"Signing",id:"signing",level:2},{value:"Proof Options",id:"proof-options",level:3},{value:"Validation",id:"validation",level:2},{value:"Validation Options",id:"validation-options",level:3},{value:"Sharing Verifiable Credentials",id:"sharing-verifiable-credentials",level:3},{value:"Example",id:"example",level:2}],p={toc:c};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,i.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/overview"},"verifiable credential (VC)")," can represent all information that a physical credential represents, such as a passport or university degree. However, by allowing other parties to cryptographically verify the authorship and integrity of the claims, verifiable credentials can be seen as more tamper-evident and more trustworthy than their physical counterparts."),(0,n.kt)("p",null,"In the IOTA Identity Framework you can create a Verifiable Credential with the following properties:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#contexts"},(0,n.kt)("strong",{parentName:"a"},"Context")),": list of JSON-LD context URIs. Includes ",(0,n.kt)("inlineCode",{parentName:"li"},'"https://www.w3.org/2018/credentials/v1"')," by default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#types"},(0,n.kt)("strong",{parentName:"a"},"Types")),": list of types describing the credential. Includes ",(0,n.kt)("inlineCode",{parentName:"li"},'"VerifiableCredential"')," by default."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#credential-subject"},(0,n.kt)("strong",{parentName:"a"},"Subject")),": the claims of the issuer; a set of objects that contain one or more properties that are each related to a subject."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#issuer"},(0,n.kt)("strong",{parentName:"a"},"Issuer")),": the identifier of the issuer, typically their DID."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#identifiers"},(0,n.kt)("strong",{parentName:"a"},"ID")),": optional URI identifier for the credential."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#issuance-date"},(0,n.kt)("strong",{parentName:"a"},"Issuance Date")),": optional timestamp for expressing the date and time when a credential becomes valid. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#expiration"},(0,n.kt)("strong",{parentName:"a"},"Expiration Date")),": optional timestamp for expressing the date and time when a credential ceases to be valid."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#status"},(0,n.kt)("strong",{parentName:"a"},"Status")),": optional information used to determine the current status of a credential, i.e. whether or not it has been ",(0,n.kt)("a",{parentName:"li",href:"/identity.rs/concepts/verifiable_credentials/revocation"},"revoked"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#data-schemas"},(0,n.kt)("strong",{parentName:"a"},"Schema")),": optional list of objects specifying the schema that the data must conform to. "),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#refreshing"},(0,n.kt)("strong",{parentName:"a"},"Refresh Service")),": optional link to a service where the recipient may refresh the included credentials."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#terms-of-use"},(0,n.kt)("strong",{parentName:"a"},"Terms of Use")),": optional list of policies defining obligations, prohibitions, or permissions of the presentation recipient."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#evidence"},(0,n.kt)("strong",{parentName:"a"},"Evidence")),": optional list of objects that can be used by the issuer to provide the verifier with additional supporting information in a verifiable credential."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#nontransferable-property"},(0,n.kt)("strong",{parentName:"a"},"Non-Transferable")),": optional flag that indicates that a verifiable credential must only be encapsulated in a ",(0,n.kt)("a",{parentName:"li",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentation")," whose proof was issued by the credential subject.")),(0,n.kt)("h2",{id:"signing"},"Signing"),(0,n.kt)("p",null,"After creation, the issuer signs the verifiable credential using one of their private keys, embedding the digital signature in its ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#proofs-signatures"},"proof")," section. This is what allows verifiers to independently validate the credential using the corresponding public key from the issuer's DID Document."),(0,n.kt)("h3",{id:"proof-options"},"Proof Options"),(0,n.kt)("p",null,"A digital signature on a verifiable credential both provides data integrity and proves the DID of the issuer.\nThe proof section embedded in a credential may also include additional metadata."),(0,n.kt)("p",null,"The following metadata properties can be configured by the framework and are optional and omitted by default:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Created"),": timestamp of when the credential was signed, recommended."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Expires"),": timestamp after which the signature is no longer considered valid. Implementers should prefer to set the dedicated ",(0,n.kt)("strong",{parentName:"li"},"Expiration Date")," property on credentials instead."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proof Purpose"),": indicates the purpose of the signature.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AssertionMethod"),": to assert a claim. The signing verification method must have an ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#assertion"},(0,n.kt)("inlineCode",{parentName:"a"},"assertionMethod"))," relationship to be valid."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Authentication"),": to authenticate the signer. The signing verification method must have an ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/did-core/#authentication"},(0,n.kt)("inlineCode",{parentName:"a"},"authentication"))," relationship to be valid.")))),(0,n.kt)("p",null,"Most verifiable credentials should be signed with the assertion method proof purpose to clearly indicate that the signature is asserting a claim and restrict it to valid verification methods. Whereas a proof may be attached to a ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentation")," for authentication purposes. "),(0,n.kt)("p",null,"Other metadata fields such as ",(0,n.kt)("inlineCode",{parentName:"p"},"challenge")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"domain")," may be included, however they are more pertinent for ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentations"),"."),(0,n.kt)("h2",{id:"validation"},"Validation"),(0,n.kt)("p",null,"Verifiers should ensure certain properties of a credential are valid when receiving one or more in a ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentation"),". Both issuers and holders may also wish to validate their credentials, particularly directly after creating or receiving one. Validation may be performed at any point in time and can be a useful way of checking whether a credential has expired or been revoked. "),(0,n.kt)("p",null,"The IOTA Identity Framework supports the following checks during credential validation:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Semantic structure"),": ensures the credential adheres to the specification."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Proof"),": verifies the signature against the DID Document of the issuer."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Optional validations"),": additional checks on credential properties and the signature can be configured by specifying ",(0,n.kt)("a",{parentName:"li",href:"#validation-options"},"Validation Options"),".")),(0,n.kt)("h3",{id:"validation-options"},"Validation Options"),(0,n.kt)("p",null,"These options specify conditions that specific properties in a credential must satisfy."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Expiry Date"),": check that the ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#expiration"},(0,n.kt)("inlineCode",{parentName:"a"},"expirationDate"))," property, if present, is not before a specific datetime. Defaults to the current datetime if unset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Issuance Date"),": check that that ",(0,n.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#issuance-date"},(0,n.kt)("inlineCode",{parentName:"a"},"issuanceDate"))," property, if present, is not after a specific datetime. Defaults to the current datetime if unset."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"Verifier Options"),": validates aspects of the credential signature and its metadata, see ",(0,n.kt)("a",{parentName:"li",href:"#proof-options"},"Proof Options"),".")),(0,n.kt)("h3",{id:"sharing-verifiable-credentials"},"Sharing Verifiable Credentials"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verifiable presentation")," is the recommended data format for sharing one or more verifiable credentials, as it provides cryptographic means of proving the DID of the holder presenting them, and for enforcing ",(0,n.kt)("a",{parentName:"p",href:"https://www.w3.org/TR/vc-data-model/#subject-holder-relationships"},"subject-holder relationships"),". See the ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"Verifiable Presentations")," page for further detail."),(0,n.kt)("h2",{id:"example"},"Example"),(0,n.kt)("p",null,"The following code exemplifies how an issuer can create, sign, and validate a verifiable credential. In this example, the issuer signs a UniversityDegreeCredential with Alice's name and DID.\nThis Verifiable Credential can be ",(0,n.kt)("a",{parentName:"p",href:"/identity.rs/concepts/verifiable_credentials/verifiable_presentations"},"verified by anyone"),", allowing Alice to take control of it and share it with anyone."),(0,n.kt)(r.Z,{nodeReplitLink:"https://repl.it/@IOTAFoundation/create-vc?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! A basic example that generates and publishes subject and issuer DID\n//! Documents, then creates a Verifiable Credential (vc) specifying claims about the\n//! subject, and retrieves information through the CredentialValidator API.\n//!\n//! cargo run --example account_create_vc\n\nuse identity_iota::account::Account;\nuse identity_iota::account::AccountBuilder;\nuse identity_iota::account::IdentitySetup;\nuse identity_iota::account::MethodContent;\nuse identity_iota::account::Result;\n\nuse identity_iota::client::CredentialValidationOptions;\nuse identity_iota::client::CredentialValidator;\nuse identity_iota::client::FailFast;\nuse identity_iota::core::json;\nuse identity_iota::core::FromJson;\nuse identity_iota::core::ToJson;\nuse identity_iota::core::Url;\nuse identity_iota::credential::Credential;\nuse identity_iota::credential::CredentialBuilder;\nuse identity_iota::credential::Subject;\nuse identity_iota::crypto::ProofOptions;\nuse identity_iota::did::DID;\n\npub async fn create_vc() -> Result<String> {\n  // Create an account builder with in-memory storage for simplicity.\n  // See `create_did` example to configure Stronghold storage.\n  let mut builder: AccountBuilder = Account::builder();\n\n  // Create an identity for the issuer.\n  let mut issuer: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Add verification method to the issuer.\n  issuer\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("issuerKey")\n    .apply()\n    .await?;\n\n  // Create an identity for the holder, in this case also the subject.\n  let alice: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Create a credential subject indicating the degree earned by Alice.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": alice.document().id(),\n    "name": "Alice",\n    "degree": {\n      "type": "BachelorDegree",\n      "name": "Bachelor of Science and Arts",\n    },\n    "GPA": "4.0",\n  }))?;\n\n  // Build credential using subject above and issuer.\n  let mut credential: Credential = CredentialBuilder::default()\n    .id(Url::parse("https://example.edu/credentials/3732")?)\n    .issuer(Url::parse(issuer.did().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .subject(subject)\n    .build()?;\n\n  // Sign the Credential with the issuer\'s verification method.\n  issuer\n    .sign("#issuerKey", &mut credential, ProofOptions::default())\n    .await?;\n\n  println!("Credential JSON > {:#}", credential);\n\n  // Before sending this credential to the holder the issuer wants to validate that some properties\n  // of the credential satisfy their expectations.\n\n  // Validate the credential\'s signature using the issuer\'s DID Document, the credential\'s semantic structure,\n  // that the issuance date is not in the future and that the expiration date is not in the past:\n  CredentialValidator::validate(\n    &credential,\n    &issuer.document(),\n    &CredentialValidationOptions::default(),\n    FailFast::FirstError,\n  )\n  .unwrap();\n\n  println!("VC successfully validated");\n\n  // The issuer is now sure that the credential they are about to issue satisfies their expectations.\n  // The credential is then serialized to JSON and transmitted to the subject in a secure manner.\n  // Note that the credential is NOT published to the IOTA Tangle. It is sent and stored off-chain.\n  let credential_json: String = credential.to_json()?;\n\n  Ok(credential_json)\n}\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // Obtain a JSON representation of a credential issued to us\n  let _credential_json: String = create_vc().await?;\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/bindings/wasm/examples-account/src/create_vc.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/support/v0.6/examples/account/create_vc.rs",mdxType:"CodeSnippet"}))}u.isMDXComponent=!0},82756:(e,t,a)=>{a.d(t,{Z:()=>s});var i=a(86010),n=a(67294),r=a(44393);function s(e){let{nodeReplitLink:t,rustContent:a,nodeGithubLink:s,rustGithubLink:o}=e;const[l,d]=n.useState("node"),c=n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},n.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),n.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,n.useEffect)((()=>{let e=localStorage.getItem("lang"),i=e||"node";"node"!==i||t||(i="rust"),"rust"!==i||a||(i="node"),d(i)})),n.createElement("div",null,n.createElement("div",{className:(0,i.Z)("langSelector")},t&&n.createElement("button",{className:(0,i.Z)("button","languageButton","mr-sm",{activeButton:"node"===l,inactiveButton:"node"!==l}),onClick:()=>{localStorage.setItem("lang","node"),d("node")}},"Node.js"),a&&n.createElement("button",{className:(0,i.Z)("button","languageButton",{activeButton:"rust"==l,inactiveButton:"rust"!==l}),onClick:()=>{localStorage.setItem("lang","rust"),d("rust")}},"Rust")),n.createElement("div",{className:(0,i.Z)("codeSnippetContainer")},"node"===l?n.createElement(n.Fragment,null,n.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):n.createElement("div",{className:(0,i.Z)("rustContainer")},n.createElement(r.Z,{className:(0,i.Z)("noMarginBottom"),language:"rust"},a))),n.createElement("div",{className:(0,i.Z)("githubLink")},s&&"node"===l&&n.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",c),o&&"rust"===l&&n.createElement("a",{href:o,target:"_blank"},"GitHub\xa0",c)))}}}]);