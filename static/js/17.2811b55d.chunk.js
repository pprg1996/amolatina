(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[17],{116:function(e,t,i){"use strict";var n=i(102),a=i(12),o=i.n(a),d=i(2);t.a=function(e){var t=e.id,i=e.nombre,a=e.foto,s=e.puntos1,r=e.puntos2,p=e.summary1,c=e.summary2,m=e.supervisorId,l=e.usarMultasOAvisos,u=e.noModal,f=e.tipoEntidad,h=e.amolatinaId,j=e.metaDia,x=e.metaMes,g=e.latestFeedTimestamp,b=e.fineCount,O=e.fineAlertCount,y=e.online,v=e.mingle,C=e.introductory,w=e.operador,T=e.operadorDePausa,S=e.operadoresAsignadosIds,I=e.missingMingleTimestamp,_=e.offlineTimestamp,M=e.unrepliedLettersTimestamps,D=e.token,k=e.perfiles,F=e.perfilesPausados,A=e.pausado,P=e.typeWidth,E=e.setShowModal,z=e.setDataEntities,L=o.a.get("role"),N=+o.a.get("id");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{onClick:function(){return"admin"===L||"supervisor"===L||(null===w||void 0===w?void 0:w.id)===N&&"perfil"===f||t===N&&"operador"===f?(z({id:t,nombre:i,foto:a,puntos1:s,puntos2:r,summary1:p,summary2:c,supervisorId:m,usarMultasOAvisos:l,noModal:u,tipoEntidad:f,amolatinaId:h,metaDia:j,metaMes:x,latestFeedTimestamp:g,fineCount:b,fineAlertCount:O,online:y,mingle:v,introductory:C,operador:w,operadorDePausa:T,operadoresAsignadosIds:S,missingMingleTimestamp:I,offlineTimestamp:_,unrepliedLettersTimestamps:M,token:D,perfiles:k,perfilesPausados:F,pausado:A}),E(!0)):void 0},children:Object(d.jsx)(n.a,{id:t,nombre:i,foto:a,puntos1:s,puntos2:r,summary1:p,summary2:c,tipoEntidad:f,meta1:j,meta2:x,latestFeedTimestamp:g,usarMultasOAvisos:l,fineCount1:null===b||void 0===b?void 0:b.dia,fineAlertCount1:null===O||void 0===O?void 0:O.dia,fineCount2:null===b||void 0===b?void 0:b.mes,fineAlertCount2:null===O||void 0===O?void 0:O.mes,online:y,mingle:v,introductory:C,operador:w,operadorDePausa:T,operadoresAsignadosIds:S,missingMingleTimestamp:I,offlineTimestamp:_,unrepliedLettersTimestamps:M,token:D,perfiles:k,perfilesPausados:F,pausado:A,typeWidth:P})})})}},418:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i(9),o=i(1),d=i.n(o),s=i(8),r=i(5),p=i(81),c=i(6),m=i(10),l=i(107),u=i(109),f=i(0),h=i(41),j=i(116),x=i(2),g=r.d.div.withConfig({displayName:"Clientes__ClientesDiv",componentId:"sc-2fo7jg-0"})(["@media (min-width:2560px){padding-top:20px !important;padding-right:10px !important;padding-left:16px !important;grid-gap:32px !important;}"," ",""],{marginTop:"12px",paddingBottom:"20px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",display:"grid",alignItems:"flex-start",overflowX:"hidden","@media (min-width: 768px)":{paddingTop:"5px",paddingRight:"2px",paddingLeft:"2px",gap:"6px"},"@media (min-width: 1024px)":{gap:"10px",paddingTop:"10px",paddingRight:"5px"},"@media (min-width: 1280px)":{gap:"12px",paddingTop:"12px",paddingRight:"6px",paddingLeft:"4px"}},p.b),b=function(){var e=Object(s.a)(d.a.mark((function e(t,i){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c.renombrarPropiedadesAnidadas,e.next=3,Object(c.customFetch)("/clients/list-current-month?page=".concat(i,"&expand=dia_summary,mes_summary"));case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(d.a.mark((function e(t,i){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return",null);case 2:return e.t0=c.renombrarPropiedadesAnidadas,e.next=5,Object(c.customFetch)("/clients/info-amolatina-id?amolatinaId=".concat(i,"&expand=dia_summary,mes_summary"));case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),y=Object(r.d)(l.a).withConfig({displayName:"Clientes___StyledContextMenu",componentId:"sc-2fo7jg-1"})(["@media (min-width:2560px){font-size:1rem !important;}"]),v=Object(r.d)(y).withConfig({displayName:"Clientes___Styled_StyledContextMenu",componentId:"sc-2fo7jg-3"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}}),C=Object(r.d)(l.a).withConfig({displayName:"Clientes___StyledContextMenu2",componentId:"sc-2fo7jg-2"})(["@media (min-width:2560px){font-size:1rem !important;}"]),w=Object(r.d)(C).withConfig({displayName:"Clientes___Styled_StyledContextMenu2",componentId:"sc-2fo7jg-4"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}});t.default=function(e){var t,i=e.clienteSearchAmolatinaId,o=e.typeWidth,d=e.setTypeFichaTecnica,s=e.setProfileIdFichaTecnica,r=e.setIdFichaTecnica,p=e.setShowFichaTecnica,c=e.setShowChat,y=e.setClientChat,C=e.setShowModal,T=e.setDataEntities,S=Object(f.useState)(1),I=Object(a.a)(S,2),_=I[0],M=I[1],D=Object(m.c)(["clientes",_],b),k=D.latestData,F=D.resolvedData,A=null===k||void 0===k?void 0:k.data,P=null===F||void 0===F?void 0:F._meta.pageCount,E=Object(m.d)(["cliente-especifico",i],O).data;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{children:E?Object(x.jsxs)(f.Fragment,{children:[Object(x.jsx)(l.b,{id:""+E.id,children:Object(x.jsx)(j.a,Object(n.a)(Object(n.a)({},Object(n.a)(Object(n.a)({},E),{},{summary1:E.diaSummary,summary2:E.mesSummary,puntos1:E.progresoDia,puntos2:E.progresoMes})),{},{typeWidth:o,tipoEntidad:"cliente",setShowModal:C,setDataEntities:T}))}),Object(x.jsxs)(v,{id:""+E.id,children:[Object(x.jsx)(l.c,{onClick:function(){p(!0),d("client"),s(-1),r(E.id)},children:"Ficha Tecnica"}),Object(x.jsx)(l.c,{onClick:function(){return navigator.clipboard.writeText(E.amolatinaId)},children:"Copiar ID"}),Object(x.jsx)(l.c,{onClick:function(){c(!0),y(E.id)},children:"Chat"})]})]},E.id):null!==(t=null===A||void 0===A?void 0:A.map((function(e){return Object(x.jsxs)(f.Fragment,{children:[Object(x.jsx)(l.b,{id:""+e.id,children:Object(x.jsx)(j.a,Object(n.a)(Object(n.a)({},Object(n.a)(Object(n.a)({},e),{},{summary1:e.diaSummary,summary2:e.mesSummary,puntos1:e.progresoDia,puntos2:e.progresoMes})),{},{typeWidth:o,tipoEntidad:"cliente",setShowModal:C,setDataEntities:T}),e.id)}),Object(x.jsxs)(w,{id:""+e.id,children:[Object(x.jsx)(l.c,{onClick:function(){p(!0),d("client"),s(-1),r(e.id)},children:"Ficha Tecnica"}),Object(x.jsx)(l.c,{onClick:function(){return navigator.clipboard.writeText(e.amolatinaId)},children:"Copiar ID"}),Object(x.jsx)(l.c,{onClick:function(){c(!0),y(e.id)},children:"Chat"})]})]},e.id)})))&&void 0!==t?t:Object(x.jsx)(h.a,{})}),E?null:Object(x.jsx)(u.a,{cantidadPaginas:P,pagina:_,setPagina:M})]})}}}]);