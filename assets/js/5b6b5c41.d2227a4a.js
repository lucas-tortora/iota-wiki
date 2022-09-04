"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[18087],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return h}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),c=p(n),h=i,m=c["".concat(l,".").concat(h)]||c[h]||u[h]||r;return n?a.createElement(m,o(o({ref:t},d),{},{components:n})):a.createElement(m,o({ref:t},d))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var p=2;p<r;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},37900:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return h},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),o=["components"],s={description:"Learn how to configure a Wasp node.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Configuring a node","Go-lang","Hornet","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},l="Node Configuration",p={unversionedId:"guide/chains_and_nodes/node-config",id:"guide/chains_and_nodes/node-config",title:"Node Configuration",description:"Learn how to configure a Wasp node.",source:"@site/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/node-config.md",sourceDirName:"guide/chains_and_nodes",slug:"/guide/chains_and_nodes/node-config",permalink:"/smart-contracts/develop/guide/chains_and_nodes/node-config",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/chains_and_nodes/node-config.md",tags:[],version:"current",frontMatter:{description:"Learn how to configure a Wasp node.",image:"/img/logo/WASP_logo_dark.png",keywords:["Smart Contracts","Configuring a node","Go-lang","Hornet","Requirements","Configuration","Dashboard","Grafana","Prometheus"]},sidebar:"tutorialSidebar",previous:{title:"Running a Node",permalink:"/smart-contracts/develop/guide/chains_and_nodes/running-a-node"},next:{title:"Docker (Standalone)",permalink:"/smart-contracts/develop/guide/chains_and_nodes/docker_standalone"}},d={},u=[{value:"Hornet",id:"hornet",level:2},{value:"Hornet Connection Settings",id:"hornet-connection-settings",level:2},{value:"Authentication",id:"authentication",level:2},{value:"JWT",id:"jwt",level:3},{value:"Peering",id:"peering",level:2},{value:"Publisher",id:"publisher",level:2},{value:"Web API",id:"web-api",level:2},{value:"Dashboard",id:"dashboard",level:2},{value:"Prometheus",id:"prometheus",level:2},{value:"Grafana",id:"grafana",level:2}],c={toc:u};function h(e){var t=e.components,n=(0,i.Z)(e,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"node-configuration"},"Node Configuration"),(0,r.kt)("p",null,"You can configure your node/s using the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/master/config.json"},(0,r.kt)("inlineCode",{parentName:"a"},"config.json")),"\nconfiguration file. If you plan to run several nodes in the same host, you will need to adjust the port configuration."),(0,r.kt)("h2",{id:"hornet"},"Hornet"),(0,r.kt)("p",null,"Wasp requires a Hornet node to communicate with the L1 Tangle."),(0,r.kt)("p",null,"You can use any ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/wasp/guide/chains_and_nodes/testnet"},"publicly available node"),",\nor ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/getting_started"},"set up your own node"),",\nor ",(0,r.kt)("a",{parentName:"p",href:"https://wiki.iota.org/hornet/how_tos/private_tangle"},"create a private tangle"),"."),(0,r.kt)("h2",{id:"hornet-connection-settings"},"Hornet Connection Settings"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"l1.apiAddress")," specifies the Hornet API address (default port: ",(0,r.kt)("inlineCode",{parentName:"p"},"14265"),")"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"li.faucetAddress")," specifies the Hornet faucet address (default port: ",(0,r.kt)("inlineCode",{parentName:"p"},"8091"),")"),(0,r.kt)("h2",{id:"authentication"},"Authentication"),(0,r.kt)("p",null,"By default, Wasp accepts any API request coming from ",(0,r.kt)("inlineCode",{parentName:"p"},"127.0.0.1"),". The Dashboard uses basic auth to limit access."),(0,r.kt)("p",null,"Both authentication methods have 'root' permissions and would allow any request."),(0,r.kt)("p",null,"You can disable the authentication per endpoint by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"scheme")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"none")," on any ",(0,r.kt)("inlineCode",{parentName:"p"},"auth")," block such as ",(0,r.kt)("inlineCode",{parentName:"p"},"webapi.auth"),"\nor ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.auth"),"\n. ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/wasp/blob/6b9aa273917c865b0acc83df9a1935f49498e43d/docker_config.json#L58"},"Example configuration"),"\n."),(0,r.kt)("p",null,"The following schemes are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"none"),(0,r.kt)("li",{parentName:"ul"},"ip"),(0,r.kt)("li",{parentName:"ul"},"basic"),(0,r.kt)("li",{parentName:"ul"},"jwt")),(0,r.kt)("h3",{id:"jwt"},"JWT"),(0,r.kt)("p",null,"A new authentication scheme ",(0,r.kt)("inlineCode",{parentName:"p"},"JWT")," was introduced but should be treated as ",(0,r.kt)("strong",{parentName:"p"},"experimental"),"."),(0,r.kt)("p",null,"With this addition, the configuration was slightly modified, and a new plugin ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," was introduced."),(0,r.kt)("p",null,"Both the basic and JWT authentication pull their valid users from the ",(0,r.kt)("inlineCode",{parentName:"p"},"users")," plugin."),(0,r.kt)("p",null,"Furthermore, the API and the Dashboard can use one of the three authentication schemes independently."),(0,r.kt)("p",null,"Users are currently stored inside the configuration (under ",(0,r.kt)("inlineCode",{parentName:"p"},"users"),"), and the passwords are saved as clear text for the\ntime being."),(0,r.kt)("p",null,'The default configuration contains one user "wasp" with API and Dashboard permissions.'),(0,r.kt)("p",null,"While the basic authentication only validates username and password, the JWT authentication validates permissions\nadditionally."),(0,r.kt)("p",null,"To enable the JWT authentication change ",(0,r.kt)("inlineCode",{parentName:"p"},"webapi.auth.scheme")," and/or ",(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.auth.scheme")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt"),"."),(0,r.kt)("p",null,"If you have enabled JWT for the webapi, you need to call ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli login")," before making any requests."),(0,r.kt)("p",null,"One login has a duration of exactly 24 hours by default. You can change this setting in the configuration at (\nwebapi/dashboard)",(0,r.kt)("inlineCode",{parentName:"p"},".auth.jwt.durationHours")),(0,r.kt)("h2",{id:"peering"},"Peering"),(0,r.kt)("p",null,"Wasp nodes connect to other Wasp peers to form committees. There is exactly one TCP connection between two Wasp nodes\nparticipating in the same committee. Each node uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"peering.port")," setting to specify the port used for peering."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"peering.netid")," must have the form ",(0,r.kt)("inlineCode",{parentName:"p"},"host:port"),", with a ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," value equal to ",(0,r.kt)("inlineCode",{parentName:"p"},"peering.port"),", and where ",(0,r.kt)("inlineCode",{parentName:"p"},"host")," must\nresolve to the machine where the node is running and be reachable by other nodes in the committee. Each node in a\ncommittee must have a unique ",(0,r.kt)("inlineCode",{parentName:"p"},"netid"),"."),(0,r.kt)("h2",{id:"publisher"},"Publisher"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," specifies the port for the ",(0,r.kt)("a",{parentName:"p",href:"https://nanomsg.org/"},"Nanomsg")," event publisher. Wasp nodes publish important\nevents in smart contracts, such as state transitions, incoming and processed requests, etc. Any Nanomsg client can\nsubscribe to these messages."),(0,r.kt)("details",null,(0,r.kt)("summary",null,"More Information on Wasp and Nanomsg"),(0,r.kt)("div",null,(0,r.kt)("p",null,"Each Wasp node publishes important events via a ",(0,r.kt)("a",{parentName:"p",href:"https://nanomsg.org/"},"Nanomsg")," message stream (just like ZMQ is used in\nIRI). In the future, Wasp will possibly support ",(0,r.kt)("a",{parentName:"p",href:"https://zeromq.org/"},"ZMQ")," and ",(0,r.kt)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT")," publishers too."),(0,r.kt)("p",null,"Any Nanomsg client can subscribe to the message stream. In Go, you can use the ",(0,r.kt)("inlineCode",{parentName:"p"},"packages/subscribe")," package provided in\nWasp for this."),(0,r.kt)("p",null,"You can configure the Publisher port in the ",(0,r.kt)("inlineCode",{parentName:"p"},"config.json")," file using the ",(0,r.kt)("inlineCode",{parentName:"p"},"nanomsg.port")," setting."),(0,r.kt)("p",null,"The Message format is simply a string consisting of a space-separated list of tokens; the first token is the message\ntype. Below is a list of all message types published by Wasp (you can search for ",(0,r.kt)("inlineCode",{parentName:"p"},"publisher.Publish")," in the code to see\nthe exact places where each message is published)."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Message"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Format"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain record has been saved in the registry"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"chainrec <chain ID> <color>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain committee has been activated"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"active_committee <chain ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Chain committee dismissed"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"dismissed_committee <chain ID>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"A new SC request reached the node"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request_in <chain ID> <request tx ID> <request block index>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"SC request has been processed (i.e. corresponding state update was confirmed)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"request_out <chain ID> <request tx ID> <request block index> <state index> <seq number in the block> <block size>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"State transition (new state has been committed to DB)"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"state <chain ID> <state index> <block size> <state tx ID> <state hash> <timestamp>"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Event generated by a SC"),(0,r.kt)("td",{parentName:"tr",align:"left"},(0,r.kt)("inlineCode",{parentName:"td"},"vmmsg <chain ID> <contract hname> ..."))))))),(0,r.kt)("h2",{id:"web-api"},"Web API"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"webapi.bindAddress")," specifies the bind address/port for the Web API used by ",(0,r.kt)("inlineCode",{parentName:"p"},"wasp-cli")," and other clients to interact\nwith the Wasp node."),(0,r.kt)("h2",{id:"dashboard"},"Dashboard"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"dashboard.bindAddress")," specifies the bind address/port for the node dashboard, which can be accessed with a web\nbrowser."),(0,r.kt)("h2",{id:"prometheus"},"Prometheus"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.bindAddress")," specifies the bind address/port for the prometheus server, where it's possible to get multiple\nsystem metrics."),(0,r.kt)("p",null,"By default, Prometheus is disabled. You can enable it by setting ",(0,r.kt)("inlineCode",{parentName:"p"},"prometheus.enabled")," to ",(0,r.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,r.kt)("h2",{id:"grafana"},"Grafana"),(0,r.kt)("p",null,"Grafana provides a dashboard to visualize system metrics. It can use the prometheus metrics as a data source."))}h.isMDXComponent=!0}}]);