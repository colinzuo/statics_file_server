(window.webpackJsonp=window.webpackJsonp||[]).push([[157],{223:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),c=(n(0),n(230)),a={title:"\u8c03\u8bd5"},u={unversionedId:"cloud/kubernetes/debug",id:"cloud/kubernetes/debug",isDocsHomePage:!1,title:"\u8c03\u8bd5",description:"pod\u8d77\u4e0d\u6765",source:"@site/docs\\cloud\\kubernetes\\debug.md",slug:"/cloud/kubernetes/debug",permalink:"/dddtdd-docs/docs/cloud/kubernetes/debug",version:"current",lastUpdatedBy:"Colin Zuo",lastUpdatedAt:1609400266,sidebar:"docs",previous:{title:"Kubernetes\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/cloud/kubernetes/"},next:{title:"Helm\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/cloud/helm/"}},d=[{value:"pod\u8d77\u4e0d\u6765",id:"pod\u8d77\u4e0d\u6765",children:[]}],i={rightToc:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"pod\u8d77\u4e0d\u6765"},"pod\u8d77\u4e0d\u6765"),Object(c.b)("p",null,"\u5982\u679cpod\u8d77\u4e0d\u6765\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7\u66f4\u6539command\u6765\u53ea\u662f\u7b80\u5355\u7684\u5faa\u73afsleep\u8ba9pod\u8fdb\u5165\nrunning\u72b6\u6001\uff0c\u7136\u540e\u518d\u8fdb\u5165pod\u770b\u5177\u4f53\u539f\u56e0\u3002"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"      - args:\n        - -c\n        - while true; do echo hello; sleep 10;done\n        command:\n        - /bin/bash\n")))}l.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return f}));var r=n(0),o=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),l=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=l(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,a=e.parentName,i=d(e,["components","mdxType","originalType","parentName"]),p=l(n),b=r,f=p["".concat(a,".").concat(b)]||p[b]||s[b]||c;return n?o.a.createElement(f,u(u({ref:t},i),{},{components:n})):o.a.createElement(f,u({ref:t},i))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,a=new Array(c);a[0]=b;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,a[1]=u;for(var i=2;i<c;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);