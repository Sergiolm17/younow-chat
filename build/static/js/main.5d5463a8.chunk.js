(this.webpackJsonpoverlay=this.webpackJsonpoverlay||[]).push([[0],{168:function(e,t,n){},169:function(e,t,n){},206:function(e,t,n){},469:function(e,t,n){"use strict";n.r(t);var c,i=n(0),a=n.n(i),o=n(58),r=n.n(o),l=(n(168),n(169),n(34)),s=n(13),u=n(137);c=n.n(u)()("localhost:3005");var j={likes50:"https://ynassets.younow.com/gifts/live/10_LIKES/ios_icon_gift_10_LIKES_bar@3x.png?2",corazon:"https://ynassets.younow.com/gifts/live/RED_HEART/ios_icon_gift_RED_HEART_bar@3x.png?2"};function b(){var e=Object(i.useState)({nivel:"",text:"",username:""}),t=Object(s.a)(e,2),n=t[0],a=t[1],o=Object(i.useState)({url:""}),r=Object(s.a)(o,2),l=r[0],u=r[1],b=Object(i.useState)(null),d=Object(s.a)(b,2),O=d[0],f=d[1],h=Object(i.useState)({url:""}),g=Object(s.a)(h,2),p=g[0],v=g[1];return Object(i.useEffect)((function(){console.log("init socket"),c.on("connect_error",(function(e){console.log("connect_error due to ".concat(e.message))})),c.on("connect",(function(){console.log("Successfully connected!"),console.log(c.id)})),c.on("get_message",(function(e){e.text&&a(String(e.text))})),c.on("get_gifts",(function(e){e.url===j.likes&&console.log("50likes"),u(e)})),c.on("get_images",(function(e){v(e)})),c.on("get_audience",(function(e){f(e)}))}),[]),{mensaje:n,gift:l,audience:O,images:p}}var d=n(138),O=n(4);function f(){var e=b().mensaje,t=Object(d.useNiconico)({displayMillis:1e4,lineWidth:3}),n=Object(s.a)(t,2),c=n[0],i=n[1];return a.a.useEffect((function(){i(null!==e?e:"cargado")}),[i,e]),Object(O.jsx)("div",{style:{minHeight:"100vh"},ref:c})}var h=n(139),g=n.n(h);function p(){var e=Object(i.useState)(!0),t=Object(s.a)(e,2),n=t[0],c=t[1],a=Object(i.useState)(!0),o=Object(s.a)(a,2),r=o[0],l=o[1],u=b().gift;return Object(i.useEffect)((function(){c(!0)}),[u]),Object(i.useEffect)((function(){return function(){l(!1)}}),[]),Object(O.jsx)(O.Fragment,{children:r&&Object(O.jsx)(g.a,{style:{width:"100vw",height:"100vh"},numberOfPieces:n?80:0,recycle:!1,onConfettiComplete:function(e){c(!1),e.reset()}})})}n(206);var v=n(140),x=n.n(v),m={likes50:"https://ynassets.younow.com/gifts/live/10_LIKES/ios_icon_gift_10_LIKES_bar@3x.png?2"};function E(e){e.videoid;var t=b().gift,n=Object(i.useState)([]),c=Object(s.a)(n,2),a=c[0],o=c[1],r=Object(i.useState)([]),l=Object(s.a)(r,2),u=l[0],j=l[1],d=Object(i.useState)(!0),f=Object(s.a)(d,2),h=f[0],g=f[1],p=Object(i.useState)(w("url")),v=Object(s.a)(p,1)[0],E=Object(i.useState)("https://www.youtube.com/watch?v=MSIxlhIPxIQ"),S=Object(s.a)(E,2),k=S[0],_=S[1];Object(i.useEffect)((function(){o(JSON.parse(v).likesvideos),j(JSON.parse(v).resto)}),[v]),Object(i.useEffect)((function(){if(console.log(t),""===t.url)console.log("no hay");else if(t.url===m.likes){console.log("50likes");var e=a[Math.floor(Math.random()*a.length)];_(e)}else if(t.url!==m.likes){console.log("resto");var n=u[Math.floor(Math.random()*u.length)];_(n)}g(!0)}),[t]),Object(i.useEffect)((function(){console.log(k)}),[k]);return Object(O.jsx)("div",{children:h&&Object(O.jsx)(x.a,{width:"100vw",height:"100vh",onEnded:function(){g(!1)},url:k,playing:!0})})}var S,w=function(e){return new URLSearchParams(Object(l.c)().search).get(e)},k=n(42),_=n(60),y=n(2),I=n(497),T=n(160),C=n(495),R=n(498),A=n(496),L=n(492),M=n(493),N=n(499),P=n(43),F=n.n(P),B=y.default.div(S||(S=Object(_.a)(["\n    min-height: 100vh;\n    min-width: 500px;\n    text-align: center;\n"])));function z(e){var t=Object(i.useState)([]),n=Object(s.a)(t,2),c=n[0],a=n[1],o=Object(i.useState)([]),r=Object(s.a)(o,2),l=r[0],u=r[1],j=Object(i.useState)(""),b=Object(s.a)(j,2),d=b[0],f=b[1],h=Object(i.useState)(""),g=Object(s.a)(h,2),p=g[0],v=g[1],x=Object(i.useState)(""),m=Object(s.a)(x,2),E=m[0],S=m[1];return Object(i.useEffect)((function(){v(encodeURIComponent(JSON.stringify({likesvideos:c,resto:l})))}),[c,l]),Object(O.jsxs)(B,{children:[Object(O.jsx)(I.a,{margin:"none",children:"Inserta tu video"}),Object(O.jsx)(T.a,{direction:"row",pad:"small",children:Object(O.jsx)(C.a,{placeholder:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",value:d,onChange:function(e){var t=e.target.value;f(t)}})}),Object(O.jsx)(R.a,{color:"red",children:E}),Object(O.jsxs)(T.a,{direction:"row",pad:"medium",gap:"small",justify:"center",children:[Object(O.jsx)(A.a,{onClick:function(e){F.a.canPlay(d)?(u((function(e){return[].concat(Object(k.a)(e),[d])})),f(""),S("")):S("El video no se puede reproducir")},label:"1 BARRA"}),Object(O.jsx)(A.a,{onClick:function(){F.a.canPlay(d)?(a((function(e){return[].concat(Object(k.a)(e),[d])})),f(""),S("")):S("El video no se puede reproducir")},label:"3 BARRAS"})]}),Object(O.jsxs)(T.a,{direction:"row",pad:"medium",gap:"medium",children:[Object(O.jsxs)(T.a,{height:"fill",width:"medium",gap:"small",children:[Object(O.jsx)(R.a,{children:"Para una barra"}),l.map((function(e,t){return Object(O.jsxs)(L.a,{animation:"fadeIn",height:"fill",width:"medium",background:"light-2",children:[Object(O.jsx)(M.a,{pad:"medium",children:Object(O.jsx)(F.a,{width:"100%",height:"100%",controls:!0,url:e})}),Object(O.jsxs)(N.a,{pad:{horizontal:"small"},background:"light-3",children:[Object(O.jsx)(A.a,{hoverIndicator:!0,disabled:!0,label:"3 BARRS"}),Object(O.jsx)(A.a,{hoverIndicator:!0,label:"ELIMINAR",onClick:function(){return t=e,void u(l.filter((function(e){return e!==t})));var t}})]})]},t)}))]}),Object(O.jsxs)(T.a,{height:"fill",width:"medium",gap:"small",children:[Object(O.jsx)(R.a,{children:"Para tres barras"}),c.map((function(e,t){return Object(O.jsxs)(L.a,{animation:"fadeIn",height:"fill",width:"medium",background:"light-1",children:[Object(O.jsx)(M.a,{pad:"medium",children:Object(O.jsx)(F.a,{width:"100%",height:"100%",controls:!0,url:e})}),Object(O.jsxs)(N.a,{pad:{horizontal:"small"},background:"light-2",children:[Object(O.jsx)(A.a,{hoverIndicator:!0,disabled:!0,label:"1 BARRA"}),Object(O.jsx)(A.a,{hoverIndicator:!0,label:"ELIMINAR",onClick:function(){return t=e,void a(c.filter((function(e){return e!==t})));var t}})]})]},t)}))]})]}),c.length+l.length>0&&Object(O.jsx)(A.a,{primary:!0,onClick:function(){navigator.clipboard.writeText(e.location.origin+"/video/?url="+p)},label:"Click para copiar"})]})}var H,J=n(158),K=n(159),D=Object(y.default)(T.a)(H||(H=Object(_.a)(["\n    min-height: 100vh;\n    min-width: 500px;\n    text-align: center;\n"])));function Q(e){var t=e.link,n=void 0===t?"":t,c=e.label,i=void 0===c?"":c,a=e.origin,o=Object(K.a)(e,["link","label","origin"]);return Object(O.jsx)(l.a,{to:n,children:Object(O.jsx)(A.a,Object(J.a)({label:i,onClick:function(){navigator.clipboard.writeText(a+"/"+n)}},o))})}function U(e){return Object(O.jsx)(D,{children:Object(O.jsxs)(T.a,{pad:"xlarge",align:"center",gap:"medium",children:[Object(O.jsx)(I.a,{margin:"none",children:"Hola \ud83d\udc4b\ud83c\udffc"}),Object(O.jsx)(Q,{link:"text",label:"TEXTO FLOTANTE (CLICK TO COPY)",origin:e.location.origin}),Object(O.jsx)(Q,{link:"confetti",label:"CONFETTI"}),Object(O.jsx)(Q,{link:"addvideos",label:"ALERTAS VIDEO"}),Object(O.jsx)(Q,{link:"particleimage",label:"EMOTES FLOTANTE"}),Object(O.jsx)(Q,{link:"particlegift",label:"REGALOS FLOTANTE"})]})})}var W=n(156),X=n.n(W);n(157);function G(e){var t=b(),n=t.gift,c=t.images,a=Object(i.useState)([]),o=Object(s.a)(a,2),r=o[0],l=o[1];return Object(i.useEffect)((function(){console.log(n)}),[n]),Object(i.useEffect)((function(){if("particleimage"===e.path){var t=r;c.url&&t.push(c.url),t.length>10&&t.pop();var n=t.filter((function(e,t,n){return n.indexOf(e)===t}));l(n)}}),[c]),Object(i.useEffect)((function(){if("particlegift"===e.path){var t=r;c.url&&t.push(n.url),t.length>10&&t.pop();var i=t.filter((function(e,t,n){return n.indexOf(e)===t}));l(i)}}),[n]),Object(i.useEffect)((function(){}),[r]),n.url?Object(O.jsx)("div",{children:Object(O.jsx)(X.a,{params:{particles:{number:{value:2,density:{enable:!0,value_area:300}},line_linked:{enable:!1},move:{speed:1},shape:{type:["image"],image:Object(k.a)(r.map((function(e){return{src:e,height:23,width:23}})))},size:{value:30,random:!1,anim:{enable:!0,speed:4,size_min:10,sync:!1}}},retina_detect:!1},style:{minHeight:"100vh"}})}):Object(O.jsx)("div",{})}var V=function(){return Object(O.jsxs)("div",{children:[" ",Object(O.jsxs)(l.b,{children:[Object(O.jsx)(U,{path:"/"}),Object(O.jsx)(f,{path:"text"}),Object(O.jsx)(p,{path:"confetti"}),Object(O.jsx)(E,{path:"video"}),Object(O.jsx)(z,{path:"addvideos"}),Object(O.jsx)(G,{path:"particleimage"}),Object(O.jsx)(G,{path:"particlegift"})]})]})},Y=function(e){e&&e instanceof Function&&n.e(16).then(n.bind(null,500)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,o=t.getTTFB;n(e),c(e),i(e),a(e),o(e)}))};r.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(V,{})}),document.getElementById("root")),Y()}},[[469,14,15]]]);
//# sourceMappingURL=main.5d5463a8.chunk.js.map