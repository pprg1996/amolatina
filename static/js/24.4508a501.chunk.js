(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[24],{397:function(t,e,d){"use strict";d.r(e);var n=d(2),a=d.n(n),i=d(8),r=d(5),o=d(10),c=d(86),l=d(7),s=d(1),p=function(){var t=Object(i.a)(a.a.mark((function t(e,d){return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.customFetch)("/operators/fines?operatorId=".concat(d));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e,d){return t.apply(this,arguments)}}(),h=Object(r.d)("h1").withConfig({displayName:"MultasModal___StyledH",componentId:"dpgz2x-0"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",margin:"1rem",fontSize:"1.125rem",lineHeight:"1.75rem"}),b=Object(r.d)("table").withConfig({displayName:"MultasModal___StyledTable",componentId:"dpgz2x-1"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",margin:"1rem"}),u=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh",componentId:"dpgz2x-2"})({borderWidth:"1px",padding:"0.25rem"}),g=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh2",componentId:"dpgz2x-3"})({borderWidth:"1px",padding:"0.25rem"}),j=Object(r.d)("th").withConfig({displayName:"MultasModal___StyledTh3",componentId:"dpgz2x-4"})({borderWidth:"1px",padding:"0.25rem"}),m=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd",componentId:"dpgz2x-5"})({borderWidth:"1px",padding:"0.25rem"}),x=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd2",componentId:"dpgz2x-6"})({borderWidth:"1px",padding:"0.25rem"}),f=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd3",componentId:"dpgz2x-7"})({borderWidth:"1px",padding:"0.25rem"}),O=Object(r.d)("td").withConfig({displayName:"MultasModal___StyledTd4",componentId:"dpgz2x-8"})({borderWidth:"1px",padding:"0.25rem","--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",fontWeight:"700"});e.default=function(t){var e=t.setShowMultasModal,d=t.operadorId,n=Object(o.d)(["perfiles"],l.fetchPerfiles).data,r=Object(o.d)(["multas",d],p).data;return Object(s.jsx)(c.a,{setShowModal:e,children:r&&0!==(null===r||void 0===r?void 0:r.length)?Object(s.jsxs)(b,{children:[Object(s.jsx)("thead",{children:Object(s.jsxs)("tr",{children:[Object(s.jsx)(u,{children:"Tipo"}),Object(s.jsx)(g,{children:"Perfil"}),Object(s.jsx)(j,{children:"Fecha"})]})}),Object(s.jsx)("tbody",{children:r.map((function(t){var e,d=new Date(t.timestamp),r=Date.UTC(d.getUTCFullYear(),d.getUTCMonth(),d.getUTCDate(),d.getUTCHours(),d.getUTCMinutes(),d.getUTCSeconds(),d.getUTCMilliseconds()),c=new Date(r);return Object(s.jsxs)("tr",{children:[Object(s.jsx)(m,{children:"mingle"===t.type?"Mingle":"offline"===t.type?"Offline":"Carta"}),Object(s.jsx)(x,{children:null===n||void 0===n||null===(e=n.find((function(e){return e.id===t.profile_id})))||void 0===e?void 0:e.nombre}),Object(s.jsx)(f,{children:c.toLocaleString()}),Object(s.jsx)(O,{children:Object(s.jsx)("button",{onClick:Object(i.a)(a.a.mark((function e(){return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("qaz"!==prompt()){e.next=5;break}return e.next=4,Object(l.customFetch)("/operators/delete-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({fineId:t.id})});case 4:o.b.invalidateQueries(["multas"]);case 5:case"end":return e.stop()}}),e)}))),children:"Eliminar"})})]},t.id)}))})]}):Object(s.jsx)(h,{children:"No tiene multas"})})}}}]);