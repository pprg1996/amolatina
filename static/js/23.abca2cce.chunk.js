(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[23],{134:function(t,e,i){"use strict";i.d(e,"a",(function(){return x}));var n=i(96),o=i.n(n),a=i(0),r=i.n(a),l=i(90),d=i(91);function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function u(t,e){if(null==t)return{};var i,n,o=function(t,e){if(null==t)return{};var i,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||(o[i]=t[i]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)i=a[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(o[i]=t[i])}return o}function p(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function m(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?p(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function v(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function f(t,e){return(f=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function y(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=j(t);if(e){var o=j(this).constructor;i=Reflect.construct(n,arguments,o)}else i=n.apply(this,arguments);return g(this,i)}}function g(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function j(t){return(j=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var x=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&f(t,e)}(c,t);var e,i,n,a=y(c);function c(){return v(this,c),a.apply(this,arguments)}return e=c,n=[{key:"renderLineItem",value:function(t,e){var i;if(r.a.isValidElement(t))i=r.a.cloneElement(t,e);else if(o()(t))i=t(e);else{var n=e.x1,a=e.y1,l=e.x2,c=e.y2,p=e.key,m=u(e,["x1","y1","x2","y2","key"]);i=r.a.createElement("line",s({},Object(d.c)(m),{x1:n,y1:a,x2:l,y2:c,fill:"none",key:p}))}return i}}],(i=[{key:"renderHorizontal",value:function(t){var e=this,i=this.props,n=i.x,o=i.width,a=i.horizontal;if(!t||!t.length)return null;var l=t.map((function(t,i){var r=m(m({},e.props),{},{x1:n,y1:t,x2:n+o,y2:t,key:"line-".concat(i),index:i});return c.renderLineItem(a,r)}));return r.a.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}},{key:"renderVertical",value:function(t){var e=this,i=this.props,n=i.y,o=i.height,a=i.vertical;if(!t||!t.length)return null;var l=t.map((function(t,i){var r=m(m({},e.props),{},{x1:t,y1:n,x2:t,y2:n+o,key:"line-".concat(i),index:i});return c.renderLineItem(a,r)}));return r.a.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}},{key:"renderVerticalStripes",value:function(t){var e=this.props.verticalFill;if(!e||!e.length)return null;var i=this.props,n=i.fillOpacity,o=i.x,a=i.y,l=i.width,d=i.height,c=t.slice().sort((function(t,e){return t-e}));o!==c[0]&&c.unshift(0);var s=c.map((function(t,i){var s=c[i+1]?c[i+1]-t:o+l-t;if(s<=0)return null;var u=i%e.length;return r.a.createElement("rect",{key:"react-".concat(i),x:Math.round(t+o-o),y:a,width:s,height:d,stroke:"none",fill:e[u],fillOpacity:n,className:"recharts-cartesian-grid-bg"})}));return r.a.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},s)}},{key:"renderHorizontalStripes",value:function(t){var e=this.props.horizontalFill;if(!e||!e.length)return null;var i=this.props,n=i.fillOpacity,o=i.x,a=i.y,l=i.width,d=i.height,c=t.slice().sort((function(t,e){return t-e}));a!==c[0]&&c.unshift(0);var s=c.map((function(t,i){var s=c[i+1]?c[i+1]-t:a+d-t;if(s<=0)return null;var u=i%e.length;return r.a.createElement("rect",{key:"react-".concat(i),y:Math.round(t+a-a),x:o,height:s,width:l,stroke:"none",fill:e[u],fillOpacity:n,className:"recharts-cartesian-grid-bg"})}));return r.a.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},s)}},{key:"renderBackground",value:function(){var t=this.props.fill;if(!t||"none"===t)return null;var e=this.props,i=e.fillOpacity,n=e.x,o=e.y,a=e.width,l=e.height;return r.a.createElement("rect",{x:n,y:o,width:a,height:l,stroke:"none",fill:t,fillOpacity:i,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var t=this.props,e=t.x,i=t.y,n=t.width,a=t.height,d=t.horizontal,c=t.vertical,s=t.horizontalCoordinatesGenerator,u=t.verticalCoordinatesGenerator,p=t.xAxis,m=t.yAxis,h=t.offset,v=t.chartWidth,b=t.chartHeight;if(!Object(l.g)(n)||n<=0||!Object(l.g)(a)||a<=0||!Object(l.g)(e)||e!==+e||!Object(l.g)(i)||i!==+i)return null;var f=this.props,y=f.horizontalPoints,g=f.verticalPoints;return y&&y.length||!o()(s)||(y=s({yAxis:m,width:v,height:b,offset:h})),g&&g.length||!o()(u)||(g=u({xAxis:p,width:v,height:b,offset:h})),r.a.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),d&&this.renderHorizontal(y),c&&this.renderVertical(g),d&&this.renderHorizontalStripes(y),c&&this.renderVerticalStripes(g))}}])&&b(e.prototype,i),n&&b(e,n),c}(a.PureComponent);x.displayName="CartesianGrid",x.defaultProps={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]}},443:function(t,e,i){"use strict";i.r(e);var n,o=i(11),a=i(6),r=i(1),l=i.n(r),d=i(8),c=i(3),s=i(94),u=i(0),p=i.n(u),m=i(52),h=i(43),v=i(29),b=i(10),f=i(92),y=i(7),g=i.n(y),j=i(199),x=i(12),w=i(119),O=i(100),_=i(438),C=i(437),S=i(432),I=i(134),z=i(410),D=i(411),M=i(430),L=i(376),N=i(99),R=i(2),k=Object(c.d)(m.a).withConfig({displayName:"ModalListClients__CoronaSvg",componentId:"sc-1sozmlr-0"})(["",""],v.a),P=function(){var t=Object(d.a)(l.a.mark((function t(e,i){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==i){t.next=2;break}return t.abrupt("return");case 2:return t.t0=b.W,t.next=5,Object(b.r)("/clients/info?id=".concat(i));case 5:return t.t1=t.sent.data,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}();function T(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(t.getUTCFullYear(),"-").concat(t.getUTCMonth()+1<10?"0".concat(t.getUTCMonth()+1):t.getUTCMonth()+1,"-").concat(t.getUTCDate()<10?"0".concat(t.getUTCDate()):t.getUTCDate())}function E(t,e){return t.setUTCDate(t.getUTCDate()+e),t}var W=c.d.span.withConfig({displayName:"ModalListClients__Id",componentId:"sc-1sozmlr-1"})(["@media (min-width:2560px){font-size:0.75rem !important;}@media (min-height:1000px) and (min-width:651px) and (max-width:767px){font-size:0.975rem !important;}@media (min-height:1000px) and (min-width:451px) and (max-width:650px){font-size:0.75rem !important;}@media (min-width:651px) and (max-width:767px) and (max-height:999px){font-size:0.8rem !important;}@media (min-width:401px) and (max-width:650px) and (max-height:999px){font-size:0.7rem !important;}@media (max-width:400px) and (max-height:999px){font-size:0.4rem !important;}",""],{fontSize:"0.35rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",textAlign:"center","@media (min-width: 1024px)":{fontSize:"0.4rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{fontSize:"0.6rem"}}),B=Object(c.d)(W).withConfig({displayName:"ModalListClients___StyledId",componentId:"sc-1sozmlr-2"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(5, 150, 105, var(--tw-bg-opacity))",borderRadius:"1rem",width:"6em"}),F=function(){var t=Object(d.a)(l.a.mark((function t(e,i,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.r)("/profiles/list-clients-day?profileId=".concat(i,"&date=").concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,i,n){return t.apply(this,arguments)}}(),A=function(){var t=Object(d.a)(l.a.mark((function t(e,i,n,o,a,r,d,c){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.r)("/profiles/graphics-clients-day?profileId=".concat(i,"&group=").concat(n,"&shift=").concat(o,"&fromDate=").concat(a,"&toDate=").concat(r,"&month=").concat(d,"&year=").concat(c));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,i,n,o,a,r,l,d){return t.apply(this,arguments)}}(),Y=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv",componentId:"sc-1sozmlr-3"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"60vw",height:"75vh",padding:"1.25rem"}),V=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv2",componentId:"sc-1sozmlr-4"})({height:"100%",width:"100%"}),U=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv3",componentId:"sc-1sozmlr-5"})({display:"flex",justifyContent:"center"}),H=Object(c.d)(O.a).withConfig({displayName:"ModalListClients___StyledToggleGroup",componentId:"sc-1sozmlr-6"})({alignSelf:"center"}),G=Object(c.d)(O.b).withConfig({displayName:"ModalListClients___StyledToggleGroupItem",componentId:"sc-1sozmlr-7"})(["",""],(function(t){return t._css2})),J=Object(c.d)(O.b).withConfig({displayName:"ModalListClients___StyledToggleGroupItem2",componentId:"sc-1sozmlr-8"})(["",""],(function(t){return t._css3})),K=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv4",componentId:"sc-1sozmlr-9"})({width:"100%",height:"100%"}),Q=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv5",componentId:"sc-1sozmlr-10"})({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem"}),X=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv6",componentId:"sc-1sozmlr-11"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.5rem","@media (min-width: 1024px)":{fontSize:"0.95rem"}}),q=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv7",componentId:"sc-1sozmlr-12"})({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}),Z=Object(c.d)(w.a).withConfig({displayName:"ModalListClients___StyledLeftSvg",componentId:"sc-1sozmlr-13"})({width:"1rem",height:"1rem"}),$=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput",componentId:"sc-1sozmlr-14"})({"--tw-text-opacity":"1",color:"rgba(23, 23, 28, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),tt=Object(c.d)(w.a).withConfig({displayName:"ModalListClients___StyledLeftSvg2",componentId:"sc-1sozmlr-15"})({width:"1rem",height:"1rem"}),et=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput2",componentId:"sc-1sozmlr-16"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),it=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv8",componentId:"sc-1sozmlr-17"})(["",""],(function(t){return t._css4})),nt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv9",componentId:"sc-1sozmlr-18"})({display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem"}),ot=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect",componentId:"sc-1sozmlr-19"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),at=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect2",componentId:"sc-1sozmlr-20"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),rt=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput3",componentId:"sc-1sozmlr-21"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),lt=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput4",componentId:"sc-1sozmlr-22"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),dt=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput5",componentId:"sc-1sozmlr-23"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),ct=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect3",componentId:"sc-1sozmlr-24"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),st=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect4",componentId:"sc-1sozmlr-25"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),ut=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect5",componentId:"sc-1sozmlr-26"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),pt=Object(c.d)("button").withConfig({displayName:"ModalListClients___StyledButton",componentId:"sc-1sozmlr-27"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(51, 70, 255, var(--tw-bg-opacity))",borderRadius:"1rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",height:"auto",width:"80px"}),mt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv10",componentId:"sc-1sozmlr-28"})({height:"100%",position:"relative"}),ht=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv11",componentId:"sc-1sozmlr-29"})({flexGrow:"1",width:"100%",height:"93%"}),vt=function(t){var e=t.profileId,i=t.setViewData,n=t.setDayReport,o=x.b.getQueryData(["turnos"]),r=p.a.useState((new Date).getFullYear()+"-"+Object(b.R)((new Date).getMonth()+1)+"-01T00:00:00"),l=Object(a.a)(r,2),d=l[0],c=l[1],s=p.a.useState("dateMonth"),u=Object(a.a)(s,2),m=u[0],v=u[1],f=p.a.useState(-1),y=Object(a.a)(f,2),g=y[0],j=y[1],w=new Date;w.setUTCMonth(w.getUTCMonth()+1,0);var O=p.a.useState(w.getFullYear()+"-"+Object(b.R)(w.getMonth()+1)+"-"+Object(b.R)(w.getDate())+"T00:00:00"),N=Object(a.a)(O,2),k=N[0],P=N[1],T=p.a.useState((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1),E=Object(a.a)(T,2),W=E[0],B=E[1],F=p.a.useState((new Date).getFullYear()),Y=Object(a.a)(F,2),V=Y[0],U=Y[1],H=Object(x.d)(["clientGraphicsDay",e,m,g,d,k,W,V],A),G=H.data,J=H.status,K=null===G||void 0===G?void 0:G.map((function(t){var e=t.day,i=t.count;return{day:e,count:i,total:i}}));return Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(nt,{children:[Object(R.jsxs)("label",{children:["Turno:"," ",Object(R.jsxs)(ot,{id:"shift-puntos",defaultValue:g,children:[Object(R.jsx)("option",{value:-1,children:"Todos"}),o.map((function(t){return Object(R.jsx)("option",{value:t.id,children:t.title})}))]})]}),Object(R.jsxs)("label",{children:["Agrupar:"," ",Object(R.jsxs)(at,{value:m,onChange:function(t){"Tiempo"===t.target.value?c(Object(b.s)(new Date)):c((new Date).getFullYear()+"-"+Object(b.R)((new Date).getMonth()+1)+"-01T00:00:00"),v(t.target.value)},children:[Object(R.jsx)("option",{value:"hours",children:"Horas"}),Object(R.jsx)("option",{value:"dateRange",children:"Rango de fechas"}),Object(R.jsx)("option",{value:"dateMonth",children:"Rango por mes"}),Object(R.jsx)("option",{value:"dateYear",children:"Rango por a\xf1o"}),Object(R.jsx)("option",{value:"AllYears",children:"A\xf1os"}),Object(R.jsx)("option",{value:"Tiempo",children:"Diario"})]})]}),"Tiempo"===m?Object(R.jsxs)("label",{children:["Dia:",Object(R.jsx)(rt,{type:"date",id:"list-DateRange-From",defaultValue:d})]}):null,"hours"===m||"dateRange"===m?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("label",{children:["Desde:",Object(R.jsx)(lt,{type:"datetime-local",id:"list-DateRange-From",defaultValue:d})]}),Object(R.jsxs)("label",{children:["Hasta:",Object(R.jsx)(dt,{type:"datetime-local",id:"list-DateRange-To",defaultValue:k})]})]}):null,"dateMonth"===m?Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)("label",{children:["Mes:",Object(R.jsxs)(ct,{defaultValue:W,id:"list-Month",children:[Object(R.jsx)("option",{value:"01",children:"Enero"}),Object(R.jsx)("option",{value:"02",children:"Febrero"}),Object(R.jsx)("option",{value:"03",children:"Marzo"}),Object(R.jsx)("option",{value:"04",children:"Abril"}),Object(R.jsx)("option",{value:"05",children:"Mayo"}),Object(R.jsx)("option",{value:"06",children:"Junio"}),Object(R.jsx)("option",{value:"07",children:"Julio"}),Object(R.jsx)("option",{value:"08",children:"Agosto"}),Object(R.jsx)("option",{value:"09",children:"Septiembre"}),Object(R.jsx)("option",{value:"10",children:"Octubre"}),Object(R.jsx)("option",{value:"11",children:"Noviembre"}),Object(R.jsx)("option",{value:"12",children:"Diciembre"})]})]}),Object(R.jsxs)("label",{children:["A\xf1o:",Object(R.jsxs)(st,{defaultValue:V,id:"list-Year",children:[Object(R.jsx)("option",{value:"2020",children:"2020"}),Object(R.jsx)("option",{value:"2021",children:"2021"}),Object(R.jsx)("option",{value:"2022",children:"2022"}),Object(R.jsx)("option",{value:"2023",children:"2023"}),Object(R.jsx)("option",{value:"2024",children:"2024"}),Object(R.jsx)("option",{value:"2025",children:"2025"}),Object(R.jsx)("option",{value:"2026",children:"2026"})]})]})]}):null,"dateYear"===m?Object(R.jsxs)("label",{children:["A\xf1o:",Object(R.jsxs)(ut,{id:"list-Year",defaultValue:V,children:[Object(R.jsx)("option",{value:"2020",children:"2020"}),Object(R.jsx)("option",{value:"2021",children:"2021"}),Object(R.jsx)("option",{value:"2022",children:"2022"}),Object(R.jsx)("option",{value:"2023",children:"2023"}),Object(R.jsx)("option",{value:"2024",children:"2024"}),Object(R.jsx)("option",{value:"2025",children:"2025"}),Object(R.jsx)("option",{value:"2026",children:"2026"})]})]}):null,Object(R.jsx)(pt,{onClick:function(){var t,e,i,n,o;void 0!==(null===(t=document.getElementById("list-Year"))||void 0===t?void 0:t.value)&&U(document.getElementById("list-Year").value),void 0!==(null===(e=document.getElementById("list-Month"))||void 0===e?void 0:e.value)&&B(document.getElementById("list-Month").value),void 0!==(null===(i=document.getElementById("list-DateRange-From"))||void 0===i?void 0:i.value)&&c(document.getElementById("list-DateRange-From").value),void 0!==(null===(n=document.getElementById("list-DateRange-To"))||void 0===n?void 0:n.value)&&P(document.getElementById("list-DateRange-To").value),void 0!==(null===(o=document.getElementById("shift-puntos"))||void 0===o?void 0:o.value)&&j(document.getElementById("shift-puntos").value)},children:"Calcular"})]}),Object(R.jsx)(mt,{children:"loading"===J?Object(R.jsx)(h.a,{}):Object(R.jsx)(R.Fragment,{children:Object(R.jsx)(ht,{children:Object(R.jsx)(_.a,{children:Object(R.jsxs)(C.a,{data:K,onClick:function(t){if(t)if("dateRange"===m||"dateMonth"===m){if(null===t||!t.activePayload[0].payload.day)return;i("lista"),n(t.activePayload[0].payload.day)}else if("dateYear"===m){if(null===t||!t.activePayload[0].payload.day)return;var e;"Enero"===t.activePayload[0].payload.day?e=1:"Febrero"===t.activePayload[0].payload.day||"Febrero"===t.activePayload[0].payload.day?e=2:"Marzo"===t.activePayload[0].payload.day?e=3:"Abril"===t.activePayload[0].payload.day?e=4:"Mayo"===t.activePayload[0].payload.day?e=5:"Junio"===t.activePayload[0].payload.day?e=6:"Julio"===t.activePayload[0].payload.day?e=7:"Agosto"===t.activePayload[0].payload.day?e=8:"Septiembre"===t.activePayload[0].payload.day?e=9:"Octubre"===t.activePayload[0].payload.day?e=10:"Noviembre"===t.activePayload[0].payload.day?e=11:"Diciembre"===t.activePayload[0].payload.day&&(e=12),B(e),v("dateMonth")}else if("AllYears"===m){if(null===t||!t.activePayload[0].payload.day)return;U(t.activePayload[0].payload.day),v("dateYear")}},children:[Object(R.jsx)(S.a,{formatter:function(t,e){var i;return[t,null===(i=[{name:"Clientes",value:"count"}])||void 0===i?void 0:i.find((function(t){return t.value===e})).name]},contentStyle:{backgroundColor:"#333333"}}),Object(R.jsx)(I.a,{strokeDasharray:"3 3"}),Object(R.jsx)(z.a,{dataKey:"day"}),Object(R.jsx)(D.a,{yAxisId:"left-axis",orientation:"left"}),Object(R.jsx)(D.a,{yAxisId:"right-axis",orientation:"right"}),Object(R.jsx)(M.a,{dataKey:"count",yAxisId:"right-axis",fill:"#cbd5e1",isAnimationActive:!1,children:Object(R.jsx)(L.a,{dataKey:"total",position:"top",style:{fill:"white"}})})]})})})})})]})},bt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv12",componentId:"sc-1sozmlr-30"})({width:"100%",position:"relative"}),ft=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv13",componentId:"sc-1sozmlr-31"})({borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(107, 114, 128, var(--tw-border-opacity))",borderRadius:"20px",alignItems:"center"}),yt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv14",componentId:"sc-1sozmlr-32"})({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",padding:"0.5rem"}),gt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv15",componentId:"sc-1sozmlr-33"})({display:"flex",width:"100%",minHeight:"60px"}),jt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv16",componentId:"sc-1sozmlr-34"})({display:"flex",gap:"1rem"}),xt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv17",componentId:"sc-1sozmlr-35"})(["",""],(function(t){return t._css5})),wt=Object(c.d)("button").withConfig({displayName:"ModalListClients___StyledButton2",componentId:"sc-1sozmlr-36"})(["",""],(function(t){return t._css6})),Ot=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv18",componentId:"sc-1sozmlr-37"})({position:"relative",display:"flex"}),_t=Object(c.d)("img").withConfig({displayName:"ModalListClients___StyledImg",componentId:"sc-1sozmlr-38"})({width:"4em",height:"4em",borderRadius:"9999px",objectFit:"cover"}),Ct=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv19",componentId:"sc-1sozmlr-39"})(["",""],(function(t){return t._css7})),St=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv20",componentId:"sc-1sozmlr-40"})(["",""],(function(t){return t._css8})),It=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv21",componentId:"sc-1sozmlr-41"})(["",""],(function(t){return t._css9})),zt=Object(c.d)(N.a).withConfig({displayName:"ModalListClients___StyledContextMenu",componentId:"sc-1sozmlr-42"})(["",""],(function(t){return t._css10})),Dt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv22",componentId:"sc-1sozmlr-43"})({display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"}),Mt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv23",componentId:"sc-1sozmlr-44"})({position:"relative",display:"flex"}),Lt=Object(c.d)("img").withConfig({displayName:"ModalListClients___StyledImg2",componentId:"sc-1sozmlr-45"})({width:"4em",height:"4em",borderRadius:"9999px",objectFit:"cover"}),Nt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv24",componentId:"sc-1sozmlr-46"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.5rem","@media (min-width: 1024px)":{fontSize:"0.95rem"}}),Rt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv25",componentId:"sc-1sozmlr-47"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.5rem","@media (min-width: 1024px)":{fontSize:"0.95rem"}}),kt=function(t){var e,i,r,s,u,m,v,y,w,O,_,C,S,I,z,D,M,L,T,E,F,A=t.client,Y=t.typeWidth,V=t.profileId,U=t.setShowListClients,H=t.setShowChat,G=p.a.useState(0),J=Object(a.a)(G,2),K=J[0],Q=J[1],X=p.a.useState([]),q=Object(a.a)(X,2),Z=q[0],$=q[1],tt=p.a.useState(0),et=Object(a.a)(tt,2),it=et[0],nt=et[1],ot=Object(x.d)(["cliente-ListC",null===A||void 0===A?void 0:A.client_id,K],P),at=ot.data,rt=ot.status,lt=+g.a.get("id");p.a.useEffect((function(){var t,e;if("md"===Y||"sm"===Y||""===Y)$(Object(b.P)(k,4,8,11,null!==(t=null===A||void 0===A||null===(e=A.extradata)||void 0===e?void 0:e.crowns)&&void 0!==t?t:0,11.25));else if("lg"===Y){var i,n;$(Object(b.P)(k,5,13,16,null!==(i=null===A||void 0===A||null===(n=A.extradata)||void 0===n?void 0:n.crowns)&&void 0!==i?i:0,11.25))}else if("xl"===Y){var o,a;$(Object(b.P)(k,10,21,27,null!==(o=null===A||void 0===A||null===(a=A.extradata)||void 0===a?void 0:a.crowns)&&void 0!==o?o:0,11.25))}else if("2xl"===Y){var r,l;$(Object(b.P)(k,10,22,28,null!==(r=null===A||void 0===A||null===(l=A.extradata)||void 0===l?void 0:l.crowns)&&void 0!==r?r:0,11.25))}else{var d,c;$(Object(b.P)(k,12,32,42,null!==(d=null===A||void 0===A||null===(c=A.extradata)||void 0===c?void 0:c.crowns)&&void 0!==d?d:0,11.25))}}),[null===A||void 0===A||null===(e=A.extradata)||void 0===e?void 0:e.crowns,Y]),p.a.useEffect((function(){var t,e,i;if(null===at||void 0===at||null===(t=at.last_copy)||void 0===t?void 0:t.timestamp){var n=new Date(null!==(e=null===at||void 0===at||null===(i=at.last_copy)||void 0===i?void 0:i.timestamp)&&void 0!==e?e:""),o=setInterval((function(){n&&nt(Date.now()-Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()))}),333);return function(){return clearInterval(o)}}}),[it,null===at||void 0===at||null===(i=at.last_copy)||void 0===i?void 0:i.timestamp]);var dt=Object(j.a)(it);return Object(R.jsx)(bt,{children:Object(R.jsx)(ft,{children:Object(R.jsx)(yt,{children:"loading"===rt?Object(R.jsx)(gt,{children:Object(R.jsx)(h.a,{pixelSize:32})}):Object(R.jsxs)(R.Fragment,{children:[Object(R.jsxs)(jt,{children:[Object(R.jsx)(xt,{_css5:[{position:"relative",top:"0px",right:"0px",bottom:"0px",left:"0px"},".react-contextmenu{ left: 50px !important; }"],children:Object(R.jsxs)(N.b,{id:"clientList"+(null===A||void 0===A?void 0:A.client_id),children:[Object(R.jsxs)(wt,{type:"button",onClick:function(){var t=Object(d.a)(l.a.mark((function t(e){var i,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.currentTarget).disabled){t.next=8;break}return i.disabled=!0,navigator.clipboard.writeText(null===A||void 0===A||null===(n=A.extradata)||void 0===n?void 0:n.amolatina_id),t.next=6,Object(b.r)("/agency/history",{method:"POST",body:JSON.stringify({profile_id:-1,user_id:lt,client_id:null===A||void 0===A?void 0:A.client_id,action:"copy"}),headers:{"content-type":"application/json"}});case 6:Q(K+1),setTimeout((function(){return i.disabled=!1}),1e4);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_css6:[{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},Object(c.c)(n||(n=Object(o.a)(["\n                          cursor: pointer;\n                          transition: transform 0.12s linear;\n                          :hover {\n                            transform: translateY(-6px);\n                          }\n                          :active {\n                            transform: translateY(3px);\n                          }\n                        "])))],children:[Object(R.jsxs)(Ot,{children:[Z,Object(R.jsx)(_t,{src:null!==(r=null===A||void 0===A||null===(s=A.extradata)||void 0===s?void 0:s.photo)&&void 0!==r?r:f.a,onError:function(t){var e=t.currentTarget;e.onerror=null,e.src=f.a},alt:"..."}),Object(R.jsx)(Ct,{_css7:[{position:"absolute",bottom:"-10px",right:"-9px"},"@media (min-width: 2560px) { bottom: -10px !important; right: -10px !important; }"],children:Object(R.jsxs)(St,{_css8:[{display:"flex",alignItems:"center",justifyContent:"center","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))",gap:"0.25rem",paddingLeft:"0.25rem",paddingRight:"0.25rem",minWidth:"1rem","@media (min-width: 768px)":{width:"2rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"2.9rem",borderRadius:"0.5rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}},"@media (min-width: 2560px) { padding-right: 0.5rem  !important; padding-left: 0.5rem  !important; width: 5rem !important;  }","@media (min-height: 1000px) and (max-width: 767px) { padding-right: 0.5rem  !important; padding-left: 0.5rem  !important; border-radius: 1rem !important; width: 5rem !important; }","@media (max-height: 999px) and (max-width: 767px) { padding-right: 0.5rem  !important; padding-left: 0.5rem  !important; border-radius: 1rem !important; width: 5rem !important; }"],children:[Object(R.jsx)(It,{_css9:[{fontSize:"0.2rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700","@media (min-width: 1024px)":{fontSize:"0.25rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{fontSize:"0.5rem"}},"@media (min-width: 2560px) { font-size: 0.75rem !important; line-height: 1rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { font-size: 0.75rem !important; line-height: 1rem !important; }","@media (max-height: 999px) and (max-width: 767px) { font-size: 0.375rem !important;  }"],children:isNaN(Math.round(((new Date).getTime()-new Date(null!==(u=null===A||void 0===A||null===(m=A.extradata)||void 0===m?void 0:m.first_point)&&void 0!==u?u:"").getTime())/864e5))?0:null!==(v=Math.round(((new Date).getTime()-new Date(null!==(y=null===A||void 0===A||null===(w=A.extradata)||void 0===w?void 0:w.first_point)&&void 0!==y?y:"").getTime())/864e5))&&void 0!==v?v:0}),Object(R.jsx)(b.f,{country:null===A||void 0===A?void 0:A.extradata.country})]})})]}),Object(R.jsx)(W,{title:null===A||void 0===A||null===(O=A.extradata)||void 0===O?void 0:O.name,children:null===A||void 0===A||null===(_=A.extradata)||void 0===_?void 0:_.name})]}),Object(R.jsx)(zt,{id:"clientList"+(null===A||void 0===A?void 0:A.client_id),_css10:[{"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}},"@media (min-width: 2560px) { font-size: 1rem !important; }"],children:Object(R.jsx)(N.c,{onClick:function(){U({show:!1,profileId:null}),H({show:!0,clientid:null===A||void 0===A?void 0:A.client_id,ProfileChat:V,isBot24:!1})},children:"Chat"})})]})}),(null===at||void 0===at||null===(C=at.last_copy)||void 0===C?void 0:C.userId)&&-1!==(null===at||void 0===at||null===(S=at.last_copy)||void 0===S?void 0:S.userId)?Object(R.jsxs)(Dt,{children:[Object(R.jsx)(Mt,{children:Object(R.jsx)(Lt,{src:null!==(I=null===at||void 0===at||null===(z=at.last_copy)||void 0===z?void 0:z.foto)&&void 0!==I?I:f.a,onError:function(t){var e=t.currentTarget;e.onerror=null,e.src=f.a},alt:"..."})}),Object(R.jsx)(B,{title:null!==(D=null===at||void 0===at||null===(M=at.last_copy)||void 0===M?void 0:M.nombre)&&void 0!==D?D:"Cliente",children:null!==(L=null===at||void 0===at||null===(T=at.last_copy)||void 0===T?void 0:T.nombre)&&void 0!==L?L:"Cliente"})]}):null]}),(null===at||void 0===at||null===(E=at.last_copy)||void 0===E?void 0:E.userId)&&-1!==(null===at||void 0===at||null===(F=at.last_copy)||void 0===F?void 0:F.userId)&&"00"!==dt?Object(R.jsxs)(Nt,{children:["Copiado hace ",dt]}):null,Object(R.jsxs)(Rt,{children:[null===A||void 0===A?void 0:A.cant," Punteadas"]})]})})})},"abc".concat(null===A||void 0===A?void 0:A.client_id))};e.default=function(t){var e,i=t.setShowListClients,n=t.profileId,o=t.setShowChat,r=p.a.useState(T()),l=Object(a.a)(r,2),d=l[0],c=l[1],u=p.a.useState(""),m=Object(a.a)(u,2),h=m[0],b=m[1],f=p.a.useState("lista"),y=Object(a.a)(f,2),g=y[0],j=y[1],w=Object(x.d)(["clientPointsDay",n,d],F).data,O=p.a.useState(window.innerWidth>=2560?"4k":window.innerWidth>=1536?"2xl":window.innerWidth>=1280?"xl":window.innerWidth>=1024?"lg":window.innerWidth>=768?"md":window.innerWidth<768&&window.innerHeight>=1e3?"4k":"sm"),_=Object(a.a)(O,2),C=_[0],S=_[1];p.a.useEffect((function(){var t=function(){window.innerWidth>=2560?S("4k"):window.innerWidth>=1536?S("2xl"):window.innerWidth>=1280?S("xl"):window.innerWidth>=1024?S("lg"):window.innerWidth>=768?S("md"):window.innerWidth<768&&window.innerHeight>=1e3?S("4k"):S("sm")};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);var I=null===w||void 0===w?void 0:w.filter((function(t){var e,i,n;return null===t||void 0===t||null===(e=t.extradata)||void 0===e||null===(i=e.name)||void 0===i||null===(n=i.toLowerCase())||void 0===n?void 0:n.includes(null===h||void 0===h?void 0:h.toLowerCase())}));return Object(R.jsx)(s.a,{setShowModal:i,children:Object(R.jsx)(Y,{children:Object(R.jsxs)(V,{children:[Object(R.jsx)(U,{children:Object(R.jsxs)(H,{type:"single",value:g,onValueChange:function(t){t&&j(t)},children:[Object(R.jsx)(G,{value:"lista",_css2:[{paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",borderTopLeftRadius:"1rem",borderBottomLeftRadius:"1rem",borderWidth:"1px",borderColor:"#4c4c3f",borderStyle:"solid"},"lista"===g?{"--tw-bg-opacity":"1",backgroundColor:"rgba(76, 76, 63, var(--tw-bg-opacity))"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))"}],children:"Lista"}),Object(R.jsx)(J,{value:"grafica",_css3:[{paddingLeft:"0.75rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",borderWidth:"1px",borderTopRightRadius:"1rem",borderBottomRightRadius:"1rem",borderColor:"#4c4c3f",borderStyle:"solid"},"grafica"===g?{"--tw-bg-opacity":"1",backgroundColor:"rgba(76, 76, 63, var(--tw-bg-opacity))"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))"}],children:"Grafica"})]})}),"lista"===g?Object(R.jsxs)(K,{children:[Object(R.jsxs)(Q,{children:[Object(R.jsxs)(X,{children:[null!==(e=null===I||void 0===I?void 0:I.length)&&void 0!==e?e:0," Clientes"]}),Object(R.jsxs)(q,{children:[Object(R.jsx)("button",{type:"button",onClick:function(){var t=new Date(d);c(T(E(t,-1)))},children:Object(R.jsx)(Z,{transform:"scale(1,1)"})}),Object(R.jsx)("label",{children:Object(R.jsx)($,{type:"date",value:d,onChange:function(t){c(t.target.value)}})}),Object(R.jsx)("button",{type:"button",onClick:function(){var t=new Date(d);c(T(E(t,1)))},children:Object(R.jsx)(tt,{transform:"scale(-1,1)"})})]}),Object(R.jsx)(et,{name:"idInput",placeholder:"Buscar",value:h,onChange:function(t){return b(t.target.value)}})]}),Object(R.jsx)(it,{_css4:[{display:"flex",flexDirection:"column",overflowX:"hidden",height:"90%",width:"100%",padding:"0.5rem",gap:"0.5rem"},v.b],children:null===I||void 0===I?void 0:I.map((function(t){return Object(R.jsx)(kt,{client:t,typeWidth:C,profileId:n,setShowListClients:i,setShowChat:o})}))})]}):null,"grafica"===g?Object(R.jsx)(vt,{profileId:n,setViewData:j,setDayReport:c}):null]})})})}}}]);