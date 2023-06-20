"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[3913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),c=s(n),h=o,m=c["".concat(l,".").concat(h)]||c[h]||d[h]||i;return n?r.createElement(m,a(a({ref:t},p),{},{components:n})):r.createElement(m,a({ref:t},p))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[c]="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8363:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>s});var r=n(7462),o=(n(7294),n(3905));const i={sidebar_position:4},a="Running the bot",u={unversionedId:"setup/native/running",id:"version-2.0.0-beta.3/setup/native/running",title:"Running the bot",description:"Now that you're all set up, you can start the bot!",source:"@site/versioned_docs/version-2.0.0-beta.3/setup/native/running.md",sourceDirName:"setup/native",slug:"/setup/native/running",permalink:"/docs/setup/native/running",draft:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0-beta.3/setup/native/running.md",tags:[],version:"2.0.0-beta.3",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring the Bot",permalink:"/docs/setup/native/configuring"},next:{title:"Using fluid-queue",permalink:"/docs/fluid-queue/"}},l={},s=[{value:"Starting the bot",id:"starting-the-bot",level:2},{value:"Updating",id:"updating",level:2},{value:"Next steps",id:"next-steps",level:2}],p={toc:s},c="wrapper";function d(e){let{components:t,...n}=e;return(0,o.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"running-the-bot"},"Running the bot"),(0,o.kt)("p",null,"Now that you're all set up, you can start the bot!"),(0,o.kt)("h2",{id:"starting-the-bot"},"Starting the bot"),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"If you didn't run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm install")," earlier, now is a good time to do that.")),(0,o.kt)("p",null,"To start the bot, run ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run start")," from your root folder (the one with ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json"),"). The bot will run in your current terminal window, printing some informative messages over time."),(0,o.kt)("p",null,"To stop the bot, press ",(0,o.kt)("kbd",null,"Ctrl"),"\xa0","+","\xa0",(0,o.kt)("kbd",null,"C"),", which will signal the bot to shut down. On Windows, you might be asked if you want to terminate the batch job. Answer yes to this (by entering ",(0,o.kt)("inlineCode",{parentName:"p"},"y"),")."),(0,o.kt)("h2",{id:"updating"},"Updating"),(0,o.kt)("p",null,"To update the bot when we release a new version:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Download the latest release from Github (or pull the latest changes with git)."),(0,o.kt)("li",{parentName:"ol"},"Extract the release to the same location, overwriting the existing files; we don't include any configuration files in the release, so this should only update the files you haven't set up yourself.",(0,o.kt)("admonition",{parentName:"li",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you're overwriting the existing files, or your configuration won't be in the right place anymore."))),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"npm install")," to update the bot's dependencies."),(0,o.kt)("li",{parentName:"ol"},"Start the bot to make sure it works, then continue using it as usual. ")),(0,o.kt)("h2",{id:"next-steps"},"Next steps"),(0,o.kt)("p",null,"Now that you've got the bot running, check out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/fluid-queue/"},"Using fluid-queue")," section to learn about how to operate the bot through your chat."))}d.isMDXComponent=!0}}]);