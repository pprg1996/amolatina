(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[17],{116:function(e,t,i){"use strict";var n=i(102),a=i(12),o=i.n(a),s=i(2);t.a=function(e){var t=e.id,i=e.nombre,a=e.foto,d=e.puntos1,r=e.puntos2,p=e.summary1,c=e.summary2,m=e.supervisorId,l=e.usarMultasOAvisos,u=e.noModal,f=e.tipoEntidad,h=e.amolatinaId,j=e.metaDia,x=e.metaMes,g=e.latestFeedTimestamp,b=e.fineCount,O=e.fineAlertCount,y=e.first_point,v=e.contenidos,C=e.online,w=e.mingle,T=e.introductory,S=e.operador,_=e.operadorDePausa,I=e.operadoresAsignadosIds,M=e.missingMingleTimestamp,D=e.offlineTimestamp,k=e.unrepliedLettersTimestamps,F=e.token,A=e.media,P=e.perfiles,E=e.perfilesPausados,z=e.pausado,L=e.typeWidth,N=e.setShowModal,W=e.setDataEntities,R=o.a.get("role"),J=+o.a.get("id");return Object(s.jsx)(s.Fragment,{children:Object(s.jsx)("button",{onClick:function(){return"admin"===R||"supervisor"===R||(null===S||void 0===S?void 0:S.id)===J&&"perfil"===f||t===J&&"operador"===f?(W({id:t,nombre:i,foto:a,puntos1:d,puntos2:r,summary1:p,summary2:c,supervisorId:m,usarMultasOAvisos:l,noModal:u,tipoEntidad:f,amolatinaId:h,metaDia:j,metaMes:x,latestFeedTimestamp:g,fineCount:b,fineAlertCount:O,online:C,mingle:w,introductory:T,operador:S,operadorDePausa:_,operadoresAsignadosIds:I,missingMingleTimestamp:M,offlineTimestamp:D,unrepliedLettersTimestamps:k,token:F,perfiles:P,perfilesPausados:E,pausado:z,first_point:y}),N(!0)):void 0},children:Object(s.jsx)(n.a,{id:t,nombre:i,foto:a,puntos1:d,puntos2:r,summary1:p,summary2:c,tipoEntidad:f,meta1:j,meta2:x,latestFeedTimestamp:g,usarMultasOAvisos:l,fineCount1:null===b||void 0===b?void 0:b.dia,fineAlertCount1:null===O||void 0===O?void 0:O.dia,fineCount2:null===b||void 0===b?void 0:b.mes,fineAlertCount2:null===O||void 0===O?void 0:O.mes,first_point:y,contenidos:v,online:C,mingle:w,introductory:T,operador:S,operadorDePausa:_,operadoresAsignadosIds:I,missingMingleTimestamp:M,offlineTimestamp:D,unrepliedLettersTimestamps:k,token:F,media:A,perfiles:P,perfilesPausados:E,pausado:z,typeWidth:L})})})}},418:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i(9),o=i(1),s=i.n(o),d=i(8),r=i(5),p=i(81),c=i(6),m=i(10),l=i(107),u=i(109),f=i(0),h=i(41),j=i(116),x=i(2),g=r.d.div.withConfig({displayName:"Clientes__ClientesDiv",componentId:"sc-2fo7jg-0"})(["@media (min-width:2560px){padding-top:20px !important;padding-right:10px !important;padding-left:16px !important;grid-gap:32px !important;}"," ",""],{marginTop:"12px",paddingBottom:"20px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",display:"grid",alignItems:"flex-start",overflowX:"hidden","@media (min-width: 768px)":{paddingTop:"5px",paddingRight:"2px",paddingLeft:"2px",gap:"6px"},"@media (min-width: 1024px)":{gap:"10px",paddingTop:"10px",paddingRight:"5px"},"@media (min-width: 1280px)":{gap:"12px",paddingTop:"12px",paddingRight:"6px",paddingLeft:"4px"}},p.b),b=function(){var e=Object(d.a)(s.a.mark((function e(t,i){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=c.renombrarPropiedadesAnidadas,e.next=3,Object(c.customFetch)("/clients/list-current-month?page=".concat(i,"&expand=dia_summary,mes_summary"));case 3:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),O=function(){var e=Object(d.a)(s.a.mark((function e(t,i){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(i){e.next=2;break}return e.abrupt("return",null);case 2:return e.t0=c.renombrarPropiedadesAnidadas,e.next=5,Object(c.customFetch)("/clients/info-amolatina-id?amolatinaId=".concat(i,"&expand=dia_summary,mes_summary"));case 5:return e.t1=e.sent,e.abrupt("return",(0,e.t0)(e.t1));case 7:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),y=Object(r.d)(l.a).withConfig({displayName:"Clientes___StyledContextMenu",componentId:"sc-2fo7jg-1"})(["@media (min-width:2560px){font-size:1rem !important;}"]),v=Object(r.d)(y).withConfig({displayName:"Clientes___Styled_StyledContextMenu",componentId:"sc-2fo7jg-3"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}}),C=Object(r.d)(l.a).withConfig({displayName:"Clientes___StyledContextMenu2",componentId:"sc-2fo7jg-2"})(["@media (min-width:2560px){font-size:1rem !important;}"]),w=Object(r.d)(C).withConfig({displayName:"Clientes___Styled_StyledContextMenu2",componentId:"sc-2fo7jg-4"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}});t.default=function(e){var t,i=e.clienteSearchAmolatinaId,o=e.typeWidth,s=e.setTypeFichaTecnica,d=e.setProfileIdFichaTecnica,r=e.setIdFichaTecnica,p=e.setShowFichaTecnica,c=e.setShowChat,y=e.setClientChat,C=e.setShowModal,T=e.setDataEntities,S=Object(f.useState)(1),_=Object(a.a)(S,2),I=_[0],M=_[1],D=Object(m.c)(["clientes",I],b),k=D.latestData,F=D.resolvedData,A=null===k||void 0===k?void 0:k.data,P=null===F||void 0===F?void 0:F._meta.pageCount,E=Object(m.d)(["cliente-especifico",i],O).data;return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(g,{children:E?Object(x.jsxs)(f.Fragment,{children:[Object(x.jsx)(l.b,{id:""+E.id,children:Object(x.jsx)(j.a,Object(n.a)(Object(n.a)({},Object(n.a)(Object(n.a)({},E),{},{summary1:E.diaSummary,summary2:E.mesSummary,puntos1:E.progresoDia,puntos2:E.progresoMes})),{},{typeWidth:o,tipoEntidad:"cliente",setShowModal:C,setDataEntities:T}))}),Object(x.jsxs)(v,{id:""+E.id,children:[Object(x.jsx)(l.c,{onClick:function(){p(!0),s("client"),d(-1),r(E.id)},children:"Ficha Tecnica"}),Object(x.jsx)(l.c,{onClick:function(){return navigator.clipboard.writeText(E.amolatinaId)},children:"Copiar ID"}),Object(x.jsx)(l.c,{onClick:function(){c(!0),y(E.id)},children:"Chat"})]})]},E.id):null!==(t=null===A||void 0===A?void 0:A.map((function(e){return Object(x.jsxs)(f.Fragment,{children:[Object(x.jsx)(l.b,{id:""+e.id,children:Object(x.jsx)(j.a,Object(n.a)(Object(n.a)({},Object(n.a)(Object(n.a)({},e),{},{summary1:e.diaSummary,summary2:e.mesSummary,puntos1:e.progresoDia,puntos2:e.progresoMes})),{},{typeWidth:o,tipoEntidad:"cliente",setShowModal:C,setDataEntities:T}),e.id)}),Object(x.jsxs)(w,{id:""+e.id,children:[Object(x.jsx)(l.c,{onClick:function(){p(!0),s("client"),d(-1),r(e.id)},children:"Ficha Tecnica"}),Object(x.jsx)(l.c,{onClick:function(){return navigator.clipboard.writeText(e.amolatinaId)},children:"Copiar ID"}),Object(x.jsx)(l.c,{onClick:function(){c(!0),y(e.id)},children:"Chat"})]})]},e.id)})))&&void 0!==t?t:Object(x.jsx)(h.a,{})}),E?null:Object(x.jsx)(u.a,{cantidadPaginas:P,pagina:I,setPagina:M})]})}}}]);