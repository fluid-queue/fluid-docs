"use strict";(self.webpackChunkfluid_docs=self.webpackChunkfluid_docs||[]).push([[3181],{2503:(e,i,n)=>{n.d(i,{Z:()=>c});n(7294);var s=n(6010),r=n(5999),t=n(6668),d=n(9960);const a={anchorWithStickyNavbar:"anchorWithStickyNavbar_LWe7",anchorWithHideOnScrollNavbar:"anchorWithHideOnScrollNavbar_WYt5"};var l=n(5893);function c(e){let{as:i,id:n,...c}=e;const{navbar:{hideOnScroll:o}}=(0,t.L)();if("h1"===i||!n)return(0,l.jsx)(i,{...c,id:void 0});const h=(0,r.I)({id:"theme.common.headingLinkTitle",message:"Direct link to {heading}",description:"Title for link to heading"},{heading:"string"==typeof c.children?c.children:n});return(0,l.jsxs)(i,{...c,className:(0,s.Z)("anchor",o?a.anchorWithHideOnScrollNavbar:a.anchorWithStickyNavbar,c.className),id:n,children:[c.children,(0,l.jsx)(d.Z,{className:"hash-link",to:`#${n}`,"aria-label":h,title:h,children:"\u200b"})]})}},6182:(e,i,n)=>{n.r(i),n.d(i,{default:()=>u});var s=n(2263),r=n(9960),t=n(5999),d=n(143),a=n(7961),l=n(2503);var c=n(5893);const o=void 0,h=Object.entries([]);function x(){return(0,c.jsx)(t.Z,{id:"versionsPage.versionEntry.link",children:"Documentation"})}function j(){return(0,c.jsx)(t.Z,{id:"versionsPage.versionEntry.releaseNotes",children:"Release Notes"})}function u(){const{siteConfig:{organizationName:e}}=(0,s.Z)(),i=(0,d.gB)(o),n=(0,d.yW)(o),u=i.find((e=>"current"===e.name)),v=i.filter((e=>e!==n&&"current"!==e.name)),m=`https://github.com/${e}/fluid-queue`;return(0,c.jsx)(a.Z,{title:"Versions",description:"fluid-queue Versions page listing all documented site versions",children:(0,c.jsxs)("main",{className:"container margin-vert--lg",children:[(0,c.jsx)(l.Z,{as:"h1",children:(0,c.jsx)(t.Z,{id:"versionsPage.title",children:"Docusaurus documentation versions"})}),(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"next",children:(0,c.jsx)(t.Z,{id:"versionsPage.current.title",children:"Current version (Stable)"})}),(0,c.jsx)("p",{children:(0,c.jsx)(t.Z,{id:"versionsPage.current.description",children:"Here you can find the documentation for current released version."})}),(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:n.label}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{to:n.path,children:(0,c.jsx)(x,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{to:`${m}/releases/tag/${n.name}`,children:(0,c.jsx)(j,{})})})]})})})]}),u!==n&&(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"latest",children:(0,c.jsx)(t.Z,{id:"versionsPage.next.title",children:"Next version (Unreleased)"})}),(0,c.jsx)("p",{children:(0,c.jsx)(t.Z,{id:"versionsPage.next.description",children:"Here you can find the documentation for work-in-process unreleased version."})}),(0,c.jsx)("table",{children:(0,c.jsx)("tbody",{children:(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:u.label}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{to:u.path,children:(0,c.jsx)(x,{})})})]})})})]}),(v.length>0||h.length>0)&&(0,c.jsxs)("div",{className:"margin-bottom--lg",children:[(0,c.jsx)(l.Z,{as:"h3",id:"archive",children:(0,c.jsx)(t.Z,{id:"versionsPage.archived.title",children:"Past versions (Not maintained anymore)"})}),(0,c.jsx)("p",{children:(0,c.jsx)(t.Z,{id:"versionsPage.archived.description",children:"Here you can find documentation for previous versions of Docusaurus."})}),(0,c.jsx)("table",{children:(0,c.jsxs)("tbody",{children:[v.map((e=>(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:e.label}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{to:e.path,children:(0,c.jsx)(x,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{href:`${m}/releases/tag/v${e.name}`,children:(0,c.jsx)(j,{})})})]},e.name))),h.map((e=>{let[i,n]=e;return(0,c.jsxs)("tr",{children:[(0,c.jsx)("th",{children:i}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{to:n,children:(0,c.jsx)(x,{})})}),(0,c.jsx)("td",{children:(0,c.jsx)(r.Z,{href:`${m}/releases/tag/v${i}`,children:(0,c.jsx)(j,{})})})]},i)}))]})})]})]})})}}}]);