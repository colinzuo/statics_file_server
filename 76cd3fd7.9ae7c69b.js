(window.webpackJsonp=window.webpackJsonp||[]).push([[69],{136:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return o})),t.d(r,"metadata",(function(){return p})),t.d(r,"rightToc",(function(){return c})),t.d(r,"default",(function(){return l}));var n=t(3),i=t(7),a=(t(0),t(230)),o={},p={unversionedId:"backend/spring/spring-core/TypeUtils",id:"backend/spring/spring-core/TypeUtils",isDocsHomePage:!1,title:"TypeUtils",description:"- isAssignable(Type lhsType, Type rhsType)",source:"@site/docs\\backend\\spring\\spring-core\\TypeUtils.md",slug:"/backend/spring/spring-core/TypeUtils",permalink:"/dddtdd-docs/docs/backend/spring/spring-core/TypeUtils",version:"current",lastUpdatedBy:"Colin Zuo",lastUpdatedAt:1616755928,sidebar:"docs",previous:{title:"StringUtils",permalink:"/dddtdd-docs/docs/backend/spring/spring-core/StringUtils"},next:{title:"HttpHeaders",permalink:"/dddtdd-docs/docs/backend/spring/spring-web/HttpHeaders"}},c=[],s={rightToc:c};function l(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"isAssignable(Type lhsType, Type rhsType)"),Object(a.b)("li",{parentName:"ul"},"isAssignable(ParameterizedType lhsType, ParameterizedType rhsType)"),Object(a.b)("li",{parentName:"ul"},"isAssignable(WildcardType lhsType, Type rhsType)"),Object(a.b)("li",{parentName:"ul"},"isAssignableBound(@Nullable Type lhsType, @Nullable Type rhsType)")))}l.isMDXComponent=!0},230:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return b}));var n=t(0),i=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),l=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},u=function(e){var r=l(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},y=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=l(t),y=n,b=u["".concat(o,".").concat(y)]||u[y]||d[y]||a;return t?i.a.createElement(b,p(p({ref:r},s),{},{components:t})):i.a.createElement(b,p({ref:r},s))}));function b(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,o=new Array(a);o[0]=y;var p={};for(var c in r)hasOwnProperty.call(r,c)&&(p[c]=r[c]);p.originalType=e,p.mdxType="string"==typeof e?e:n,o[1]=p;for(var s=2;s<a;s++)o[s]=t[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,t)}y.displayName="MDXCreateElement"}}]);