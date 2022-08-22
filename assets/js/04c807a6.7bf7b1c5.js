"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[84485],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),f=o,m=p["".concat(l,".").concat(f)]||p[f]||u[f]||i;return n?r.createElement(m,a(a({ref:t},d),{},{components:n})):r.createElement(m,a({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},19938:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return c},toc:function(){return u}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],s={},l="Stardust Ledger",c={unversionedId:"explanations/ledger/intro",id:"explanations/ledger/intro",title:"Stardust Ledger",description:"The ledger is a distributed database that records ownership of funds in the network. Users modify the ledger by",source:"@site/content/build/introduction-docs/develop/docs/explanations/ledger/intro.md",sourceDirName:"explanations/ledger",slug:"/explanations/ledger/intro",permalink:"/introduction/develop/explanations/ledger/intro",draft:!1,editUrl:"https://github.com/iotaledger/chrysalis-docs/edit/develop/docs/content/build/introduction-docs/develop/docs/explanations/ledger/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"mySidebar",previous:{title:"Dynamic Proof of Work",permalink:"/introduction/develop/explanations/what_is_stardust/dynamic_pow"},next:{title:"Simple Transactions",permalink:"/introduction/develop/explanations/ledger/simple_transfers"}},d={},u=[],p={toc:u};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"stardust-ledger"},"Stardust Ledger"),(0,i.kt)("p",null,"The ledger is a distributed database that records ownership of funds in the network. Users modify the ledger by\nposting transactions to the network that move these funds between user accounts."),(0,i.kt)("p",null,"IOTA uses the Unspent Transaction Output Model (UTXO) to model ledger entries. A transaction consumes ledger entries\n(previously created transaction outputs) and creates new ones. When a UTXO is consumed, it is marked as spent and is\nremoved from the database, while newly created UTXOs are added. All currently unspent UTXOs comprise the most recent\nledger state."),(0,i.kt)("p",null,"A UTXO is allowed to be spent if its owner presents a valid digital signature corresponding to the owner of the UTXO\nthat is generally called the owner address. Stardust extends this concept by letting users define additional\nspending constraints on UTXOs, for example that an output can only be spent after a certain time."),(0,i.kt)("p",null,"In the following, we will demonstrate with example some common types of transactions and in the meantime we will\nexplore the different kind of constraints and outputs that one might create in the ledger."))}f.isMDXComponent=!0}}]);