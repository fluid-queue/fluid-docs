"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[1489],{8979:(e,s,l)=>{l.r(s),l.d(s,{assets:()=>r,contentTitle:()=>d,default:()=>a,frontMatter:()=>t,metadata:()=>o,toc:()=>c});var n=l(5893),i=l(1151);const t={sidebar_position:1},d="Chat commands",o={id:"fluid-queue/commands",title:"Chat commands",description:"The following list contains all commands and aliases accessible by default to you while using the queue. All commands marked with [!] are only accessible to the channel owner.",source:"@site/versioned_docs/version-v2.0.0-rc.1/fluid-queue/commands.md",sourceDirName:"fluid-queue",slug:"/fluid-queue/commands",permalink:"/docs/fluid-queue/commands",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v2.0.0-rc.1/fluid-queue/commands.md",tags:[],version:"v2.0.0-rc.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Using fluid-queue",permalink:"/docs/fluid-queue/"},next:{title:"Custom level types",permalink:"/docs/fluid-queue/custom-level-types"}},r={},c=[];function h(e){const s={a:"a",code:"code",em:"em",h1:"h1",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"chat-commands",children:"Chat commands"}),"\n",(0,n.jsxs)(s.p,{children:["The following list contains all commands and aliases accessible by default to you while using the queue. All commands marked with ",(0,n.jsx)(s.strong,{children:"[!]"})," are only accessible to the channel owner."]}),"\n",(0,n.jsxs)(s.p,{children:["It is important to note that all commands that draw a level (with exception to ",(0,n.jsx)(s.code,{children:"!dismiss"}),") will first remove the currently selected level before drawing a new one."]}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!open"})," opens the queue and allows levels to be added. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!close"})," closes the queue and prevents levels from being added. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!clear [duration]"})," will remove all levels older than the specified duration, including the current level (if applicable). ",(0,n.jsx)(s.strong,{children:"[!]"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["See ",(0,n.jsx)(s.a,{href:"https://github.com/mike182uk/timestring/tree/7.0.0#keywords",children:"the timestring documentation"})," for details on how to format the duration."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!clear all"})," will remove all levels in the queue, including the current level. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!add"})," adds a level or maker ID to the queue, provided a level code or maker ID follows the command."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!remove"}),"/",(0,n.jsx)(s.code,{children:"!leave"})," will remove a user's submitted level or maker ID from the queue. If used by the channel owner, a name can be specified to remove another user's level or maker ID."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!replace"}),"/",(0,n.jsx)(s.code,{children:"!change"}),"/",(0,n.jsx)(s.code,{children:"!swap"})," will swap a user's level code for the one following the command. Queue position is preserved when this is used."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!brb"})," will mark the user as offline. Their levels cannot be selected while in this state."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!back"})," will mark the user as online. Their levels can be selected while in this state."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!current"})," will show the currently selected level or maker ID as well as who submitted it."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!order"})," will show the level selection order as defined in the settings.js file. It also shows what the next level selection will be.\n-",(0,n.jsx)(s.code,{children:"!list"}),"/",(0,n.jsx)(s.code,{children:"!queue"})," will show an in-order list of levels in the queue. It will display the current level as well as the next 5 levels of those currently online. It will also display how many people in the queue are offline."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!position"})," will output the user's position in the queue, provided they have one."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!submitted"}),"/",(0,n.jsx)(s.code,{children:"!entry"}),"/",(0,n.jsx)(s.code,{children:"!mylevel"}),"/",(0,n.jsx)(s.code,{children:"!mylvl"})," will output the user's submitted level code, provided they have submitted a level.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["The broadcaster and moderators can also specify a user when using this command, e.g. ",(0,n.jsx)(s.code,{children:"!entry [user]"}),", to check what level that user submitted."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!weightedchance"}),"/",(0,n.jsx)(s.code,{children:"!odds"}),"/",(0,n.jsx)(s.code,{children:"!chance"}),"/",(0,n.jsx)(s.code,{children:"!chances"})," will output the user's chances of getting selected in weighted random."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!level"})," will select a level from the queue with respect to the order defined in the settings.js file. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!next"})," will select the next level from the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!random"})," will select a random level from the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!weightedrandom"})," will select a random level from the queue using the amount of time spent online and waiting in the queue as weight. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!weightednext"})," will select the level from the queue with the most amount of time spent online and waiting in the queue. If multiple users have the same maximum time spent then the level nearer to the top will be chosen. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!subnext"})," will select the next subscriber's level from the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!subrandom"})," will select a random subscriber's level from the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!weightedsubrandom"})," will select a random level from the subscribers using the amount of time spent online and waiting in the queue as weight. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!weightedsubnext"})," will select the level from the queue with the most amount of time spent online and waiting in the queue and being subscribed. If multiple users have the same maximum time spent then the level nearer to the top will be chosen. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!modnext"})," will select the next moderator's level from the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!modrandom"})," will select a random moderator's level from the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!dismiss"}),"/",(0,n.jsx)(s.code,{children:"!skip"}),"/",(0,n.jsx)(s.code,{children:"!complete"}),"/",(0,n.jsx)(s.code,{children:"!completed"})," will remove the current level from the queue without drawing a new one. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!select"})," will select a specific user's level, provided it is defined after the command. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!punt"})," will move the currently selected level to the back of the queue. ",(0,n.jsx)(s.strong,{children:"[!]"})]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!customcodes"})," will display all of the custom codes that are set, provided the feature is enabled. If this is used by the broadcaster, it can also be used to add and remove custom codes. The appropriate syntax for this is ",(0,n.jsx)(s.code,{children:"!customcode {add/remove/load} {customCode} {ID}"})," where ",(0,n.jsx)(s.code,{children:"add"}),"/",(0,n.jsx)(s.code,{children:"remove"}),"/",(0,n.jsx)(s.code,{children:"load"})," is the desired operation, customCode is the custom code that the user would like to type (example being ",(0,n.jsx)(s.code,{children:"!add Kamek"}),"), and ID being the ID that the custom code is an alias of. If a code is being removed, the ID is not required. Please note that while adding or removing the custom codes from the ",(0,n.jsx)(s.em,{children:"queue"})," are not case sensitive, they are case sensitive with this command.","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!customcode load"})," will reload the custom codes from the ",(0,n.jsx)(s.code,{children:"./customCodes.json"})," file, so you can manually edit that file and then reload the codes without having to restart the queue."]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!customlevels"})," will display all of the custom levels including their custom codes."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!persistence"})," will give control over how and if the queue data is loaded/saved: ",(0,n.jsx)(s.strong,{children:"[!]"}),"\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!persistence save"})," will manually save the queue state (current level, queue, wait time) to ",(0,n.jsx)(s.code,{children:"./data/queue.json"}),"."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!persistence on"})," will set the queue to automatically save its state whenever changes occur. (this is the default behaviour)"]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!persistence off"})," will deactivate any changes to be saved."]}),"\n",(0,n.jsxs)(s.li,{children:[(0,n.jsx)(s.code,{children:"!persistence load"})," will manually load the queue state (current level, queue, wait time) from ",(0,n.jsx)(s.code,{children:"./data/queue.json"}),". Please use this with caution since reloading the state can result in lost data and it is recommended to:","\n",(0,n.jsxs)(s.ul,{children:["\n",(0,n.jsxs)(s.li,{children:["use ",(0,n.jsx)(s.code,{children:"!persistence off"})," to prevent the queue from overriding changes you are going to make"]}),"\n",(0,n.jsxs)(s.li,{children:["make changes to ",(0,n.jsx)(s.code,{children:"./data/queue.json"})]}),"\n",(0,n.jsxs)(s.li,{children:["use ",(0,n.jsx)(s.code,{children:"!persistence load"})," to load these changes"]}),"\n",(0,n.jsxs)(s.li,{children:["use ",(0,n.jsx)(s.code,{children:"!persistence on"})," to reactivate automatic saves"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n"]})]})}function a(e={}){const{wrapper:s}={...(0,i.a)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},1151:(e,s,l)=>{l.d(s,{Z:()=>o,a:()=>d});var n=l(7294);const i={},t=n.createContext(i);function d(e){const s=n.useContext(t);return n.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function o(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),n.createElement(t.Provider,{value:s},e.children)}}}]);