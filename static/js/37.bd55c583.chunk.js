(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[37],{643:function(e,t,i){"use strict";i.r(t);var n=i(20),a=i(6),r=i(2),d=i.n(r),o=i(8),c=i(3),p=i(89),s=i(0),l=i.n(s),m=i(7),h=i(95),x=i(44),g=i(9),u=i.n(g),w=i(29),b=i(1),f=function(){var e=Object(o.a)(d.a.mark((function e(t){var i,n,a,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.operadorId,n=t.textRef,a=t.steps,r=+u.a.get("id"),e.prev=2,e.next=5,Object(m.customFetch)("/operators/manual-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({supervisorId:r,operadorId:i,comment:n,img:a})});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),y=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv",componentId:"g5xd6e-0"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"44.75vw",height:"85vh",display:"flex",flexDirection:"column",gap:"0.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem"}),v=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv2",componentId:"g5xd6e-1"})(["",""],(function(e){return e._css})),j=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv3",componentId:"g5xd6e-2"})({display:"flex",flexDirection:"column",width:"100%",gap:"0.5rem"}),_=Object(c.d)("textarea").withConfig({displayName:"WritesFinesModal___StyledTextarea",componentId:"g5xd6e-3"})(["",""],(function(e){return e._css2})),O=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv4",componentId:"g5xd6e-4"})({display:"flex",flexWrap:"wrap",minHeight:"193px","@media (min-width: 768px)":{padding:"0.125rem",gap:"0.125rem"},"@media (min-width: 1024px)":{padding:"0.25rem",gap:"0.5rem"}}),C=Object(c.d)("button").withConfig({displayName:"WritesFinesModal___StyledButton",componentId:"g5xd6e-5"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))",borderRadius:"1rem",fontSize:"5rem","@media (min-width: 768px)":{width:"80px",height:"80px"},"@media (min-width: 1024px)":{width:"110px",height:"110px"},"@media (min-width: 1280px)":{width:"140px",height:"140px"},"@media (min-width: 1536px)":{width:"170px",height:"170px"}}),I=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv5",componentId:"g5xd6e-6"})({width:"100%",borderTopWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(31, 41, 55, var(--tw-border-opacity))",display:"flex",justifyContent:"flex-end",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}),S=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv6",componentId:"g5xd6e-7"})({flexDirection:"column",display:"flex",gap:"0.5rem"}),k=Object(c.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv7",componentId:"g5xd6e-8"})(["",""],(function(e){return e._css3})),D=Object(c.d)("img").withConfig({displayName:"WritesFinesModal___StyledImg",componentId:"g5xd6e-9"})(["",""],(function(e){return e._css4})),M=Object(c.d)("input").withConfig({displayName:"WritesFinesModal___StyledInput",componentId:"g5xd6e-10"})({display:"none"}),W=function(e){var t=e.step,i=e.index,n=e.setStep,a=e.setDeleteStep,r=l.a.useRef(null),c=l.a.useCallback((function(){var e=new FileReader;e.onload=function(e){var t=new Image;t.src=e.target.result;var a=e.target.result.split(":")[1].split(";")[0];t.onload=Object(o.a)(d.a.mark((function e(){var r,o,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r=document.createElement("canvas"),200,200,o=t.width,c=t.height,o>c?o>200&&(c*=200/o,o=200):c>200&&(o*=200/c,c=200),r.width=o,r.height=c,r.getContext("2d").drawImage(t,0,0,o,c),n(i,"photo",r.toDataURL(a));case 11:case"end":return e.stop()}}),e)})))},r.current.files[0]&&e.readAsDataURL(r.current.files[0])}),[i,n]);return Object(b.jsxs)(S,{children:[Object(b.jsxs)(k,{_css3:[{display:"flex",alignItems:"center",justifyContent:"center"},"@media (min-width: 2560px) { padding: 0.75rem !important; grid-gap: 1rem !important; line-height: 2rem !important; font-size: 1.5rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { padding: 0.75rem !important; grid-gap: 1rem !important; line-height: 2rem !important; font-size: 1.5rem !important; }"],children:[Object(b.jsx)(D,{src:t.photo,alt:"Foto",onClick:function(){var e;return null===(e=document.getElementById("goal-step-foto-"+i))||void 0===e?void 0:e.click()},_css4:[{borderRadius:"1rem","@media (min-width: 768px)":{maxWidth:"80px",height:"80px"},"@media (min-width: 1024px)":{maxWidth:"110px",height:"110px"},"@media (min-width: 1280px)":{maxWidth:"140px",height:"140px"},"@media (min-width: 1536px)":{maxWidth:"170px",minHeight:"170px"}},"@media (min-width: 2560px) { border-radius: 2.5rem !important; max-width: 200px !important; height: 200px !important; }"]}),Object(b.jsx)(M,{type:"file",accept:"image/png, image/jpeg",ref:r,onChange:c,id:"goal-step-foto-"+i})]}),Object(b.jsx)(x.b,{cancel:!0,onClick:function(){return a(i)},children:"Borrar"})]})};t.default=function(e){var t=e.setShowWriteFinesModal,i=e.operadorId,r=l.a.useState([]),c=Object(a.a)(r,2),s=c[0],m=c[1],g=l.a.useState(""),u=Object(a.a)(g,2),S=u[0],k=u[1],D=function(e,t,i){s[e].photo=i,m(Object(n.a)(s))},M=function(e){var t=s.filter((function(t){return t!==s[e]}));return m(t)};return Object(b.jsx)(p.a,{setShowModal:t,children:Object(b.jsxs)(y,{children:[Object(b.jsxs)(v,{_css:[{display:"flex",flexDirection:"column",overflowX:"hidden",height:"93%",width:"100%",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",gap:"0.5rem"},w.b],children:[Object(b.jsx)(j,{children:Object(b.jsx)(_,{value:S,onChange:function(e){return k(e.target.value)},placeholder:"Escribe Explicacion de la Multa....",_css2:[{resize:"none",borderRadius:"0.375rem",padding:"0.5rem",width:"100%",flexGrow:"1","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))",borderWidth:"2px",borderColor:"#4c4c3f",height:"200px"},w.b]})}),Object(b.jsxs)(O,{children:[s.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(W,{step:e,index:t,setStep:D,setDeleteStep:M})})})),Object(b.jsx)(C,{onClick:function(){return m([].concat(Object(n.a)(s),[{photo:h.a}]))},children:"+"})]})]}),Object(b.jsx)(I,{children:Object(b.jsx)(x.b,{type:"button",primario:!0,onClick:function(){var e=Object(o.a)(d.a.mark((function e(n){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=n.currentTarget).disabled=!0,n.preventDefault(),e.next=5,f({operadorId:i,textRef:S,steps:s});case 5:t(!1),setTimeout((function(){return a.disabled=!1}),1e3);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Guardar"})})]})})}},89:function(e,t,i){"use strict";var n=i(3),a=i(0),r=i(1),d=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv",componentId:"tjiuax-0"})({position:"fixed",zIndex:"50",top:"0px",right:"0px",bottom:"0px",left:"0px",overflowY:"auto"}),o=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv2",componentId:"tjiuax-1"})({display:"flex",alignItems:"flex-end",justifyContent:"center",minHeight:"100vh",paddingTop:"1rem",paddingLeft:"1rem",paddingRight:"1rem",paddingBottom:"5rem",textAlign:"center","@media (min-width: 640px)":{display:"block",padding:"0px"}}),c=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv3",componentId:"tjiuax-2"})({position:"fixed",top:"0px",right:"0px",bottom:"0px",left:"0px","--tw-bg-opacity":"0.7",backgroundColor:"rgba(23, 23, 27, var(--tw-bg-opacity))",transitionProperty:"opacity",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms"}),p=Object(n.d)("span").withConfig({displayName:"Modal___StyledSpan",componentId:"tjiuax-3"})({display:"none","@media (min-width: 640px)":{display:"inline-block",verticalAlign:"middle",height:"100vh"}}),s=Object(n.d)("div").withConfig({displayName:"Modal___StyledDiv4",componentId:"tjiuax-4"})(["",""],(function(e){return e._css}));t.a=function(e){var t=e.children,i=e.setShowModal,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=n.current,t=function(e){"Escape"===e.key&&i(!1)};return e.addEventListener("keydown",t),e.focus(),function(){e.removeEventListener("keydown",t)}}),[i]),Object(r.jsx)(d,{"aria-labelledby":"modal-title",role:"dialog","aria-modal":"true",children:Object(r.jsxs)(o,{ref:n,tabIndex:-1,children:[Object(r.jsx)(c,{"aria-hidden":"true",onClick:function(){return i(!1)}}),Object(r.jsx)(p,{"aria-hidden":"true",children:"\u200b"}),Object(r.jsx)(s,{_css:[{"--tw-translate-x":"0","--tw-translate-y":"0","--tw-rotate":"0","--tw-skew-x":"0","--tw-skew-y":"0","--tw-scale-x":"1","--tw-scale-y":"1",transform:"translateX(var(--tw-translate-x)) translateY(var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))",display:"inline-block",verticalAlign:"bottom","--tw-bg-opacity":"1",backgroundColor:"rgba(31, 31, 38, var(--tw-bg-opacity))",textAlign:"left",overflow:"hidden","--tw-shadow":"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",boxShadow:"var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)",transitionProperty:"all",transitionTimingFunction:"cubic-bezier(0.4, 0, 0.2, 1)",transitionDuration:"150ms","@media (min-width: 640px)":{marginTop:"2rem",marginBottom:"2rem",verticalAlign:"middle"},"@media (min-width: 768px)":{borderRadius:"0.75rem"},"@media (min-width: 1024px)":{borderRadius:"1rem"},"@media (min-width: 1536px)":{borderRadius:"1.3rem"}},"@media (min-width: 2560px) { border-radius: 2.5rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { border-radius:2.5rem !important; }"],children:t})]})})}}}]);