(this.webpackJsonpivan=this.webpackJsonpivan||[]).push([[18],{114:function(e,t,i){"use strict";var n=i(9),a=i(101),r=i(0),o=i(2),d=Object(r.lazy)((function(){return Promise.all([i.e(0),i.e(11)]).then(i.bind(null,164))}));t.a=function(e){var t=e.id,i=e.nombre,s=e.foto,c=e.puntos1,l=e.puntos2,p=e.summary1,m=e.summary2,u=e.supervisorId,f=e.usarMultasOAvisos,h=e.noModal,g=e.tipoEntidad,b=e.amolatinaId,j=e.metaDia,x=e.metaMes,w=e.latestFeedTimestamp,O=e.fineCount,v=e.fineAlertCount,y=e.online,S=e.mingle,C=e.introductory,I=e.operador,_=e.operadorDePausa,A=e.operadoresAsignadosIds,M=e.missingMingleTimestamp,k=e.offlineTimestamp,T=e.unrepliedLettersTimestamps,F=e.token,N=e.perfiles,D=e.perfilesPausados,R=e.pausado,z=e.typeWidth,P=Object(r.useState)(!1),L=Object(n.a)(P,2),E=L[0],G=L[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{onClick:function(){return G(!0)},children:Object(o.jsx)(a.a,{id:t,nombre:i,foto:s,puntos1:c,puntos2:l,summary1:p,summary2:m,tipoEntidad:g,meta1:j,meta2:x,latestFeedTimestamp:w,usarMultasOAvisos:f,fineCount1:null===O||void 0===O?void 0:O.dia,fineAlertCount1:null===v||void 0===v?void 0:v.dia,fineCount2:null===O||void 0===O?void 0:O.mes,fineAlertCount2:null===v||void 0===v?void 0:v.mes,online:y,mingle:S,introductory:C,operador:I,operadorDePausa:_,operadoresAsignadosIds:A,missingMingleTimestamp:M,offlineTimestamp:k,unrepliedLettersTimestamps:T,token:F,perfiles:N,perfilesPausados:D,pausado:R,typeWidth:z})}),E&&!h?Object(o.jsx)(r.Suspense,{fallback:Object(o.jsx)("div",{children:"Loading..."}),children:Object(o.jsx)(d,{id:t,nombre:i,foto:s,setShowModal:G,supervisorId:u,tipoEntidad:g,amolatinaId:b,typeWidth:z})}):null]})}},424:function(e,t,i){"use strict";i.r(t);var n=i(4),a=i(1),r=i.n(a),o=i(8),d=i(9),s=i(5),c=i(80),l=i(6),p=i(10),m=i(114),u=i(0),f=i.n(u),h=i(106),g=i(138),b=i(12),j=i.n(b),x=i(41),w=i(87),O=i(2),v=function(){var e=Object(o.a)(r.a.mark((function e(t){var i,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.t0=l.renombrarPropiedadesAnidadas,e.next=3,Object(l.customFetch)("/profiles/info?id=".concat(t,"&expand=operator,pause_operator,dia_summary,mes_summary"));case 3:if(e.t2=i=e.sent,e.t1=null===e.t2,e.t1){e.next=7;break}e.t1=void 0===i;case 7:if(!e.t1){e.next=11;break}e.t3=void 0,e.next=12;break;case 11:e.t3=i.data;case 12:e.t4=e.t3,n=(0,e.t0)(e.t4),p.b.setQueryData(["perfiles"],(function(e){if(e){var i=e.findIndex((function(e){return e.id===t}));return e[i]=n,e}}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),y=Object(s.d)("div").withConfig({displayName:"ImageChangeModal___StyledDiv",componentId:"sc-2hbv8x-0"})({padding:"0.5rem"}),S=Object(s.d)("div").withConfig({displayName:"ImageChangeModal___StyledDiv2",componentId:"sc-2hbv8x-1"})({display:"flex",justifyContent:"center","@media (min-width: 768px)":{padding:"0.5rem"}}),C=Object(s.d)("div").withConfig({displayName:"ImageChangeModal___StyledDiv3",componentId:"sc-2hbv8x-2"})({position:"relative","--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))"}),I=Object(s.d)("img").withConfig({displayName:"ImageChangeModal___StyledImg",componentId:"sc-2hbv8x-3"})(["",""],(function(e){return e._css})),_=Object(s.d)("div").withConfig({displayName:"ImageChangeModal___StyledDiv4",componentId:"sc-2hbv8x-4"})(["",""],(function(e){return e._css2})),A=Object(s.d)("input").withConfig({displayName:"ImageChangeModal___StyledInput",componentId:"sc-2hbv8x-5"})(["",""],(function(e){return e._css3})),M=Object(s.d)("div").withConfig({displayName:"ImageChangeModal___StyledDiv5",componentId:"sc-2hbv8x-6"})({display:"flex",justifyContent:"center","@media (min-width: 768px)":{paddingBottom:"0.25rem",gap:"0.5rem"}}),k=Object(s.d)("button").withConfig({displayName:"ImageChangeModal___StyledButton",componentId:"sc-2hbv8x-7"})(["",""],(function(e){return e._css4})),T=function(e){var t=e.perfilId,i=e.setShowChangeImageModal,n=Object(u.useState)(0),a=Object(d.a)(n,2),s=a[0],c=a[1],m=Object(p.d)(["perfiles"],l.fetchPerfiles).data,f=null===m||void 0===m?void 0:m.find((function(e){return e.id===t})),h=Object(u.useState)(f.foto),g=Object(d.a)(h,2),b=g[0],j=g[1],x=Object(u.useRef)(null),T=Object(u.useRef)(null);return 1===s&&function(e,t,i){if(null!==t.current){var n=new Image;n.src=e,0===n.height?(t.current.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANgAAADpCAMAAABx2AnXAAAAh1BMVEXb29s1NTX///8kJCTMzMw3Nzfe3t7h4eEAAAA6OjosLCzZ2dkvLy8yMjLk5OQ8PDzDw8PS0tKnp6dnZ2e9vb1gYGAnJyezs7PPz8/FxcUfHx+ZmZlaWlp5eXmtra329vZSUlKMjIyAgICFhYVDQ0OdnZ0WFhYMDAxubm7v7+9MTEwSEhKRkZHs/sH1AAALYElEQVR4nO2dC3eiPBCGMZCE+/1+FQRF5f//vi+xu7W7tf0shE30+J5dT1sVeZxkmEkmQZJeeumll1566aWXXnrppZdeeumll1566bmFeJ/ASkIpek40lO08+xnRDLyL29BAf4j3STEQYUgj1QraOnSpMiJF8QxDemxARUEYu+U5z02nf9PptC2jYNwVtetJGD8onOdXtYe9VoMbU/+omPx3tuOQSTbmfZJzhOxsNKNu2urwhjb6Od8WGX4wNNKHjKweOkc+qDrc3BJ0nFg9BLXxQN0NoTRpg36vnjdQc25zvbFp533kew9iNYzCttT2uQ417Uum39JgrkfJI7gRhN0RxrpFu9FdglZs7sQ3GvZ28sVZ3Ed1IYMw34aCk6GkP2g/gPrdIOO8ENqHYD+OnR9jUTLr0HnikhEu8//9xU2R5hhkojZHHGrWz5vhO1pcuoKSedEX1+I7yeSTImRrRIW8hGuzcfYlb4abSrfxMrCNo/o2b4rPwn6+kGsD80jAtoiD/UyP+IHMFM/n40xdajDay1zhxkjs3WHWpflPi1n95IpFht2lnuONTFfhJBIZDstF17ArmWMeCnGu07ju2XBRNBgLE4HY/n5BLPWJTA94A/0SDlWGXNSFJEJ0M5Sya4dvYHrHm+kiVMmLr8x/gW1FiIZRyLQdUjBrI0RbrJhcwf4g27f8wZDbm6zBtHzkjUXABuYGIynn1uPNRVri4mzlM5jpZNzborddmDfflMx9nBG5FmunSAQPNW8wnOxXMJjGf4zA9lW2V+dfYMOzgnG3GE7YO0V6hU549zEUmis4D0vn7xUVh21oTyXEdSw9rRB5xKeUN5fklStEHnLJP6Qygpy5W4R5YPDmorEiczAtr3hTEe+xW6Ep5h133yGhaQ0wERLNgX10D+VBADDfZM212ei+AGAJfM7BHBQ6rMc8SOARCgCWnVjHVFDv+UdUkqRs2YMJMWC6sAjiJljEP6KiMRXrKBjqIkRUK4wEw3gUAQzt2DdFIWZb0KSz5SJgQkxDo4F5Cq0LEFERsJp9U6yFAGM/P2YKEFHRQe4ZtbLfg2kCRFQSstOeNVif8i88Qt4w9Wy5Npt+GrgXi9mjemCekJkHdeQ8xI28/Ls1HjMFHWfP2WQ4W2NOgtaaci7pxq66vJjvJhjnwfv1wDgXimFlnaaoqQpfMOTFK8wibeAm5+7ve/aTLZdRD85YTGq3P0vbR5wn/gwmNc6fwQ47m3MS/bST66sUsEDL5B/fe+UKkxKxGEViTzrxt3Rx1Q3BvODeEp94UsJjtEbiA5hepvzBJKl71gFTnz2YABOatOiI+WCOAAVHVGhkvVBCgBpuKlyzDReds8+79O1NKN2wtZglhE8kwh1Lk2nnSgyDXYaqGIJxH+74ILtlV8oN9y3vjOWDjK53WGQv0HL6ToDA/l3IUCYWQb6WT4ohiOf4JTs8M+hnzjkUqB1ehDwWV2ktFsXTX4WD5XWLMA+EcYjvsovlPt9RC9Fa4mXN8GLvofGeirglZCxeNAx1RzCXSGXY1XmhyUgwxXuY9JZwvTT8gGfuy+FuSlm4GATqgu5yJHXLHD4UYTTxllBtWkvALFOIoY7PQsp2yQgjNIUomL0l1C5x+FAXYHnEbSF3SeoCBZhh+VLjfL9I910RFgwn8wc/nAP39aZfC0mzt38jFzFxDUbCqmRuiO+otYjh1FUz5zdhvOV95t8L+zPBckFGf7+UF8whg7IQiz6+E11O9nMwayNE3fa38qKfx1XQFN5gtDxiDljJf6X6/wils8CEjX/fNSvEfwiw7DQH7CTG5Ow3QtmM/beg2Qu2wednzdpYDJqO+GBzCnXEKMX5XijU5oAJsUznW81byG5BIRZWfSdUb54zpEK1NWcMzhJ05O2qmZtFiDqkeBUaZq2xFWO56XdCQzyDC8YClJR+LzTNSzSFHSx9E8LurE0woH4Kxb2NEMJIGWZOJcH4NChISDZkG0nV63NH76Gu91Vi8F9N+7eQUZwO8o/uifQXGYTyoS+Em4TGk7pZugoVOht1EmwUDnnb+cb6aLYt9wVxfwolbJbuiLIj/LtQx2bhH4yFKLm/KmV1Swm9VHizfBRKNqyaogibiF01L5C6SZYLsa3Mu0ZWexHCXIgdjn5r+Y2s3sFE2Jf1XSw3CxZgi+CrsH9gtpxRgAW1V9kTu6USzkGguvvlpYpX0aJF3jzvwgFLMHEKnpFdslsyrOWlGEkZQpLbsdwOCJpdKHG/vyvCJG+GZ5YLyODmDEkuzXOYwKBYAZTn3sb1K2mWDKOaoPGJQQzJlupSpnd+ZstF801Ll0vfsCUOaMRaw4neT32FDVguIyCm2g//vkEipBQEi/1eWx/YHF3tC+Wf1sRh5Lanfbwm1htavD+1IfpX1zWMwq6PdfZd6wYa1OW+o2jrdzYbh6O5hsf4Cs3SzTHEa4dZxFqRmi8YF52DpslqFEorNkiEvDpQ92t3rRtsTq5GvrdSOIJQOkRyrq2yJdr/SdNyORrSFdAwVopSjzdcsC5oMNbLScFsWyS209bRzXUuxvcKbszYaRWbHRpC2e58/qce4ws0CM+HXcaoQSIjrGRVW2UbxZ/L0VS5CpdPNiHsJaN1tgTBonKsvTkm3qIoEtmeT9ISi/UOx8sEaVoT+N7sRBvZkr/VzX8WZNwvEo6Y+taXZqGRRjj0qmDGuoqYTXWG9McNkjjCtidpCe/z/06OqTrtz1wklsK2P6yeliwVSWsO/e7+KJIEulUv66I2wo+CGklrquSujI2mJfG/S0uWiqY18R1pDTbq6BA/grGuglqs0kGtr6lIWuKXai561/osmtaUX6Y1dHymzDmlJUtF0pp9WSg30BBW2lMsw4fEotKgHJ/aT2mNne5gzDktWSq4sWK4Sz+6ESQV+v6xPMZtQW2vT9fQH6URiZ14nxQbkUgr+r2yCbnlA3rCr0Q85PZtoQzKyvhJzPUmLS4vi7YM5rfZ4i0YVwatJ1/jTtV8BfMBS8YKe2nz1uXuxKvcWpy3YJ5ILbuiGnGkHXZS9GyugwrGpfSE9qKC0hPa6yIJ5vITKrekVHlKpRJ4Ur3AHk0vMKAYH34GAB//fkHzx7Ea/77DNn6bksdkIq8/+lMIQNhO6eWJjPxlaH1gT23RgGM9+UfgtpNy13HvB6uz688R+dX7+wV28ccJj/cdtlHaBIBkOPo1KEK7yEBoex05LWXrg2aqjx44omO9A7V/TAoQYqn79Mm3dBeYO44tSLoq8kBng8xX+mo3BmNTj2MC3KBN7HEcm91pxGEU1A2ogyAkYHVH3+wFwdAoUeA3QC5Kf4jaN1s39q+j+wlohgzYwZEc3J3oU8Rk9pQQW43Hy4ubZAcS/1jTVtAULiuwZggb8qUWAHVgZwPFB1tisRSklWScQNbS58gL7AkcS9B0GFFjNVFyaYzHiJzasWxAqwDHbgIFDBfTN1Vev4MBt/CG4Oj7XteSI7mEvbXdGihlsSPtwGsDg3z4rqK9QdnZX53oT8GA4Q8hSFxwrK5gvgLqKgyTJqtp5xhqgCfgVQAURkjbZLPp8OUDKnoA8lC74ARAdQR1eAGudP8K1ihJOILGTXzy3myHQboNCYcRHEFJOeyAfh9e15CPQPec8n1gpOduf4NhQDrDG5jSkfMDbnJ5QWDjXxZDbxYLsukIbGI5arHoYrETefY3GMDpL/dDfydmGgb62IbEJPQdqVfs7GNFwcifpRJMLgEj/z45rflgjR+MBf384wjScap84Ed+Ogbk70EFQmKxMBi75lhFv/qYT/tYAMLxONogpX0si8gD0IhLOV4sdNWxc/oAeGO5a8hhyoF8OX0QUf9Am3IYRQPIoigyiKmC0WtGLYjucouv69ij6QX2aHpasP8AbBUR+UAClhYAAAAASUVORK5CYII=",i(2)):(t.current.src=e,i(2))}}(b,T,c),Object(O.jsx)(w.a,{setShowModal:i,children:Object(O.jsxs)(y,{children:[Object(O.jsx)(S,{children:Object(O.jsx)(C,{children:Object(O.jsx)(I,{ref:T,alt:"Foto",src:b,onLoad:0===s?c(1):null,_css:[{width:"60px",height:"60px",objectFit:"cover","@media (min-width: 768px)":{width:"200px",height:"200px",borderRadius:"0.375rem"},"@media (min-width: 1024px)":{width:"250px",height:"250px",borderRadius:"0.5rem"},"@media (min-width: 1280px)":{width:"300px",height:"300px",borderRadius:"0.75rem"},"@media (min-width: 1536px)":{width:"350px",height:"350px",borderRadius:"1rem"}},"@media (min-width: 2560px) {width: 11rem !important; height: 11rem !important;}"]})})}),Object(O.jsx)(_,{_css2:[{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",justifyContent:"center",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{paddingBottom:"0.25rem",gap:"0.5rem"}},"@media (min-width: 2560px) { padding-bottom: 1rem !important; padding-right: 2rem !important; padding-left: 2rem !important; grid-gap: 1rem !important; }"],children:Object(O.jsx)(A,{ref:x,defaultValue:f.foto,onChange:function(){return j(x.current.value)},autoComplete:!1,_css3:[{"--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))",paddingLeft:"0.5rem",paddingRight:"0.5rem","@media (min-width: 768px)":{borderRadius:"0.375rem",width:"20rem",fontSize:"0.7rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",width:"25rem",fontSize:"0.8rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",width:"30rem",fontSize:"0.9rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",width:"35rem",fontSize:"1rem"}},"@media (min-width: 2560px) { padding-right: 0.5rem !important; padding-left: 0.5rem !important; }"]})}),Object(O.jsx)(M,{children:Object(O.jsx)(k,{onClick:Object(o.a)(r.a.mark((function e(){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.customFetch)("/profiles/change-image",{headers:{"Content-Type":"application/json"},body:JSON.stringify({profileId:t,photo:b}),method:"POST"});case 2:v(t),i(!1);case 4:case"end":return e.stop()}}),e)}))),_css4:[{"--tw-bg-opacity":"1",backgroundColor:"rgba(37, 99, 235, var(--tw-bg-opacity))","--tw-text-opacity":"1",color:"rgba(243, 244, 246, var(--tw-text-opacity))","@media (min-width: 768px)":{borderRadius:"0.375rem",fontSize:"0.7rem",padding:"0.25rem"},"@media (min-width: 1024px)":{borderRadius:"0.5rem",fontSize:"0.8rem"},"@media (min-width: 1280px)":{borderRadius:"0.75rem",fontSize:"0.9rem",padding:"0.5rem"},"@media (min-width: 1536px)":{borderRadius:"1rem",fontSize:"1rem"}},"@media (min-width: 2560px) { line-height: 1rem !important; font-size: 0.75rem !important; padding: 0.5rem !important; }"],children:"Cambiar Imagen"})})]})})},F=function(){var e=Object(o.a)(r.a.mark((function e(t,i){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(l.customFetch)("/profiles/list-present?profileId=".concat(i));case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),N=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv",componentId:"qwga6w-0"})(["",""],(function(e){return e._css})),D=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv2",componentId:"qwga6w-1"})({display:"flex",justifyContent:"space-between"}),R=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv3",componentId:"qwga6w-2"})({width:"400px",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),z=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv4",componentId:"qwga6w-3"})({paddingLeft:"0.75rem",marginBottom:"0.25rem"}),P=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv5",componentId:"qwga6w-4"})({fontWeight:"700",textAlign:"left",fontSize:"1rem",marginBottom:"0.25rem"}),L=Object(s.d)("input").withConfig({displayName:"PresentesModal___StyledInput",componentId:"qwga6w-5"})({width:"90%",borderRadius:"1rem",paddingLeft:"0.25rem",paddingRight:"0.25rem","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))"}),E=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv6",componentId:"qwga6w-6"})(["",""],(function(e){return e._css2})),G=Object(s.d)("button").withConfig({displayName:"PresentesModal___StyledButton",componentId:"qwga6w-7"})(["",""],(function(e){return e._css3})),W=Object(s.d)("img").withConfig({displayName:"PresentesModal___StyledImg",componentId:"qwga6w-8"})(["",""],(function(e){return e._css4})),Q=Object(s.d)("span").withConfig({displayName:"PresentesModal___StyledSpan",componentId:"qwga6w-9"})(["",""],(function(e){return e._css5})),B=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv7",componentId:"qwga6w-10"})({width:"400px",paddingLeft:"0.5rem",paddingRight:"0.5rem"}),J=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv8",componentId:"qwga6w-11"})({paddingLeft:"0.75rem",marginBottom:"0.25rem"}),Y=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv9",componentId:"qwga6w-12"})({fontWeight:"700",textAlign:"left",fontSize:"1rem",marginBottom:"0.25rem"}),q=Object(s.d)("input").withConfig({displayName:"PresentesModal___StyledInput2",componentId:"qwga6w-13"})({width:"90%",borderRadius:"1rem",paddingLeft:"0.25rem",paddingRight:"0.25rem","--tw-text-opacity":"1",color:"rgba(0, 0, 0, var(--tw-text-opacity))"}),H=Object(s.d)("div").withConfig({displayName:"PresentesModal___StyledDiv10",componentId:"qwga6w-14"})(["",""],(function(e){return e._css6})),X=Object(s.d)("button").withConfig({displayName:"PresentesModal___StyledButton2",componentId:"qwga6w-15"})(["",""],(function(e){return e._css7})),U=Object(s.d)("img").withConfig({displayName:"PresentesModal___StyledImg2",componentId:"qwga6w-16"})(["",""],(function(e){return e._css8})),Z=Object(s.d)("span").withConfig({displayName:"PresentesModal___StyledSpan2",componentId:"qwga6w-17"})(["",""],(function(e){return e._css9})),K=function(e){var t,i,n,a,s=e.perfilId,m=e.setShowPresentesModal,u=Object(p.d)(["operadores"],l.fetchOperadores),h=u.data,g=u.status,b=Object(p.d)(["profileops",s],F),j=b.data,v=b.status,y=f.a.useState(""),S=Object(d.a)(y,2),C=S[0],I=S[1],_=f.a.useState(""),A=Object(d.a)(_,2),M=A[0],k=A[1],T=f.a.useState(!1),K=Object(d.a)(T,2),V=K[0],$=K[1],ee=function(){var e=Object(o.a)(r.a.mark((function e(t,i,n){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return $(!0),e.prev=1,e.next=4,Object(l.customFetch)("/profiles/save-present",{headers:{"Content-Type":"application/x-www-form-urlencoded"},body:"operator=".concat(t,"&profile=").concat(i,"&option=").concat(n),method:"POST"});case 4:e.next=9;break;case 6:e.prev=6,e.t0=e.catch(1),console.log(e.t0);case 9:p.b.invalidateQueries(["profileops"]),$(!1);case 11:case"end":return e.stop()}}),e,null,[[1,6]])})));return function(t,i,n){return e.apply(this,arguments)}}();return Object(O.jsx)(w.a,{setShowModal:m,children:Object(O.jsx)(O.Fragment,{children:Object(O.jsxs)(N,{_css:[{"--tw-text-opacity":"1",color:"rgba(255, 255, 255, var(--tw-text-opacity))",display:"flex",width:"800px",flexShrink:"1",height:"500px","@media (min-width: 768px)":{padding:"0.5rem",gap:"0.375rem"},"@media (min-width: 1024px)":{padding:"1rem",gap:"0.75rem"}},"@media (min-width: 2560px) { padding: 1rem !important; grid-gap: 0.75rem !important; }"],children:[V||"loading"===g||"loading"===v?Object(O.jsx)(x.a,{}):null,Object(O.jsxs)(D,{children:[Object(O.jsxs)(R,{children:[Object(O.jsxs)(z,{children:[Object(O.jsx)(P,{children:"Seleccionar Operadores"}),Object(O.jsx)(L,{type:"text",placeholder:"Buscar",value:C,onChange:function(e){return I(e.target.value)}})]}),Object(O.jsx)(E,{_css2:[{display:"flex",flexWrap:"wrap",height:"90%",overflowX:"hidden"},c.b],children:null===h||void 0===h||null===(t=h.filter((function(e){var t,i;return null===e||void 0===e||null===(t=e.nombre)||void 0===t||null===(i=t.toLowerCase())||void 0===i?void 0:i.includes(null===C||void 0===C?void 0:C.toLowerCase())}),[C]))||void 0===t||null===(i=t.filter((function(e){var t;return!(null===j||void 0===j||null===(t=j.users_present_id)||void 0===t?void 0:t.includes(null===e||void 0===e?void 0:e.id))}),[j]))||void 0===i?void 0:i.map((function(e){return Object(O.jsxs)(G,{onClick:function(){return ee(null===e||void 0===e?void 0:e.id,s,"go")},_css3:[{display:"flex",flexDirection:"column",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))"},padding:"0.125rem",borderRadius:"0.25rem",gap:"0.25rem",height:"6rem",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},textAlign:"center",alignItems:"center"},"@media (min-width: 2560px) { padding: 1rem !important; }"],children:[Object(O.jsx)(W,{src:e.foto,alt:"Foto de cliente",_css4:[{borderRadius:"9999px",width:"4rem",height:"4rem"},"@media (min-width: 2560px) { width: 7rem !important; height: 7rem !important; }"]}),Object(O.jsx)(Q,{_css5:[{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"80px",textAlign:"center"},"@media (min-width: 2560px) { width: 120px !important; }"],children:e.nombre})]},e.id)}))})]}),Object(O.jsxs)(B,{children:[Object(O.jsxs)(J,{children:[Object(O.jsx)(Y,{children:"Operadores"})," ",Object(O.jsx)(q,{type:"text",placeholder:"Buscar",value:M,onChange:function(e){return k(e.target.value)}})]}),Object(O.jsx)(H,{_css6:[{display:"flex",flexWrap:"wrap",height:"90%",overflowX:"hidden"},c.b],children:null===h||void 0===h||null===(n=h.filter((function(e){var t,i;return null===e||void 0===e||null===(t=e.nombre)||void 0===t||null===(i=t.toLowerCase())||void 0===i?void 0:i.includes(null===M||void 0===M?void 0:M.toLowerCase())}),[M]))||void 0===n||null===(a=n.filter((function(e){var t;return null===j||void 0===j||null===(t=j.users_present_id)||void 0===t?void 0:t.includes(null===e||void 0===e?void 0:e.id)}),[j]))||void 0===a?void 0:a.map((function(e){return Object(O.jsxs)(X,{onClick:function(){return ee(null===e||void 0===e?void 0:e.id,s,"return")},_css7:[{display:"flex",flexDirection:"column",":hover":{"--tw-bg-opacity":"1",backgroundColor:"rgba(23, 23, 28, var(--tw-bg-opacity))"},padding:"0.125rem",height:"6rem",borderRadius:"0.25rem",gap:"0.25rem",":focus":{outline:"2px solid transparent",outlineOffset:"2px"},textAlign:"center",alignItems:"center"},"@media (min-width: 2560px) { padding: 1rem !important; }"],children:[Object(O.jsx)(U,{src:e.foto,alt:"Foto de cliente",_css8:[{borderRadius:"9999px",width:"4rem",height:"4rem"},"@media (min-width: 2560px) { width: 7rem !important; height: 7rem !important; }"]}),Object(O.jsx)(Z,{_css9:[{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap",width:"80px",textAlign:"center"},"@media (min-width: 2560px) { width: 120px !important; }"],children:e.nombre})]},e.id)}))})]})]})]})})})},V=Object(u.lazy)((function(){return i.e(22).then(i.bind(null,416))})),$=Object(u.lazy)((function(){return Promise.all([i.e(2),i.e(9)]).then(i.bind(null,421))})),ee=Object(u.lazy)((function(){return Promise.all([i.e(2),i.e(7),i.e(10)]).then(i.bind(null,418))})),te=s.d.div.withConfig({displayName:"Perfiles__PerfilesDiv",componentId:"m36yex-0"})(["@media (min-width:2560px){padding-top:20px !important;padding-right:10px !important;padding-left:16px !important;grid-gap:32px !important;}"," ",""],{marginTop:"12px",paddingBottom:"20px",gridTemplateColumns:"repeat(4, minmax(0, 1fr))",display:"grid",alignItems:"flex-start",overflowX:"hidden","@media (min-width: 768px)":{paddingTop:"5px",paddingRight:"2px",paddingLeft:"2px",gap:"6px"},"@media (min-width: 1024px)":{gap:"10px",paddingTop:"10px",paddingRight:"5px"},"@media (min-width: 1280px)":{gap:"12px",paddingTop:"12px",paddingRight:"6px",paddingLeft:"4px"}},c.b),ie=Object(s.d)(g.a).withConfig({displayName:"Perfiles___StyledContextMenu",componentId:"m36yex-1"})(["@media (min-width:2560px){font-size:1rem !important;}"]),ne=Object(s.d)(ie).withConfig({displayName:"Perfiles___Styled_StyledContextMenu",componentId:"m36yex-2"})({"@media (min-width: 768px)":{fontSize:"0.3rem"},"@media (min-width: 1024px)":{fontSize:"0.5rem"},"@media (min-width: 1280px)":{fontSize:"0.7rem"}});t.default=function(e){var t,i,a,s=e.orden,c=e.multasOAvisos,f=e.typeWidth,b=e.perfilSort,w=e.pauseperfilView,v=e.setTypeFichaTecnica,y=e.setProfileIdFichaTecnica,S=e.setIdFichaTecnica,C=e.setShowFichaTecnica,I=Object(p.d)(["perfiles"],l.fetchPerfiles).data,_=Object(p.d)(["operadores"],l.fetchOperadores).data,A=null===_||void 0===_||null===(t=_.find((function(e){return e.id===+j.a.get("id")})))||void 0===t?void 0:t.pausado,M=Object(u.useContext)(h.b),k=Object(u.useState)(!1),F=Object(d.a)(k,2),N=F[0],D=F[1],R=Object(u.useState)(!1),z=Object(d.a)(R,2),P=z[0],L=z[1],E=Object(u.useState)(!1),G=Object(d.a)(E,2),W=G[0],Q=G[1],B=Object(u.useState)(!1),J=Object(d.a)(B,2),Y=J[0],q=J[1],H=Object(u.useState)(!1),X=Object(d.a)(H,2),U=X[0],Z=X[1],ie=Object(u.useState)(0),ae=Object(d.a)(ie,2),re=ae[0],oe=ae[1],de=j.a.get("role"),se=+j.a.get("id"),ce=Object(u.useState)(!1),le=Object(d.a)(ce,2),pe=le[0],me=le[1],ue=function(){var e=Object(o.a)(r.a.mark((function e(t,i){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),(n=t.currentTarget).disabled=!0,e.next=5,Object(l.customFetch)("/profiles/select",{headers:{"Content-Type":"application/json"},body:JSON.stringify({list_id:[i]}),method:"POST"});case 5:a=e.sent,Object(l.errorPerfilesToast)(a,"toma"),setTimeout((function(){p.b.invalidateQueries("perfiles"),me(!1),n.disabled=!1}),2e3);case 8:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}(),fe=function(){var e=Object(o.a)(r.a.mark((function e(t,i){var n,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return me(!0),(n=t.currentTarget).disabled=!0,e.next=5,Object(l.customFetch)("/profiles/release",{headers:{"Content-Type":"application/json"},body:JSON.stringify({list_id:[i]}),method:"POST"});case 5:a=e.sent,Object(l.errorPerfilesToast)(a,"liberacion"),setTimeout((function(){p.b.invalidateQueries("perfiles"),me(!1),n.disabled=!1}),2e3);case 8:case"end":return e.stop()}}),e)})));return function(t,i){return e.apply(this,arguments)}}();return Object(O.jsxs)(te,{children:[null===I||void 0===I||null===(i=I.filter((function(e){return e.activo})).sort((function(e,t){var i=function(e){var t;return(null===(t=e.operador)||void 0===t?void 0:t.id)===se?2e6:0},n=function(e){return e.libre?1e6:0};return"dia"===s?t.progresoDia+i(t)+n(t)-(e.progresoDia+i(e)+n(e)):t.progresoMes+i(t)+n(t)-(e.progresoMes+i(e)+n(e))})))||void 0===i||null===(a=i.filter((function(e){return"offline"===b?!1===e.online:"online"===b?!0===e.online:e.nombre}),[b]))||void 0===a?void 0:a.filter((function(e){return"pause"===w?!0===e.pausado:"notpause"===w?!1===e.pausado:e.nombre}),[w]).map((function(e){for(var t,i,a,d=0,s=0;s<((null===M||void 0===M?void 0:M.length)||-1);s++)if(e.id===+M[s].perfilId&&"feeds"===M[s].tablename){var h=new Date(M[s].timestamp);d=Date.UTC(h.getFullYear(),h.getMonth(),h.getDate(),h.getHours(),h.getMinutes(),h.getSeconds(),h.getMilliseconds());break}return Object(O.jsxs)(u.Fragment,{children:[Object(O.jsx)(g.b,{id:""+e.id,children:pe?Object(O.jsx)(x.a,{}):Object(O.jsx)(m.a,Object(n.a)(Object(n.a)({typeWidth:f},Object(n.a)(Object(n.a)({},e),{},{summary1:e.diaSummary,summary2:e.mesSummary,puntos1:e.progresoDia,puntos2:e.progresoMes,latestFeedTimestamp:d,usarMultasOAvisos:c})),{},{tipoEntidad:"perfil"}),e.id)}),+j.a.get("id")!==l.ghostAdminId?Object(O.jsxs)(ne,{id:""+e.id,children:["admin"===de?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.c,{onClick:function(){q(!0),oe(e.id)},children:"Cambiar Imagen"}),Object(O.jsx)(g.c,{onClick:function(){C(!0),v("profile"),y(-1),S(e.id)},children:"Ficha Tecnica"}),Object(O.jsx)(g.c,{onClick:function(){Z(!0),oe(e.id)},children:"Configurar Presentes"}),Object(O.jsx)(g.c,{onClick:Object(o.a)(r.a.mark((function t(){return r.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(l.customFetch)("/goals/set-auto-goal",{headers:{"Content-Type":"application/json"},method:"POST",body:JSON.stringify({profileId:e.id,autoGoal:!e.autoGoal})});case 2:p.b.invalidateQueries(["perfiles"]);case 3:case"end":return t.stop()}}),t)}))),children:e.autoGoal?"Apagar meta automatica":"Encender meta automatica"})]}):null,"admin"!==de&&e.libre&&!A?Object(O.jsx)(g.c,{onClick:function(t){return ue(t,e.id)},children:"Tomar"}):null,"admin"===de||(null===(t=e.operador)||void 0===t?void 0:t.id)!==se||A?null:Object(O.jsx)(g.c,{onClick:function(t){return fe(t,e.id)},children:"Liberar"}),(null===(i=e.operador)||void 0===i?void 0:i.id)===se?Object(O.jsx)(g.c,{onClick:function(){C(!0),v("profile"),y(-1),S(e.id)},children:"Ficha Tecnica"}):null,"admin"===de||"supervisor"===de?Object(O.jsx)(g.c,{onClick:function(){Q(!0),oe(e.id)},children:"Configurar Token"}):null,"admin"===de||"supervisor"===de||(null===(a=e.operador)||void 0===a?void 0:a.id)===se?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.c,{onClick:function(){D(!0),oe(e.id)},children:"Configurar Bot 24"}),Object(O.jsx)(g.c,{onClick:function(){L(!0),oe(e.id)},children:"Configurar Super Bot"}),Object(O.jsx)(g.c,{onClick:function(){return navigator.clipboard.writeText(e.amolatinaId)},children:"Copiar ID"})]}):null]}):null]},e.id)})),W?Object(O.jsx)(u.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(V,{perfilId:re,setShowTokenModal:Q})}):null,Y?Object(O.jsx)(u.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(T,{perfilId:re,setShowChangeImageModal:q})}):null,U?Object(O.jsx)(u.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(K,{perfilId:re,setShowPresentesModal:Z})}):null,N?Object(O.jsx)(u.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)($,{perfilId:re,setShowCartas24BotModal:D})}):null,P?Object(O.jsx)(u.Suspense,{fallback:Object(O.jsx)("div",{children:"Loading..."}),children:Object(O.jsx)(ee,{perfilId:re,setShowSuperCartasBotModal:L,typeWidth:f})}):null]})}}}]);