"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[34716],{3905:function(e,n,t){t.d(n,{Zo:function(){return d},kt:function(){return m}});var r=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),c=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||a;return t?r.createElement(f,i(i({ref:n},d),{},{components:t})):r.createElement(f,i({ref:n},d))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=t[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},95030:function(e,n,t){t.r(n),t.d(n,{contentTitle:function(){return l},default:function(){return u},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return d}});var r=t(87462),o=t(63366),a=(t(67294),t(3905)),i=["components"],s={},l="New Tutorial - How to Set Up Iota.JS for Development",c={type:"mdx",permalink:"/setup_iota-js_%E2%80%A8for_development",source:"@site/content/tutorials/single-page-tutorials/setup_iota-js_\u2028for_development.md",title:"New Tutorial - How to Set Up Iota.JS for Development",description:"In this tutorial you will learn how to create a new project, generate a new address and receive testnet funds from the faucet.",frontMatter:{}},d=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Development Environment and Libraries",id:"development-environment-and-libraries",level:3},{value:"Set Up",id:"set-up",level:2},{value:"Prepare Your Development Environment",id:"prepare-your-development-environment",level:3},{value:"Create Mnemonic Script",id:"create-mnemonic-script",level:2},{value:"Create an Address",id:"create-an-address",level:2},{value:"Request Tokens via the Faucet Website",id:"request-tokens-via-the-faucet-website",level:2}],p={toc:d};function u(e){var n=e.components,s=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"new-tutorial---how-to-set-up-iotajs-for-development"},"New Tutorial - How to Set Up Iota.JS for Development"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"In this tutorial you will learn how to create a new project, generate a new address and receive testnet funds from the faucet.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("h3",{id:"development-environment-and-libraries"},"Development Environment and Libraries"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"set-up"},"Set Up"),(0,a.kt)("h3",{id:"prepare-your-development-environment"},"Prepare Your Development Environment"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new folder for the tutorial in a location of your choice and navigate to it:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"mkdir iota-js-setup\ncd iota-js-setup\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the Node.js initializer to configure the project:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm init --yes\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Install the iota.js library and other helper dependencies:\n:::note")),(0,a.kt)("p",null,"The installation process might take a while"),(0,a.kt)("p",null,":::"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @iota/iota.js@next\nnpm install bip39 dotenv\n")),(0,a.kt)("p",null,"Your ",(0,a.kt)("inlineCode",{parentName:"p"},"package.json")," file should look something like this:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "name": "iota-js-setup",\n  "version": "1.0.0",\n  "description": "",\n  "main": "index.js",\n  "dependencies": {\n    "@iota/iota.js": "^1.9.0-stardust.25",\n    "bip39": "^3.0.4",\n    "dotenv": "^16.0.1"\n  },\n  "scripts": {\n    "test": "echo \\"Error: no test specified\\" && exit 1"\n  },\n  "author": "",\n  "license": "Apache-2.0"\n}\n')),(0,a.kt)("h2",{id:"create-mnemonic-script"},"Create Mnemonic Script"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Create a new file ",(0,a.kt)("inlineCode",{parentName:"li"},"create-mnemonic.js")," and add the following code:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Libraries\nconst bip39 = require('bip39')\n \n// For better readability, some console output will be printed in a different color\nconst consoleColor = '\\x1b[36m%s\\x1b[0m';\nasync function run() {\n    // A 256-bits entropy leads to a 24 word mnemonic seed phrase\n    const mnemonic = bip39.generateMnemonic(256);\n    console.log(consoleColor, 'Copy your mnemonic seed phrase and paste it into the .env file:');\n    console.log(mnemonic, '\\n');\n}\nrun();\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"Run the script ",(0,a.kt)("inlineCode",{parentName:"li"},"create-mnemonic.js")," and check the console output for your new mnemonic seed phrase:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"node create-mnemonic.js\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"Create a new ",(0,a.kt)("inlineCode",{parentName:"li"},".env")," file and add your mnemonic:")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'MNEMONIC = "<add_your_mnemonic_here>"\n')),(0,a.kt)("h2",{id:"create-an-address"},"Create an Address"),(0,a.kt)("p",null,"Create a new file called ",(0,a.kt)("inlineCode",{parentName:"p"},"create-address.js")," and add the following code:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'const { Converter } = require("@iota/util.js");\nconst { Bip32Path, Bip39 } = require("@iota/crypto.js");\nconst {\n  Bech32Helper,\n  Ed25519Address,\n  Ed25519Seed,\n  ED25519_ADDRESS_TYPE,\n  generateBip44Address,\n  IOTA_BIP44_BASE_PATH,\n  SingleNodeClient,\n} = require("@iota/iota.js");\n\nrequire("dotenv").config({ path: "./.env" });\n\nconst API_ENDPOINT = "https://api.testnet.shimmer.network";\n\nasync function run() {\n  const client = new SingleNodeClient(API_ENDPOINT);\n\n  const info = await client.info();\n\n  console.log("Base");\n\n  // Generate the seed from the Mnemonic\n  const baseSeed = Ed25519Seed.fromMnemonic(process.env.MNEMONIC);\n  console.log("\\tSeed", Converter.bytesToHex(baseSeed.toBytes()));\n\n  // Generate the next addresses for your account.\n  console.log();\n  console.log("Generated Addresses...");\n  const addressGeneratorAccountState = {\n    accountIndex: 0,\n    addressIndex: 0,\n    isInternal: false,\n  };\n  const path = generateBip44Address(addressGeneratorAccountState);\n  const addressSeed = baseSeed.generateSeedFromPath(new Bip32Path(path));\n  const addressKeyPair = addressSeed.keyPair();\n  const indexEd25519Address = new Ed25519Address(addressKeyPair.publicKey);\n  const indexPublicKeyAddress = indexEd25519Address.toAddress();\n\n  console.log(\n    "\\tAddress (Bech32)",\n    Bech32Helper.toBech32(\n      ED25519_ADDRESS_TYPE,\n      indexPublicKeyAddress,\n      info.protocol.bech32Hrp\n    )\n  );\n}\n\nrun()\n  .then(() => console.log("Done"))\n  .catch((err) => console.error(err));\n\n')),(0,a.kt)("p",null,"If you run it, it will:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Get your mnemonic from the ",(0,a.kt)("inlineCode",{parentName:"li"},".env"),"file."),(0,a.kt)("li",{parentName:"ol"},"Create a seed from it."),(0,a.kt)("li",{parentName:"ol"},"Generate a new address. ")),(0,a.kt)("p",null,"Just run the following command, and you will see your testnet shimmer address in your console!"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"node create-address.js\n")),(0,a.kt)("h2",{id:"request-tokens-via-the-faucet-website"},"Request Tokens via the Faucet Website"),(0,a.kt)("p",null,"Now, you can go to the ",(0,a.kt)("a",{parentName:"p",href:"https://faucet.testnet.shimmer.network/"},"Shimmer Testnet Faucet Website"),", paste your newly created address, and request funds."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The 'Request' button will become clickable as soon as a valid Shimmer address is recognized.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Shimmer Testnet Faucet",src:t(67334).Z,width:"1276",height:"590"})),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Congratulations, you are now ready to explore other exciting features of the Shimmer network, such as native tokens and NFT's."))}u.isMDXComponent=!0},67334:function(e,n,t){n.Z=t.p+"assets/images/shimmer-testnet-faucet-bf01c65690038fe0f683d838db04a5c3.png"}}]);