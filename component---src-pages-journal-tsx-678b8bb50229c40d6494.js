"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[173],{3230:function(e,t,l){var a=l(7294),n=l(1597);t.Z=function(e){var t=e.title,l=e.subtitle,r=e.slug,c=e.date,s=e.lastUpdated,u=e.topics,i=e.excerpt,m=e.showExcerpt;return c=c.slice(0,10),s=s.slice(0,10),a.createElement("div",null,a.createElement("h3",null,a.createElement(n.Link,{to:r},t||r)),a.createElement("small",null,c," ○ last updated: ",s," ○ topics: ",u.map((function(e,t,l){return a.createElement(n.Link,{to:"/topics/"+e+"/",key:e},t<l.length-1?e+", ":e)}))),m?a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}):a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}},4703:function(e,t,l){l.r(t);var a=l(7294),n=l(1597),r=l(2515),c=l(8721),s=l(3230);t.default=function(e){var t=e.data,l=t.site.siteMetadata.title,u=t.site.siteMetadata.lastUpdated,i=t.allMarkdownRemark.edges,m=t.allDirectory.edges;return a.createElement(r.Z,{title:l},a.createElement(c.Z,{title:"Journal.",keywords:["journal"]}),a.createElement("header",null,a.createElement("h1",null,"Journal."),a.createElement("p",{className:"subtitle"},"Collection of all journal entries; entries by year; recent entries"),a.createElement("p",{className:"pageinfo"},"2021-09-26 ○ last updated: ",u)),a.createElement("article",null,a.createElement("div",{className:"page-content"},a.createElement("h2",null,"Entries by Year"),a.createElement("hr",null),m.map((function(e){var t=e.node;return a.createElement("div",{key:t.name},a.createElement("h3",null,a.createElement(n.Link,{to:"/journal/"+t.name+"/"},t.name)))})),a.createElement("br",null),a.createElement("h2",null,"Recent Entries"),a.createElement("hr",null),i.map((function(e){var t=e.node;return a.createElement(s.Z,{key:t.fields.slug,title:t.frontmatter.title,subtitle:t.frontmatter.subtitle,slug:t.fields.slug,date:t.frontmatter.date,lastUpdated:t.frontmatter.lastupdated,topics:t.frontmatter.topics,excerpt:t.excerpt,showExcerpt:!1})})))))}}}]);
//# sourceMappingURL=component---src-pages-journal-tsx-678b8bb50229c40d6494.js.map