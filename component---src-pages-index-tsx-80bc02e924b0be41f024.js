"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[691],{7501:function(e,t,a){var l=a(7294),n=a(1597);t.Z=function(e){var t=e.title,a=e.subtitle,r=e.slug,i=e.date,o=e.lastUpdated,s=e.topics,c=e.excerpt,m=e.showExcerpt;return i=i.slice(0,10),o=o.slice(0,10),l.createElement("div",null,l.createElement("h3",null,l.createElement(n.Link,{to:r},t||r)),l.createElement("small",null,i," ○ last updated: ",o," ○ topics: ",s.map((function(e,t,a){return l.createElement(n.Link,{to:"/topics/"+e+"/",key:e},t<a.length-1?e+", ":e)}))),m?l.createElement("p",{dangerouslySetInnerHTML:{__html:c}}):l.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))}},7200:function(e,t,a){a.r(t);var l=a(7294),n=a(1597),r=a(5283),i=a(8601),o=a(7501);t.default=function(e){var t=e.data,a=t.site.siteMetadata.title,s=t.site.siteMetadata.lastUpdated,c=t.allMarkdownRemark.edges;return l.createElement(r.Z,{title:a},l.createElement(i.Z,{title:"Home",keywords:["blog","janice","lee","pomona"]}),l.createElement("header",null,l.createElement("h1",null,"Welcome to my website. Why don't you stay a while?"),l.createElement("p",{className:"subtitle"},"Website homepage; a short description; recent posts"),l.createElement("p",{className:"pageinfo"},"2021-09-18 ○ last updated: ",s)),l.createElement("div",{className:"page-content"},l.createElement("h2",null,"Description"),l.createElement("hr",null),l.createElement("p",null,"This is my personal website. I created it primarily for experiential use as a centralized knowledge/content base and as an outlet for my increasingly erratic thoughts and curiosities. I hope that it will be a comprehensible introduction into some of the machinations of my mind, and I hope that you will enjoy your stay here! For information about me, see the ",l.createElement(n.Link,{to:"/about-me"},"About me page"),"; for information about the purpose and design of this site, see the ",l.createElement(n.Link,{to:"/about-this-site"},"About this site page"),"; to contact me, email me at ",l.createElement("a",{href:"mailto: janicel375@gmail.com"},"janicel375@gmail.com"),"."),l.createElement("h2",null,"Recently Updated Posts"),l.createElement("hr",null),c.map((function(e){var t=e.node;return l.createElement(o.Z,{key:t.fields.slug,title:t.frontmatter.title,subtitle:t.frontmatter.subtitle,slug:t.fields.slug,date:t.frontmatter.date,lastUpdated:t.frontmatter.lastupdated,topics:t.frontmatter.topics,excerpt:t.excerpt,showExcerpt:!1})}))),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null),l.createElement("br",null))}}}]);
//# sourceMappingURL=component---src-pages-index-tsx-80bc02e924b0be41f024.js.map