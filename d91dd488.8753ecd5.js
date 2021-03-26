(window.webpackJsonp=window.webpackJsonp||[]).push([[129],{194:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),i=r(7),a=(r(0),r(230)),o={title:"\u53ef\u89c2\u6d4b\u6027"},c={unversionedId:"backend/spring/observability",id:"backend/spring/observability",isDocsHomePage:!1,title:"\u53ef\u89c2\u6d4b\u6027",description:"Meter\u7c7b\u578b",source:"@site/docs\\backend\\spring\\observability.md",slug:"/backend/spring/observability",permalink:"/dddtdd-docs/docs/backend/spring/observability",version:"current",lastUpdatedBy:"Colin Zuo",lastUpdatedAt:1616755928,sidebar:"docs",previous:{title:"spring-security",permalink:"/dddtdd-docs/docs/backend/spring/spring-security"},next:{title:"\u7f16\u7a0b\u8bed\u8a00\u4ecb\u7ecd",permalink:"/dddtdd-docs/docs/programming-languages/"}},s=[{value:"Meter\u7c7b\u578b",id:"meter\u7c7b\u578b",children:[{value:"Cache\u76d1\u63a7",id:"cache\u76d1\u63a7",children:[]},{value:"Data Source\u76d1\u63a7",id:"data-source\u76d1\u63a7",children:[]},{value:"ExecutorService\u76d1\u63a7",id:"executorservice\u76d1\u63a7",children:[]},{value:"Web Server\u76d1\u63a7",id:"web-server\u76d1\u63a7",children:[]},{value:"WebFlux",id:"webflux",children:[]},{value:"Web Client\u76d1\u63a7",id:"web-client\u76d1\u63a7",children:[]},{value:"Scheduling\u76d1\u63a7",id:"scheduling\u76d1\u63a7",children:[]}]},{value:"\u53c2\u8003\u6587\u6863",id:"\u53c2\u8003\u6587\u6863",children:[{value:"spring-metrics",id:"spring-metrics",children:[]},{value:"monitor-spring-boot-microservices",id:"monitor-spring-boot-microservices",children:[]}]},{value:"\u57f9\u8bad\u89c6\u9891",id:"\u57f9\u8bad\u89c6\u9891",children:[]}],u={rightToc:s};function l(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"meter\u7c7b\u578b"},"Meter\u7c7b\u578b"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://prometheus.io/docs/concepts/metric_types/"}),"https://prometheus.io/docs/concepts/metric_types/")),Object(a.b)("p",null,"Counter\u7c7b\u578b\u83b7\u53d6\u53d8\u5316\u7387\uff0c\u6bd4\u5982 QPS \u6d88\u606f\u6570/N\u79d2"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'MeterRegistry registry = ...\nCounter counter = registry.counter("counter");\n\n# Prometheus Query\nrate(counter[10s])\n')),Object(a.b)("p",null,"Timer\u7c7b\u578b\u83b7\u53d6\u53d8\u5316\u7387\uff0c\u6bd4\u5982 QPS \u6d88\u606f\u6570/N\u79d2\n\u83b7\u53d6\u5e73\u5747\u5ef6\u8fdf\uff0c\u6bd4\u5982 XX ms"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),"public interface Timer extends Meter {\n    ...\n    void record(long amount, TimeUnit unit);\n    double totalTime(TimeUnit unit);\n}\n\n# Prometheus Query\nrate(timer_count[10s])\n\nrate(timer_sum[10s])/rate(timer_count[10s])\n")),Object(a.b)("p",null,"LongTaskTimer\u7c7b\u578b\u83b7\u53d6\u5df2\u7ecf\u5904\u7406\u7684\u65f6\u95f4\uff0c\u6bd4\u5982\u4e00\u4e2a\u4e0e\u4e09\u65b9\u7cfb\u7edf\u540c\u6b65\n\u6570\u636e\u7684\u4efb\u52a1\uff0c\u4f1a\u5c55\u793a\u672c\u6b21\u6267\u884c\u5df2\u7ecf\u6d88\u8017\u7684\u65f6\u95f4"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{}),'@Timed(value = "aws_scrape", longTask = true)\n@Scheduled(fixedDelay = 360000)\nvoid scrapeResources() {\n    // find instances, volumes, auto-scaling groups, etc...\n}\n\n# Prometheus Query\nlongTaskTimer{statistic="duration"}\n')),Object(a.b)("p",null,"Distribution Summary\u7c7b\u578b"),Object(a.b)("p",null,"Quantile Statistics\u662f\u5bf9Timer\u548cSummary\u7c7b\u578b\u7684\u4e00\u79cd\u914d\u7f6e\u6765\u63d0\u4f9b\u989d\u5916\n\u7684\u4fe1\u606f\uff0c\u6bd4\u598250%\u4ee5\u5185\u7684\u5ef6\u8fdf\u662f\uff0c95%\u4ee5\u5185\u7684\u5ef6\u8fdf\u662f\uff0c\u5bf9\u5916\u63d0\u4f9b\u670d\u52a1\u65f6\u5f88\u591a\n\u4f9b\u5e94\u5546\u4f1a\u5728\u5408\u540c\u91cc\u63d0\u4f9bSLA service level agreement\uff0c\u53ef\u80fd\u5305\u62ec\u8fd9\u4e9b\u3002"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'Timer timer = meterRegistry.timerBuilder("my_timer")\n// highlight-next-line\n                .quantiles(WindowSketchQuantiles.quantiles(0.5, 0.95).create())\n                .create();\n\n@RestController\npublic class MyController {\n    // highlight-next-line\n    @Timed(value = "list_people", quantiles = {0.5, 0.95})\n    @GetMapping("/api/people")\n    public List<Person> listPeople() { ... }                \n')),Object(a.b)("p",null,"Histogram Statistics\u662f\u5bf9Timer\u548cSummary\u7c7b\u578b\u901a\u8fc7\u6876\u914d\u7f6e\u6765\u63d0\u4f9b\u989d\u5916\n\u7684\u4fe1\u606f\uff0c\u6bd4\u5982\u4e0d\u540c\u6d88\u606f\u5927\u5c0f\u6876\uff0c1KB\u4ee5\u4e0b\uff0c1KB\u523010KB\uff0c10KB\u4ee5\u4e0a\u4e4b\u7c7b\u7684\uff0c\n\u5728\u6536\u96c6\u7aef\u53ef\u4ee5\u5bf9\u591a\u4e2a\u6e90\u8fc7\u6765\u7684\u6570\u636e\u505a\u6c47\u603b\u5206\u6790"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'DistributionSummary hist = meterRegistry.summaryBuilder("hist")\n        .histogram(CumulativeHistogram.buckets(linear(0, 10, 20)))\n        .create();\n')),Object(a.b)("h3",{id:"cache\u76d1\u63a7"},"Cache\u76d1\u63a7"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Repository\nclass PersonRepository {\n    LoadingCache<String, Person> personBySsn;\n\n    public PersonRepository(MeterRegistry registry) {\n        personBySsn = Meters.monitor(registry, CacheBuilder.newBuilder().recordStats().build(),\n            "people_cache", // base metric name\n            "lookup_key", "ssn" // <- any number of tag key/value pairs\n        );\n    }\n}\n')),Object(a.b)("h3",{id:"data-source\u76d1\u63a7"},"Data Source\u76d1\u63a7"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\nclass MyConfiguration {\n    @Autowired\n    private DataSource dataSource;\n\n    @Autowired\n    private Collection<DataSourcePoolMetadataProvider> metadataProviders;\n\n    @Autowired\n    private Environment env;\n\n    @PostConstruct\n    private void instrumentDataSource() {\n        Meters.monitor(\n            registry,\n            dataSource,\n            metadataProviders,\n            "data_source", // base metric name\n            "stack", env.acceptsProfiles("prod") ? "prod" : "test", // <- any number of tags\n        );\n    }\n}\n')),Object(a.b)("h3",{id:"executorservice\u76d1\u63a7"},"ExecutorService\u76d1\u63a7"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Configuration\nclass MyConfiguration {\n    @Bean("worker_pool")\n    ExecutorService workerPool(MeterRegistry registry) {\n        return Meters.monitor(registry,\n            Executors.newFixedThreadPool(8),\n            "worker_pool",\n            "threads", "8" // any number of tag key value pairs\n        );\n    }\n}\n')),Object(a.b)("h3",{id:"web-server\u76d1\u63a7"},"Web Server\u76d1\u63a7"),Object(a.b)("p",null,"\u5b9a\u4e49management.metrics.web.server.request.autotime.enabled\u4e3atrue\u4f7f\u80fd\u6240\u6709\n\u63a5\u53e3\u7684metric"),Object(a.b)("blockquote",null,Object(a.b)("p",{parentName:"blockquote"},"management.metrics.web.server.request.autotime.enabled=true")),Object(a.b)("h3",{id:"webflux"},"WebFlux"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'RouterFunctionMetrics metrics = new RouterFunctionMetrics(registry);\n\n// OPTIONAL: the default is to record tags on method and status\nmetrics.defaultTags((req, resp) -> { /* custom tags here */ });\n\nRouterFunction<ServerResponse> routes = RouterFunctions\n    .route(GET("/person/").and(accept(APPLICATION_JSON)),\n        request -> ServerResponse.ok().build())\n    .filter(metrics.timer(\n        "http_server_requests", // metric name\n        "instance", MY_INSTANCE_ID // optional tags\n    ));\n\nPrometheusMeterRegistry meterRegistry = new PrometheusMeterRegistry();\nRouterFunction<ServerResponse> route = route(GET("/prometheus"),\n    PrometheusFunctions.scrape(meterRegistry));    \n')),Object(a.b)("h3",{id:"web-client\u76d1\u63a7"},"Web Client\u76d1\u63a7"),Object(a.b)("p",null,"\u4f7f\u80fdmetric\u540eSpring Boot\u4f1a\u901a\u8fc7BeanPostProcessor\u5bf9\u5bf9\u5e94client\u8fdb\u884c\u914d\u7f6e\u3002"),Object(a.b)("h3",{id:"scheduling\u76d1\u63a7"},"Scheduling\u76d1\u63a7"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'@Timed("beep")\n@Timed(value = "long_beep", longTask = true)\n@Scheduled(fixedRate = 1000)\nvoid longBeep() {\n    // calculate the meaning of life, then beep...\n    System.out.println("beep");\n}\n')),Object(a.b)("h2",{id:"\u53c2\u8003\u6587\u6863"},"\u53c2\u8003\u6587\u6863"),Object(a.b)("h3",{id:"spring-metrics"},"spring-metrics"),Object(a.b)("p",null,"\u8fd9\u4e2a\u6587\u6863\u8bb2\u4e86\u5728spring\u4e2d\u5982\u4f55\u4f7f\u7528spring-metrics\u6765\u66b4\u9732metric\u4fe1\u606f\uff0c\u53ef\u80fdactuator-starter\n\u91cc\u5c31\u5229\u7528\u4e86\u8fd9\u4e2a\u5e93\uff0c\u7136\u540e\u5177\u4f53\u8bb2\u4e86\u901a\u8fc7MeterRegistry\u6ce8\u518cmeter\uff0cmeter\u5982\u4f55\u547d\u540d\uff0c\u6bd4\u5982\u4e0d\u8981\n\u5b9a\u4e49\u533a\u5206\u5ea6\u592a\u4f4e\u7684\u540d\u5b57\u50cf\u662fsize\uff0c\u7136\u540e\u5efa\u8bae\u4f7f\u7528'_'\u6765\u5206\u9694\uff0c\u56e0\u4e3a'-'\u548c'.'\u5728\u67d0\u4e9b\u60c5\u51b5\u6709\u7279\u5b9a\u610f\u4e49\n\u4f1a\u5f15\u8d77\u51b2\u7a81\uff0c\u4e4b\u540e\u8bb2\u89e3\u4e86micrometer\u652f\u6301\u7684\u51e0\u79cdmeter\uff0c\u6bd4\u5982Counter,\n",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://docs.spring.io/spring-metrics/docs/current/public/prometheus"}),"https://docs.spring.io/spring-metrics/docs/current/public/prometheus")),Object(a.b)("h3",{id:"monitor-spring-boot-microservices"},"monitor-spring-boot-microservices"),Object(a.b)("p",null,"\u8fd9\u4e2a\u6587\u7ae0\u8bb2\u4e86\u6709\u54ea\u4e9b\u65b9\u9762metric\u9700\u8981\u6536\u96c6\uff0c\u5728spring boot\u4e0b\u5982\u4f55\n\u901a\u8fc7micrometer\u548cactuator\u5bf9\u5916\u63d0\u4f9b\uff0c\u5982\u679c\u901a\u8fc7AOP\u6765\u6536\u96c6\u76f8\u5e94metric\uff0c\n\u8fd8\u63d0\u4f9b\u4e86\u793a\u4f8b\u56fe\u548c\u53c2\u8003\u4ee3\u7801\u3002"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.ibm.com/languages/java/tutorials/monitor-spring-boot-microservices/"}),"https://developer.ibm.com/languages/java/tutorials/monitor-spring-boot-microservices/")),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/IBM/microsvcengineering/blob/master/microsvcframework/src/main/java/com/ibm/dip/microsvcengineering/framework/monitoring/MonitoringAOPConfig.java"}),"https://github.com/IBM/microsvcengineering/blob/master/microsvcframework/src/main/java/com/ibm/dip/microsvcengineering/framework/monitoring/MonitoringAOPConfig.java")),Object(a.b)("h2",{id:"\u57f9\u8bad\u89c6\u9891"},"\u57f9\u8bad\u89c6\u9891"),Object(a.b)("p",null,Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://www.youtube.com/watch?v=k6ghIRyvYD4"}),"Using Metrics to Ensure Quality Applications in Pivotal Platform")))}l.isMDXComponent=!0},230:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},b=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),b=l(r),m=n,d=b["".concat(o,".").concat(m)]||b[m]||p[m]||a;return r?i.a.createElement(d,c(c({ref:t},u),{},{components:r})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,o=new Array(a);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,o[1]=c;for(var u=2;u<a;u++)o[u]=r[u];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);