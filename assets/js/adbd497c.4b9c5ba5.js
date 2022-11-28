"use strict";(self.webpackChunkebdh_docs=self.webpackChunkebdh_docs||[]).push([[1253],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>p});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,c=e.originalType,l=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),m=s(r),p=i,f=m["".concat(l,".").concat(p)]||m[p]||u[p]||c;return r?n.createElement(f,a(a({ref:t},d),{},{components:r})):n.createElement(f,a({ref:t},d))}));function p(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var c=r.length,a=new Array(c);a[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var s=2;s<c;s++)a[s]=r[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),i=r(6010),c=r(2802),a=r(9960),o=r(3919),l=r(5999);const s="cardContainer_fWXF",d="cardTitle_rnsV",u="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",s)},r)}function p(e){let{href:t,icon:r,title:c,description:a}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",d),title:c},r," ",c),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",u),title:a},a))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function y(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,c.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(y,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function b(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(b,e);const a=(0,c.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},5249:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>d});var n=r(7462),i=(r(7294),r(3905)),c=r(2991);const a={},o="Elecci\xf3n de ideas",l={unversionedId:"ideacion/eleccion-de-ideas/criterios",id:"version-1.0.0/ideacion/eleccion-de-ideas/criterios",title:"Elecci\xf3n de ideas",description:"Criterios",source:"@site/versioned_docs/version-1.0.0/ideacion/eleccion-de-ideas/criterios.md",sourceDirName:"ideacion/eleccion-de-ideas",slug:"/ideacion/eleccion-de-ideas/criterios",permalink:"/docs/1.0.0/ideacion/eleccion-de-ideas/criterios",draft:!1,tags:[],version:"1.0.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Clasificaci\xf3n de ideas",permalink:"/docs/1.0.0/ideacion/clasificacion-de-ideas"},next:{title:"1. En busca de hogar",permalink:"/docs/1.0.0/ideacion/eleccion-de-ideas/en-busca-de-hogar"}},s={},d=[{value:"Criterios",id:"criterios",level:2},{value:"Ideas seleccionadas",id:"ideas-seleccionadas",level:2}],u={toc:d};function m(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"elecci\xf3n-de-ideas"},"Elecci\xf3n de ideas"),(0,i.kt)("h2",{id:"criterios"},"Criterios"),(0,i.kt)("p",null,"Se definieron los siguientes criterios para la selecci\xf3n de las mejores ideas:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Debe ser escogido por la mayor\xeda del grupo."),(0,i.kt)("li",{parentName:"ul"},"Tiene que ser un juego de mesa."),(0,i.kt)("li",{parentName:"ul"},"Ser diferente a la(s) que se haya(n) escogido."),(0,i.kt)("li",{parentName:"ul"},"Modificable y facilmente integrable de nuevos mecanicas de juego.")),(0,i.kt)("h2",{id:"ideas-seleccionadas"},"Ideas seleccionadas"),(0,i.kt)(c.Z,{mdxType:"DocCardList"}))}m.isMDXComponent=!0}}]);