"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[4762],{2491:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>d,toc:()=>u});var n=o(5893),r=o(1151);const s={sidebar_position:4},i="Running the bot",d={id:"setup/docker/running",title:"Running the bot",description:"Depending on how your system is configured, you may need to use docker compose or docker-compose here. We'll be using docker compose on this page, but if that doesn't work, try with a dash.",source:"@site/versioned_docs/version-v2.0.0-rc.1/setup/docker/running.md",sourceDirName:"setup/docker",slug:"/setup/docker/running",permalink:"/docs/setup/docker/running",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v2.0.0-rc.1/setup/docker/running.md",tags:[],version:"v2.0.0-rc.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Configuring the Bot",permalink:"/docs/setup/docker/configuring"},next:{title:"Native prerequisites",permalink:"/docs/setup/native/"}},c={},u=[{value:"Starting the bot",id:"starting-the-bot",level:2},{value:"Running the bot in the background",id:"running-the-bot-in-the-background",level:2},{value:"Updating",id:"updating",level:2},{value:"Next steps",id:"next-steps",level:2}];function a(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"running-the-bot",children:"Running the bot"}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Depending on how your system is configured, you may need to use ",(0,n.jsx)(t.code,{children:"docker compose"})," or ",(0,n.jsx)(t.code,{children:"docker-compose"})," here. We'll be using ",(0,n.jsx)(t.code,{children:"docker compose"})," on this page, but if that doesn't work, try with a dash."]})}),"\n",(0,n.jsx)(t.p,{children:"Now that you're all set up, you can start the bot!"}),"\n",(0,n.jsx)(t.h2,{id:"starting-the-bot",children:"Starting the bot"}),"\n",(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsxs)(t.p,{children:["Make sure your permissions are configured correctly, as described in the ",(0,n.jsx)(t.a,{href:"/docs/setup/docker/setup#permissions",children:"Configuring your environment"})," section!"]})}),"\n",(0,n.jsxs)(t.p,{children:["To start the bot for the first time, run ",(0,n.jsx)(t.code,{children:"docker compose up"})," from your root folder (the one with ",(0,n.jsx)(t.code,{children:"docker-compose.yml"}),'). This will pull the image from Docker and start the bot "attached" to your terminal session. To stop the bot, press ',(0,n.jsx)("kbd",{children:"Ctrl"}),"\xa0+\xa0",(0,n.jsx)("kbd",{children:"C"}),", which will signal Docker to shut down the container."]}),"\n",(0,n.jsx)(t.h2,{id:"running-the-bot-in-the-background",children:"Running the bot in the background"}),"\n",(0,n.jsxs)(t.p,{children:['The recommended way to use the docker container is to let it run in the background, "detached" from your terminal. To start the bot detached, you can run ',(0,n.jsx)(t.code,{children:"docker compose up -d"}),"; if you need to stop the bot, you can run ",(0,n.jsx)(t.code,{children:"docker compose down"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"updating",children:"Updating"}),"\n",(0,n.jsx)(t.p,{children:"To update the bot when we release a new version, you just need to run a few commands:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-sh",children:'$ docker compose down -v # to stop the container and delete "ephemeral" volumes; run this even if you\'ve already stopped the bot\n$ docker compose pull # to update the bot with the latest image from Docker Hub\n$ docker compose up -d # to start the bot again!\n'})}),"\n",(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.code,{children:"watchtower"})," or similar tools should likely work without issue as well."]}),"\n",(0,n.jsx)(t.h2,{id:"next-steps",children:"Next steps"}),"\n",(0,n.jsxs)(t.p,{children:["Now that you've got the bot running, check out the ",(0,n.jsx)(t.a,{href:"/docs/fluid-queue/",children:"Using fluid-queue"})," section to learn about how to operate the bot through your chat."]})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(a,{...e})}):a(e)}},1151:(e,t,o)=>{o.d(t,{Z:()=>d,a:()=>i});var n=o(7294);const r={},s=n.createContext(r);function i(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);