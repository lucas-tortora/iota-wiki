"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[85277],{80513:function(e,t,i){i.r(t),i.d(t,{assets:function(){return u},contentTitle:function(){return d},default:function(){return m},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return v}});var n=i(87462),a=i(63366),o=(i(67294),i(3905)),r=i(83403),s=["components"],l={title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC can be revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke","revocation"]},d=void 0,c={unversionedId:"concepts/verifiable_credentials/revocation",id:"concepts/verifiable_credentials/revocation",title:"Verifiable Credential Revocation",description:"Explain how a VC can be revoked",source:"@site/content/build/identity.rs/develop/documentation/docs/concepts/verifiable_credentials/revocation.mdx",sourceDirName:"concepts/verifiable_credentials",slug:"/concepts/verifiable_credentials/revocation",permalink:"/identity.rs/develop/concepts/verifiable_credentials/revocation",draft:!1,editUrl:"https://github.com/iotaledger/identity.rs/edit/dev/documentation/content/build/identity.rs/develop/documentation/docs/concepts/verifiable_credentials/revocation.mdx",tags:[],version:"current",frontMatter:{title:"Verifiable Credential Revocation",sidebar_label:"Revocation",description:"Explain how a VC can be revoked",image:"/img/Identity_icon.png",keywords:["verifiable","credentials","revoke","revocation"]},sidebar:"docs",previous:{title:"Create and Sign",permalink:"/identity.rs/develop/concepts/verifiable_credentials/create"},next:{title:"Verifiable Presentations",permalink:"/identity.rs/develop/concepts/verifiable_credentials/verifiable_presentations"}},u={},v=[{value:"Overview",id:"overview",level:2},{value:"Revocation Bitmap",id:"revocation-bitmap",level:2},{value:"Removing the verification method",id:"removing-the-verification-method",level:2},{value:"Example",id:"example",level:2}],h={toc:v};function m(e){var t=e.components,i=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"overview"},"Overview"),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"#example"},"example")," below demonstrates two methods that an issuer can use to revoke a verifiable credential using the IOTA Identity Framework:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"By using the ",(0,o.kt)("a",{parentName:"li",href:"https://www.w3.org/TR/vc-data-model/#status"},(0,o.kt)("inlineCode",{parentName:"a"},"credentialStatus"))," field in a credential and linking to a revocation bitmap, using the ",(0,o.kt)("a",{parentName:"li",href:"../../specs/revocation_bitmap_2022"},(0,o.kt)("inlineCode",{parentName:"a"},"RevocationBitmap2022")),"."),(0,o.kt)("li",{parentName:"ol"},"By removing the verification method that signed the credential. This invalidates all credentials that were signed with that verification method.")),(0,o.kt)("h2",{id:"revocation-bitmap"},"Revocation Bitmap"),(0,o.kt)("p",null,"One of the ways for an issuer to control the status of its credentials is by using a revocation list. At the most basic level, revocation information for all verifiable credentials issued by an issuer are expressed as simple binary values. The issuer keeps a list of all verifiable credentials it has issued in a bitmap. Each verifiable credential is associated with a unique index in the list. If the binary value of the index in the bitmap is 1 (one), the verifiable credential is revoked, if it is 0 (zero) it is not revoked."),(0,o.kt)("p",null,"For example, with this approach the issuer adds an index to a credential in the ",(0,o.kt)("inlineCode",{parentName:"p"},"credentialStatus")," field, such as ",(0,o.kt)("inlineCode",{parentName:"p"},'"5"'),". This part of the credential might then look like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'"credentialStatus": {\n  "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation",\n  "type": "RevocationBitmap2022",\n  "revocationBitmapIndex": "5"\n},\n')),(0,o.kt)("p",null,"The verifier uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"id")," field (",(0,o.kt)("inlineCode",{parentName:"p"},"did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation"),") to look up the service in the issuer's DID document. This is an example of such a service:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "did:iota:EvaQhPXXsJsGgxSXGhZGMCvTt63KuAFtaGThx6a5nSpw#revocation",\n  "type": "RevocationBitmap2022",\n  "serviceEndpoint": "data:application/octet-stream;base64,ZUp5ek1tQmdZR1NBQUFFZ1ptVUFBQWZPQUlF"\n}\n')),(0,o.kt)("p",null,"During verification the verifier decodes the revocation bitmap embedded in the ",(0,o.kt)("inlineCode",{parentName:"p"},"data")," url. This bitmap written as a bitstring looks like this: ",(0,o.kt)("inlineCode",{parentName:"p"},"000001"),". Here, the 5th bit is set, which means the credential with that index is revoked, while all other credentials aren't revoked."),(0,o.kt)("h2",{id:"removing-the-verification-method"},"Removing the verification method"),(0,o.kt)("p",null,"A less efficient alternative is to remove the verification method that signed the credential from the DID Document of the issuer. This means the VC can no longer be validated. However, this would invalidate every VC signed with that verification method, meaning the issuer would have to sign every VC with a different key to retain precise control over which credential is revoked."),(0,o.kt)("h2",{id:"example"},"Example"),(0,o.kt)("p",null,"The following code exemplifies how you can revoke a ",(0,o.kt)("a",{parentName:"p",href:"overview"},"Verifiable Credential (VC)"),"."),(0,o.kt)(r.Z,{nodeReplitLink:"https://replit.com/@IOTAFoundation/revoke-vc-06?lite=true",rustContent:'// Copyright 2020-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\n\n//! This example shows how to revoke a verifiable credential.\n//! It demonstrates two methods for revocation. The first uses a revocation bitmap of type `RevocationBitmap2022`,\n//! while the second method simply removes the verification method (public key) that signed the credential\n//! from the DID Document of the issuer.\n//!\n//! Note that this example uses the "main" network, if you are writing code against the test network then most function\n//! calls will need to include information about the network, since this is not automatically inferred from the\n//! arguments in all cases currently.\n//!\n//! cargo run --example account_revoke_vc\n\nuse identity_iota::account::Account;\nuse identity_iota::account::AccountBuilder;\nuse identity_iota::account::IdentitySetup;\nuse identity_iota::account::MethodContent;\nuse identity_iota::account::Result;\nuse identity_iota::client::CredentialValidationOptions;\nuse identity_iota::client::CredentialValidator;\nuse identity_iota::client::ResolvedIotaDocument;\nuse identity_iota::client::Resolver;\nuse identity_iota::client::ValidationError;\nuse identity_iota::core::json;\nuse identity_iota::core::FromJson;\nuse identity_iota::core::Url;\nuse identity_iota::credential::Credential;\nuse identity_iota::credential::CredentialBuilder;\nuse identity_iota::credential::RevocationBitmapStatus;\nuse identity_iota::credential::Status;\nuse identity_iota::credential::Subject;\nuse identity_iota::crypto::ProofOptions;\nuse identity_iota::did::RevocationBitmap;\nuse identity_iota::did::DID;\n\n#[tokio::main]\nasync fn main() -> Result<()> {\n  // ===========================================================================\n  // Create a Verifiable Credential.\n  // ===========================================================================\n\n  // Create an account builder with in-memory storage for simplicity.\n  // See `create_did` example to configure Stronghold storage.\n  let mut builder: AccountBuilder = Account::builder();\n\n  // Create an identity for the issuer.\n  let mut issuer: Account = builder.create_identity(IdentitySetup::default()).await?;\n\n  // Add a dedicated verification method to the issuer, with which to sign credentials.\n  issuer\n    .update_identity()\n    .create_method()\n    .content(MethodContent::GenerateEd25519)\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // Create a new empty revocation bitmap. No credential is revoked yet.\n  let revocation_bitmap: RevocationBitmap = RevocationBitmap::new();\n\n  // Add the RevocationBitmap as a service endpoint to allow verifiers to check the credential status.\n  issuer\n    .update_identity()\n    .create_service()\n    .fragment("my-revocation-service")\n    .type_(RevocationBitmap::TYPE)\n    .endpoint(revocation_bitmap.to_endpoint()?)\n    .apply()\n    .await?;\n\n  // Create a credential subject indicating the degree earned by Alice.\n  let subject: Subject = Subject::from_json_value(json!({\n    "id": "did:iota:B8DucnzULJ9E8cmaReYoePU2b7UKE9WKxyEVov8tQA7H",\n    "name": "Alice",\n    "degree": "Bachelor of Science and Arts",\n    "GPA": "4.0",\n  }))?;\n\n  // Create an unsigned `UniversityDegree` credential for Alice.\n  // The issuer also chooses a unique `RevocationBitmap` index to be able to revoke it later.\n  let service_url = issuer.did().to_url().join("#my-revocation-service")?;\n  let credential_index: u32 = 5;\n  let status: Status = RevocationBitmapStatus::new(service_url, credential_index).into();\n\n  // Build credential using subject above, status, and issuer.\n  let mut credential: Credential = CredentialBuilder::default()\n    .id(Url::parse("https://example.edu/credentials/3732")?)\n    .issuer(Url::parse(issuer.did().as_str())?)\n    .type_("UniversityDegreeCredential")\n    .status(status)\n    .subject(subject)\n    .build()?;\n\n  // Sign the Credential with the issuer\'s verification method.\n  issuer.sign("#key-1", &mut credential, ProofOptions::default()).await?;\n\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &issuer.document(),\n    &CredentialValidationOptions::default(),\n    identity_iota::client::FailFast::FirstError,\n  );\n\n  // The credential wasn\'t revoked, so we expect the validation to succeed.\n  assert!(validation_result.is_ok());\n\n  // ===========================================================================\n  // Revocation of the Verifiable Credential.\n  // ===========================================================================\n\n  // Update the RevocationBitmap service in the issuer\'s DID Document.\n  // This revokes the credential\'s unique index.\n  issuer\n    .revoke_credentials("my-revocation-service", &[credential_index])\n    .await?;\n\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &issuer.document(),\n    &CredentialValidationOptions::default(),\n    identity_iota::client::FailFast::FirstError,\n  );\n\n  // We expect validation to no longer succeed because the credential was revoked.\n  assert!(matches!(\n    validation_result.unwrap_err().validation_errors[0],\n    ValidationError::Revoked\n  ));\n\n  // ===========================================================================\n  // Alternative revocation of the Verifiable Credential.\n  // ===========================================================================\n\n  // By removing the verification method, that signed the credential, from the issuer\'s DID document,\n  // we effectively revoke the credential, as it will no longer be possible to validate the signature.\n  issuer\n    .update_identity()\n    .delete_method()\n    .fragment("key-1")\n    .apply()\n    .await?;\n\n  // We expect the verifiable credential to be revoked.\n  let resolver: Resolver = Resolver::new().await?;\n  let resolved_issuer_doc: ResolvedIotaDocument = resolver.resolve_credential_issuer(&credential).await?;\n  let validation_result = CredentialValidator::validate(\n    &credential,\n    &resolved_issuer_doc,\n    &CredentialValidationOptions::default(),\n    identity_iota::client::FailFast::FirstError,\n  );\n\n  println!("VC validation result: {:?}", validation_result);\n  assert!(validation_result.is_err());\n\n  println!("Credential successfully revoked!");\n\n  Ok(())\n}\n',nodeGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/bindings/wasm/examples-account/src/revoke_vc.ts",rustGithubLink:"https://github.com/iotaledger/identity.rs/blob/dev/examples/account/revoke_vc.rs",mdxType:"CodeSnippet"}))}m.isMDXComponent=!0},83403:function(e,t,i){i.d(t,{Z:function(){return r}});var n=i(86010),a=i(67294),o=i(31531);function r(e){var t=e.nodeReplitLink,i=e.rustContent,r=e.nodeGithubLink,s=e.rustGithubLink,l=a.useState("node"),d=l[0],c=l[1],u=a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",fill:"currentColor",class:"bi bi-box-arrow-up-right",viewBox:"0 0 16 16"},a.createElement("path",{"fill-rule":"evenodd",d:"M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"}),a.createElement("path",{"fill-rule":"evenodd",d:"M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"}));return(0,a.useEffect)((function(){var e=localStorage.getItem("lang"),n=e||"node";"node"!==n||t||(n="rust"),"rust"!==n||i||(n="node"),c(n)})),a.createElement("div",null,a.createElement("div",{className:(0,n.Z)("langSelector")},t&&a.createElement("button",{className:(0,n.Z)("button","languageButton","mr-sm",{activeButton:"node"===d,inactiveButton:"node"!==d}),onClick:function(){localStorage.setItem("lang","node"),c("node")}},"Node.js"),i&&a.createElement("button",{className:(0,n.Z)("button","languageButton",{activeButton:"rust"==d,inactiveButton:"rust"!==d}),onClick:function(){localStorage.setItem("lang","rust"),c("rust")}},"Rust")),a.createElement("div",{className:(0,n.Z)("codeSnippetContainer")},"node"===d?a.createElement(a.Fragment,null,a.createElement("iframe",{frameborder:"0",width:"100%",height:"700px",src:t})):a.createElement("div",{className:(0,n.Z)("rustContainer")},a.createElement(o.Z,{className:(0,n.Z)("noMarginBottom"),language:"rust"},i))),a.createElement("div",{className:(0,n.Z)("githubLink")},r&&"node"===d&&a.createElement("a",{href:r,target:"_blank"},"GitHub\xa0",u),s&&"rust"===d&&a.createElement("a",{href:s,target:"_blank"},"GitHub\xa0",u)))}}}]);