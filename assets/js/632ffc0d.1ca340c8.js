"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[8332],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>f});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),m=i,f=c["".concat(s,".").concat(m)]||c[m]||d[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:i,a[1]=l;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1884:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const o={sidebar_position:1},a="Configuring your environment",l={unversionedId:"setup/native/setup",id:"setup/native/setup",title:"Configuring your environment",description:"After extracting the release (or cloning from git), you should have a folder structure that looks like this (note that some files have been omitted here for brevity):",source:"@site/docs/setup/native/setup.md",sourceDirName:"setup/native",slug:"/setup/native/setup",permalink:"/docs/next/setup/native/setup",draft:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/docs/setup/native/setup.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Native prerequisites",permalink:"/docs/next/setup/native/"},next:{title:"Token setup",permalink:"/docs/next/setup/native/token_setup"}},s={},u=[],p={toc:u},c="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"configuring-your-environment"},"Configuring your environment"),(0,i.kt)("p",null,"After extracting the release (or cloning from git), you should have a folder structure that looks like this (note that some files have been omitted here for brevity):"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"fluid-queue"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"settings"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"tokens.example.json")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"settings.example.json")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"build"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"index.js")))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"package.json"))))),(0,i.kt)("p",null,"If you don't have a ",(0,i.kt)("inlineCode",{parentName:"p"},"build")," directory, then you either cloned from git or downloaded a source archive, and will need to compile the bot."),(0,i.kt)("details",null,(0,i.kt)("summary",null,"Compiling the bot"),(0,i.kt)("p",null,"To compile the bot, run the following commands:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sh"},"$ npm install --include=dev\n$ npm run build\n")),(0,i.kt)("p",null,"This will install all the development dependencies and then compile the bot. Our prepackaged releases are already compiled, so we'd recommend using them unless you have a specific reason to build the bot yourself.")),(0,i.kt)("p",null,"Next, copy or rename ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens.example.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.example.json")," to ",(0,i.kt)("inlineCode",{parentName:"p"},"tokens.json")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"settings.yml"),' within the "settings" folder, and we can start the setup process.'))}d.isMDXComponent=!0}}]);