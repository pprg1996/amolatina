(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[36],{644:function(e,t,i){"use strict";i.r(t);var n=i(20),r=i(6),a=i(2),d=i.n(a),o=i(8),p=i(3),c=i(90),s=i(0),l=i.n(s),m=i(7),h=i(93),g=i(43),x=i(9),u=i.n(x),f=i(87),b=i(1),w=function(){var e=Object(o.a)(d.a.mark((function e(t){var i,n,r,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return i=t.operadorId,n=t.textRef,r=t.steps,a=+u.a.get("id"),e.prev=2,e.next=5,Object(m.customFetch)("/operators/manual-fine",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({supervisorId:a,operadorId:i,comment:n,img:r})});case 5:e.next=10;break;case 7:e.prev=7,e.t0=e.catch(2),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[2,7]])})));return function(t){return e.apply(this,arguments)}}(),j=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv",componentId:"g5xd6e-0"})({"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",width:"44.75vw",height:"85vh",display:"flex",flexDirection:"column",gap:"0.5rem",paddingTop:"1.25rem",paddingBottom:"1.25rem"}),y=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv2",componentId:"g5xd6e-1"})(["",""],(function(e){return e._css})),v=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv3",componentId:"g5xd6e-2"})({display:"flex",flexDirection:"column",width:"100%",gap:"0.5rem"}),_=Object(p.d)("textarea").withConfig({displayName:"WritesFinesModal___StyledTextarea",componentId:"g5xd6e-3"})(["",""],(function(e){return e._css2})),O=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv4",componentId:"g5xd6e-4"})({display:"flex",flexWrap:"wrap",minHeight:"193px","@media (min-width: 768px)":{padding:"0.125rem",gap:"0.125rem"},"@media (min-width: 1024px)":{padding:"0.25rem",gap:"0.5rem"}}),C=Object(p.d)("button").withConfig({displayName:"WritesFinesModal___StyledButton",componentId:"g5xd6e-5"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))",borderRadius:"1rem",fontSize:"5rem","@media (min-width: 768px)":{width:"80px",height:"80px"},"@media (min-width: 1024px)":{width:"110px",height:"110px"},"@media (min-width: 1280px)":{width:"140px",height:"140px"},"@media (min-width: 1536px)":{width:"170px",height:"170px"}}),I=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv5",componentId:"g5xd6e-6"})({width:"100%",borderTopWidth:"2px","--tw-border-opacity":"1",borderColor:"rgba(31, 41, 55, var(--tw-border-opacity))",display:"flex",justifyContent:"flex-end",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}),S=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv6",componentId:"g5xd6e-7"})({flexDirection:"column",display:"flex",gap:"0.5rem"}),W=Object(p.d)("div").withConfig({displayName:"WritesFinesModal___StyledDiv7",componentId:"g5xd6e-8"})(["",""],(function(e){return e._css3})),D=Object(p.d)("img").withConfig({displayName:"WritesFinesModal___StyledImg",componentId:"g5xd6e-9"})(["",""],(function(e){return e._css4})),F=Object(p.d)("input").withConfig({displayName:"WritesFinesModal___StyledInput",componentId:"g5xd6e-10"})({display:"none"}),k=function(e){var t=e.step,i=e.index,n=e.setStep,r=e.setDeleteStep,a=l.a.useRef(null),p=l.a.useCallback((function(){var e=new FileReader;e.onload=function(e){var t=new Image;t.src=e.target.result;var r=e.target.result.split(":")[1].split(";")[0];t.onload=Object(o.a)(d.a.mark((function e(){var a,o,p;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:a=document.createElement("canvas"),200,200,o=t.width,p=t.height,o>p?o>200&&(p*=200/o,o=200):p>200&&(o*=200/p,p=200),a.width=o,a.height=p,a.getContext("2d").drawImage(t,0,0,o,p),n(i,"photo",a.toDataURL(r));case 11:case"end":return e.stop()}}),e)})))},a.current.files[0]&&e.readAsDataURL(a.current.files[0])}),[i,n]);return Object(b.jsxs)(S,{children:[Object(b.jsxs)(W,{_css3:[{display:"flex",alignItems:"center",justifyContent:"center"},"@media (min-width: 2560px) { padding: 0.75rem !important; grid-gap: 1rem !important; line-height: 2rem !important; font-size: 1.5rem !important; }","@media (min-height: 1000px) and (max-width: 767px) { padding: 0.75rem !important; grid-gap: 1rem !important; line-height: 2rem !important; font-size: 1.5rem !important; }"],children:[Object(b.jsx)(D,{src:t.photo,alt:"Foto",onClick:function(){var e;return null===(e=document.getElementById("goal-step-foto-"+i))||void 0===e?void 0:e.click()},_css4:[{borderRadius:"1rem","@media (min-width: 768px)":{maxWidth:"80px",height:"80px"},"@media (min-width: 1024px)":{maxWidth:"110px",height:"110px"},"@media (min-width: 1280px)":{maxWidth:"140px",height:"140px"},"@media (min-width: 1536px)":{maxWidth:"170px",minHeight:"170px"}},"@media (min-width: 2560px) { border-radius: 2.5rem !important; max-width: 200px !important; height: 200px !important; }"]}),Object(b.jsx)(F,{type:"file",accept:"image/png, image/jpeg",ref:a,onChange:p,id:"goal-step-foto-"+i})]}),Object(b.jsx)(g.b,{cancel:!0,onClick:function(){return r(i)},children:"Borrar"})]})};t.default=function(e){var t=e.setShowWriteFinesModal,i=e.operadorId,a=l.a.useState([]),p=Object(r.a)(a,2),s=p[0],m=p[1],x=l.a.useState(""),u=Object(r.a)(x,2),S=u[0],W=u[1],D=function(e,t,i){s[e].photo=i,m(Object(n.a)(s))},F=function(e){var t=s.filter((function(t){return t!==s[e]}));return m(t)};return Object(b.jsx)(c.a,{setShowModal:t,children:Object(b.jsxs)(j,{children:[Object(b.jsxs)(y,{_css:[{display:"flex",flexDirection:"column",overflowX:"hidden",height:"93%",width:"100%",paddingLeft:"0.75rem",paddingRight:"0.75rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",gap:"0.5rem"},f.b],children:[Object(b.jsx)(v,{children:Object(b.jsx)(_,{value:S,onChange:function(e){return W(e.target.value)},placeholder:"Escribe Explicacion de la Multa....",_css2:[{resize:"none",borderRadius:"0.375rem",padding:"0.5rem",width:"100%",flexGrow:"1","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",fontWeight:"700","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))",borderWidth:"2px",borderColor:"#4c4c3f",height:"200px"},f.b]})}),Object(b.jsxs)(O,{children:[s.map((function(e,t){return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(k,{step:e,index:t,setStep:D,setDeleteStep:F})})})),Object(b.jsx)(C,{onClick:function(){return m([].concat(Object(n.a)(s),[{photo:h.a}]))},children:"+"})]})]}),Object(b.jsx)(I,{children:Object(b.jsx)(g.b,{type:"button",primario:!0,onClick:function(){var e=Object(o.a)(d.a.mark((function e(n){var r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(r=n.currentTarget).disabled=!0,n.preventDefault(),e.next=5,w({operadorId:i,textRef:S,steps:s});case 5:e.sent,t(!1),setTimeout((function(){return r.disabled=!1}),1e3);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),children:"Guardar"})})]})})}}}]);