(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a.p+"static/media/tekna-logo.04ca97dd.jpg"},201:function(e,t,a){e.exports=a(353)},206:function(e,t,a){},213:function(e,t,a){},214:function(e,t,a){},215:function(e,t,a){},216:function(e,t,a){},334:function(e,t,a){},342:function(e,t,a){},343:function(e,t,a){},353:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(25),c=a.n(l),o=a(186),i=a(41),s=(a(206),a(18)),u=a(8),m=a(87),d=a(28),f=a(23),E={WELCOME_NO:"Velkommen!",WELCOME_EN:"Welcome!",WELCOME_SUBTITLE_NO:"For \xe5 kunne gi deg relevant informasjon, trenger vi \xe5 vite hvilken gruppe du tilh\xf8rer. Du kan g\xe5 tilbake og endre dette senere!",WELCOME_SUBTITLE_EN:"To provide you with relevant information, we need to know which group you belong to. You can go back and change this later!",GROUP_PLACEHOLDER_NO:"Velg gruppe...",GROUP_PLACEHOLDER_EN:"Select group...",WELCOME_SCREEN_BUTTON_LABEL_NO:"Jeg er klar",WELCOME_SCREEN_BUTTON_LABEL_EN:"I'm ready",ERROR_TITLE_NO_NO:"Du m\xe5 fylle inn norsk tittel",ERROR_TITLE_EN_NO:"Du m\xe5 fylle inn engelsk tittel",ERROR_DAY_NO:"Du m\xe5 velge en dag",ERROR_START_TIME_NO:"Velg starttidspunkt (hh:mm)",ERROR_DESC_NO_NO:"Du m\xe5 fylle inn norsk beskrivelse",ERROR_DESC_EN_NO:"Du m\xe5 fylle inn engelsk beskrivelse",ERROR_GROUPS_NO:"Du m\xe5 velge gruppe(r) arrangementet gjelder for",ERROR_LINK_NO:"Du kan ikke ha lenketekst uten lenke"},g=function(e,t){var a="".concat(e,"_").concat(t);return a in E?E[a]:e},p=function(e,t){return t&&t.lang?g(e,t.lang):g(e,"NO")},b=a(188),v=function(e){var t=e.group,a=e.setGroup,l=e.setCookie,c=e.groupNames,o=Object(n.useContext)(B),i=Object(u.a)(o,1)[0],m=Object(n.useState)(t),E=Object(u.a)(m,2),g=E[0],v=E[1],N=i.lang?i.lang:"NO",O=c?c.map(function(e){var t=e.id,a=e.label_nor,n=e.label_eng;return{value:t,label:"NO"===N?a:n,label_nor:a,label_eng:n}}).sort(function(e,t){return parseInt(e.value)-parseInt(t.value)}):[],h={container:function(e){return Object(s.a)({},e,{width:"100%",marginBottom:20})},option:function(e){return Object(s.a)({},e,{fontSize:"0.8rem"})},menu:function(e){return Object(s.a)({},e,{marginTop:0})}},k=g&&{label:"NO"===N?g.label_nor:g.label_eng},y=p("WELCOME",i),_=p("WELCOME_SUBTITLE",i),j=p("GROUP_PLACEHOLDER",i),C=p("WELCOME_SCREEN_BUTTON_LABEL",i);return r.a.createElement("div",{className:"welcome-screen"},r.a.createElement("div",null,r.a.createElement("h1",{className:"welcome-screen-main-title"}," ",y," "),r.a.createElement("h3",{className:"welcome-screen-sub-title"}," ",_," ")),r.a.createElement("img",{className:"person-img",src:"https://image.flaticon.com/icons/svg/145/145867.svg",alt:"person"}),r.a.createElement("div",{className:"dropdown-wrapper"},r.a.createElement(b.a,{inputProps:{readOnly:!0},placeholder:j,styles:h,value:k,onChange:function(e){return v(e)},options:O,isSearchable:!1,isDisabled:0===O.length}),r.a.createElement("div",{className:"ready-button",onClick:function(){g&&(a(g),l("group",g,{path:"/"}))}},r.a.createElement("p",{className:"ready-button-text"}," ",C," ",r.a.createElement(d.a,{icon:f.faChevronRight})," "))))},N=function(e){var t=e.target,a=t.id,n=t.NO,l=t.EN,c=e.lang,o=e.callback,i=e.selected?"navbar-selected":"",s="NO"===c?n:l;return r.a.createElement("div",{className:"navbar-button",onClick:function(){return o(a)}},r.a.createElement("div",{className:"".concat(i," navbar-button-icon")}),r.a.createElement("label",null," ",s.substring(0,3)," "))},O=a(117),h=function(e){var t=e.icon,a=e.label,n=e.link,l=t in O?O[t]:f[t];return r.a.createElement("div",{className:"icon-label-wrapper"},r.a.createElement(d.a,{className:"event-icon",icon:l}),!n&&r.a.createElement("label",{className:"event-icon-label"}," ",a," "),n&&r.a.createElement("a",{className:"icon-link event-icon-label",href:n}," ",a," "))},k=[{id:0,NO:"mandag",EN:"monday"},{id:1,NO:"tirsdag",EN:"tuesday"},{id:2,NO:"onsdag",EN:"wednesday"},{id:3,NO:"torsdag",EN:"thursday"},{id:4,NO:"fredag",EN:"friday"},{id:5,NO:"l\xf8rdag",EN:"saturday"},{id:6,NO:"s\xf8ndag",EN:"sunday"}],y=function(e){switch(e){case"mandag":return"monday";case"tirsdag":return"tuesday";case"onsdag":return"wednesday";case"torsdag":return"thursday";case"fredag":return"friday";case"l\xf8rdag":return"saturday";case"s\xf8ndag":return"sunday";default:return e}},_=function(e,t){return e.start_time||t.start_time?e.start_time?t.start_time?e.start_time===t.start_time?e.end_time&&!t.end_time?-1:!e.end_time&&t.end_time?1:e.end_time||t.end_time?e.end_time>t.end_time?1:e.end_time<t.end_time?-1:0:0:e.start_time>t.start_time?1:-1:1:-1:0},j=function(e,t){return e===t?0:"all"===e?-1:"all"===t?1:parseInt(e)-parseInt(t)},C=function(e,t,a){var n=a||"NO",r="".concat(t,"_").concat(n);return e[r]?"from"===t?"".concat("NO"===n?"Fra":"From"," ").concat(e[r]):e[r]:""},w=function(e){var t=e.start_time,a=e.end_time;return t?a?"".concat(t," \u2013 ").concat(a):t:""},S=function(e,t){var a=e.groups,n=t||"NO";return a.indexOf("all")>=0?"NO"===n?"Alle grupper":"All groups":"".concat("NO"===n?"Gruppe ":"Group "," ").concat(a.join(", "))},x=(a(213),function(e){var t=e.event,a=e.event.google_maps,n=e.lang,l=a&&a.startsWith("https");return r.a.createElement("div",{className:"sub-event"},r.a.createElement("div",{className:"sub-event-time-and-title"},r.a.createElement("p",{className:"sub-event-time"}," ",w(t)," "),r.a.createElement("p",{className:"sub-event-title"}," ",C(t,"title",n)," ")),l&&r.a.createElement("a",{className:"sub-event-address",href:a}," ","NO"===n?"(kart)":"(map)"," "))}),R=function(e){var t=e.data,a=t,l=Object(n.useState)(!0),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useContext)(B),m=Object(u.a)(s,1)[0].lang,E=C(a,"title",m),g=C(a,"desc",m),p=C(a,"from",m),b=w(a),v=S(a,m),N=t.address,O=t.google_maps,k=t.link,y=C(a,"linkText",m),j=o?f.faChevronUp:f.faChevronDown;return r.a.createElement("div",{className:"event-wrapper"},r.a.createElement("div",{className:"event"},r.a.createElement("label",{className:"event-title"}," ",E," "),b&&r.a.createElement(h,{icon:"faClock",label:b}),o&&N&&r.a.createElement(h,{icon:"faMap",label:N,link:O||null}),o&&t.groups&&r.a.createElement(h,{icon:"faUser",label:v}),o&&p&&r.a.createElement(h,{icon:"faComment",label:p}),o&&k&&y&&r.a.createElement(h,{icon:"faLink",label:y,link:k}),o&&g&&r.a.createElement("p",{className:"event-description"}," ",g," "),o&&a.subEvents&&a.subEvents.length>0&&r.a.createElement("div",{className:"sub-event-wrapper"},a.subEvents.sort(_).map(function(e){return r.a.createElement(x,{key:"".concat(e.parent_event_id,"-").concat(e.title_NO),event:e,lang:m})})),r.a.createElement("div",{className:"event-chevron",onClick:function(){return i(!o)}},r.a.createElement(d.a,{icon:j}))))},T=a(47),L=a.n(T),G=a(118),F=a.n(G),A=(a(214),function(e){return e+-10+25*Math.random()}),D=r.a.createElement("div",{className:"skeleton-wrapper"},r.a.createElement(L.a,{key:"skel-1",height:24,width:A(170)}),r.a.createElement("div",{className:"icon-label-skeletons"},r.a.createElement(L.a,{key:"skel-2",height:13,width:A(110)}),r.a.createElement(L.a,{key:"skel-3",height:13,width:A(210)}),r.a.createElement(L.a,{key:"skel-4",height:13,width:A(100)}),r.a.createElement(L.a,{key:"skel-5",height:13,width:A(155)})),",",r.a.createElement(L.a,{key:"skel-6",height:13,width:A(275),count:3})),M=function(e){var t=e.group,a=e.events,l=Object(n.useState)(function(){var e=(new Date).getDay()-1;return-1===e?6:e}()),c=Object(u.a)(l,2),o=c[0],i=c[1],s=Object(n.useContext)(B),m=Object(u.a)(s,1)[0],d=Object(n.useRef)(),f=a?a.filter(function(e){return function(e){for(var t=0,a=k;t<a.length;t++){var n=a[t],r=n.id,l=n.NO,c=n.EN;if(e===l||e===c)return r}return console.error("Error: Could not translate day ".concat(e," to index")),-1}(e.day_NO)===o}).filter(function(e){return function(e,t){return!(!t||!t.value)&&(!e.groups||e.groups.indexOf("all")>=0||e.groups.indexOf(t.value)>=0)}(e,t)}).sort(_).map(function(e){return r.a.createElement(R,{key:e.id,data:e})}):r.a.createElement(r.a.Fragment,null," ",D," ",D," "),E=k.map(function(e){return r.a.createElement(N,{key:e.NO,lang:m.lang,target:e,callback:function(e){i(e),d.current.scrollTop=0},selected:o===e.id})});return r.a.createElement("div",{className:"mainscreen-wrapper"},r.a.createElement("div",{className:"mainscreen-header"},r.a.createElement("div",{className:"tekna-container"}," ",4===o&&r.a.createElement("img",{className:"header-tekna-logo",src:F.a,alt:"Tekna logo"})," "),r.a.createElement("label",null," ","NO"===m.lang?t.label_nor:t.label_eng," ")),r.a.createElement("div",{className:"mainscreen-event-container",ref:d},f,4===o&&r.a.createElement("img",{className:"event-list-tekna-logo",src:F.a,alt:"Tekna logo"})),r.a.createElement("div",{className:"mainscreen-navbar-container"},E))},I=function(e){var t=e.state.lang,a=e.changeLanguage,n=e.position,l="NO"===t?"selected-lang":"",c="EN"===t?"selected-lang":"";return r.a.createElement("div",{className:"".concat("relative"!==n?"language-pos-absolute":""," language-select"),onClick:a},r.a.createElement("p",{className:l}," NO ")," ",r.a.createElement("p",null,"|")," ",r.a.createElement("p",{className:c}," EN "))},B=(a(215),r.a.createContext());var U=function(e){var t=e.firestore,a=Object(m.b)(["group","language"]),l=Object(u.a)(a,3),c=l[0],o=l[1],i=l[2],E=Object(n.useState)(c.group),g=Object(u.a)(E,2),p=g[0],b=g[1],N=Object(n.useState)(void 0),O=Object(u.a)(N,2),h=O[0],k=O[1],y=Object(n.useState)(void 0),_=Object(u.a)(y,2),j=_[0],C=_[1],w=Object(n.useState)({lang:c.language?c.language:"NO"}),S=Object(u.a)(w,2),x=S[0],R=S[1];return Object(n.useEffect)(function(){t.fetchEvents(k),t.fetchGroupNames(C)},[t,k,C]),r.a.createElement(B.Provider,{value:[x,R]},r.a.createElement("div",{className:"app"},r.a.createElement("a",{href:"tel:40466599",className:"sticky-side-button"},r.a.createElement(d.a,{className:"phone-icon",icon:f.faPhone}),r.a.createElement("div",{className:"phonenumber-container"},r.a.createElement("span",null," Vakttelefon "),r.a.createElement("span",{className:"phone-number"}," 404 66 599 "))),r.a.createElement(I,{state:x,changeLanguage:function(){var e="NO"===x.lang?"EN":"NO";o("language",e),R(Object(s.a)({},x,{lang:e}))}}),!p&&r.a.createElement(v,{groupNames:j,setGroup:b,setCookie:o}),p&&r.a.createElement(M,{events:h,group:p,setGroup:b,removeCookie:i})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(366),P=a(354),K=(a(216),function(e){var t=e.firestore,a=Object(n.useState)(""),l=Object(u.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(""),s=Object(u.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)(""),E=Object(u.a)(f,2),g=E[0],p=E[1];Object(n.useEffect)(function(){window.scrollTo(0,0)});var b=function(e,t){t(e.target.value)},v=function(e){"auth/user-not-found"===e.code&&p("Denne brukeren finnes ikke. Pr\xf8v igjen!")};return r.a.createElement("div",{className:"login-screen"},r.a.createElement(W.a,{className:"login-form"},g&&r.a.createElement("label",{className:"login-error-label"}," ",g," "),r.a.createElement(W.a.Field,null,r.a.createElement("label",null," Epost "),r.a.createElement("input",{value:c,onChange:function(e){return b(e,o)},type:"email",autoComplete:"email"})),r.a.createElement(W.a.Field,null,r.a.createElement("label",null," Passord "),r.a.createElement("input",{value:m,onChange:function(e){return b(e,d)},type:"password",autoComplete:"current-password"})),r.a.createElement(P.a,{className:"login-button",onClick:function(){p(""),c&&m?t.login(c,m,v):p("Fyll inn brukernavn og passord!")}}," Logg inn ")))}),H=function(e){var t=e.check,a=e.label,n=t?f.faCheck:f.faTimes,l=["check-label-wrapper",t?"check-green":"times-red"].join(" ");return r.a.createElement("div",{className:l},r.a.createElement(d.a,{icon:n}),r.a.createElement("label",null," ",a," "))},z=function(e){var t=e.event,a=e.canManage,l=e.deleteCallback,c=e.editCallback,o=Object(n.useState)("NO"),i=Object(u.a)(o,2),s=i[0],m=i[1],E=C(t,"title",s)?C(t,"title",s):"Tittel mangler (".concat(s,")"),g=w(t),p=S(t,s),b=t.title_EN&&t.from_EN&&t.day_EN&&t.desc_EN,v=t.address&&t.address.length>0,N=t.google_maps&&t.google_maps.startsWith("https");return r.a.createElement("div",{className:"editable-event-wrapper"},r.a.createElement("div",{className:"title-language-wrapper"},r.a.createElement("label",{className:"editable-event-title"},E),r.a.createElement(I,{state:{lang:s},changeLanguage:function(){return m("NO"===s?"EN":"NO")},position:"relative"})),r.a.createElement("label",{className:"editable-event-info-label"},p),r.a.createElement("label",{className:"editable-event-info-label"},g),t.address&&r.a.createElement("label",{className:"editable-event-info-label"}," Addresse: ",t.address),r.a.createElement("div",{className:"flex-row"},v&&r.a.createElement(H,{check:N,label:N?"Har google maps":"Mangler google maps"}),!v&&r.a.createElement(H,{check:v,label:"Mangler adresse"}),!b&&r.a.createElement(H,{check:b,label:"Mangler oversettelse"}),a&&r.a.createElement(d.a,{className:"trash-icon",icon:f.faTrashAlt,onClick:function(){return l(t.id)}}),a&&r.a.createElement(d.a,{className:"pen-icon",icon:f.faPen,onClick:function(){return c(t.id)}})))},J=["mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag","s\xf8ndag"],V=a(365),Y=a(189),q=a(363),$=a(364),Q=a(362),X=function(e){var t=e.textKey;return r.a.createElement("div",{className:"error-label"},p(t))},Z=(a(334),function(e){var t=e.editing,a=e.existingEvent,l=void 0===a?{}:a,c=e.availableGroups,o=e.cancelCallback,i=e.submitCallback,m=e.updateCallback,d=l.title_NO,f=void 0===d?"":d,E=l.title_EN,g=void 0===E?"":E,p=l.desc_NO,b=void 0===p?"":p,v=l.desc_EN,N=void 0===v?"":v,O=l.google_maps,h=void 0===O?"":O,k=l.start_time,_=void 0===k?"":k,C=l.end_time,w=void 0===C?"":C,S=l.day_NO,x=void 0===S?"":S,R=l.linkText_NO,T=void 0===R?"":R,L=l.linkText_EN,G=void 0===L?"":L,F=Object(n.useState)(f),A=Object(u.a)(F,2),D=A[0],M=A[1],I=Object(n.useState)(g),B=Object(u.a)(I,2),U=B[0],K=B[1],H=Object(n.useState)(b),z=Object(u.a)(H,2),J=z[0],V=z[1],Z=Object(n.useState)(N),ee=Object(u.a)(Z,2),te=ee[0],ae=ee[1],ne=Object(n.useState)(l.address?l.address:""),re=Object(u.a)(ne,2),le=re[0],ce=re[1],oe=Object(n.useState)(h),ie=Object(u.a)(oe,2),se=ie[0],ue=ie[1],me=Object(n.useState)(T),de=Object(u.a)(me,2),fe=de[0],Ee=de[1],ge=Object(n.useState)(G),pe=Object(u.a)(ge,2),be=pe[0],ve=pe[1],Ne=Object(n.useState)(l.link?l.link:""),Oe=Object(u.a)(Ne,2),he=Oe[0],ke=Oe[1],ye=Object(n.useState)(5===_.length?_.split(":")[0]:""),_e=Object(u.a)(ye,2),je=_e[0],Ce=_e[1],we=Object(n.useState)(5===_.length?_.split(":")[1]:""),Se=Object(u.a)(we,2),xe=Se[0],Re=Se[1],Te=Object(n.useState)(5===w.length?w.split(":")[0]:""),Le=Object(u.a)(Te,2),Ge=Le[0],Fe=Le[1],Ae=Object(n.useState)(5===w.length?w.split(":")[1]:""),De=Object(u.a)(Ae,2),Me=De[0],Ie=De[1],Be=Object(n.useState)(l.groups?l.groups:[]),Ue=Object(u.a)(Be,2),We=Ue[0],Pe=Ue[1],Ke=Object(n.useState)(x),He=Object(u.a)(Ke,2),ze=He[0],Je=He[1],Ve=Object(n.useState)({titleNO:!1,titleEN:!1,descNO:!1,descEN:!1,day:!1,address:!1,timeStart:!1,timeEnd:!1,groups:!1}),Ye=Object(u.a)(Ve,2),qe=Ye[0],$e=Ye[1],Qe=Object(n.useState)(!1),Xe=Object(u.a)(Qe,2),Ze=Xe[0],et=Xe[1],tt=Object(n.useRef)(null),at=Object(n.useRef)(null),nt=r.a.createElement("span",{style:{color:"red"}},"*"),rt=We.indexOf("all")>=0,lt=function(e){e.length<3?ue(""):(-1===e.toLowerCase().indexOf("bergen")&&(e+=", Bergen"),ue("https://www.google.com/maps/search/?api=1&query=".concat(e)))},ct=function(e,t){var a=e.target.value,n=!0,r=!1,l=void 0;try{for(var c,o=a.split("")[Symbol.iterator]();!(n=(c=o.next()).done);n=!0){var i=c.value;if(i<"0"||i>"9")return}}catch(u){r=!0,l=u}finally{try{n||null==o.return||o.return()}finally{if(r)throw l}}var s="startTimeHour"===t||"endTimeHour"===t?23:59;a.length>2||parseInt(a)>s||("startTimeHour"===t&&(2===a.length&&tt.current.focus(),Ce(a)),"startTimeMinute"===t&&Re(a),"endTimeHour"===t&&(2===a.length&&at.current.focus(),Fe(a)),"endTimeMinute"===t&&Ie(a))};return r.a.createElement("div",{className:"flex-column create-event-wrapper"},r.a.createElement("div",{className:"create-event-header"},"Legg til et nytt event. Felter merket med ",nt," er obligatoriske."),r.a.createElement(W.a,{className:"create-event-form",onSubmit:function(){if(function(e){var t={titleNO:""===D,titleEN:""===U,descNO:""===J,descEN:""===te,timeStart:2!==je.length||2!==xe.length,timeEnd:""!==Ge&&(2!==Ge.length||2!==Me.length),day:""===ze||-1===["mandag","tirsdag","onsdag","torsdag","fredag","l\xf8rdag","s\xf8ndag"].indexOf(ze),link:(be||fe)&&!he,groups:0===We.length};return e(t),!Object.keys(t).reduce(function(e,a){return t[a]||e},!1)}($e)){et(!0);var e=c.indexOf("all")>=0,a={title_NO:D,title_EN:U,desc_NO:J,desc_EN:te,day_NO:ze,day_EN:y(ze),from_NO:e?"fadderstyret":"gruppeleder",from_EN:e?"the mentor board":"group leader",start_time:"".concat(je,":").concat(xe),groups:We.sort(j)};le.length>=3&&(a.address=le),2===Ge.length&&2===Me.length&&(a.end_time="".concat(Ge,":").concat(Me)),se&&se.startsWith("https://")&&(a.google_maps=se),he&&(a.link=he,fe&&(a.linkText_NO=fe),be&&(a.linkText_EN=be)),t?m(Object(s.a)({},a,{id:l.id})):i(a)}},loading:!c||Ze},r.a.createElement(W.a.Group,{grouped:!0,className:"form-input-group"},r.a.createElement("label",{className:"form-field-header"}," Tittel ",nt," "),r.a.createElement(W.a.Field,{error:qe.titleNO},r.a.createElement("label",{className:"form-field-title"}," Norsk "),qe.titleNO&&r.a.createElement(X,{textKey:"ERROR_TITLE_NO"}),r.a.createElement(q.a,{value:D,onChange:function(e){M(e.target.value),$e(Object(s.a)({},qe,{titleNO:!1}))},type:"text",autoComplete:"off"})),r.a.createElement(W.a.Field,{error:qe.titleEN},r.a.createElement("label",{className:"form-field-title"}," Engelsk "),qe.titleEN&&r.a.createElement(X,{textKey:"ERROR_TITLE_EN"}),r.a.createElement("input",{value:U,onChange:function(e){K(e.target.value),$e(Object(s.a)({},qe,{titleEN:!1}))},type:"text",autoComplete:"off"}))),r.a.createElement(W.a.Field,{error:qe.day},r.a.createElement("label",{className:"form-field-header"}," Dag ",nt," "),qe.day&&r.a.createElement(X,{textKey:"ERROR_DAY"}),r.a.createElement(P.a.Group,{className:"full-width"},r.a.createElement(P.a,{primary:"mandag"===ze,type:"button",onClick:function(){Je("mandag"),$e(Object(s.a)({},qe,{day:!1}))}}," Man "),r.a.createElement(P.a,{primary:"tirsdag"===ze,type:"button",onClick:function(){Je("tirsdag"),$e(Object(s.a)({},qe,{day:!1}))}}," Tirs "),r.a.createElement(P.a,{primary:"onsdag"===ze,type:"button",onClick:function(){Je("onsdag"),$e(Object(s.a)({},qe,{day:!1}))}}," Ons ")),r.a.createElement(P.a.Group,{className:"full-width margin-top-small"},r.a.createElement(P.a,{primary:"torsdag"===ze,type:"button",onClick:function(){Je("torsdag"),$e(Object(s.a)({},qe,{day:!1}))}}," Tors "),r.a.createElement(P.a,{primary:"fredag"===ze,type:"button",onClick:function(){Je("fredag"),$e(Object(s.a)({},qe,{day:!1}))}}," Fre "),r.a.createElement(P.a,{primary:"l\xf8rdag"===ze,type:"button",onClick:function(){Je("l\xf8rdag"),$e(Object(s.a)({},qe,{day:!1}))}}," L\xf8r ")),r.a.createElement(P.a.Group,{className:"full-width margin-top-small"},r.a.createElement(P.a,{primary:"s\xf8ndag"===ze,type:"button",onClick:function(){Je("s\xf8ndag"),$e(Object(s.a)({},qe,{day:!1}))}}," S\xf8ndag "))),r.a.createElement(W.a.Group,{grouped:!0,className:"form-input-group"},r.a.createElement("label",{className:"form-field-header"}," Tid "),r.a.createElement("div",{className:"flex-row"},r.a.createElement("div",{className:"flex-column"},r.a.createElement("div",{className:"form-field-title"}," Start ",nt," "),qe.timeStart&&r.a.createElement(X,{textKey:"ERROR_START_TIME"}),r.a.createElement("div",{className:"flex-row"},r.a.createElement(W.a.Field,{error:qe.timeStart},r.a.createElement("input",{className:"time-input",placeholder:"00",value:je,onChange:function(e){ct(e,"startTimeHour"),$e(Object(s.a)({},qe,{timeStart:!1}))},type:"text",autoComplete:"off"})),r.a.createElement("div",{className:"time-separator flex-row align-center justify-center"},":"),r.a.createElement(W.a.Field,{error:qe.timeStart},r.a.createElement("input",{ref:tt,className:"time-input",placeholder:"00",value:xe,onChange:function(e){ct(e,"startTimeMinute"),$e(Object(s.a)({},qe,{timeStart:!1}))},type:"text",autoComplete:"off"})))),r.a.createElement("div",{className:"flex-column margin-left-large"},r.a.createElement("div",{className:"form-field-title"}," Slutt "),r.a.createElement("div",{className:"flex-row"},r.a.createElement(W.a.Field,{error:qe.timeEnd},r.a.createElement("input",{className:"time-input",placeholder:"00",value:Ge,onChange:function(e){ct(e,"endTimeHour"),$e(Object(s.a)({},qe,{timeEnd:!1}))},type:"text",autoComplete:"off"})),r.a.createElement("div",{className:"time-separator flex-row align-center justify-center"},":"),r.a.createElement(W.a.Field,{error:qe.timeEnd},r.a.createElement("input",{ref:at,className:"time-input",placeholder:"00",value:Me,onChange:function(e){ct(e,"endTimeMinute"),$e(Object(s.a)({},qe,{timeEnd:!1}))},type:"text",autoComplete:"off"})))))),r.a.createElement(W.a.Group,{grouped:!0,className:"form-input-group"},r.a.createElement("label",{className:"form-field-header"}," Beskrivelse ",nt," "),r.a.createElement(W.a.Field,{error:qe.descNO},r.a.createElement("label",{className:"form-field-title"}," Norsk "),qe.descNO&&r.a.createElement(X,{textKey:"ERROR_DESC_NO"}),r.a.createElement($.a,{error:qe.desc,value:J,onChange:function(e){V(e.target.value),$e(Object(s.a)({},qe,{descNO:!1}))}})),r.a.createElement(W.a.Field,{error:qe.descEN},r.a.createElement("label",{className:"form-field-title"}," Engelsk "),qe.descEN&&r.a.createElement(X,{textKey:"ERROR_DESC_EN"}),r.a.createElement($.a,{error:qe.desc,value:te,onChange:function(e){ae(e.target.value),$e(Object(s.a)({},qe,{descEN:!1}))}}))),r.a.createElement(W.a.Group,{grouped:!0,className:"form-input-group"},r.a.createElement(W.a.Field,null,r.a.createElement("label",{className:"form-field-header"}," Adresse "),r.a.createElement("input",{value:le,onChange:function(e){ce(e.target.value),se&&lt(e.target.value)},type:"text",autoComplete:"off"})),!se&&r.a.createElement("div",{className:"flex-row align-center"},r.a.createElement(P.a,{type:"button",disabled:le.length<3,content:"Generer lenke til Google maps",icon:"map",labelPosition:"left",onClick:function(){return lt(le)},primary:!0})),se&&r.a.createElement(P.a.Group,{className:"margin-top-small"},r.a.createElement(P.a,{type:"button",onClick:function(){return ue("")}},"Fjern"),r.a.createElement(P.a.Or,{text:""}),r.a.createElement(P.a,{type:"button",primary:!0},r.a.createElement("a",{className:"google-maps-link",href:se,rel:"noopener noreferrer",target:"_blank"},"Test lenken")))),r.a.createElement(W.a.Group,{grouped:!0,className:"form-input-group"},r.a.createElement("label",{className:"form-field-header"}," Lenke "),r.a.createElement(W.a.Field,null,r.a.createElement("label",{className:"form-field-title"}," Norsk tekst som vises "),r.a.createElement("input",{value:fe,onChange:function(e){return Ee(e.target.value)},type:"text",autoComplete:"off"})),r.a.createElement(W.a.Field,null,r.a.createElement("label",{className:"form-field-title"}," Engelsk tekst som vises "),r.a.createElement("input",{value:be,onChange:function(e){return ve(e.target.value)},type:"text",autoComplete:"off"})),r.a.createElement(W.a.Field,{error:qe.link},r.a.createElement("label",{className:"form-field-title"}," Lenke "),qe.link&&r.a.createElement(X,{textKey:"ERROR_LINK"}),r.a.createElement("input",{value:he,onChange:function(e){ke(e.target.value),$e(Object(s.a)({},qe,{link:!1}))},type:"text",autoComplete:"off"}))),r.a.createElement(W.a.Group,{grouped:!0,className:"form-input-group"},r.a.createElement("label",{className:"form-field-header"}," Gjelder for gruppe(r): ",nt," "),qe.groups&&r.a.createElement(X,{textKey:"ERROR_GROUPS"}),r.a.createElement(W.a.Field,null,c.map(function(e){return r.a.createElement(Q.a,{key:e,label:"all"===e?"Alle grupper":"Gruppe ".concat(e),className:"group-checkbox ".concat("all"===e?"full-width":""," ").concat(qe.groups?"checkbox-error":""),onClick:function(){return function(e){$e(Object(s.a)({},qe,{groups:!1})),"all"===e&&-1===We.indexOf("all")?Pe(["all"]):We.indexOf(e)>=0?Pe(We.filter(function(t){return t!==e})):Pe([e].concat(Object(Y.a)(We)))}(e)},disabled:"all"!==e&&rt,checked:rt||We.indexOf(e)>=0})}))),r.a.createElement(P.a,{type:"button",onClick:function(){return o()},className:"full-width margin-bottom-small margin-top-medium"},"Avbryt"),r.a.createElement(P.a,{primary:!0,type:"submit",className:"full-width margin-bottom-large"},t?"Lagre":"Ferdig")))}),ee=a(89),te=a.n(ee);a(342);te.a.setAppElement("#root"),te.a.defaultStyles.overlay.backgroundColor="rgba(0,0,0,0.50)";var ae=function(e){var t=e.handleClick;return r.a.createElement("div",{className:"add-event-button",onClick:t},r.a.createElement("p",null,"+"))},ne=function(e){var t=e.user,a=e.events,l=void 0===a?[]:a,c=e.firestore,o=Object(n.useState)(void 0),i=Object(u.a)(o,2),s=i[0],m=i[1],d=Object(n.useState)(!1),f=Object(u.a)(d,2),E=f[0],g=f[1],p=Object(n.useState)(void 0),b=Object(u.a)(p,2),v=b[0],N=b[1],O=Object(n.useState)(void 0),h=Object(u.a)(O,2),k=h[0],y=h[1];Object(n.useEffect)(function(){c.fetchGroupsThatUserAdministrates(t.uid,m)},[c,t.uid]);var j=s?l.filter(function(e){return function(e,t){if(t.groups.indexOf("all")>=0||"all"===e)return!0;var a=!0,n=!1,r=void 0;try{for(var l,c=e[Symbol.iterator]();!(a=(l=c.next()).done);a=!0){var o=l.value,i=!0,s=!1,u=void 0;try{for(var m,d=t.groups[Symbol.iterator]();!(i=(m=d.next()).done);i=!0)if(o===m.value)return!0}catch(f){s=!0,u=f}finally{try{i||null==d.return||d.return()}finally{if(s)throw u}}}}catch(f){n=!0,r=f}finally{try{a||null==c.return||c.return()}finally{if(n)throw r}}}(s,e)}):[],C=function(e){var t={};return J.forEach(function(e){return t[e]=[]}),e.forEach(function(e){return t[e.day_NO].push(e)}),Object.keys(t).forEach(function(e){return t[e].sort(_)}),t}(j);return E||v?r.a.createElement(Z,{existingEvent:l.filter(function(e){return e.id===v})[0],editing:void 0!==v,cancelCallback:function(){g(!1),N(void 0),window.scrollTo(0,0)},submitCallback:function(e){c.addEvent(e,t.uid).then(g(!1)),window.scrollTo(0,0)},updateCallback:function(e){c.updateEvent(e).then(N(void 0)),window.scrollTo(0,0)},availableGroups:s}):r.a.createElement("div",{className:"event-manager-wrapper"},r.a.createElement(te.a,{isOpen:void 0!==k,className:"delete-event-modal"},k&&r.a.createElement("label",null,"Er du sikker p\xe5 at du vil slette ",r.a.createElement("span",{className:"font-bold"},j.filter(function(e){return e.id===k})[0].title_NO)," ?"),r.a.createElement("div",{className:"full-width flex-row margin-top-large"},r.a.createElement(P.a,{secondary:!0,onClick:function(){return y(void 0)}}," Nei, g\xe5 tilbake "),r.a.createElement(P.a,{primary:!0,onClick:function(){c.removeEvent(k),y(void 0)}}," Ja, slett! "))),r.a.createElement(V.a,{active:!s}),r.a.createElement("div",{className:"add-event-button-wrapper"},r.a.createElement(ae,{handleClick:function(){return g(!0)}})),s&&l&&J.map(function(e){var t=C[e].map(function(e){return r.a.createElement(z,{key:e.id,event:e,canManage:e.groups.reduce(function(e,t){return e&&s.indexOf(t)>=0},!0),deleteCallback:function(e){return y(e)},editCallback:function(e){return N(e)}})});return r.a.createElement("div",{key:e,className:"event-group"},r.a.createElement("div",{className:"event-group-day-label"}," ",e," "),t)}),r.a.createElement(P.a,{type:"button",className:"full-width margin-top-medium margin-bottom-large",primary:!0,onClick:function(){return c.logout()}}," Logg ut "))},re=a(367),le=(a(343),function(e){var t=e.firestore,a=Object(n.useState)(void 0),l=Object(u.a)(a,2),c=l[0],o=l[1],i=Object(n.useState)(void 0),s=Object(u.a)(i,2),m=s[0],d=s[1],f=Object(n.useState)(!0),E=Object(u.a)(f,2),g=E[0],p=E[1];return Object(n.useEffect)(function(){t.fetchEvents(o),t.registerForAuthUpdates(d,p)},[t]),r.a.createElement("div",{className:"back-office-wrapper",id:"app"},r.a.createElement(re.a,{active:g},r.a.createElement(V.a,{active:g})),!g&&r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"back-office-header"}," Adminpanel "),!m&&r.a.createElement(K,{firestore:t}),m&&r.a.createElement(ne,{user:m,firestore:t,events:c})))}),ce=a(184),oe=a(185),ie=a(90),se=a.n(ie),ue=(a(346),a(350),{apiKey:"AIzaSyBz86p_Wdi_WBkLpcxhMaph4geiv69bcNc",authDomain:"fadderuke-matnat.firebaseapp.com",databaseURL:"https://fadderuke-matnat.firebaseio.com",projectId:"fadderuke-matnat",storageBucket:"fadderuke-matnat.appspot.com",messagingSenderId:"909444728352",appId:"1:909444728352:web:09ee2da490aafc00"}),me=new(function(){function e(){Object(ce.a)(this,e),se.a.initializeApp(ue),this.db=se.a.firestore(),this.auth=se.a.auth()}return Object(oe.a)(e,[{key:"fetchEvents",value:function(e){var t=this;this.db.collection("events").onSnapshot(function(a){var n=a.docs.map(function(e){return Object(s.a)({id:e.id},e.data(),{subEvents:[]})});t.db.collection("subevents").onSnapshot(function(t){t.docs.map(function(e){return e.data()}).forEach(function(e){var t=e.parent_event_id,a=!0,r=!1,l=void 0;try{for(var c,o=n[Symbol.iterator]();!(a=(c=o.next()).done);a=!0){var i=c.value;i.id===t&&i.subEvents.push(e)}}catch(s){r=!0,l=s}finally{try{a||null==o.return||o.return()}finally{if(r)throw l}}},console.log),e(n)},console.log)})}},{key:"fetchGroupNames",value:function(e){this.db.collection("groups").onSnapshot(function(t){var a=t.docs.map(function(e){return e.data()});e(a)},console.log)}},{key:"login",value:function(e,t,a){this.auth.signInWithEmailAndPassword(e,t).catch(function(e){a(e)})}},{key:"logout",value:function(){this.auth.signOut()}},{key:"registerForAuthUpdates",value:function(e,t){this.auth.onAuthStateChanged(function(a){a?(e(a),t(!1)):(e(void 0),t(!1))})}},{key:"fetchGroupsThatUserAdministrates",value:function(e,t){this.db.collection("writePermissions").doc(e).get().then(function(e){if(e.exists){var a=e.data().groups;t(a)}})}},{key:"addEvent",value:function(e,t){if(e)return this.db.collection("events").add(Object(s.a)({},e,{createdBy:t}))}},{key:"removeEvent",value:function(e){if(e)return this.db.collection("events").doc(e).delete()}},{key:"updateEvent",value:function(e){if(e)return this.db.collection("events").doc(e.id).set(e)}}]),e}());c.a.render(r.a.createElement(o.a,{basename:""},r.a.createElement(i.a,{exact:!0,path:"/admin",component:function(){return r.a.createElement(le,{firestore:me})}}),r.a.createElement(i.a,{exact:!0,path:"/",render:function(){return r.a.createElement(m.a,null," ",r.a.createElement(U,{firestore:me})," ")}})),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[201,1,2]]]);
//# sourceMappingURL=main.d928650f.chunk.js.map