(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[1],{158:function(e,t,i){"use strict";i.d(t,"b",(function(){return j}));var a=i(9),n=i(20),d=i(5),o=i(1),r=i(6),c=r.ActionIcon,s=r.number_format,l=Object(d.d)(c).withConfig({displayName:"ColoredCheckbox___StyledActionIcon",componentId:"sc-2a66eg-0"})(["",""],(function(e){return e._css2})),m=d.d.div.withConfig({displayName:"ColoredCheckbox__DivColor",componentId:"sc-2a66eg-1"})(["",""],(function(e){return!0===e.checked?{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}})),p=Object(d.d)(m).withConfig({displayName:"ColoredCheckbox___StyledDivColor",componentId:"sc-2a66eg-2"})(["",""],(function(e){return e._css})),u=Object(d.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv",componentId:"sc-2a66eg-3"})({display:"flex",justifyContent:"center"}),h=Object(d.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv2",componentId:"sc-2a66eg-4"})({display:"flex",justifyContent:"center"}),b=Object(d.d)("span").withConfig({displayName:"ColoredCheckbox___StyledSpan",componentId:"sc-2a66eg-5"})(["",""],(function(e){return e._css3})),j=function(e,t){var i,d=!0,o=Object(n.a)(Object.entries(e).filter((function(e){var i=Object(a.a)(e,1)[0];return i.startsWith("show")&&i!=="show"+t.replace(/ /g,"")})));try{for(o.s();!(i=o.n()).done;){Object(a.a)(i.value,2)[1]&&(d=!1)}}catch(x){o.e(x)}finally{o.f()}if(e["show"+t.replace(/ /g,"")]&&d){var r,c=Object(n.a)(Object.entries(e).filter((function(e){return Object(a.a)(e,1)[0].startsWith("set")})));try{for(c.s();!(r=c.n()).done;){var s=Object(a.a)(r.value,2),l=s[0],m=s[1];"setShowClientes"!==l&&m(!0)}}catch(x){c.e(x)}finally{c.f()}}else for(var p=0,u=Object.entries(e);p<u.length;p++){var h=Object(a.a)(u[p],2),b=h[0],j=h[1];"function"===typeof j&&(b==="setShow"+t.replace(/ /g,"")?j(!0):j(!1))}};t.a=function(e){var t=e.text,i=e.checked,a=e.setChecked,n=e.color,d=e.service,r=e.filter,c=e.total;return Object(o.jsxs)(p,{style:!0===i?{backgroundColor:n}:{borderColor:n},checked:i,title:t,onDoubleClick:function(){return j(r,t)},onClick:function(){return a(!0!==i)},_css:[{borderWidth:"1px",flexShrink:"0",display:"flex",alignItems:"center",flexDirection:"column",cursor:"pointer","@media (min-width: 768px)":{borderRadius:"0.375rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",gap:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",paddingLeft:"0.1rem",paddingRight:"0.1rem",paddingTop:"0.4rem",paddingBottom:"0.4rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",paddingLeft:"0.15rem",paddingRight:"0.15rem",paddingTop:"0.7rem",paddingBottom:"0.7rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",paddingLeft:"0.4rem",paddingRight:"0.4rem",paddingTop:"0.8rem",paddingBottom:"0.8rem"}},"@media (min-width: 2560px) { padding: 0.75rem !important; grid-gap: 0.5rem !important; }"],children:[Object(o.jsx)(u,{children:Object(o.jsx)(l,{type:d,_css2:[{width:"auto","@media (min-width: 768px)":{height:"0.6rem"},"@media (min-width: 1024px)":{height:"0.5rem"},"@media (min-width: 1280px)":{height:"0.7rem"},"@media (min-width: 1536px)":{height:"0.9rem"}},"@media (min-width: 2560px) { height: 1.75rem !important; }"]})}),Object(o.jsx)(h,{children:Object(o.jsxs)(b,{_css3:[{fontWeight:"700","@media (min-width: 768px)":{fontSize:"0.275rem"},"@media (min-width: 1024px)":{fontSize:"0.4rem"},"@media (min-width: 1280px)":{fontSize:"0.45rem"},"@media (min-width: 1536px)":{fontSize:"0.6rem"}},"@media (min-width: 2560px) { font-size: 0.75rem !important; }"],children:[s(c,1,",",""),"\ud83d\udc8e"]})})]})}},423:function(e,t,i){"use strict";i.r(t);var a=i(20),n=i(4),d=i(9),o=i(2),r=i.n(o),c=i(8),s=i(85),l=i(0),m=i(10),p=i(6),u=i(409),h=i(410),b=i(403),j=i(411),x=i(387),g=i(388),w=i(21),f=i(401),y=i(349),O=i(1),v=function(e,t,i,a,n,d,o,r,c,s){var l,u=m.b.getQueryData(["perfiles"]),h=m.b.getQueryData(["tags"]);return"clientes"===e?"all"!==t||"all"!==i?Object(O.jsx)(f.a,{dataKey:"total",stackId:"a",fill:"#6B39BD",isAnimationActive:!1,yAxisId:"left-axis",children:Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{dataKey:"notContacted",stackId:"a",fill:"#6B39BD",isAnimationActive:!1,yAxisId:"left-axis"}),Object(O.jsx)(f.a,{dataKey:"contacted",stackId:"a",fill:"#82ca9d",isAnimationActive:!1,yAxisId:"left-axis",children:"clientes"!==e?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null}),Object(O.jsx)(f.a,{dataKey:"pointed",stackId:"a",fill:"#FAC24B",isAnimationActive:!1,yAxisId:"left-axis",children:Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}})}),s.showClientes?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesViejos",yAxisId:"right-axis",fill:"#3346ff",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesViejos",position:"top",style:{fill:"white"}})}),Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesNuevos",yAxisId:"right-axis",fill:"#70dcba",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesNuevos",position:"top",style:{fill:"white"}})})]}):null]}):"puntos"===e?Object(O.jsxs)(O.Fragment,{children:[("bonus"===r?p.bonusTypes:p.writeoffTypes).map((function(e,t,i){var a=e.name,n=e.value,d=i.length;return Object(O.jsx)(f.a,{dataKey:s["show"+a.replace(/ /g,"")]?n:null,stackId:"a",fill:p.contrastingHexColors[t],isAnimationActive:!1,yAxisId:"left-axis",children:t===d-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},n)})),s.showClientes?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesViejos",yAxisId:"right-axis",fill:"#3346ff",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesViejos",position:"top",style:{fill:"white"}})}),Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesNuevos",yAxisId:"right-axis",fill:"#70dcba",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesNuevos",position:"top",style:{fill:"white"}})})]}):null]}):"cartas24"===e?"all"===i?u.map((function(e,t,i){var a=e.id,n=e.nombre,d=i.length;return Object(O.jsx)(f.a,{dataKey:n,stackId:"a",fill:p.contrastingHexColors[t%p.contrastingHexColors.length],isAnimationActive:!1,yAxisId:"left-axis",children:t===d-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},a)})):"all"===o?null===d||void 0===d?void 0:d.map((function(e,t,i){var a=e.id,n=e.title,d=i.length;return Object(O.jsx)(f.a,{dataKey:a+" "+n,stackId:"a",fill:p.contrastingHexColors[t%p.contrastingHexColors.length],isAnimationActive:!1,yAxisId:"left-axis",children:t===d-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},a)})):null===(l=["all"].concat(Object(w.a)(null!==h&&void 0!==h?h:[])))||void 0===l?void 0:l.map((function(e,t,i){var a=i.length;return Object(O.jsx)(f.a,{dataKey:e,stackId:"a",fill:p.contrastingHexColors[t%p.contrastingHexColors.length],isAnimationActive:!1,yAxisId:"left-axis",children:t===a-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},e)})):void 0},C=i(12),_=i.n(C),R=i(158),S=i(5),I=function(){var e=Object(c.a)(r.a.mark((function e(t,i,a,n,d,o,c,s,l,m,u,h,b,j,x,g,w,f){var y,O,v,C,_,R,S,I,M,N,k,A,D,E,T,K;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y="clientes"===i?"clients-stats":"points-stats",O=n?"&country=".concat(n):"",v=o?"&hour=".concat(o):"",C="&minAge=".concat(d?d[0]:u),_="&maxAge=".concat(d?d[1]:h),R="&profileId=".concat(l),S="&tag=".concat(c),I="all"!==b?"&gender=".concat(b):"",M="all"!==j?"&prefGender=".concat(j):"",N="",k="","dateRange"===a&&(N="&fromDate=".concat(x),k="&toDate=".concat(g)),"dateMonth"===a&&(A=parseFloat(w)+1===13?1:parseFloat(w)+1,D=parseFloat(w)+1===13?parseFloat(f)+1:f,N="&fromDate=".concat(f+"-"+(w<10?"0"+w:w)+"-01"),k="&toDate=".concat(D+"-"+(A<10?"0"+A:A)+"-01")),"cartas24"!==i){e.next=20;break}return E="all"!==s?"&operatorId=".concat(s):"",T="all"!==l?"&profileId=".concat(l):"",K="all"!==m?"&botLetterId=".concat(m):"",e.next=19,Object(p.customFetch)("/bot-letters/delivery-count?".concat(T).concat(E).concat(K).concat(N).concat(k));case 19:return e.abrupt("return",e.sent);case 20:return e.next=22,Object(p.customFetch)("/agency/".concat(y,"?group=").concat(a).concat(O).concat(v).concat(C).concat(_).concat(S).concat(R).concat(I).concat(M).concat(N).concat(k));case 22:return e.abrupt("return",e.sent);case 23:case"end":return e.stop()}}),e)})));return function(t,i,a,n,d,o,r,c,s,l,m,p,u,h,b,j,x,g){return e.apply(this,arguments)}}(),M=function(){var e=Object(c.a)(r.a.mark((function e(t,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!==i){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,Object(p.customFetch)("/bot-letters/profile-letters?profileId=".concat(i,"&visible=all"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),N=S.d.div.withConfig({displayName:"EstadisticasModal__DivRadio",componentId:"sc-1s0j11n-0"})(['input[type="radio"]{@media (min-width:2560px){width:16px !important;height:16px !important;margin-right:8px !important;border:2px solid #4c4c3f !important;}'," appearance:none;}input:checked{@media (min-width:2560px){border:6px solid #4c4c3f !important;}","}"],{width:"4px",height:"4px",cursor:"pointer",borderRadius:"50%","@media (min-width: 768px)":{width:"6px",height:"6px",marginRight:"2px",border:"1px solid #4c4c3f"},"@media (min-width: 1024px)":{width:"8px",height:"8px"},"@media (min-width: 1280px)":{width:"12px",height:"12px"}},{border:"1px solid #4c4c3f","@media (min-width: 768px)":{border:"2px solid #4c4c3f"},"@media (min-width: 1024px)":{border:"3px solid #4c4c3f"},"@media (min-width: 1280px)":{border:"4px solid #4c4c3f"}}),k=Object(S.d)(N).withConfig({displayName:"EstadisticasModal___StyledDivRadio2",componentId:"sc-1s0j11n-1"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),A=Object(S.d)(N).withConfig({displayName:"EstadisticasModal___StyledDivRadio",componentId:"sc-1s0j11n-2"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),D=S.d.div.withConfig({displayName:"EstadisticasModal__DivCheck",componentId:"sc-1s0j11n-3"})(['input[type="checkbox"]{@media (min-width:2560px){width:16px !important;height:16px !important;margin-right:8px !important;border:2px solid #4c4c3f !important;}'," appearance:none;}input:checked{@media (min-width:2560px){border:6px solid #4c4c3f !important;}","}"],{width:"4px",height:"4px",cursor:"pointer","@media (min-width: 768px)":{width:"6px",height:"6px",borderRadius:"0.125rem",marginRight:"2px",border:"1px solid #4c4c3f"},"@media (min-width: 1024px)":{width:"8px",height:"8px",borderRadius:"0.125rem"},"@media (min-width: 1280px)":{width:"12px",height:"12px",borderRadius:"0.125rem"},"@media (min-width: 1536px)":{borderRadius:"0.125rem"}},{border:"1px solid #4c4c3f","@media (min-width: 768px)":{border:"3px solid #4c4c3f"},"@media (min-width: 1024px)":{border:"4px solid #4c4c3f"},"@media (min-width: 1280px)":{border:"6px solid #4c4c3f"},"@media (min-width: 1536px)":{border:"7px solid #4c4c3f"}}),E=Object(S.d)(D).withConfig({displayName:"EstadisticasModal___StyledDivCheck2",componentId:"sc-1s0j11n-4"})(["",""],(function(e){return e._css3})),T=Object(S.d)(D).withConfig({displayName:"EstadisticasModal___StyledDivCheck",componentId:"sc-1s0j11n-5"})({display:"flex",alignItems:"center","@media (min-width: 768px)":{flexDirection:"column",gap:"0.25rem"},"@media (min-width: 1024px)":{gap:"0.5rem"},"@media (min-width: 1280px)":{width:"auto"}}),K=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv",componentId:"sc-1s0j11n-6"})(["",""],(function(e){return e._css})),F=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv2",componentId:"sc-1s0j11n-7"})(["",""],(function(e){return e._css2})),z=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect",componentId:"sc-1s0j11n-8"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"2.5rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),B=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect2",componentId:"sc-1s0j11n-9"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),L=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect3",componentId:"sc-1s0j11n-10"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"3.75rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),P=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect4",componentId:"sc-1s0j11n-11"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),H=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect5",componentId:"sc-1s0j11n-12"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",flexShrink:"1","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"3.75rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),V=Object(S.d)("button").withConfig({displayName:"EstadisticasModal___StyledButton",componentId:"sc-1s0j11n-13"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",borderRadius:"0.25rem","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}}),W=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect6",componentId:"sc-1s0j11n-14"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),J=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect7",componentId:"sc-1s0j11n-15"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),G=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput",componentId:"sc-1s0j11n-16"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",width:"3rem","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),Q=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput2",componentId:"sc-1s0j11n-17"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",width:"3rem","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),U=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect8",componentId:"sc-1s0j11n-18"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),Y=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect9",componentId:"sc-1s0j11n-19"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),X=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput3",componentId:"sc-1s0j11n-20"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"3rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"3.5rem",borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{width:"4rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{width:"5rem",borderRadius:"1rem"}}),q=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput4",componentId:"sc-1s0j11n-21"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"3rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"3.5rem",borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{width:"4rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{width:"5rem",borderRadius:"1rem"}}),Z=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect10",componentId:"sc-1s0j11n-22"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"2.5rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",width:"3.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",width:"auto"}}),$=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect11",componentId:"sc-1s0j11n-23"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"2.2rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),ee=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel",componentId:"sc-1s0j11n-24"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),te=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel2",componentId:"sc-1s0j11n-25"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),ie=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel3",componentId:"sc-1s0j11n-26"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),ae=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel4",componentId:"sc-1s0j11n-27"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),ne=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel5",componentId:"sc-1s0j11n-28"})({display:"flex",alignItems:"center",userSelect:"none",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))","@media (min-width: 768px)":{gap:"0.125rem",padding:"0.125rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{gap:"0.5rem",padding:"0.375rem",borderRadius:"0.5rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),de=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv3",componentId:"sc-1s0j11n-29"})({"@media (min-width: 768px)":{display:"flex"},"@media (min-width: 1280px)":{display:"none"}}),oe=Object(S.d)("span").withConfig({displayName:"EstadisticasModal___StyledSpan",componentId:"sc-1s0j11n-30"})({"@media (min-width: 768px)":{marginRight:"0.25rem"},"@media (min-width: 1280px)":{marginRight:"0px"}}),re=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv4",componentId:"sc-1s0j11n-31"})({"@media (min-width: 768px)":{display:"none"},"@media (min-width: 1280px)":{display:"flex"}}),ce=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv5",componentId:"sc-1s0j11n-32"})({display:"flex",flexDirection:"column",gap:"0.5rem"}),se=Object(S.d)("span").withConfig({displayName:"EstadisticasModal___StyledSpan2",componentId:"sc-1s0j11n-33"})({width:"max-content"}),le=Object(S.d)("span").withConfig({displayName:"EstadisticasModal___StyledSpan3",componentId:"sc-1s0j11n-34"})({width:"max-content"}),me=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv6",componentId:"sc-1s0j11n-35"})({flexGrow:"1"});t.default=function(e){var t,i,o=e.setShowEstadisticasModal,r=e.initEstadistica,c=e.initPerfilId,w=e.initPerfilCarta24Id,f=Object(l.useState)(null!==r&&void 0!==r?r:"puntos"),y=Object(d.a)(f,2),C=y[0],S=y[1],N=Object(l.useState)("dateMonth"),D=Object(d.a)(N,2),pe=D[0],ue=D[1],he=Object(l.useState)((new Date).getMonth()+1),be=Object(d.a)(he,2),je=be[0],xe=be[1],ge=Object(l.useState)((new Date).getFullYear()),we=Object(d.a)(ge,2),fe=we[0],ye=we[1],Oe=Object(l.useState)(),ve=Object(d.a)(Oe,2),Ce=ve[0],_e=ve[1],Re=Object(l.useState)(),Se=Object(d.a)(Re,2),Ie=Se[0],Me=Se[1],Ne=Object(l.useState)(),ke=Object(d.a)(Ne,2),Ae=ke[0],De=ke[1],Ee=Object(l.useState)("all"),Te=Object(d.a)(Ee,2),Ke=Te[0],Fe=Te[1],ze=Object(l.useState)("all"),Be=Object(d.a)(ze,2),Le=Be[0],Pe=(Be[1],Object(l.useState)(null!==c&&void 0!==c?c:"all")),He=Object(d.a)(Pe,2),Ve=He[0],We=He[1],Je=Object(l.useState)(null!==w&&void 0!==w?w:"all"),Ge=Object(d.a)(Je,2),Qe=Ge[0],Ue=Ge[1],Ye=Object(l.useState)(18),Xe=Object(d.a)(Ye,2),qe=Xe[0],Ze=Xe[1],$e=Object(l.useState)(80),et=Object(d.a)($e,2),tt=et[0],it=et[1],at=Object(l.useState)("all"),nt=Object(d.a)(at,2),dt=nt[0],ot=nt[1],rt=Object(l.useState)("all"),ct=Object(d.a)(rt,2),st=ct[0],lt=ct[1],mt=Object(l.useState)((new Date).toISOString().substring(0,7)+"-01"),pt=Object(d.a)(mt,2),ut=pt[0],ht=pt[1],bt=new Date;bt.setUTCMonth(bt.getUTCMonth()+1,0);var jt,xt=Object(l.useState)(bt.toISOString().substring(0,10)),gt=Object(d.a)(xt,2),wt=gt[0],ft=gt[1],yt=Object(l.useState)("bonus"),Ot=Object(d.a)(yt,2),vt=Ot[0],Ct=Ot[1],_t=Object(l.useState)("puntos"),Rt=Object(d.a)(_t,2),St=Rt[0],It=Rt[1],Mt=Object(p.useFilterGraphFilter)(),Nt=Object(l.useState)(!0),kt=Object(d.a)(Nt,2),At=kt[0],Dt=kt[1],Et=Object(m.d)(["tags"],p.fetchTags,{staleTime:1/0}).data,Tt=Object(m.d)(["estadisticas",C,pe,Ce,Ie,Ae,Ke,Le,Ve,Qe,qe,tt,dt,st,ut,wt,je,fe],I,{refetchInterval:!1,staleTime:1/0,refetchOnMount:"always"}).data,Kt=Object(m.d)(["perfiles"],p.fetchPerfiles,{refetchInterval:!1}).data,Ft=Object(m.d)(["cartas-bot-all",Ve],M,{refetchInterval:!1}).data,zt=null===Tt||void 0===Tt?void 0:Tt.map((function(e){if("puntos"===C){var t,i,a=e.points,o=e.count,r=e.day,c=e.hour,s=e.country,l=e.ageRange,m=e.clientesComunicadosViejos,u=e.clientesComunicadosNuevos,h=0,b=JSON.parse(JSON.stringify(null!==(t=null===(i="puntos"===St?a:o)||void 0===i?void 0:i[vt])&&void 0!==t?t:{}));Object.entries(b).forEach((function(e){var t=Object(d.a)(e,2),i=t[0],a=t[1],n=p.bonusYWriteoffTypes.find((function(e){return e.value===i})).name;Mt["show"+n.replace(/ /g,"")]&&(h+=a)}));for(var j=0,x=Object.entries(b);j<x.length;j++){var g=Object(d.a)(x[j],2),w=g[0],f=g[1];b[w]=(Math.floor(f)/10).toFixed(1)}return Object(n.a)(Object(n.a)({day:r,hour:c,country:s,ageRange:l},b),{},{total:Object(p.number_format)(Math.floor(h)/10,1,",",""),cantidadDeClientesViejos:m.length,cantidadDeClientesNuevos:u.length})}if("clientes"===C){var y=e.notContacted,O=e.contacted,v=e.pointed,_=e.total,R=e.country,S=e.ageRange,I=e.clientesComunicadosViejos,M=e.clientesComunicadosNuevos;return{notContacted:y,contacted:O,pointed:v,hour:Ae,country:R,ageRange:S,total:_,cantidadDeClientesViejos:I.length,cantidadDeClientesNuevos:M.length}}return e})),Bt=new Set,Lt=new Set,Pt=Object(a.a)(null!==Tt&&void 0!==Tt?Tt:[]);try{for(Pt.s();!(jt=Pt.n()).done;){var Ht=jt.value,Vt=Ht.clientesComunicadosViejos,Wt=Ht.clientesComunicadosNuevos;null===Vt||void 0===Vt||Vt.forEach((function(e){return Bt.add(e)})),null===Wt||void 0===Wt||Wt.forEach((function(e){return Lt.add(e)}))}}catch(Jt){Pt.e(Jt)}finally{Pt.f()}return Lt.forEach((function(e){return Bt.delete(e)})),Object(O.jsx)(s.a,{setShowModal:o,children:Object(O.jsxs)(K,{_css:[{width:"90vw",height:"95vh",overflowX:"auto",display:"flex",flexDirection:"column","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.4rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{fontSize:"0.6rem"}},"@media (min-width: 2560px) { font-size: 1rem !important; }"],children:[Object(O.jsxs)(F,{_css2:[{display:"flex",alignItems:"center","@media (min-width: 768px)":{gap:"0.125rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem"},"@media (min-width: 1024px)":{paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{gap:"0.25rem"}},"@media (min-width: 2560px) { grid-gap: 1rem !important; }"],children:[Object(O.jsx)("button",{onClick:function(){return Dt((function(e){return!e}))},children:At?"< >":"> <"}),Object(O.jsxs)("label",{children:["Contabilizar:"," ",Object(O.jsxs)(z,{value:C,onChange:function(e){"clientes"===e.target.value?ue("country"):ue("dateMonth"),S(e.target.value),_e(),Me(),De()},children:[Object(O.jsx)("option",{value:"clientes",children:"Clientes"}),Object(O.jsx)("option",{value:"puntos",children:"Puntos"}),Object(O.jsx)("option",{value:"cartas24",children:"Cartas 24"})]})]}),Ce?Object(O.jsxs)("span",{children:["Pais: ",Ce]}):null,Ie?Object(O.jsxs)("span",{children:["Edad: ",Ie[0],"-",Ie[1]]}):null,void 0!==Ae?Object(O.jsxs)("span",{children:["Hora: ",0===Ae?"12 AM":Ae<12?"".concat(Ae," AM"):12===Ae?"12 PM":"".concat(Ae-12," PM")]}):null,"cartas24"===C?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:["Perfil:",Object(O.jsxs)(B,{value:Ve,onChange:function(e){Ue("all"),We(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),null===Kt||void 0===Kt?void 0:Kt.filter((function(e){return e.activo})).map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.nombre},e.id)}))]})]}),Object(O.jsxs)("label",{children:["Agrupar por:"," ",Object(O.jsxs)(L,{value:pe,onChange:function(e){return ue(e.target.value)},children:[Object(O.jsx)("option",{value:"dateRange",children:"Rango de fechas"}),Object(O.jsx)("option",{value:"dateMonth",children:"Rango por mes"})]})]}),"all"!==Ve?Object(O.jsxs)("label",{children:["Carta:",Object(O.jsxs)(P,{value:Qe,onChange:function(e){return Ue(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todas"}),null===Ft||void 0===Ft?void 0:Ft.map((function(e){return Object(O.jsxs)("option",{value:e.id,children:[e.id," ",e.title]},e.id)}))]})]}):null]}):Object(O.jsxs)("label",{children:["Agrupar por:"," ",Object(O.jsxs)(H,{value:pe,onChange:function(e){return ue(e.target.value)},children:[Ce?null:Object(O.jsx)("option",{value:"country",children:"Paises"}),Ie?null:Object(O.jsx)("option",{value:"age",children:"Edades"}),"puntos"!==C||Ae?null:Object(O.jsx)("option",{value:"hours",children:"Horas"}),"puntos"!==C||Ae||Ce||Ie?null:Object(O.jsx)("option",{value:"dateRange",children:"Rango de fechas"}),"puntos"===C?Object(O.jsx)("option",{value:"dateMonth",children:"Rango por mes"}):null]})]}),Ce||Ie||void 0!==Ae?Object(O.jsx)(V,{onClick:function(){_e(),Me(),De()},children:"Limpiar"}):null,"clientes"===C&&"country"===pe?Object(O.jsxs)(O.Fragment,{children:[+_.a.get("id")!==p.ghostAdminId?Object(O.jsxs)("label",{children:["Tag:",Object(O.jsxs)(W,{value:Ke,onChange:function(e){return Fe(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),null===Et||void 0===Et?void 0:Et.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))]})]}):null,Object(O.jsxs)("label",{children:["Perfil:",Object(O.jsxs)(J,{value:Ve,onChange:function(e){return We(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),null===Kt||void 0===Kt||null===(t=Kt.filter((function(e){return e.activo})))||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.nombre},e.id)}))]})]}),Object(O.jsxs)("label",{children:["Edad minima:",Object(O.jsx)(G,{type:"number",value:qe,onChange:function(e){return Ze(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Edad maxima:",Object(O.jsx)(Q,{type:"number",value:tt,onChange:function(e){return it(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Sexo:",Object(O.jsxs)(U,{value:dt,onChange:function(e){return ot(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"fem",children:"Mujer"}),Object(O.jsx)("option",{value:"mal",children:"Hombre"})]})]}),Object(O.jsxs)("label",{children:["En busca de:",Object(O.jsxs)(Y,{value:st,onChange:function(e){return lt(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"mal",children:"Hombre"}),Object(O.jsx)("option",{value:"fem",children:"Mujer"})]})]})]}):null,"puntos"!==C&&"cartas24"!==C||"dateRange"!==pe?null:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:["Desde:",Object(O.jsx)(X,{type:"date",value:ut,onChange:function(e){return ht(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Hasta:",Object(O.jsx)(q,{type:"date",value:wt,onChange:function(e){return ft(e.target.value)}})]})]}),"puntos"!==C&&"cartas24"!==C||"dateMonth"!==pe?null:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:["Mes:",Object(O.jsxs)(Z,{value:je,onChange:function(e){return xe(e.target.value)},children:[Object(O.jsx)("option",{value:"1",children:"Enero"}),Object(O.jsx)("option",{value:"2",children:"Febrero"}),Object(O.jsx)("option",{value:"3",children:"Marzo"}),Object(O.jsx)("option",{value:"4",children:"Abril"}),Object(O.jsx)("option",{value:"5",children:"Mayo"}),Object(O.jsx)("option",{value:"6",children:"Junio"}),Object(O.jsx)("option",{value:"7",children:"Julio"}),Object(O.jsx)("option",{value:"8",children:"Agosto"}),Object(O.jsx)("option",{value:"9",children:"Septiembre"}),Object(O.jsx)("option",{value:"10",children:"Octubre"}),Object(O.jsx)("option",{value:"11",children:"Noviembre"}),Object(O.jsx)("option",{value:"12",children:"Diciembre"})]})]}),Object(O.jsxs)("label",{children:["A\xf1o:",Object(O.jsxs)($,{value:fe,onChange:function(e){return ye(e.target.value)},children:[Object(O.jsx)("option",{value:"2020",children:"2020"}),Object(O.jsx)("option",{value:"2021",children:"2021"}),Object(O.jsx)("option",{value:"2022",children:"2022"}),Object(O.jsx)("option",{value:"2023",children:"2023"})]})]})]}),"puntos"===C?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(A,{children:[Object(O.jsxs)(ee,{children:["Puntos",Object(O.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"puntos"===St,onChange:function(){return It("puntos")}})]}),Object(O.jsxs)(te,{children:["Cantidad",Object(O.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"servicio"===St,onChange:function(){return It("servicio")}})]})]}),Object(O.jsxs)(k,{children:[Object(O.jsxs)(ie,{children:["Bonus",Object(O.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"bonus"===vt,onChange:function(){return Ct("bonus")}})]}),Object(O.jsxs)(ae,{children:["Writeoff",Object(O.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"writeoff"===vt,onChange:function(){return Ct("writeoff")}})]})]})]}):null,"puntos"===C||"clientes"===C?Object(O.jsxs)(ne,{onDoubleClick:function(){return Object(R.b)(Mt,"Clientes")},children:[Object(O.jsx)(de,{children:Object(O.jsxs)(T,{children:[Object(O.jsxs)("div",{children:[Object(O.jsx)(oe,{children:"Clientes"}),Object(O.jsx)("input",{type:"checkbox",checked:Mt.showClientes,onChange:function(e){return Mt.setShowClientes(e.target.checked)}})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Bt.size," "]}),Object(O.jsx)("span",{children:"Viejos"})]}),Object(O.jsxs)("div",{children:[Object(O.jsxs)("span",{children:[Lt.size," "]}),Object(O.jsx)("span",{children:"Nuevos"})]})]})}),Object(O.jsxs)(re,{children:[Object(O.jsxs)(E,{_css3:[{display:"flex",alignItems:"center","@media (min-width: 768px)":{fontSize:"0.3rem",gap:"0.25rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem",gap:"0.25rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{gap:"0.75rem"}},"@media (min-width: 2560px) { grid-gap: 0.75rem !important; font-size: 1rem !important; }"],children:[Object(O.jsx)("span",{children:"Clientes"}),Object(O.jsx)("input",{type:"checkbox",checked:Mt.showClientes,onChange:function(e){return Mt.setShowClientes(e.target.checked)}})]}),Object(O.jsxs)(ce,{children:[Object(O.jsxs)(se,{children:[Bt.size," Viejos"]}),Object(O.jsxs)(le,{children:[Lt.size," Nuevos"]})]})]})]}):null,"puntos"===C?("bonus"===vt?p.bonusTypes:p.writeoffTypes).map((function(e,t){var i=e.name,a=e.value;return"todos"===a||a.startsWith("manual")?null:Object(O.jsx)(R.a,{text:i,checked:Mt["show"+i.replace(/ /g,"")],setChecked:Mt["setShow"+i.replace(/ /g,"")],color:p.contrastingHexColors[t],service:a,filter:Mt,total:Math.floor(null===Tt||void 0===Tt?void 0:Tt.reduce((function(e,t){var i,n,d=t.points,o=t.count;return e+(null!==(i=null===(n=("puntos"===St?d:o)[vt])||void 0===n?void 0:n[a])&&void 0!==i?i:0)}),0))/10},i)})):null]}),Object(O.jsx)(me,{style:{width:"".concat(At?100:100+3*Math.max((null!==(i=null===Tt||void 0===Tt?void 0:Tt.length)&&void 0!==i?i:0)-50,0),"%")},children:Tt?Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.a,{data:zt,onClick:function(e){e&&("all"===Ke&&"all"===Ve&&"all"===dt&&"all"===st||"clientes"!==C)&&("clientes"===C?"country"!==pe||Ie?"age"!==pe||Ce||(ue("country"),Me(null===e||void 0===e?void 0:e.activePayload[0].payload.ageRange.split("-"))):(ue("age"),_e(null===e||void 0===e?void 0:e.activePayload[0].payload.country)):"puntos"===C&&("country"!==pe||Ie&&Ae?"age"!==pe||Ce&&Ae?"hours"!==pe||Ce&&Ie||(Ce?Ie||ue("age"):ue("country"),De(null===e||void 0===e?void 0:e.activeTooltipIndex)):(ue(Ce?"hours":"country"),Me(null===e||void 0===e?void 0:e.activePayload[0].payload.ageRange.split("-"))):(ue(Ie?"hours":"age"),_e(null===e||void 0===e?void 0:e.activePayload[0].payload.country))))},children:[Object(O.jsx)(b.a,{formatter:function(e,t){return"cartas24"===C?[e,"all"===t?"Todos":t]:"puntos"===C?[e,null===(i=p.bonusTypes.find((function(e){return e.value===t})))||void 0===i?void 0:i.name]:[e,"notContacted"===t?"No contactados":"contacted"===t?"Contactados":"pointed"===t?"Punteados":"total"===t?"Total":"."];var i},contentStyle:{backgroundColor:"#333333"}}),Object(O.jsx)(j.a,{strokeDasharray:"3 3"}),Object(O.jsx)(x.a,{dataKey:"cartas24"===C?"day":"country"===pe?"country":"age"===pe?"ageRange":"hours"===pe?"hour":"day"}),Object(O.jsx)(g.a,{yAxisId:"left-axis",orientation:"left"}),Object(O.jsx)(g.a,{yAxisId:"right-axis",orientation:"right"}),v(C,Ke,Ve,pe,zt,Ft,Qe,vt,St,Mt)]})},pe+(At?"c":"nc")):null})]})})}}}]);