(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[18],{108:function(e,i,t){"use strict";t.d(i,"b",(function(){return h}));var a=t(6),r=t(20),n=t(3),d=t(1),s=t(10).ActionIcon,o=Object(n.d)(s).withConfig({displayName:"ColoredCheckbox___StyledActionIcon",componentId:"sc-2a66eg-0"})(["",""],(function(e){return e._css2})),m=n.d.div.withConfig({displayName:"ColoredCheckbox__DivColor",componentId:"sc-2a66eg-1"})(["",""],(function(e){return!0===e.checked?{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}})),u=Object(n.d)(m).withConfig({displayName:"ColoredCheckbox___StyledDivColor",componentId:"sc-2a66eg-2"})(["",""],(function(e){return e._css})),l=Object(n.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv",componentId:"sc-2a66eg-3"})({display:"flex",justifyContent:"center"}),c=Object(n.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv2",componentId:"sc-2a66eg-4"})({display:"flex",justifyContent:"center"}),p=Object(n.d)("span").withConfig({displayName:"ColoredCheckbox___StyledSpan",componentId:"sc-2a66eg-5"})(["",""],(function(e){return e._css3})),h=function(e,i){var t,n=!0,d=Object(r.a)(Object.entries(e).filter((function(e){var t=Object(a.a)(e,1)[0];return t.startsWith("show")&&t!=="show"+i.replace(/ /g,"")&&"setShowClientesOld"!==t&&"setShowClientesNew"!==t&&"setShowClients"!==t&&"setShowReports"!==t})));try{for(d.s();!(t=d.n()).done;){Object(a.a)(t.value,2)[1]&&(n=!1)}}catch(v){d.e(v)}finally{d.f()}if(e["show"+i.replace(/ /g,"")]&&n){var s,o=Object(r.a)(Object.entries(e).filter((function(e){return Object(a.a)(e,1)[0].startsWith("set")})));try{for(o.s();!(s=o.n()).done;){var m=Object(a.a)(s.value,2),u=m[0],l=m[1];"setShowClientesOld"!==u&&"setShowClientesNew"!==u&&"setShowClients"!==u&&"setShowReports"!==u&&l(!0)}}catch(v){o.e(v)}finally{o.f()}}else for(var c=0,p=Object.entries(e);c<p.length;c++){var h=Object(a.a)(p[c],2),g=h[0],f=h[1];if("setShowClientesOld"!==g&&"setShowClientesNew"!==g&&"setShowClients"!==g&&"setShowReports"!==g){if("function"!==typeof f)continue;g==="setShow"+i.replace(/ /g,"")?f(!0):f(!1)}else f(!1)}};i.a=function(e){var i=e.text,t=e.checked,a=e.setChecked,r=e.color,n=e.service,s=e.filter,m=e.total,g=e.mode,f=void 0===g?"":g,v=e.title;return Object(d.jsxs)(u,{style:!0===t?{backgroundColor:r}:{borderColor:r},checked:t,title:i,onDoubleClick:function(){return h(s,i)},onClick:function(){return a(!0!==t)},_css:[{paddingLeft:"0.125rem",borderWidth:"1px",flexShrink:"0",display:"flex",alignItems:"center",flexDirection:"column",cursor:"pointer","@media (min-width: 768px)":{borderRadius:"0.375rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",gap:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",paddingTop:"0.4rem",paddingBottom:"0.4rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",paddingTop:"0.7rem",paddingBottom:"0.7rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",paddingLeft:"0.15rem",paddingRight:"0.15rem",paddingTop:"0.8rem",paddingBottom:"0.8rem"}},""===f?"@media (min-width: 2560px) { padding: 0.75rem !important; grid-gap: 0.5rem !important; }":"@media (min-width: 2560px) { padding: 0.45rem !important; grid-gap: 0.25rem !important; }"],children:[Object(d.jsx)(l,{children:void 0===v?Object(d.jsx)(o,{type:n,_css2:[{width:"auto","@media (min-width: 768px)":{height:"0.6rem"},"@media (min-width: 1024px)":{height:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{height:"0.7rem"},"@media (min-width: 1536px)":{height:"0.9rem"}},""===f?"@media (min-width: 2560px) { height: 1.75rem !important; }":"@media (min-width: 2560px) { height: 1.25rem !important; }"]}):v}),Object(d.jsx)(c,{children:Object(d.jsx)(p,{_css3:[{fontWeight:"700","@media (min-width: 768px)":{fontSize:"0.25rem"},"@media (min-width: 1024px)":{fontSize:"0.3rem"},"@media (min-width: 1280px)":{fontSize:"0.45rem"},"@media (min-width: 1536px)":{fontSize:"0.5rem"}},""===f?"@media (min-width: 2560px) { font-size: 0.75rem !important; }":"@media (min-width: 2560px) { font-size: 0.65rem !important; }"],children:m})})]})}},134:function(e,i,t){"use strict";var a=t(5),r=t(21),n=t(114),d=t(8),s=t.n(d),o=t(1);i.a=function(e){var i=e.id,t=e.nombre,d=e.foto,m=e.puntos1,u=e.puntos2,l=e.summary1,c=e.summary2,p=e.supervisorId,h=e.usarMultasOAvisos,g=e.noModal,f=e.tipoEntidad,v=e.amolatinaId,y=e.metaDia,S=e.metaMes,b=e.latestFeedTimestamp,x=e.fineCount,w=e.fineAlertCount,j=e.first_point,C=e.contenidos,_=e.agency_id,O=e.country,D=e.online,T=e.mingle,B=e.introductory,I=e.operador,P=e.operadorDePausa,k=e.operadoresAsignadosIds,M=e.missingMingleTimestamp,A=e.offlineTimestamp,R=e.unrepliedLettersTimestamps,L=e.token,F=e.media,N=e.modeGraphics,E=e.modeAsig,W=e.modeTom,q=e.graphics_data,z=e.botLetterLength,V=e.resume,G=e.graphics_resume,J=e.shift,H=e.assign_profiles,Q=e.perfiles,U=e.perfilesPausados,X=e.pausado,Y=e.typeWidth,K=e.setShowModal,Z=e.setDataEntities,$=e.freedays,ee=e.setOperatorSelect,ie=e.operatorSelect,te=e.modeSelect,ae=e.roleOperator,re=e.modeDiasLibres,ne=e.modeAgencia,de=e.modeResumen,se=e.newClients,oe=s.a.get("role"),me=+s.a.get("id");return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("button",{onClick:function(){if(te){var e=null===ie||void 0===ie?void 0:ie.find((function(e){return e===i}));ee(e?ie.filter((function(e){return e!==i})):[].concat(Object(r.a)(ie),[i]))}else{if(["shift","supervisor","admin"].includes(oe))return Z(Object(a.a)({},{id:i,nombre:t,foto:d,puntos1:m,puntos2:u,summary1:l,summary2:c,supervisorId:p,usarMultasOAvisos:h,noModal:g,tipoEntidad:f,amolatinaId:v,metaDia:y,metaMes:S,latestFeedTimestamp:b,fineCount:x,fineAlertCount:w,first_point:j,contenidos:C,agency_id:_,online:D,mingle:T,introductory:B,operador:I,operadorDePausa:P,operadoresAsignadosIds:k,missingMingleTimestamp:M,offlineTimestamp:A,unrepliedLettersTimestamps:R,token:L,media:F,modeGraphics:N,modeAsig:E,modeTom:W,graphics_data:q,botLetterLength:z,shift:J,assign_profiles:H,perfiles:Q,perfilesPausados:U,pausado:X,typeWidth:Y,setShowModal:K,setDataEntities:Z})),K(!0);if((null===I||void 0===I?void 0:I.id)===me&&"perfil"===f)return Z(Object(a.a)({},{id:i,nombre:t,foto:d,puntos1:m,puntos2:u,summary1:l,summary2:c,supervisorId:p,usarMultasOAvisos:h,noModal:g,tipoEntidad:f,amolatinaId:v,metaDia:y,metaMes:S,latestFeedTimestamp:b,fineCount:x,fineAlertCount:w,first_point:j,contenidos:C,agency_id:_,online:D,mingle:T,introductory:B,operador:I,operadorDePausa:P,operadoresAsignadosIds:k,missingMingleTimestamp:M,offlineTimestamp:A,unrepliedLettersTimestamps:R,token:L,media:F,modeGraphics:N,modeAsig:E,modeTom:W,graphics_data:q,botLetterLength:z,shift:J,assign_profiles:H,perfiles:Q,perfilesPausados:U,pausado:X,typeWidth:Y,setShowModal:K,setDataEntities:Z})),K(!0);if(i===me&&"operador"===f)return Z({id:i,nombre:t,foto:d,puntos1:m,puntos2:u,summary1:l,summary2:c,supervisorId:p,usarMultasOAvisos:h,noModal:g,tipoEntidad:f,amolatinaId:v,metaDia:y,metaMes:S,latestFeedTimestamp:b,fineCount:x,fineAlertCount:w,agency_id:_,online:D,mingle:T,introductory:B,operador:I,operadorDePausa:P,operadoresAsignadosIds:k,missingMingleTimestamp:M,offlineTimestamp:A,unrepliedLettersTimestamps:R,token:L,perfiles:Q,perfilesPausados:U,pausado:X,first_point:j,shift:J}),K(!0)}},children:Object(o.jsx)(n.a,{id:i,nombre:t,foto:d,puntos1:m,puntos2:u,summary1:l,summary2:c,tipoEntidad:f,meta1:y,meta2:S,latestFeedTimestamp:b,usarMultasOAvisos:h,fineCount1:null===x||void 0===x?void 0:x.dia,fineAlertCount1:null===w||void 0===w?void 0:w.dia,fineCount2:null===x||void 0===x?void 0:x.mes,fineAlertCount2:null===w||void 0===w?void 0:w.mes,first_point:j,contenidos:C,agency_id:_,country:O,online:D,mingle:T,introductory:B,operador:I,operadorDePausa:P,operadoresAsignadosIds:k,missingMingleTimestamp:M,offlineTimestamp:A,unrepliedLettersTimestamps:R,token:L,media:F,modeGraphics:N,modeAsig:E,modeTom:W,graphics_data:q,botLetterLength:z,resume:V,supervisorId:p,roleOperator:ae,shift:J,freedays:$,assign_profiles:H,perfiles:Q,perfilesPausados:U,pausado:X,typeWidth:Y,statusSelect:(null===ie||void 0===ie?void 0:ie.filter((function(e){return e===i})).length)>0,modeDiasLibres:re,modeAgencia:ne,modeResumen:de,graphics_resume:G,newClients:se})})})}},453:function(e,i,t){"use strict";t.r(i);var a=t(5),r=t(6),n=t(2),d=t.n(n),s=t(7),o=t(3),m=t(29),u=t(10),l=t(12),c=t(134),p=t(0),h=t(131),g=t(99),f=t(8),v=t.n(f),y=t(43),S=t(108),b=t(1),x=o.d.div.withConfig({displayName:"Perfiles__PerfilesDiv",componentId:"m36yex-0"})(["@media (min-width:2560px){padding-top:20px !important;padding-right:10px !important;padding-left:16px !important;grid-gap:32px !important;}"," .react-contextmenu-wrapper{width:10% !important;}",""],{marginTop:"12px",paddingBottom:"20px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",display:"grid",alignItems:"flex-start",overflowX:"hidden","@media (min-width: 768px)":{paddingTop:"5px",paddingRight:"2px",paddingLeft:"2px",gap:"6px"},"@media (min-width: 1024px)":{gap:"10px",paddingTop:"10px",paddingRight:"5px"},"@media (min-width: 1280px)":{gap:"12px",paddingTop:"12px",paddingRight:"6px",paddingLeft:"4px"}},m.b),w=o.d.div.withConfig({displayName:"Perfiles__DivRadio",componentId:"m36yex-1"})(['input[type="radio"]{@media (min-width:2560px){width:16px !important;height:16px !important;margin-right:8px !important;border:2px solid #4c4c3f !important;}'," appearance:none;}input:checked{@media (min-width:2560px){border:6px solid #4c4c3f !important;}","}"],{width:"4px",height:"4px",cursor:"pointer",borderRadius:"50%","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"6px",height:"6px",marginRight:"2px",border:"1px solid #4c4c3f"},"@media (min-width: 1024px)":{width:"8px",height:"8px"},"@media (min-width: 1280px)":{width:"12px",height:"12px"}},{border:"1px solid #4c4c3f","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{border:"2px solid #4c4c3f"},"@media (min-width: 1024px)":{border:"4px solid #4c4c3f"},"@media (min-width: 1280px)":{border:"4px solid #4c4c3f"}}),j=Object(o.d)(w).withConfig({displayName:"Perfiles___StyledDivRadio2",componentId:"m36yex-5"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),C=Object(o.d)(w).withConfig({displayName:"Perfiles___StyledDivRadio",componentId:"m36yex-6"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),_=function(){var e=Object(s.a)(d.a.mark((function e(i,t,a){var r,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t){e.next=2;break}return e.abrupt("return",null);case 2:return r=+v.a.get("agency_id"),n="",a!==(new Date).toISOString().slice(0,-14)&&(n="&CustomDay="+a),e.next=7,Object(u.customFetch)("/profiles/graphics?agencyId=".concat(r).concat(n));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(i,t,a){return e.apply(this,arguments)}}(),O=function(){var e=Object(s.a)(d.a.mark((function e(i,t,a,r){var n,s;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t&&a){e.next=2;break}return e.abrupt("return",null);case 2:return n=+v.a.get("agency_id"),s="",r!==(new Date).toISOString().slice(0,-14)&&(s="&CustomDay="+r),e.next=7,Object(u.customFetch)("/profiles/graphics-resume?agencyId=".concat(n).concat(s));case 7:return e.abrupt("return",e.sent);case 8:case"end":return e.stop()}}),e)})));return function(i,t,a,r){return e.apply(this,arguments)}}(),D=Object(o.d)("div").withConfig({displayName:"Perfiles___StyledDiv",componentId:"m36yex-2"})(["@media (min-width:2560px){grid-gap:0.5rem !important;}"]),T=Object(o.d)(D).withConfig({displayName:"Perfiles___Styled_StyledDiv",componentId:"m36yex-7"})({display:"flex",alignItems:"center","@media (min-width: 768px)":{gap:"0.125rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem"},"@media (min-width: 1024px)":{paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{gap:"0.25rem"}}),B=Object(o.d)("div").withConfig({displayName:"Perfiles___StyledDiv2",componentId:"m36yex-3"})(["@media (min-width:2560px){grid-gap:0.5rem !important;}"]),I=Object(o.d)(B).withConfig({displayName:"Perfiles___Styled_StyledDiv2",componentId:"m36yex-8"})({display:"flex",alignItems:"center","@media (min-width: 768px)":{gap:"0.125rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem"},"@media (min-width: 1024px)":{paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{gap:"0.25rem"}}),P=Object(o.d)(g.a).withConfig({displayName:"Perfiles___StyledContextMenu",componentId:"m36yex-4"})(["@media (min-width:2560px){font-size:1rem !important;}"]),k=Object(o.d)(P).withConfig({displayName:"Perfiles___Styled_StyledContextMenu",componentId:"m36yex-9"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}}),M=Object(o.d)("label").withConfig({displayName:"Perfiles___StyledLabel",componentId:"m36yex-10"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"}}),A=Object(o.d)("label").withConfig({displayName:"Perfiles___StyledLabel2",componentId:"m36yex-11"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"}}),R=Object(o.d)("label").withConfig({displayName:"Perfiles___StyledLabel3",componentId:"m36yex-12"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),L=Object(o.d)("label").withConfig({displayName:"Perfiles___StyledLabel4",componentId:"m36yex-13"})({display:"flex",alignItems:"center",justifyContent:"space-between","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}});i.default=function(e){var i,t,n,o,m,f,w,D,B,P,F=e.entidadSeleccionadaFeed,N=e.orden,E=e.multasOAvisos,W=e.typeWidth,q=e.setTypeFichaTecnica,z=e.setProfileIdFichaTecnica,V=e.setIdFichaTecnica,G=e.setShowFichaTecnica,J=e.pauseperfilView,H=e.perfilSort,Q=e.setShowModal,U=e.setDataEntities,X=e.contenidos,Y=e.modeGraphics,K=e.modeHidden,Z=e.perfilTaken,$=e.setPerfilSeleccionadoId,ee=e.setShowPresentesModal,ie=e.setShowChangeImageModal,te=e.setShowTokenModal,ae=e.setShowSuperCartasBotModal,re=e.setShowCartas24BotModal,ne=e.countEntities,de=e.setCountEntities,se=e.modeAsig,oe=e.modeTom,me=e.orderBy,ue=e.setListClientsProfileId,le=e.setShowListClients,ce=e.countryFilter,pe=e.setShowReportClient,he=e.modeResumen,ge=e.modeAgencia,fe=e.customDate,ve=e.sortBy,ye=Object(p.useState)(!0),Se=Object(r.a)(ye,2),be=Se[0],xe=Se[1],we=v.a.get("role"),je=+v.a.get("id"),Ce=+v.a.get("agency_id"),_e=l.b.getQueryData(["agency"]),Oe=Object(l.d)(["perfiles",fe],u.fetchPerfiles,{refetchInterval:72e4,refetchOnMount:!1}),De=Oe.data,Te=Oe.status,Be=l.b.getQueryData(["operadores",fe]),Ie=Object(l.d)(["profiles-graphics",Y,fe],_),Pe=Ie.data,ke=Ie.status,Me=Object(l.d)(["resume-graphics",Y,he,fe],O),Ae=Me.data,Re=Me.status,Le=null===Be||void 0===Be?void 0:Be.find((function(e){return e.id===je})),Fe=null===_e||void 0===_e?void 0:_e.find((function(e){return e.id===Ce})),Ne=Object(p.useContext)(h.b),Ee=Object(p.useState)("bonus"),We=Object(r.a)(Ee,2),qe=We[0],ze=We[1],Ve=Object(p.useState)("puntos"),Ge=Object(r.a)(Ve,2),Je=Ge[0],He=Ge[1],Qe=Object(p.useState)(!1),Ue=Object(r.a)(Qe,2),Xe=Ue[0],Ye=Ue[1],Ke=null===De||void 0===De||null===(i=De.filter((function(e){return e.country===ce||""===ce||"notCountry"===ce&&(null===e.country||""===e.country)})))||void 0===i||null===(t=i.filter((function(e){var i,t;return!!["shift","supervisor","admin"].includes(we)||("admin"!==we&&(null===(i=e.operador)||void 0===i?void 0:i.id)===je&&!(null===Le||void 0===Le?void 0:Le.pausado)||(null===(t=e.operadorDePausa)||void 0===t?void 0:t.id)===je||"admin"!==we&&e.libre&&!(null===Le||void 0===Le?void 0:Le.pausado))}),[we,je,Le]))||void 0===t||null===(n=t.filter((function(e){return!0===K?!0===e.hidden:!1===e.hidden})))||void 0===n||null===(o=n.filter((function(e){return!!["shift","supervisor","admin"].includes(we)||(!0!==(null===Fe||void 0===Fe?void 0:Fe.viewonlyprofiles)||((null===Le||void 0===Le||null===(i=Le.assign_profiles)||void 0===i?void 0:i.includes(e.id))||(null===e||void 0===e||null===(t=e.operador)||void 0===t?void 0:t.id)===je));var i,t})))||void 0===o||null===(m=o.filter((function(e){return e.activo})))||void 0===m||null===(f=m.filter((function(e){return"offline"===H?!1===e.online:"online"!==H||!0===e.online}),[H]))||void 0===f||null===(w=f.filter((function(e){return"take"===Z?null!==e.operador:"release"!==Z||null===e.operador}),[Z]))||void 0===w||null===(D=w.filter((function(e){return"pause"===J?!0===e.pausado:"notpause"===J?!1===e.pausado:e.nombre}),[J]))||void 0===D||null===(B=D.filter((function(e){return 1===Ce||Ce===e.agency_id}),[Ce]))||void 0===B?void 0:B.filter((function(e){if("agency"===F.entity){var i=F.id;if(e.agency_id!==i)return!1}return!0}));-1===ne&&"success"===Te&&de(null!==(P=null===Ke||void 0===Ke?void 0:Ke.length)&&void 0!==P?P:0);var Ze=function(){var e=Object(s.a)(d.a.mark((function e(i,t,a){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=i.currentTarget).disabled=!0,e.next=4,Object(u.customFetch)("/profiles/show-hidden",{headers:{"Content-Type":"application/json"},body:JSON.stringify({id:t,method:a}),method:"POST"});case 4:return e.next=6,Object(u.refetchPerfil)(t);case 6:setTimeout((function(){r.disabled=!1}),2e3);case 7:case"end":return e.stop()}}),e)})));return function(i,t,a){return e.apply(this,arguments)}}(),$e=function(){var e=Object(s.a)(d.a.mark((function e(i,t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ye(!0),(a=i.currentTarget).disabled=!0,e.next=5,Object(u.customFetch)("/profiles/select",{headers:{"Content-Type":"application/json"},body:JSON.stringify({list_id:[t]}),method:"POST"});case 5:return r=e.sent,e.next=8,Object(u.refetchPerfil)(t);case 8:Object(u.errorPerfilesToast)(r,"toma"),setTimeout((function(){Ye(!1),a.disabled=!1}),2e3);case 10:case"end":return e.stop()}}),e)})));return function(i,t){return e.apply(this,arguments)}}(),ei=function(){var e=Object(s.a)(d.a.mark((function e(i,t){var a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return Ye(!0),(a=i.currentTarget).disabled=!0,e.next=5,Object(u.customFetch)("/profiles/release",{headers:{"Content-Type":"application/json"},body:JSON.stringify({list_id:[t]}),method:"POST"});case 5:return r=e.sent,e.next=8,Object(u.refetchPerfil)(t);case 8:Object(u.errorPerfilesToast)(r,"liberacion"),setTimeout((function(){Ye(!1),a.disabled=!1}),2e3);case 10:case"end":return e.stop()}}),e)})));return function(i,t){return e.apply(this,arguments)}}(),ii=Object(u.useFilterGraphFilter)();return"success"===Te&&"success"===ke&&"success"===Re&&be&&xe(!1),Object(b.jsx)(b.Fragment,{children:be?Object(b.jsx)(y.a,{}):Object(b.jsxs)(b.Fragment,{children:[Y&&!he?Object(b.jsx)(b.Fragment,{children:Object(b.jsxs)(T,{children:[Object(b.jsxs)(C,{children:[Object(b.jsxs)(M,{children:["Diamantes",Object(b.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"puntos"===Je,onChange:function(){return He("puntos")}})]}),Object(b.jsxs)(A,{children:["Cantidad",Object(b.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"servicio"===Je,onChange:function(){return He("servicio")}})]})]}),Object(b.jsxs)(j,{children:[Object(b.jsxs)(R,{children:["Bonus",Object(b.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"bonus"===qe,onChange:function(){return ze("bonus")}})]}),Object(b.jsxs)(L,{children:["Writeoff",Object(b.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"writeoff"===qe,onChange:function(){return ze("writeoff")}})]})]}),("bonus"===qe?u.bonusTypes:u.writeoffTypes).map((function(e,i){var t=e.name,a=e.value;return"todos"===a?null:Object(b.jsx)(S.a,{text:t,checked:ii["show"+t.replace(/ /g,"")],setChecked:ii["setShow"+t.replace(/ /g,"")],color:u.contrastingHexColors[i],service:a,filter:ii,mode:"sm",total:"puntos"===Je?Object(u.number_format)((null===Pe||void 0===Pe?void 0:Pe.reduce((function(e,i){var t=i.graphics_data,r=0;return Object.values(null!==t&&void 0!==t?t:{}).forEach((function(e){var i,t;r+=null!==(i=null===e||void 0===e||null===(t=e.points[qe])||void 0===t?void 0:t[a])&&void 0!==i?i:0})),e+r}),0))/10,2,",","")+"\ud83d\udc8e":Math.floor(null===Pe||void 0===Pe?void 0:Pe.reduce((function(e,i){var t=i.graphics_data,r=0;return Object.values(null!==t&&void 0!==t?t:{}).forEach((function(e){var i,t;r+=null!==(i=null===e||void 0===e||null===(t=e.count[qe])||void 0===t?void 0:t[a])&&void 0!==i?i:0})),e+r}),0))},t)}))]})}):null,Y&&he?Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(I,{children:u.resumeTypes.map((function(e,i){var t=e.name,a=e.value;return"todos"===a?null:Object(b.jsx)(S.a,{title:[{service:"receivedinvites",name:"Recibidos"},{service:"missedinvites",name:"Perdidas"},{service:"sentinvitesauto",name:"Mingles"},{service:"sentinvitesmanual",name:"Manuales"},{service:"chatquantity",name:"Chats"},{service:"averagechatlength",name:"P/chats"}].find((function(e){return e.service===a})).name,text:t,checked:ii["show"+t.replace(/ /g,"")],setChecked:ii["setShow"+t.replace(/ /g,"")],color:u.contrastingHexColors[i],service:a,filter:ii,total:Math.floor(null===Ae||void 0===Ae?void 0:Ae.reduce((function(e,i){var t=i.graphics_data,r=0;return Object.values(null!==t&&void 0!==t?t:{}).forEach((function(e){var i,t;r+=null!==(i=null===e||void 0===e||null===(t=e.profiles)||void 0===t?void 0:t[a])&&void 0!==i?i:0})),e+r}),0))},t)}))})}):null,Object(b.jsx)(x,{children:null===Ke||void 0===Ke?void 0:Ke.sort((function(e,i){var t,a,r,n,d,s,o,m,u=function(e){var i;return(null===(i=e.operador)||void 0===i?void 0:i.id)===je?2e6:0},l=function(e){return e.libre?1e6:0};return"receivedinvites"===me?"asc"===ve?"dia"===N?i.resume.dia.receivedinvites+u(i)+l(i)-(e.resume.dia.receivedinvites+u(e)+l(e)):i.resume.mes.receivedinvites+u(i)+l(i)-(e.resume.mes.receivedinvites+u(e)+l(e)):"dia"===N?e.resume.dia.receivedinvites+u(e)+l(e)-(i.resume.dia.receivedinvites+u(i)+l(i)):e.resume.mes.receivedinvites+u(e)+l(e)-(i.resume.mes.receivedinvites+u(i)+l(e)):"missedinvites"===me?"asc"===ve?"dia"===N?i.resume.dia.missedinvites+u(i)+l(i)-(e.resume.dia.missedinvites+u(e)+l(e)):i.resume.mes.missedinvites+u(i)+l(i)-(e.resume.mes.missedinvites+u(e)+l(e)):"dia"===N?e.resume.dia.missedinvites+u(e)+l(e)-(i.resume.dia.missedinvites+u(i)+l(i)):e.resume.mes.missedinvites+u(e)+l(e)-(i.resume.mes.missedinvites+u(i)+l(i)):"sentinvitesauto"===me?"asc"===ve?"dia"===N?i.resume.dia.sentinvitesauto+u(i)+l(i)-(e.resume.dia.sentinvitesauto+u(e)+l(e)):i.resume.mes.sentinvitesauto+u(i)+l(i)-(e.resume.mes.sentinvitesauto+u(e)+l(e)):"dia"===N?e.resume.dia.sentinvitesauto+u(e)+l(e)-(i.resume.dia.sentinvitesauto+u(i)+l(i)):e.resume.mes.sentinvitesauto+u(e)+l(e)-(i.resume.mes.sentinvitesauto+u(i)+l(i)):"sentinvitesmanual"===me?"asc"===ve?"dia"===N?i.resume.dia.sentinvitesmanual+u(i)+l(i)-(e.resume.dia.sentinvitesmanual+u(e)+l(e)):i.resume.mes.sentinvitesmanual+u(i)+l(i)-(e.resume.mes.sentinvitesmanual+u(e)+l(e)):"dia"===N?e.resume.dia.sentinvitesmanual+u(e)+l(e)-(i.resume.dia.sentinvitesmanual+u(i)+l(i)):e.resume.mes.sentinvitesmanual+u(e)+l(e)-(i.resume.mes.sentinvitesmanual+u(i)+l(i)):"chatquantity"===me?"asc"===ve?"dia"===N?i.resume.dia.chatquantity+u(i)+l(i)-(e.resume.dia.chatquantity+u(e)+l(e)):i.resume.mes.chatquantity+u(i)+l(i)-(e.resume.mes.chatquantity+u(e)+l(e)):"dia"===N?e.resume.dia.chatquantity+u(e)+l(e)-(i.resume.dia.chatquantity+u(i)+l(i)):e.resume.mes.chatquantity+u(e)+l(e)-(i.resume.mes.chatquantity+u(i)+l(i)):"averagechatlength"===me?"asc"===ve?"dia"===N?i.resume.dia.averagechatlength+u(i)+l(i)-(e.resume.dia.averagechatlength+u(e)+l(e)):i.resume.mes.averagechatlength+u(i)+l(i)-(e.resume.mes.averagechatlength+u(e)+l(e)):"dia"===N?e.resume.dia.averagechatlength+u(e)+l(e)-(i.resume.dia.averagechatlength+u(i)+l(i)):e.resume.mes.averagechatlength+u(e)+l(e)-(i.resume.mes.averagechatlength+u(i)+l(i)):"points"===me?"asc"===ve?"dia"===N?i.progresoDia+u(i)+l(i)-(e.progresoDia+u(e)+l(e)):i.progresoMes+u(i)+l(i)-(e.progresoMes+u(e)+l(e)):"dia"===N?e.progresoDia+u(e)+l(e)-(i.progresoDia+u(i)+l(i)):e.progresoMes+u(e)+l(e)-(i.progresoMes+u(i)+l(i)):"dialogs.messages:intervals"===me?"asc"===ve?"dia"===N?i.diaSummary.onlineChat+u(i)+l(i)-(e.diaSummary.onlineChat+u(e)+l(e)):i.mesSummary.onlineChat+u(i)+l(i)-(e.mesSummary.onlineChat+u(e)+l(e)):"dia"===N?e.diaSummary.onlineChat+u(e)+l(e)-(i.diaSummary.onlineChat+u(i)+l(i)):e.mesSummary.onlineChat+u(e)+l(e)-(i.mesSummary.onlineChat+u(i)+l(i)):"dialogs.messages:messages"===me?"asc"===ve?"dia"===N?i.diaSummary.chatMessage+u(i)+l(i)-(e.diaSummary.chatMessage+u(e)+l(e)):i.mesSummary.chatMessage+u(i)+l(i)-(e.mesSummary.chatMessage+u(e)+l(e)):"dia"===N?e.diaSummary.chatMessage+u(e)+l(e)-(i.diaSummary.chatMessage+u(i)+l(i)):e.mesSummary.chatMessage+u(e)+l(e)-(i.mesSummary.chatMessage+u(i)+l(i)):"dialogs.letters:send"===me?"asc"===ve?"dia"===N?i.diaSummary.cartasRecibidas+u(i)+l(i)-(e.diaSummary.cartasRecibidas+u(e)+l(e)):i.mesSummary.cartasRecibidas+u(i)+l(i)-(e.mesSummary.cartasRecibidas+u(e)+l(e)):"dia"===N?e.diaSummary.cartasRecibidas+u(e)+l(e)-(i.diaSummary.cartasRecibidas+u(i)+l(i)):e.mesSummary.cartasRecibidas+u(e)+l(e)-(i.mesSummary.cartasRecibidas+u(i)+l(i)):"dialogs.letters:read"===me?"asc"===ve?"dia"===N?i.diaSummary.cartasEnviadas+u(i)+l(i)-(e.diaSummary.cartasEnviadas+u(e)+l(e)):i.mesSummary.cartasEnviadas+u(i)+l(i)-(e.mesSummary.cartasEnviadas+u(e)+l(e)):"dia"===N?e.diaSummary.cartasEnviadas+u(e)+l(e)-(i.diaSummary.cartasEnviadas+u(i)+l(i)):e.mesSummary.cartasEnviadas+u(e)+l(e)-(i.mesSummary.cartasEnviadas+u(i)+l(i)):"dialogs.attachments"===me?"asc"===ve?"dia"===N?i.diaSummary.fotos+u(i)+l(i)-(e.diaSummary.fotos+u(e)+l(e)):i.mesSummary.fotos+u(i)+l(i)-(e.mesSummary.fotos+u(e)+l(e)):"dia"===N?e.diaSummary.fotos+u(e)+l(e)-(i.diaSummary.fotos+u(i)+l(i)):e.mesSummary.fotos+u(e)+l(e)-(i.mesSummary.fotos+u(i)+l(i)):"cheers"===me?"asc"===ve?"dia"===N?i.diaSummary.gifs.puntos+u(i)+l(i)-(e.diaSummary.gifs.puntos+u(e)+l(e)):i.mesSummary.gifs.puntos+u(i)+l(i)-(e.mesSummary.gifs.puntos+u(e)+l(e)):"dia"===N?e.diaSummary.gifs.puntos+u(e)+l(e)-(i.diaSummary.gifs.puntos+u(i)+l(i)):e.mesSummary.gifs.puntos+u(e)+l(e)-(i.mesSummary.gifs.puntos+u(i)+l(i)):"dialogs.media"===me?"asc"===ve?"dia"===N?i.diaSummary.llamadas+u(i)+l(i)-(e.diaSummary.llamadas+u(e)+l(e)):i.mesSummary.llamadas+u(i)+l(i)-(e.mesSummary.llamadas+u(e)+l(e)):"dia"===N?e.diaSummary.llamadas+u(e)+l(e)-(i.diaSummary.llamadas+u(i)+l(i)):e.mesSummary.llamadas+u(e)+l(e)-(i.mesSummary.llamadas+u(i)+l(i)):"dialogs.attachments.audio"===me?"asc"===ve?"dia"===N?i.diaSummary.audios+u(i)+l(i)-(e.diaSummary.audios+u(e)+l(e)):i.mesSummary.audios+u(i)+l(i)-(e.mesSummary.audios+u(e)+l(e)):"dia"===N?e.diaSummary.audios+u(e)+l(e)-(i.diaSummary.audios+u(i)+l(i)):e.mesSummary.audios+u(e)+l(e)-(i.mesSummary.audios+u(i)+l(i)):"listened-message"===me?"asc"===ve?"dia"===N?i.diaSummary.audio_listened+u(i)+l(i)-(e.diaSummary.audio_listened+u(e)+l(e)):i.mesSummary.audio_listened+u(i)+l(i)-(e.mesSummary.audio_listened+u(e)+l(e)):"dia"===N?e.diaSummary.audio_listened+u(e)+l(e)-(i.diaSummary.audio_listened+u(i)+l(i)):e.mesSummary.audio_listened+u(e)+l(e)-(i.mesSummary.audio_listened+u(i)+l(i)):"received-message"===me?"asc"===ve?"dia"===N?i.diaSummary.audio_received+u(i)+l(i)-(e.diaSummary.audio_received+u(e)+l(e)):i.mesSummary.audio_received+u(i)+l(i)-(e.mesSummary.audio_received+u(e)+l(e)):"dia"===N?e.diaSummary.audio_received+u(e)+l(e)-(i.diaSummary.audio_received+u(i)+l(i)):e.mesSummary.audio_received+u(e)+l(e)-(i.mesSummary.audio_received+u(i)+l(i)):"present"===me?"asc"===ve?"dia"===N?i.diaSummary.presents.puntos+u(i)+l(i)-(e.diaSummary.presents.puntos+u(e)+l(e)):i.mesSummary.presents.puntos+u(i)+l(i)-(e.mesSummary.presents.puntos+u(e)+l(e)):"dia"===N?e.diaSummary.presents.puntos+u(e)+l(e)-(i.diaSummary.presents.puntos+u(i)+l(i)):e.mesSummary.presents.puntos+u(e)+l(e)-(i.mesSummary.presents.puntos+u(i)+l(i)):"porcentaje"===me?"asc"===ve?"dia"===N?(0===i.diaSummary.audio_listened||0===i.diaSummary.SuperBotAudioDeliveries?0:i.diaSummary.audio_listened/i.diaSummary.SuperBotAudioDeliveries*100)+u(i)+l(i)-((0===e.diaSummary.audio_listened||0===e.diaSummary.SuperBotAudioDeliveries?0:e.diaSummary.audio_listened/e.diaSummary.SuperBotAudioDeliveries*100)+u(e)+l(e)):(0===i.mesSummary.audio_listened||0===i.mesSummary.SuperBotAudioDeliveries?0:i.mesSummary.audio_listened/i.mesSummary.SuperBotAudioDeliveries*100)+u(i)+l(i)-((0===e.mesSummary.audio_listened||0===e.mesSummary.SuperBotAudioDeliveries?0:e.mesSummary.audio_listened/e.mesSummary.SuperBotAudioDeliveries*100)+u(e)+l(e)):"dia"===N?(0===e.diaSummary.audio_listened||0===e.diaSummary.SuperBotAudioDeliveries?0:e.diaSummary.audio_listened/e.diaSummary.SuperBotAudioDeliveries*100)+u(e)+l(e)-((0===i.diaSummary.audio_listened||0===i.diaSummary.SuperBotAudioDeliveries?0:i.diaSummary.audio_listened/i.diaSummary.SuperBotAudioDeliveries*100)+u(i)+l(i)):(0===e.mesSummary.audio_listened||0===e.mesSummary.SuperBotAudioDeliveries?0:e.mesSummary.audio_listened/e.mesSummary.SuperBotAudioDeliveries*100)+u(e)+l(e)-((0===i.mesSummary.audio_listened||0===i.mesSummary.SuperBotAudioDeliveries?0:i.mesSummary.audio_listened/i.mesSummary.SuperBotAudioDeliveries*100)+u(i)+l(i)):"SuperBotAudioDeliveries"===me?"asc"===ve?"dia"===N?i.diaSummary.SuperBotAudioDeliveries+u(i)+l(i)-(e.diaSummary.SuperBotAudioDeliveries+u(e)+l(e)):i.mesSummary.SuperBotAudioDeliveries+u(e)+l(e)-(e.mesSummary.SuperBotAudioDeliveries+u(e)+l(e)):"dia"===N?e.diaSummary.SuperBotAudioDeliveries+u(i)+l(i)-(i.diaSummary.SuperBotAudioDeliveries+u(e)+l(e)):e.mesSummary.SuperBotAudioDeliveries+u(e)+l(e)-(i.mesSummary.SuperBotAudioDeliveries+u(e)+l(e)):"SuperBotPhotoDeliveries"===me?"asc"===ve?"dia"===N?i.diaSummary.SuperBotPhotoDeliveries+u(i)+l(i)-(e.diaSummary.SuperBotPhotoDeliveries+u(e)+l(e)):i.mesSummary.SuperBotPhotoDeliveries+u(e)+l(e)-(e.mesSummary.SuperBotPhotoDeliveries+u(e)+l(e)):"dia"===N?e.diaSummary.SuperBotPhotoDeliveries+u(i)+l(i)-(i.diaSummary.SuperBotPhotoDeliveries+u(e)+l(e)):e.mesSummary.SuperBotPhotoDeliveries+u(e)+l(e)-(i.mesSummary.SuperBotPhotoDeliveries+u(e)+l(e)):"SuperBotVideoDeliveries"===me?"asc"===ve?"dia"===N?i.diaSummary.SuperBotVideoDeliveries+u(i)+l(i)-(e.diaSummary.SuperBotVideoDeliveries+u(e)+l(e)):i.mesSummary.SuperBotVideoDeliveries+u(e)+l(e)-(e.mesSummary.SuperBotVideoDeliveries+u(e)+l(e)):"dia"===N?e.diaSummary.SuperBotVideoDeliveries+u(i)+l(i)-(i.diaSummary.SuperBotVideoDeliveries+u(e)+l(e)):e.mesSummary.SuperBotVideoDeliveries+u(e)+l(e)-(i.mesSummary.SuperBotVideoDeliveries+u(e)+l(e)):"audio"===me?"asc"===ve?"dia"===N?i.media.audio+u(i)+l(i)-(e.media.audio+u(e)+l(e)):i.media.audio+u(e)+l(e)-(e.media.audio+u(e)+l(e)):"dia"===N?e.media.audio+u(i)+l(i)-(i.media.audio+u(e)+l(e)):e.media.audio+u(e)+l(e)-(i.media.audio+u(e)+l(e)):"photo"===me?"asc"===ve?"dia"===N?i.media.image+u(i)+l(i)-(e.media.image+u(e)+l(e)):i.media.image+u(e)+l(e)-(e.media.image+u(e)+l(e)):"dia"===N?e.media.image+u(i)+l(i)-(i.media.image+u(e)+l(e)):e.media.image+u(e)+l(e)-(i.media.image+u(e)+l(e)):"video"===me?"asc"===ve?"dia"===N?i.media.video+u(i)+l(i)-(e.media.video+u(e)+l(e)):i.media.video+u(e)+l(e)-(e.media.video+u(e)+l(e)):"dia"===N?e.media.video+u(i)+l(i)-(i.media.video+u(e)+l(e)):e.media.video+u(e)+l(e)-(i.media.video+u(e)+l(e)):"clients"===me?"asc"===ve?"dia"===N?i.newClients.dia+u(i)+l(i)-(e.newClients.dia+u(e)+l(e)):i.newClients.mes+u(e)+l(e)-(e.newClients.mes+u(e)+l(e)):"dia"===N?e.newClients.dia+u(i)+l(i)-(i.newClients.dia+u(e)+l(e)):e.newClients.mes+u(e)+l(e)-(i.newClients.mes+u(e)+l(e)):"points-clients"===me?"asc"===ve?"dia"===N?i.newClients.day_points+u(i)+l(i)-(e.newClients.day_points+u(e)+l(e)):i.newClients.month_points+u(e)+l(e)-(e.newClients.month_points+u(e)+l(e)):"dia"===N?e.newClients.day_points+u(i)+l(i)-(i.newClients.day_points+u(e)+l(e)):e.newClients.month_points+u(e)+l(e)-(i.newClients.month_points+u(e)+l(e)):"clients-contacted"===me?"asc"===ve?"dia"===N?(null===(t=i.diaSummary)||void 0===t?void 0:t.CantClientPoints)+u(i)+l(i)-((null===(a=e.diaSummary)||void 0===a?void 0:a.CantClientPoints)+u(e)+l(e)):(null===(r=i.mesSummary)||void 0===r?void 0:r.CantClientPoints)+u(e)+l(e)-((null===(n=e.mesSummary)||void 0===n?void 0:n.CantClientPoints)+u(e)+l(e)):"dia"===N?(null===(d=e.diaSummary)||void 0===d?void 0:d.CantClientPoints)+u(i)+l(i)-((null===(s=i.diaSummary)||void 0===s?void 0:s.CantClientPoints)+u(e)+l(e)):(null===(o=e.mesSummary)||void 0===o?void 0:o.CantClientPoints)+u(e)+l(e)-((null===(m=i.mesSummary)||void 0===m?void 0:m.CantClientPoints)+u(e)+l(e)):"asc"===ve?"dia"===N?i.progresoDia+u(i)+l(i)-(e.progresoDia+u(e)+l(e)):i.progresoMes+u(i)+l(i)-(e.progresoMes+u(e)+l(e)):"dia"===N?e.progresoDia+u(e)+l(e)-(i.progresoDia+u(i)+l(i)):e.progresoMes+u(e)+l(e)-(i.progresoMes+u(i)+l(i))})).map((function(e){for(var i,t,r,n,d,s,o,m,l=0,h=0;h<((null===Ne||void 0===Ne?void 0:Ne.length)||-1);h++)if(e.id===+Ne[h].perfilId&&"feeds"===Ne[h].tablename){var f=new Date(Ne[h].timestamp);l=Date.UTC(f.getFullYear(),f.getMonth(),f.getDate(),f.getHours(),f.getMinutes(),f.getSeconds(),f.getMilliseconds());break}return Object(b.jsxs)(p.Fragment,{children:[Object(b.jsx)(g.b,{id:""+e.id,children:Xe?Object(b.jsx)(y.a,{}):Object(b.jsx)(c.a,Object(a.a)(Object(a.a)({},Object(a.a)(Object(a.a)({},e),{},{contenidos:X,summary1:e.diaSummary,summary2:e.mesSummary,puntos1:e.progresoDia,puntos2:e.progresoMes,latestFeedTimestamp:l,usarMultasOAvisos:E,setShowModal:Q,setDataEntities:U,typeWidth:W,modeGraphics:Y,modeAsig:se,modeTom:oe,graphics_data:{filter:ii,data:null!==(i=null===Pe||void 0===Pe||null===(t=Pe.find((function(i){return+i.id===+e.id})))||void 0===t?void 0:t.graphics_data)&&void 0!==i?i:[],showPuntosOrServicio:Je,showBonusOrWriteoff:qe},graphics_resume:{filter:ii,data:null!==(r=null===Ae||void 0===Ae||null===(n=Ae.find((function(i){return+i.id===+e.id})))||void 0===n?void 0:n.graphics_data)&&void 0!==r?r:[]},modeResumen:he,modeAgencia:ge})),{},{tipoEntidad:"perfil"}),e.id)}),+v.a.get("id")!==u.ghostAdminId?Object(b.jsxs)(k,{id:""+e.id,children:["admin"===we?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.c,{onClick:function(){ie(!0),$(e.id)},children:"Configurar"}),Object(b.jsx)(g.c,{onClick:function(){G(!0),q("profile"),z(-1),V(e.id)},children:"Ficha Tecnica"}),Object(b.jsx)(g.c,{onClick:function(){ee(!0),$(e.id)},children:"Configurar Presentes"})]}):null,"admin"!==we&&e.libre&&!(null===Le||void 0===Le?void 0:Le.pausado)?Object(b.jsx)(g.c,{onClick:function(i){return $e(i,e.id)},children:"Tomar"}):null,"admin"===we||(null===(d=e.operador)||void 0===d?void 0:d.id)!==je||(null===Le||void 0===Le?void 0:Le.pausado)?null:Object(b.jsx)(g.c,{onClick:function(i){return ei(i,e.id)},children:"Liberar"}),(null===(s=e.operador)||void 0===s?void 0:s.id)===je?Object(b.jsx)(g.c,{onClick:function(){G(!0),q("profile"),z(-1),V(e.id)},children:"Ficha Tecnica"}):null,["shift","supervisor","admin"].includes(we)||(null===(o=e.operador)||void 0===o?void 0:o.id)===je?Object(b.jsx)(g.c,{onClick:function(){te(!0),$(e.id)},children:"Configurar Token"}):null,["shift","supervisor","admin"].includes(we)||(null===(m=e.operador)||void 0===m?void 0:m.id)===je?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g.c,{onClick:function(){ue(e.id),le(!0)},children:"Clientes Punteados"}),Object(b.jsx)(g.c,{onClick:function(){re(!0),$(e.id)},children:"Configurar Bot 24"}),Object(b.jsx)(g.c,{onClick:function(){ae(!0),$(e.id)},children:"Configurar Super Bot"}),Object(b.jsx)(g.c,{onClick:function(){ue(e.id),pe(!0)},children:"Reportes"}),Object(b.jsx)(g.c,{onClick:function(){return navigator.clipboard.writeText(e.amolatinaId)},children:"Copiar ID"}),"admin"===we?Object(b.jsx)(b.Fragment,{children:!0===e.hidden?Object(b.jsx)(g.c,{onClick:function(i){"qaz"===prompt("Ingrese clave")&&Ze(i,e.id,"show")},children:"Mostrar"}):Object(b.jsx)(g.c,{onClick:function(i){"qaz"===prompt("Ingrese clave")&&Ze(i,e.id,"hidden")},children:"Ocultar"})}):null]}):null]}):null]},e.id)}))})]})})}}}]);