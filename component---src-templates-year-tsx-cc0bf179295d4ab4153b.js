"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[354],{3230:function(e,t,r){var n=r(7294),a=r(1597);t.Z=function(e){var t=e.title,r=e.subtitle,l=e.slug,c=e.date,u=e.lastUpdated,s=e.topics,i=e.excerpt,o=e.showExcerpt;return n.createElement("div",null,n.createElement("h3",null,n.createElement(a.Link,{to:l},t||l)),n.createElement("small",null,c," ○ last updated: ",u," ○ topics: ",s.map((function(e,t,r){return n.createElement(a.Link,{to:"/topics/"+e+"/",key:e},t<r.length-1?e+", ":e)}))),o?n.createElement("p",{dangerouslySetInnerHTML:{__html:i}}):n.createElement("p",{dangerouslySetInnerHTML:{__html:r}}))}},8366:function(e,t,r){r.r(t);var n=r(7294),a=r(1597),l=r(189),c=r(8721),u=r(6185),s=r(3230);t.default=function(e){var t=e.data,r=e.pageContext.year,i=t.site.siteMetadata.title,o=t.site.siteMetadata.lastUpdated,m=t.numEntries.group,d=t.allDirectory.edges,p=t.entries.edges;return n.createElement(l.Z,{title:i},n.createElement(c.Z,{title:"Year:"+r+".",keywords:["journal",r]}),n.createElement("header",null,n.createElement("h1",null,"Year:",r,"."),n.createElement("p",{className:"subtitle"},"Collection of journal entries for ",r,"; entries by month"),n.createElement("p",{className:"pageinfo"},"2021-09-18 ○ last updated: ",o)),n.createElement("article",null,n.createElement("div",{className:"page-content"},n.createElement("h2",null,"Entries by Month"),n.createElement("hr",null),d.map((function(e){var t=e.node,l=(0,u.Z)(t.name),c=m.filter((function(e){return e.fieldValue.slice(-2)===t.name}))[0];if(c)return n.createElement("div",{key:t.name},n.createElement("h3",null,n.createElement(a.Link,{to:"/journal/"+r+"/"+t.name+"/"},l+" "+r)),n.createElement("small",null,c.totalCount," entr",1===c.totalCount?"y":"ies"))})),n.createElement("br",null),n.createElement("h2",null,r," Entries"),n.createElement("hr",null),p.map((function(e){var t=e.node;return n.createElement(s.Z,{key:t.fields.slug,title:t.frontmatter.title,subtitle:t.frontmatter.subtitle,slug:t.fields.slug,date:t.frontmatter.date,lastUpdated:t.frontmatter.lastupdated,topics:t.frontmatter.topics,excerpt:t.excerpt,showExcerpt:!0})})))))}},6185:function(e,t){t.Z=function(e){switch(+e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return""}}}}]);
//# sourceMappingURL=component---src-templates-year-tsx-cc0bf179295d4ab4153b.js.map