(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[40],{430:function(t,e,n){"use strict";n.r(e);var d=n(6),a=n(3),i=n.n(a),o=n(7),r=n(1),c=n(12),l=n(91),s=n(10),p=n(8),b=n.n(p),j=n(0),u=n(117),g=n(2),h=function(){var t=Object(o.a)(i.a.mark((function t(e,n,d){return i.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.u)("/operators/fines?operatorId=".concat(n,"&date=").concat(d));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,n,d){return t.apply(this,arguments)}}(),m=Object(r.d)("div").withConfig({displayName:"MultasModal___StyledDiv",componentId:"dpgz2x-0"})({display:"flex",justifyContent:"center",alignItems:"center",gap:"0.5rem"}),x=Object(r.d)(u.a).withConfig({displayName:"MultasModal___StyledLeftSvg",componentId:"dpgz2x-1"})({width:"1rem",height:"1rem"}),O=Object(r.d)("input").withConfig({displayName:"MultasModal___StyledInput",componentId:"dpgz2x-2"})({"--tw-text-opacity":"1",color:"rgba(23, 23, 28, var(--tw-text-opacity))",padding:"0.25rem",borderRadius:"0.25rem"}),f=Object(r.d)(u.a).withConfig({displayName:"MultasModal___StyledLeftSvg2",componentId:"dpgz2x-3"})({width:"1rem",height:"1rem"}),y=Object(r.d)("h1").withConfig({displayName:"MultasModal___StyledH",componentId:"dpgz2x-4"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",margin:"1rem",fontSize:"1.125rem",lineHeight:"1.75rem"}),_=Object(r.d)("table").withConfig({displayName:"MultasModal___StyledTable",componentId:"dpgz2x-5"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",margin:"1rem"}),w=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh",componentId:"dpgz2x-6"})({borderWidth:"1px",padding:"0.25rem"}),M=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh2",componentId:"dpgz2x-7"})({borderWidth:"1px",padding:"0.25rem"}),v=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh3",componentId:"dpgz2x-8"})({borderWidth:"1px",padding:"0.25rem"}),S=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd",componentId:"dpgz2x-9"})({borderWidth:"1px",padding:"0.25rem"}),C=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd2",componentId:"dpgz2x-10"})({borderWidth:"1px",padding:"0.25rem"}),I=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd3",componentId:"dpgz2x-11"})({borderWidth:"1px",padding:"0.25rem"}),z=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd4",componentId:"dpgz2x-12"})({borderWidth:"1px",padding:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",fontWeight:"700"});e.default=function(t){var e=t.setShowMultasModal,n=t.operadorId,a=Object(j.useState)(Object(s.gb)().split("T")[0]),r=Object(d.a)(a,2),p=r[0],u=r[1],N=c.b.getQueryData(["perfiles"]),T=Object(c.d)(["multas",n,p],h).data,k=b.a.get("role");return Object(g.jsxs)(l.a,{setShowModal:e,children:[Object(g.jsx)("div",{children:Object(g.jsxs)(m,{children:[Object(g.jsx)("button",{type:"button",onClick:function(){var t=new Date(p);u(Object(s.gb)(Object(s.db)(t,-1)).split("T")[0])},children:Object(g.jsx)(x,{transform:"scale(1,1)"})}),Object(g.jsx)("label",{children:Object(g.jsx)(O,{type:"date",value:p,onChange:function(t){u(t.target.value)}})}),Object(g.jsx)("button",{type:"button",onClick:function(){var t=new Date(p);u(Object(s.gb)(Object(s.db)(t,1)).split("T")[0])},children:Object(g.jsx)(f,{transform:"scale(-1,1)"})})]})}),T&&0!==(null===T||void 0===T?void 0:T.length)?Object(g.jsxs)(_,{children:[Object(g.jsx)("thead",{children:Object(g.jsxs)("tr",{children:[Object(g.jsx)(w,{children:"Tipo"}),Object(g.jsx)(M,{children:"Perfil"}),Object(g.jsx)(v,{children:"Fecha"})]})}),Object(g.jsx)("tbody",{children:T.map((function(t){var e,n=new Date(t.timestamp),d=Date.UTC(n.getFullYear(),n.getMonth(),n.getDate(),n.getHours(),n.getMinutes(),n.getSeconds(),n.getMilliseconds()),a=new Date(d);return Object(g.jsxs)("tr",{children:[Object(g.jsx)(S,{children:"mingle"===t.type?"Mingle":"offline"===t.type?"Offline":"miss"===t.type?"Falta":"Carta"}),Object(g.jsx)(C,{children:null===N||void 0===N||null===(e=N.find((function(e){return e.id===t.profile_id})))||void 0===e?void 0:e.nombre}),Object(g.jsx)(I,{children:a.toLocaleString()}),"admin"===k?Object(g.jsx)(z,{children:Object(g.jsx)("button",{onClick:Object(o.a)(i.a.mark((function e(){return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("qaz"!==prompt()){e.next=6;break}return e.next=4,Object(s.u)("/operators/delete-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fineId:t.id})});case 4:return e.next=6,c.b.invalidateQueries(["multas"]);case 6:case"end":return e.stop()}}),e)}))),children:"Eliminar"})}):null]},t.id)}))})]}):Object(g.jsx)(y,{children:"No tiene multas"})]})}}}]);