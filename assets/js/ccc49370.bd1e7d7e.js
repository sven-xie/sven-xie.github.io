"use strict";(self.webpackChunksven_blog=self.webpackChunksven_blog||[]).push([[6103],{4401:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(7294),r=a(6010),l=a(5977),o=a(7898),i="backToTopButton_35hR",c="backToTopButtonShow_18ls";function s(){var e=(0,n.useRef)(null);return{smoothScrollTop:function(){var t;e.current=(t=null,function e(){var a=document.documentElement.scrollTop;a>0&&(t=requestAnimationFrame(e),window.scrollTo(0,Math.floor(.85*a)))}(),function(){return t&&cancelAnimationFrame(t)})},cancelScrollToTop:function(){return null==e.current?void 0:e.current()}}}var m=function(){var e,t=(0,l.TH)(),a=s(),m=a.smoothScrollTop,u=a.cancelScrollToTop,d=(0,n.useState)(!1),p=d[0],v=d[1];return(0,o.Z)((function(e,t){var a=e.scrollY;if(t){var n=a<t.scrollY;if(n||u(),a<300)v(!1);else if(n){var r=document.documentElement.scrollHeight;a+window.innerHeight<r&&v(!0)}else v(!1)}}),[t]),n.createElement("button",{className:(0,r.Z)("clean-btn",i,(e={},e[c]=p,e)),type:"button",onClick:function(){return m()}},n.createElement("svg",{viewBox:"0 0 24 24",width:"28"},n.createElement("path",{d:"M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z",fill:"currentColor"})))}},6165:function(e,t,a){a.d(t,{Z:function(){return E}});var n=a(3366),r=a(7294),l=a(6010),o=a(6698),i=a(6742),c="sidebar_2ahu",s="sidebarItemTitle_2hhb",m="sidebarItemList_2xAf",u="sidebarItem_2UVv",d="sidebarItemLink_1RT6",p="sidebarItemLinkActive_12pM",v=a(4973);function f(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,l.Z)(c,"thin-scrollbar"),"aria-label":(0,v.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,l.Z)(s,"margin-bottom--md")},t.title),r.createElement("ul",{className:m},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:u},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d,activeClassName:p},e.title))}))))}var g=a(571),h=["sidebar","toc","children"];var E=function(e){var t=e.sidebar,a=e.toc,i=e.children,c=(0,n.Z)(e,h),s=t&&t.items.length>0;return r.createElement(o.Z,c,r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},s&&r.createElement("aside",{className:"col col--3"},r.createElement(f,{sidebar:t})),r.createElement("main",{className:(0,l.Z)("col",{"col--7":s,"col--9 col--offset-1":!s}),itemScope:!0,itemType:"http://schema.org/Blog"},i),a&&r.createElement("div",{className:"col col--2"},r.createElement(g.Z,{toc:a})))))}},571:function(e,t,a){a.d(t,{r:function(){return p},Z:function(){return v}});var n=a(7294),r=a(6010),l=a(941);function o(e){var t=e.getBoundingClientRect();return t.top===t.bottom?o(e.parentNode):t}function i(e){var t,a=e.anchorTopOffset,n=Array.from(document.querySelectorAll(".anchor.anchor__h2, .anchor.anchor__h3")),r=n.find((function(e){return o(e).top>=a}));return r?function(e){return e.top>0&&e.bottom<window.innerHeight/2}(o(r))?r:null!=(t=n[n.indexOf(r)-1])?t:null:n[n.length-1]}function c(){var e=(0,n.useRef)(0),t=(0,l.LU)().navbar.hideOnScroll;return(0,n.useEffect)((function(){e.current=t?0:document.querySelector(".navbar").clientHeight}),[t]),e}var s=function(e){var t=(0,n.useRef)(void 0),a=c();(0,n.useEffect)((function(){var n=e.linkClassName,r=e.linkActiveClassName;function l(){var e=function(e){return Array.from(document.getElementsByClassName(e))}(n),l=i({anchorTopOffset:a.current}),o=e.find((function(e){return l&&l.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)}));e.forEach((function(e){!function(e,a){if(a){var n;t.current&&t.current!==e&&(null==(n=t.current)||n.classList.remove(r)),e.classList.add(r),t.current=e}else e.classList.remove(r)}(e,e===o)}))}return document.addEventListener("scroll",l),document.addEventListener("resize",l),l(),function(){document.removeEventListener("scroll",l),document.removeEventListener("resize",l)}}),[e,a])},m="tableOfContents_35-E",u="table-of-contents__link",d={linkClassName:u,linkActiveClassName:"table-of-contents__link--active"};function p(e){var t=e.toc,a=e.isChild;return t.length?n.createElement("ul",{className:a?"":"table-of-contents table-of-contents__left-border"},t.map((function(e){return n.createElement("li",{key:e.id},n.createElement("a",{href:"#"+e.id,className:u,dangerouslySetInnerHTML:{__html:e.value}}),n.createElement(p,{isChild:!0,toc:e.children}))}))):null}var v=function(e){var t=e.toc;return s(d),n.createElement("div",{className:(0,r.Z)(m,"thin-scrollbar")},n.createElement(p,{toc:t}))}},59:function(e,t,a){var n=a(7462),r=a(3366),l=a(7294),o=a(2924),i=a(7484),c=a.n(i),s=a(6010),m=a(5976),u=["date","formattedDate","readingTime","className"],d=(0,m.Z)({scriptUrl:["//at.alicdn.com/t/font_2788953_29qq7h55nke.js"]});t.Z=function(e){var t=e.date,a=e.formattedDate,i=void 0===a?"YYYY\xb7MM\xb7DD":a,m=e.readingTime,p=e.className,v=(0,r.Z)(e,u),f=(0,l.useContext)(o.Z).isDarkTheme;return l.createElement("time",(0,n.Z)({},v,{className:(0,s.Z)("flex items-center text-sm",p),dateTime:t,itemProp:"datePublished\uff08\u51fa\u7248\u65e5\u671f\uff09"}),f?l.createElement(d,{type:"icon-dino-shijian-copy"}):l.createElement(d,{type:"icon-dino-shijian"}),l.createElement("span",{className:"ml-2"},c()(t).format(i)),m&&l.createElement("span",{className:"ml-5"},"\u9884\u8ba1\u9605\u8bfb: ",Math.ceil(m)," min"))}},5892:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(6742),l=a(6010),o=a(4654),i=a(3792),c="antdTag_EuAC",s=function(e){var t=e.tags;return t.length?n.createElement("div",{className:"flex items-center my-6"},n.createElement(i.Z,{className:"mr-2",twoToneColor:"#8d949e"}),t.map((function(e){var t=e.label,a=e.permalink;return n.createElement(o.Z,{key:a,className:(0,l.Z)("border-transparent paper-border-5",c)},n.createElement(r.Z,{to:a},t))}))):null}},5251:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z}});var n=a(7294),r=a(1217),l=a(6165),o=a(4973),i=a(6742);var c=function(e){var t=e.nextItem,a=e.prevItem;return n.createElement("nav",{className:"pagination-nav docusaurus-mt-lg","aria-label":(0,o.I)({id:"theme.blog.post.paginator.navAriaLabel",message:"Blog post page navigation",description:"The ARIA label for the blog posts pagination"})},n.createElement("div",{className:"pagination-nav__item"},a&&n.createElement(i.Z,{className:"pagination-nav__link",to:a.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.newerPost",description:"The blog post button label to navigate to the newer/previous post"},"Newer Post")),n.createElement("div",{className:"pagination-nav__label"},"\xab ",a.title))),n.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t&&n.createElement(i.Z,{className:"pagination-nav__link",to:t.permalink},n.createElement("div",{className:"pagination-nav__sublabel"},n.createElement(o.Z,{id:"theme.blog.post.paginator.olderPost",description:"The blog post button label to navigate to the older/next post"},"Older Post")),n.createElement("div",{className:"pagination-nav__label"},t.title," \xbb"))))},s=a(6010),m="image_1yU8";var u=function(e){var t=e.author,a=t.name,r=t.title,l=t.url,o=t.imageURL;return n.createElement("div",{className:"avatar margin-bottom--sm"},o&&n.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:l},n.createElement("img",{className:m,src:o,alt:a})),a&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(i.Z,{href:l,itemProp:"url"},n.createElement("span",{itemProp:"name"},a))),r&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},r)))},d="authorCol_1R69";function p(e){var t=e.authors,a=e.assets;return 0===t.length?n.createElement(n.Fragment,null):n.createElement("div",{className:"row margin-top--md margin-bottom--sm"},t.map((function(e,t){var r;return n.createElement("div",{className:(0,s.Z)("col col--6",d),key:t},n.createElement(u,{author:Object.assign({},e,{imageURL:null!=(r=a.authorsImageUrls[t])?r:e.imageURL})}))})))}var v=a(4401),f=a(5867),g=a(3905),h=a(941),E=a(4996),b=a(7049),_=a(59),N=a(5892),Z=function(e){var t;console.log("BlogPostPage -- Props: ",e);var a=e.content,o=e.sidebar,i=a.frontMatter,s=a.assets,m=a.metadata,u=a.toc,d=m.title,Z=m.description,k=m.nextItem,T=m.prevItem,y=m.date,w=m.readingTime,P=m.tags,C=m.authors,L=i.hide_table_of_contents,I=i.keywords,A=null!=(t=s.image)?t:i.image,x=(0,E.C)().withBaseUrl;return n.createElement(l.Z,{wrapperClassName:h.kM.wrapper.blogPages,pageClassName:h.kM.page.blogPostPage,sidebar:o,toc:!L&&u?u:void 0},n.createElement(r.Z,{title:d,description:Z,keywords:I,image:A},n.createElement("meta",{property:"og:type",content:"article"}),n.createElement("meta",{property:"article:published_time",content:y}),C.some((function(e){return e.url}))&&n.createElement("meta",{property:"article:author",content:C.map((function(e){return e.url})).filter(Boolean).join(",")}),P.length>0&&n.createElement("meta",{property:"article:tag",content:P.map((function(e){return e.label})).join(",")})),n.createElement(v.Z,null),n.createElement("article",{className:"mb-xl",itemProp:"blogPost\uff08\u535a\u5ba2\u5185\u5bb9\uff09",itemScope:!0,itemType:"http://schema.org/BlogPosting"},n.createElement("header",null,n.createElement("h1",{itemProp:"headline\uff08\u5927\u5b57\u6807\u9898\uff09"},d),n.createElement(_.Z,{className:"my-6",date:y,formattedDate:"YYYY-MM-DD",readingTime:w}),n.createElement("div",{className:"mb-4"},n.createElement(p,{authors:C,assets:s}))),A&&n.createElement("meta",{itemProp:"image",content:x(A,{absolute:!0})}),n.createElement("div",{className:"markdown",itemProp:"articleBody\uff08\u6587\u7ae0\u5185\u5bb9\uff09"},n.createElement(g.Zo,{components:f.Z},n.createElement(a,null))),n.createElement("footer",{className:"mt-18"},n.createElement(N.Z,{tags:P}),n.createElement(b.Z,{dashed:!0}),n.createElement(b.Z,{dashed:!0}))),(k||T)&&n.createElement(c,{nextItem:k,prevItem:T}))}}}]);