(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[21],{133:function(t,e,i){"use strict";i.d(e,"a",(function(){return j}));var n=i(95),r=i.n(n),o=i(0),a=i.n(o),l=i(90),d=i(91);function c(t){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"===typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function s(){return(s=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)Object.prototype.hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t}).apply(this,arguments)}function p(t,e){if(null==t)return{};var i,n,r=function(t,e){if(null==t)return{};var i,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||(r[i]=t[i]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)i=o[n],e.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(t,i)&&(r[i]=t[i])}return r}function m(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function u(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?m(Object(i),!0).forEach((function(e){h(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):m(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function h(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function f(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function b(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function g(t,e){return(g=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function v(t){var e=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var i,n=y(t);if(e){var r=y(this).constructor;i=Reflect.construct(n,arguments,r)}else i=n.apply(this,arguments);return x(this,i)}}function x(t,e){return!e||"object"!==c(e)&&"function"!==typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}var j=function(t){!function(t,e){if("function"!==typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&g(t,e)}(c,t);var e,i,n,o=v(c);function c(){return f(this,c),o.apply(this,arguments)}return e=c,n=[{key:"renderLineItem",value:function(t,e){var i;if(a.a.isValidElement(t))i=a.a.cloneElement(t,e);else if(r()(t))i=t(e);else{var n=e.x1,o=e.y1,l=e.x2,c=e.y2,m=e.key,u=p(e,["x1","y1","x2","y2","key"]);i=a.a.createElement("line",s({},Object(d.c)(u),{x1:n,y1:o,x2:l,y2:c,fill:"none",key:m}))}return i}}],(i=[{key:"renderHorizontal",value:function(t){var e=this,i=this.props,n=i.x,r=i.width,o=i.horizontal;if(!t||!t.length)return null;var l=t.map((function(t,i){var a=u(u({},e.props),{},{x1:n,y1:t,x2:n+r,y2:t,key:"line-".concat(i),index:i});return c.renderLineItem(o,a)}));return a.a.createElement("g",{className:"recharts-cartesian-grid-horizontal"},l)}},{key:"renderVertical",value:function(t){var e=this,i=this.props,n=i.y,r=i.height,o=i.vertical;if(!t||!t.length)return null;var l=t.map((function(t,i){var a=u(u({},e.props),{},{x1:t,y1:n,x2:t,y2:n+r,key:"line-".concat(i),index:i});return c.renderLineItem(o,a)}));return a.a.createElement("g",{className:"recharts-cartesian-grid-vertical"},l)}},{key:"renderVerticalStripes",value:function(t){var e=this.props.verticalFill;if(!e||!e.length)return null;var i=this.props,n=i.fillOpacity,r=i.x,o=i.y,l=i.width,d=i.height,c=t.slice().sort((function(t,e){return t-e}));r!==c[0]&&c.unshift(0);var s=c.map((function(t,i){var s=c[i+1]?c[i+1]-t:r+l-t;if(s<=0)return null;var p=i%e.length;return a.a.createElement("rect",{key:"react-".concat(i),x:Math.round(t+r-r),y:o,width:s,height:d,stroke:"none",fill:e[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})}));return a.a.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},s)}},{key:"renderHorizontalStripes",value:function(t){var e=this.props.horizontalFill;if(!e||!e.length)return null;var i=this.props,n=i.fillOpacity,r=i.x,o=i.y,l=i.width,d=i.height,c=t.slice().sort((function(t,e){return t-e}));o!==c[0]&&c.unshift(0);var s=c.map((function(t,i){var s=c[i+1]?c[i+1]-t:o+d-t;if(s<=0)return null;var p=i%e.length;return a.a.createElement("rect",{key:"react-".concat(i),y:Math.round(t+o-o),x:r,height:s,width:l,stroke:"none",fill:e[p],fillOpacity:n,className:"recharts-cartesian-grid-bg"})}));return a.a.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},s)}},{key:"renderBackground",value:function(){var t=this.props.fill;if(!t||"none"===t)return null;var e=this.props,i=e.fillOpacity,n=e.x,r=e.y,o=e.width,l=e.height;return a.a.createElement("rect",{x:n,y:r,width:o,height:l,stroke:"none",fill:t,fillOpacity:i,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var t=this.props,e=t.x,i=t.y,n=t.width,o=t.height,d=t.horizontal,c=t.vertical,s=t.horizontalCoordinatesGenerator,p=t.verticalCoordinatesGenerator,m=t.xAxis,u=t.yAxis,h=t.offset,f=t.chartWidth,b=t.chartHeight;if(!Object(l.g)(n)||n<=0||!Object(l.g)(o)||o<=0||!Object(l.g)(e)||e!==+e||!Object(l.g)(i)||i!==+i)return null;var g=this.props,v=g.horizontalPoints,x=g.verticalPoints;return v&&v.length||!r()(s)||(v=s({yAxis:u,width:f,height:b,offset:h})),x&&x.length||!r()(p)||(x=p({xAxis:m,width:f,height:b,offset:h})),a.a.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),d&&this.renderHorizontal(v),c&&this.renderVertical(x),d&&this.renderHorizontalStripes(v),c&&this.renderVerticalStripes(x))}}])&&b(e.prototype,i),n&&b(e,n),c}(o.PureComponent);j.displayName="CartesianGrid",j.defaultProps={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]}},437:function(t,e,i){"use strict";i.r(e);var n,r=i(12),o=i(6),a=i(2),l=i.n(a),d=i(7),c=i(3),s=i(89),p=i(0),m=i.n(p),u=i(51),h=i(43),f=i(29),b=i(8),g=i(93),v=i(9),x=i.n(v),y=i(195),j=i(11),w=i(132),O=i(98),_=i(431),C=i(432),S=i(426),z=i(133),I=i(408),L=i(409),M=i(424),k=i(370),D=i(112),N=i(1),R=Object(c.d)(u.a).withConfig({displayName:"ModalListClients__CoronaSvg",componentId:"sc-1sozmlr-0"})(["",""],f.a),T=function(){var t=Object(d.a)(l.a.mark((function t(e,i){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(null!==i){t.next=2;break}return t.abrupt("return");case 2:return t.t0=b.renombrarPropiedadesAnidadas,t.next=5,Object(b.customFetch)("/clients/info?id=".concat(i));case 5:return t.t1=t.sent.data,t.abrupt("return",(0,t.t0)(t.t1));case 7:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}();function P(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:new Date;return"".concat(t.getUTCFullYear(),"-").concat(t.getUTCMonth()+1<10?"0".concat(t.getUTCMonth()+1):t.getUTCMonth()+1,"-").concat(t.getUTCDate()<10?"0".concat(t.getUTCDate()):t.getUTCDate())}function E(t,e){return t.setUTCDate(t.getUTCDate()+e),t}var W=c.d.span.withConfig({displayName:"ModalListClients__Id",componentId:"sc-1sozmlr-1"})(["@media (min-width:2560px){font-size:0.75rem !important;}@media (min-height:1000px) and (min-width:651px) and (max-width:767px){font-size:0.975rem !important;}@media (min-height:1000px) and (min-width:451px) and (max-width:650px){font-size:0.75rem !important;}@media (min-width:651px) and (max-width:767px) and (max-height:999px){font-size:0.8rem !important;}@media (min-width:401px) and (max-width:650px) and (max-height:999px){font-size:0.7rem !important;}@media (max-width:400px) and (max-height:999px){font-size:0.4rem !important;}",""],{fontSize:"0.35rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"8em",textOverflow:"ellipsis",overflow:"hidden",whiteSpace:"nowrap",textAlign:"center","@media (min-width: 1024px)":{fontSize:"0.4rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{fontSize:"0.6rem"}}),F=Object(c.d)(W).withConfig({displayName:"ModalListClients___StyledId",componentId:"sc-1sozmlr-2"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(5, 150, 105, var(--tw-bg-opacity))",borderRadius:"1rem",width:"6em"}),A=function(){var t=Object(d.a)(l.a.mark((function t(e,i,n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.customFetch)("/profiles/list-clients-day?profileId=".concat(i,"&date=").concat(n));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,i,n){return t.apply(this,arguments)}}(),B=function(){var t=Object(d.a)(l.a.mark((function t(e,i,n,r){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(b.customFetch)("/profiles/graphics-clients-day?profileId=".concat(i,"&year=").concat(n,"&month=").concat(r));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,i,n,r){return t.apply(this,arguments)}}(),H=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv",componentId:"sc-1sozmlr-3"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"45vw",height:"85vh",padding:"1.25rem"}),U=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv2",componentId:"sc-1sozmlr-4"})({height:"100%",width:"100%"}),G=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv3",componentId:"sc-1sozmlr-5"})({display:"flex",justifyContent:"center"}),Y=Object(c.d)(O.a).withConfig({displayName:"ModalListClients___StyledToggleGroup",componentId:"sc-1sozmlr-6"})({alignSelf:"center"}),V=Object(c.d)(O.b).withConfig({displayName:"ModalListClients___StyledToggleGroupItem",componentId:"sc-1sozmlr-7"})(["",""],(function(t){return t._css2})),J=Object(c.d)(O.b).withConfig({displayName:"ModalListClients___StyledToggleGroupItem2",componentId:"sc-1sozmlr-8"})(["",""],(function(t){return t._css3})),X=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv4",componentId:"sc-1sozmlr-9"})({width:"100%",height:"100%"}),K=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv5",componentId:"sc-1sozmlr-10"})({display:"flex",alignItems:"center",justifyContent:"space-between",gap:"0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem"}),q=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv6",componentId:"sc-1sozmlr-11"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.5rem","@media (min-width: 1024px)":{fontSize:"0.95rem"}}),Q=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv7",componentId:"sc-1sozmlr-12"})({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}),Z=Object(c.d)(w.a).withConfig({displayName:"ModalListClients___StyledLeftSvg",componentId:"sc-1sozmlr-13"})({width:"1rem",height:"1rem"}),$=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput",componentId:"sc-1sozmlr-14"})({"--tw-text-opacity":"1",color:"rgba(23, 23, 28, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),tt=Object(c.d)(w.a).withConfig({displayName:"ModalListClients___StyledLeftSvg2",componentId:"sc-1sozmlr-15"})({width:"1rem",height:"1rem"}),et=Object(c.d)("input").withConfig({displayName:"ModalListClients___StyledInput2",componentId:"sc-1sozmlr-16"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),it=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv8",componentId:"sc-1sozmlr-17"})(["",""],(function(t){return t._css4})),nt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv9",componentId:"sc-1sozmlr-18"})({display:"flex",alignItems:"center",justifyContent:"flex-start",gap:"0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem"}),rt=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect",componentId:"sc-1sozmlr-19"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),ot=Object(c.d)("select").withConfig({displayName:"ModalListClients___StyledSelect2",componentId:"sc-1sozmlr-20"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),at=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv10",componentId:"sc-1sozmlr-21"})({height:"100%"}),lt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv11",componentId:"sc-1sozmlr-22"})({flexGrow:"1",width:"100%",height:"93%"}),dt=function(t){var e=t.profileId,i=m.a.useState((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1),n=Object(o.a)(i,2),r=n[0],a=n[1],l=m.a.useState((new Date).getFullYear()),d=Object(o.a)(l,2),c=d[0],s=d[1],p=Object(j.d)(["clientGraphicsDay",e,c,r],B),u=p.data,f=p.status,b=null===u||void 0===u?void 0:u.map((function(t){var e=t.day,i=t.count;return{day:e,count:i,total:i}}));return Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(nt,{children:[Object(N.jsxs)("label",{children:["Mes:"," ",Object(N.jsxs)(rt,{onChange:function(t){return a(t.target.value)},value:r,children:[Object(N.jsx)("option",{value:"01",children:"Enero"}),Object(N.jsx)("option",{value:"02",children:"Febrero"}),Object(N.jsx)("option",{value:"03",children:"Marzo"}),Object(N.jsx)("option",{value:"04",children:"Abril"}),Object(N.jsx)("option",{value:"05",children:"Mayo"}),Object(N.jsx)("option",{value:"06",children:"Junio"}),Object(N.jsx)("option",{value:"07",children:"Julio"}),Object(N.jsx)("option",{value:"08",children:"Agosto"}),Object(N.jsx)("option",{value:"09",children:"Septiembre"}),Object(N.jsx)("option",{value:"10",children:"Octubre"}),Object(N.jsx)("option",{value:"11",children:"Noviembre"}),Object(N.jsx)("option",{value:"12",children:"Diciembre"})]})]}),Object(N.jsxs)("label",{children:["A\xf1o:"," ",Object(N.jsxs)(ot,{onChange:function(t){return s(t.target.value)},value:c,children:[Object(N.jsx)("option",{value:"2020",children:"2020"}),Object(N.jsx)("option",{value:"2021",children:"2021"}),Object(N.jsx)("option",{value:"2022",children:"2022"}),Object(N.jsx)("option",{value:"2023",children:"2023"}),Object(N.jsx)("option",{value:"2024",children:"2024"}),Object(N.jsx)("option",{value:"2025",children:"2025"}),Object(N.jsx)("option",{value:"2026",children:"2026"})]})]})]}),Object(N.jsx)(at,{children:"loading"===f?Object(N.jsx)(h.a,{}):Object(N.jsx)(N.Fragment,{children:Object(N.jsx)(lt,{children:Object(N.jsx)(_.a,{children:Object(N.jsxs)(C.a,{data:b,children:[Object(N.jsx)(S.a,{formatter:function(t,e){var i;return[t,null===(i=[{name:"Clientes",value:"count"}])||void 0===i?void 0:i.find((function(t){return t.value===e})).name]},contentStyle:{backgroundColor:"#333333"}}),Object(N.jsx)(z.a,{strokeDasharray:"3 3"}),Object(N.jsx)(I.a,{dataKey:"day"}),Object(N.jsx)(L.a,{yAxisId:"left-axis",orientation:"left"}),Object(N.jsx)(L.a,{yAxisId:"right-axis",orientation:"right"}),Object(N.jsx)(M.a,{dataKey:"count",yAxisId:"right-axis",fill:"#cbd5e1",isAnimationActive:!1,children:Object(N.jsx)(k.a,{dataKey:"total",position:"top",style:{fill:"white"}})})]})})})})})]})},ct=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv12",componentId:"sc-1sozmlr-23"})({width:"100%",position:"relative"}),st=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv13",componentId:"sc-1sozmlr-24"})({borderWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(107, 114, 128, var(--tw-border-opacity))",borderRadius:"20px",alignItems:"center"}),pt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv14",componentId:"sc-1sozmlr-25"})({display:"flex",justifyContent:"space-between",alignItems:"center",gap:"1rem",padding:"0.5rem"}),mt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv15",componentId:"sc-1sozmlr-26"})({display:"flex",width:"100%",minHeight:"60px"}),ut=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv16",componentId:"sc-1sozmlr-27"})({display:"flex",gap:"1rem"}),ht=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv17",componentId:"sc-1sozmlr-28"})(["",""],(function(t){return t._css5})),ft=Object(c.d)("button").withConfig({displayName:"ModalListClients___StyledButton",componentId:"sc-1sozmlr-29"})(["",""],(function(t){return t._css6})),bt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv18",componentId:"sc-1sozmlr-30"})({position:"relative",display:"flex"}),gt=Object(c.d)("img").withConfig({displayName:"ModalListClients___StyledImg",componentId:"sc-1sozmlr-31"})({width:"4em",height:"4em",borderRadius:"9999px",objectFit:"cover"}),vt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv19",componentId:"sc-1sozmlr-32"})(["",""],(function(t){return t._css7})),xt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv20",componentId:"sc-1sozmlr-33"})(["",""],(function(t){return t._css8})),yt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv21",componentId:"sc-1sozmlr-34"})(["",""],(function(t){return t._css9})),jt=Object(c.d)(D.a).withConfig({displayName:"ModalListClients___StyledContextMenu",componentId:"sc-1sozmlr-35"})(["",""],(function(t){return t._css10})),wt=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv22",componentId:"sc-1sozmlr-36"})({display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"}),Ot=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv23",componentId:"sc-1sozmlr-37"})({position:"relative",display:"flex"}),_t=Object(c.d)("img").withConfig({displayName:"ModalListClients___StyledImg2",componentId:"sc-1sozmlr-38"})({width:"4em",height:"4em",borderRadius:"9999px",objectFit:"cover"}),Ct=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv24",componentId:"sc-1sozmlr-39"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.5rem","@media (min-width: 1024px)":{fontSize:"0.95rem"}}),St=Object(c.d)("div").withConfig({displayName:"ModalListClients___StyledDiv25",componentId:"sc-1sozmlr-40"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",fontSize:"0.5rem","@media (min-width: 1024px)":{fontSize:"0.95rem"}}),zt=function(t){var e,i,a,s,p,u,f,v,w,O,_,C,S=t.client,z=t.typeWidth,I=t.profileId,L=t.setShowListClients,M=t.setShowChat,k=t.setClientChat,P=t.setProfileChat,E=m.a.useState(0),A=Object(o.a)(E,2),B=A[0],H=A[1],U=m.a.useState([]),G=Object(o.a)(U,2),Y=G[0],V=G[1],J=m.a.useState(0),X=Object(o.a)(J,2),K=X[0],q=X[1],Q=Object(j.d)(["cliente-ListC",null===S||void 0===S?void 0:S.client_id,B],T),Z=Q.data,$=Q.status,tt=+x.a.get("id"),et=x.a.get("role");m.a.useEffect((function(){var t,e;if("md"===z||"sm"===z||""===z)V(Object(b.organizadorRadial)(R,4,8,11,null!==(t=null===S||void 0===S||null===(e=S.extradata)||void 0===e?void 0:e.crowns)&&void 0!==t?t:0,11.25));else if("lg"===z){var i,n;V(Object(b.organizadorRadial)(R,5,13,16,null!==(i=null===S||void 0===S||null===(n=S.extradata)||void 0===n?void 0:n.crowns)&&void 0!==i?i:0,11.25))}else if("xl"===z){var r,o;V(Object(b.organizadorRadial)(R,10,21,27,null!==(r=null===S||void 0===S||null===(o=S.extradata)||void 0===o?void 0:o.crowns)&&void 0!==r?r:0,11.25))}else if("2xl"===z){var a,l;V(Object(b.organizadorRadial)(R,10,22,28,null!==(a=null===S||void 0===S||null===(l=S.extradata)||void 0===l?void 0:l.crowns)&&void 0!==a?a:0,11.25))}else{var d,c;V(Object(b.organizadorRadial)(R,12,32,42,null!==(d=null===S||void 0===S||null===(c=S.extradata)||void 0===c?void 0:c.crowns)&&void 0!==d?d:0,11.25))}}),[null===S||void 0===S||null===(e=S.extradata)||void 0===e?void 0:e.crowns,z]),m.a.useEffect((function(){var t;if(null===Z||void 0===Z||null===(t=Z.last_copy)||void 0===t?void 0:t.timestamp){var e=new Date(Z.last_copy.timestamp),i=setInterval((function(){e&&q(Date.now()-Date.UTC(e.getFullYear(),e.getMonth(),e.getDate(),e.getHours(),e.getMinutes(),e.getSeconds(),e.getMilliseconds()))}),333);return function(){return clearInterval(i)}}}),[K,null===Z||void 0===Z||null===(i=Z.last_copy)||void 0===i?void 0:i.timestamp]);var it=Object(y.a)(K);return Object(N.jsx)(ct,{children:Object(N.jsx)(st,{children:Object(N.jsx)(pt,{children:"loading"===$?Object(N.jsx)(mt,{children:Object(N.jsx)(h.a,{pixelSize:32})}):Object(N.jsxs)(N.Fragment,{children:[Object(N.jsxs)(ut,{children:[Object(N.jsx)(ht,{_css5:[{position:"relative",top:"0px",right:"0px",bottom:"0px",left:"0px"},".react-contextmenu{ left: 50px !important; }"],children:Object(N.jsxs)(D.b,{id:"clientList"+(null===S||void 0===S?void 0:S.client_id),children:[Object(N.jsxs)(ft,{type:"button",onClick:function(){var t=Object(d.a)(l.a.mark((function t(e){var i,n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if((i=e.currentTarget).disabled){t.next=8;break}return i.disabled=!0,navigator.clipboard.writeText(null===S||void 0===S||null===(n=S.extradata)||void 0===n?void 0:n.amolatina_id),t.next=6,Object(b.customFetch)("/agency/history",{method:"POST",body:JSON.stringify({profile_id:-1,user_id:tt,client_id:null===S||void 0===S?void 0:S.client_id,action:"copy"}),headers:{"content-type":"application/json"}});case 6:H(B+1),setTimeout((function(){return i.disabled=!1}),1e4);case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),_css6:[{display:"flex",flexDirection:"column",alignItems:"center",gap:"0.5rem"},Object(c.c)(n||(n=Object(r.a)(["\n                          cursor: pointer;\n                          transition: transform 0.12s linear;\n                          :hover {\n                            transform: translateY(-6px);\n                          }\n                          :active {\n                            transform: translateY(3px);\n                          }\n                        "])))],children:[Object(N.jsxs)(bt,{children:[Y,Object(N.jsx)(gt,{src:null!==(a=null===S||void 0===S||null===(s=S.extradata)||void 0===s?void 0:s.photo)&&void 0!==a?a:g.a,onError:function(t){var e=t.currentTarget;e.onerror=null,e.src=g.a},alt:"..."}),Object(N.jsx)(vt,{_css7:[{position:"absolute",bottom:"-10px",right:"-9px"},"@media (min-width: 2560px) { bottom: -10px !important; right: -10px !important; }"],children:Object(N.jsxs)(xt,{_css8:[{display:"flex",alignItems:"center",justifyContent:"center","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))",gap:"0.25rem",paddingLeft:"0.25rem",paddingRight:"0.25rem",minWidth:"1rem","@media (min-width: 768px)":{width:"2rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"2.9rem",borderRadius:"0.5rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}},"@media (min-width: 2560px) { padding-right: 0.5rem  !important; padding-left: 0.5rem  !important; width: 5rem !important;  }","@media (min-height: 1000px) and (max-width: 767px) { padding-right: 0.5rem  !important; padding-left: 0.5rem  !important; border-radius: 1rem !important; width: 5rem !important; }","@media (max-height: 999px) and (max-width: 767px) { padding-right: 0.5rem  !important; padding-left: 0.5rem  !important; border-radius: 1rem !important; width: 5rem !important; }"],children:[Object(N.jsx)(yt,{_css9:[{fontSize:"0.2rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700","@media (min-width: 1024px)":{fontSize:"0.25rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{fontSize:"0.5rem"}},"@media (min-width: 2560px) { font-size: 0.75rem !important; line-height: 1rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { font-size: 0.75rem !important; line-height: 1rem !important; }","@media (max-height: 999px) and (max-width: 767px) { font-size: 0.375rem !important;  }"],children:isNaN(Math.round(((new Date).getTime()-new Date(null!==(p=null===S||void 0===S||null===(u=S.extradata)||void 0===u?void 0:u.first_point)&&void 0!==p?p:"").getTime())/864e5))?0:null!==(f=Math.round(((new Date).getTime()-new Date(null!==(v=null===S||void 0===S||null===(w=S.extradata)||void 0===w?void 0:w.first_point)&&void 0!==v?v:"").getTime())/864e5))&&void 0!==f?f:0}),Object(N.jsx)(b.FlagPut,{role:et,country:null===S||void 0===S?void 0:S.extradata.country})]})})]}),Object(N.jsx)(W,{title:null===S||void 0===S||null===(O=S.extradata)||void 0===O?void 0:O.name,children:null===S||void 0===S||null===(_=S.extradata)||void 0===_?void 0:_.name})]}),Object(N.jsx)(jt,{id:"clientList"+(null===S||void 0===S?void 0:S.client_id),_css10:[{"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}},"@media (min-width: 2560px) { font-size: 1rem !important; }"],children:Object(N.jsx)(D.c,{onClick:function(){k(null===S||void 0===S?void 0:S.client_id),P(I),M(!0),L(!1)},children:"Chat"})})]})}),-1!==Z.last_copy.userId?Object(N.jsxs)(wt,{children:[Object(N.jsx)(Ot,{children:Object(N.jsx)(_t,{src:null!==(C=Z.last_copy.foto)&&void 0!==C?C:g.a,onError:function(t){var e=t.currentTarget;e.onerror=null,e.src=g.a},alt:"..."})}),Object(N.jsx)(F,{title:Z.last_copy.nombre,children:Z.last_copy.nombre})]}):null]}),-1!==Z.last_copy.userId&&"00"!==it?Object(N.jsxs)(Ct,{children:["Copiado hace ",it]}):null,Object(N.jsxs)(St,{children:[null===S||void 0===S?void 0:S.cant," Punteadas"]})]})})})},"abc".concat(null===S||void 0===S?void 0:S.client_id))};e.default=function(t){var e,i=t.setShowListClients,n=t.profileId,r=t.setShowChat,a=t.setClientChat,l=t.setProfileChat,d=m.a.useState(P()),c=Object(o.a)(d,2),p=c[0],u=c[1],h=m.a.useState(""),b=Object(o.a)(h,2),g=b[0],v=b[1],x=m.a.useState("lista"),y=Object(o.a)(x,2),w=y[0],O=y[1],_=Object(j.d)(["clientPointsDay",n,p],A).data,C=m.a.useState(window.innerWidth>=2560?"4k":window.innerWidth>=1536?"2xl":window.innerWidth>=1280?"xl":window.innerWidth>=1024?"lg":window.innerWidth>=768?"md":window.innerWidth<768&&window.innerHeight>=1e3?"4k":"sm"),S=Object(o.a)(C,2),z=S[0],I=S[1];m.a.useEffect((function(){var t=function(){window.innerWidth>=2560?I("4k"):window.innerWidth>=1536?I("2xl"):window.innerWidth>=1280?I("xl"):window.innerWidth>=1024?I("lg"):window.innerWidth>=768?I("md"):window.innerWidth<768&&window.innerHeight>=1e3?I("4k"):I("sm")};return window.addEventListener("resize",t),function(){window.removeEventListener("resize",t)}}),[]);var L=null===_||void 0===_?void 0:_.filter((function(t){var e,i,n;return null===t||void 0===t||null===(e=t.extradata)||void 0===e||null===(i=e.name)||void 0===i||null===(n=i.toLowerCase())||void 0===n?void 0:n.includes(null===g||void 0===g?void 0:g.toLowerCase())}));return Object(N.jsx)(s.a,{setShowModal:i,children:Object(N.jsx)(H,{children:Object(N.jsxs)(U,{children:[Object(N.jsx)(G,{children:Object(N.jsxs)(Y,{type:"single",value:w,onValueChange:function(t){t&&O(t)},children:[Object(N.jsx)(V,{value:"lista",_css2:[{paddingRight:"0.75rem",paddingTop:"0.5rem",paddingBottom:"0.5rem",paddingLeft:"1rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",borderTopLeftRadius:"1rem",borderBottomLeftRadius:"1rem",borderWidth:"1px",borderColor:"#4c4c3f",borderStyle:"solid"},"lista"===w?{"--tw-bg-opacity":"1",backgroundColor:"rgba(76, 76, 63, var(--tw-bg-opacity))"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))"}],children:"Lista"}),Object(N.jsx)(J,{value:"grafica",_css3:[{paddingLeft:"0.75rem",paddingRight:"1rem",paddingTop:"0.5rem",paddingBottom:"0.5rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700",borderWidth:"1px",borderTopRightRadius:"1rem",borderBottomRightRadius:"1rem",borderColor:"#4c4c3f",borderStyle:"solid"},"grafica"===w?{"--tw-bg-opacity":"1",backgroundColor:"rgba(76, 76, 63, var(--tw-bg-opacity))"}:{"--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))"}],children:"Grafica"})]})}),"lista"===w?Object(N.jsxs)(X,{children:[Object(N.jsxs)(K,{children:[Object(N.jsxs)(q,{children:[null!==(e=null===L||void 0===L?void 0:L.length)&&void 0!==e?e:0," Clientes"]}),Object(N.jsxs)(Q,{children:[Object(N.jsx)("button",{type:"button",onClick:function(){var t=new Date(p);u(P(E(t,-1)))},children:Object(N.jsx)(Z,{transform:"scale(1,1)"})}),Object(N.jsx)("label",{children:Object(N.jsx)($,{type:"date",value:p,onChange:function(t){u(t.target.value)}})}),Object(N.jsx)("button",{type:"button",onClick:function(){var t=new Date(p);u(P(E(t,1)))},children:Object(N.jsx)(tt,{transform:"scale(-1,1)"})})]}),Object(N.jsx)(et,{name:"idInput",placeholder:"Buscar",value:g,onChange:function(t){return v(t.target.value)}})]}),Object(N.jsx)(it,{_css4:[{display:"flex",flexDirection:"column",overflowX:"hidden",height:"90%",width:"100%",padding:"0.5rem",gap:"0.5rem"},f.b],children:null===L||void 0===L?void 0:L.map((function(t){return Object(N.jsx)(zt,{client:t,typeWidth:z,profileId:n,setShowListClients:i,setShowChat:r,setClientChat:a,setProfileChat:l})}))})]}):null,"grafica"===w?Object(N.jsx)(dt,{profileId:n}):null]})})})}},89:function(t,e,i){"use strict";var n=i(3),r=i(0),o=i(1),a=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv",componentId:"tjiuax-0"})({position:"fixed",zIndex:"50",top:"0px",right:"0px",bottom:"0px",left:"0px",overflowY:"auto"}),l=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv2",componentId:"tjiuax-1"})({display:"flex",alignItems:"flex-end",justifyContent:"center",minHeight:"100vh",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"5rem",textAlign:"center","@media (min-width: 640px)":{display:"block",padding:"0px"}}),d=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv3",componentId:"tjiuax-2"})({position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px","--tw-bg-opacity":"0.7",backgroundColor:"rgba(23, 23, 27, var(--tw-bg-opacity))",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}),c=Object(n.d)("span").withConfig({displayName:"Modal___StyledSpan",componentId:"tjiuax-3"})({display:"none","@media (min-width: 640px)":{display:"inline-block",verticalAlign:"middle",height:"100vh"}}),s=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv4",componentId:"tjiuax-4"})(["",""],(function(t){return t._css}));e.a=function(t){var e=t.children,i=t.setShowModal,n=Object(r.useRef)(null);return Object(r.useEffect)((function(){var t=n.current,e=function(t){"Escape"===t.key&&i(!1)};return t.addEventListener("keydown",e),t.focus(),function(){t.removeEventListener("keydown",e)}}),[i]),Object(o.jsx)(a,{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(o.jsxs)(l,{ref:n,tabIndex:-1,children:[Object(o.jsx)(d,{"aria-hidden":"true",onClick:function(){return i(!1)}}),Object(o.jsx)(c,{"aria-hidden":"true",children:"\u200b"}),Object(o.jsx)(s,{_css:[{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",display:"inline-block",verticalAlign:"bottom","--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))",textAlign:"left",overflow:"hidden","--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms","@media (min-width: 640px)":{marginTop:"2rem",marginBottom:"2rem",verticalAlign:"middle"},"@media (min-width: 768px)":{borderRadius:"0.75rem"},"@media (min-width: 1024px)":{borderRadius:"1rem"},"@media (min-width: 1536px)":{borderRadius:"1.3rem"}},"@media (min-width: 2560px) { border-radius: 2.5rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { border-radius:2.5rem !important; }"],children:e})]})})}}}]);