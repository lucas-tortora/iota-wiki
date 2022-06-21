"use strict";(self.webpackChunkiota_wiki=self.webpackChunkiota_wiki||[]).push([[73402],{8344:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return o},metadata:function(){return d},toc:function(){return u}});var a=n(87462),i=n(63366),r=(n(67294),n(3905)),l=["components"],o={description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable"]},s="Getting Started with Java",d={unversionedId:"libraries/java/getting_started",id:"libraries/java/getting_started",title:"Getting Started with Java",description:"Getting started with the official IOTA Client Library Java binding.",source:"@site/content/build/iota.rs/production/documentation/docs/libraries/java/getting_started.md",sourceDirName:"libraries/java",slug:"/libraries/java/getting_started",permalink:"/iota.rs/libraries/java/getting_started",draft:!1,editUrl:"https://github.com/iotaledger/iota.rs/edit/production/documentation/content/build/iota.rs/production/documentation/docs/libraries/java/getting_started.md",tags:[],version:"current",frontMatter:{description:"Getting started with the official IOTA Client Library Java binding.",image:"/img/logo/iota_mark_light.png",keywords:["Java","Rust","jar","maven","environment variable"]},sidebar:"docs",previous:{title:"IOTA Client Python Library",permalink:"/iota.rs/libraries/python/api_reference"},next:{title:"Android development",permalink:"/iota.rs/libraries/java/android_development"}},p={},u=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Security",id:"security",level:2},{value:"Installation",id:"installation",level:2},{value:"Step 1: Creating the native library",id:"step-1-creating-the-native-library",level:3},{value:"Step 2: Creating the Java archive",id:"step-2-creating-the-java-archive",level:3},{value:"Generating the source files and classes",id:"generating-the-source-files-and-classes",level:4},{value:"Generating the jar",id:"generating-the-jar",level:4},{value:"Gradle",id:"gradle",level:5},{value:"Maven",id:"maven",level:5},{value:"Usage",id:"usage",level:2},{value:"Gradle",id:"gradle-1",level:3},{value:"Maven",id:"maven-1",level:3},{value:"Initialisation",id:"initialisation",level:2},{value:"API Reference",id:"api-reference",level:2}],c={toc:u};function m(e){var t=e.components,n=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"getting-started-with-java"},"Getting Started with Java"),(0,r.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,r.kt)("p",null,"To use the library, we recommend you update Rust to the latest stable version ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/rust-lang/rustup.rs#keeping-rust-up-to-date"},(0,r.kt)("inlineCode",{parentName:"a"},"$ rustup update stable")),". Nightly should be fine but some changes might not be compatible."),(0,r.kt)("p",null,"Ensure you have first installed the required dependencies for the library ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/iotaledger/iota.rs/blob/dev/README.md"},"here"),". Then also install the following programs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java & JDK (Make sure $JAVA_HOME env variable) is set"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://gradle.org/install/"},"Gradle")," v4 or higher or ",(0,r.kt)("a",{parentName:"li",href:"https://maven.apache.org/download.cgi"},"Maven")," installe"),(0,r.kt)("li",{parentName:"ul"},"Cargo ndk (",(0,r.kt)("inlineCode",{parentName:"li"},"cargo install cargo-ndk"),")"),(0,r.kt)("li",{parentName:"ul"},"Cargo fmt (",(0,r.kt)("inlineCode",{parentName:"li"},"rustup component add rustfmt"),")")),(0,r.kt)("p",null,"Download or clone the ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs")," repository"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ git clone https://github.com/iotaledger/iota.rs.git\n")),(0,r.kt)("h2",{id:"security"},"Security"),(0,r.kt)("div",{className:"admonition admonition-warning alert alert--danger"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M5.05.31c.81 2.17.41 3.38-.52 4.31C3.55 5.67 1.98 6.45.9 7.98c-1.45 2.05-1.7 6.53 3.53 7.7-2.2-1.16-2.67-4.52-.3-6.61-.61 2.03.53 3.33 1.94 2.86 1.39-.47 2.3.53 2.27 1.67-.02.78-.31 1.44-1.13 1.81 3.42-.59 4.78-3.42 4.78-5.56 0-2.84-2.53-3.22-1.25-5.61-1.52.13-2.03 1.13-1.89 2.75.09 1.08-1.02 1.8-1.86 1.33-.67-.41-.66-1.19-.06-1.78C8.18 5.31 8.68 2.45 5.05.32L5.03.3l.02.01z"}))),"warning")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"In a production setup, do not store passwords in the host's environment variables or in the source code.  See our ",(0,r.kt)("a",{parentName:"p",href:"https://chrysalis.docs.iota.org/guides/backup_security"},"backup and security recommendations")," for production setups."))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"In order to build using the iota.rs Java bindings, you need the following two parts:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"JNI Native library linking ",(0,r.kt)("inlineCode",{parentName:"li"},"Rust")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"C"),", and then ",(0,r.kt)("inlineCode",{parentName:"li"},"C")," to java ",(0,r.kt)("inlineCode",{parentName:"li"},"native")," methods (",(0,r.kt)("inlineCode",{parentName:"li"},".so")," , ",(0,r.kt)("inlineCode",{parentName:"li"},".dll")," or ",(0,r.kt)("inlineCode",{parentName:"li"},".dylib")," depending on your system)"),(0,r.kt)("li",{parentName:"ol"},"Java archive(Jar) containing ",(0,r.kt)("inlineCode",{parentName:"li"},"native")," methods which call C code. (",(0,r.kt)("inlineCode",{parentName:"li"},".jar"),")")),(0,r.kt)("h3",{id:"step-1-creating-the-native-library"},"Step 1: Creating the native library"),(0,r.kt)("p",null,"Build the iota.rs library (This generates the java source code and JNI library file)"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd iota.rs/bindings/java\ncargo build --release\n")),(0,r.kt)("p",null,"Generated binaries can then be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/target/release")),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"Compiling for Android requires additional compilation instructions.\nSpecific instructions can be found in ",(0,r.kt)("a",{parentName:"p",href:"/iota.rs/libraries/java/android_development"},"Android development")))),(0,r.kt)("h3",{id:"step-2-creating-the-java-archive"},"Step 2: Creating the Java archive"),(0,r.kt)("h4",{id:"generating-the-source-files-and-classes"},"Generating the source files and classes"),(0,r.kt)("p",null,"After step 1, Java source files will be generated under ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/native/src/main/java/org/iota/client"),"."),(0,r.kt)("p",null,"If this step succeeded, we need to generate the jar file containing the newly generated Java source files."),(0,r.kt)("h4",{id:"generating-the-jar"},"Generating the jar"),(0,r.kt)("p",null,"Generating the jar can be done with your tool of preference. We provide examples for Gradle and Maven in this guide"),(0,r.kt)("h5",{id:"gradle"},"Gradle"),(0,r.kt)("p",null,"Make ",(0,r.kt)("inlineCode",{parentName:"p"},"gradlew")," executable (",(0,r.kt)("inlineCode",{parentName:"p"},"chmod +x gradlew"),") if needed, then run"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd iota.rs/bindings/java\n./gradlew jar\n")),(0,r.kt)("h5",{id:"maven"},"Maven"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd iota.rs/bindings/java\nmvn install\n")),(0,r.kt)("p",null,"After running one of these commands, the jar can then be found at ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs/bindings/java/native/build/libs/native.jar")),(0,r.kt)("h2",{id:"usage"},"Usage"),(0,r.kt)("p",null,"You can find more information on using the ",(0,r.kt)("inlineCode",{parentName:"p"},"iota.rs")," library's java binding in the ",(0,r.kt)("a",{parentName:"p",href:"/iota.rs/libraries/java/examples"},"examples section"),"."),(0,r.kt)("h3",{id:"gradle-1"},"Gradle"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew examples:java-app:test --info\n")),(0,r.kt)("h3",{id:"maven-1"},"Maven"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"mvn exec:exec\n")),(0,r.kt)("h2",{id:"initialisation"},"Initialisation"),(0,r.kt)("p",null,"This example fetches node information"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'private static void nodeInfo() {\n    String nodeUrl = "https://chrysalis-nodes.iota.cafe:443";\n    Client iota = Client.Builder()\n        // Insert your node URL here\n        .withNode(nodeUrl) \n        // Choose pow mode\n        .withLocalPow(true)\n        //Then create the Client instance\n        .finish();\n    NodeInfoWrapper info = iota.getInfo();\n    System.out.println("Node url: " + info.url());\n    System.out.println("Node Info: " + info.nodeInfo());\n}\n')),(0,r.kt)("h2",{id:"api-reference"},"API Reference"),(0,r.kt)("p",null,"API Reference can be found ",(0,r.kt)("a",{parentName:"p",href:"api_reference"},"here"),"."),(0,r.kt)("h1",{id:"limitations"},"Limitations"),(0,r.kt)("p",null,"Due to the fact that we are linking through C from Rust, there are a couple of limiting factors."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Classic builder patterns return a ",(0,r.kt)("inlineCode",{parentName:"li"},"clone")," after each builder call since we can only pass back to C by reference in ",(0,r.kt)("inlineCode",{parentName:"li"},"Rust"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Java"},"Builder builder1 = new Builder();\nBuilder builder2 = builder1.setValue(true);\n\n// These are different instances, thus builder1 wont have the value set\nassertNotEquals(builder1, builder2);\n")))}m.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),d=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=d(n),m=i,v=c["".concat(s,".").concat(m)]||c[m]||u[m]||r;return n?a.createElement(v,l(l({ref:t},p),{},{components:n})):a.createElement(v,l({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=c;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var d=2;d<r;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"}}]);