(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[25],{419:function(e,t,i){"use strict";i.r(t);var n=i(1),r=i.n(n),a=i(8),d=i(5),o=i(86),m=i(6),s=(i(0),i(10)),p=i(2),c=function(){var e=Object(a.a)(r.a.mark((function e(t){var i,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=m.renombrarPropiedadesAnidadas,e.next=3,Object(m.customFetch)("/profiles/info?id=".concat(t,"&expand=operator,pause_operator,dia_summary,mes_summary"));case 3:if(e.t2=i=e.sent,e.t1=null===e.t2,e.t1){e.next=7;break}e.t1=void 0===i;case 7:if(!e.t1){e.next=11;break}e.t3=void 0,e.next=12;break;case 11:e.t3=i.data;case 12:e.t4=e.t3,n=(0,e.t0)(e.t4),s.b.setQueryData(["perfiles"],(function(e){if(e){var i=e.findIndex((function(e){return e.id===t}));return e[i]=n,e}}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),u=Object(d.d)("div").withConfig({displayName:"TokenModal___StyledDiv",componentId:"sc-1mmdsiz-0"})(["",""],(function(e){return e._css})),f=Object(d.d)("input").withConfig({displayName:"TokenModal___StyledInput",componentId:"sc-1mmdsiz-1"})(["",""],(function(e){return e._css2})),l=Object(d.d)("button").withConfig({displayName:"TokenModal___StyledButton",componentId:"sc-1mmdsiz-2"})(["",""],(function(e){return e._css3}));t.default=function(e){var t=e.perfilId,i=e.setShowTokenModal,n=Object(s.d)(["perfiles"],m.fetchPerfiles).data,d=null===n||void 0===n?void 0:n.find((function(e){return e.id===t})).token;return Object(p.jsx)(o.a,{setShowModal:i,children:Object(p.jsxs)(u,{_css:[{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center","@media (min-width: 768px)":{padding:"0.5rem",gap:"0.5rem"},"@media (min-width: 1280px)":{gap:"1rem",padding:"1rem"}},"@media (min-width: 2560px) { padding: 2rem !important; grid-gap: 1rem !important; }"],children:[Object(p.jsx)(f,{id:"token-input",defaultValue:d,autoComplete:!1,_css2:[{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",width:"24rem","@media (min-width: 768px)":{borderRadius:"0.375rem",paddingLeft:"0.25rem",paddingRight:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}},"@media (min-width: 2560px) { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }"]}),Object(p.jsx)(l,{onClick:Object(a.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(m.customFetch)("/profiles/set-token",{headers:{"Content-Type":"application/json"},body:JSON.stringify({profileId:t,token:document.querySelector("#token-input").value}),method:"POST"});case 2:c(t);case 3:case"end":return e.stop()}}),e)}))),_css3:[{"--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",fontSize:"0.3rem",padding:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",fontSize:"0.4rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",fontSize:"0.5rem",padding:"0.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",fontSize:"0.6rem"}},"@media (min-width: 2560px) { line-height: 1rem !important; font-size: 0.75rem !important; padding: 0.5rem !important; }"],children:"Guardar token"})]})})}}}]);