"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[40167],{93214:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return s},default:function(){return m}});var a=n(87462),r=n(63366),o=(n(67294),n(3905)),l=["components"],i={description:'Learn how to use a set of Docker-based tools and pre-configured setups to deploy a (hornet-based) Chrysalis Private Tangle in "one click" to cloud environments or platforms.',image:"/img/logo/Chrysalis_logo_dark.png",keywords:["tutorial","tangle","AWS","Docker","VM"]},p='Deploy Your Own Tangle "In One Click" Tutorial',d={unversionedId:"tutorials/one_click_private_tangle",id:"tutorials/one_click_private_tangle",title:'Deploy Your Own Tangle "In One Click" Tutorial',description:'Learn how to use a set of Docker-based tools and pre-configured setups to deploy a (hornet-based) Chrysalis Private Tangle in "one click" to cloud environments or platforms.',source:"@site/external/chrysalis-docs/docs/tutorials/one_click_private_tangle.md",sourceDirName:"tutorials",slug:"/tutorials/one_click_private_tangle",permalink:"/chrysalis-docs/tutorials/one_click_private_tangle",editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/main/external/chrysalis-docs/docs/tutorials/one_click_private_tangle.md",tags:[],version:"current",frontMatter:{description:'Learn how to use a set of Docker-based tools and pre-configured setups to deploy a (hornet-based) Chrysalis Private Tangle in "one click" to cloud environments or platforms.',image:"/img/logo/Chrysalis_logo_dark.png",keywords:["tutorial","tangle","AWS","Docker","VM"]},sidebar:"mySidebar",previous:{title:"Devnet",permalink:"/chrysalis-docs/devnet"},next:{title:"How to Run Iota Mainnet Hornet Nodes on a Kubernetes Environment",permalink:"/chrysalis-docs/tutorials/mainnet_hornet_node_k8s"}},s=[{value:"Background",id:"background",children:[],level:2},{value:"MVP Deployment Architecture",id:"mvp-deployment-architecture",children:[],level:2},{value:"Deploying Your Tangle in &quot;One Click&quot; on AWS",id:"deploying-your-tangle-in-one-click-on-aws",children:[],level:2},{value:"Deploying Your Tangle in &quot;One Click&quot; on any Docker-enabled VM",id:"deploying-your-tangle-in-one-click-on-any-docker-enabled-vm",children:[{value:"Prerequisites",id:"prerequisites",children:[],level:3},{value:"Clone the Script Repository",id:"clone-the-script-repository",children:[],level:3},{value:"Run your New Tangle",id:"run-your-new-tangle",children:[],level:3},{value:"Operate your Tangle",id:"operate-your-tangle",children:[],level:3},{value:"Tangle Explorer",id:"tangle-explorer",children:[],level:3}],level:2},{value:"Adding Extra Nodes to your Tangle",id:"adding-extra-nodes-to-your-tangle",children:[],level:2},{value:"Limitations and Troubleshooting",id:"limitations-and-troubleshooting",children:[],level:2},{value:"Next Steps",id:"next-steps",children:[],level:2}],u={toc:s};function m(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"deploy-your-own-tangle-in-one-click-tutorial"},'Deploy Your Own Tangle "In One Click" Tutorial'),(0,o.kt)("p",null,"In this tutorial, you will learn how to use a set of Docker-based tools and pre-configured setups to deploy your own (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/gohornet/hornet"},"hornet-based"),") Chrysalis Tangle in ",(0,o.kt)("strong",{parentName:"p"},'"one click"')," to cloud environments or platforms."),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,"IOTA ",(0,o.kt)("a",{parentName:"p",href:"/chrysalis-docs/mainnet"},"mainnet")," and ",(0,o.kt)("a",{parentName:"p",href:"/chrysalis-docs/devnet"},"devnet")," are public IOTA Networks where you can develop your own applications. Due to scalability or data locality reasons, sometimes it is also necessary to run your own ",(0,o.kt)("em",{parentName:"p"},"local")," IOTA Tangle (aka Private Tangle). In the future, the (child) Tangle might also be ",(0,o.kt)("em",{parentName:"p"},"anchored")," to the IOTA mainnet, through Data Sharding (a feature currently under research and development by the IOTA Foundation). To automate and simplify the deployment of a Chrysalis Tangle, some tools, publicly available in the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle"},"one-click-tangle")," repository, have been developed. Additionally, the IOTA Foundation has integrated them for use in the ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/B095WQQTNG/"},"AWS Marketplace")," and, in the future, on other Cloud marketplaces."),(0,o.kt)("h2",{id:"mvp-deployment-architecture"},"MVP Deployment Architecture"),(0,o.kt)("p",null,"The figure below depicts a minimum viable deployment architecture of a Chrysalis Tangle using ",(0,o.kt)("a",{parentName:"p",href:"https://docker.io"},"Docker"),". "),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Private Tangle Architecture",src:n(86663).Z,title:"Private Tangle Architecture",width:"2000",height:"1140"})),(0,o.kt)("p",null,"There are three main nodes identified: "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Coordinator"),": This node emits milestones periodically and has to be bootstrapped and set up appropriately. With the IOTA 2.0 update, the Coordinator will no longer be needed as explained ",(0,o.kt)("a",{parentName:"p",href:"https://coordicide.iota.org/"},"here"),". ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Spammer"),": A node that periodically sends messages to your Tangle, thus enabling a minimal message load to support transaction approval as per the IOTA protocol. ")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"The ",(0,o.kt)("strong",{parentName:"p"},"Regular Hornet Node")," (",(0,o.kt)("inlineCode",{parentName:"p"},"node1"),"): An initial node that is exposed to the outside through the IOTA protocol (port ",(0,o.kt)("inlineCode",{parentName:"p"},"14265"),") to be the recipient of messages or to peer with other Nodes (through port ",(0,o.kt)("inlineCode",{parentName:"p"},"15600"),") that can later join your Tangle. "))),(0,o.kt)("p",null,"These three nodes are peered amongst each other as our architecture is based on Docker, so that each node runs within a Docker Container and all containers are attached to the same network named ",(0,o.kt)("inlineCode",{parentName:"p"},"private-tangle"),"."),(0,o.kt)("p",null,"In addition, to facilitate adding extra nodes to your Tangle, an ",(0,o.kt)("a",{parentName:"p",href:"https://hornet.docs.iota.org/post_installation/peering/#autopeering"},"autopeering")," entry node is automatically created. Actually, the ",(0,o.kt)("inlineCode",{parentName:"p"},"Spammer")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"node1")," enable by default autopeering so that they can be peered with any extra node later added. The autopeering entry node listens on the ",(0,o.kt)("em",{parentName:"p"},"UDP")," port ",(0,o.kt)("inlineCode",{parentName:"p"},"14626"),"."),(0,o.kt)("p",null,"In addition, to make your Tangle easier to use, a Tangle Explorer can be deployed, conveniently, similar to the one at ",(0,o.kt)("a",{parentName:"p",href:"https://explorer.iota.org"},"https://explorer.iota.org"),". As a result, all the participants in the network are able to browse and visualize messages or IOTA Streams channels. The Tangle Explorer deployment involves two different containers, one with the REST API listening at port ",(0,o.kt)("inlineCode",{parentName:"p"},"4000")," and one with the Web Application exposed to the host at port ",(0,o.kt)("inlineCode",{parentName:"p"},"8082"),". The Tangle Explorer also uses MQTT to watch what is happening on your Tangle. This is the rationale for having a connection between the Explorer's REST API Container and the Hornet Node through port ",(0,o.kt)("inlineCode",{parentName:"p"},"1881"),". "),(0,o.kt)("p",null,"The Hornet Dashboard (available through HTTP port ",(0,o.kt)("inlineCode",{parentName:"p"},"8081"),") is also useful as a way to monitor and ensure that your Tangle Nodes are in sync and performing well."),(0,o.kt)("p",null,"The summary of containers that shall be running and the exposed (actually in use) Docker ports is as follows: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Container name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Docker Ports in use"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hornet Initial Node"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"14265"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"8081"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"1881"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Coordinator"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coo")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"15600"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spammer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"spammer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"14265"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Autopeering Entry N."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Explorer API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-api")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"4000"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Explorer Web App"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-webapp")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"8082:80"))))),(0,o.kt)("p",null,"The network policies for those containers should be configured as follows:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Component"),(0,o.kt)("th",{parentName:"tr",align:null},"Container name"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Outgoing Traffic To"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hornet Initial Node"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"coo:15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"spammer:15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering:14626/udp"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Coordinator"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coo")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node1:15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"spammer:15600"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Spammer"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"spammer")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"coo:15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"node1:15600"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering:14626/udp"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Autopeering Entry N."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering")),(0,o.kt)("td",{parentName:"tr",align:"left"},"any autopeered node (",(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp"),")")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Explorer API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-api")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node1:14265"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"node1:1881"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Explorer Web App"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-webapp")),(0,o.kt)("td",{parentName:"tr",align:"left"})))),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Container name"),(0,o.kt)("th",{parentName:"tr",align:null},"Port"),(0,o.kt)("th",{parentName:"tr",align:"left"},"Incoming Traffic from"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14265")),(0,o.kt)("td",{parentName:"tr",align:"left"},"outside clients, ",(0,o.kt)("inlineCode",{parentName:"td"},"explorer-api"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"15600")),(0,o.kt)("td",{parentName:"tr",align:"left"},"other (auto)peers, ",(0,o.kt)("inlineCode",{parentName:"td"},"coo"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"spammer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8081")),(0,o.kt)("td",{parentName:"tr",align:"left"},"outside clients")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1881")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-api"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"coo")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"15600")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node1"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"spammer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"spammer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14265")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"spammer"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"spammer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"15600")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"coo"),", ",(0,o.kt)("inlineCode",{parentName:"td"},"node1"),", other (auto)peers")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"spammer")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp")),(0,o.kt)("td",{parentName:"tr",align:"left"},(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14626/udp")),(0,o.kt)("td",{parentName:"tr",align:"left"},"any autopeered node")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-api")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4000")),(0,o.kt)("td",{parentName:"tr",align:"left"},"outside clients")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-webapp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8082:80")),(0,o.kt)("td",{parentName:"tr",align:"left"},"outside clients")))),(0,o.kt)("p",null,"The summary of services exposed to the outside world (through the host) is as follows: "),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Service"),(0,o.kt)("th",{parentName:"tr",align:null},"Container name"),(0,o.kt)("th",{parentName:"tr",align:null},"Host TCP Port"),(0,o.kt)("th",{parentName:"tr",align:null},"Host UDP Port"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IOTA Protocol"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14265")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IOTA Gossip"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"15600")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"IOTA Autopeering"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node-autopeering")),(0,o.kt)("td",{parentName:"tr",align:null}),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"14626"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Hornet Dashboard"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8081")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"MQTT"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"node1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"1881")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Explorer API"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-api")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4000")),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Explorer Web App"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"explorer-webapp")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8082")),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("p",null,"The deployment architecture described above can be easily transitioned to production-ready by incorporating a reverse proxy leveraging ",(0,o.kt)("a",{parentName:"p",href:"https://docs.nginx.com/nginx/admin-guide/web-server/reverse-proxy/#"},"NGINX"),'. As a result, the amount of ports exposed to the outside world can be reduced or load balancing between the nodes of your Tangle can be achieved. The IOTA Foundation intends to provide automatic, "one click" deployment of this kind of enhanced architectures in a future version of this software. '),(0,o.kt)("p",null,"To support the deployment of an IOTA Tangle, the IOTA Community has developed a set of shell scripts and configuration templates to make it easier to deploy a (Docker based) Tangle with the architecture described above. You can also customize the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config"},"default configuration files")," if, for instance, you want to enable extra ",(0,o.kt)("a",{parentName:"p",href:"https://hornet.docs.iota.org/post_installation/configuration"},"Hornet plugins"),". "),(0,o.kt)("p",null,'But now let us see how we can launch our Tangle via a "single click". We have two options: through the ',(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/B095WQQTNG/"},"AWS Marketplace")," or through any ",(0,o.kt)("a",{parentName:"p",href:"#one-click-private-tangle-on-any-docker-enabled-vm"},"Docker-enabled machine"),". "),(0,o.kt)("h2",{id:"deploying-your-tangle-in-one-click-on-aws"},'Deploying Your Tangle in "One Click" on AWS'),(0,o.kt)("p",null,"To materialize on AWS using the deployment architecture described above, go to the AWS Marketplace and install this ",(0,o.kt)("a",{parentName:"p",href:"https://aws.amazon.com/marketplace/pp/B095WQQTNG/"},"product")," and follow the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/README_AWS.md"},"instructions"),". That's it!. "),(0,o.kt)("p",null,"Behind the scenes, the process will launch all the Docker containers (through docker-compose), create a key pair for the Coordinator,  configure the Coordinator public key for the initial node, generate an initial IOTA Address holding all IOTAs, the identity for our Nodes, etc i.e. our ",(0,o.kt)("a",{parentName:"p",href:"#mvp-deployment-architecture-of-a-private-tangle"},"deployment architecture")," and all the steps described ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/getting_started/private_tangle"},"here"),", but ",(0,o.kt)("strong",{parentName:"p"},"fully automated"),', with "one click"!.'),(0,o.kt)("p",null,'The Parameters of this "one click" installation are as follows (further details can be found at ',(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net/config"},"here"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One Private Key for signing milestones and just one milestone signer (the Coordinator)"),(0,o.kt)("li",{parentName:"ul"},"Coordinator Milestones Period: ",(0,o.kt)("inlineCode",{parentName:"li"},"60")," seconds, check ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config/config-coo.json#L120"},"this line of code")),(0,o.kt)("li",{parentName:"ul"},"Spammer Settings, check ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config/config-spammer.json#L118"},"these lines of code"),".")),(0,o.kt)("p",null,"Further instructions for AWS deployments can be found ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/README_AWS.md"},"here"),". If you want to know lower-level details of the AWS installation, how to do it yourself in any Docker-enabled VM, and what happens under the scenes, please continue reading. "),(0,o.kt)("h2",{id:"deploying-your-tangle-in-one-click-on-any-docker-enabled-vm"},'Deploying Your Tangle in "One Click" on any Docker-enabled VM'),(0,o.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,o.kt)("p",null,"You need ",(0,o.kt)("a",{parentName:"p",href:"https://www.docker.com"},"Docker")," and Docker Compose. ",(0,o.kt)("strong",{parentName:"p"},"Docker Compose")," is a tool for defining and running multi-container Docker applications. Yaml files are used to configure the required services. This means all container services can be brought up in a single command. Docker Compose is installed by default as part of Docker for Windows and Docker for Mac, however Linux users will need to follow the instructions found ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"here")),(0,o.kt)("p",null,"You can check your current ",(0,o.kt)("strong",{parentName:"p"},"Docker")," and ",(0,o.kt)("strong",{parentName:"p"},"Docker Compose")," versions using the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker-compose -v\ndocker version\n")),(0,o.kt)("p",null,"Please ensure that you are using Docker version ",(0,o.kt)("inlineCode",{parentName:"p"},"18.03")," or higher and Docker Compose ",(0,o.kt)("inlineCode",{parentName:"p"},"1.21")," or higher and upgrade if\nnecessary."),(0,o.kt)("h3",{id:"clone-the-script-repository"},"Clone the Script Repository"),(0,o.kt)("p",null,"To start with, you need to clone the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle"},"one-click-tangle")," repository as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"git clone https://github.com/iotaledger/one-click-tangle\ncd one-click-tangle\n")),(0,o.kt)("p",null,"Then, ensure that the ",(0,o.kt)("inlineCode",{parentName:"p"},"private-tangle.sh")," script has execution permissions:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd one-click-tangle/hornet-private-net\nchmod +x ./private-tangle.sh\n")),(0,o.kt)("h3",{id:"run-your-new-tangle"},"Run your New Tangle"),(0,o.kt)("p",null,"To start our Tangle through the command line:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"./private-tangle.sh install\n")),(0,o.kt)("p",null,"You can optionally pass the amount of time (in seconds) to wait for the Coordinator bootstrap step. This step enables the Coordinator to bootstrap by emitting its first milestone."),(0,o.kt)("p",null,"Behind the scenes, our process will create the identity for the Coordinator, the keys that will be used for signing milestones, an initial IOTA Address holding all IOTAs, the identity of our Nodes, etc i.e. all the steps described ",(0,o.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/getting_started/private_tangle"},"here"),", but fully automated. "),(0,o.kt)("p",null,"After the process finishes you should see the following docker containers up and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"docker ps -a\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'8474fd9ced97   gohornet/hornet:latest    "/app/hornet" 29 hours ago   Up 29 hours   8081/tcp, 14265/tcp, 15600/tcp, 14626/udp spammer                                                                            \n8804bfd795ec   gohornet/hornet:latest    "/app/hornet" 2 days ago     Up 2 days     0.0.0.0:8081->8081/tcp, 0.0.0.0:14265->14265/tcp, 1883/tcp, 0.0.0.0:15600->15600/tcp, 14626/udp   node1\n96b2047a6ebe   gohornet/hornet:latest    "/app/hornet" 2 days ago     Up 2 days     8081/tcp, 14265/tcp, 15600/tcp, 14626/udp coo\nd527976593c5   gohornet/hornet:latest   "/app/hornet"   8 hours ago   Up 8 hours   1883/tcp, 8081/tcp, 14265/tcp, 15600/tcp, 0.0.0.0:14626->14626/udp node-autopeering\n')),(0,o.kt)("p",null,"Alternatively, the following files should have been created for you:"),(0,o.kt)("p",null,"The P2P identities that can be used to peer these Nodes with other Nodes:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"coo.identity.txt"),". The P2P identity of the Coordinator. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node1.identity.txt"),". The P2P identity of the node1. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spammer.identity.txt"),". The P2P identity of the Spammer. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"node-autopeering.identity.txt"),". The P2P identity of the autopeering Entry Node. ")),(0,o.kt)("p",null,"The address that holds all the IOTAs and its corresponding keys:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"key-pair.txt"),". The Ed25519 Key pair corresponding to the address that holds all the IOTAs. "),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"address.txt"),". The address that holds all IOTAs initially. ")),(0,o.kt)("p",null,"The Coordinator's cryptographic materials:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"coo-milestones-key-pair.txt"),". The Ed25519 key pair used by the Coordinator to sign milestones. Keep it safe!"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"coo-milestones-public-key.txt"),". The Ed25519 public key that can be used to verify Coordinator's milestones. ")),(0,o.kt)("p",null,"The initial snapshot for your Tangle:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"snapshots/private-tangle/full_snapshot.bin"),". It contains just one IOTA address that is holding all IOTAs. ")),(0,o.kt)("p",null,"If you browse to ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8081")," you can test out the Hornet Dashboard."),(0,o.kt)("p",null,"You can find the database\xa0files of your Tangle at ",(0,o.kt)("inlineCode",{parentName:"p"},"db/private-tangle"),". "),(0,o.kt)("p",null,"When a snapshot is created, ",(0,o.kt)("inlineCode",{parentName:"p"},"1000000000")," tokens are sent to the treasury. ",(0,o.kt)("inlineCode",{parentName:"p"},"2779529283277761")," out of the total number of tokens, which is ",(0,o.kt)("inlineCode",{parentName:"p"},"2779530283277761")," are sent to the mint address. To change the amount that is allocated to the treasury, you can change the value\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/private-tangle.sh#L191"},"here"),". "),(0,o.kt)("p",null,"The total amount of tokens allocated to the treasury should not be equal to the total supply of tokens which is ",(0,o.kt)("inlineCode",{parentName:"p"},"2779530283277761"),". Otherwise the mint address will have zero tokens. "),(0,o.kt)("h3",{id:"operate-your-tangle"},"Operate your Tangle"),(0,o.kt)("p",null,"You operate your Tangle by issuing one of the following commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"./private-tangle.sh [start|stop|update]\n")),(0,o.kt)("h3",{id:"tangle-explorer"},"Tangle Explorer"),(0,o.kt)("p",null,"Once we have your Tangle up and running, you can install and run a Tangle Explorer as follows:  "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},"cd ../explorer\n./tangle-explorer.sh install ../hornet-private-net\n")),(0,o.kt)("p",null,"The Tangle Explorer will automatically be configured with the parameters of your Tangle and once the docker build process finishes, you should find the following additional docker containers up and running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'dd4bcad67c5e        iotaledger/explorer-webapp   "docker-entrypoint.s\u2026"   2 days ago          Up 2 days           0.0.0.0:8082->80/tcp                                                                   explorer-webapp\n7c22023f4316        iotaledger/explorer-api      "docker-entrypoint.s\u2026"   2 days ago          Up 2 days           0.0.0.0:4000->4000/tcp                                                                 explorer-api\n')),(0,o.kt)("p",null,"You can now get access to your Tangle Explorer through ",(0,o.kt)("inlineCode",{parentName:"p"},"http://localhost:8082"),". "),(0,o.kt)("h2",{id:"adding-extra-nodes-to-your-tangle"},"Adding Extra Nodes to your Tangle"),(0,o.kt)("p",null,"For convenience reasons, a script is also available to add new Nodes to an already running Tangle. "),(0,o.kt)("p",null,"To do so, you can follow these steps:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'cd ./extra-nodes\nchmod +x ./private-hornet.sh\n./private-hornet.sh install "my-node:14266:15601:8082"\n')),(0,o.kt)("p",null,"The main parameter is a Node connection string. Such string has different fields separated by a colon (",(0,o.kt)("inlineCode",{parentName:"p"},":"),"). The first field is the (container and host) name of your Node and, at installation time, it can be followed, optionally, by the TCP port numbers corresponding to the API endpoint, the peering endpoint and the dashboard endpoint. "),(0,o.kt)("p",null,"If no port numbers are provided, i.e. only the container name is supplied, no ports will be exposed to the host. In addition, you can omit some of the ports, but the separator ",(0,o.kt)("inlineCode",{parentName:"p"},":")," has to be kept, for instance, if you just only want to  expose the dashboard port to the host you can run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-console"},'./private-hornet.sh install "my-node:::8082"\n')),(0,o.kt)("p",null,"After executing the commands described above, a new Docker container (named ",(0,o.kt)("inlineCode",{parentName:"p"},"my-node"),") executing a Hornet node will be running. This Hornet node will be automatically peered. The snapshot, Coordinator's public keys, and autopeering entry node address will be taken from the snapshot and configuration folders of your Tangle. "),(0,o.kt)("p",null,"Note: In case you want to spin a node from a different machine (or base folder) you would need to manually pass those parameters including a ",(0,o.kt)("a",{parentName:"p",href:"https://hornet.docs.iota.org/post_installation/peering/#addressing-peer-neighbors"},"multiaddr")," peer address of a node to peer with (for instance ",(0,o.kt)("inlineCode",{parentName:"p"},"node1"),") you want to peer with, as explained ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/tree/chrysalis/hornet-private-net/extra-nodes"},"here"),". "),(0,o.kt)("h2",{id:"limitations-and-troubleshooting"},"Limitations and Troubleshooting"),(0,o.kt)("p",null,"Mac OS users should install GNU sed, for instance, using ",(0,o.kt)("inlineCode",{parentName:"p"},"brew install --default-names gnu-sed"),". "),(0,o.kt)("p",null,"There could be limitations in the number of peers triggered by the maximum number of unknown peers parameter. To overcome it, you may need to change ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/one-click-tangle/blob/chrysalis/hornet-private-net/config/config-node.json#L127"},"this configuration property")," "),(0,o.kt)("h2",{id:"next-steps"},"Next Steps"),(0,o.kt)("p",null,"Try using one of the ",(0,o.kt)("a",{parentName:"p",href:"/chrysalis-docs/libraries/client"},"client libraries")," to send transactions to the nodes in your Tangle."))}m.isMDXComponent=!0},86663:function(e,t,n){t.Z=n.p+"assets/images/one-click-private-tangle-architecture-ce0cc104f40c3455aeae476a109dd232.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return c}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),d=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,k=m["".concat(p,".").concat(c)]||m[c]||u[c]||o;return n?a.createElement(k,l(l({ref:t},s),{},{components:n})):a.createElement(k,l({ref:t},s))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var d=2;d<o;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);