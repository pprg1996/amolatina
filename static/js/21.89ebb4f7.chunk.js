(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[21],{388:function(t,e,n){"use strict";n.r(e);var i=n(2),r=n.n(i),a=n(8),o=n(5),d=n(90),c=n(6),s=(n(0),n(11)),p=n(1),m=function(){var t=Object(a.a)(r.a.mark((function t(e){var n,i;return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=c.renombrarPropiedadesAnidadas,t.next=3,Object(c.customFetch)("/profiles/info?id=".concat(e,"&expand=operator,pause_operator,dia_summary,mes_summary"));case 3:if(t.t2=n=t.sent,t.t1=null===t.t2,t.t1){t.next=7;break}t.t1=void 0===n;case 7:if(!t.t1){t.next=11;break}t.t3=void 0,t.next=12;break;case 11:t.t3=n.data;case 12:t.t4=t.t3,i=(0,t.t0)(t.t4),s.b.setQueryData(["perfiles"],(function(t){if(t){var n=t.findIndex((function(t){return t.id===e}));return t[n]=i,t}}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),u=Object(o.d)("div").withConfig({displayName:"TokenModal___StyledDiv",componentId:"sc-1mmdsiz-0"})(["",""],(function(t){return t._css})),l=Object(o.d)("input").withConfig({displayName:"TokenModal___StyledInput",componentId:"sc-1mmdsiz-1"})(["",""],(function(t){return t._css2})),f=Object(o.d)("button").withConfig({displayName:"TokenModal___StyledButton",componentId:"sc-1mmdsiz-2"})(["",""],(function(t){return t._css3}));e.default=function(t){var e=t.perfilId,n=t.setShowTokenModal,i=Object(s.d)(["perfiles"],c.fetchPerfiles).data,o=null===i||void 0===i?void 0:i.find((function(t){return t.id===e})).token;return Object(p.jsx)(d.a,{setShowModal:n,children:Object(p.jsxs)(u,{_css:[{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center","@media (min-width: 768px)":{padding:"0.5rem",gap:"0.5rem"}},"@media (min-width: 2560px) { padding: 2rem !important; grid-gap: 1rem !important; }"],children:[Object(p.jsx)(l,{id:"token-input",defaultValue:o,autoComplete:!1,_css2:[{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",borderRadius:"1rem",width:"24rem","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem"}},"@media (min-width: 2560px) { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }"]}),Object(p.jsx)(f,{onClick:Object(a.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(c.customFetch)("/profiles/set-token",{headers:{"Content-Type":"application/json"},body:JSON.stringify({profileId:e,token:document.querySelector("#token-input").value}),method:"POST"});case 2:m(e);case 3:case"end":return t.stop()}}),t)}))),_css3:[{borderRadius:"1rem","--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))","@media (min-width: 768px)":{fontSize:"0.3rem",padding:"0.25rem"}},"@media (min-width: 2560px) { line-height: 1rem !important; font-size: 0.75rem !important; padding: 0.5rem !important; }"],children:"Guardar token"})]})})}}}]);