(this["webpackJsonpps5-checker-react"]=this["webpackJsonpps5-checker-react"]||[]).push([[0],{81:function(e,t,n){},82:function(e,t,n){},97:function(e,t,n){"use strict";n.r(t);var a=n(3),i=n(0),c=n.n(i),o=n(10),r=n.n(o),s=n(42),l=(n(81),n(22)),d=n(11),j=(n(82),n(60)),u=n.n(j),b=function(e){var t=e.isPlaying;return Object(a.jsx)(u.a,{playing:t,volume:1,style:{display:"none"},url:"https://www.youtube.com/watch?v=rN4Y7mGlH8c"})},h=n(147),O=n(150),p=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},"& .MuiButton-outlined":{color:"#f94144",borderColor:"#f94144"},"& .MuiButton-outlined:hover":{backgroundColor:"#f94144",color:"black",transition:"0.6s"}}}}));function f(e){var t=e.value,n=p();return Object(a.jsx)("div",{className:n.root,children:Object(a.jsx)(O.a,{variant:"outlined",children:t})})}var x=Object(h.a)((function(e){return{root:{"& > *":{margin:e.spacing(1)},"& .MuiButton-outlined":{color:"#90be6d",borderColor:"#90be6d"},"& .MuiButton-outlined:hover":{backgroundColor:"#90be6d",color:"black",transition:"0.6s"}}}}));function g(e){e.link;var t=x();return Object(a.jsx)("div",{className:t.root,children:Object(a.jsx)(O.a,{variant:"outlined",children:"DOST\u0118PNY"})})}var v=function(e){var t=e.data,n=Object(i.useState)(!1),c=Object(l.a)(n,2),o=c[0],r=c[1],s=t.map((function(e,t){return Object(a.jsxs)("div",{className:"shop",children:[e.shop," :",Object(a.jsxs)("div",{className:"availability",style:{display:"flex",padding:"0"},children:[Object(a.jsx)("a",{title:"Standard",href:e.link,target:"_blank",rel:"noopener noreferrer",children:"DOST\u0118PNY"===e.availability?Object(a.jsx)(g,{}):Object(a.jsx)(f,{value:e.availability})}),e.availabilityDE&&Object(a.jsx)("a",{title:"Digital Edition",href:e.linkDE,target:"_blank",rel:"noopener noreferrer",children:"DOST\u0118PNY"===e.availabilityDE?Object(a.jsx)(g,{}):Object(a.jsx)(f,{value:e.availabilityDE})})]})]},t)}));return t.forEach((function(e){"DOST\u0118PNY"===e.availability?document.title="Dost\u0119pny w ".concat(e.shop,"!"):document.title="Playstation 5"})),t.filter((function(e){if("DOST\u0118PNY"===e.availability||"DOST\u0118PNY"===e.availabilityDE)return e})).length>0?o||r(!0):o&&r(!1),Object(a.jsxs)(a.Fragment,{children:[s," ",Object(a.jsx)(b,{isPlaying:o})]})},m=n(159),y=n(160),k=Object(h.a)((function(e){return{root:{"& .MuiInputBase-input":{color:"white"}}}}));function w(e){var t=e.login,n=e.setLogin,i=e.password,c=e.setPassword,o=e.handleLogin,r=k();return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("form",{className:r.root,noValidate:!0,autoComplete:"off",children:Object(a.jsxs)("div",{style:{display:"flex",flexDirection:"column",height:"200px"},children:[Object(a.jsx)(y.a,{style:{margin:"15px",background:"#212121",borderRadius:"5px"},id:"outlined-required",label:"Login",variant:"outlined",onChange:function(e){n(e.target.value)},value:t}),Object(a.jsx)(y.a,{style:{margin:"15px",background:"#212121",borderRadius:"5px"},id:"outlined-password-input",label:"Password",type:"password",autoComplete:"current-password",variant:"outlined",onChange:function(e){c(e.target.value)},value:i}),Object(a.jsx)("button",{style:{display:"none"},onClick:o,type:"submit"})]})}),Object(a.jsx)(O.a,{onClick:o,variant:"contained",style:{width:"fit-content",alignSelf:"center"},children:"Log in"})]})}var N=n(61),S=n.n(N),C=function(e){var t=e.setIsValidate,n=Object(i.useState)(""),c=Object(l.a)(n,2),o=c[0],r=c[1],s=Object(i.useState)(""),j=Object(l.a)(s,2),u=j[0],b=j[1],h=Object(i.useState)(!1),O=Object(l.a)(h,2),p=O[0],f=O[1];return Object(a.jsxs)("div",{className:"login",children:[Object(a.jsx)(w,{login:o,setLogin:r,password:u,setPassword:b,handleLogin:function(e){e.preventDefault(),fetch("".concat("http://localhost:3001","/login/").concat(o,"/").concat(u),{method:"POST"}).then((function(e){return e.json()})).then((function(e){!0===e.success?(t(e.key),S.a.set("adminCode",e.key),f(!0)):b("")}))}}),p&&Object(a.jsx)(d.a,{to:"/"})]})},D=n(63),P=n(162),E=n(158),z=n(156),T=n(157),M=n(155),Y=n(153),B=n(154),L=n(62),I=n.n(L),F=c.a.forwardRef((function(e,t){return Object(a.jsx)(Y.a,Object(D.a)({direction:"up",ref:t},e))}));function J(){var e=c.a.useState(!1),t=Object(l.a)(e,2),n=t[0],i=t[1],o=function(){i(!1)};return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(B.a,{color:"primary",onClick:function(){i(!0)},style:{color:"white",position:"fixed",top:"2%",left:"95%",transform:"translate(-50%,0%)"},children:Object(a.jsx)(I.a,{})}),Object(a.jsx)(P.a,{}),Object(a.jsxs)(P.a,{open:n,TransitionComponent:F,keepMounted:!0,onClose:o,"aria-labelledby":"alert-dialog-slide-title","aria-describedby":"alert-dialog-slide-description",children:[Object(a.jsx)(M.a,{style:{background:"#303030",color:"white"},id:"alert-dialog-slide-title",children:"Jak to dzia\u0142a?"}),Object(a.jsx)(z.a,{style:{background:"#303030",color:"white"},children:Object(a.jsx)(T.a,{style:{background:"#303030",color:"white"},id:"alert-dialog-slide-description",children:"Co 25 sekund serwer sprawdza czy Playstation 5 jest dost\u0119pne w sklepie. Nast\u0119pnie ty dostajesz t\u0105 informacje bez konieczno\u015bci od\u015bwie\u017cania strony. Je\u017celi produkt bedzie dost\u0119pny to bedzie alarm."})}),Object(a.jsx)(E.a,{style:{background:"#303030"},children:Object(a.jsx)(O.a,{onClick:o,color:"primary",children:"OK"})})]})]})}var R=function(){var e=Object(i.useState)(),t=Object(l.a)(e,2),n=t[0],c=t[1],o=Object(i.useState)(1),r=Object(l.a)(o,2),s=r[0],j=r[1];return Object(i.useEffect)((function(){fetch("".concat("https://shielded-inlet-52440.herokuapp.com","/dostepnosc")).then((function(e){return e.json()})).then((function(e){c(e)}))}),[s]),Object(i.useEffect)((function(){setInterval((function(){j((function(e){return e+1}))}),25e3)}),[]),Object(a.jsx)(a.Fragment,{children:n?Object(a.jsxs)(d.d,{children:[Object(a.jsx)(d.b,{path:"/",exact:!0,children:Object(a.jsxs)("div",{className:"app",children:[Object(a.jsxs)("div",{className:"playstation5",children:[Object(a.jsx)("div",{className:"image",children:Object(a.jsx)("img",{src:"https://gmedia.playstation.com/is/image/SIEPDC/playstation-5-with-dualsense-front-product-shot-01-ps5-en-30jul20?$native--t$",alt:"Playstation 5"})}),Object(a.jsx)("div",{className:"shops",children:Object(a.jsx)(v,{data:n})})]}),Object(a.jsx)(J,{}),n[n.length-1]&&Object(a.jsxs)("div",{className:"update",children:["Ostatnia aktualizacja: ",n[n.length-1].lastUpdate]})]})}),Object(a.jsx)(d.b,{path:"/admin",component:C})]}):Object(a.jsx)("div",{className:"progress",style:{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)"},children:Object(a.jsx)(m.a,{})})})};r.a.render(Object(a.jsx)(c.a.StrictMode,{children:Object(a.jsx)(s.a,{children:Object(a.jsx)(R,{})})}),document.getElementById("root"))}},[[97,13,14]]]);
//# sourceMappingURL=main.51f113fb.chunk.js.map