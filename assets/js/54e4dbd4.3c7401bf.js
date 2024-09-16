"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[5745],{1504:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var o=n(5893),i=n(1151),s=n(7760);const r={sidebar_position:2},a="Token setup",l={id:"setup/native/token_setup",title:"Token setup",description:"Setting up tokens.json",source:"@site/versioned_docs/version-v2.0.0-rc.1/setup/native/token_setup.mdx",sourceDirName:"setup/native",slug:"/setup/native/token_setup",permalink:"/docs/setup/native/token_setup",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v2.0.0-rc.1/setup/native/token_setup.mdx",tags:[],version:"v2.0.0-rc.1",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Configuring your environment",permalink:"/docs/setup/native/setup"},next:{title:"Configuring the Bot",permalink:"/docs/setup/native/configuring"}},c={},d=[{value:"Setting up <code>tokens.json</code>",id:"setting-up-tokensjson",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",...(0,i.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.h1,{id:"token-setup",children:"Token setup"}),"\n",(0,o.jsx)(s.ZP,{}),"\n",(0,o.jsxs)(t.h2,{id:"setting-up-tokensjson",children:["Setting up ",(0,o.jsx)(t.code,{children:"tokens.json"})]}),"\n",(0,o.jsxs)(t.p,{children:["Open ",(0,o.jsx)(t.code,{children:"settings/tokens.json"})," in your text editor. Replace ",(0,o.jsx)(t.code,{children:"{INITIAL_ACCESS_TOKEN}"})," (including the braces) with the User Access Token, and ",(0,o.jsx)(t.code,{children:"{INITIAL_REFRESH_TOKEN}"})," with the Refresh Token."]}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsxs)(t.p,{children:['If you authorized a "broadcaster token" in the last step, copy ',(0,o.jsx)(t.code,{children:"settings/tokens.json"})," to ",(0,o.jsx)(t.code,{children:"settings/tokens.broadcaster.json"})," and fill the User Access Token and Refresh Token in there with the values for your broadcaster token."]})}),"\n",(0,o.jsx)(t.admonition,{type:"tip",children:(0,o.jsx)(t.p,{children:"Do not include the braces; your tokens should be enclosed in quotation marks but not braces."})})]})}function u(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},7760:(e,t,n)=>{n.d(t,{ZP:()=>r});var o=n(5893),i=n(1151);function s(e){const t={a:"a",code:"code",em:"em",h2:"h2",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"The Twitch API is, unfortunately, designed in a way that makes using a bot like this a little more involved than it ought to be. This section will help you deal with the API requirements. It probably seems a little daunting if you're not familiar with what the \"Authorization Code Grant Flow\" is, but we've done most of the worrying about that for you\u2014there's only a little bit left that you need to do: register an application with Twitch and set up your initial tokens."}),"\n",(0,o.jsx)(t.h2,{id:"registering-an-application",children:"Registering an application"}),"\n",(0,o.jsxs)(t.p,{children:["Per Twitch requirements, you'll need to have a verified email and 2FA enabled for this to work, so make sure you've done that first. Once you have, go to the ",(0,o.jsx)(t.a,{href:"https://dev.twitch.tv/console",children:"Twitch developer console"})," and log in with your Twitch account. From there:"]}),"\n",(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:'Open the "Applications" tab and click "Register your Application"'}),"\n",(0,o.jsx)(t.li,{children:"Pick a name for your bot's application. You'll be the only person to ever see this name, so don't think too hard about it!"}),"\n",(0,o.jsxs)(t.li,{children:["Set the OAuth Redirect URL to ",(0,o.jsx)(t.code,{children:"http://localhost:3000"})]}),"\n",(0,o.jsx)(t.li,{children:'Set the category to "chatbot"'}),"\n",(0,o.jsxs)(t.li,{children:["Prove ",(0,o.jsx)(t.em,{children:"you"})," aren't a bot (with the \"I'm not a robot\" checkbox)"]}),"\n",(0,o.jsx)(t.li,{children:'Click "Create".'}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:['You should be redirected back to the Applications tab, where your application should be listed now. If you click "Manage" on the application, you\'ll be taken to a new page. Note down the ',(0,o.jsx)(t.strong,{children:"Client ID"}),' listed here, and click the "New Secret" button to generate and note down a ',(0,o.jsx)(t.strong,{children:"Client Secret"}),"."]}),"\n",(0,o.jsx)(t.h2,{id:"generating-tokens",children:"Generating tokens"}),"\n",(0,o.jsxs)(t.p,{children:["Now you need to use that Client ID and Client Secret to generate an access token and a refresh token. This will require installing the ",(0,o.jsx)(t.a,{href:"https://dev.twitch.tv/docs/cli/",children:"Twitch CLI"}),", so follow the instructions there; on Linux, the manual install option is probably easiest, and on Windows it's probably easiest just to install Scoop and use it (this will require using Powershell instead of Command Prompt)."]}),"\n",(0,o.jsx)(t.p,{children:"Once you have the Twitch CLI installed, you'll need to generate either one or two sets of tokens, based on how you plan on using the bot:"}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Running the bot under your Twitch account"}),(0,o.jsx)(t.p,{children:"This is the simpler of the two options, as it provides full functionality while only requiring one set of tokens. Just follow these steps:"}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Make sure you're logged into Twitch"}),"\n",(0,o.jsxs)(t.li,{children:["In your terminal (or Powershell) window, run the command ",(0,o.jsx)(t.code,{children:'twitch token -u -s "chat:read chat:edit moderator:read:chatters channel:read:subscriptions moderation:read channel:manage:redemptions channel:read:redemptions"'}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["When prompted, enter your Client ID and Client Secret from earlier. You'll need these again when you're configuring the bot, so don't get rid of them!","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Pasting into a terminal window usually requires right clicking instead of pressing Control+V; Control+V has a different meaning inside a terminal window."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Authorize your application to access your account in your browser, when it opens an authorization page."}),"\n",(0,o.jsxs)(t.li,{children:["The Twitch CLI will output a ",(0,o.jsx)(t.strong,{children:"User Access Token"})," and a ",(0,o.jsx)(t.strong,{children:"Refresh Token"}),". Note these down too!"]}),"\n"]})]}),"\n",(0,o.jsxs)(n,{children:[(0,o.jsx)("summary",{children:"Running the bot under a dedicated Twitch account"}),(0,o.jsxs)(t.p,{children:["This option is more complicated, as it requires two sets of tokens. While you ",(0,o.jsx)(t.em,{children:"can"})," configure the bot only with its own token, if you don't also provide a token for your own Twitch account, you'll be missing some functionality: specifically, getting the lists of your subscribers and moderators requires a broadcaster token. Without those lists, someone lurking in chat will be noticed by the bot, but won't be counted by the bot as a subscriber/moderator until they speak in chat. This means that ",(0,o.jsx)(t.code,{children:"!subnext"})," (etc) and the subscriber multiplier for weighted next and weighted random will not apply until they speak in chat. In addition, the channel point functionality relies on a broadcaster token. As such, we strongly recommend providing both tokens."]}),(0,o.jsx)(t.p,{children:"To generate your tokens:"}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Log in to the Twitch website with your broadcaster account."}),"\n",(0,o.jsxs)(t.li,{children:["In your terminal (or Powershell window), run the command ",(0,o.jsx)(t.code,{children:'twitch token -u -s "moderator:read:chatters channel:read:subscriptions moderation:read channel:manage:redemptions channel:read:redemptions"'}),"."]}),"\n",(0,o.jsxs)(t.li,{children:["When prompted, enter your Client ID and Client Secret from earlier. You'll need these again when you're configuring the bot, so don't get rid of them!","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"Pasting into a terminal window usually requires right clicking instead of pressing Control+V; Control+V has a different meaning inside a terminal window."}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.li,{children:"Authorize your application to access your account in your browser, when it opens an authorization page."}),"\n",(0,o.jsxs)(t.li,{children:["The Twitch CLI will output a ",(0,o.jsx)(t.strong,{children:"User Access Token"})," and a ",(0,o.jsx)(t.strong,{children:"Refresh Token"}),". Note these down; these are your broadcaster tokens, and will be used to populate ",(0,o.jsx)(t.code,{children:"tokens.broadcaster.json"})," later."]}),"\n",(0,o.jsx)(t.li,{children:"Log out of the Twitch website, then log back in with your dedicated bot account."}),"\n",(0,o.jsxs)(t.li,{children:["Run ",(0,o.jsx)(t.code,{children:'twitch token -u -s "chat:read chat:edit"'}),"."]}),"\n",(0,o.jsx)(t.li,{children:"Authorize your application to access your bot account."}),"\n",(0,o.jsxs)(t.li,{children:["Note down the new User Access Token and Refresh Token. These are your bot tokens, and will be used in ",(0,o.jsx)(t.code,{children:"tokens.json"}),"."]}),"\n"]})]})]})}function r(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(s,{...e})}):s(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>r});var o=n(7294);const i={},s=o.createContext(i);function r(e){const t=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),o.createElement(s.Provider,{value:t},e.children)}}}]);