"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[39323],{79795:function(e,n,t){t.r(n),t.d(n,{assets:function(){return p},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return u}});var a=t(87462),r=t(63366),i=(t(67294),t(3905)),o=["components"],s={keywords:["Wasp-cli","Configuration","Goshimmer","command line"],description:"How to configure the wasp-cli. Requirements and configuration parameters.",image:"/img/logo/WASP_logo_dark.png"},c="Configuring wasp-cli",l={unversionedId:"guide/chains_and_nodes/wasp-cli",id:"guide/chains_and_nodes/wasp-cli",title:"Configuring wasp-cli",description:"How to configure the wasp-cli. Requirements and configuration parameters.",source:"@site/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/wasp-cli.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/wasp-cli",permalink:"/smart-contracts/guide/chains_and_nodes/wasp-cli",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/wasp-cli.md",tags:[],version:"current",frontMatter:{keywords:["Wasp-cli","Configuration","Goshimmer","command line"],description:"How to configure the wasp-cli. Requirements and configuration parameters.",image:"/img/logo/WASP_logo_dark.png"},sidebar:"tutorialSidebar",previous:{title:"Docker (Standalone)",permalink:"/smart-contracts/guide/chains_and_nodes/docker_standalone"},next:{title:"Setting Up a Chain",permalink:"/smart-contracts/guide/chains_and_nodes/setting-up-a-chain"}},p={},u=[{value:"Requirements",id:"requirements",level:2},{value:"Configuration",id:"configuration",level:2}],d={toc:u};function m(e){var n=e.components,t=(0,r.Z)(e,o);return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-wasp-cli"},"Configuring wasp-cli"),(0,i.kt)("p",null,"Step-by-step instructions on how to use wasp-cli to interact with Wasp nodes on the Goshimmer network."),(0,i.kt)("h2",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"After going through the instructions on ",(0,i.kt)("a",{parentName:"p",href:"/smart-contracts/guide/chains_and_nodes/running-a-node"},"Running a node"),", you should have the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," binary available in your system."),(0,i.kt)("h2",{id:"configuration"},"Configuration"),(0,i.kt)("p",null,"You can create a basic default configuration by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli init \n")),(0,i.kt)("p",null,"This command will create a configuration file named ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," in the current directory."),(0,i.kt)("p",null,"After this, you will need to tell the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli")," the location of the Goshimmer node and the\ncommittee of Wasp nodes:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli set goshimmer.api 127.0.0.1:8080\n\nwasp-cli set wasp.0.api 127.0.0.1:9090\nwasp-cli set wasp.0.nanomsg 127.0.0.1:5550\nwasp-cli set wasp.0.peering 127.0.0.1:4000\n\n## You can add as many nodes as you like in your committee\nwasp-cli set wasp.1.api 127.0.0.1:9091\nwasp-cli set wasp.1.nanomsg 127.0.0.1:5551\nwasp-cli set wasp.1.peering 127.0.0.1:4001\n\n...shell\n\nwasp-cli set wasp.N.api 127.0.0.1:9091\nwasp-cli set wasp.N.nanomsg 127.0.0.1:5551\nwasp-cli set wasp.N.peering 127.0.0.1:4001\n")),(0,i.kt)("p",null,"Alternatively, you can edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"wasp-cli.json")," file and include the desired server locations:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The goshimmer api address:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'  "goshimmer": {\n    "api": "127.0.0.1:8080",\n    "faucetpowtarget": -1\n  },\n'))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"The API/nanomsg/peering address for each Wasp node:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre",className:"language-json"},'"wasp": {\n    "0": {\n      "api": "127.0.0.1:9090",\n      "nanomsg": "127.0.0.1:5550",\n      "peering": "127.0.0.1:4000"\n    },\n    "1": {\n      ...\n    },\n  }\n')))),(0,i.kt)("p",null,"If the Wasp node is configured to use the experimental JWT authentication, it's required to login after the configuration is done."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"wasp-cli login\n")))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var c=a.createContext({}),l=function(e){var n=a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=l(e.components);return a.createElement(c.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=l(t),m=r,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return t?a.createElement(g,o(o({ref:n},p),{},{components:t})):a.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,o=new Array(i);o[0]=d;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);