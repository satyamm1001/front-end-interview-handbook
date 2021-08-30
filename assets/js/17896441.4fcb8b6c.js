"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7918],{205:function(e,t,a){a.r(t),a.d(t,{default:function(){return $}});var n=a(7294),r=a(6010),l=a(907),i=a(3783),s=a(4973),o=a(3082);var c=function(e){var t=e.metadata;return n.createElement(n.Fragment,null,n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,s.I)({id:"theme.docs.paginator.navAriaLabel",message:"Docs pages navigation",description:"The ARIA label for the docs pagination"})},n.createElement("div",{className:"pagination-nav__item"},t.previous&&n.createElement("a",{className:"pagination-nav__link",href:t.previous.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.previous",description:"The label used to navigate to the previous doc"},"Previous")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&n.createElement("a",{className:"pagination-nav__link",href:t.next.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(s.Z,{id:"theme.docs.paginator.next",description:"The label used to navigate to the next doc"},"Next")),n.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb")))),n.createElement("div",{className:"margin-top--md"},n.createElement(o.default,null)))},d=a(2263),m=a(6742),u=a(1773);var v={unreleased:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unreleasedVersionLabel",description:"The label used to tell the user that he's browsing an unreleased doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is unreleased documentation for {siteTitle} {versionLabel} version.")},unmaintained:function(e){var t=e.siteTitle,a=e.versionMetadata;return n.createElement(s.Z,{id:"theme.docs.versions.unmaintainedVersionLabel",description:"The label used to tell the user that he's browsing an unmaintained doc version",values:{siteTitle:t,versionLabel:n.createElement("b",null,a.label)}},"This is documentation for {siteTitle} {versionLabel}, which is no longer actively maintained.")}};function h(e){var t=v[e.versionMetadata.banner];return n.createElement(t,e)}function p(e){var t=e.versionLabel,a=e.to,r=e.onClick;return n.createElement(s.Z,{id:"theme.docs.versions.latestVersionSuggestionLabel",description:"The label used to tell the user to check the latest version",values:{versionLabel:t,latestVersionLink:n.createElement("b",null,n.createElement(m.Z,{to:a,onClick:r},n.createElement(s.Z,{id:"theme.docs.versions.latestVersionLinkLabel",description:"The label used for the latest version suggestion link label"},"latest version")))}},"For up-to-date documentation, see the {latestVersionLink} ({versionLabel}).")}function f(e){var t,a=e.versionMetadata,r=(0,d.Z)().siteConfig.title,i=(0,l.gA)({failfast:!0}).pluginId,s=(0,u.J)(i).savePreferredVersionName,o=(0,l.Jo)(i),c=o.latestDocSuggestion,m=o.latestVersionSuggestion,v=null!=c?c:(t=m).docs.find((function(e){return e.id===t.mainDocId}));return n.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},n.createElement("div",null,n.createElement(h,{siteTitle:r,versionMetadata:a})),n.createElement("div",{className:"margin-top--md"},n.createElement(p,{versionLabel:m.label,to:v.path,onClick:function(){return s(m.name)}})))}var E=function(e){var t=e.versionMetadata;return"none"===t.banner?n.createElement(n.Fragment,null):n.createElement(f,{versionMetadata:t})},g=a(1217);function b(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt;return n.createElement(s.Z,{id:"theme.lastUpdated.atDate",description:"The words used to describe on which date a page has been last updated",values:{date:n.createElement("b",null,n.createElement("time",{dateTime:new Date(1e3*t).toISOString()},a))}}," on {date}")}function _(e){var t=e.lastUpdatedBy;return n.createElement(s.Z,{id:"theme.lastUpdated.byUser",description:"The words used to describe by who the page has been last updated",values:{user:n.createElement("b",null,t)}}," by {user}")}function N(e){var t=e.lastUpdatedAt,a=e.formattedLastUpdatedAt,r=e.lastUpdatedBy;return n.createElement(n.Fragment,null,n.createElement(s.Z,{id:"theme.lastUpdated.lastUpdatedAtBy",description:"The sentence used to display when a page has been last updated, and by who",values:{atDate:t&&a?n.createElement(b,{lastUpdatedAt:t,formattedLastUpdatedAt:a}):"",byUser:r?n.createElement(_,{lastUpdatedBy:r}):""}},"Last updated{atDate}{byUser}"),!1)}var k=a(7462),L=a(3366),U="iconEdit_2_ui",T=function(e){var t=e.className,a=(0,L.Z)(e,["className"]);return n.createElement("svg",(0,k.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,r.Z)(U,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function Z(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},n.createElement(T,null),n.createElement(s.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}var y=a(7211),C="tags_2ga9",w="tag_11ep";function A(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(s.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,r.Z)(C,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:w},n.createElement(y.Z,{name:t,permalink:a}))}))))}var O="lastUpdated_13-_";function B(e){return n.createElement("div",{className:"row margin-bottom--sm"},n.createElement("div",{className:"col"},n.createElement(A,e)))}function S(e){var t=e.editUrl,a=e.lastUpdatedAt,l=e.lastUpdatedBy,i=e.formattedLastUpdatedAt;return n.createElement("div",{className:"row"},n.createElement("div",{className:"col"},t&&n.createElement(Z,{editUrl:t})),n.createElement("div",{className:(0,r.Z)("col",O)},(a||l)&&n.createElement(N,{lastUpdatedAt:a,formattedLastUpdatedAt:i,lastUpdatedBy:l})))}function M(e){var t=e.content.metadata,a=t.editUrl,r=t.lastUpdatedAt,l=t.formattedLastUpdatedAt,i=t.lastUpdatedBy,s=t.tags,o=s.length>0,c=!!(a||r||i);return o||c?n.createElement("footer",{className:"docusaurus-mt-lg"},o&&n.createElement(B,{tags:s}),c&&n.createElement(S,{editUrl:a,lastUpdatedAt:r,lastUpdatedBy:i,formattedLastUpdatedAt:l})):n.createElement(n.Fragment,null)}function x(e){var t=e.getBoundingClientRect();return t.top===t.bottom?x(e.parentNode):t}function I(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return x(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(x(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function F(){var e=(0,n.useRef)(0),t=(0,u.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var D=function(e){var t=(0,n.useRef)(void 0),a=F();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=I({anchorTopOffset:a.current}),i=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===i)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},V="tableOfContents_35-E",R="table-of-contents__link",z={linkClassName:R,linkActiveClassName:"table-of-contents__link--active"};function H(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:R,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(H,{isChild:!0,toc:e.children}))}))):null}var q=function(e){var t=e.toc;return D(z),n.createElement("div",{className:(0,r.Z)(V,"thin-scrollbar")},n.createElement(H,{toc:t}))},P="tocCollapsible_1PrD",W="tocCollapsibleButton_2O1e",J="tocCollapsibleContent_2Ydz",Y="tocCollapsibleExpanded_3GYr";function j(e){var t,a=e.toc,l=e.className,i=(0,u.uR)({initialState:!0}),o=i.collapsed,c=i.toggleCollapsed;return n.createElement("div",{className:(0,r.Z)(P,(t={},t[Y]=!o,t),l)},n.createElement("button",{type:"button",className:(0,r.Z)("clean-btn",W),onClick:c},n.createElement(s.Z,{id:"theme.TOCCollapsible.toggleButtonLabel",description:"The label used by the button on the collapsible TOC component"},"On this page")),n.createElement(u.zF,{lazy:!0,className:J,collapsed:o},n.createElement(H,{toc:a})))}var G=a(6159),K="docItemContainer_33ec",Q="docItemCol_3FnS",X="tocMobile_3Hoh";function $(e){var t,a=e.content,s=e.versionMetadata,o=a.metadata,d=a.frontMatter,m=d.image,u=d.keywords,v=d.hide_title,h=d.hide_table_of_contents,p=o.description,f=o.title,b=(0,l.gA)({failfast:!0}).pluginId,_=(0,l.gB)(b).length>1,N=!v&&void 0===a.contentTitle,k=(0,i.Z)(),L=!h&&a.toc&&a.toc.length>0,U=L&&("desktop"===k||"ssr"===k);return n.createElement(n.Fragment,null,n.createElement(g.Z,{title:f,description:p,keywords:u,image:m}),n.createElement("div",{className:"row"},n.createElement("div",{className:(0,r.Z)("col",(t={},t[Q]=!h,t))},n.createElement(E,{versionMetadata:s}),n.createElement("div",{className:K},n.createElement("article",null,_&&n.createElement("span",{className:"badge badge--secondary"},"Version: ",s.label),L&&n.createElement(j,{toc:a.toc,className:X}),n.createElement("div",{className:"markdown"},N&&n.createElement(G.N,null,f),n.createElement(a,null)),n.createElement(M,e)),n.createElement(c,{metadata:o}))),U&&n.createElement("div",{className:"col col--3"},n.createElement(q,{toc:a.toc}))))}},6159:function(e,t,a){a.d(t,{N:function(){return m},Z:function(){return u}});var n=a(3366),r=a(7462),l=a(7294),i=a(6010),s=a(4973),o=a(1773),c="anchorWithStickyNavbar_31ik",d="anchorWithHideOnScrollNavbar_3R7-",m=function(e){var t=Object.assign({},e);return l.createElement("header",null,l.createElement("h1",(0,r.Z)({},t,{id:void 0}),t.children))},u=function(e){return"h1"===e?m:(t=e,function(e){var a,r=e.id,m=(0,n.Z)(e,["id"]),u=(0,o.LU)().navbar.hideOnScroll;return r?l.createElement(t,m,l.createElement("a",{"aria-hidden":"true",tabIndex:-1,className:(0,i.Z)("anchor","anchor__"+t,(a={},a[d]=u,a[c]=!u,a)),id:r}),m.children,l.createElement("a",{className:"hash-link",href:"#"+r,title:(0,s.I)({id:"theme.common.headingLinkTitle",message:"Direct link to heading",description:"Title for link to heading"})},"#")):l.createElement(t,m)});var t}},7211:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(7294),r=a(6010),l=a(6742),i="tag_1Okp",s="tagRegular_3MiF",o="tagWithCount_1HU1";var c=function(e){var t,a=e.permalink,c=e.name,d=e.count;return n.createElement(l.Z,{href:a,className:(0,r.Z)(i,(t={},t[s]=!d,t[o]=d,t))},c,d&&n.createElement("span",null,d))}}}]);