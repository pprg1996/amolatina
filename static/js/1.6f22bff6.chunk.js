(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[1],{140:function(e,t,i){"use strict";i.d(t,"b",(function(){return h}));var a=i(9),n=i(20),d=i(5),o=i(2),r=i(6).ActionIcon,c=Object(d.d)(r).withConfig({displayName:"ColoredCheckbox___StyledActionIcon",componentId:"sc-2a66eg-0"})(["",""],(function(e){return e._css2})),s=d.d.div.withConfig({displayName:"ColoredCheckbox__DivColor",componentId:"sc-2a66eg-1"})(["",""],(function(e){return!0===e.checked?{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}:{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",alignItems:"center",gap:"0.25rem",fontWeight:"700"}})),l=Object(d.d)(s).withConfig({displayName:"ColoredCheckbox___StyledDivColor",componentId:"sc-2a66eg-2"})(["",""],(function(e){return e._css})),m=Object(d.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv",componentId:"sc-2a66eg-3"})({display:"flex",justifyContent:"center"}),p=Object(d.d)("div").withConfig({displayName:"ColoredCheckbox___StyledDiv2",componentId:"sc-2a66eg-4"})({display:"flex",justifyContent:"center"}),u=Object(d.d)("span").withConfig({displayName:"ColoredCheckbox___StyledSpan",componentId:"sc-2a66eg-5"})(["",""],(function(e){return e._css3})),h=function(e,t){var i,d=!0,o=Object(n.a)(Object.entries(e).filter((function(e){var i=Object(a.a)(e,1)[0];return i.startsWith("show")&&i!=="show"+t.replace(/ /g,"")})));try{for(o.s();!(i=o.n()).done;){Object(a.a)(i.value,2)[1]&&(d=!1)}}catch(x){o.e(x)}finally{o.f()}if(e["show"+t.replace(/ /g,"")]&&d){var r,c=Object(n.a)(Object.entries(e).filter((function(e){return Object(a.a)(e,1)[0].startsWith("set")})));try{for(c.s();!(r=c.n()).done;){var s=Object(a.a)(r.value,2),l=s[0],m=s[1];"setShowClientes"!==l&&m(!0)}}catch(x){c.e(x)}finally{c.f()}}else for(var p=0,u=Object.entries(e);p<u.length;p++){var h=Object(a.a)(u[p],2),b=h[0],j=h[1];"function"===typeof j&&(b==="setShow"+t.replace(/ /g,"")?j(!0):j(!1))}};t.a=function(e){var t=e.text,i=e.checked,a=e.setChecked,n=e.color,d=e.service,r=e.filter,s=e.total;return Object(o.jsxs)(l,{style:!0===i?{backgroundColor:n}:{borderColor:n},checked:i,title:t,onDoubleClick:function(){return h(r,t)},onClick:function(){return a(!0!==i)},_css:[{paddingLeft:"0.125rem",borderWidth:"1px",flexShrink:"0",display:"flex",alignItems:"center",flexDirection:"column",cursor:"pointer","@media (min-width: 768px)":{borderRadius:"0.375rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",gap:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",paddingTop:"0.4rem",paddingBottom:"0.4rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",paddingTop:"0.7rem",paddingBottom:"0.7rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",paddingLeft:"0.15rem",paddingRight:"0.15rem",paddingTop:"0.8rem",paddingBottom:"0.8rem"}},"@media (min-width: 2560px) { padding: 0.75rem !important; grid-gap: 0.5rem !important; }"],children:[Object(o.jsx)(m,{children:Object(o.jsx)(c,{type:d,_css2:[{width:"auto","@media (min-width: 768px)":{height:"0.6rem"},"@media (min-width: 1024px)":{height:"0.5rem",paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{height:"0.7rem"},"@media (min-width: 1536px)":{height:"0.9rem"}},"@media (min-width: 2560px) { height: 1.75rem !important; }"]})}),Object(o.jsx)(p,{children:Object(o.jsx)(u,{_css3:[{fontWeight:"700","@media (min-width: 768px)":{fontSize:"0.25rem"},"@media (min-width: 1024px)":{fontSize:"0.3rem"},"@media (min-width: 1280px)":{fontSize:"0.45rem"},"@media (min-width: 1536px)":{fontSize:"0.5rem"}},"@media (min-width: 2560px) { font-size: 0.75rem !important; }"],children:s})})]})}},429:function(e,t,i){"use strict";i.r(t);var a=i(20),n=i(4),d=i(9),o=i(1),r=i.n(o),c=i(8),s=i(87),l=i(0),m=i(10),p=i(6),u=i(409),h=i(410),b=i(405),j=i(415),x=i(389),g=i(390),w=i(21),f=i(403),y=i(387),O=i(2),v=function(e,t,i,a,n,d,o,r,c,s){var l,u=m.b.getQueryData(["perfiles"]),h=m.b.getQueryData(["tags"]);return"clientes"===e?"all"!==t||"all"!==i?Object(O.jsx)(f.a,{dataKey:"total",stackId:"a",fill:"#6B39BD",isAnimationActive:!1,yAxisId:"left-axis",children:Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}})}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{dataKey:"notContacted",stackId:"a",fill:"#6B39BD",isAnimationActive:!1,yAxisId:"left-axis"}),Object(O.jsx)(f.a,{dataKey:"contacted",stackId:"a",fill:"#82ca9d",isAnimationActive:!1,yAxisId:"left-axis",children:"clientes"!==e?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null}),Object(O.jsx)(f.a,{dataKey:"pointed",stackId:"a",fill:"#FAC24B",isAnimationActive:!1,yAxisId:"left-axis",children:Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}})}),s.showClientes?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesViejos",yAxisId:"right-axis",fill:"#3346ff",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesViejos",position:"top",style:{fill:"white"}})}),Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesNuevos",yAxisId:"right-axis",fill:"#70dcba",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesNuevos",position:"top",style:{fill:"white"}})})]}):null]}):"puntos"===e?Object(O.jsxs)(O.Fragment,{children:[("bonus"===r?p.bonusTypes:p.writeoffTypes).map((function(e,t,i){var a=e.name,n=e.value,d=i.length;return Object(O.jsx)(f.a,{dataKey:s["show"+a.replace(/ /g,"")]?n:null,stackId:"a",fill:p.contrastingHexColors[t],isAnimationActive:!1,yAxisId:"left-axis",children:t===d-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},n)})),s.showClientes?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesViejos",yAxisId:"right-axis",fill:"#3346ff",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesViejos",position:"top",style:{fill:"white"}})}),Object(O.jsx)(f.a,{dataKey:"cantidadDeClientesNuevos",yAxisId:"right-axis",fill:"#70dcba",isAnimationActive:!1,children:Object(O.jsx)(y.a,{dataKey:"cantidadDeClientesNuevos",position:"top",style:{fill:"white"}})})]}):null]}):"cartas24"===e?"all"===i?u.map((function(e,t,i){var a=e.id,n=e.nombre,d=i.length;return Object(O.jsx)(f.a,{dataKey:n,stackId:"a",fill:p.contrastingHexColors[t%p.contrastingHexColors.length],isAnimationActive:!1,yAxisId:"left-axis",children:t===d-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},a)})):"all"===o?null===d||void 0===d?void 0:d.map((function(e,t,i){var a=e.id,n=e.title,d=i.length;return Object(O.jsx)(f.a,{dataKey:a+" "+n,stackId:"a",fill:p.contrastingHexColors[t%p.contrastingHexColors.length],isAnimationActive:!1,yAxisId:"left-axis",children:t===d-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},a)})):null===(l=["all"].concat(Object(w.a)(null!==h&&void 0!==h?h:[])))||void 0===l?void 0:l.map((function(e,t,i){var a=i.length;return Object(O.jsx)(f.a,{dataKey:e,stackId:"a",fill:p.contrastingHexColors[t%p.contrastingHexColors.length],isAnimationActive:!1,yAxisId:"left-axis",children:t===a-1?Object(O.jsx)(y.a,{dataKey:"total",position:"top",style:{fill:"white"}}):null},e)})):void 0},C=i(12),_=i.n(C),R=i(140),S=i(5),I=function(){var e=Object(c.a)(r.a.mark((function e(t,i,a,n,d,o,c,s,l,m,u,h,b,j,x,g,w,f){var y,O,v,C,_,R,S,I,D,M,N,k,A,E,T,F;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y="clientes"===i?"clients-stats":"points-stats",O=n?"&country=".concat(n):"",v=o?"&hour=".concat(o):"",C="&minAge=".concat(d?d[0]:u),_="&maxAge=".concat(d?d[1]:h),R="&profileId=".concat(l),S="&tag=".concat(c),I="all"!==b?"&gender=".concat(b):"",D="all"!==j?"&prefGender=".concat(j):"",M="",N="","dateRange"===a&&(M="&fromDate=".concat(x),N="&toDate=".concat(g)),"dateMonth"===a&&(k=parseFloat(w)+1===13?1:parseFloat(w)+1,A=parseFloat(w)+1===13?parseFloat(f)+1:f,M="&fromDate=".concat(f+"-"+(w<10?"0"+w:w)+"-01"),N="&toDate=".concat(A+"-"+(k<10?"0"+k:k)+"-01")),"Tiempo"===a&&(M="&fromDate=".concat(x),N="&toDate=".concat(new Date(g).setDate(new Date(g).getDate()+1))),"cartas24"!==i){e.next=21;break}return E="all"!==s?"&operatorId=".concat(s):"",T="all"!==l?"&profileId=".concat(l):"",F="all"!==m?"&botLetterId=".concat(m):"",e.next=20,Object(p.customFetch)("/bot-letters/delivery-count?".concat(T).concat(E).concat(F).concat(M).concat(N));case 20:return e.abrupt("return",e.sent);case 21:return e.next=23,Object(p.customFetch)("/agency/".concat(y,"?group=").concat(a).concat(O).concat(v).concat(C).concat(_).concat(S).concat(R).concat(I).concat(D).concat(M).concat(N));case 23:return e.abrupt("return",e.sent);case 24:case"end":return e.stop()}}),e)})));return function(t,i,a,n,d,o,r,c,s,l,m,p,u,h,b,j,x,g){return e.apply(this,arguments)}}(),D=function(){var e=Object(c.a)(r.a.mark((function e(t,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("all"!==i){e.next=2;break}return e.abrupt("return",[]);case 2:return e.next=4,Object(p.customFetch)("/bot-letters/profile-letters?profileId=".concat(i,"&visible=all"));case 4:return e.abrupt("return",e.sent);case 5:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),M=S.d.div.withConfig({displayName:"EstadisticasModal__DivRadio",componentId:"sc-1s0j11n-0"})(['input[type="radio"]{@media (min-width:2560px){width:16px !important;height:16px !important;margin-right:8px !important;border:2px solid #4c4c3f !important;}'," appearance:none;}input:checked{@media (min-width:2560px){border:6px solid #4c4c3f !important;}","}"],{width:"4px",height:"4px",cursor:"pointer",borderRadius:"50%","@media (min-width: 768px)":{width:"6px",height:"6px",marginRight:"2px",border:"1px solid #4c4c3f"},"@media (min-width: 1024px)":{width:"8px",height:"8px"},"@media (min-width: 1280px)":{width:"12px",height:"12px"}},{border:"1px solid #4c4c3f","@media (min-width: 768px)":{border:"2px solid #4c4c3f"},"@media (min-width: 1024px)":{border:"3px solid #4c4c3f"},"@media (min-width: 1280px)":{border:"4px solid #4c4c3f"}}),N=Object(S.d)(M).withConfig({displayName:"EstadisticasModal___StyledDivRadio2",componentId:"sc-1s0j11n-1"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),k=Object(S.d)(M).withConfig({displayName:"EstadisticasModal___StyledDivRadio",componentId:"sc-1s0j11n-2"})({display:"flex",flexDirection:"column","--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem"},"@media (min-width: 1280px)":{paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),A=S.d.div.withConfig({displayName:"EstadisticasModal__DivCheck",componentId:"sc-1s0j11n-3"})(['input[type="checkbox"]{@media (min-width:2560px){width:16px !important;height:16px !important;margin-right:8px !important;border:2px solid #4c4c3f !important;}'," appearance:none;}input:checked{@media (min-width:2560px){border:6px solid #4c4c3f !important;}","}"],{width:"4px",height:"4px",cursor:"pointer","@media (min-width: 768px)":{width:"6px",height:"6px",borderRadius:"0.125rem",marginRight:"2px",border:"1px solid #4c4c3f"},"@media (min-width: 1024px)":{width:"8px",height:"8px",borderRadius:"0.125rem"},"@media (min-width: 1280px)":{width:"12px",height:"12px",borderRadius:"0.125rem"},"@media (min-width: 1536px)":{borderRadius:"0.125rem"}},{border:"1px solid #4c4c3f","@media (min-width: 768px)":{border:"3px solid #4c4c3f"},"@media (min-width: 1024px)":{border:"4px solid #4c4c3f"},"@media (min-width: 1280px)":{border:"6px solid #4c4c3f"},"@media (min-width: 1536px)":{border:"7px solid #4c4c3f"}}),E=Object(S.d)(A).withConfig({displayName:"EstadisticasModal___StyledDivCheck",componentId:"sc-1s0j11n-4"})(["",""],(function(e){return e._css3})),T=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv",componentId:"sc-1s0j11n-5"})(["",""],(function(e){return e._css})),F=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv2",componentId:"sc-1s0j11n-6"})(["",""],(function(e){return e._css2})),K=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect",componentId:"sc-1s0j11n-7"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"2.5rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),z=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect2",componentId:"sc-1s0j11n-8"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),P=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect3",componentId:"sc-1s0j11n-9"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"3.75rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),B=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect4",componentId:"sc-1s0j11n-10"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),L=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect5",componentId:"sc-1s0j11n-11"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",flexShrink:"1","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"3.75rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),H=Object(S.d)("button").withConfig({displayName:"EstadisticasModal___StyledButton",componentId:"sc-1s0j11n-12"})({"--tw-bg-opacity":"1",backgroundColor:"rgba(220, 38, 38, var(--tw-bg-opacity))",borderRadius:"0.25rem","@media (min-width: 768px)":{paddingLeft:"0.25rem",paddingRight:"0.25rem",paddingTop:"0.25rem",paddingBottom:"0.25rem"}}),V=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect6",componentId:"sc-1s0j11n-13"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),W=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect7",componentId:"sc-1s0j11n-14"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),J=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput",componentId:"sc-1s0j11n-15"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",width:"3rem","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),G=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput2",componentId:"sc-1s0j11n-16"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",width:"3rem","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),Q=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect8",componentId:"sc-1s0j11n-17"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),U=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect9",componentId:"sc-1s0j11n-18"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),Y=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput3",componentId:"sc-1s0j11n-19"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"3rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"3.5rem",borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{width:"4rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{width:"5rem",borderRadius:"1rem"}}),X=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput4",componentId:"sc-1s0j11n-20"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"3rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"3.5rem",borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{width:"4rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{width:"5rem",borderRadius:"1rem"}}),q=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect10",componentId:"sc-1s0j11n-21"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"2.5rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",width:"3.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",width:"auto"}}),Z=Object(S.d)("select").withConfig({displayName:"EstadisticasModal___StyledSelect11",componentId:"sc-1s0j11n-22"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"2.2rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",padding:"0.25rem",width:"auto"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),$=Object(S.d)("input").withConfig({displayName:"EstadisticasModal___StyledInput5",componentId:"sc-1s0j11n-23"})({"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))","@media (min-width: 768px)":{width:"3rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"3.5rem",borderRadius:"0.5rem",padding:"0.25rem"},"@media (min-width: 1280px)":{width:"4rem",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{width:"5rem",borderRadius:"1rem"}}),ee=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel",componentId:"sc-1s0j11n-24"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"}}),te=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel2",componentId:"sc-1s0j11n-25"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"}}),ie=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel3",componentId:"sc-1s0j11n-26"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),ae=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel4",componentId:"sc-1s0j11n-27"})({display:"flex",alignItems:"center",justifyContent:"space-between","@media (min-width: 768px)":{gap:"0.125rem"},"@media (min-width: 1024px)":{gap:"0.375rem"},"@media (min-width: 1280px)":{gap:"0.5rem"}}),ne=Object(S.d)("label").withConfig({displayName:"EstadisticasModal___StyledLabel5",componentId:"sc-1s0j11n-28"})({display:"flex",alignItems:"center",userSelect:"none",borderWidth:"1px","--tw-border-opacity":"1",borderColor:"rgba(255, 255, 255, var(--tw-border-opacity))","@media (min-width: 768px)":{gap:"0.125rem",padding:"0.125rem",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{gap:"0.25rem",padding:"0.375rem",borderRadius:"0.5rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem"},"@media (min-width: 1536px)":{borderRadius:"1rem"}}),de=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv3",componentId:"sc-1s0j11n-29"})({display:"flex",flexDirection:"column","@media (min-width: 768px)":{gap:"0.125rem",fontSize:"0.25rem"},"@media (min-width: 1024px)":{fontSize:"0.35rem"},"@media (min-width: 1280px)":{gap:"0.5rem",fontSize:"0.5rem"}}),oe=Object(S.d)("span").withConfig({displayName:"EstadisticasModal___StyledSpan",componentId:"sc-1s0j11n-30"})({width:"max-content"}),re=Object(S.d)("span").withConfig({displayName:"EstadisticasModal___StyledSpan2",componentId:"sc-1s0j11n-31"})({width:"max-content"}),ce=Object(S.d)("div").withConfig({displayName:"EstadisticasModal___StyledDiv4",componentId:"sc-1s0j11n-32"})({flexGrow:"1"});t.default=function(e){var t,i,o=e.setShowEstadisticasModal,r=e.initEstadistica,c=e.initPerfilId,w=e.initPerfilCarta24Id,f=Object(l.useState)(null!==r&&void 0!==r?r:"puntos"),y=Object(d.a)(f,2),C=y[0],S=y[1],M=Object(l.useState)("dateMonth"),A=Object(d.a)(M,2),se=A[0],le=A[1],me=Object(l.useState)((new Date).getMonth()+1),pe=Object(d.a)(me,2),ue=pe[0],he=pe[1],be=Object(l.useState)((new Date).getFullYear()),je=Object(d.a)(be,2),xe=je[0],ge=je[1],we=Object(l.useState)(),fe=Object(d.a)(we,2),ye=fe[0],Oe=fe[1],ve=Object(l.useState)(),Ce=Object(d.a)(ve,2),_e=Ce[0],Re=Ce[1],Se=Object(l.useState)(),Ie=Object(d.a)(Se,2),De=Ie[0],Me=Ie[1],Ne=Object(l.useState)("all"),ke=Object(d.a)(Ne,2),Ae=ke[0],Ee=ke[1],Te=Object(l.useState)("all"),Fe=Object(d.a)(Te,2),Ke=Fe[0],ze=(Fe[1],Object(l.useState)(null!==c&&void 0!==c?c:"all")),Pe=Object(d.a)(ze,2),Be=Pe[0],Le=Pe[1],He=Object(l.useState)(null!==w&&void 0!==w?w:"all"),Ve=Object(d.a)(He,2),We=Ve[0],Je=Ve[1],Ge=Object(l.useState)(18),Qe=Object(d.a)(Ge,2),Ue=Qe[0],Ye=Qe[1],Xe=Object(l.useState)(80),qe=Object(d.a)(Xe,2),Ze=qe[0],$e=qe[1],et=Object(l.useState)("all"),tt=Object(d.a)(et,2),it=tt[0],at=tt[1],nt=Object(l.useState)("all"),dt=Object(d.a)(nt,2),ot=dt[0],rt=dt[1],ct=Object(l.useState)((new Date).toISOString().slice(0,-16)+"01T00:00:00"),st=Object(d.a)(ct,2),lt=st[0],mt=st[1],pt=new Date;pt.setUTCMonth(pt.getUTCMonth()+1,0);var ut,ht=Object(l.useState)(pt.toISOString().slice(0,-13)+"00:00:00"),bt=Object(d.a)(ht,2),jt=bt[0],xt=bt[1],gt=Object(l.useState)("bonus"),wt=Object(d.a)(gt,2),ft=wt[0],yt=wt[1],Ot=Object(l.useState)("puntos"),vt=Object(d.a)(Ot,2),Ct=vt[0],_t=vt[1],Rt=Object(p.useFilterGraphFilter)(),St=Object(l.useState)(!0),It=Object(d.a)(St,2),Dt=It[0],Mt=It[1],Nt=Object(m.d)(["tags"],p.fetchTags,{staleTime:1/0}).data,kt=Object(m.d)(["estadisticas",C,se,ye,_e,De,Ae,Ke,Be,We,Ue,Ze,it,ot,lt,jt,ue,xe],I,{refetchInterval:!1,staleTime:1/0,refetchOnMount:"always"}).data,At=Object(m.d)(["perfiles"],p.fetchPerfiles,{refetchInterval:!1}).data,Et=Object(m.d)(["cartas-bot-all",Be],D,{refetchInterval:!1}).data,Tt=null===kt||void 0===kt?void 0:kt.map((function(e){if("puntos"===C){var t,i,a=e.points,o=e.count,r=e.day,c=e.hour,s=e.country,l=e.ageRange,m=e.clientesComunicadosViejos,u=e.clientesComunicadosNuevos,h=0,b=JSON.parse(JSON.stringify(null!==(t=null===(i="puntos"===Ct?a:o)||void 0===i?void 0:i[ft])&&void 0!==t?t:{}));Object.entries(b).forEach((function(e){var t=Object(d.a)(e,2),i=t[0],a=t[1],n=p.bonusYWriteoffTypes.find((function(e){return e.value===i})).name;Rt["show"+n.replace(/ /g,"")]&&(h+=a)}));for(var j=0,x=Object.entries(b);j<x.length;j++){var g=Object(d.a)(x[j],2),w=g[0],f=g[1];b[w]="puntos"===Ct?(f/10).toFixed(2):f}return Object(n.a)(Object(n.a)({day:r,hour:c,country:s,ageRange:l},b),{},{total:"puntos"===Ct?Object(p.number_format)((h/10).toFixed(2),2,",",""):h,cantidadDeClientesViejos:m.length,cantidadDeClientesNuevos:u.length})}if("clientes"===C){var y=e.notContacted,O=e.contacted,v=e.pointed,_=e.total,R=e.country,S=e.ageRange,I=e.clientesComunicadosViejos,D=e.clientesComunicadosNuevos;return{notContacted:y,contacted:O,pointed:v,hour:De,country:R,ageRange:S,total:_,cantidadDeClientesViejos:I.length,cantidadDeClientesNuevos:D.length}}return e})),Ft=new Set,Kt=new Set,zt=Object(a.a)(null!==kt&&void 0!==kt?kt:[]);try{for(zt.s();!(ut=zt.n()).done;){var Pt=ut.value,Bt=Pt.clientesComunicadosViejos,Lt=Pt.clientesComunicadosNuevos;null===Bt||void 0===Bt||Bt.forEach((function(e){return Ft.add(e)})),null===Lt||void 0===Lt||Lt.forEach((function(e){return Kt.add(e)}))}}catch(Ht){zt.e(Ht)}finally{zt.f()}return Kt.forEach((function(e){return Ft.delete(e)})),Object(O.jsx)(s.a,{setShowModal:o,children:Object(O.jsxs)(T,{_css:[{width:"95vw",height:"95vh",overflowX:"auto",display:"flex",flexDirection:"column","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))","@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.4rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem"},"@media (min-width: 1536px)":{fontSize:"0.6rem"}},"@media (min-width: 2560px) { font-size: 1rem !important; }"],children:[Object(O.jsxs)(F,{_css2:[{display:"flex",alignItems:"center","@media (min-width: 768px)":{gap:"0.125rem",paddingLeft:"0.5rem",paddingRight:"0.5rem",paddingTop:"0.375rem",paddingBottom:"0.375rem"},"@media (min-width: 1024px)":{paddingLeft:"0.75rem",paddingRight:"0.75rem"},"@media (min-width: 1280px)":{gap:"0.25rem"}},"@media (min-width: 2560px) { grid-gap: 1rem !important; }"],children:[Object(O.jsx)("button",{onClick:function(){return Mt((function(e){return!e}))},children:Dt?"< >":"> <"}),Object(O.jsxs)("label",{children:["Contabilizar:"," ",Object(O.jsxs)(K,{value:C,onChange:function(e){"clientes"===e.target.value?le("country"):le("dateMonth"),S(e.target.value),Oe(),Re(),Me()},children:[Object(O.jsx)("option",{value:"clientes",children:"Clientes"}),Object(O.jsx)("option",{value:"puntos",children:"Puntos"}),Object(O.jsx)("option",{value:"cartas24",children:"Cartas 24"})]})]}),ye?Object(O.jsxs)("span",{children:["Pais: ",ye]}):null,_e?Object(O.jsxs)("span",{children:["Edad: ",_e[0],"-",_e[1]]}):null,void 0!==De?Object(O.jsxs)("span",{children:["Hora: ",0===De?"12 AM":De<12?"".concat(De," AM"):12===De?"12 PM":"".concat(De-12," PM")]}):null,"cartas24"===C?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:["Perfil:",Object(O.jsxs)(z,{value:Be,onChange:function(e){Je("all"),Le(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),null===At||void 0===At?void 0:At.filter((function(e){return e.activo})).map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.nombre},e.id)}))]})]}),Object(O.jsxs)("label",{children:["Agrupar por:"," ",Object(O.jsxs)(P,{value:se,onChange:function(e){return le(e.target.value)},children:[Object(O.jsx)("option",{value:"dateRange",children:"Rango de fechas"}),Object(O.jsx)("option",{value:"dateMonth",children:"Rango por mes"})]})]}),"all"!==Be?Object(O.jsxs)("label",{children:["Carta:",Object(O.jsxs)(B,{value:We,onChange:function(e){return Je(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todas"}),null===Et||void 0===Et?void 0:Et.map((function(e){return Object(O.jsxs)("option",{value:e.id,children:[e.id," ",e.title]},e.id)}))]})]}):null]}):Object(O.jsxs)("label",{children:["Agrupar por:"," ",Object(O.jsxs)(L,{value:se,onChange:function(e){"Tiempo"===e.target.value?mt((new Date).toISOString().slice(0,-14)):mt((new Date).toISOString().slice(0,-16)+"01T00:00:00"),le(e.target.value)},children:[ye?null:Object(O.jsx)("option",{value:"country",children:"Paises"}),_e?null:Object(O.jsx)("option",{value:"age",children:"Edades"}),"puntos"!==C||De?null:Object(O.jsx)("option",{value:"hours",children:"Horas"}),"puntos"!==C||De||ye||_e?null:Object(O.jsx)("option",{value:"dateRange",children:"Rango de fechas"}),"puntos"===C?Object(O.jsx)("option",{value:"dateMonth",children:"Rango por mes"}):null,"puntos"===C?Object(O.jsx)("option",{value:"Tiempo",children:"Diario"}):null]})]}),ye||_e||void 0!==De?Object(O.jsx)(H,{onClick:function(){Oe(),Re(),Me()},children:"Limpiar"}):null,"clientes"===C&&"country"===se?Object(O.jsxs)(O.Fragment,{children:[+_.a.get("id")!==p.ghostAdminId?Object(O.jsxs)("label",{children:["Tag:",Object(O.jsxs)(V,{value:Ae,onChange:function(e){return Ee(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),null===Nt||void 0===Nt?void 0:Nt.map((function(e){return Object(O.jsx)("option",{value:e,children:e},e)}))]})]}):null,Object(O.jsxs)("label",{children:["Perfil:",Object(O.jsxs)(W,{value:Be,onChange:function(e){return Le(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),null===At||void 0===At||null===(t=At.filter((function(e){return e.activo})))||void 0===t?void 0:t.map((function(e){return Object(O.jsx)("option",{value:e.id,children:e.nombre},e.id)}))]})]}),Object(O.jsxs)("label",{children:["Edad minima:",Object(O.jsx)(J,{type:"number",value:Ue,onChange:function(e){return Ye(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Edad maxima:",Object(O.jsx)(G,{type:"number",value:Ze,onChange:function(e){return $e(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Sexo:",Object(O.jsxs)(Q,{value:it,onChange:function(e){return at(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"fem",children:"Mujer"}),Object(O.jsx)("option",{value:"mal",children:"Hombre"})]})]}),Object(O.jsxs)("label",{children:["En busca de:",Object(O.jsxs)(U,{value:ot,onChange:function(e){return rt(e.target.value)},children:[Object(O.jsx)("option",{value:"all",children:"Todos"}),Object(O.jsx)("option",{value:"mal",children:"Hombre"}),Object(O.jsx)("option",{value:"fem",children:"Mujer"})]})]})]}):null,"puntos"!==C&&"cartas24"!==C||"dateRange"!==se?null:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:["Desde:",Object(O.jsx)(Y,{type:"datetime-local",value:lt,onChange:function(e){return mt(e.target.value)}})]}),Object(O.jsxs)("label",{children:["Hasta:",Object(O.jsx)(X,{type:"datetime-local",value:jt,onChange:function(e){return xt(e.target.value)}})]})]}),"puntos"!==C&&"cartas24"!==C||"dateMonth"!==se?null:Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)("label",{children:["Mes:",Object(O.jsxs)(q,{value:ue,onChange:function(e){return he(e.target.value)},children:[Object(O.jsx)("option",{value:"1",children:"Enero"}),Object(O.jsx)("option",{value:"2",children:"Febrero"}),Object(O.jsx)("option",{value:"3",children:"Marzo"}),Object(O.jsx)("option",{value:"4",children:"Abril"}),Object(O.jsx)("option",{value:"5",children:"Mayo"}),Object(O.jsx)("option",{value:"6",children:"Junio"}),Object(O.jsx)("option",{value:"7",children:"Julio"}),Object(O.jsx)("option",{value:"8",children:"Agosto"}),Object(O.jsx)("option",{value:"9",children:"Septiembre"}),Object(O.jsx)("option",{value:"10",children:"Octubre"}),Object(O.jsx)("option",{value:"11",children:"Noviembre"}),Object(O.jsx)("option",{value:"12",children:"Diciembre"})]})]}),Object(O.jsxs)("label",{children:["A\xf1o:",Object(O.jsxs)(Z,{value:xe,onChange:function(e){return ge(e.target.value)},children:[Object(O.jsx)("option",{value:"2020",children:"2020"}),Object(O.jsx)("option",{value:"2021",children:"2021"}),Object(O.jsx)("option",{value:"2022",children:"2022"}),Object(O.jsx)("option",{value:"2023",children:"2023"})]})]})]}),"puntos"===C&&"Tiempo"===se?Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)("label",{children:["Dia:",Object(O.jsx)($,{type:"date",value:lt,onChange:function(e){return mt(e.target.value)}})]})}):null,"puntos"===C?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsxs)(k,{children:[Object(O.jsxs)(ee,{children:["Puntos",Object(O.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"puntos"===Ct,onChange:function(){return _t("puntos")}})]}),Object(O.jsxs)(te,{children:["Cantidad",Object(O.jsx)("input",{type:"radio",name:"puntosorservicio",checked:"servicio"===Ct,onChange:function(){return _t("servicio")}})]})]}),Object(O.jsxs)(N,{children:[Object(O.jsxs)(ie,{children:["Bonus",Object(O.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"bonus"===ft,onChange:function(){return yt("bonus")}})]}),Object(O.jsxs)(ae,{children:["Writeoff",Object(O.jsx)("input",{type:"radio",name:"bonusorwriteoff",checked:"writeoff"===ft,onChange:function(){return yt("writeoff")}})]})]})]}):null,"puntos"===C||"clientes"===C?Object(O.jsxs)(ne,{onDoubleClick:function(){return Object(R.b)(Rt,"Clientes")},children:[Object(O.jsxs)(E,{_css3:[{display:"flex",alignItems:"center","@media (min-width: 768px)":{fontSize:"0.25rem",gap:"0.125rem"},"@media (min-width: 1024px)":{fontSize:"0.35rem"},"@media (min-width: 1280px)":{fontSize:"0.5rem",gap:"0.25rem"},"@media (min-width: 1536px)":{gap:"0.75rem"}},"@media (min-width: 2560px) { grid-gap: 0.75rem !important; font-size: 1rem !important; }"],children:[Object(O.jsx)("span",{children:"Clientes"}),Object(O.jsx)("input",{type:"checkbox",checked:Rt.showClientes,onChange:function(e){return Rt.setShowClientes(e.target.checked)}})]}),Object(O.jsxs)(de,{children:[Object(O.jsxs)(oe,{children:[Ft.size," Viejos"]}),Object(O.jsxs)(re,{children:[Kt.size," Nuevos"]})]})]}):null,"puntos"===C?("bonus"===ft?p.bonusTypes:p.writeoffTypes).map((function(e,t){var i=e.name,a=e.value;return"todos"===a?null:Object(O.jsx)(R.a,{text:i,checked:Rt["show"+i.replace(/ /g,"")],setChecked:Rt["setShow"+i.replace(/ /g,"")],color:p.contrastingHexColors[t],service:a,filter:Rt,total:"puntos"===Ct?Object(p.number_format)((null===kt||void 0===kt?void 0:kt.reduce((function(e,t){var i,n;return e+(null!==(i=null===(n=t.points[ft])||void 0===n?void 0:n[a])&&void 0!==i?i:0)}),0))/10,2,",","")+"\ud83d\udc8e":Math.floor(null===kt||void 0===kt?void 0:kt.reduce((function(e,t){var i,n;return e+(null!==(i=null===(n=t.count[ft])||void 0===n?void 0:n[a])&&void 0!==i?i:0)}),0))},i)})):null]}),Object(O.jsx)(ce,{style:{width:"".concat(Dt?100:100+3*Math.max((null!==(i=null===kt||void 0===kt?void 0:kt.length)&&void 0!==i?i:0)-50,0),"%")},children:kt?Object(O.jsx)(u.a,{children:Object(O.jsxs)(h.a,{data:Tt,onClick:function(e){if(e&&("all"===Ae&&"all"===Be&&"all"===it&&"all"===ot||"clientes"!==C))if("clientes"===C)"country"!==se||_e?"age"!==se||ye||(le("country"),Re(null===e||void 0===e?void 0:e.activePayload[0].payload.ageRange.split("-"))):(le("age"),Oe(null===e||void 0===e?void 0:e.activePayload[0].payload.country));else if("puntos"===C)if("country"!==se||_e&&De)if("age"!==se||ye&&De)if("hours"!==se||ye&&_e){if(("dateRange"===se||"dateMonth"===se)&&"puntos"===C){if(null===e||!e.activePayload[0].payload.day)return;mt(e.activePayload[0].payload.day),le("Tiempo")}}else ye?_e||le("age"):le("country"),Me(null===e||void 0===e?void 0:e.activeTooltipIndex);else le(ye?"hours":"country"),Re(null===e||void 0===e?void 0:e.activePayload[0].payload.ageRange.split("-"));else le(_e?"hours":"age"),Oe(null===e||void 0===e?void 0:e.activePayload[0].payload.country)},children:[Object(O.jsx)(b.a,{formatter:function(e,t){return"cartas24"===C?[e,"all"===t?"Todos":t]:"puntos"===C?["puntos"===Ct?Object(p.number_format)(e,2,",",""):e,null===(i=p.bonusTypes.find((function(e){return e.value===t})))||void 0===i?void 0:i.name]:[e,"notContacted"===t?"No contactados":"contacted"===t?"Contactados":"pointed"===t?"Punteados":"total"===t?"Total":"."];var i},contentStyle:{backgroundColor:"#333333"}}),Object(O.jsx)(j.a,{strokeDasharray:"3 3"}),Object(O.jsx)(x.a,{dataKey:"cartas24"===C?"day":"country"===se?"country":"age"===se?"ageRange":"hours"===se?"hour":"day"}),Object(O.jsx)(g.a,{yAxisId:"left-axis",orientation:"left"}),Object(O.jsx)(g.a,{yAxisId:"right-axis",orientation:"right"}),v(C,Ae,Be,se,Tt,Et,We,ft,Ct,Rt)]})},se+(Dt?"c":"nc")):null})]})})}}}]);