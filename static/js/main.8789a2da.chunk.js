(this.webpackJsonptasks_ignat=this.webpackJsonptasks_ignat||[]).push([[0],{10:function(e,t,a){e.exports={link:"Header_link__XNPUn",active:"Header_active__2X3KB",block:"Header_block__1nPjJ",header:"Header_header__sJ5TN"}},13:function(e,t,a){e.exports={greeting:"Greeting_greeting__3BHho",error:"Greeting_error__wEzXN",input:"Greeting_input__3KYEH",errorInput:"Greeting_errorInput__2EYo9",button:"Greeting_button__2dsnt",count:"Greeting_count__2F0UC"}},18:function(e,t,a){e.exports={input:"SuperInputText_input__-o2Ey",superInput:"SuperInputText_superInput__1603s",errorInput:"SuperInputText_errorInput__3dQJc",error:"SuperInputText_error__3sUpB"}},20:function(e,t,a){e.exports={blue:"HW4_blue__3usxR",column:"HW4_column__1AVxm",testSpanError:"HW4_testSpanError__nOJq9"}},21:function(e,t,a){e.exports={default:"SuperButton_default__2ETcU",red:"SuperButton_red__2ROR6",button:"SuperButton_button__7YuDh",blink:"SuperButton_blink__uAD8l"}},22:function(e,t,a){e.exports={label:"SuperCheckbox_label__Ub4Is",checkbox:"SuperCheckbox_checkbox__3bXpk",spanClassName:"SuperCheckbox_spanClassName__2H8Vt"}},29:function(e,t,a){e.exports={App:"App_App__kezfP"}},36:function(e,t,a){},4:function(e,t,a){e.exports={button:"Affairs_button__3t4fu",item:"Affairs_item__1f3-1",affair:"Affairs_affair__3vxWR",active:"Affairs_active__1Ehea",all:"Affairs_all__81Ls4",high:"Affairs_high__o0bD3",middle:"Affairs_middle__3bhcH",low:"Affairs_low__1FaJq"}},43:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(28),s=a.n(c),i=(a(36),a(29)),o=a.n(i),l=a(11),j=a(10),u=a.n(j),b=a(2),d=a(0);var h=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("div",{children:"404"}),Object(d.jsx)("div",{children:"Page not found!"}),Object(d.jsx)("div",{children:"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"})]})},_=a(9),x=a.n(_);var O=function(e){return Object(d.jsx)("div",{className:x.a.message,children:Object(d.jsxs)("div",{className:x.a.container,children:[Object(d.jsx)("img",{className:x.a.img,src:e.avatar,alt:"avatar"}),Object(d.jsxs)("div",{className:x.a.messageData,children:[Object(d.jsxs)("div",{className:x.a.titleData,children:[Object(d.jsx)("span",{className:x.a.span,children:e.name}),Object(d.jsx)("p",{className:x.a.p,children:e.message})]}),Object(d.jsx)("span",{className:x.a.span,children:e.time})]})]})})};var m=function(e){return Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{className:x.a.input,value:e.text}),Object(d.jsx)("button",{children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442"})]})},f={avatar:a.p+"static/media/team_6.6339401a.jpg",name:"Aleksey",message:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",time:"22:00"};var p=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{}),"homeworks 1",Object(d.jsx)("hr",{}),Object(d.jsx)("div",{children:Object(d.jsx)(O,{avatar:f.avatar,name:f.name,message:f.message,time:f.time})}),Object(d.jsx)(m,{btn:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c",text:"What to buy"}),Object(d.jsx)("hr",{})]})},v=a(8),g=a(4),k=a.n(g);var N=function(e){var t=k.a.item+" "+k.a[e.affair.priority];return Object(d.jsxs)("div",{className:k.a.affair,children:[Object(d.jsx)("div",{className:k.a.item,children:e.affair.name}),Object(d.jsxs)("div",{className:t,children:["[",e.affair.priority,"]"]}),Object(d.jsx)("button",{onClick:function(){e.deleteAffairCallback(e.affair._id)},className:k.a.item+" "+k.a.button,children:"X"})]})};var C=function(e){var t=e.data.map((function(t){return Object(d.jsx)(N,{affair:t,deleteAffairCallback:e.deleteAffairCallback},t._id)})),a=k.a.button+" "+("all"===e.filter?k.a.active:""),n=k.a.button+" "+("high"===e.filter?k.a.active:""),r=k.a.button+" "+("middle"===e.filter?k.a.active:""),c=k.a.button+" "+("low"===e.filter?k.a.active:"");return Object(d.jsxs)("div",{children:[t,Object(d.jsx)("button",{onClick:function(){e.setFilter("all")},className:a,children:"All"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("high")},className:n,children:"High"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("middle")},className:r,children:"Middle"}),Object(d.jsx)("button",{onClick:function(){e.setFilter("low")},className:c,children:"Low"})]})},w=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(w),t=Object(v.a)(e,2),a=t[0],r=t[1],c=Object(n.useState)("all"),s=Object(v.a)(c,2),i=s[0],o=s[1],l=function(e,t){return"all"===t?e:e.filter((function(e){return e.priority===t}))}(a,i);return Object(d.jsxs)("div",{children:[Object(d.jsx)("hr",{}),"homeworks 2",Object(d.jsx)("hr",{}),Object(d.jsx)(C,{data:l,setFilter:o,deleteAffairCallback:function(e){return r(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))},filter:i}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},S=a(31),A=a(45),E=a(13),I=a.n(E),H=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,r=e.error,c=e.totalUsers,s=e.onEnter,i=r?I.a.errorInput:I.a.input;return Object(d.jsxs)("div",{className:I.a.greeting,children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("input",{value:t,onChange:a,className:i,onKeyUp:s,onBlur:a}),Object(d.jsx)("div",{className:I.a.error,children:r})]}),Object(d.jsx)("button",{onClick:n,className:I.a.button,disabled:!t,children:"add"}),Object(d.jsx)("div",{className:I.a.count,children:c})]})},T=function(e){var t=e.users,a=e.addUserCallback,r=Object(n.useState)(""),c=Object(v.a)(r,2),s=c[0],i=c[1],o=Object(n.useState)(""),l=Object(v.a)(o,2),j=l[0],u=l[1],b=function(){a(s),alert("Hello ".concat(s," !")),i("")},h=t.length;return Object(d.jsx)(H,{name:s,setNameCallback:function(e){var t=e.currentTarget.value.trim();t?(i(t),j&&u("")):s&&i(""),u("name is require!")},onEnter:function(e){"Enter"===e.key&&s&&b()},addUser:b,error:j,totalUsers:h})};var U=function(){var e=Object(n.useState)([]),t=Object(v.a)(e,2),a=t[0],r=t[1];return Object(d.jsxs)("div",{children:["homeworks 3 should work",Object(d.jsx)("hr",{}),Object(d.jsx)(T,{users:a,addUserCallback:function(e){var t={_id:Object(A.a)(),name:e};r([t].concat(Object(S.a)(a)))}}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})},B=a(14),D=a(15),J=a(18),M=a.n(J),F=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=e.onKeyPress,r=e.onEnter,c=e.error,s=e.className,i=e.spanClassName,o=Object(D.a)(e,["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"]),l="".concat(M.a.error," ").concat(i||""),j="".concat(M.a.input," ").concat(c?M.a.errorInput:M.a.superInput," ").concat(s);return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("input",Object(B.a)({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},onKeyPress:function(e){n&&n(e),r&&"Enter"===e.key&&r()},className:j},o)),c&&Object(d.jsx)("span",{className:l,children:c})]})},G=a(20),P=a.n(G),W=a(21),K=a.n(W),Y=function(e){var t=e.red,a=(e.className,Object(D.a)(e,["red","className"])),n="".concat(K.a.button," ").concat(t?K.a.red:K.a.default);return Object(d.jsx)("button",Object(B.a)({className:n},a))},R=a(22),X=a.n(R),q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,r=(e.spanClassName,e.children),c=Object(D.a)(e,["type","onChange","onChangeChecked","className","spanClassName","children"]),s="".concat(X.a.checkbox," ").concat(n||"");return Object(d.jsxs)("label",{className:X.a.label,children:[Object(d.jsx)("input",Object(B.a)({type:"checkbox",onChange:function(e){t&&t(e),a&&a(e.currentTarget.checked)},className:s},c)),r&&Object(d.jsx)("span",{className:X.a.spanClassName,children:r})]})};var V=function(){var e=Object(n.useState)(""),t=Object(v.a)(e,2),a=t[0],r=t[1],c=a?"":"error",s=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},i=Object(n.useState)(!1),o=Object(v.a)(i,2),l=o[0],j=o[1];return Object(d.jsxs)("div",{children:["homeworks 4",Object(d.jsx)("hr",{}),Object(d.jsxs)("div",{className:P.a.column,children:[Object(d.jsx)(F,{value:a,onChangeText:r,onEnter:s,error:c}),Object(d.jsx)(F,{className:c?P.a.blue:P.a.testSpanError}),Object(d.jsx)(Y,{children:"default"}),Object(d.jsx)(Y,{red:!0,onClick:s,children:"delete "}),Object(d.jsx)(Y,{disabled:!0,children:"disabled"}),Object(d.jsx)(q,{checked:l,onChangeChecked:j,children:"some text "}),Object(d.jsx)(q,{checked:l,onChange:function(e){return j(e.currentTarget.checked)}})]}),Object(d.jsx)("hr",{}),Object(d.jsx)("hr",{})]})};var z=function(){return Object(d.jsxs)("div",{children:[Object(d.jsx)(p,{}),Object(d.jsx)(y,{}),Object(d.jsx)(U,{}),Object(d.jsx)(V,{})]})};var L=function(){return Object(d.jsx)("div",{children:"Junior"})};var Q=function(){return Object(d.jsx)("div",{children:"JuniorPlus"})},Z="/pre-junior",$="/junior",ee="/junior+";var te=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(b.d,{children:[Object(d.jsx)(b.b,{path:"/",exact:!0,render:function(){return Object(d.jsx)(b.a,{to:Z})}}),Object(d.jsx)(b.b,{path:Z,render:function(){return Object(d.jsx)(z,{})}}),Object(d.jsx)(b.b,{path:$,render:function(){return Object(d.jsx)(L,{})}}),Object(d.jsx)(b.b,{path:ee,render:function(){return Object(d.jsx)(Q,{})}}),Object(d.jsx)(b.b,{render:function(){return Object(d.jsx)(h,{})}})]})})};var ae=function(){return Object(d.jsxs)("div",{className:u.a.header,children:[Object(d.jsx)(l.b,{to:Z,className:u.a.link,activeClassName:u.a.active,children:"pre-junior"}),Object(d.jsx)(l.b,{to:$,className:u.a.link,activeClassName:u.a.active,children:"junior"}),Object(d.jsx)(l.b,{to:ee,className:u.a.link,activeClassName:u.a.active,children:"junior+"}),Object(d.jsx)("div",{className:u.a.block})]})};var ne=function(){return Object(d.jsx)("div",{children:Object(d.jsxs)(l.a,{children:[Object(d.jsx)(ae,{}),Object(d.jsx)(te,{})]})})};var re=function(){return Object(d.jsxs)("div",{className:o.a.App,children:[Object(d.jsx)("div",{children:"react homeworks:"}),Object(d.jsx)(ne,{})]})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(Object(d.jsx)(r.a.StrictMode,{children:Object(d.jsx)(re,{})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},9:function(e,t,a){e.exports={message:"Message_message__2Ww-s",container:"Message_container__f0VuS",messageData:"Message_messageData__2Cfca",span:"Message_span__2ZqkJ",titleData:"Message_titleData__2YpwG",p:"Message_p__1Cu4p",img:"Message_img__29rYD",input:"Message_input__2rsYG"}}},[[43,1,2]]]);
//# sourceMappingURL=main.8789a2da.chunk.js.map