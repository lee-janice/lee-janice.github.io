(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[351],{6494:function(e){"use strict";e.exports=Object.assign},2993:function(e){var t="undefined"!=typeof Element,n="function"==typeof Map,r="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,l,u,s;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(!i(e[l],a[l]))return!1;return!0}if(n&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;for(s=e.entries();!(l=s.next()).done;)if(!i(l.value[1],a.get(l.value[0])))return!1;return!0}if(r&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(s=e.entries();!(l=s.next()).done;)if(!a.has(l.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(l=c;0!=l--;)if(e[l]!==a[l])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(l=c;0!=l--;)if(!Object.prototype.hasOwnProperty.call(a,u[l]))return!1;if(t&&e instanceof Element)return!1;for(l=c;0!=l--;)if(("_owner"!==u[l]&&"__v"!==u[l]&&"__o"!==u[l]||!e.$$typeof)&&!i(e[u[l]],a[u[l]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(n){if((n.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw n}}},4839:function(e,t,n){"use strict";var r,o=n(7294),i=(r=o)&&"object"==typeof r&&"default"in r?r.default:r;function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var l,u=[];function s(){l=e(u.map((function(e){return e.props}))),f.canUseDOM?t(l):n&&(l=n(l))}var f=function(e){var t,n;function o(){return e.apply(this,arguments)||this}n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.peek=function(){return l},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=l;return l=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),s()},a.componentDidUpdate=function(){s()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),s()},a.render=function(){return i.createElement(r,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(r)+")"),a(f,"canUseDOM",c),f}}},8601:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var r,o,i,a,c=n(7294),l=n(5697),u=n.n(l),s=n(4839),f=n.n(s),d=n(2993),p=n.n(d),m=n(6494),h=n.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},w=(Object.keys(v).map((function(e){return v[e]})),"charset"),T="cssText",E="href",k="http-equiv",A="innerHTML",C="itemprop",O="name",S="property",x="rel",M="src",j="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},P="defaultTitle",I="defer",_="encodeSpecialCharacters",N="onChangeClientState",D="titleTemplate",R=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),z=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",H="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},q=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},F=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),Y=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Z=function(e,t){var n={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(n[r]=e[r]);return n},U=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t},K=function(e){var t=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];return!1===t?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},V=function(e){var t=$(e,v.TITLE),n=$(e,D);if(n&&t)return n.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var r=$(e,P);return t||r||void 0},W=function(e){return $(e,N)||function(){}},G=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return Y({},e,t)}),{})},J=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,n){if(!t.length)for(var r=Object.keys(n),o=0;o<r.length;o++){var i=r[o].toLowerCase();if(-1!==e.indexOf(i)&&n[i])return t.concat(n)}return t}),[])},X=function(e,t,n){var r={};return n.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&re("Helmet: "+e+' should be of type "Array". Instead found type "'+H(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,n){var o={};n.filter((function(e){for(var n=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],l=c.toLowerCase();-1===t.indexOf(l)||n===x&&"canonical"===e[n].toLowerCase()||l===x&&"stylesheet"===e[l].toLowerCase()||(n=l),-1===t.indexOf(c)||c!==A&&c!==T&&c!==C||(n=c)}if(!n||!e[n])return!1;var u=e[n].toLowerCase();return r[n]||(r[n]={}),o[n]||(o[n]={}),!r[n][u]&&(o[n][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],l=h()({},r[c],o[c]);r[c]=l}return e}),[]).reverse()},$=function(e,t){for(var n=e.length-1;n>=0;n--){var r=e[n];if(r.hasOwnProperty(t))return r[t]}return null},Q=(r=Date.now(),function(e){var t=Date.now();t-r>16?(r=t,e(t)):setTimeout((function(){Q(e)}),0)}),ee=function(e){return clearTimeout(e)},te="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||Q:n.g.requestAnimationFrame||Q,ne="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||ee:n.g.cancelAnimationFrame||ee,re=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},oe=null,ie=function(e,t){var n=e.baseTag,r=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.onChangeClientState,u=e.scriptTags,s=e.styleTags,f=e.title,d=e.titleAttributes;le(v.BODY,r),le(v.HTML,o),ce(f,d);var p={baseTag:ue(v.BASE,n),linkTags:ue(v.LINK,i),metaTags:ue(v.META,a),noscriptTags:ue(v.NOSCRIPT,c),scriptTags:ue(v.SCRIPT,u),styleTags:ue(v.STYLE,s)},m={},h={};Object.keys(p).forEach((function(e){var t=p[e],n=t.newTags,r=t.oldTags;n.length&&(m[e]=n),r.length&&(h[e]=p[e].oldTags)})),t&&t(),l(e,m,h)},ae=function(e){return Array.isArray(e)?e.join(""):e},ce=function(e,t){void 0!==e&&document.title!==e&&(document.title=ae(e)),le(v.TITLE,t)},le=function(e,t){var n=document.getElementsByTagName(e)[0];if(n){for(var r=n.getAttribute(B),o=r?r.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var l=a[c],u=t[l]||"";n.getAttribute(l)!==u&&n.setAttribute(l,u),-1===o.indexOf(l)&&o.push(l);var s=i.indexOf(l);-1!==s&&i.splice(s,1)}for(var f=i.length-1;f>=0;f--)n.removeAttribute(i[f]);o.length===i.length?n.removeAttribute(B):n.getAttribute(B)!==a.join(",")&&n.setAttribute(B,a.join(","))}},ue=function(e,t){var n=document.head||document.querySelector(v.HEAD),r=n.querySelectorAll(e+"["+"data-react-helmet]"),o=Array.prototype.slice.call(r),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var n=document.createElement(e);for(var r in t)if(t.hasOwnProperty(r))if(r===A)n.innerHTML=t.innerHTML;else if(r===T)n.styleSheet?n.styleSheet.cssText=t.cssText:n.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[r]?"":t[r];n.setAttribute(r,c)}n.setAttribute(B,"true"),o.some((function(e,t){return a=t,n.isEqualNode(e)}))?o.splice(a,1):i.push(n)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return n.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,n){var r=void 0!==e[n]?n+'="'+e[n]+'"':""+n;return t?t+" "+r:r}),"")},fe=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[L[n]||n]=e[n],t}),t)},de=function(e,t,n){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,n=t.titleAttributes,(r={key:e})[B]=!0,o=fe(n,r),[c.createElement(v.TITLE,o,e)];var e,n,r,o},toString:function(){return function(e,t,n,r){var o=se(n),i=ae(t);return o?"<"+e+' data-react-helmet="true" '+o+">"+K(i,r)+"</"+e+">":"<"+e+' data-react-helmet="true">'+K(i,r)+"</"+e+">"}(e,t.title,t.titleAttributes,n)}};case y:case g:return{toComponent:function(){return fe(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,n){var r,o=((r={key:n})[B]=!0,r);return Object.keys(t).forEach((function(e){var n=L[e]||e;if(n===A||n===T){var r=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:r}}else o[n]=t[e]})),c.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,n){return t.reduce((function(t,r){var o=Object.keys(r).filter((function(e){return!(e===A||e===T)})).reduce((function(e,t){var o=void 0===r[t]?t:t+'="'+K(r[t],n)+'"';return e?e+" "+o:o}),""),i=r.innerHTML||r.cssText||"",a=-1===z.indexOf(e);return t+"<"+e+' data-react-helmet="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,n)}}}},pe=function(e){var t=e.baseTag,n=e.bodyAttributes,r=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,l=e.scriptTags,u=e.styleTags,s=e.title,f=void 0===s?"":s,d=e.titleAttributes;return{base:de(v.BASE,t,r),bodyAttributes:de(y,n,r),htmlAttributes:de(g,o,r),link:de(v.LINK,i,r),meta:de(v.META,a,r),noscript:de(v.NOSCRIPT,c,r),script:de(v.SCRIPT,l,r),style:de(v.STYLE,u,r),title:de(v.TITLE,{title:f,titleAttributes:d},r)}},me=f()((function(e){return{baseTag:J([E,j],e),bodyAttributes:G(y,e),defer:$(e,I),encode:$(e,_),htmlAttributes:G(g,e),linkTags:X(v.LINK,[x,E],e),metaTags:X(v.META,[O,w,k,S,C],e),noscriptTags:X(v.NOSCRIPT,[A],e),onChangeClientState:W(e),scriptTags:X(v.SCRIPT,[M,A],e),styleTags:X(v.STYLE,[T],e),title:V(e),titleAttributes:G(b,e)}}),(function(e){oe&&ne(oe),e.defer?oe=te((function(){ie(e,(function(){oe=null}))})):(ie(e),oe=null)}),pe)((function(){return null})),he=(o=me,a=i=function(e){function t(){return q(this,t),U(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,n=e.child,r=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return Y({},r,((t={})[n.type]=[].concat(r[n.type]||[],[Y({},o,this.mapNestedChildrenToProps(n,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,n,r=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(r.type){case v.TITLE:return Y({},o,((t={})[r.type]=a,t.titleAttributes=Y({},i),t));case v.BODY:return Y({},o,{bodyAttributes:Y({},i)});case v.HTML:return Y({},o,{htmlAttributes:Y({},i)})}return Y({},o,((n={})[r.type]=Y({},i),n))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var n=Y({},t);return Object.keys(e).forEach((function(t){var r;n=Y({},n,((r={})[t]=e[t],r))})),n},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var n=this,r={};return c.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,n){return t[R[n]||n]=e[n],t}),t)}(Z(o,["children"]));switch(n.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:r=n.flattenArrayTypeChildren({child:e,arrayTypeChildren:r,newChildProps:a,nestedChildren:i});break;default:t=n.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(r,t)},t.prototype.render=function(){var e=this.props,t=e.children,n=Z(e,["children"]),r=Y({},n);return t&&(r=this.mapChildrenToProps(t,r)),c.createElement(o,r)},F(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(c.Component),i.propTypes={base:u().object,bodyAttributes:u().object,children:u().oneOfType([u().arrayOf(u().node),u().node]),defaultTitle:u().string,defer:u().bool,encodeSpecialCharacters:u().bool,htmlAttributes:u().object,link:u().arrayOf(u().object),meta:u().arrayOf(u().object),noscript:u().arrayOf(u().object),onChangeClientState:u().func,script:u().arrayOf(u().object),style:u().arrayOf(u().object),title:u().string,titleAttributes:u().object,titleTemplate:u().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=pe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);he.renderStatic=he.rewind;var ye=he,ge=n(1597),be=function(e){var t=e.title,n=e.description,r=e.lang,o=e.keywords;return c.createElement(ge.StaticQuery,{query:"712016698",render:function(e){var i=n||e.site.siteMetadata.description;return r=r||"en",o=o||[],c.createElement(ye,{htmlAttributes:{lang:r},title:t,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:i},{property:"og:title",content:t},{property:"og:description",content:i},{property:"og:type",content:"website"}].concat(o.length>0?{name:"keywords",content:o.join(", ")}:[])})}})}},5283:function(e,t,n){"use strict";n.d(t,{Z:function(){return w}});var r,o,i,a,c=n(1880),l=n(7294),u=n(6302),s=n(1721),f=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(t=e.call.apply(e,[this].concat(r))||this).state={theme:"undefined"!=typeof window?window.__theme:"light-classic",darkMode:"undefined"!=typeof window&&window.__theme.toString().includes("dark"),modernMode:"undefined"!=typeof window&&window.__theme.toString().includes("modern")},t.toggleDarkMode=function(e){t.state.darkMode=e},t.toggleModernMode=function(e){t.state.modernMode=e},t.toggleTheme=function(){window.__setPreferredTheme((t.state.darkMode?"dark":"light")+"-"+(t.state.modernMode?"modern":"classic"))},t}(0,s.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){var e=this;window.__setPreferredTheme((this.state.darkMode?"dark":"light")+"-"+(this.state.modernMode?"modern":"classic")),window.__onThemeChange=function(){e.setState(Object.assign({},e.state,{theme:window.__theme}))}},n.render=function(){return l.createElement(this.props.children,{darkMode:this.state.darkMode,modernMode:this.state.modernMode,theme:this.state.theme,toggleDarkMode:this.toggleDarkMode,toggleModernMode:this.toggleModernMode,toggleTheme:this.toggleTheme,className:"theme-toggler"})},t}(l.Component),d=f,p=function(){return l.createElement(d,null,(function(e){var t=e.theme,n=e.toggleDarkMode,r=e.toggleModernMode,o=e.toggleTheme;return l.createElement("div",{className:"theme-toggler"},l.createElement("label",{style:{float:"right",position:"fixed",right:17,bottom:25}},l.createElement("input",{type:"checkbox",checked:t.includes("dark"),onChange:function(e){n(e.target.checked),o()}})," ","Dark mode"),l.createElement("label",{style:{float:"right",position:"fixed",right:5,bottom:5}},l.createElement("input",{type:"checkbox",checked:t.includes("modern"),onChange:function(e){r(e.target.checked),o()}})," ","Modern mode"))}))},m=n(1597),h=u.zo.nav(r||(r=(0,c.Z)(["\n    padding-top: 0px;\n\n    @media screen and (max-width: 1100px) {\n        display: none;\n    }\n\n    ul {\n        list-style-type: none;\n        margin: 0;\n        padding: 0;\n    }\n\n    li {\n        display: inline-block;\n        margin: 16px;\n        margin-right: 48px;\n        margin-left: auto;\n        font-variant: small-caps;\n\n        a {\n            background: none;\n        }\n    }\n"]))),y=u.zo.div(o||(o=(0,c.Z)(["\n  width: 2rem;\n  height: 2rem;\n  position: fixed;\n  top: 25px;\n  right: 25px;\n  display: none;\n  z-index: 100;\n\n  @media (max-width: 1100px) {\n    display: flex;\n    justify-content: space-around;\n    flex-flow: column nowrap;\n  }\n\n  div {\n    display: inline-block;\n    width: 2rem;\n    height: 1px;\n    background-color: ",";\n    border-radius: 10px;\n    transform-origin: 1px;\n    &:nth-child(1) {\n      transform: ",";\n    }\n    &:nth-child(2) {\n      transform: ",";\n      opacity: ",";\n    }\n    &:nth-child(3) {\n      transform: ",";\n    }\n  }\n"])),(function(e){return e.open?"red":"var(--fontColor)"}),(function(e){return e.open?"rotate(45deg)":"rotate(0)"}),(function(e){return e.open?"translateX(100%)":"translateX(0)"}),(function(e){return e.open?0:1}),(function(e){return e.open?"rotate(-45deg)":"rotate(0)"})),g=u.zo.ul(i||(i=(0,c.Z)(["\n    display: none;\n    margin-top: 0px;\n    border-bottom: 0.5px solid var(--fontColor); \n    border-left: 0.5px solid var(--fontColor); \n\n    ul {\n        list-style-type: none;\n        padding: 0 0 25px 10px;\n        grid-auto-flow: column;\n        column-count: 1;\n        column-width: 125px;\n        -moz-column-count: 2;\n        -webkit-column-count: 2;\n    }\n\n    li {\n        padding: 5px;\n        margin-right: auto;\n        font-variant: small-caps;\n\n        a {\n        background: none;\n        }\n    }\n\n    @media (max-width: 1100px) {\n        display: ",";\n        background-color: var(--mainBg);\n        position: fixed;\n        top: 0;\n        right: 0;\n        height: 264px;\n        width: 222px;\n        padding-top: 3.5rem;\n        z-index: 99 ;\n        li {\n            color: var(--fontColor);\n        }\n    }\n"])),(function(e){return e.open?"flex":"none"})),b=function(){var e=(0,l.useState)(!1),t=e[0],n=e[1];return l.createElement("div",null,l.createElement(g,{open:t},l.createElement("ul",null,l.createElement("li",null,l.createElement(m.Link,{to:"/"},"Home")),l.createElement("li",null,l.createElement(m.Link,{to:"/topics"},"Topics")),l.createElement("li",null,l.createElement(m.Link,{to:"/essays"},"Essays")),l.createElement("li",null,l.createElement(m.Link,{to:"/notes"},"Notes")),l.createElement("li",null,l.createElement(m.Link,{to:"/journal"},"Journal")),l.createElement("li",null,l.createElement(m.Link,{to:"/about-me"},"About Me")),l.createElement("li",null,l.createElement(m.Link,{to:"/about-this-site"},"About This Site")))),l.createElement(y,{open:t,onClick:function(){return n(!t)}},l.createElement("div",null)," ",l.createElement("div",null),l.createElement("div",null)),l.createElement(h,{className:"navigation"},l.createElement("ul",null,l.createElement("li",null,l.createElement(m.Link,{to:"/"},"Home")),l.createElement("li",null," | "),l.createElement("li",null,l.createElement(m.Link,{to:"/topics"},"Topics")),l.createElement("li",null," | "),l.createElement("li",null,l.createElement(m.Link,{to:"/essays"},"Essays")),l.createElement("li",null,l.createElement(m.Link,{to:"/notes"},"Notes")),l.createElement("li",null,l.createElement(m.Link,{to:"/journal"},"Journal")),l.createElement("li",null," | "),l.createElement("li",null,l.createElement(m.Link,{to:"/about-me"},"About Me")),l.createElement("li",null,l.createElement(m.Link,{to:"/about-this-site"},"About This Site")))))},v=u.zo.footer(a||(a=(0,c.Z)(["\n  padding-bottom: 36px;\n"]))),w=function(e){var t=e.children;return l.createElement(l.Fragment,null,l.createElement(u.ZL,null),l.createElement(b,null),l.createElement("main",{className:"content",role:"main"},t),l.createElement(v,{className:"footer"},"© ",(new Date).getFullYear(),","," ",l.createElement("a",{href:"https://lee-janice.github.io"},"a cozy space"),". Built with"," ",l.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"),"."),l.createElement(p,null),l.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1.0"}))}},6302:function(e,t,n){"use strict";n.d(t,{ZL:function(){return i},zo:function(){return r.default}});var r=n(3494),o={black:"#000000",background:"#fafafa",contrast:"#111",contrastLightest:"#dad9d9",accent:"red",white:"#ffffff"},i=(0,r.createGlobalStyle)(["",""],"\n::selection {\n  background-color: "+o.contrastLightest+";\n  color: rgba(0, 0, 0, 0.70);\n}\n")},1880:function(e,t,n){"use strict";function r(e,t){return t||(t=e.slice(0)),e.raw=t,e}n.d(t,{Z:function(){return r}})}}]);
//# sourceMappingURL=commons-0e84fcfc04ce583950d0.js.map