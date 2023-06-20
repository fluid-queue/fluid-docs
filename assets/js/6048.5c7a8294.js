"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[6048],{9058:(e,t,s)=>{s.d(t,{Z:()=>p});s(7294);var a=s(6010),r=s(7961),l=s(7524),n=s(9960),i=s(5999);const o={sidebar:"sidebar_re4s",sidebarItemTitle:"sidebarItemTitle_pO2u",sidebarItemList:"sidebarItemList_Yudw",sidebarItem:"sidebarItem__DBe",sidebarItemLink:"sidebarItemLink_mo7H",sidebarItemLinkActive:"sidebarItemLinkActive_I1ZP"};var c=s(5893);function m(e){let{sidebar:t}=e;return(0,c.jsx)("aside",{className:"col col--3",children:(0,c.jsxs)("nav",{className:(0,a.Z)(o.sidebar,"thin-scrollbar"),"aria-label":(0,i.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"}),children:[(0,c.jsx)("div",{className:(0,a.Z)(o.sidebarItemTitle,"margin-bottom--md"),children:t.title}),(0,c.jsx)("ul",{className:(0,a.Z)(o.sidebarItemList,"clean-list"),children:t.items.map((e=>(0,c.jsx)("li",{className:o.sidebarItem,children:(0,c.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:o.sidebarItemLink,activeClassName:o.sidebarItemLinkActive,children:e.title})},e.permalink)))})]})})}var d=s(3102);function u(e){let{sidebar:t}=e;return(0,c.jsx)("ul",{className:"menu__list",children:t.items.map((e=>(0,c.jsx)("li",{className:"menu__list-item",children:(0,c.jsx)(n.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active",children:e.title})},e.permalink)))})}function h(e){return(0,c.jsx)(d.Zo,{component:u,props:e})}function g(e){let{sidebar:t}=e;const s=(0,l.i)();return t?.items.length?"mobile"===s?(0,c.jsx)(h,{sidebar:t}):(0,c.jsx)(m,{sidebar:t}):null}function p(e){const{sidebar:t,toc:s,children:l,...n}=e,i=t&&t.items.length>0;return(0,c.jsx)(r.Z,{...n,children:(0,c.jsx)("div",{className:"container margin-vert--lg",children:(0,c.jsxs)("div",{className:"row",children:[(0,c.jsx)(g,{sidebar:t}),(0,c.jsx)("main",{className:(0,a.Z)("col",{"col--7":i,"col--9 col--offset-1":!i}),itemScope:!0,itemType:"http://schema.org/Blog",children:l}),s&&(0,c.jsx)("div",{className:"col col--2",children:s})]})})})}},390:(e,t,s)=>{s.d(t,{Z:()=>y});s(7294);var a=s(6010),r=s(9460),l=s(4996),n=s(5893);function i(e){let{children:t,className:s}=e;const{frontMatter:a,assets:i}=(0,r.C)(),{withBaseUrl:o}=(0,l.C)(),c=i.image??a.image;return(0,n.jsxs)("article",{className:s,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting",children:[c&&(0,n.jsx)("meta",{itemProp:"image",content:o(c,{absolute:!0})}),t]})}var o=s(9960);const c={title:"title_f1Hy"};function m(e){let{className:t}=e;const{metadata:s,isBlogPostPage:l}=(0,r.C)(),{permalink:i,title:m}=s,d=l?"h1":"h2";return(0,n.jsx)(d,{className:(0,a.Z)(c.title,t),itemProp:"headline",children:l?m:(0,n.jsx)(o.Z,{itemProp:"url",to:i,children:m})})}var d=s(5999),u=s(8824);const h={container:"container_mt6G"};function g(e){let{readingTime:t}=e;const s=function(){const{selectMessage:e}=(0,u.c)();return t=>{const s=Math.ceil(t);return e(s,(0,d.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:s}))}}();return(0,n.jsx)(n.Fragment,{children:s(t)})}function p(e){let{date:t,formattedDate:s}=e;return(0,n.jsx)("time",{dateTime:t,itemProp:"datePublished",children:s})}function x(){return(0,n.jsx)(n.Fragment,{children:" \xb7 "})}function b(e){let{className:t}=e;const{metadata:s}=(0,r.C)(),{date:l,formattedDate:i,readingTime:o}=s;return(0,n.jsxs)("div",{className:(0,a.Z)(h.container,"margin-vert--md",t),children:[(0,n.jsx)(p,{date:l,formattedDate:i}),void 0!==o&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{}),(0,n.jsx)(g,{readingTime:o})]})]})}function f(e){return e.href?(0,n.jsx)(o.Z,{...e}):(0,n.jsx)(n.Fragment,{children:e.children})}function j(e){let{author:t,className:s}=e;const{name:r,title:l,url:i,imageURL:o,email:c}=t,m=i||c&&`mailto:${c}`||void 0;return(0,n.jsxs)("div",{className:(0,a.Z)("avatar margin-bottom--sm",s),children:[o&&(0,n.jsx)(f,{href:m,className:"avatar__photo-link",children:(0,n.jsx)("img",{className:"avatar__photo",src:o,alt:r})}),r&&(0,n.jsxs)("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person",children:[(0,n.jsx)("div",{className:"avatar__name",children:(0,n.jsx)(f,{href:m,itemProp:"url",children:(0,n.jsx)("span",{itemProp:"name",children:r})})}),l&&(0,n.jsx)("small",{className:"avatar__subtitle",itemProp:"description",children:l})]})]})}const v={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function P(e){let{className:t}=e;const{metadata:{authors:s},assets:l}=(0,r.C)();if(0===s.length)return null;const i=s.every((e=>{let{name:t}=e;return!t}));return(0,n.jsx)("div",{className:(0,a.Z)("margin-top--md margin-bottom--sm",i?v.imageOnlyAuthorRow:"row",t),children:s.map(((e,t)=>(0,n.jsx)("div",{className:(0,a.Z)(!i&&"col col--6",i?v.imageOnlyAuthorCol:v.authorCol),children:(0,n.jsx)(j,{author:{...e,imageURL:l.authorsImageUrls[t]??e.imageURL}})},t)))})}function N(){return(0,n.jsxs)("header",{children:[(0,n.jsx)(m,{}),(0,n.jsx)(b,{}),(0,n.jsx)(P,{})]})}var _=s(8780),Z=s(1506);function k(e){let{children:t,className:s}=e;const{isBlogPostPage:l}=(0,r.C)();return(0,n.jsx)("div",{id:l?_.blogPostContainerID:void 0,className:(0,a.Z)("markdown",s),itemProp:"articleBody",children:(0,n.jsx)(Z.Z,{children:t})})}var I=s(4881),C=s(1526);function w(){return(0,n.jsx)("b",{children:(0,n.jsx)(d.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read More"})})}function T(e){const{blogPostTitle:t,...s}=e;return(0,n.jsx)(o.Z,{"aria-label":(0,d.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...s,children:(0,n.jsx)(w,{})})}const F={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_mRVl"};function L(){const{metadata:e,isBlogPostPage:t}=(0,r.C)(),{tags:s,title:l,editUrl:i,hasTruncateMarker:o}=e,c=!t&&o,m=s.length>0;return m||c||i?(0,n.jsxs)("footer",{className:(0,a.Z)("row docusaurus-mt-lg",t&&F.blogPostFooterDetailsFull),children:[m&&(0,n.jsx)("div",{className:(0,a.Z)("col",{"col--9":c}),children:(0,n.jsx)(C.Z,{tags:s})}),t&&i&&(0,n.jsx)("div",{className:"col margin-top--sm",children:(0,n.jsx)(I.Z,{editUrl:i})}),c&&(0,n.jsx)("div",{className:(0,a.Z)("col text--right",{"col--3":m}),children:(0,n.jsx)(T,{blogPostTitle:l,to:e.permalink})})]}):null}function y(e){let{children:t,className:s}=e;const l=function(){const{isBlogPostPage:e}=(0,r.C)();return e?void 0:"margin-bottom--xl"}();return(0,n.jsxs)(i,{className:(0,a.Z)(l,s),children:[(0,n.jsx)(N,{}),(0,n.jsx)(k,{children:t}),(0,n.jsx)(L,{})]})}},9460:(e,t,s)=>{s.d(t,{C:()=>o,n:()=>i});var a=s(7294),r=s(902),l=s(5893);const n=a.createContext(null);function i(e){let{children:t,content:s,isBlogPostPage:r=!1}=e;const i=function(e){let{content:t,isBlogPostPage:s}=e;return(0,a.useMemo)((()=>({metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:s})),[t,s])}({content:s,isBlogPostPage:r});return(0,l.jsx)(n.Provider,{value:i,children:t})}function o(){const e=(0,a.useContext)(n);if(null===e)throw new r.i6("BlogPostProvider");return e}},8824:(e,t,s)=>{s.d(t,{c:()=>c});var a=s(7294),r=s(2263);const l=["zero","one","two","few","many","other"];function n(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:n(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,r.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:n(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=o();return{selectMessage:(t,s)=>function(e,t,s){const a=e.split("|");if(1===a.length)return a[0];a.length>s.pluralForms.length&&console.error(`For locale=${s.locale}, a maximum of ${s.pluralForms.length} plural forms are expected (${s.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const r=s.select(t),l=s.pluralForms.indexOf(r);return a[Math.min(l,a.length-1)]}(s,t,e)}}}}]);