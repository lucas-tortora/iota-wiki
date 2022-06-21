"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[76190],{82802:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return c}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={description:"This page describes the migration components and mechanism used to migrate from IOTA 1.0 to IOTA 1.5 (Chrysalis).",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["WOTS addresses","trustless","migration mechanism","treasury","Firefly","wallet","legacy nodes","explanation"]},l="How the IOTA Chrysalis Phase 2 Token Migration Works",d={unversionedId:"guides/migration_mechanism",id:"guides/migration_mechanism",title:"How the IOTA Chrysalis Phase 2 Token Migration Works",description:"This page describes the migration components and mechanism used to migrate from IOTA 1.0 to IOTA 1.5 (Chrysalis).",source:"@site/content/build/introduction-docs/production/docs/guides/migration_mechanism.md",sourceDirName:"guides",slug:"/guides/migration_mechanism",permalink:"/introduction/guides/migration_mechanism",draft:!1,editUrl:"https://github.com/iotaledger/introduction-docs/edit/main/content/build/introduction-docs/production/docs/guides/migration_mechanism.md",tags:[],version:"current",frontMatter:{description:"This page describes the migration components and mechanism used to migrate from IOTA 1.0 to IOTA 1.5 (Chrysalis).",image:"/img/logo/Chrysalis_logo_dark.png",keywords:["WOTS addresses","trustless","migration mechanism","treasury","Firefly","wallet","legacy nodes","explanation"]},sidebar:"mySidebar",previous:{title:"Chrysalis Migration",permalink:"/introduction/guides/token_migration"},next:{title:"IOTA Hub Migration Guide",permalink:"/introduction/guides/hub_migration"}},h={},c=[{value:"Components",id:"components",level:2},{value:"How it Actually Works",id:"how-it-actually-works",level:2},{value:"Verifier Node",id:"verifier-node",level:3}],u={toc:c};function p(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"how-the-iota-chrysalis-phase-2-token-migration-works"},"How the IOTA Chrysalis Phase 2 Token Migration Works"),(0,r.kt)("p",null,"For the Chrysalis Phase 2 transition, the IOTA Foundation developed a way to migrate funds to the new network. IOTA created this new mechanism because the previous network did not support the WOTS addresses."),(0,r.kt)("p",null,"Before proceeding into the developed mechanism, below is our reasoning for why other mechanisms were not chosen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Migrating funds by performing periodic global snapshots on both networks"),": while this approach would have\nbeen the easiest to do, it would have blocked the funds of people between the times of global snapshots. For example, if\nwe would have taken global snapshots monthly (to carry over funds from burn/migration addresses), token holders would\nhave been excluded from opportunities arising from the change in token price. In this case, perhaps a user wanted to sell\ntokens but were blocked by the fact that the next global snapshot would only be performed in 20 days and so they\ncouldn't move their tokens to an exchange (which only supports Chrysalis Phase 2 IOTA)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Supporting WOTS on Chrysalis Phase 2 (and only allowing to send to non-WOTS addresses)"),": while this was also a\nviable option, we decided not to include support for WOTS as it brought several legacy problems:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"WOTS signatures are very large and make up a disproportional amount of data in a transaction (note that our PoW\nrequirement in Chrysalis' Phase 2 was dependent on the size of the message). Additionally, there were no real bounds\non how big such signatures could grow to (even if, per the default, we only supported three security levels in our\nlibraries)."),(0,r.kt)("li",{parentName:"ul"},"We would have needed to pollute our new Chrysalis Phase 2 models with support for these addresses and signatures,\nadding unnecessary complexity to what should be a clean protocol."),(0,r.kt)("li",{parentName:"ul"},"Chrysalis Phase 2 nodes would have needed to keep a spent address list to inform wallets that they had vulernable\naddresses.")))),(0,r.kt)("h2",{id:"components"},"Components"),(0,r.kt)("p",null,"The developed migration mechanism was built from the following components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Chrysalis phase 2 data types (for reference, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/luca-moser/protocol-rfcs/blob/rfc/wotsicide/text/0035-wotsicide/0035-wotsicide.md"},"the RFC")," for details):",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output"),": an object which specified an amount of tokens held in the treasury."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Input"),": an object which referenced a previous ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction"),": an object which defined a ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Input")," referencing the last ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output")," and a\nnew ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output")," that held the delta of what the ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction")," was spending."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Receipt"),": an object which held a pointer to a legacy milestone index, a list of funds to mint, and\na ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction"),". A ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt")," can only be an inner payload of a milestone."))),(0,r.kt)("li",{parentName:"ul"},"Chrysalis Phase 2 nodes which validated receipts."),(0,r.kt)("li",{parentName:"ul"},"Legacy nodes which provided a special API command for the above Chrysalis Phase 2 nodes."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),": this was the last ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Output")," in the ledger. At one point, only one existed.\nAfter Chrysalis Phase 2 network launched, the ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),' contained the total supply of tokens (2779530283277761) aside from the funds that were already migrated during the "7-day-migration-period" prior to the network launch. This means that all funds which are not migrated from the legacy network, will always reside in the ',(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),".")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"A ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt")," could only be contained within a milestone and that valid milestones could only be issued by\nthe Coordinator. Therefore, a minting of migrated funds could only happen through milestones and not any other type of\ntransactions. Likewise, a ",(0,r.kt)("inlineCode",{parentName:"p"},"Treasury Transaction")," was only valid as an inner payload of a ",(0,r.kt)("inlineCode",{parentName:"p"},"Receipt"),"."))),(0,r.kt)("h2",{id:"how-it-actually-works"},"How it Actually Works"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In essence, a ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt"),' carried the information about funds which were migrated or "burned" to a ',(0,r.kt)("inlineCode",{parentName:"li"},"migration address"),"\non the legacy network. A ",(0,r.kt)("inlineCode",{parentName:"li"},"migration address")," looks like any other normal address on the legacy network but it\nencapsulates actual information, such as:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"The target Ed25519 address on the Chrysalis Phase 2 network from which the token holder wants their funds to be\naccessible from."),(0,r.kt)("li",{parentName:"ul"},"A checksum of that Ed25519 address."),(0,r.kt)("li",{parentName:"ul"},"A tryte prefix ",(0,r.kt)("inlineCode",{parentName:"li"},"TRANSFER")," (these addresses always start with this prefix)."))),(0,r.kt)("li",{parentName:"ol"},"As mentioned above, a ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt")," could only be contained in a milestone and therefore the Coordinator on the Chrysalis\nPhase 2 network.",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"Periodically polled data from a legacy node about what kind of newly confirmed burned/migrated funds there were (while also performing WOTS signature verification on these and the legacy milestone bundle)."),(0,r.kt)("li",{parentName:"ol"},"Then a milestone is produced with a ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt")," that contained those funds, where within the ",(0,r.kt)("inlineCode",{parentName:"li"},"Receipt"),",\na ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury Transaction")," was placed which deducts the sum of tokens migrated from the ",(0,r.kt)("inlineCode",{parentName:"li"},"Treasury"),"."))),(0,r.kt)("li",{parentName:"ol"},"Chrysalis Phase 2 nodes then saw receipts when applying milestones and automatically generated outputs for the Ed25519\naddress as defined in the origin ",(0,r.kt)("inlineCode",{parentName:"li"},"migration address")," in the legacy network. As an optional step (which is not turned\non by default), every node could have been configured to verify whether the funds in the receipt were really migrated in the\nold network using a legacy node and whether all funds for a given legacy milestone index were migrated. If this\nverification failed, the node would have automatically panicked as the integrity was no longer correct.")),(0,r.kt)("p",null,"This meant that:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The IOTA Foundation could not mint funds out of thin air, because nodes in the Chrysalis Phase 2 network verified that the\nfunds were burned in the legacy network."),(0,r.kt)("li",{parentName:"ul"},"All migration bundles, respectively transferred to ",(0,r.kt)("inlineCode",{parentName:"li"},"migration addresses")," which were confirmed by a given legacy\nmilestone, had to have been migrated fully to the new network, as otherwise the verification failed."),(0,r.kt)("li",{parentName:"ul"},"Node operators were free to choose which legacy nodes they queried with their Chrysalis Phase 2 nodes, so the\nverification of migrations/receipts was decentralized. For example, a node operator chose to both operate their own\nlegacy and Chrysalis Phase 2 nodes.")),(0,r.kt)("p",null,"Essentially, via the Firefly wallet, token holders:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Produced migration bundles which sent funds to ",(0,r.kt)("inlineCode",{parentName:"li"},"migration addresses")," controlled by the given owner."),(0,r.kt)("li",{parentName:"ol"},"These bundles were confirmed on the legacy network."),(0,r.kt)("li",{parentName:"ol"},"The Chrysalis Phase 2 Coordinator picked these confirmed legacy bundles up and generated receipts minting those funds\nto the target Ed25519 address."),(0,r.kt)("li",{parentName:"ol"},"Verifier nodes verified the receipts and made sure that the funds originated from the legacy network.")),(0,r.kt)("h3",{id:"verifier-node"},"Verifier Node"),(0,r.kt)("p",null,"A verifier node is a Chrysalis Phase 2 node which upon seeing receipts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Queries a legacy node for the confirmation data for the specified milestone in the receipt."),(0,r.kt)("li",{parentName:"ol"},"Then performs WOTS signature verification of the legacy milestone bundle and all confirmed bundles."),(0,r.kt)("li",{parentName:"ol"},"Additionally, it also checks that all confirmed funds on the legacy network for the given legacy milestone, are indeed minted with a given batch of receipts (i.e. nothing is left out).")),(0,r.kt)("p",null,"For further reference, you can read the ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/post_installation/run_as_a_verifier"},"Hornet as a verifier node")," page."))}p.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return p}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},h=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),u=d(n),p=i,m=u["".concat(l,".").concat(p)]||u[p]||c[p]||r;return n?a.createElement(m,o(o({ref:t},h),{},{components:n})):a.createElement(m,o({ref:t},h))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=n[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);