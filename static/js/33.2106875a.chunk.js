(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[33],{420:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i.n(a),d=i(6),r=i(3),o=i(12),l=i(89),c=i(10),s=i(8),p=i.n(s),m=i(1),b=function(){var t=Object(d.a)(n.a.mark((function t(e,i){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.customFetch)("/operators/fines?operatorId=".concat(i));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,i){return t.apply(this,arguments)}}(),u=Object(r.d)("h1").withConfig({displayName:"MultasModal___StyledH",componentId:"dpgz2x-0"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",margin:"1rem",fontSize:"1.125rem",lineHeight:"1.75rem"}),h=Object(r.d)("table").withConfig({displayName:"MultasModal___StyledTable",componentId:"dpgz2x-1"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",margin:"1rem"}),x=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh",componentId:"dpgz2x-2"})({borderWidth:"1px",padding:"0.25rem"}),g=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh2",componentId:"dpgz2x-3"})({borderWidth:"1px",padding:"0.25rem"}),w=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh3",componentId:"dpgz2x-4"})({borderWidth:"1px",padding:"0.25rem"}),f=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd",componentId:"dpgz2x-5"})({borderWidth:"1px",padding:"0.25rem"}),j=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd2",componentId:"dpgz2x-6"})({borderWidth:"1px",padding:"0.25rem"}),y=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd3",componentId:"dpgz2x-7"})({borderWidth:"1px",padding:"0.25rem"}),v=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd4",componentId:"dpgz2x-8"})({borderWidth:"1px",padding:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",fontWeight:"700"});e.default=function(t){var e=t.setShowMultasModal,i=t.operadorId,a=o.b.getQueryData(["perfiles",(new Date).getMonth()+1,(new Date).getFullYear()]),r=Object(o.d)(["multas",i],b).data,s=p.a.get("role");return Object(m.jsx)(l.a,{setShowModal:e,children:r&&0!==(null===r||void 0===r?void 0:r.length)?Object(m.jsxs)(h,{children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)(x,{children:"Tipo"}),Object(m.jsx)(g,{children:"Perfil"}),Object(m.jsx)(w,{children:"Fecha"})]})}),Object(m.jsx)("tbody",{children:r.map((function(t){var e,i=new Date(t.timestamp),r=Date.UTC(i.getUTCFullYear(),i.getUTCMonth(),i.getUTCDate(),i.getUTCHours(),i.getUTCMinutes(),i.getUTCSeconds(),i.getUTCMilliseconds()),l=new Date(r);return Object(m.jsxs)("tr",{children:[Object(m.jsx)(f,{children:"mingle"===t.type?"Mingle":"offline"===t.type?"Offline":"miss"===t.type?"Falta":"Carta"}),Object(m.jsx)(j,{children:null===a||void 0===a||null===(e=a.find((function(e){return e.id===t.profile_id})))||void 0===e?void 0:e.nombre}),Object(m.jsx)(y,{children:l.toLocaleString()}),"admin"===s?Object(m.jsx)(v,{children:Object(m.jsx)("button",{onClick:Object(d.a)(n.a.mark((function e(){return n.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("qaz"!==prompt()){e.next=6;break}return e.next=4,Object(c.customFetch)("/operators/delete-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fineId:t.id})});case 4:return e.next=6,o.b.invalidateQueries(["multas"]);case 6:case"end":return e.stop()}}),e)}))),children:"Eliminar"})}):null]},t.id)}))})]}):Object(m.jsx)(u,{children:"No tiene multas"})})}},89:function(t,e,i){"use strict";var a=i(3),n=i(0),d=i(1),r=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv",componentId:"tjiuax-0"})({position:"fixed",zIndex:"50",top:"0px",right:"0px",bottom:"0px",left:"0px",overflowY:"auto"}),o=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv2",componentId:"tjiuax-1"})({display:"flex",alignItems:"flex-end",justifyContent:"center",minHeight:"100vh",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"5rem",textAlign:"center","@media (min-width: 640px)":{display:"block",padding:"0px"}}),l=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv3",componentId:"tjiuax-2"})({position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px","--tw-bg-opacity":"0.7",backgroundColor:"rgba(23, 23, 27, var(--tw-bg-opacity))",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}),c=Object(a.d)("span").withConfig({displayName:"Modal___StyledSpan",componentId:"tjiuax-3"})({display:"none","@media (min-width: 640px)":{display:"inline-block",verticalAlign:"middle",height:"100vh"}}),s=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv4",componentId:"tjiuax-4"})(["",""],(function(t){return t._css}));e.a=function(t){var e=t.children,i=t.setShowModal,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=a.current,e=function(t){"Escape"===t.key&&i(!1)};return t.addEventListener("keydown",e),t.focus(),function(){t.removeEventListener("keydown",e)}}),[i]),Object(d.jsx)(r,{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(d.jsxs)(o,{ref:a,tabIndex:-1,children:[Object(d.jsx)(l,{"aria-hidden":"true",onClick:function(){return i(!1)}}),Object(d.jsx)(c,{"aria-hidden":"true",children:"\u200b"}),Object(d.jsx)(s,{_css:[{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",display:"inline-block",verticalAlign:"bottom","--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))",textAlign:"left",overflow:"hidden","--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms","@media (min-width: 640px)":{marginTop:"2rem",marginBottom:"2rem",verticalAlign:"middle"},"@media (min-width: 768px)":{borderRadius:"0.75rem"},"@media (min-width: 1024px)":{borderRadius:"1rem"},"@media (min-width: 1536px)":{borderRadius:"1.3rem"}},"@media (min-width: 2560px) { border-radius: 2.5rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { border-radius:2.5rem !important; }"],children:e})]})})}}}]);