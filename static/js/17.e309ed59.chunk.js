(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[17],{108:function(e,t,i){"use strict";i.d(t,"b",(function(){return h}));var r=i(6),a=i(20),o=i(3),s=i(1),n=i(10).ActionIcon,d=Object(o.d)(n).withConfig({displayName:"ColoredCheckbox___StyledActionIcon",componentId:"sc-2a66eg-0"})(["",""],(function(e){return e._css2})),m=o.d.div.withConfig({displayName:"ColoredCheckbox__DivColor",componentId:"sc-2a66eg-1"})(["",""],(function(e){return!0===e.checked?{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}})),u=Object(o.d)(m).withConfig({displayName:"ColoredCheckbox___StyledDivColor",componentId:"sc-2a66eg-2"})(["",""],(function(e){return e._css})),c=Object(o.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv",componentId:"sc-2a66eg-3"})({display:"flex",justifyContent:"center"}),p=Object(o.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv2",componentId:"sc-2a66eg-4"})({display:"flex",justifyContent:"center"}),l=Object(o.d)("span").withConfig({displayName:"ColoredCheckbox___StyledSpan",componentId:"sc-2a66eg-5"})(["",""],(function(e){return e._css3})),h=function(e,t){var i,o=!0,s=Object(a.a)(Object.entries(e).filter((function(e){var i=Object(r.a)(e,1)[0];return i.startsWith("show")&&i!=="show"+t.replace(/ /g,"")&&"setShowClientesOld"!==i&&"setShowClientesNew"!==i&&"setShowClients"!==i&&"setShowReports"!==i})));try{for(s.s();!(i=s.n()).done;){Object(r.a)(i.value,2)[1]&&(o=!1)}}catch(y){s.e(y)}finally{s.f()}if(e["show"+t.replace(/ /g,"")]&&o){var n,d=Object(a.a)(Object.entries(e).filter((function(e){return Object(r.a)(e,1)[0].startsWith("set")})));try{for(d.s();!(n=d.n()).done;){var m=Object(r.a)(n.value,2),u=m[0],c=m[1];"setShowClientesOld"!==u&&"setShowClientesNew"!==u&&"setShowClients"!==u&&"setShowReports"!==u&&c(!0)}}catch(y){d.e(y)}finally{d.f()}}else for(var p=0,l=Object.entries(e);p<l.length;p++){var h=Object(r.a)(l[p],2),f=h[0],g=h[1];if("setShowClientesOld"!==f&&"setShowClientesNew"!==f&&"setShowClients"!==f&&"setShowReports"!==f){if("function"!==typeof g)continue;f==="setShow"+t.replace(/ /g,"")?g(!0):g(!1)}else g(!1)}};t.a=function(e){var t=e.text,i=e.checked,r=e.setChecked,a=e.color,o=e.service,n=e.filter,m=e.total,f=e.mode,g=void 0===f?"":f,y=e.title;return Object(s.jsxs)(u,{style:!0===i?{backgroundColor:a}:{borderColor:a},checked:i,title:t,onDoubleClick:function(){return h(n,t)},onClick:function(){return r(!0!==i)},_css:[{paddingLeft:"0.125rem",borderWidth:"1px",flexShrink:"0",display:"flex",alignItems:"center",flexDirection:"column",cursor:"pointer","@media (min-width: 768px)":{borderRadius:"0.375rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",gap:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",paddingTop:"0.4rem",paddingBottom:"0.4rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",paddingTop:"0.7rem",paddingBottom:"0.7rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",paddingLeft:"0.15rem",paddingRight:"0.15rem",paddingTop:"0.8rem",paddingBottom:"0.8rem"}},""===g?"@media (min-width: 2560px) { padding: 0.75rem !important; grid-gap: 0.5rem !important; }":"@media (min-width: 2560px) { padding: 0.45rem !important; grid-gap: 0.25rem !important; }"],children:[Object(s.jsx)(c,{children:void 0===y?Object(s.jsx)(d,{type:o,_css2:[{width:"auto","@media (min-width: 768px)":{height:"0.6rem"},"@media (min-width: 1024px)":{height:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{height:"0.7rem"},"@media (min-width: 1536px)":{height:"0.9rem"}},""===g?"@media (min-width: 2560px) { height: 1.75rem !important; }":"@media (min-width: 2560px) { height: 1.25rem !important; }"]}):y}),Object(s.jsx)(p,{children:Object(s.jsx)(l,{_css3:[{fontWeight:"700","@media (min-width: 768px)":{fontSize:"0.25rem"},"@media (min-width: 1024px)":{fontSize:"0.3rem"},"@media (min-width: 1280px)":{fontSize:"0.45rem"},"@media (min-width: 1536px)":{fontSize:"0.5rem"}},""===g?"@media (min-width: 2560px) { font-size: 0.75rem !important; }":"@media (min-width: 2560px) { font-size: 0.65rem !important; }"],children:m})})]})}},134:function(e,t,i){"use strict";var r=i(5),a=i(21),o=i(114),s=i(8),n=i.n(s),d=i(1);t.a=function(e){var t=e.id,i=e.nombre,s=e.foto,m=e.puntos1,u=e.puntos2,c=e.summary1,p=e.summary2,l=e.supervisorId,h=e.usarMultasOAvisos,f=e.noModal,g=e.tipoEntidad,y=e.amolatinaId,b=e.metaDia,v=e.metaMes,x=e.latestFeedTimestamp,O=e.fineCount,w=e.fineAlertCount,j=e.first_point,S=e.contenidos,_=e.agency_id,C=e.country,D=e.online,M=e.mingle,I=e.introductory,T=e.operador,B=e.operadorDePausa,A=e.operadoresAsignadosIds,k=e.missingMingleTimestamp,F=e.offlineTimestamp,R=e.unrepliedLettersTimestamps,L=e.token,P=e.media,E=e.modeGraphics,N=e.modeAsig,W=e.modeTom,z=e.graphics_data,q=e.botLetterLength,V=e.resume,G=e.graphics_resume,J=e.shift,H=e.assign_profiles,U=e.perfiles,Q=e.perfilesPausados,X=e.pausado,Y=e.typeWidth,K=e.setShowModal,Z=e.setDataEntities,$=e.freedays,ee=e.setOperatorSelect,te=e.operatorSelect,ie=e.modeSelect,re=e.roleOperator,ae=e.modeDiasLibres,oe=e.modeAgencia,se=e.modeResumen,ne=n.a.get("role"),de=+n.a.get("id");return Object(d.jsx)(d.Fragment,{children:Object(d.jsx)("button",{onClick:function(){if(ie){var e=null===te||void 0===te?void 0:te.find((function(e){return e===t}));ee(e?te.filter((function(e){return e!==t})):[].concat(Object(a.a)(te),[t]))}else{if("admin"===ne||"supervisor"===ne)return Z(Object(r.a)({},{id:t,nombre:i,foto:s,puntos1:m,puntos2:u,summary1:c,summary2:p,supervisorId:l,usarMultasOAvisos:h,noModal:f,tipoEntidad:g,amolatinaId:y,metaDia:b,metaMes:v,latestFeedTimestamp:x,fineCount:O,fineAlertCount:w,first_point:j,contenidos:S,agency_id:_,online:D,mingle:M,introductory:I,operador:T,operadorDePausa:B,operadoresAsignadosIds:A,missingMingleTimestamp:k,offlineTimestamp:F,unrepliedLettersTimestamps:R,token:L,media:P,modeGraphics:E,modeAsig:N,modeTom:W,graphics_data:z,botLetterLength:q,shift:J,assign_profiles:H,perfiles:U,perfilesPausados:Q,pausado:X,typeWidth:Y,setShowModal:K,setDataEntities:Z})),K(!0);if((null===T||void 0===T?void 0:T.id)===de&&"perfil"===g)return Z(Object(r.a)({},{id:t,nombre:i,foto:s,puntos1:m,puntos2:u,summary1:c,summary2:p,supervisorId:l,usarMultasOAvisos:h,noModal:f,tipoEntidad:g,amolatinaId:y,metaDia:b,metaMes:v,latestFeedTimestamp:x,fineCount:O,fineAlertCount:w,first_point:j,contenidos:S,agency_id:_,online:D,mingle:M,introductory:I,operador:T,operadorDePausa:B,operadoresAsignadosIds:A,missingMingleTimestamp:k,offlineTimestamp:F,unrepliedLettersTimestamps:R,token:L,media:P,modeGraphics:E,modeAsig:N,modeTom:W,graphics_data:z,botLetterLength:q,shift:J,assign_profiles:H,perfiles:U,perfilesPausados:Q,pausado:X,typeWidth:Y,setShowModal:K,setDataEntities:Z})),K(!0);if(t===de&&"operador"===g)return Z({id:t,nombre:i,foto:s,puntos1:m,puntos2:u,summary1:c,summary2:p,supervisorId:l,usarMultasOAvisos:h,noModal:f,tipoEntidad:g,amolatinaId:y,metaDia:b,metaMes:v,latestFeedTimestamp:x,fineCount:O,fineAlertCount:w,agency_id:_,online:D,mingle:M,introductory:I,operador:T,operadorDePausa:B,operadoresAsignadosIds:A,missingMingleTimestamp:k,offlineTimestamp:F,unrepliedLettersTimestamps:R,token:L,perfiles:U,perfilesPausados:Q,pausado:X,first_point:j,shift:J}),K(!0)}},children:Object(d.jsx)(o.a,{id:t,nombre:i,foto:s,puntos1:m,puntos2:u,summary1:c,summary2:p,tipoEntidad:g,meta1:b,meta2:v,latestFeedTimestamp:x,usarMultasOAvisos:h,fineCount1:null===O||void 0===O?void 0:O.dia,fineAlertCount1:null===w||void 0===w?void 0:w.dia,fineCount2:null===O||void 0===O?void 0:O.mes,fineAlertCount2:null===w||void 0===w?void 0:w.mes,first_point:j,contenidos:S,agency_id:_,country:C,online:D,mingle:M,introductory:I,operador:T,operadorDePausa:B,operadoresAsignadosIds:A,missingMingleTimestamp:k,offlineTimestamp:F,unrepliedLettersTimestamps:R,token:L,media:P,modeGraphics:E,modeAsig:N,modeTom:W,graphics_data:z,botLetterLength:q,resume:V,supervisorId:l,roleOperator:re,shift:J,freedays:$,assign_profiles:H,perfiles:U,perfilesPausados:Q,pausado:X,typeWidth:Y,statusSelect:(null===te||void 0===te?void 0:te.filter((function(e){return e===t})).length)>0,modeDiasLibres:ae,modeAgencia:oe,modeResumen:se,graphics_resume:G})})})}},452:function(e,t,i){"use strict";i.r(t);var r=i(5),a=i(6),o=i(2),s=i.n(o),n=i(7),d=i(3),m=i(29),u=i(10),c=i(12),p=i(134),l=i(0),h=i(131),f=i(99),g=i(8),y=i.n(g),b=i(108),v=i(43),x=i(1),O=Object(l.lazy)((function(){return S((function(){return i.e(37).then(i.bind(null,418))}))})),w=Object(l.lazy)((function(){return S((function(){return Promise.all([i.e(2),i.e(26)]).then(i.bind(null,419))}))})),j=Object(l.lazy)((function(){return S((function(){return i.e(33).then(i.bind(null,420))}))})),S=function(e){return new Promise((function(t,i){var r="retry-lazy-refreshed".concat(btoa(e.toString())),a=JSON.parse(window.sessionStorage.getItem(r)||"false");e().then((function(e){if(window.sessionStorage.setItem(r,"false"),void 0===e)return window.sessionStorage.setItem(r,"true"),window.location.reload();t(e)})).catch((function(e){a||(window.sessionStorage.setItem(r,"true"),window.location.reload()),i(e)}))}))},_=function(){var e=Object(n.a)(s.a.mark((function e(t,i,r){var a,o,n;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r){e.next=2;break}return e.abrupt("return",null);case 2:return a=+y.a.get("agency_id"),o="",i!==(new Date).toISOString().slice(0,-14)&&(o="&CustomDay="+i),e.next=7,Object(u.customFetch)("/operators/graphics?agencyId=".concat(a).concat(o));case 7:return n=e.sent,e.abrupt("return",n);case 9:case"end":return e.stop()}}),e)})));return function(t,i,r){return e.apply(this,arguments)}}(),C=d.d.div.withConfig({displayName:"Operadores__OperadoresDiv",componentId:"sc-1pye1q6-0"})(["@media (min-width:2560px){padding-top:20px !important;padding-right:10px !important;padding-left:16px !important;grid-gap:32px !important;}"," ",""],{marginTop:"12px",paddingBottom:"20px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",display:"grid",alignItems:"flex-start",overflowX:"hidden","@media (min-width: 768px)":{paddingTop:"5px",paddingRight:"2px",paddingLeft:"2px",gap:"6px"},"@media (min-width: 1024px)":{gap:"10px",paddingTop:"10px",paddingRight:"5px"},"@media (min-width: 1280px)":{gap:"12px",paddingTop:"12px",paddingRight:"6px",paddingLeft:"4px"}},m.b),D=d.d.div.withConfig({displayName:"Operadores__DivRadio",componentId:"sc-1pye1q6-1"})(['input[type="radio"]{@media (min-width:2560px){width:16px !important;height:16px !important;margin-right:8px !important;border:2px solid #4c4c3f !important;}'," appearance:none;}input:checked{@media (min-width:2560px){border:6px solid #4c4c3f !important;}","}"],{width:"4px",height:"4px",cursor:"pointer",borderRadius:"50%","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"6px",height:"6px",marginRight:"2px",border:"1px solid #4c4c3f"},"@media (min-width: 1024px)":{width:"8px",height:"8px"},"@media (min-width: 1280px)":{width:"12px",height:"12px"}},{border:"1px solid #4c4c3f","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{border:"2px solid #4c4c3f"},"@media (min-width: 1024px)":{border:"4px solid #4c4c3f"},"@media (min-width: 1280px)":{border:"4px solid #4c4c3f"}}),M=Object(d.d)(D).withConfig({displayName:"Operadores___StyledDivRadio2",componentId:"sc-1pye1q6-4"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),I=Object(d.d)(D).withConfig({displayName:"Operadores___StyledDivRadio",componentId:"sc-1pye1q6-5"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),T=function(){var e=Object(n.a)(s.a.mark((function e(t,i){var r,a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="",i!==(new Date).toISOString().slice(0,-14)&&(r="&CustomDay="+i),e.next=4,Promise.all([Object(u.customFetch)("/feeds/all-operators-summary?tiempo=dia".concat(r)),Object(u.customFetch)("/feeds/all-operators-summary?tiempo=mes".concat(r))]);case 4:return a=e.sent,e.abrupt("return",Object(u.renombrarPropiedadesAnidadas)({summaryDia:a[0],summaryMes:a[1]}));case 6:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),B=Object(d.d)("div").withConfig({displayName:"Operadores___StyledDiv",componentId:"sc-1pye1q6-2"})(["@media (min-width:2560px){grid-gap:0.5rem !important;}"]),A=Object(d.d)(B).withConfig({displayName:"Operadores___Styled_StyledDiv",componentId:"sc-1pye1q6-6"})({display:"flex",alignItems:"center","@media (min-width: 768px)":{gap:"0.125rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem"},"@media (min-width: 1024px)":{paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{gap:"0.25rem"}}),k=Object(d.d)(f.a).withConfig({displayName:"Operadores___StyledContextMenu",componentId:"sc-1pye1q6-3"})(["@media (min-width:2560px){font-size:1rem !important;}"]),F=Object(d.d)(k).withConfig({displayName:"Operadores___Styled_StyledContextMenu",componentId:"sc-1pye1q6-7"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}}),R=Object(d.d)("label").withConfig({displayName:"Operadores___StyledLabel",componentId:"sc-1pye1q6-8"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"}}),L=Object(d.d)("label").withConfig({displayName:"Operadores___StyledLabel2",componentId:"sc-1pye1q6-9"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"}}),P=Object(d.d)("label").withConfig({displayName:"Operadores___StyledLabel3",componentId:"sc-1pye1q6-10"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),E=Object(d.d)("label").withConfig({displayName:"Operadores___StyledLabel4",componentId:"sc-1pye1q6-11"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),N=function(e){var t=e.modeGraphics,i=e.showPuntosOrServicio,a=e.setShowPuntosOrServicio,o=e.showBonusOrWriteoff,s=e.setShowBonusOrWriteoff,n=e.filter,d=e.graphics_datas,m=e.role,c=e.orderBy,g=e.orden,y=e.typeWidth,v=e.setDataEntities,S=e.setShowModal,_=e.showMultasModal,D=e.showMetasOperadorModal,T=e.setShowMultasModal,B=e.operadorSeleccionadoId,k=e.setShowMetasOperadorModal,N=e.feedsSummaries,W=e.operadorResp,z=e.entidadSeleccionadaFeed,q=e.supervisores,V=e.multasOAvisos,G=e.OcultarMostrar,J=e.setOperadorSeleccionadoId,H=e.ConvertirSoporte,U=e.ConvertirOperador,Q=e.setShowFichaTecnica,X=e.setTypeFichaTecnica,Y=e.setProfileIdFichaTecnica,K=e.setIdFichaTecnica,Z=e.setshowConfigModal,$=e.setConfigIdOperator,ee=e.modeAsig,te=e.modeTom,ie=e.operatorSelect,re=e.setOperatorSelect,ae=e.modeSelect,oe=e.modeDiasLibres,se=e.showWriteFinesModal,ne=e.setShowWriteFinesModal,de=e.modeAgencia,me=e.sortBy,ue=Object(l.useContext)(h.b);return Object(x.jsxs)(x.Fragment,{children:[t?Object(x.jsx)(x.Fragment,{children:Object(x.jsxs)(A,{children:[Object(x.jsxs)(I,{children:[Object(x.jsxs)(R,{children:["Diamantes",Object(x.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"puntos"===i,onChange:function(){return a("puntos")}})]}),Object(x.jsxs)(L,{children:["Cantidad",Object(x.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"servicio"===i,onChange:function(){return a("servicio")}})]})]}),Object(x.jsxs)(M,{children:[Object(x.jsxs)(P,{children:["Bonus",Object(x.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"bonus"===o,onChange:function(){return s("bonus")}})]}),Object(x.jsxs)(E,{children:["Writeoff",Object(x.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"writeoff"===o,onChange:function(){return s("writeoff")}})]})]}),("bonus"===o?u.bonusTypes:u.writeoffTypes).map((function(e,t){var r=e.name,a=e.value;return"todos"===a?null:Object(x.jsx)(b.a,{text:r,checked:n["show"+r.replace(/ /g,"")],setChecked:n["setShow"+r.replace(/ /g,"")],color:u.contrastingHexColors[t],service:a,filter:n,mode:"sm",total:"puntos"===i?Object(u.number_format)((null===d||void 0===d?void 0:d.reduce((function(e,t){var i=t.graphics_data,r=0;return Object.values(null!==i&&void 0!==i?i:{}).forEach((function(e){var t,i;r+=null!==(t=null===e||void 0===e||null===(i=e.points[o])||void 0===i?void 0:i[a])&&void 0!==t?t:0})),e+r}),0))/10,2,",","")+"\ud83d\udc8e":Math.floor(null===d||void 0===d?void 0:d.reduce((function(e,t){var i=t.graphics_data,r=0;return Object.values(null!==i&&void 0!==i?i:{}).forEach((function(e){var t,i;r+=null!==(t=null===e||void 0===e||null===(i=e.count[o])||void 0===i?void 0:i[a])&&void 0!==t?t:0})),e+r}),0))},r)}))]})}):null,Object(x.jsxs)(C,{children:[null===W||void 0===W?void 0:W.sort((function(e,t){return"points"===c?"asc"===me?"dia"===g?t.progresoDia-e.progresoDia:t.progresoMes-e.progresoMes:"dia"===g?e.progresoDia-t.progresoDia:e.progresoMes-t.progresoMes:"dialogs.messages:intervals"===c?"asc"===me?"dia"===g?t.summary1.onlineChat-e.summary1.onlineChat:t.summary2.onlineChat-e.summary2.onlineChat:"dia"===g?e.summary1.onlineChat-t.summary1.onlineChat:e.summary2.onlineChat-t.summary2.onlineChat:"dialogs.messages:messages"===c?"asc"===me?"dia"===g?t.summary1.chatMessage-e.summary1.chatMessage:t.summary2.chatMessage-e.summary2.chatMessage:"dia"===g?e.summary1.chatMessage-t.summary1.chatMessage:e.summary2.chatMessage-t.summary2.chatMessage:"dialogs.letters:send"===c?"asc"===me?"dia"===g?t.summary1.cartasRecibidas-e.summary1.cartasRecibidas:t.summary2.cartasRecibidas-e.summary2.cartasRecibidas:"dia"===g?e.summary1.cartasRecibidas-t.summary1.cartasRecibidas:e.summary2.cartasRecibidas-t.summary2.cartasRecibidas:"dialogs.letters:read"===c?"asc"===me?"dia"===g?t.summary1.cartasEnviadas-e.summary1.cartasEnviadas:t.summary2.cartasEnviadas-e.summary2.cartasEnviadas:"dia"===g?e.summary1.cartasEnviadas-t.summary1.cartasEnviadas:e.summary2.cartasEnviadas-t.summary2.cartasEnviadas:"dialogs.attachments"===c?"asc"===me?"dia"===g?t.summary1.fotos-e.summary1.fotos:t.summary2.fotos-e.summary2.fotos:"dia"===g?e.summary1.fotos-t.summary1.fotos:e.summary2.fotos-t.summary2.fotos:"cheers"===c?"asc"===me?"dia"===g?t.summary1.gifs.puntos-e.summary1.gifs.puntos:t.summary2.gifs.puntos-e.summary2.gifs.puntos:"dia"===g?e.summary1.gifs.puntos-t.summary1.gifs.puntos:e.summary2.gifs.puntos-t.summary2.gifs.puntos:"dialogs.media"===c?"asc"===me?"dia"===g?t.summary1.llamadas-e.summary1.llamadas:t.summary2.llamadas-e.summary2.llamadas:"dia"===g?e.summary1.llamadas-t.summary1.llamadas:e.summary2.llamadas-t.summary2.llamadas:"dialogs.attachments.audio"===c?"asc"===me?"dia"===g?t.summary1.audios-e.summary1.audios:t.summary2.audios-e.summary2.audios:"dia"===g?e.summary1.audios-t.summary1.audios:e.summary2.audios-t.summary2.audios:"listened-message"===c?"asc"===me?"dia"===g?t.summary1.audio_listened-e.summary1.audio_listened:t.summary2.audio_listened-e.summary2.audio_listened:"dia"===g?e.summary1.audio_listened-t.summary1.audio_listened:e.summary2.audio_listened-t.summary2.audio_listened:"received-message"===c?"asc"===me?"dia"===g?t.summary1.audio_received-e.summary1.audio_received:t.summary2.audio_received-e.summary2.audio_received:"dia"===g?e.summary1.audio_received-t.summary1.audio_received:e.summary2.audio_received-t.summary2.audio_received:"present"===c?"asc"===me?"dia"===g?t.summary1.presents.puntos-e.summary1.presents.puntos:t.summary2.presents.puntos-e.summary2.presents.puntos:"dia"===g?e.summary1.presents.puntos-t.summary1.presents.puntos:e.summary2.presents.puntos-t.summary2.presents.puntos:"porcentaje"===c?"asc"===me?"dia"===g?(0===t.summary1.audio_listened||0===t.summary1.SuperBotAudioDeliveries?0:t.summary1.audio_listened/t.summary1.SuperBotAudioDeliveries*100)-(0===e.summary1.audio_listened||0===e.summary1.SuperBotAudioDeliveries?0:e.summary1.audio_listened/e.summary1.SuperBotAudioDeliveries*100):(0===t.summary2.audio_listened||0===t.summary2.SuperBotAudioDeliveries?0:t.summary2.audio_listened/t.summary2.SuperBotAudioDeliveries*100)-(0===e.summary2.audio_listened||0===e.summary2.SuperBotAudioDeliveries?0:e.summary2.audio_listened/e.summary2.SuperBotAudioDeliveries*100):"dia"===g?(0===t.summary1.audio_listened||0===t.summary1.SuperBotAudioDeliveries?0:t.summary1.audio_listened/t.summary1.SuperBotAudioDeliveries*100)-(0===e.summary1.audio_listened||0===e.summary1.SuperBotAudioDeliveries?0:e.summary1.audio_listened/e.summary1.SuperBotAudioDeliveries*100):(0===e.summary2.audio_listened||0===e.summary2.SuperBotAudioDeliveries?0:e.summary2.audio_listened/e.summary2.SuperBotAudioDeliveries*100)-(0===t.summary2.audio_listened||0===t.summary2.SuperBotAudioDeliveries?0:t.summary2.audio_listened/t.summary2.SuperBotAudioDeliveries*100):"SuperBotAudioDeliveries"===c?"asc"===me?"dia"===g?t.summary1.SuperBotAudioDeliveries-e.summary1.SuperBotAudioDeliveries:t.summary2.SuperBotAudioDeliveries-e.summary2.SuperBotAudioDeliveries:"dia"===g?e.summary1.SuperBotAudioDeliveries-t.summary1.SuperBotAudioDeliveries:e.summary2.SuperBotAudioDeliveries-t.summary2.SuperBotAudioDeliveries:"SuperBotPhotoDeliveries"===c?"asc"===me?"dia"===g?t.summary1.SuperBotPhotoDeliveries-e.summary1.SuperBotPhotoDeliveries:t.summary2.SuperBotPhotoDeliveries-e.summary2.SuperBotPhotoDeliveries:"dia"===g?e.summary1.SuperBotPhotoDeliveries-t.summary1.SuperBotPhotoDeliveries:e.summary2.SuperBotPhotoDeliveries-t.summary2.SuperBotPhotoDeliveries:"SuperBotVideoDeliveries"===c?"asc"===me?"dia"===g?t.summary1.SuperBotVideoDeliveries-e.summary1.SuperBotVideoDeliveries:t.summary2.SuperBotVideoDeliveries-e.summary2.SuperBotVideoDeliveries:"dia"===g?e.summary1.SuperBotVideoDeliveries-t.summary1.SuperBotVideoDeliveries:e.summary2.SuperBotVideoDeliveries-t.summary2.SuperBotVideoDeliveries:"asc"===me?"dia"===g?t.progresoDia-e.progresoDia:t.progresoMes-e.progresoMes:"dia"===g?e.progresoDia-t.progresoDia:e.progresoMes-t.progresoMes})).map((function(e){var a,s;if("supervisor"===z.entity){var u=z.ids;if(!u.includes(e.supervisorId)&&!u.includes(e.id)&&!(null!==q&&void 0!==q?q:[]).filter((function(e){return u.includes(e.id)})).map((function(e){return e.substitute})).includes(+e.id))return null}if("agency"===z.entity){var c=z.id;if(e.agency_id!==c)return null}for(var h=0,g=0;g<((null===ue||void 0===ue?void 0:ue.length)||-1);g++){var b;if(e.id===+(null!==(b=ue[g].extraUserId)&&void 0!==b?b:ue[g].userId)&&"feeds"===ue[g].tablename){var O=new Date(ue[g].timestamp);h=Date.UTC(O.getFullYear(),O.getMonth(),O.getDate(),O.getHours(),O.getMinutes(),O.getSeconds(),O.getMilliseconds());break}}return Object(x.jsxs)(l.Fragment,{children:[Object(x.jsx)(f.b,{id:""+e.id,children:Object(x.jsx)(p.a,Object(r.a)(Object(r.a)({},Object(r.a)(Object(r.a)({},e),{},{summary1:null===N||void 0===N?void 0:N.summaryDia[e.id],summary2:null===N||void 0===N?void 0:N.summaryMes[e.id],puntos1:e.progresoDia,puntos2:e.progresoMes,latestFeedTimestamp:h,usarMultasOAvisos:V,modeGraphics:t,modeAsig:ee,modeTom:te,assign_profiles:e.assign_profiles,graphics_data:{filter:n,data:null!==(a=null===d||void 0===d||null===(s=d.find((function(t){return t.id===e.id})))||void 0===s?void 0:s.graphics_data)&&void 0!==a?a:[],showPuntosOrServicio:i,showBonusOrWriteoff:o},freedays:e.diasLibresOperador,roleOperator:e.role,typeWidth:y,setDataEntities:v,setShowModal:S,setOperatorSelect:re,operatorSelect:ie,modeSelect:ae,modeAgencia:de,modeDiasLibres:oe})),{},{tipoEntidad:"operador"}))}),Object(x.jsxs)(F,{id:""+e.id,children:["admin"===m?Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(f.c,{onClick:function(){Z(!0),$(e.id)},children:"Configurar"}),Object(x.jsx)(f.c,{onClick:function(){Q(!0),X("operator"),Y(-1),K(e.id)},children:"Ficha Tecnica"})]}):null,"admin"===m||"supervisor"===m?Object(x.jsxs)(x.Fragment,{children:["operator"===e.role?Object(x.jsx)(f.c,{onClick:function(t){return H(t,e.id)},children:"Convertir en Soporte"}):"support"===e.role?Object(x.jsx)(f.c,{onClick:function(t){return U(t,e.id)},children:"Convertir en Full Time"}):null,Object(x.jsx)(f.c,{onClick:function(){ne(!0),J(e.id)},children:"Multar"})]}):null,Object(x.jsx)(f.c,{onClick:function(){T(!0),J(e.id)},children:"Ver multas"}),Object(x.jsx)(f.c,{onClick:function(){k(!0),J(e.id)},children:"Ver progreso de metas"}),"admin"===m?Object(x.jsx)(x.Fragment,{children:!0===e.hidden?Object(x.jsx)(f.c,{onClick:function(t){"qaz"===prompt("Ingrese clave")&&G(t,e.id,"show")},children:"Mostrar"}):Object(x.jsx)(f.c,{onClick:function(t){"qaz"===prompt("Ingrese clave")&&G(t,e.id,"hidden")},children:"Ocultar"})}):null]})]},"Operator"+e.id)})),_?Object(x.jsx)(l.Suspense,{fallback:Object(x.jsx)("div",{children:"Loading..."}),children:Object(x.jsx)(j,{operadorId:B,setShowMultasModal:T})}):null,se?Object(x.jsx)(l.Suspense,{fallback:Object(x.jsx)("div",{children:"Loading..."}),children:Object(x.jsx)(O,{operadorId:B,setShowWriteFinesModal:ne})}):null,D?Object(x.jsx)(l.Suspense,{fallback:Object(x.jsx)("div",{children:"Loading..."}),children:Object(x.jsx)(w,{operadorId:B,setShowMetasOperadorModal:k})}):null]})]})};t.default=function(e){var t,i,o,d,m,p,h=e.setshowConfigModal,f=e.setConfigIdOperator,g=e.customDate,b=e.entidadSeleccionadaFeed,O=e.orden,w=e.multasOAvisos,j=e.typeWidth,S=e.operatorSort,C=e.setTypeFichaTecnica,D=e.setProfileIdFichaTecnica,M=e.setIdFichaTecnica,I=e.setShowFichaTecnica,B=e.setShowModal,A=e.setDataEntities,k=e.modeGraphics,F=e.modeHidden,R=e.countEntities,L=e.setCountEntities,P=e.operatorType,E=e.modeAsig,W=e.modeTom,z=e.orderBy,q=e.operatorSelect,V=e.setOperatorSelect,G=e.modeSelect,J=e.countryFilter,H=e.modeDiasLibres,U=e.modeAgencia,Q=e.sortBy,X=y.a.get("role"),Y=+y.a.get("id"),K=Object(c.d)(["operadores",g],u.fetchOperadores,{refetchInterval:72e4,refetchOnMount:!1}),Z=K.data,$=K.status,ee=Object(c.d)(["feedsSummary",g],T),te=ee.data,ie=ee.status,re=Object(c.d)(["operators-graphics",g,k],_),ae=re.data,oe=re.status,se=Object(l.useState)(!1),ne=Object(a.a)(se,2),de=ne[0],me=ne[1],ue=Object(l.useState)(!0),ce=Object(a.a)(ue,2),pe=ce[0],le=ce[1],he=function(){var e=Object(n.a)(s.a.mark((function e(t,i){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),t.currentTarget.disabled=!0,e.next=5,Object(u.customFetch)("/operators/make-operator",{headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i}),method:"POST"});case 5:return e.next=7,Object(u.refetchOperador)(i);case 7:me(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),fe=function(){var e=Object(n.a)(s.a.mark((function e(t,i){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),t.currentTarget.disabled=!0,e.next=5,Object(u.customFetch)("/operators/make-support",{headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i}),method:"POST"});case 5:return e.next=7,Object(u.refetchOperador)(i);case 7:me(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),ge=function(){var e=Object(n.a)(s.a.mark((function e(t,i,r){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),t.currentTarget.disabled=!0,e.next=5,Object(u.customFetch)("/operators/show-hidden",{headers:{"Content-Type":"application/json"},body:JSON.stringify({id:i,method:r}),method:"POST"});case 5:return e.next=7,Object(u.refetchOperador)(i);case 7:me(!1);case 8:case"end":return e.stop()}}),e)})));return function(t,i,r){return e.apply(this,arguments)}}(),ye=Object(l.useState)(!1),be=Object(a.a)(ye,2),ve=be[0],xe=be[1],Oe=Object(l.useState)(!1),we=Object(a.a)(Oe,2),je=we[0],Se=we[1],_e=Object(l.useState)(!1),Ce=Object(a.a)(_e,2),De=Ce[0],Me=Ce[1],Ie=Object(l.useState)(0),Te=Object(a.a)(Ie,2),Be=Te[0],Ae=Te[1],ke=c.b.getQueryData(["supervisores"]),Fe=Object(l.useState)("bonus"),Re=Object(a.a)(Fe,2),Le=Re[0],Pe=Re[1],Ee=Object(l.useState)("puntos"),Ne=Object(a.a)(Ee,2),We=Ne[0],ze=Ne[1],qe=Object(u.useFilterGraphFilter)(),Ve=+y.a.get("agency_id"),Ge=null===Z||void 0===Z||null===(t=Z.filter((function(e){return e.country===J||""===J||"notCountry"===J&&(null===e.country||""===e.country)})))||void 0===t||null===(i=t.filter((function(e){return"operator"!==X&&"support"!==X||e.id===Y})))||void 0===i||null===(o=i.filter((function(e){return!0===F?e.hidden:!e.hidden})))||void 0===o||null===(d=o.filter((function(e){return"offline"===S?!1===e.pausado&&0===e.perfiles.length:"online"!==S||e.perfiles.length>0}),[S]))||void 0===d||null===(m=d.filter((function(e){return"support"===P?"support"===e.role:"operator"!==P||("operator"===e.role||"supervisor"===e.role)}),[P]))||void 0===m||null===(p=m.filter((function(e){return 1===Ve||Ve===e.agency_id})))||void 0===p?void 0:p.filter((function(e){if("supervisor"===b.entity){var t=b.ids;if(!t.includes(e.supervisorId)&&!t.includes(e.id)&&!(null!==ke&&void 0!==ke?ke:[]).filter((function(e){return t.includes(e.id)})).map((function(e){return e.substitute})).includes(+e.id))return!1}if("agency"===b.entity){var i=b.id;if(e.agency_id!==i)return!1}return!0})).map((function(e){return Object(r.a)(Object(r.a)({},e),{},{summary1:null===te||void 0===te?void 0:te.summaryDia[e.id],summary2:null===te||void 0===te?void 0:te.summaryMes[e.id]})}));return-1===R&&"success"===$&&L(Ge.length),"success"===$&&"success"===ie&&"success"===oe&&pe&&le(!1),Object(x.jsx)(x.Fragment,{children:de||pe?Object(x.jsx)(v.a,{}):Object(x.jsx)(x.Fragment,{children:Object(x.jsx)(N,{modeGraphics:k,showPuntosOrServicio:We,setShowPuntosOrServicio:ze,showBonusOrWriteoff:Le,setShowBonusOrWriteoff:Pe,filter:qe,graphics_datas:ae,role:X,orderBy:z,orden:O,typeWidth:j,setDataEntities:A,setShowModal:B,showMultasModal:ve,showMetasOperadorModal:De,setShowMultasModal:xe,operadorSeleccionadoId:Be,setShowMetasOperadorModal:Me,feedsSummaries:te,operadorResp:Ge,entidadSeleccionadaFeed:b,supervisores:ke,multasOAvisos:w,OcultarMostrar:ge,setOperadorSeleccionadoId:Ae,ConvertirSoporte:fe,ConvertirOperador:he,setShowFichaTecnica:I,setTypeFichaTecnica:C,setProfileIdFichaTecnica:D,setIdFichaTecnica:M,setshowConfigModal:h,setConfigIdOperator:f,modeAsig:E,modeTom:W,operatorSelect:q,setOperatorSelect:V,modeSelect:G,modeDiasLibres:H,showWriteFinesModal:je,setShowWriteFinesModal:Se,modeAgencia:U,sortBy:Q})})})}}}]);