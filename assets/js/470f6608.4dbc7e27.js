"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[74938],{46311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return d},metadata:function(){return c},toc:function(){return p}});var i=n(87462),a=n(63366),r=(n(67294),n(3905)),l=["components"],d={image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples"]},o="Create Identity and Credentials",c={unversionedId:"examples/java/create-identity-and-credentials",id:"examples/java/create-identity-and-credentials",title:"Create Identity and Credentials",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",source:"@site/content/build/integration-services/production/documentation/docs/examples/java/create-identity-and-credentials.mdx",sourceDirName:"examples/java",slug:"/examples/java/create-identity-and-credentials",permalink:"/integration-services/examples/java/create-identity-and-credentials",draft:!1,editUrl:"https://github.com/iotaledger/integration-services/edit/develop/documentation/content/build/integration-services/production/documentation/docs/examples/java/create-identity-and-credentials.mdx",tags:[],version:"current",frontMatter:{image:"/img/logo/integration_services.png",description:"The example-1 script authenticates an Integration Service client to manage Identities using the Admin identity created in example-0 and then creates a new Identity, creates a credential for that identity, and verifies the generated credential.",keywords:["how to","create identity","create credentials","verify credentials","authenticate","examples"]},sidebar:"docs",previous:{title:"How To Run Examples",permalink:"/integration-services/examples/java/how-to-run-examples"},next:{title:"Update Users",permalink:"/integration-services/examples/java/update-users"}},s={},p=[{value:"Authentication",id:"authentication",level:2},{value:"Create an Identity",id:"create-an-identity",level:2},{value:"Verify a Credential",id:"verify-a-credential",level:2}],u={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,l);return(0,r.kt)("wrapper",(0,i.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"create-identity-and-credentials"},"Create Identity and Credentials"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/albydeca/iota-is-sdk/blob/main/examples/src/main/java/net/gradbase/examples/CreateIdentityAndCredential.java"},"example-1"),"\nscript authenticates an Integration Service client to manage Identities using the Admin identity\ncreated in ",(0,r.kt)("a",{parentName:"p",href:"./how-to-run-examples"},"example-0")," and then performs the following tasks:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Creates a new Identity (",(0,r.kt)("inlineCode",{parentName:"li"},"userIdentity"),")."),(0,r.kt)("li",{parentName:"ol"},"Creates a credential for that identity (",(0,r.kt)("inlineCode",{parentName:"li"},"userCredential"),")."),(0,r.kt)("li",{parentName:"ol"},"Verifies the generated credential (",(0,r.kt)("inlineCode",{parentName:"li"},"await identity.checkCredential(userCredential)"),").")),(0,r.kt)("p",null,"You can run the example with the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /path/to/examples/folder/\nmvn exec:java -Dexec.mainClass=net.gradbase.examples.CreateIdentityAndCredential\n")),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"You can use the following script to authenticate the client using the admin identity and get the\nBasicIdentityCredential that the admin owns: this is a verifiable credential\nwhich is required for an issuer to sign verifiable credentials for other Identities."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  // Recover the admin identity\n  final String didId = AddAsRootIdentity.authenticateRootIdentity(client);\n  IdentityInternal admin = client.find(didId);\n\n  if (admin == null) {\n    throw new Exception("admin identity is null");\n  }\n\n  // Get admin identity\'s VC\n  ArrayList<VerifiableCredential> vcs = (ArrayList<VerifiableCredential>) admin.getVerifiableCredentials();\n\n  if (vcs.size() > 0) {\n    VerifiableCredential firstCredential = vcs.get(0);\n    System.out.println(firstCredential);\n  } else {\n    throw new Exception("admin identity has no credentials");\n  }\n\n')),(0,r.kt)("h2",{id:"create-an-identity"},"Create an Identity"),(0,r.kt)("p",null,"The method ",(0,r.kt)("inlineCode",{parentName:"p"},"createCredential")," requires a valid verifiable credential of type\nBasicIdentity, the destination DID the type and the claim, which can be created using the following script."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  // Create identity for user\n  JSONObject jsonClaim = new JSONObject().put("type", "Person").put("name", "randomName");\n\n  Claim claim = new Claim(jsonClaim);\n\n  final String randomUsername = Utils.getRandomUsernameOfLength(5);\n  System.out.println("username: " + randomUsername);\n  JSONObject newUserIdentity = client.create(randomUsername, claim);\n  System.out.println("created new user " + newUserIdentity);\n\n  VerifiableCredential assignedCredential = client.createCredential(vcs.get(0),\n      newUserIdentity.getJSONObject("doc").getString("id"), CredentialType.BASIC_IDENTITY,\n      new Claim(new JSONObject().put("type", "Person").put("position", "Professor")));\n\n  System.out.println("Created credential for new user " + assignedCredential.toString());\n')),(0,r.kt)("h2",{id:"verify-a-credential"},"Verify a Credential"),(0,r.kt)("p",null,"You can verify a credential using the following script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'  boolean verified = client.checkCredential(assignedCredential);  \n    System.out.println("Verification result: " + verified);\n')))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),c=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return i.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},u=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,f=u["".concat(o,".").concat(m)]||u[m]||p[m]||r;return n?i.createElement(f,l(l({ref:t},s),{},{components:n})):i.createElement(f,l({ref:t},s))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=u;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,l[1]=d;for(var c=2;c<r;c++)l[c]=n[c];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);