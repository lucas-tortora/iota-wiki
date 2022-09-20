"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[75292],{2226:(n,e,o)=>{o.r(e),o.d(e,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>p});var t=o(87462),r=(o(67294),o(3905)),s=o(44393),i=o(59728);const a={title:"How To Prepare And Sign A Transaction"},c=void 0,d={unversionedId:"libraries/nodejs/how_to/prepare_sign_transaction",id:"libraries/nodejs/how_to/prepare_sign_transaction",title:"How To Prepare And Sign A Transaction",description:"",source:"@site/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/7_prepare_sign_transaction.mdx",sourceDirName:"libraries/nodejs/how_to",slug:"/libraries/nodejs/how_to/prepare_sign_transaction",permalink:"/iota.rs/develop/libraries/nodejs/how_to/prepare_sign_transaction",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/develop/documentation/content/build/iota.rs/develop/documentation/docs/libraries/nodejs/how_to/7_prepare_sign_transaction.mdx",tags:[],version:"current",sidebarPosition:7,frontMatter:{title:"How To Prepare And Sign A Transaction"},sidebar:"docs",previous:{title:"How To Get A Block",permalink:"/iota.rs/develop/libraries/nodejs/how_to/get_block"},next:{title:"@iota/client",permalink:"/iota.rs/develop/libraries/nodejs/references/api_ref"}},l={},p=[],u={toc:p};function m(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,t.Z)({},u,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)(s.Z,{className:"language-typescript",mdxType:"CodeBlock"},"// Copyright 2021-2022 IOTA Stiftung\n// SPDX-License-Identifier: Apache-2.0\nimport { Client, initLogger } from '@iota/client';\nrequire('dotenv').config({ path: '../.env' });\n\n// Run with command:\n// node ./dist/09_transaction.js\n\n// In this example we will send a transaction\nasync function run() {\n    initLogger();\n    if (!process.env.NODE_URL) {\n        throw new Error('.env NODE_URL is undefined, see .env.example');\n    }\n\n    const client = new Client({\n        // Insert your node URL in the .env.\n        nodes: [process.env.NODE_URL],\n        localPow: true,\n    });\n\n    try {\n        if (!process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1) {\n            throw new Error('.env mnemonic is undefined, see .env.example');\n        }\n\n        // Configure your own mnemonic in \".env\". Since the output amount cannot be zero, the mnemonic must contain non-zero\n        // balance\n        const secretManager = {\n            Mnemonic: process.env.NON_SECURE_USE_OF_DEVELOPMENT_MNEMONIC_1,\n        };\n\n        // We generate an address from our own mnemonic so that we send the funds to ourselves\n        const addresses = await client.generateAddresses(secretManager, {\n            range: {\n                start: 1,\n                end: 2,\n            },\n        });\n\n        // We prepare the transaction\n        // Insert the output address and amount to spend. The amount cannot be zero.\n        const blockIdAndBlock = await client.buildAndPostBlock(secretManager, {\n            output: {\n                address: addresses[0],\n                amount: '1000000',\n            },\n        });\n        console.log('Block: ', blockIdAndBlock, '\\n');\n\n        console.log(\n            `Transaction sent: ${process.env.EXPLORER_URL}/block/${blockIdAndBlock[0]}`,\n        );\n    } catch (error) {\n        console.error('Error: ', error);\n    }\n}\n\nrun().then(() => process.exit());\n"),(0,r.kt)(i.ZP,{mdxType:"MoreExamples"}))}m.isMDXComponent=!0},59728:(n,e,o)=>{o.d(e,{ZP:()=>i});var t=o(87462),r=(o(67294),o(3905));const s={toc:[]};function i(n){let{components:e,...o}=n;return(0,r.kt)("wrapper",(0,t.Z)({},s,o,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"More advanced examples can be found in the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/tree/develop/bindings/nodejs/examples"},"examples")," folder."))}i.isMDXComponent=!0}}]);