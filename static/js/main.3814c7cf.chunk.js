(this.webpackJsonpteste_nave=this.webpackJsonpteste_nave||[]).push([[0],{143:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),i=t(49),o=t.n(i),c=t(144),l=t(11),u=(t(79),t(4)),s=t(8),p=function(){var n=(JSON.parse(localStorage.getItem("Auth"))||{}).token;if(n)return n},f=function(n){localStorage.setItem("Auth",JSON.stringify({token:n}))},m=Object(a.createContext)({}),d=function(){return Object(a.useContext)(m)},h=function(n){var e=n.children,t=Object(a.useState)(function(){var n=(JSON.parse(localStorage.getItem("Auth"))||{}).isLogged;return n||!1}()),i=Object(u.a)(t,2),o=i[0],c=i[1],l=function(n){console.log("chego"),c(n),function(n){var e=JSON.parse(localStorage.getItem("Auth"));localStorage.setItem("Auth",JSON.stringify(Object(s.a)(Object(s.a)({},e),{},{isLogged:n})))}(n)};window.handleChangeAuth=l;var p={isAuth:o,handleChangeAuth:l};return r.a.createElement(m.Provider,{value:p},e)},x=t(3),v=t.n(x),b=t(5),k=t(24),g=t(1),j=t(2);function E(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:center;\n    color: red;\n    margin-top: 7px;\n    font-size:.9rem;\n    animation: "," .8s;\n"]);return E=function(){return n},n}function O(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:center;\n    font-size: 2.7rem;\n    font-weight: 800;\n\n    img {\n        width:60px;\n        height: 60px;\n        margin-right: 10px;\n    }\n"]);return O=function(){return n},n}function y(){var n=Object(g.a)(["\n    border: 1px solid var(--secondary);\n    padding: 35px;\n    display:flex;\n    flex-flow:column nowrap;\n    animation: "," 2s;\n    label {\n        margin-top: 25px;\n    }\n\n    input {\n        width:400px;\n    }\n\n    button {\n        margin-top: 30px;\n    }\n\n    @media (max-width:600px){\n        width: 100%;\n        input {\n            width:100%;\n        }\n    }\n"]);return y=function(){return n},n}function w(){var n=Object(g.a)(["\n    height:100%;\n    width: 100%;\n    background: var(--primary);\n    display:flex;\n    align-items:center;\n    justify-content:center;\n    overflow:hidden;\n"]);return w=function(){return n},n}function S(){var n=Object(g.a)(["\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity:1;\n    }\n"]);return S=function(){return n},n}var C=Object(j.c)(S()),D=j.b.div(w()),A=j.b.div(y(),C),V=j.b.div(O()),G=j.b.div(E(),C),N=t(36);function B(){var n=Object(g.a)(["\n    font-weight: 500;\n    margin-bottom: 3px;\n    font-size: .9rem;\n"]);return B=function(){return n},n}function _(){var n=Object(g.a)(["\n    outline:none;\n    border: 1px solid var(--tertiary);\n    background: inherit;\n    padding:10px;\n    width: 100%;\n\n    @media (max-width: 600px) {\n    }\n"]);return _=function(){return n},n}function z(){var n=Object(g.a)(["\n  display:flex;\n  flex-flow: column nowrap;\n"]);return z=function(){return n},n}var P=j.b.div(z()),T=j.b.input(_()),F=j.b.label(B()),I=Object(a.memo)((function(n){var e=n.label,t=Object(N.a)(n,["label"]);return r.a.createElement(P,null,r.a.createElement(F,null,e),r.a.createElement(T,t))}));function J(){var n=Object(g.a)(["\n    background: ",";\n    color: ",";\n    border: 1px solid var(--secondary);\n    padding: 10px 20px;\n    font-weight: 500;\n    cursor: pointer;\n    min-width: 176px;\n\n    :hover {\n        background:","; \n    }\n"]);return J=function(){return n},n}var M,L=j.b.button(J(),(function(n){return n.color===M.light?"var(--primary)":"var(--secondary)"}),(function(n){return n.color===M.light?"var(--secondary)":"var(--primary)"}),(function(n){return n.color===M.light?"#f5f5f5":"var(--tertiary)"}));!function(n){n.light="light",n.dark="dark"}(M||(M={}));var U=function(n){var e=n.color,t=n.onClick,a=n.children;return r.a.createElement(L,{type:"submit",color:e,onClick:t},a)},Y=t(35),q=t.n(Y),R=function(){var n=Object(a.useState)({}),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),p=l[0],m=l[1],h=Object(c.e)(),x=d().handleChangeAuth,g=Object(a.useCallback)((function(n){n.persist(),i((function(e){var t,a;return Object(s.a)(Object(s.a)({},e),{},Object(k.a)({},null===(t=n.target)||void 0===t?void 0:t.name,null===(a=n.target)||void 0===a?void 0:a.value))}))}),[t]),j=function(){var n=Object(b.a)(v.a.mark((function n(){var e,a,r;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,fetch("https://navedex-api.herokuapp.com/v1/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});case 2:if(200!==(e=n.sent).status){n.next=13;break}return n.next=6,e.json();case 6:a=n.sent,r=a.token,f(r),x(!0),h.push("/home"),n.next=14;break;case 13:m(!0);case 14:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}();return r.a.createElement(D,null,r.a.createElement(A,null,r.a.createElement(V,null,r.a.createElement("img",{src:q.a,alt:"Logo"}),"nave.rs"),r.a.createElement(I,{name:"email",placeholder:"E-mail",label:"E-mail",onChange:g}),r.a.createElement(I,{name:"password",placeholder:"Senha",label:"Senha",onChange:g}),p&&r.a.createElement(G,null,"Login ou senha incorretos!"),r.a.createElement(U,{onClick:j},"Entrar")))};function H(){var n=Object(g.a)(["\n    font-size:1rem;\n    padding: 5px 0;\n\n"]);return H=function(){return n},n}function K(){var n=Object(g.a)(["\n    margin-top:5px;\n    padding: 5px 0;\n    font-size:1rem;\n    font-weight: 600;\n"]);return K=function(){return n},n}function Q(){var n=Object(g.a)(["\n    display:flex;\n    flex-flow: column nowrap;\n    padding: 20px 10px;\n    img {\n        cursor: pointer;\n        width:300px;\n        height:300px;\n        transition: width 1s, height 1s;\n\n        :hover {\n            border: 3px solid black;\n        }\n    }\n"]);return Q=function(){return n},n}var W=j.b.div(Q()),X=j.b.span(K()),Z=j.b.span(H());function $(){var n=Object(g.a)(["\n  display:flex;\n  align-items:center;\n  \n  i:nth-child(1) {\n    margin-right:10px;\n  }\n\n  i {\n      cursor:pointer;\n    :hover {\n        color:black;\n    }\n  }\n"]);return $=function(){return n},n}var nn=j.b.div($()),en=function(n){var e=n.onClickDelete,t=n.onClickEdit;return r.a.createElement(nn,null,r.a.createElement("i",{className:"fas fa-trash",onClick:e}),r.a.createElement("i",{className:"fas fa-pen",onClick:t}))},tn=function(n){var e=n.name,t=n.url,a=n.job_role,i=n.id,o=n.handleShowUserInfo,l=n.onClickDelete,u=Object(c.e)();return r.a.createElement(W,null,r.a.createElement("img",{src:t,alt:"Person Image",onClick:function(){return o(i)}}),r.a.createElement(X,null,e),r.a.createElement(Z,null,a),r.a.createElement(en,{onClickDelete:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){return l(i)})),onClickEdit:function(){return u.push("/navers/edit/".concat(i))}}))};function an(){var n=Object(g.a)(["\n    display:flex;\n    justify-content: space-between;\n    align-items:center;\n\n    i {\n        display:none;\n    }\n\n    span {\n        font-size:1.1rem;\n        display:flex;\n        align-items:center;\n        font-weight: 600;\n        cursor: pointer;\n\n        :hover {\n            text-decoration: underline;\n        }\n    }\n\n    @media (max-width:600px) {\n        i {\n            display:block\n        }\n\n        span {\n            display:none;\n        }\n    }\n"]);return an=function(){return n},n}var rn=j.b.div(an());function on(){var n=Object(g.a)(["\n    display:flex;\n    align-items:center;\n    font-size: 2rem;\n    font-weight: 800;\n\n    img {\n        width:60px;\n        height:60px;\n    }\n"]);return on=function(){return n},n}var cn=j.b.div(on()),ln=function(){return r.a.createElement(cn,null,r.a.createElement("img",{src:q.a,alt:"Logo"}),"nave.rs")},un=Object(a.memo)((function(){var n=d().handleChangeAuth;return r.a.createElement(rn,null,r.a.createElement(ln,null),r.a.createElement("span",{onClick:function(){return n(!1)}},"Sair"),r.a.createElement("i",{className:"fas fa-sign-out-alt fa-2x"}))}));function sn(){var n=Object(g.a)(["\n    display:flex;\n    flex-flow:row wrap;\n    justify-content:center;\n\n    @media (max-width:700px) {\n        justify-content:center;\n    }\n"]);return sn=function(){return n},n}function pn(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:space-between;\n    align-items:center;\n    flex-flow:row wrap;\n    padding-bottom: 35px;\n    span {\n        font-size: 3.3rem;\n        font-weight: 600;\n    }\n\n    button {\n        font-size: 1.1rem;\n        height:100%;\n    }\n\n    @media (max-width:600px) {\n        flex-direction:column;\n        justify-content:center;\n    }\n"]);return pn=function(){return n},n}function fn(){var n=Object(g.a)(["\n    padding:60px 0;\n"]);return fn=function(){return n},n}function mn(){var n=Object(g.a)(["\n    position:relative;\n"]);return mn=function(){return n},n}var dn=j.b.div(mn()),hn=j.b.div(fn()),xn=j.b.div(pn()),vn=j.b.div(sn());function bn(){var n=Object(g.a)(["\n"]);return bn=function(){return n},n}function kn(){var n=Object(g.a)(["\n    font-size:1.2rem;\n    font-weight: 500;\n"]);return kn=function(){return n},n}function gn(){var n=Object(g.a)(["\n    font-size:1.2rem;\n\n"]);return gn=function(){return n},n}function jn(){var n=Object(g.a)(["\n    font-size:2rem;\n    color:black;\n    font-weight:500;\n"]);return jn=function(){return n},n}function En(){var n=Object(g.a)(["\n    padding: 25px;\n    flex: 1;\n    position:relative;\n    display:flex;\n    flex-flow:column nowrap;\n    div:nth-child(2n + 1){\n        margin-bottom: 5px;\n    }\n\n    div:nth-child(2n){\n        margin-bottom: 20px;\n    }\n   \n"]);return En=function(){return n},n}function On(){var n=Object(g.a)(["\n    display:flex;\n    background:var(--primary);\n    animation: "," .7s forwards ease-in-out;\n    position:relative;\n    overflow-y:scroll;\n    flex-flow: row wrap;\n    > div {\n        flex: 1 0 300px;\n        img {\n            width:100%;\n            height:100%;\n        }\n\n    }\n\n    > i:nth-child(1) {\n        cursor: pointer;\n        position:absolute;\n        top: 17px;\n        right: 17px;\n        z-index:100;\n        :hover {\n            color:black;\n        }\n    }\n\n"]);return On=function(){return n},n}function yn(){var n=Object(g.a)(["\n    background: rgba(0, 0, 0, 0.5);\n    position:fixed;\n    top:0;\n    left:0%;\n    width:100vw;\n    height: 100vh;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n    overflow: hidden;\n"]);return yn=function(){return n},n}function wn(){var n=Object(g.a)(["\n    0% {\n        width: 0px;\n        height: 0px;\n        opacity:0;\n    }\n\n    100% {\n        width: 75vw;\n        height: 70vh;\n        opacity:1;\n    }\n"]);return wn=function(){return n},n}var Sn=Object(j.c)(wn()),Cn=j.b.div(yn()),Dn=j.b.div(On(),Sn),An=j.b.div(En()),Vn=j.b.div(jn()),Gn=j.b.div(gn()),Nn=j.b.div(kn()),Bn=j.b.div(bn()),_n=function(){var n=Object(b.a)(v.a.mark((function n(e){var t,a,r,i,o=arguments;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=o.length>1&&void 0!==o[1]?o[1]:"GET",a=o.length>2?o[2]:void 0,(r=new Headers).append("Authorization","Bearer ".concat(p())),r.append("Content-type","application/json"),n.next=7,fetch(e,{method:t,headers:r,body:JSON.stringify(a)});case 7:if(401===(i=n.sent).status&&window.handleChangeAuth(!1),200===i.status){n.next=11;break}throw new Error("".concat(i.status));case 11:return n.abrupt("return",i);case 12:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),zn=t(71),Pn=t.n(zn),Tn={loop:!0,autoplay:!0,speed:10,animationData:t(72),rendererSettings:{preserveAspectRatio:"xMidYMid slice"}},Fn=function(){return r.a.createElement(Pn.a,{options:Tn,width:400,height:400})},In=t(15),Jn=t.n(In),Mn=function(n){var e,t,i=n.id,o=n.handleCloseModal,l=n.onClickDelete,s=Object(a.useState)({}),p=Object(u.a)(s,2),f=p[0],m=p[1],h=Object(a.useState)(!0),x=Object(u.a)(h,2),k=x[0],g=x[1],j=Object(c.e)();d().handleChangeAuth;return Object(a.useEffect)((function(){Object(b.a)(v.a.mark((function n(){var e,t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_n("https://navedex-api.herokuapp.com/v1/navers/".concat(i));case 3:return e=n.sent,n.next=6,e.json();case 6:t=n.sent,m(t),g(!1),n.next=14;break;case 11:n.prev=11,n.t0=n.catch(0),console.error(n.t0);case 14:case"end":return n.stop()}}),n,null,[[0,11]])})))()}),[]),r.a.createElement(Cn,null,r.a.createElement(Dn,null,r.a.createElement("i",{className:"fas fa-times fa-lg",onClick:o}),k?r.a.createElement(Fn,null):r.a.createElement(r.a.Fragment,null,r.a.createElement("div",null,r.a.createElement("img",{src:f.url,alt:"User picture"})),r.a.createElement(An,null,r.a.createElement(Vn,null,f.name),r.a.createElement(Gn,null,f.job_role),r.a.createElement(Nn,null,"Idade"),r.a.createElement(Gn,null,""!=(t=f.birthdate)?Jn()(new Date).diff(Jn()(t),"years"):""," anos."),r.a.createElement(Nn,null,"Tempo de empresa"),r.a.createElement(Gn,null,function(n){return""!=n?Jn()(new Date).diff(Jn()(n),"month"):""}(f.admission_date)," meses."),r.a.createElement(Nn,null,"Projetos que participou"),r.a.createElement(Gn,null,(e=f.project).charAt(0).toUpperCase()+e.slice(1),"."),r.a.createElement(Bn,null,r.a.createElement(en,{onClickEdit:function(){return j.push("/navers/edit/".concat(i))},onClickDelete:function(n){function e(){return n.apply(this,arguments)}return e.toString=function(){return n.toString()},e}((function(){l(i)}))}))))))};function Ln(){var n=Object(g.a)(["\n    margin: 20px 0;\n    font-weight: 500;\n"]);return Ln=function(){return n},n}function Un(){var n=Object(g.a)(["\n    font-weight: 600;\n"]);return Un=function(){return n},n}function Yn(){var n=Object(g.a)(["\n    background: var(--primary);\n    padding:30px;\n    animation: "," .5s;\n    position:relative;\n    i {\n        position: absolute;\n        top: 20px;\n        right: 20px;\n        cursor: pointer;\n\n        :hover {\n            color: black;\n        }\n    }\n"]);return Yn=function(){return n},n}function qn(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:flex-end;\n\n    button:nth-child(1) {\n        margin-right:15px;\n    }\n"]);return qn=function(){return n},n}function Rn(){var n=Object(g.a)(["\n    background: rgba(0, 0, 0, 0.5);\n    position:fixed;\n    top:0;\n    left:0%;\n    width:100vw;\n    height: 100vh;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n"]);return Rn=function(){return n},n}function Hn(){var n=Object(g.a)(["\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity:1;\n    }\n"]);return Hn=function(){return n},n}var Kn=Object(j.c)(Hn()),Qn=j.b.div(Rn()),Wn=j.b.div(qn()),Xn=j.b.div(Yn(),Kn),Zn=j.b.h3(Un()),$n=j.b.p(Ln());function ne(){var n=Object(g.a)(["\n    margin: 20px 0;\n    font-weight: 500;\n"]);return ne=function(){return n},n}function ee(){var n=Object(g.a)(["\n    font-weight: 600;\n"]);return ee=function(){return n},n}function te(){var n=Object(g.a)(["\n    background: var(--primary);\n    padding:30px;\n    animation: "," .5s;\n    position:relative;\n    min-width:50vw;\n    i {\n        position: absolute;\n        top: 20px;\n        right: 20px;\n        cursor: pointer;\n\n        :hover {\n            color: black;\n        }\n    }\n"]);return te=function(){return n},n}function ae(){var n=Object(g.a)(["\n    background: rgba(0, 0, 0, 0.5);\n    position:fixed;\n    top:0;\n    left:0%;\n    width:100vw;\n    height: 100vh;\n    display:flex;\n    justify-content:center;\n    align-items:center;\n"]);return ae=function(){return n},n}function re(){var n=Object(g.a)(["\n    0% {\n        opacity: 0;\n    }\n\n    100% {\n        opacity:1;\n    }\n"]);return re=function(){return n},n}var ie=Object(j.c)(re()),oe=j.b.div(ae()),ce=j.b.div(te(),ie),le=j.b.h3(ee()),ue=j.b.p(ne()),se=function(n){var e=n.onClick,t=n.text,a=n.title;return r.a.createElement(oe,null,r.a.createElement(ce,null,r.a.createElement("i",{className:"fas fa-times fa-lg",onClick:e}),r.a.createElement("div",null,r.a.createElement(le,null,a),r.a.createElement(ue,null,t))))},pe=function(n){var e=n.handleDeleteUser,t=n.onClickCancelDelete,i=n.id,o=Object(a.useState)(!1),c=Object(u.a)(o,2),l=c[0],s=c[1];return r.a.createElement(Qn,null,l?r.a.createElement(se,{title:"Naver exclu\xeddo",text:"Naver exclu\xeddo com sucesso!",onClick:t}):r.a.createElement(Xn,null,r.a.createElement("div",null,r.a.createElement(Zn,null,"Excluir Naver"),r.a.createElement($n,null,"Tem certeza que deseja excluir este Naver?")),r.a.createElement(Wn,null,r.a.createElement(U,{onClick:t,color:M.light},"Cancelar"),r.a.createElement(U,{onClick:function(){e(i),s(!0)},color:M.dark},"Excluir"))))},fe=function(){var n=Object(a.useState)([]),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(-1),l=Object(u.a)(o,2),s=l[0],p=l[1],f=Object(a.useState)(-1),m=Object(u.a)(f,2),d=m[0],h=m[1],x=Object(a.useState)(!1),k=Object(u.a)(x,2),g=k[0],j=k[1],E=Object(c.e)(),O=function(){var n=Object(b.a)(v.a.mark((function n(){var e,t;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,j(!0),n.next=4,_n("https://navedex-api.herokuapp.com/v1/navers");case 4:return e=n.sent,n.next=7,e.json();case 7:return t=n.sent,j(!1),n.abrupt("return",t);case 12:n.prev=12,n.t0=n.catch(0),console.error(n.t0);case 15:case"end":return n.stop()}}),n,null,[[0,12]])})));return function(){return n.apply(this,arguments)}}(),y=function(){p(-1)},w=function(n){p(n)},S=function(){var n=Object(b.a)(v.a.mark((function n(e){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_n("https://navedex-api.herokuapp.com/v1/navers/".concat(e),"DELETE");case 3:return n.t0=i,n.next=6,O();case 6:n.t1=n.sent,(0,n.t0)(n.t1),n.next=13;break;case 10:n.prev=10,n.t2=n.catch(0),console.error(n.t2);case 13:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(e){return n.apply(this,arguments)}}(),C=function(n){h(n),y()};return Object(a.useEffect)((function(){Object(b.a)(v.a.mark((function n(){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.t0=i,n.next=3,O();case 3:n.t1=n.sent,(0,n.t0)(n.t1);case 5:case"end":return n.stop()}}),n)})))()}),[]),r.a.createElement(dn,null,r.a.createElement(un,null),r.a.createElement(hn,null,r.a.createElement(xn,null,r.a.createElement("span",null,"Navers"),r.a.createElement(U,{onClick:function(){return E.push("/navers/create")}},"Adicionar Naver")),r.a.createElement(vn,null,g?r.a.createElement(Fn,null):r.a.createElement(r.a.Fragment,null,null===t||void 0===t?void 0:t.map((function(n){return r.a.createElement(tn,Object.assign({},n,{handleShowUserInfo:w,key:n.id,onClickDelete:C}))}))))),-1!==d&&r.a.createElement(pe,{id:d,handleDeleteUser:S,onClickCancelDelete:function(){return h(-1)}}),-1!==s&&r.a.createElement(Mn,{id:s,handleCloseModal:y,onClickDelete:C}))};function me(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:center;\n    padding-top:13vh;\n"]);return me=function(){return n},n}function de(){var n=Object(g.a)(["\n    \n"]);return de=function(){return n},n}var he=j.b.div(de()),xe=j.b.div(me());function ve(){var n=Object(g.a)(["\n    color:red;\n    animation: "," .7s;\n"]);return ve=function(){return n},n}function be(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:center;\n    padding: 10px 0;\n    flex:1;\n    flex-flow: row wrap;\n\n    div:nth-child(1) {\n        margin-right: 25px;\n    }\n\n    > div {\n        width: 400px;\n    }\n\n    @media (max-width:930px) {\n        flex-flow: row column;\n        padding: 0;\n\n        > div {\n            width: 100%;\n            margin-bottom: 15px;\n           \n        }   \n        div:nth-child(1) {\n            margin-right: 0px;\n        }\n    }\n\n"]);return be=function(){return n},n}function ke(){var n=Object(g.a)(["\n    display:flex;\n    flex-flow:column nowrap;\n    align-items:flex-end;\n\n    button {\n        margin-top: 20px;\n    }\n"]);return ke=function(){return n},n}function ge(){var n=Object(g.a)(["\n    font-size: 1.5rem;\n    font-weight: 500;\n    padding:20px 0;\n    i {\n        cursor: pointer;\n        font-size: 1.4rem;\n        margin-right: 7px;\n    }\n"]);return ge=function(){return n},n}function je(){var n=Object(g.a)(["\n"]);return je=function(){return n},n}function Ee(){var n=Object(g.a)(["\n    from {\n        opacity:0;\n    }\n\n    to {\n        opacity:1;\n    }\n"]);return Ee=function(){return n},n}var Oe=Object(j.c)(Ee()),ye=j.b.div(je()),we=j.b.div(ge()),Se=j.b.form(ke()),Ce=j.b.div(be()),De=j.b.div(ve(),Oe),Ae=t(73),Ve=t.n(Ae);function Ge(){var n=Object(g.a)(["\n  font-weight: 500;\n  margin-bottom: 3px;\n  font-size: .9rem;\n"]);return Ge=function(){return n},n}function Ne(){var n=Object(g.a)(["\n  outline:none;\n  border: 1px solid var(--tertiary);\n  background: inherit;\n  padding:10px;\n  width: 100%;\n"]);return Ne=function(){return n},n}function Be(){var n=Object(g.a)(["\n  display:flex;\n  flex-flow: column nowrap;\n"]);return Be=function(){return n},n}var _e=j.b.div(Be()),ze=Object(j.b)(Ve.a)(Ne()),Pe=j.b.label(Ge()),Te=Object(a.memo)((function(n){var e=n.label,t=n.defaultValue,a=Object(N.a)(n,["label","defaultValue"]);return r.a.createElement(_e,null,r.a.createElement(Pe,null,e),r.a.createElement(ze,Object.assign({mask:"99/99/9999",maskChar:null},a,{value:t})))})),Fe={name:"",job_role:"",birthdate:"",admission_date:"",project:"",url:""},Ie=function(n){var e=n.title,t=n.onSubmit,i=n.userData,o=Object(a.useState)(Object(s.a)({},Fe)),l=Object(u.a)(o,2),p=l[0],f=l[1],m=Object(a.useState)(!1),d=Object(u.a)(m,2),h=d[0],x=d[1],v=Object(c.e)(),b=function(n){n.persist(),f((function(e){var t,a;return Object(s.a)(Object(s.a)({},e),{},Object(k.a)({},null===(t=n.target)||void 0===t?void 0:t.name,null===(a=n.target)||void 0===a?void 0:a.value))}))},g=function(){for(var n in console.log(p),p)if(!p[n].length)return!1;return!0};return Object(a.useEffect)((function(){i&&(i.birthdate=Jn()(i.birthdate).format("DD/MM/YYYY"),i.admission_date=Jn()(i.admission_date).format("DD/MM/YYYY")),console.log(i),f((function(n){return Object(s.a)(Object(s.a)({},n),i)}))}),[i]),r.a.createElement(ye,null,r.a.createElement(we,null,r.a.createElement("i",{className:"fas fa-chevron-left",onClick:function(){return v.push("/home")}})," ",e),r.a.createElement(Se,{onSubmit:function(n){n.preventDefault(),g()?(console.log(p),t(p)):x(!0)}},r.a.createElement(Ce,null,r.a.createElement(I,{name:"name",placeholder:"Nome",label:"Nome",onChange:b,defaultValue:null===i||void 0===i?void 0:i.name}),r.a.createElement(I,{name:"job_role",placeholder:"Cargo",label:"Cargo",onChange:b,defaultValue:null===i||void 0===i?void 0:i.job_role})),r.a.createElement(Ce,null,r.a.createElement(Te,{name:"birthdate",placeholder:"Data de nascimento",label:"Data de nascimento",onChange:b,defaultValue:null===i||void 0===i?void 0:i.birthdate}),r.a.createElement(Te,{name:"admission_date",placeholder:"Data de admiss\xe3o",label:"Data de admiss\xe3o",onChange:b,defaultValue:null===i||void 0===i?void 0:i.admission_date})),r.a.createElement(Ce,null,r.a.createElement(I,{name:"project",placeholder:"Projetos que participou",label:"Projetos que participou",onChange:b,defaultValue:null===i||void 0===i?void 0:i.project}),r.a.createElement(I,{name:"url",label:"URL da foto do Naver",placeholder:"URL da foto do Naver",onChange:b,defaultValue:null===i||void 0===i?void 0:i.url})),h&&r.a.createElement(De,null,"Preencha os campos corretamente."),r.a.createElement(U,null,"Salvar")))},Je=function(){var n=Object(a.useState)(!1),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(c.e)(),l=function(){var n=Object(b.a)(v.a.mark((function n(e){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,_n("https://navedex-api.herokuapp.com/v1/navers","POST",e);case 3:i(!0),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),console.error(n.t0);case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(he,null,r.a.createElement(un,null),r.a.createElement(xe,null,r.a.createElement(Ie,{title:"Adicionar Naver",onSubmit:l})),t&&r.a.createElement(se,{title:"Naver criado",text:"Naver criado com sucesso!",onClick:function(){return o.push("/home")}}))};function Me(){var n=Object(g.a)(["\n    display:flex;\n    justify-content:center;\n"]);return Me=function(){return n},n}function Le(){var n=Object(g.a)(["\n    \n"]);return Le=function(){return n},n}var Ue=j.b.div(Le()),Ye=j.b.div(Me()),qe=function(){var n=Object(a.useState)({}),e=Object(u.a)(n,2),t=e[0],i=e[1],o=Object(a.useState)(!1),l=Object(u.a)(o,2),s=l[0],p=l[1],f=Object(c.e)(),m=Object(c.f)().id;Object(a.useEffect)((function(){Object(b.a)(v.a.mark((function n(){var e;return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,_n("https://navedex-api.herokuapp.com/v1/navers/".concat(m));case 2:return e=n.sent,n.t0=i,n.next=6,e.json();case 6:n.t1=n.sent,(0,n.t0)(n.t1);case 8:case"end":return n.stop()}}),n)})))()}),[]);var d=function(){var n=Object(b.a)(v.a.mark((function n(e){return v.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,delete e.id,delete e.user_id,n.next=5,_n("https://navedex-api.herokuapp.com/v1/navers/".concat(m),"PUT",e);case 5:p(!0),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(0),console.error(n.t0);case 11:case"end":return n.stop()}}),n,null,[[0,8]])})));return function(e){return n.apply(this,arguments)}}();return r.a.createElement(Ue,null,r.a.createElement(un,null),r.a.createElement(Ye,null,r.a.createElement(Ie,{title:"Editar Naver",onSubmit:d,userData:t})),s&&r.a.createElement(se,{title:"Naver editado",text:"Naver editado com sucesso!",onClick:function(){return f.push("/home")}}))},Re=function(){return d().isAuth?r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/home",component:fe}),r.a.createElement(c.b,{exact:!0,path:"/navers/create",component:Je}),r.a.createElement(c.b,{exact:!0,path:"/navers/edit/:id",component:qe}),r.a.createElement(c.a,{to:"/home"})):r.a.createElement(c.d,null,r.a.createElement(c.b,{exact:!0,path:"/login",component:R}),r.a.createElement(c.a,{to:"/login"}))};function He(){var n=Object(g.a)(["\n    * {\n        margin: 0;\n        padding:0;\n        box-sizing: border-box;\n        font-family: 'Montserrat', sans-serif;\n        color: var(--secondary);\n    }\n\n    html,body,#root {\n        width:100%;\n        height:100%;\n    }\n\n    #root {\n        padding: 35px 45px;\n    }\n\n    :root {\n        --primary:#FFF;\n        --secondary: #212121;\n        --tertiary: #424242;\n        --grey: #9E9E9E;\n    }\n"]);return He=function(){return n},n}var Ke=Object(j.a)(He());var Qe=function(){return r.a.createElement(h,null,r.a.createElement(c.c,{history:Object(l.a)()},r.a.createElement(c.d,null,r.a.createElement(Re,null))),r.a.createElement(Ke,null))};o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Qe,null)),document.getElementById("root"))},35:function(n,e,t){n.exports=t.p+"static/media/logo.5a076570.svg"},72:function(n){n.exports=JSON.parse('{"v":"5.4.3","fr":24,"ip":0,"op":48,"w":500,"h":500,"nm":"Comp 1","ddd":0,"assets":[],"layers":[{"ddd":0,"ind":1,"ty":4,"nm":"Shape Layer 1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[250.65,249.65,0],"ix":2},"a":{"a":0,"k":[1,-89,0],"ix":1},"s":{"a":0,"k":[-62.608,62.608,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"d":1,"ty":"el","s":{"a":0,"k":[209.301,209.301],"ix":2},"p":{"a":0,"k":[0,0],"ix":3},"nm":"Ellipse Path 1","mn":"ADBE Vector Shape - Ellipse","hd":false},{"ty":"st","c":{"a":0,"k":[0,0,0,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":14,"ix":5},"lc":2,"lj":1,"ml":4,"ml2":{"a":0,"k":4,"ix":8},"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[1.65,-88.65],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Ellipse 1","np":3,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"tm","s":{"a":1,"k":[{"i":{"x":[0.738],"y":[0.99]},"o":{"x":[0.76],"y":[0.011]},"n":["0p738_0p99_0p76_0p011"],"t":3,"s":[100],"e":[0]},{"t":43}],"ix":1},"e":{"a":1,"k":[{"i":{"x":[0.599],"y":[0.987]},"o":{"x":[0.736],"y":[0.011]},"n":["0p599_0p987_0p736_0p011"],"t":9,"s":[100],"e":[0]},{"t":47}],"ix":2},"o":{"a":0,"k":0,"ix":3},"m":1,"ix":2,"nm":"Trim Paths 1","mn":"ADBE Vector Filter - Trim","hd":false}],"ip":0,"op":48,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":4,"nm":"apolo Outlines","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"i":{"x":[0.463],"y":[0.969]},"o":{"x":[0.687],"y":[0.028]},"n":["0p463_0p969_0p687_0p028"],"t":0,"s":[450],"e":[810]},{"t":48}],"ix":10},"p":{"a":0,"k":[252,249,0],"ix":2},"a":{"a":0,"k":[41.266,11.913,0],"ix":1},"s":{"a":0,"k":[215.126,215.126,100],"ix":6}},"ao":0,"shapes":[{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.001,0.553],[0,0],[0,0]],"o":[[0,0],[-0.552,0],[0,0],[0,0],[0,0]],"v":[[1.757,2.684],[-0.755,2.684],[-1.755,1.682],[-1.753,0.029],[0.152,-2.684]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.450980392157,0.490196078431,0.533333333333,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.903,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[8.24,14.897],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 1","np":2,"cix":2,"bm":0,"ix":1,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,-0.629],[0.646,0],[0,0.63],[-0.646,0]],"o":[[0,0.63],[-0.646,0],[0,-0.629],[0.646,0]],"v":[[1.169,-0.001],[0.001,1.141],[-1.169,-0.001],[0.001,-1.141]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.999999940162,0.999999940162,1,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[11.166,9.5],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 2","np":2,"cix":2,"bm":0,"ix":2,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.001,0.553],[0,0],[0,0]],"o":[[0,0],[0.552,0],[0,0],[0,0],[0,0]],"v":[[-1.757,2.684],[0.755,2.684],[1.755,1.682],[1.753,0.029],[-0.152,-2.684]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.450980392157,0.490196078431,0.533333333333,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.903,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[14.023,14.897],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 3","np":2,"cix":2,"bm":0,"ix":3,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[-0.471,0.628],[0,0],[-0.2,-0.267],[0,0],[0,-0.782],[0,0]],"o":[[0,0],[-0.001,-0.784],[0,0],[0.2,-0.267],[0,0],[0.468,0.627],[0,0],[0,0]],"v":[[-2.702,6.65],[-2.708,-2.09],[-1.984,-4.266],[-0.398,-6.383],[0.402,-6.382],[1.988,-4.262],[2.708,-2.092],[2.708,6.65]],"c":false},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"st","c":{"a":0,"k":[0.450980392157,0.490196078431,0.533333333333,1],"ix":3},"o":{"a":0,"k":100,"ix":4},"w":{"a":0,"k":0.903,"ix":5},"lc":2,"lj":2,"bm":0,"nm":"Stroke 1","mn":"ADBE Vector Graphic - Stroke","hd":false},{"ty":"tr","p":{"a":0,"k":[11.167,10.931],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 4","np":2,"cix":2,"bm":0,"ix":4,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0.467,0.625],[0,0],[0.2,-0.267],[0,0],[-0.001,-0.785],[0,0]],"o":[[0,0],[0,-0.78],[0,0],[-0.2,-0.267],[0,0],[-0.471,0.628],[0,0],[0,0]],"v":[[2.708,5.763],[2.708,-1.209],[1.99,-3.373],[0.404,-5.495],[-0.398,-5.496],[-1.984,-3.38],[-2.708,-1.203],[-2.702,5.763]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0,0,0,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[11.167,10.044],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 5","np":2,"cix":2,"bm":0,"ix":5,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0.001,0.553],[0,0]],"o":[[0,0],[0,0],[0.553,0],[0,0],[0,0]],"v":[[-0.951,-2.584],[-0.952,2.584],[-0.049,2.584],[0.951,1.583],[0.949,-0.07]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.450980392157,0.490196078431,0.533333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[14.826,14.996],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 6","np":2,"cix":2,"bm":0,"ix":6,"mn":"ADBE Vector Group","hd":false},{"ty":"gr","it":[{"ind":0,"ty":"sh","ix":1,"ks":{"a":0,"k":{"i":[[0,0],[0,0],[0,0],[0,0.553],[0,0]],"o":[[0,0],[0,0],[-0.553,0],[0,0],[0,0]],"v":[[0.951,-2.584],[0.952,2.584],[0.049,2.584],[-0.951,1.583],[-0.949,-0.07]],"c":true},"ix":2},"nm":"Path 1","mn":"ADBE Vector Shape - Group","hd":false},{"ty":"fl","c":{"a":0,"k":[0.450980392157,0.490196078431,0.533333333333,1],"ix":4},"o":{"a":0,"k":100,"ix":5},"r":1,"bm":0,"nm":"Fill 1","mn":"ADBE Vector Graphic - Fill","hd":false},{"ty":"tr","p":{"a":0,"k":[7.436,14.996],"ix":2},"a":{"a":0,"k":[0,0],"ix":1},"s":{"a":0,"k":[100,100],"ix":3},"r":{"a":0,"k":0,"ix":6},"o":{"a":0,"k":100,"ix":7},"sk":{"a":0,"k":0,"ix":4},"sa":{"a":0,"k":0,"ix":5},"nm":"Transform"}],"nm":"Group 7","np":2,"cix":2,"bm":0,"ix":7,"mn":"ADBE Vector Group","hd":false}],"ip":0,"op":48,"st":0,"bm":0}],"markers":[]}')},74:function(n,e,t){n.exports=t(143)}},[[74,1,2]]]);
//# sourceMappingURL=main.3814c7cf.chunk.js.map