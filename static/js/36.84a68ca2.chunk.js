(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[36],{652:function(t,e,i){"use strict";i.r(e);var a=i(2),n=i.n(a),r=i(8),d=i(3),o=i(89),s=i(7),m=(i(0),i(11)),c=i(1),p=function(){var t=Object(r.a)(n.a.mark((function t(e){var i,a;return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.t0=s.renombrarPropiedadesAnidadas,t.next=3,Object(s.customFetch)("/profiles/info?id=".concat(e,"&expand=operator,pause_operator,dia_summary,mes_summary"));case 3:if(t.t2=i=t.sent,t.t1=null===t.t2,t.t1){t.next=7;break}t.t1=void 0===i;case 7:if(!t.t1){t.next=11;break}t.t3=void 0,t.next=12;break;case 11:t.t3=i.data;case 12:t.t4=t.t3,a=(0,t.t0)(t.t4),m.b.setQueryData(["perfiles"],(function(t){if(t){var i=t.findIndex((function(t){return t.id===e}));return t[i]=a,t}}));case 15:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=Object(d.d)("div").withConfig({displayName:"TokenModal___StyledDiv",componentId:"sc-1mmdsiz-0"})(["",""],(function(t){return t._css})),u=Object(d.d)("input").withConfig({displayName:"TokenModal___StyledInput",componentId:"sc-1mmdsiz-1"})(["",""],(function(t){return t._css2})),w=Object(d.d)("button").withConfig({displayName:"TokenModal___StyledButton",componentId:"sc-1mmdsiz-2"})(["",""],(function(t){return t._css3}));e.default=function(t){var e=t.perfilId,i=t.setShowTokenModal,a=Object(m.d)(["perfiles"],s.fetchPerfiles).data,d=null===a||void 0===a?void 0:a.find((function(t){return t.id===e})).token;return Object(c.jsx)(o.a,{setShowModal:i,children:Object(c.jsxs)(l,{_css:[{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center","@media (min-width: 768px)":{padding:"0.5rem",gap:"0.5rem"},"@media (min-width: 1280px)":{gap:"1rem",padding:"1rem"}},"@media (min-width: 2560px) { padding: 2rem !important; grid-gap: 1rem !important; }"],children:[Object(c.jsx)(u,{id:"token-input",defaultValue:d,autoComplete:!1,_css2:[{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",width:"24rem","@media (min-width: 768px)":{borderRadius:"0.375rem",paddingLeft:"0.25rem",paddingRight:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",paddingLeft:"0.5rem",paddingRight:"0.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}},"@media (min-width: 2560px) { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }"]}),Object(c.jsx)(w,{onClick:Object(r.a)(n.a.mark((function t(){return n.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(s.customFetch)("/profiles/set-token",{headers:{"Content-Type":"application/json"},body:JSON.stringify({profileId:e,token:document.querySelector("#token-input").value}),method:"POST"});case 2:p(e);case 3:case"end":return t.stop()}}),t)}))),_css3:[{"--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",fontSize:"0.3rem",padding:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",fontSize:"0.4rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",fontSize:"0.5rem",padding:"0.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",fontSize:"0.6rem"}},"@media (min-width: 2560px) { line-height: 1rem !important; font-size: 0.75rem !important; padding: 0.5rem !important; }"],children:"Guardar token"})]})})}},89:function(t,e,i){"use strict";var a=i(3),n=i(0),r=i(1),d=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv",componentId:"tjiuax-0"})({position:"fixed",zIndex:"50",top:"0px",right:"0px",bottom:"0px",left:"0px",overflowY:"auto"}),o=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv2",componentId:"tjiuax-1"})({display:"flex",alignItems:"flex-end",justifyContent:"center",minHeight:"100vh",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"5rem",textAlign:"center","@media (min-width: 640px)":{display:"block",padding:"0px"}}),s=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv3",componentId:"tjiuax-2"})({position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px","--tw-bg-opacity":"0.7",backgroundColor:"rgba(23, 23, 27, var(--tw-bg-opacity))",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}),m=Object(a.d)("span").withConfig({displayName:"Modal___StyledSpan",componentId:"tjiuax-3"})({display:"none","@media (min-width: 640px)":{display:"inline-block",verticalAlign:"middle",height:"100vh"}}),c=Object(a.d)("div").withConfig({displayName:"Modal___StyledDiv4",componentId:"tjiuax-4"})(["",""],(function(t){return t._css}));e.a=function(t){var e=t.children,i=t.setShowModal,a=Object(n.useRef)(null);return Object(n.useEffect)((function(){var t=a.current,e=function(t){"Escape"===t.key&&i(!1)};return t.addEventListener("keydown",e),t.focus(),function(){t.removeEventListener("keydown",e)}}),[i]),Object(r.jsx)(d,{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(r.jsxs)(o,{ref:a,tabIndex:-1,children:[Object(r.jsx)(s,{"aria-hidden":"true",onClick:function(){return i(!1)}}),Object(r.jsx)(m,{"aria-hidden":"true",children:"\u200b"}),Object(r.jsx)(c,{_css:[{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",display:"inline-block",verticalAlign:"bottom","--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))",textAlign:"left",overflow:"hidden","--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms","@media (min-width: 640px)":{marginTop:"2rem",marginBottom:"2rem",verticalAlign:"middle"},"@media (min-width: 768px)":{borderRadius:"0.75rem"},"@media (min-width: 1024px)":{borderRadius:"1rem"},"@media (min-width: 1536px)":{borderRadius:"1.3rem"}},"@media (min-width: 2560px) { border-radius: 2.5rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { border-radius:2.5rem !important; }"],children:e})]})})}}}]);