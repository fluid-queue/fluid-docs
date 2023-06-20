"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[8610],{9703:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var s=a(5999),n=a(2244),l=a(5893);function i(e){const{metadata:t}=e,{previousPage:a,nextPage:i}=t;return(0,l.jsxs)("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,l.jsx)(n.Z,{permalink:a,title:(0,l.jsx)(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer Entries"})}),i&&(0,l.jsx)(n.Z,{permalink:i,title:(0,l.jsx)(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older Entries"}),isNext:!0})]})}},9985:(e,t,a)=>{a.d(t,{Z:()=>i});a(7294);var s=a(9460),n=a(390),l=a(5893);function i(e){let{items:t,component:a=n.Z}=e;return(0,l.jsx)(l.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,l.jsx)(s.n,{content:t,children:(0,l.jsx)(a,{children:(0,l.jsx)(t,{})})},t.metadata.permalink)}))})}},1714:(e,t,a)=>{a.r(t),a.d(t,{default:()=>b});a(7294);var s=a(6010),n=a(5999),l=a(8824),i=a(1944),r=a(5281),o=a(9960),g=a(9058),c=a(9703),d=a(197),p=a(9985),u=a(5893);function h(e){const t=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,n.I)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}();return(0,n.I)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function m(e){let{tag:t}=e;const a=h(t);return(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)(i.d,{title:a}),(0,u.jsx)(d.Z,{tag:"blog_tags_posts"})]})}function x(e){let{tag:t,items:a,sidebar:s,listMetadata:l}=e;const i=h(t);return(0,u.jsxs)(g.Z,{sidebar:s,children:[(0,u.jsxs)("header",{className:"margin-bottom--xl",children:[(0,u.jsx)("h1",{children:i}),(0,u.jsx)(o.Z,{href:t.allTagsPath,children:(0,u.jsx)(n.Z,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,u.jsx)(p.Z,{items:a}),(0,u.jsx)(c.Z,{metadata:l})]})}function b(e){return(0,u.jsxs)(i.FG,{className:(0,s.Z)(r.k.wrapper.blogPages,r.k.page.blogTagPostListPage),children:[(0,u.jsx)(m,{...e}),(0,u.jsx)(x,{...e})]})}}}]);