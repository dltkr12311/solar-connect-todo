(this["webpackJsonptodo-list"]=this["webpackJsonptodo-list"]||[]).push([[0],{209:function(n,e,t){"use strict";t.r(e);var o,c=t(8),i=t(0),d=t.n(i),r=t(14),a=t.n(r),s=t(9),l=(t(134),t(214)),j=t(215),b=t(211),x=t(41),u=t(58),p=t(4);function f(n){return Object(p.jsx)(u.a,{style:Object(x.a)({fontSize:"large"===n.size?48:24},n.style),spin:!0})}var O=Object(s.c)(l.a)(o||(o=Object(c.a)(["\n  background-color: ",";\n"])),(function(n){return n["data-mask"]?"rgba(0, 0, 0, 0.1)":"transparent"}));function g(n){var e=n.tip,t=n.size,o=n.delay,c=n.style,i=n.mask,d=void 0!==i&&i;return Object(p.jsx)(O,{className:"spinner-wrap",justify:"center",align:"middle",style:c,"data-mask":d,children:Object(p.jsx)(j.a,{children:Object(p.jsx)(b.a,{indicator:Object(p.jsx)(f,{size:t}),delay:o,tip:e,size:t})})})}g.defaultProps={tip:"\ub85c\ub529\uc911\uc785\ub2c8\ub2e4.",size:"large",delay:0,style:{},mask:!1};var m,h=t(40),v=[];function y(n){return Object(p.jsx)(V,{children:n.children})}var w,k,z,S,T,I,D,N,C,F,J,Y,E,K,L,M,B,P=d.a.memo(y),V=s.c.div(m||(m=Object(c.a)(["\n  width: 70%;\n  height: 800px;\n\n  min-width: 360px;\n  max-width: 700px;\n\n  position: relative;\n  background: white;\n  border-radius: 30px;\n  box-shadow: 0 0 50px 0 rgba(0, 0, 0, 0.1);\n\n  margin: 0 auto;\n\n  margin-top: 96px;\n  margin-bottom: 32px;\n  display: flex;\n  flex-direction: column;\n"]))),W=new Date,q={year:"2-digit",month:"2-digit",day:"numeric"},A=function(){var n=W.toLocaleDateString("ko-Kr",q),e=W.toLocaleDateString("ko-Kr",{weekday:"long"});return Object(p.jsxs)(H,{children:[Object(p.jsx)(Q,{children:n}),Object(p.jsx)(R,{children:e})]})},G=d.a.memo(A),H=s.c.div(w||(w=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding-top: 52px;\n  padding-bottom: 24px;\n  border-bottom: 3px solid #33bb77;\n"]))),Q=s.c.div(k||(k=Object(c.a)(["\n  font-size: 26px;\n  color: #119955;\n  padding-left: 10px;\n"]))),R=s.c.div(z||(z=Object(c.a)(["\n  font-size: 22px;\n  font-weight: bold;\n  color: #119955;\n  padding-top: 5px;\n"]))),U=t(217),X=t(218),Z=(new Date,function(n){var e=n.toggleTodo,t=n.removeTodo,o=n.todo;return Object(p.jsxs)(nn,{children:[Object(p.jsx)(en,{done:o.done,onClick:function(){e(o.id)},children:o.done&&Object(p.jsx)(U.a,{})}),Object(p.jsx)(tn,{done:o.done,children:o.text}),Object(p.jsxs)(tn,{done:o.done,children:[o.expDate,"\xa0",Object(p.jsx)("strong",{children:"\ub9cc\ub8cc"})]}),Object(p.jsx)(_,{onClick:function(){t(o.id)},children:Object(p.jsx)(X.a,{})})]})}),$=d.a.memo(Z),_=s.c.div(S||(S=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #119955;\n  font-size: 16px;\n"]))),nn=s.c.div(T||(T=Object(c.a)(["\n  display: flex;\n  align-items: center;\n  padding-top: 12px;\n  padding-bottom: 12px;\n  &:hover {\n    "," {\n      display: initial;\n    }\n  }\n"])),_),en=s.c.div(I||(I=Object(c.a)(["\n  width: 20px;\n  height: 20px;\n  border-radius: 16px;\n  border: 1px solid #33bb77;\n  font-size: 16px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-right: 20px;\n  cursor: pointer;\n  ","\n"])),(function(n){return n.done&&Object(s.b)(D||(D=Object(c.a)(["\n      border: 1px solid #dddddd;\n      color: #dddddd;\n    "])))})),tn=s.c.div(N||(N=Object(c.a)(["\n  flex: 1;\n  font-size: 16px;\n  ","\n"])),(function(n){return n.done&&Object(s.b)(C||(C=Object(c.a)(["\n      color: #ced4da;\n      text-decoration: line-through;\n    "])))})),on=function(n){var e=n.toggleTodo,t=n.removeTodo,o=n.todos;return Object(p.jsx)(dn,{children:null===o||void 0===o?void 0:o.map((function(n){return Object(p.jsx)($,{toggleTodo:e,removeTodo:t,todo:n},n.id)}))})},cn=d.a.memo(on),dn=s.c.div(F||(F=Object(c.a)(["\n  flex: 1;\n  padding: 20px 32px;\n  padding-bottom: 48px;\n  overflow-y: auto;\n"]))),rn=t(219),an=t(213),sn=t(216),ln=t(212),jn=t(25),bn=t.n(jn),xn="YYYY-MM-DD",un=bn()().format(xn),pn=function(n){var e=n.nextId,t=n.createTodo,o=n.incrementNextId,c=Object(i.useState)(!1),d=Object(h.a)(c,2),r=d[0],a=d[1],s=Object(i.useState)(""),l=Object(h.a)(s,2),j=l[0],b=l[1],x=Object(i.useState)(un),u=Object(h.a)(x,2),f=u[0],O=u[1];return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)(gn,{children:Object(p.jsxs)(mn,{onSubmit:function(n){n.preventDefault(),""===j?an.a.warning({title:"todo\ub97c \uc791\uc131\ud574 \uc8fc\uc138\uc694",content:"todo\ub97c \uc791\uc131\ud574 \uc8fc\uc138\uc694"}):(t({id:e,text:j,done:!1,expDate:f}),o(),b(""),a(!1))},children:[Object(p.jsxs)(hn,{children:[Object(p.jsx)(vn,{autoFocus:!0,placeholder:"What's nexed to be done?",onChange:function(n){return b(n.target.value)},value:j}),Object(p.jsx)("span",{children:"\ub9cc\ub8cc\uc77c \uc9c0\uc815"}),Object(p.jsx)(sn.b,{direction:"vertical",size:16,children:Object(p.jsx)(ln.a,{defaultValue:bn()(f),onChange:function(n){var e=n.format(xn);O(e)}})})]}),Object(p.jsx)(On,{onClick:function(){return a(!r)},open:r,children:Object(p.jsx)(rn.a,{})})]})})})},fn=d.a.memo(pn),On=s.c.button(J||(J=Object(c.a)(["\n  background: #33bb77;\n  width: 50px;\n  height: 50px;\n  align-items: center;\n  justify-content: center;\n  font-size: 60px;\n  left: 50%;\n  transform: translate(50%, 0%);\n  color: white;\n  border-radius: 50%;\n  border: none;\n  outline: none;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n"]))),gn=s.c.div(Y||(Y=Object(c.a)(["\n  width: 100%;\n  border-bottom: 1px solid #eeeeee;\n"]))),mn=s.c.form(E||(E=Object(c.a)(["\n  display: flex;\n  justify-content: center;\n  background: #eeeeee;\n  padding-left: 40px;\n  padding-top: 36px;\n  padding-right: 60px;\n  padding-bottom: 36px;\n"]))),hn=s.c.div(K||(K=Object(c.a)(["\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n\n  > span {\n    font-weight: bold;\n  }\n"]))),vn=s.c.input(L||(L=Object(c.a)(["\n  padding: 12px;\n  border: 1px solid #dddddd;\n  width: 100%;\n  outline: none;\n  font-size: 21px;\n  box-sizing: border-box;\n  color: #119955;\n  &::placeholder {\n    color: #dddddd;\n    font-size: 16px;\n  }\n"]))),yn=function(n){var e=n.todos.filter((function(n){return!n.done}));return Object(p.jsx)(kn,{children:Object(p.jsxs)(zn,{className:"tasks-left",children:[e.length," items left"]})})},wn=d.a.memo(yn),kn=s.c.div(M||(M=Object(c.a)(["\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n  align-items: center;\n  padding-top: 24px;\n  padding-bottom: 24px;\n"]))),zn=s.c.div(B||(B=Object(c.a)(["\n  color: #33bb77;\n  font-size: 18px;\n"]))),Sn=function(){var n=function(){var n=Object(i.useState)(v),e=Object(h.a)(n,2),t=e[0],o=e[1],c=Object(i.useState)(0),d=Object(h.a)(c,2),r=d[0],a=d[1];Object(i.useEffect)((function(){l()}),[]),Object(i.useEffect)((function(){j()}),[t]);var s=function(){r||a(r+1)},l=function(){var n=localStorage.getItem("todos");void 0===n&&(n=""),(v=JSON.parse(n))&&v.length>=1&&s(),o(v)},j=function(){localStorage.setItem("todos",JSON.stringify(t))};return{todoState:t,nextIdState:r,incrementNextId:s,toggleTodo:function(n){var e=t.map((function(e){return Object(x.a)(Object(x.a)({},e),{},{done:e.id===n?!e.done:e.done})}));o(e)},removeTodo:function(n){o((function(e){return e.filter((function(e){return e.id!==n}))}))},createTodo:function(n){var e=t[t.length-1].id+1;o((function(t){return t.concat(Object(x.a)(Object(x.a)({},n),{},{id:e}))}))}}}(),e=n.todoState,t=n.nextIdState,o=n.incrementNextId,c=n.toggleTodo,d=n.removeTodo,r=n.createTodo;return Object(p.jsx)(p.Fragment,{children:Object(p.jsxs)(P,{children:[Object(p.jsx)(G,{}),Object(p.jsx)(fn,{nextId:t,createTodo:r,incrementNextId:o}),Object(p.jsx)(cn,{toggleTodo:c,removeTodo:d,todos:e}),Object(p.jsx)(wn,{todos:e})]})})};var Tn,In=function(){return Object(p.jsx)("div",{children:Object(p.jsx)(Sn,{})})},Dn=Object(s.a)(Tn||(Tn=Object(c.a)(["\n  body {\n    background: #eeeeee;\n  }\n"])));a.a.render(Object(p.jsxs)(p.Fragment,{children:[Object(p.jsx)(Dn,{}),Object(p.jsx)(In,{})]}),document.getElementById("root"))}},[[209,1,2]]]);
//# sourceMappingURL=main.843f7f4f.chunk.js.map