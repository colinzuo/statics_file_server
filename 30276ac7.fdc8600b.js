(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{230:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var o=n(0),r=n.n(o);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},u=Object.keys(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(o=0;o<u.length;o++)n=u[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),i=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},d=function(e){var t=i(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,u=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=i(n),p=o,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||u;return n?r.a.createElement(m,a(a({ref:t},l),{},{components:n})):r.a.createElement(m,a({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var u=n.length,c=new Array(u);c[0]=p;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a.mdxType="string"==typeof e?e:o,c[1]=a;for(var l=2;l<u;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},96:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return i}));var o=n(3),r=n(7),u=(n(0),n(230)),c={title:"SubModules"},a={unversionedId:"tools/git/submodules",id:"tools/git/submodules",isDocsHomePage:!1,title:"SubModules",description:"\u4e00\u4e2a\u5927\u9879\u76ee\u53ef\u80fd\u5305\u62ec\u591a\u4e2a\u5c0f\u9879\u76ee\uff0c\u6bcf\u4e2a\u5c0f\u9879\u76ee\u6709\u81ea\u5df1\u7684\u4ed3\u5e93\uff0c\u53ef\u4ee5\u5728\u5927\u9879\u76ee",source:"@site/docs\\tools\\git\\submodules.md",slug:"/tools/git/submodules",permalink:"/dddtdd-docs/docs/tools/git/submodules",version:"current",lastUpdatedBy:"Colin Zuo",lastUpdatedAt:1608690172,sidebar:"docs",previous:{title:"GIT\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/tools/git/"},next:{title:"Intellij IDEA\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/tools/intellij-idea/"}},s=[{value:"\u6dfb\u52a0submodule",id:"\u6dfb\u52a0submodule",children:[]},{value:"\u4e0b\u8f7dsubmodule",id:"\u4e0b\u8f7dsubmodule",children:[]},{value:"\u66f4\u65b0submodule",id:"\u66f4\u65b0submodule",children:[]},{value:"\u4fee\u6539submodule",id:"\u4fee\u6539submodule",children:[]},{value:"python",id:"python",children:[]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[]}],l={rightToc:s};function i(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(u.b)("wrapper",Object(o.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"\u4e00\u4e2a\u5927\u9879\u76ee\u53ef\u80fd\u5305\u62ec\u591a\u4e2a\u5c0f\u9879\u76ee\uff0c\u6bcf\u4e2a\u5c0f\u9879\u76ee\u6709\u81ea\u5df1\u7684\u4ed3\u5e93\uff0c\u53ef\u4ee5\u5728\u5927\u9879\u76ee\n\u4e2d\u901a\u8fc7submodule\u6765\u805a\u5408\u5c0f\u9879\u76ee\u3002"),Object(u.b)("h2",{id:"\u6dfb\u52a0submodule"},"\u6dfb\u52a0submodule"),Object(u.b)("pre",null,Object(u.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"git submodule add https://github.com/chaconinc/DbConnector\n\n#\u8bbe\u7f6ebranch\uff0c\u7f3a\u7701\u4e3amaster  \ngit config -f .gitmodules submodule.DbConnector.branch stable\n")),Object(u.b)("h2",{id:"\u4e0b\u8f7dsubmodule"},"\u4e0b\u8f7dsubmodule"),Object(u.b)("pre",null,Object(u.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"git submodule init\ngit submodule update\n\n# or\n\ngit submodule update --init\n")),Object(u.b)("h2",{id:"\u66f4\u65b0submodule"},"\u66f4\u65b0submodule"),Object(u.b)("pre",null,Object(u.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"git submodule update --remote --rebase\n\n# or\n\ngit pull --recurse-submodules\n")),Object(u.b)("h2",{id:"\u4fee\u6539submodule"},"\u4fee\u6539submodule"),Object(u.b)("pre",null,Object(u.b)("code",Object(o.a)({parentName:"pre"},{className:"language-bash"}),"cd {submodule dir}\ngit checkout master\ngit add xxxx\ngit commit\ngit push\n\n# \u4ece\u4e3b\u9879\u76eepush\n\n# git push --recurse-submodules=check\ngit push --recurse-submodules=on-demand \n\n# or\n\n# git config push.recurseSubmodules check\ngit config push.recurseSubmodules on-demand\ngit push\n\n")),Object(u.b)("h2",{id:"python"},"python"),Object(u.b)("p",null,Object(u.b)("a",Object(o.a)({parentName:"p"},{href:"https://shunsvineyard.info/2019/12/23/using-git-submodule-and-develop-mode-to-manage-python-projects/"}),"https://shunsvineyard.info/2019/12/23/using-git-submodule-and-develop-mode-to-manage-python-projects/")),Object(u.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(u.b)("p",null,Object(u.b)("a",Object(o.a)({parentName:"p"},{href:"https://git-scm.com/book/en/v2/Git-Tools-Submodules"}),"https://git-scm.com/book/en/v2/Git-Tools-Submodules"),"  "))}i.isMDXComponent=!0}}]);