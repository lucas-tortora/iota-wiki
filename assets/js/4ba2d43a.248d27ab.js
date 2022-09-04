"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[1553],{3905:function(e,r,t){t.d(r,{Zo:function(){return d},kt:function(){return u}});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),l=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},d=function(e){var r=l(e.components);return o.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},m=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),m=l(t),u=n,h=m["".concat(c,".").concat(u)]||m[u]||p[u]||a;return t?o.createElement(h,i(i({ref:r},d),{},{components:t})):o.createElement(h,i({ref:r},d))}));function u(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var l=2;l<a;l++)i[l]=t[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}m.displayName="MDXCreateElement"},66918:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return c},default:function(){return u},frontMatter:function(){return s},metadata:function(){return l},toc:function(){return p}});var o=t(87462),n=t(63366),a=(t(67294),t(3905)),i=["components"],s={description:"The errors contract keeps a map of error codes to error message templates. These error codes are used in request receipts.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},c="The `errors` Contract",l={unversionedId:"guide/core_concepts/core_contracts/errors",id:"guide/core_concepts/core_contracts/errors",title:"The `errors` Contract",description:"The errors contract keeps a map of error codes to error message templates. These error codes are used in request receipts.",source:"@site/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/errors.md",sourceDirName:"guide/core_concepts/core_contracts",slug:"/guide/core_concepts/core_contracts/errors",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/errors",draft:!1,editUrl:"https://github.com/iotaledger/wasp/edit/develop/documentation/content/build/wasp/develop/documentation/docs/guide/core_concepts/core_contracts/errors.md",tags:[],version:"current",frontMatter:{description:"The errors contract keeps a map of error codes to error message templates. These error codes are used in request receipts.",image:"/img/logo/WASP_logo_dark.png",keywords:["smart contracts","core","root","initialization","entry points","fees","ownership","views","reference"]},sidebar:"tutorialSidebar",previous:{title:"The `governance` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/governance"},next:{title:"The `evm` Contract",permalink:"/smart-contracts/develop/guide/core_concepts/core_contracts/evm"}},d={},p=[{value:"Entry Points",id:"entry-points",level:2},{value:"<code>registerError(m ErrorMessageFormat) c ErrorCode</code>",id:"registererrorm-errormessageformat-c-errorcode",level:3},{value:"Parameters",id:"parameters",level:4},{value:"Returns",id:"returns",level:4},{value:"Views",id:"views",level:2},{value:"<code>getErrorMessageFormat(c ErrorCode) m ErrorMessageFormat</code>",id:"geterrormessageformatc-errorcode-m-errormessageformat",level:3},{value:"Parameters",id:"parameters-1",level:4},{value:"Returns",id:"returns-1",level:4},{value:"Schemas",id:"schemas",level:2},{value:"<code>ErrorCode</code>",id:"errorcode",level:3},{value:"<code>UnresolvedVMError</code>",id:"unresolvedvmerror",level:3}],m={toc:p};function u(e){var r=e.components,t=(0,n.Z)(e,i);return(0,a.kt)("wrapper",(0,o.Z)({},m,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"the-errors-contract"},"The ",(0,a.kt)("inlineCode",{parentName:"h1"},"errors")," Contract"),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errors")," contract is one of the ",(0,a.kt)("a",{parentName:"p",href:"/smart-contracts/develop/overview"},"core contracts")," on each IOTA Smart Contracts\nchain."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"errors")," contract keeps a map of error codes to error message templates.\nThis allows contracts to store lengthy error strings only once and then reuse them by just providing the error code (and\noptional extra values) when producing an error, thus saving storage and gas."),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"entry-points"},"Entry Points"),(0,a.kt)("h3",{id:"registererrorm-errormessageformat-c-errorcode"},(0,a.kt)("inlineCode",{parentName:"h3"},"registerError(m ErrorMessageFormat) c ErrorCode")),(0,a.kt)("p",null,"Registers an error message template."),(0,a.kt)("h4",{id:"parameters"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"): The error message template, which supports standard ",(0,a.kt)("a",{parentName:"li",href:"https://pkg.go.dev/fmt#hdr-Printing"},"go verbs"),"\nfor variable printing.")),(0,a.kt)("h4",{id:"returns"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"c")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorCode"),"): The error code of the registered template")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"views"},"Views"),(0,a.kt)("h3",{id:"geterrormessageformatc-errorcode-m-errormessageformat"},(0,a.kt)("inlineCode",{parentName:"h3"},"getErrorMessageFormat(c ErrorCode) m ErrorMessageFormat")),(0,a.kt)("p",null,"Returns the message template stored for a given error code."),(0,a.kt)("h4",{id:"parameters-1"},"Parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"c")," (",(0,a.kt)("inlineCode",{parentName:"li"},"ErrorCode"),"): The error code of the registered template.")),(0,a.kt)("h4",{id:"returns-1"},"Returns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"m")," (",(0,a.kt)("inlineCode",{parentName:"li"},"string"),"): The error message template.")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"schemas"},"Schemas"),(0,a.kt)("h3",{id:"errorcode"},(0,a.kt)("inlineCode",{parentName:"h3"},"ErrorCode")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ErrorCode")," is encoded as the concatenation of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The contract hname(",(0,a.kt)("inlineCode",{parentName:"li"},"hname"),")."),(0,a.kt)("li",{parentName:"ul"},"The error ID, calculated as the hash of the error template(",(0,a.kt)("inlineCode",{parentName:"li"},"uint16"),").")),(0,a.kt)("h3",{id:"unresolvedvmerror"},(0,a.kt)("inlineCode",{parentName:"h3"},"UnresolvedVMError")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"UnresolvedVMError")," is encoded as the concatenation of:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"The error code (",(0,a.kt)("a",{parentName:"li",href:"#errorcode"},(0,a.kt)("inlineCode",{parentName:"a"},"ErrorCode")),")."),(0,a.kt)("li",{parentName:"ul"},"CRC32 checksum of the formatted string (",(0,a.kt)("inlineCode",{parentName:"li"},"uint32"),")."),(0,a.kt)("li",{parentName:"ul"},"The JSON-encoded list of parameters for the template (",(0,a.kt)("inlineCode",{parentName:"li"},"string")," prefixed with ",(0,a.kt)("inlineCode",{parentName:"li"},"uint16")," size).")))}u.isMDXComponent=!0}}]);