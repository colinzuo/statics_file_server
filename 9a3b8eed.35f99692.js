(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{154:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return l}));var r=n(3),o=n(7),a=(n(0),n(230)),c={title:"\u5b89\u88c5\u73af\u5883"},u={unversionedId:"frontend/common/setup-env",id:"frontend/common/setup-env",isDocsHomePage:!1,title:"\u5b89\u88c5\u73af\u5883",description:"\u5b89\u88c5Node.js",source:"@site/docs\\frontend\\common\\setup-env.md",slug:"/frontend/common/setup-env",permalink:"/dddtdd-docs/docs/frontend/common/setup-env",version:"current",lastUpdatedBy:"Colin Zuo",lastUpdatedAt:1607076823,sidebar:"docs",previous:{title:"\u5171\u7528\u90e8\u5206\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/frontend/common/"},next:{title:"Angular\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/frontend/angular/"}},d=[{value:"\u5b89\u88c5Node.js",id:"\u5b89\u88c5nodejs",children:[{value:"Ubuntu\u73af\u5883\u4e0b\u5b89\u88c5",id:"ubuntu\u73af\u5883\u4e0b\u5b89\u88c5",children:[]}]},{value:"\u5b89\u88c5yarn",id:"\u5b89\u88c5yarn",children:[{value:"Ubuntu\u73af\u5883\u4e0b\u5b89\u88c5",id:"ubuntu\u73af\u5883\u4e0b\u5b89\u88c5-1",children:[]}]}],s={rightToc:d};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"\u5b89\u88c5nodejs"},"\u5b89\u88c5Node.js"),Object(a.b)("p",null,Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"nodejs.org")),Object(a.b)("p",null,"\u5b89\u88c5\u4e00\u4e2aLTS\u7248\u672c, \u6bd4\u598214.15.1"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"\u8981\u68c0\u67e5node\u7248\u672c, \u5728\u547d\u4ee4\u884c\u8fd0\u884cnode -v")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"node -v\n")),Object(a.b)("h3",{id:"ubuntu\u73af\u5883\u4e0b\u5b89\u88c5"},"Ubuntu\u73af\u5883\u4e0b\u5b89\u88c5"),Object(a.b)("p",null,"\u53c2\u7167",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/nodesource/distributions/blob/master/README.md"}),"Node.js binary distributions")),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),"curl -sL https://deb.nodesource.com/setup_lts.x | sudo -E bash -\nsudo apt-get install -y nodejs\n")),Object(a.b)("h2",{id:"\u5b89\u88c5yarn"},"\u5b89\u88c5yarn"),Object(a.b)("p",null,"\u53c2\u7167",Object(a.b)("a",Object(r.a)({parentName:"p"},{href:"https://classic.yarnpkg.com/en/docs/install/#debian-stable"}),"Yarn Installation")),Object(a.b)("h3",{id:"ubuntu\u73af\u5883\u4e0b\u5b89\u88c5-1"},"Ubuntu\u73af\u5883\u4e0b\u5b89\u88c5"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-bash"}),'curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -\necho "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list\n\nsudo apt update && sudo apt install yarn\n')))}l.isMDXComponent=!0},230:function(e,t,n){"use strict";n.d(t,"a",(function(){return i})),n.d(t,"b",(function(){return m}));var r=n(0),o=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},i=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,s=d(e,["components","mdxType","originalType","parentName"]),i=l(n),b=r,m=i["".concat(c,".").concat(b)]||i[b]||p[b]||a;return n?o.a.createElement(m,u(u({ref:t},s),{},{components:n})):o.a.createElement(m,u({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,c=new Array(a);c[0]=b;var u={};for(var d in t)hasOwnProperty.call(t,d)&&(u[d]=t[d]);u.originalType=e,u.mdxType="string"==typeof e?e:r,c[1]=u;for(var s=2;s<a;s++)c[s]=n[s];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);