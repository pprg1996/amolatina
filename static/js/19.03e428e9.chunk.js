(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[19],{176:function(e,t,n){"use strict";n.d(t,"a",(function(){return v}));var i=n(88),r=n.n(i),a=n(0),o=n.n(a),c=n(85),l=n(86);function d(e){return(d="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e}).apply(this,arguments)}function h(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function f(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function y(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function j(e,t){return(j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,i=x(e);if(t){var r=x(this).constructor;n=Reflect.construct(i,arguments,r)}else n=i.apply(this,arguments);return g(this,n)}}function g(e,t){return!t||"object"!==d(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}var v=function(e){!function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&j(e,t)}(d,e);var t,n,i,a=b(d);function d(){return f(this,d),a.apply(this,arguments)}return t=d,i=[{key:"renderLineItem",value:function(e,t){var n;if(o.a.isValidElement(e))n=o.a.cloneElement(e,t);else if(r()(e))n=e(t);else{var i=t.x1,a=t.y1,c=t.x2,d=t.y2,u=t.key,p=h(t,["x1","y1","x2","y2","key"]);n=o.a.createElement("line",s({},Object(l.c)(p),{x1:i,y1:a,x2:c,y2:d,fill:"none",key:u}))}return n}}],(n=[{key:"renderHorizontal",value:function(e){var t=this,n=this.props,i=n.x,r=n.width,a=n.horizontal;if(!e||!e.length)return null;var c=e.map((function(e,n){var o=p(p({},t.props),{},{x1:i,y1:e,x2:i+r,y2:e,key:"line-".concat(n),index:n});return d.renderLineItem(a,o)}));return o.a.createElement("g",{className:"recharts-cartesian-grid-horizontal"},c)}},{key:"renderVertical",value:function(e){var t=this,n=this.props,i=n.y,r=n.height,a=n.vertical;if(!e||!e.length)return null;var c=e.map((function(e,n){var o=p(p({},t.props),{},{x1:e,y1:i,x2:e,y2:i+r,key:"line-".concat(n),index:n});return d.renderLineItem(a,o)}));return o.a.createElement("g",{className:"recharts-cartesian-grid-vertical"},c)}},{key:"renderVerticalStripes",value:function(e){var t=this.props.verticalFill;if(!t||!t.length)return null;var n=this.props,i=n.fillOpacity,r=n.x,a=n.y,c=n.width,l=n.height,d=e.slice().sort((function(e,t){return e-t}));r!==d[0]&&d.unshift(0);var s=d.map((function(e,n){var s=d[n+1]?d[n+1]-e:r+c-e;if(s<=0)return null;var h=n%t.length;return o.a.createElement("rect",{key:"react-".concat(n),x:Math.round(e+r-r),y:a,width:s,height:l,stroke:"none",fill:t[h],fillOpacity:i,className:"recharts-cartesian-grid-bg"})}));return o.a.createElement("g",{className:"recharts-cartesian-gridstripes-vertical"},s)}},{key:"renderHorizontalStripes",value:function(e){var t=this.props.horizontalFill;if(!t||!t.length)return null;var n=this.props,i=n.fillOpacity,r=n.x,a=n.y,c=n.width,l=n.height,d=e.slice().sort((function(e,t){return e-t}));a!==d[0]&&d.unshift(0);var s=d.map((function(e,n){var s=d[n+1]?d[n+1]-e:a+l-e;if(s<=0)return null;var h=n%t.length;return o.a.createElement("rect",{key:"react-".concat(n),y:Math.round(e+a-a),x:r,height:s,width:c,stroke:"none",fill:t[h],fillOpacity:i,className:"recharts-cartesian-grid-bg"})}));return o.a.createElement("g",{className:"recharts-cartesian-gridstripes-horizontal"},s)}},{key:"renderBackground",value:function(){var e=this.props.fill;if(!e||"none"===e)return null;var t=this.props,n=t.fillOpacity,i=t.x,r=t.y,a=t.width,c=t.height;return o.a.createElement("rect",{x:i,y:r,width:a,height:c,stroke:"none",fill:e,fillOpacity:n,className:"recharts-cartesian-grid-bg"})}},{key:"render",value:function(){var e=this.props,t=e.x,n=e.y,i=e.width,a=e.height,l=e.horizontal,d=e.vertical,s=e.horizontalCoordinatesGenerator,h=e.verticalCoordinatesGenerator,u=e.xAxis,p=e.yAxis,m=e.offset,f=e.chartWidth,y=e.chartHeight;if(!Object(c.g)(i)||i<=0||!Object(c.g)(a)||a<=0||!Object(c.g)(t)||t!==+t||!Object(c.g)(n)||n!==+n)return null;var j=this.props,b=j.horizontalPoints,g=j.verticalPoints;return b&&b.length||!r()(s)||(b=s({yAxis:p,width:f,height:y,offset:m})),g&&g.length||!r()(h)||(g=h({xAxis:u,width:f,height:y,offset:m})),o.a.createElement("g",{className:"recharts-cartesian-grid"},this.renderBackground(),l&&this.renderHorizontal(b),d&&this.renderVertical(g),l&&this.renderHorizontalStripes(b),d&&this.renderVerticalStripes(g))}}])&&y(t.prototype,n),i&&y(t,i),d}(a.PureComponent);v.displayName="CartesianGrid",v.defaultProps={horizontal:!0,vertical:!0,horizontalPoints:[],verticalPoints:[],stroke:"#ccc",fill:"none",verticalFill:[],horizontalFill:[]}},439:function(e,t,n){"use strict";n.r(t);var i=n(4),r=n(9),a=n(1),o=n.n(a),c=n(6),l=n(5),d=n(89),s=n(0),h=n.n(s),u=n(433),p=n(434),m=n(428),f=n(176),y=n(410),j=n(411),b=n(7),g=n(127),x=n(83),v=n(10),O=n(42),w=n(41),_=n(150),S=n(50),k=n(2),C=function(){var e=Object(c.a)(o.a.mark((function e(t,n,i,r,a,c){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(b.customFetch)("/agency/fines-range?range=".concat(n,"&timezone=").concat((new Date).getTimezoneOffset(),"&month=").concat(i,"&year=").concat(r,"&fromDate=").concat(a,"&toDate=").concat(c));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,n,i,r,a,o){return e.apply(this,arguments)}}(),F=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv",componentId:"sc-1ohk5wy-0"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"95vw",height:"85vh",padding:"1.25rem"}),I=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv2",componentId:"sc-1ohk5wy-1"})({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem",marginTop:"0.5rem",marginBottom:"0.5rem","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}),M=Object(l.d)("button").withConfig({displayName:"ModalGeneralFines___StyledButton",componentId:"sc-1ohk5wy-2"})(["",""],(function(e){return e._css})),D=Object(l.d)(S.a).withConfig({displayName:"ModalGeneralFines___StyledActSvg",componentId:"sc-1ohk5wy-3"})(["",""],(function(e){return e._css2})),N=Object(l.d)("button").withConfig({displayName:"ModalGeneralFines___StyledButton2",componentId:"sc-1ohk5wy-4"})(["",""],(function(e){return e._css3})),G=Object(l.d)(_.a).withConfig({displayName:"ModalGeneralFines___StyledElimSvg",componentId:"sc-1ohk5wy-5"})(["",""],(function(e){return e._css4})),T=Object(l.d)("select").withConfig({displayName:"ModalGeneralFines___StyledSelect",componentId:"sc-1ohk5wy-6"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),P=Object(l.d)("select").withConfig({displayName:"ModalGeneralFines___StyledSelect2",componentId:"sc-1ohk5wy-7"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),E=Object(l.d)("select").withConfig({displayName:"ModalGeneralFines___StyledSelect3",componentId:"sc-1ohk5wy-8"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),z=Object(l.d)("select").withConfig({displayName:"ModalGeneralFines___StyledSelect4",componentId:"sc-1ohk5wy-9"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),A=Object(l.d)("input").withConfig({displayName:"ModalGeneralFines___StyledInput",componentId:"sc-1ohk5wy-10"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),R=Object(l.d)("input").withConfig({displayName:"ModalGeneralFines___StyledInput2",componentId:"sc-1ohk5wy-11"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),B=Object(l.d)("input").withConfig({displayName:"ModalGeneralFines___StyledInput3",componentId:"sc-1ohk5wy-12"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),U=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv3",componentId:"sc-1ohk5wy-13"})({display:"flex",justifyContent:"space-between",gap:"0.5rem",width:"100%",height:"90%"}),J=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv4",componentId:"sc-1ohk5wy-14"})({width:"40%",height:"100%"}),H=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv5",componentId:"sc-1ohk5wy-15"})({flexGrow:"1",width:"100%",height:"100%"}),V=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv6",componentId:"sc-1ohk5wy-16"})({borderWidth:"2px",padding:"0.75rem",display:"flex",flexDirection:"column",borderRadius:"1rem",fontSize:"1rem",width:"60%",height:"100%"}),q=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv7",componentId:"sc-1ohk5wy-17"})({display:"flex",paddingTop:"1rem",paddingBottom:"1rem",width:"100%"}),L=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv8",componentId:"sc-1ohk5wy-18"})({textAlign:"center",width:"10%"}),Q=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv9",componentId:"sc-1ohk5wy-19"})({textAlign:"left",width:"15%"}),W=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv10",componentId:"sc-1ohk5wy-20"})({textAlign:"left",width:"15%"}),Y=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv11",componentId:"sc-1ohk5wy-21"})({textAlign:"center",width:"30%"}),K=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv12",componentId:"sc-1ohk5wy-22"})({textAlign:"center",width:"30%",fontSize:"0.55rem"}),X=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv13",componentId:"sc-1ohk5wy-23"})(["",""],(function(e){return e._css5})),Z=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv14",componentId:"sc-1ohk5wy-24"})({display:"flex"}),$=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv15",componentId:"sc-1ohk5wy-25"})({textAlign:"center",width:"10%"}),ee=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv16",componentId:"sc-1ohk5wy-26"})({textAlign:"left",width:"15%"}),te=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv17",componentId:"sc-1ohk5wy-27"})({display:"flex",gap:"0.5rem",alignItems:"center"}),ne=Object(l.d)(b.ActionIcon).withConfig({displayName:"ModalGeneralFines___StyledActionIcon",componentId:"sc-1ohk5wy-28"})({width:"1rem",height:"1rem"}),ie=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv18",componentId:"sc-1ohk5wy-29"})({textAlign:"left",width:"15%"}),re=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv19",componentId:"sc-1ohk5wy-30"})({textAlign:"center",width:"30%"}),ae=Object(l.d)("div").withConfig({displayName:"ModalGeneralFines___StyledDiv20",componentId:"sc-1ohk5wy-31"})({textAlign:"center",width:"30%"});t.default=function(e){var t,n,a,l,s=e.setShowMulta,_=h.a.useState("-1"),S=Object(r.a)(_,2),oe=S[0],ce=S[1],le=h.a.useState("mensual"),de=Object(r.a)(le,2),se=de[0],he=de[1],ue=h.a.useState(!1),pe=Object(r.a)(ue,2),me=pe[0],fe=pe[1],ye=h.a.useState([]),je=Object(r.a)(ye,2),be=je[0],ge=je[1],xe=h.a.useState((new Date).getMonth()+1<10?"0"+((new Date).getMonth()+1):(new Date).getMonth()+1),ve=Object(r.a)(xe,2),Oe=ve[0],we=ve[1],_e=h.a.useState((new Date).getFullYear()),Se=Object(r.a)(_e,2),ke=Se[0],Ce=Se[1],Fe=h.a.useState((new Date).toISOString().slice(0,-16)+"01T00:00:00"),Ie=Object(r.a)(Fe,2),Me=Ie[0],De=Ie[1],Ne=new Date;Ne.setUTCMonth(Ne.getUTCMonth()+1,0);var Ge=h.a.useState(Ne.toISOString().slice(0,-13)+"00:00:00"),Te=Object(r.a)(Ge,2),Pe=Te[0],Ee=Te[1],ze=Object(v.d)(["fines-range",se,Oe,ke,Me,Pe],C),Ae=ze.data,Re=ze.status,Be=null===Ae||void 0===Ae||null===(t=Ae.stats)||void 0===t?void 0:t.map((function(e){var t,n=e.day,a=e.fines;return t=JSON.parse(JSON.stringify(a)),Object.entries(t).forEach((function(e){var n=Object(r.a)(e,2),i=(n[0],n[1]);("-1"===oe||oe===i.type)&&(t[i.type]=i.count)})),Object(i.a)({day:n},t)}));return Object(k.jsx)(d.a,{setShowModal:s,children:Object(k.jsx)(F,{children:"loading"===Re?Object(k.jsx)(w.a,{}):Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)(I,{children:[Object(k.jsx)(M,{onClick:function(){"qaz"===prompt()&&Object(b.customFetch)("/agency/enable-fines")},title:"Activar Multa",_css:[{"@media (min-width: 768px)":{width:"1rem"},"@media (min-width: 1280px)":{width:"1.5rem"}},"@media (min-width: 2560px) { width: 2rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { width: 2rem !important; }","@media (max-height: 999px) and (max-width: 767px) { width: 1rem !important; }"],children:Object(k.jsx)(D,{_css2:[{"@media (min-width: 768px)":{width:"1rem",height:"1rem"},"@media (min-width: 1280px)":{height:"1.5rem",width:"1.5rem"}},"@media (min-width: 2560px) { width: 2rem !important;  height: 2rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { width: 2rem !important; height: 2rem !important; }","@media (max-height: 999px) and (max-width: 767px) { width: 1rem !important; height: 1rem !important; }"]})}),Object(k.jsx)(N,{onClick:function(){"qaz"===prompt()&&Object(b.customFetch)("/agency/disable-fines")},title:"Desactivar Multa",_css3:[{"@media (min-width: 768px)":{width:"1rem"},"@media (min-width: 1280px)":{width:"1.5rem"}},"@media (min-width: 2560px) { width: 2rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { width: 2rem !important; }","@media (max-height: 999px) and (max-width: 767px) { width: 1rem !important; }"],children:Object(k.jsx)(G,{_css4:[{"@media (min-width: 768px)":{width:"1rem",height:"1rem"},"@media (min-width: 1280px)":{height:"1.5rem",width:"1.5rem"}},"@media (min-width: 2560px) { width: 2rem !important;  height: 2rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { width: 2rem !important; height: 2rem !important; }","@media (max-height: 999px) and (max-width: 767px) { width: 1rem !important; height: 1rem !important; }"]})}),Object(k.jsxs)("label",{children:["Tipo:"," ",Object(k.jsxs)(T,{value:oe,onChange:function(e){return ce(e.target.value)},children:[Object(k.jsx)("option",{value:"-1",children:"Todos"}),Object(k.jsx)("option",{value:"offline",children:"Offline"}),Object(k.jsx)("option",{value:"mingle",children:"Mingles"}),Object(k.jsx)("option",{value:"letter",children:"Cartas"}),Object(k.jsx)("option",{value:"miss",children:"Faltas"})]})]}),Object(k.jsxs)("label",{children:["Rango:"," ",Object(k.jsxs)(P,{onChange:function(e){"Tiempo"===e.target.value?De((new Date).toISOString().slice(0,-14)):"fecha"===e.target.value&&De((new Date).toISOString().slice(0,-16)+"01T00:00:00"),he(e.target.value)},value:se,children:[Object(k.jsx)("option",{value:"mensual",children:"Mensual"}),Object(k.jsx)("option",{value:"fecha",children:"Fecha"}),Object(k.jsx)("option",{value:"Tiempo",children:"Diario"})]})]}),"mensual"===se?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("label",{children:["Mes:"," ",Object(k.jsxs)(E,{onChange:function(e){return we(e.target.value)},value:Oe,children:[Object(k.jsx)("option",{value:"01",children:"Enero"}),Object(k.jsx)("option",{value:"02",children:"Febrero"}),Object(k.jsx)("option",{value:"03",children:"Marzo"}),Object(k.jsx)("option",{value:"04",children:"Abril"}),Object(k.jsx)("option",{value:"05",children:"Mayo"}),Object(k.jsx)("option",{value:"06",children:"Junio"}),Object(k.jsx)("option",{value:"07",children:"Julio"}),Object(k.jsx)("option",{value:"08",children:"Agosto"}),Object(k.jsx)("option",{value:"09",children:"Septiembre"}),Object(k.jsx)("option",{value:"10",children:"Octubre"}),Object(k.jsx)("option",{value:"11",children:"Noviembre"}),Object(k.jsx)("option",{value:"12",children:"Diciembre"})]})]}),Object(k.jsxs)("label",{children:["A\xf1o:"," ",Object(k.jsxs)(z,{onChange:function(e){return Ce(e.target.value)},value:ke,children:[Object(k.jsx)("option",{value:"2020",children:"2020"}),Object(k.jsx)("option",{value:"2021",children:"2021"}),Object(k.jsx)("option",{value:"2022",children:"2022"}),Object(k.jsx)("option",{value:"2023",children:"2023"}),Object(k.jsx)("option",{value:"2024",children:"2024"}),Object(k.jsx)("option",{value:"2025",children:"2025"}),Object(k.jsx)("option",{value:"2026",children:"2026"})]})]})]}):null,"fecha"===se?Object(k.jsxs)(k.Fragment,{children:[Object(k.jsxs)("label",{children:["Desde:",Object(k.jsx)(A,{type:"datetime-local",value:Me,onChange:function(e){return De(e.target.value)}})]}),Object(k.jsxs)("label",{children:["Hasta:",Object(k.jsx)(R,{type:"datetime-local",value:Pe,onChange:function(e){return Ee(e.target.value)}})]})]}):null,"Tiempo"===se?Object(k.jsxs)("label",{children:["Dia:",Object(k.jsx)(B,{type:"date",value:Me,onChange:function(e){return De(e.target.value)}})]}):null]}),Object(k.jsxs)(U,{children:[Object(k.jsx)(J,{children:Object(k.jsx)(H,{children:Object(k.jsx)(u.a,{children:Object(k.jsxs)(p.a,{data:Be,onClick:function(e){e&&"mensual"===se&&(De(e.activePayload[0].payload.day),he("Tiempo"))},children:[Object(k.jsx)(m.a,{formatter:function(e,t){var n;return[e,null===(n=[{name:"Offline",value:"offline"},{name:"Mingles",value:"mingle"},{name:"Cartas",value:"letter"},{name:"Faltas",value:"miss"}].find((function(e){return e.value===t})))||void 0===n?void 0:n.name]},contentStyle:{backgroundColor:"#333333"}}),Object(k.jsx)(f.a,{strokeDasharray:"3 3"}),Object(k.jsx)(y.a,{dataKey:"day"}),Object(k.jsx)(j.a,{yAxisId:"left-axis",orientation:"left"}),Object(k.jsx)(j.a,{yAxisId:"right-axis",orientation:"right"}),Object(g.a)("fines","all","all","",Be,"all","all","bonus","puntos",{})]})})})}),Object(k.jsxs)(V,{children:[Object(k.jsxs)(q,{children:[Object(k.jsxs)(L,{children:[" ",Object(k.jsx)("input",{type:"checkbox",onClick:function(){!function(){if(!1===me){var e,t,n=null===(e=Ae.general)||void 0===e||null===(t=e.filter((function(e){return oe===e.type||"-1"===oe})))||void 0===t?void 0:t.map((function(e){return document.getElementById("CheckBoxFine"+e.id).checked=!0,e.id}));ge(n),fe(!0)}else{var i,r;null===(i=Ae.general)||void 0===i||null===(r=i.filter((function(e){return oe===e.type||"-1"===oe})))||void 0===r||r.map((function(e){return document.getElementById("CheckBoxFine"+e.id).checked=!1,null})),ge([]),fe(!1)}}()}})]}),Object(k.jsx)(Q,{children:"Tipo"}),Object(k.jsx)(W,{children:"Usuario"}),Object(k.jsx)(Y,{children:"Fecha"}),Object(k.jsx)(K,{children:Object(k.jsx)(O.a,{cancel:!0,onClick:Object(c.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("qaz"!==prompt()){e.next=5;break}return e.next=4,Object(b.customFetch)("/operators/delete-group-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fineId:be})});case 4:v.b.invalidateQueries(["fines-range"]);case 5:case"end":return e.stop()}}),e)}))),children:"Eliminar seleccionados"})})]}),Object(k.jsx)(X,{_css5:[{width:"100%",borderRadius:"1rem",display:"flex",flexDirection:"column",gap:"0.5rem",height:"100%",overflowX:"hidden"},x.b],children:null===(n=Ae.general)||void 0===n||null===(a=n.filter((function(e){return oe===(null===e||void 0===e?void 0:e.type)||"-1"===oe})))||void 0===a||null===(l=a.sort((function(e,t){return+new Date(t.timestamp)-+new Date(e.timestamp)})))||void 0===l?void 0:l.map((function(e){var t=new Date(null===e||void 0===e?void 0:e.timestamp),n=Date.UTC(t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate(),t.getUTCHours(),t.getUTCMinutes(),t.getUTCSeconds(),t.getUTCMilliseconds()),i=new Date(n);return Object(k.jsxs)(Z,{children:[Object(k.jsx)($,{children:Object(k.jsx)("input",{type:"checkbox",id:"CheckBoxFine"+e.id,onChange:function(){if(document.getElementById("CheckBoxFine"+e.id).checked){var t=be;t.push(e.id),ge(t)}else ge(be.filter((function(t){return t!==e.id})))},defaultChecked:0!==be.filter((function(t){return t===e.id})).length})}),Object(k.jsx)(ee,{children:Object(k.jsxs)(te,{children:[Object(k.jsx)(ne,{type:e.type})," ","mingle"===e.type?"Mingle":"offline"===e.type?"Offline":"miss"===e.type?"Falta":"Carta"]})}),Object(k.jsx)(ie,{children:e.name}),Object(k.jsx)(re,{children:i.toLocaleString()}),Object(k.jsxs)(ae,{children:[" ",Object(k.jsx)(O.a,{cancel:!0,onClick:Object(c.a)(o.a.mark((function t(){return o.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if("qaz"!==prompt()){t.next=5;break}return t.next=4,Object(b.customFetch)("/operators/delete-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fineId:e.id})});case 4:v.b.invalidateQueries(["fines-range"]);case 5:case"end":return t.stop()}}),t)}))),children:"Eliminar"})]})]},e.id)}))})]})]})]})})})}}}]);