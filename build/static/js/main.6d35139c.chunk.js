(this.webpackJsonpoverlay=this.webpackJsonpoverlay||[]).push([[0],{111:function(e,t,n){"use strict";n.r(t);var o,a=n(0),c=n.n(a),s=n(40),i=n.n(s),l=(n(52),n(4)),r=n(41),u=n.p+"static/media/sound1.86bb37b6.mp3",g=(n(53),n(42));o=n.n(g)()();var b={likes50:"https://ynassets.younow.com/gifts/live/10_LIKES/ios_icon_gift_10_LIKES_bar@3x.png?2",corazon:"https://ynassets.younow.com/gifts/live/RED_HEART/ios_icon_gift_RED_HEART_bar@3x.png?2"};function d(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],c=t[1],s=Object(a.useState)(null),i=Object(l.a)(s,2),r=i[0],u=i[1],g=Object(a.useState)(null),d=Object(l.a)(g,2),f=d[0],p=d[1];return Object(a.useEffect)((function(){o.on("connect",(function(){console.log("Successfully connected!"),console.log(o.id)})),o.on("get_message",(function(e){console.log("get_message",e),e.text&&c(String(e.text))})),o.on("get_gifts",(function(e){console.log("get_gifts",e),e.url===b.likes&&console.log("50likes"),u(e)})),o.on("get_audience",(function(e){console.log("get_audience",e),p(e)}))}),[]),{mensaje:n,gift:r,audience:f}}var f=n(47),p=n(44),j=n(1);function m(){var e=d().mensaje,t=Object(p.useNiconico)({displayMillis:1e4,lineWidth:3}),n=Object(l.a)(t,2),o=n[0],a=n[1];return c.a.useEffect((function(){a(null!==e?e:"cargado")}),[a,e]),Object(j.jsx)("div",{style:{minHeight:"100vh"},ref:o})}var h=n(45),v=n.n(h);function O(){var e=Object(a.useState)(!0),t=Object(l.a)(e,2),n=t[0],o=t[1];return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(v.a,{style:{width:"100vw",height:"100vh"},numberOfPieces:n?80:0,recycle:!1,onConfettiComplete:function(e){o(!1),e.reset()}})})}n(92);var _=n(46),x=n.n(_),y=["https://firebasestorage.googleapis.com/v0/b/gente-mala.appspot.com/o/es%20mi%20dia%20de%20suerte.mp4?alt=media&token=a27dbac0-6441-4f47-a659-9dfd7383bc4b",,"https://firebasestorage.googleapis.com/v0/b/gente-mala.appspot.com/o/videoplayback_2.mp4?alt=media&token=62f9a831-d2ad-436a-9532-d06f8c0409fb",,"https://firebasestorage.googleapis.com/v0/b/gente-mala.appspot.com/o/VID_29240629_042008_925.mp4?alt=media&token=29a3dac5-f131-4291-8d22-1e8837d06fac",,"https://firebasestorage.googleapis.com/v0/b/gente-mala.appspot.com/o/VID-20210319-WA0546.mp4?alt=media&token=835ebbe5-d7da-48e6-ae73-3918dd562026"];function S(){var e=d().gift,t=Object(a.useState)(!0),n=Object(l.a)(t,2),o=n[0],c=n[1],s=Object(a.useState)(0),i=Object(l.a)(s,2),r=i[0],u=i[1];Object(a.useEffect)((function(){c(!0)}),[e.url]);return Object(j.jsx)("div",{children:o&&Object(j.jsx)(x.a,{width:"100vw",height:"100vh",onEnded:function(){return u(Math.floor(Math.random()*(1+y.length))),console.log("termino el video"),void c(!1)},url:[y[r]],playing:!0})})}var E=function(){var e=d(),t=(e.mensaje,e.gift,e.audience,Object(r.a)(u));return Object(l.a)(t,1)[0],Object(j.jsx)("div",{className:"App App-header",children:Object(j.jsxs)(f.a,{children:[Object(j.jsx)(m,{path:"/"}),Object(j.jsx)(O,{path:"/text"}),Object(j.jsx)(S,{path:"/dvd"})]})})},k=function(e){e&&e instanceof Function&&n.e(4).then(n.bind(null,113)).then((function(t){var n=t.getCLS,o=t.getFID,a=t.getFCP,c=t.getLCP,s=t.getTTFB;n(e),o(e),a(e),c(e),s(e)}))};i.a.render(Object(j.jsx)(c.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root")),k()},52:function(e,t,n){},53:function(e,t,n){},92:function(e,t,n){}},[[111,1,2]]]);
//# sourceMappingURL=main.6d35139c.chunk.js.map