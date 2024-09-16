"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[1688],{6767:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>s,toc:()=>d});var i=n(5893),r=n(1151);const a={sidebar_position:4},o="Channel Point Rewards",s={id:"fluid-queue/channel-points",title:"Channel Point Rewards",description:"This feature requires a broadcaster token with the channelredemptions and channelredemptions scopes.",source:"@site/versioned_docs/version-v2.0.0-rc.1/fluid-queue/channel-points.md",sourceDirName:"fluid-queue",slug:"/fluid-queue/channel-points",permalink:"/docs/fluid-queue/channel-points",draft:!1,unlisted:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-v2.0.0-rc.1/fluid-queue/channel-points.md",tags:[],version:"v2.0.0-rc.1",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Managing command aliases",permalink:"/docs/fluid-queue/aliases"}},l={},d=[{value:"Overview",id:"overview",level:2},{value:"Setup",id:"setup",level:2},{value:"Using the reward",id:"using-the-reward",level:2},{value:"Updating the reward",id:"updating-the-reward",level:2},{value:"Disabling the reward",id:"disabling-the-reward",level:2}];function h(e){const t={admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"channel-point-rewards",children:"Channel Point Rewards"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["This feature requires a broadcaster token with the ",(0,i.jsx)(t.code,{children:"channel:manage:redemptions"})," and ",(0,i.jsx)(t.code,{children:"channel:read:redemptions"})," scopes."]})}),"\n",(0,i.jsx)(t.p,{children:'fluid-queue supports creating, managing, and monitoring a "skip queue" channel point reward, which will allow a user to redeem channel points and automatically skip the queue--no manual intervention required!'}),"\n",(0,i.jsx)(t.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(t.p,{children:["When you enable the skip queue feature, the bot will automatically create a channel point reward for you based on the settings you provide, and then monitor for redemptions of that reward. It will maintain an internal list of users who redeemed the reward, and (when you use ",(0,i.jsx)(t.code,{children:"!level"}),") insert them in between your selection commands according to your settings. There are options to limit redemptions, either through Twitch's built-in limits (a global cooldown, a per-user limit) or through a limit managed by the bot (a global limit on how many times the reward can be redeemed per stream). There is also an option to space skips one or more normal levels apart from each other, which can ensure that even as viewers redeem the reward, your viewers who didn't redeem it still get a fair chance to see their levels played."]}),"\n",(0,i.jsxs)(t.p,{children:["Once configured through ",(0,i.jsx)(t.code,{children:"settings/channel-points.yml"}),", the reward will be fully managed by the bot. When the bot starts, it will check to see if the reward exists (and is owned by the bot) and create it if not. If the reward does exist, it will then check to make sure it's configured correctly, and update the settings on Twitch if it detects any changes."]}),"\n",(0,i.jsx)(t.h2,{id:"setup",children:"Setup"}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"Don't create the reward yourself, or the bot will be unable to start! Configure the reward, and let the bot create it."})}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"Twitch will only let the bot manage rewards owned by its client ID. This means that, if you set up a channel point reward and then change the client ID the bot uses, you'll need to delete the reward on Twitch. This is only likely to be an issue in certain situations, but keep it in mind if you're planning on switching to the new Device Code Grant Flow (coming in a future release)."})}),"\n",(0,i.jsxs)(t.p,{children:["First, create your ",(0,i.jsx)(t.code,{children:"settings/channel-points.yml"})," file. You may be able to copy the existing ",(0,i.jsx)(t.code,{children:"channel-points.example.yml"})," file, if you set up the bot from a packaged release."]}),"\n",(0,i.jsxs)(n,{children:[(0,i.jsx)("summary",{children:"channel-points.example.yml"}),(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-yml",children:'---\nrewards:\n  skip_queue:\n    enabled: true           # Whether the reward should be created and monitored by the bot\n    name: "Pway My Wevel!"  # What the reward should be named\n    prompt: null            # What description (if any) the reward should have\n    cost: 10001             # How many channel points the reward should cost\n\n    global_limit: 2         # A per-stream limit, enforced by the bot, of how many times this can be redeemed.\n                            # Will reset every time the bot is started, or when the bot notices the stream go offline.\n                            # Similarly, when this limit is hit, the bot will pause the reward, and unpause it when the bot is started or notices the stream go offline.\n\n    per_user_limit: 1       # A per-user per-stream limit, enforced by Twitch.\n    global_cooldown: 180    # A global cooldown on the reward, enforced by Twitch. Specified in seconds.\nskip_spacing: 1         # How many levels should be played in between queue-skip levels.\n                        # This does not prevent redemptions. This just ensures that the specified number of non-skip levels are played in between skip levels.\n'})})]}),"\n",(0,i.jsx)(t.p,{children:"Edit this to your liking, then start the bot as normal; the bot will create the reward and automatically start managing it for you."}),"\n",(0,i.jsx)(t.h2,{id:"using-the-reward",children:"Using the reward"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["The reward will only work correctly if you use the ",(0,i.jsx)(t.code,{children:"!level"})," command (or an alias) to select levels."]})}),"\n",(0,i.jsx)(t.p,{children:"The reward can only be redeemed by a viewer who has a level in the queue. When a viewer redeems the reward successfully, the bot should thank them, and you should see the reward appear in your pending rewards on Twitch. Once their level is selected, the bot will automatically mark the redemption as fulfilled. Removing a user, selecting their level directly, or the user leaving the queue themselves, will automatically remove them from the internal skip queue and refund their points. Similarly, refunding their points will also remove them from the internal skip queue."}),"\n",(0,i.jsx)(t.p,{children:'If you have a per-stream limit set, whenever a reward is refunded it will be added back into the "pool" of rewards that can be redeemed; this way, we can avoid Twitch\'s longstanding issue where refunding a reward will not allow someone else to redeem it. Once the per-stream limit is reached, the bot should automatically pause the reward to prevent future redemptions (and will reject any redemptions that manage to come through anyway). If anyone is refunded after the reward is paused, it should automatically unpause as well.'}),"\n",(0,i.jsx)(t.h2,{id:"updating-the-reward",children:"Updating the reward"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to update the reward, update your configuration in ",(0,i.jsx)(t.code,{children:"channel-points.yml"}),". Any changes made within that file will be synced to Twitch the next time you start the bot."]}),"\n",(0,i.jsx)(t.h2,{id:"disabling-the-reward",children:"Disabling the reward"}),"\n",(0,i.jsxs)(t.p,{children:["If you want to disable the reward temporarily, you can change ",(0,i.jsx)(t.code,{children:"enabled: true"})," to ",(0,i.jsx)(t.code,{children:"enabled: false"})," and then delete (or disable) the reward on Twitch. The bot should no longer create or manage the reward until you re-enable it from the config."]}),"\n",(0,i.jsx)(t.p,{children:"Similarly, to permanently disable the reward, you can delete the configuration file and then remove the reward from Twitch."})]})}function c(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(h,{...e})}):h(e)}},1151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var i=n(7294);const r={},a=i.createContext(r);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);