"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[5591],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>h});var i=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=i.createContext({}),p=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=p(e.components);return i.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},c=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),m=p(n),c=a,h=m["".concat(s,".").concat(c)]||m[c]||u[c]||o;return n?i.createElement(h,l(l({ref:t},d),{},{components:n})):i.createElement(h,l({ref:t},d))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=c;var r={};for(var s in t)hasOwnProperty.call(t,s)&&(r[s]=t[s]);r.originalType=e,r[m]="string"==typeof e?e:a,l[1]=r;for(var p=2;p<o;p++)l[p]=n[p];return i.createElement.apply(null,l)}return i.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6955:(e,t,n)=>{n.d(t,{ZP:()=>r});var i=n(7462),a=(n(7294),n(3905));const o={toc:[{value:"settings.yml",id:"settingsyml",level:2}]},l="wrapper";function r(e){let{components:t,...n}=e;return(0,a.kt)(l,(0,i.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"settingsyml"},"settings.yml"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"settings.yml")," is where most of the customization of the bot occurs. There's a lot of customization to do, and most of the options are safe to leave as the defaults, but there are a few to make sure you update, marked with ",(0,a.kt)("strong",{parentName:"p"},"[!]")," to make it easier to notice! Open your ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," in a text editor and customize it as necessary, making sure to update all the marked items."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[!]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"channel")," is the channel that the bot will run in. This should be your Twitch account username, only containing underscores and lowercase alphanumeric characters.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[!]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," is the client ID you received from Twitch when you registered your application in the last section. Again, don't include the braces.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[!]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"clientSecret")," is the client secret you received from Twitch in the last section. No braces!")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"start_open")," is the toggle for whether or not the queue will start open. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"enable_absolute_position")," is the toggle for whether or not absolute position (offline position) is displayed along relative position (online position). The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"custom_codes_enabled")," is the toggle for whether or not custom codes are allowed to be added to the queue. When enabled, users are able to add an alias to the queue as opposed to the real ID. An example of this is ",(0,a.kt)("inlineCode",{parentName:"p"},"!add Kamek"),". Before usage, the broadcaster must add custom codes to be used. This is detailed in the commands section."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you enable custom codes, make sure to leave the custom code resolver enabled below!"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"romhacks_enabled")," is a toggle for whether or not romhacks are allowed to be added to the queue. When enabled, users may type ",(0,a.kt)("inlineCode",{parentName:"p"},"!add ROMhack")," to add a ROMhack to the queue. This does not send the patch, but rather gives the user a convienent way to enter the queue without a real level code. "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"This requires the custom level resolver to be enabled below."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"uncleared_enabled")," is a similar toggle, for uncleared levels rather than than romhacks."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Again, you'll need to have the custom level resolver enabled for this to work."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"max_size")," is the maximum amount of levels allowed in the queue at once. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"100"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"level_timeout")," is the amount of time in minutes a level can be played before the bot will inform you that time is up. The default value of ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," means that the timer is deactivated.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"level_selection")," is an array that defines the order that levels will be selected in upon using ",(0,a.kt)("inlineCode",{parentName:"p"},"!level"),". Once the order is completed, it will loop.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Possible values are: "),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"next"'),": select the next level in the queue with no preferences"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"subnext"'),": select the next subscriber in the queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"modnext"'),": select the next Twitch mod in the queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"random"'),": select a random level with no preferences"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"weightedrandom"'),": select a random level with no preferences, but weighted based on how long the viewer has been waiting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"weightednext"'),": select the viewer who has been waiting longest in the queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"subrandom"'),": select a random subscriber in the queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"modrandom"'),": select a random Twitch mod in the queue"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"weightedsubrandom"'),": select a random subscriber, weighted based on how long the subscriber has been waiting"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"weightedsubnext"'),": select the subscriber who has been waiting longest in the queue"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"message_cooldown")," is the amount of time in seconds that a user must wait before !list will display the levels in the queue after a previous use. ")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dataIdCourseThreshold")," is the highest allowed data ID for course IDs. This is used to stop levels that do not exist from entering the queue, however it is very difficult to know and/or dynamically change this amount accordingly. As such, the default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", which ignores the restriction. This setting only applies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"smm2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"smm2-lenient")," resolvers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"dataIdMakerThreshold")," is the highest allowed data ID for maker IDs. This is used to stop maker IDs that do not exist from entering the queue, however it is very difficult to know and/or dynamically change this amount accordingly. As such, the default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"null"),", which ignores the restriction. This setting only applies to the ",(0,a.kt)("inlineCode",{parentName:"p"},"smm2")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"smm2-lenient")," resolvers.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"prettySaveFiles")," if set to true the files in the ",(0,a.kt)("inlineCode",{parentName:"p"},"./data/")," directory are going to be formatted with spaces and new lines. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," to reduce file size.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"subscriberWeightMultiplier")," is the number added as a wait time for subscribers. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),". Setting this to ",(0,a.kt)("inlineCode",{parentName:"p"},"1.2")," for example will give subscribers an advantage for weighted random, because they would get 6 minutes of wait time per 5 minutes of waiting. This can be set to anything greater than or equal to ",(0,a.kt)("inlineCode",{parentName:"p"},"1.0"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"list")," is the order of the ",(0,a.kt)("inlineCode",{parentName:"p"},"!list"),"/",(0,a.kt)("inlineCode",{parentName:"p"},"!queue")," command. The following values are possible:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"position"')," - the list will be sorted by time added. (",(0,a.kt)("inlineCode",{parentName:"li"},"!next"),")"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"weight"')," - the list will be sorted by weighted chance (watch time, ",(0,a.kt)("inlineCode",{parentName:"li"},"!weightednext"),")."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"both"')," - the list will be sent twice, once sorted by time added and once sorted by weighted chance (watch time)."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"none"')," - the ",(0,a.kt)("inlineCode",{parentName:"li"},"!list"),"/",(0,a.kt)("inlineCode",{parentName:"li"},"!queue")," commands will be disabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," - the setting is automatically determined by what is configured in ",(0,a.kt)("inlineCode",{parentName:"li"},"level_selection"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"position")," is which position the ",(0,a.kt)("inlineCode",{parentName:"p"},"!position")," command shows. The following values are possible:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"position"')," - the position of ",(0,a.kt)("inlineCode",{parentName:"li"},"!next"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"weight"')," - the position of ",(0,a.kt)("inlineCode",{parentName:"li"},"!weightednext"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"both"')," - both the position of ",(0,a.kt)("inlineCode",{parentName:"li"},"!next")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"!weightednext"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'"none"')," - the ",(0,a.kt)("inlineCode",{parentName:"li"},"!position")," command will be disabled."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"null")," - the setting is automatically determined by what is configured in ",(0,a.kt)("inlineCode",{parentName:"li"},"level_selection"),"."))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"showMakerCode")," if set to true it will display ",(0,a.kt)("inlineCode",{parentName:"p"},"(maker code)")," next to level codes in chat if the code is a maker code. The default value is ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),".")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"[!]")," ",(0,a.kt)("inlineCode",{parentName:"p"},"resolvers")," is the list of code resolvers to use to determine if a code is valid and allow it to be added to the queue. Valid resolvers are:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"smm2")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"smm2-lenient")," for Super Mario Maker 2 codes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ocw")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"ocw-lenient")," for ",(0,a.kt)("a",{parentName:"li",href:"https://opencourse.world"},"Open Course World")," codes"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customcode")," for custom codes, if enabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"customlevel")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"customlevel-name")," for custom levels, if enabled"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"smm1")," for Super Mario Maker 1 codes"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"extensionOptions")," provides options for extensions:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"ocw"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"removeDashes")," if set to true will remove dashes from OCW level codes for easier copying and pasting."))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("inlineCode",{parentName:"p"},"clear")," allows you to set a default argument for the ",(0,a.kt)("inlineCode",{parentName:"p"},"!clear")," command."),(0,a.kt)("p",{parentName:"li"},"You can enable whichever of these you'd like in whichever order you'd like, however we recommend keeping them in the order presented in the sample file, and making sure that both resovlers are enabled for a given level type. This ensures the most accurate and responsive resolution of codes, while still giving viewers some leeway on their code format."))))}r.isMDXComponent=!0},4565:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>l,metadata:()=>s,toc:()=>d});var i=n(7462),a=(n(7294),n(3905)),o=n(6955);const l={sidebar_position:3},r="Configuring the Bot",s={unversionedId:"setup/docker/configuring",id:"version-2.0.0-beta.3/setup/docker/configuring",title:"Configuring the Bot",description:"Now it's time to configure the bot itself, by setting up your settings.json. First, download the sample settings file from git and save it as settings.json in your settings folder (next to your tokens.json).",source:"@site/versioned_docs/version-2.0.0-beta.3/setup/docker/configuring.mdx",sourceDirName:"setup/docker",slug:"/setup/docker/configuring",permalink:"/docs/setup/docker/configuring",draft:!1,editUrl:"https://github.com/fluid-queue/fluid-docs/tree/main/packages/create-docusaurus/templates/shared/versioned_docs/version-2.0.0-beta.3/setup/docker/configuring.mdx",tags:[],version:"2.0.0-beta.3",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Token setup",permalink:"/docs/setup/docker/token_setup"},next:{title:"Running the bot",permalink:"/docs/setup/docker/running"}},p={},d=[],m={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,i.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"configuring-the-bot"},"Configuring the Bot"),(0,a.kt)("p",null,"Now it's time to configure the bot itself, by setting up your ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json"),". First, download the ",(0,a.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/fluid-queue/fluid-queue/main/settings/settings.example.json"},"sample settings file")," from git and save it as ",(0,a.kt)("inlineCode",{parentName:"p"},"settings.json")," in your settings folder (next to your ",(0,a.kt)("inlineCode",{parentName:"p"},"tokens.json"),")."),(0,a.kt)(o.ZP,{mdxType:"Configuring"}))}c.isMDXComponent=!0}}]);