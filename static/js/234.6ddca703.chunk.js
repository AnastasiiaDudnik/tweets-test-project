"use strict";(self.webpackChunktweets_project=self.webpackChunktweets_project||[]).push([[234],{234:function(n,t,e){e.r(t),e.d(t,{default:function(){return sn}});var r=e(7689),o=e(3433),i=e(9439),a=e(2791),s=e(4165),p=e(5861),c=e(1243);c.Z.defaults.baseURL="https://64455cc4914c816083cd1353.mockapi.io/tweets";var l,u,x,f,d=function(){var n=(0,p.Z)((0,s.Z)().mark((function n(t){return(0,s.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,c.Z.get("/users?limit=3&page=".concat(t));case 3:return n.abrupt("return",n.sent);case 6:n.prev=6,n.t0=n.catch(0);case 8:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(t){return n.apply(this,arguments)}}(),g=e(2007),h=e.n(g),m=e(168),b=e(6444),Z=b.ZP.button(l||(l=(0,m.Z)(["\n  padding: 14px 56px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  margin-bottom: 36px;\n"]))),A=b.ZP.span(u||(u=(0,m.Z)(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n']))),w=e(184),j=function(n){var t=n.onClick;return(0,w.jsx)(Z,{type:"button",onClick:t,children:(0,w.jsx)(A,{children:"Follow"})})};j.PropType={onClick:h().func.isRequired};var v,k,S,y,P,E,C,R,q,Y,T=b.ZP.button(x||(x=(0,m.Z)(["\n  padding: 14px 56px;\n  background: #5cd3a8;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  margin-bottom: 36px;\n"]))),N=b.ZP.span(f||(f=(0,m.Z)(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #373737;\n']))),Q=function(n){var t=n.onClick;return(0,w.jsx)(T,{type:"button",onClick:t,children:(0,w.jsx)(N,{children:"Following"})})};Q.PropType={onClick:h().func.isRequired};var B,I,U=b.ZP.li(v||(v=(0,m.Z)(["\n  position: relative;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 380px;\n  height: 460px;\n  background: linear-gradient(\n    114.99deg,\n    #471ca9 -0.99%,\n    #5736a3 54.28%,\n    #4b2a99 78.99%\n  );\n  box-shadow: -2.5777px 6.87386px 20.6216px rgba(0, 0, 0, 0.23);\n  border-radius: 20px;\n"]))),L=b.ZP.img(k||(k=(0,m.Z)(["\n  position: absolute;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 62px;\n  height: 62px;\n  border-radius: 50%;\n"]))),O=b.ZP.div(S||(S=(0,m.Z)(["\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 50%;\n  margin: 0 auto;\n  background: #ebd8ff;\n  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),\n    inset 0px -2.19582px 4.39163px #ae7be3,\n    inset 0px 4.39163px 3.29372px #fbf8ff;\n"]))),z=b.ZP.div(y||(y=(0,m.Z)(["\n  position: relative;\n  width: 100%;\n"]))),F=b.ZP.div(P||(P=(0,m.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 26px;\n  margin-top: 26px;\n"]))),M=b.ZP.p(E||(E=(0,m.Z)(['\n  margin: 0;\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 500;\n  font-size: 20px;\n  line-height: 24px;\n  text-transform: uppercase;\n\n  color: #ebd8ff;\n']))),V=b.ZP.div(C||(C=(0,m.Z)(["\n  position: relative;\n  top: 28px;\n  display: flex;\n"]))),W=b.ZP.img(R||(R=(0,m.Z)(["\n  position: absolute;\n  top: 0;\n  left: 0;\n"]))),D=b.ZP.img(q||(q=(0,m.Z)([""]))),J=b.ZP.div(Y||(Y=(0,m.Z)(["\n  position: absolute;\n  right: 0;\n  left: 0;\n  top: 0;\n  bottom: 0;\n  margin: auto;\n  width: 100%;\n  height: 5px;\n  background: #ebd8ff;\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),\n    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;\n"]))),G=function(n){var t=n.user,r=t.id,o=t.name,s=t.tweets,p=t.avatar,c=t.followers,l=(0,a.useState)(function(n){var t=localStorage.getItem("follow-".concat(n)),e=JSON.parse(t);if(e)return e}(r)||!1),u=(0,i.Z)(l,2),x=u[0],f=u[1],d=(0,a.useState)(function(n){var t=localStorage.getItem("followers-".concat(n));return JSON.parse(t)}(r)||Number(c)),g=(0,i.Z)(d,2),h=g[0],m=g[1];(0,a.useEffect)((function(){localStorage.setItem("follow-".concat(r),x),localStorage.setItem("followers-".concat(r),h)}),[h,x,r]);var b=function(){f(!x),x||m((function(n){return n+1})),x&&m((function(n){return n-1}))};return(0,w.jsxs)(U,{children:[(0,w.jsxs)(V,{children:[(0,w.jsx)(W,{src:e(9093),alt:"logo"}),(0,w.jsx)(D,{src:e(7809),alt:"background"})]}),(0,w.jsxs)(z,{children:[(0,w.jsx)(J,{}),(0,w.jsx)(O,{children:(0,w.jsx)(L,{src:p,alt:o})})]}),(0,w.jsxs)(F,{children:[(0,w.jsxs)(M,{children:[s," tweets"]}),(0,w.jsxs)(M,{children:[h.toLocaleString("en-US")," followers"]})]}),x?(0,w.jsx)(Q,{onClick:b}):(0,w.jsx)(j,{onClick:b})]})};G.PropType={user:h().shape({name:h().string.isRequired,tweets:h().number.isRequired,avatar:h().string.isRequired,followers:h().string.isRequired}).isRequired};var X,H,K=b.ZP.button(B||(B=(0,m.Z)(["\n  padding: 14px 56px;\n  background: rgb(10 10 10);\n  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);\n  border-radius: 10.3108px;\n  border: none;\n  margin-right: auto;\n  margin-left: auto;\n"]))),_=b.ZP.span(I||(I=(0,m.Z)(['\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n  text-transform: uppercase;\n  color: #ebd8ff;\n']))),$=function(n){var t=n.onClick;return(0,w.jsx)(K,{type:"button",onClick:t,children:(0,w.jsx)(_,{children:"Load more"})})},nn=b.ZP.ul(X||(X=(0,m.Z)(["\n  list-style: none;\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin: 0;\n"]))),tn=function(){var n=(0,a.useState)([]),t=(0,i.Z)(n,2),e=t[0],r=t[1],s=(0,a.useState)(null),p=(0,i.Z)(s,2),c=p[0],l=p[1],u=(0,a.useState)(1),x=(0,i.Z)(u,2),f=x[0],g=x[1];(0,a.useEffect)((function(){1===f?d(f).then((function(n){var t=n.data;r(t)})).catch((function(n){return l(n)})):d(f).then((function(n){r((function(t){return[].concat((0,o.Z)(t),(0,o.Z)(n.data))}))})).catch((function(n){return l(n)}))}),[f]);return(0,w.jsxs)(w.Fragment,{children:[c&&(0,w.jsx)("p",{children:c.message}),(0,w.jsx)(nn,{children:e.map((function(n){return(0,w.jsx)(G,{user:n},n.id)}))}),(0,w.jsx)($,{onClick:function(){g((function(n){return n+1}))}})]})},en=e(3061),rn=e(1087),on=(0,b.ZP)(rn.rU)(H||(H=(0,m.Z)(['\n  display: flex;\n  gap: 10px;\n  align-items: center;\n  text-decoration: none;\n  padding: 12px;\n\n  font-family: "Montserrat";\n  font-style: normal;\n  font-weight: 600;\n  font-size: 18px;\n  line-height: 22px;\n']))),an=function(){return(0,w.jsxs)(on,{to:"/",children:[(0,w.jsx)(en.u1R,{}),"Back home"]})};var sn=function(){var n=(0,r.TH)();return(0,w.jsxs)(w.Fragment,{children:[(0,w.jsx)(an,{state:{from:n}}),(0,w.jsx)(tn,{})]})}},9093:function(n){n.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEwAAAAWCAYAAABqgnq6AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAJvSURBVHgB7VixTgJBEJ0zaoIFjSZSaKGFBY0WNlpYaOs3m2ihjYWNFhRaQIGJFFBIIpfgPG6WDOseuyLCmPiSye0dc3u772beDJcNh8NLWj76bNdZluVlDrzOQz7s0pKxQjZQYTuiPwArhAE1jqIDMg5LhAEHTNo2GYY1woAjJq1CRmGRsDW2UyZtlQwidVEDthe2DhUVrSKGqrUZ8O+ytcQ/F98dSq9yrgjc02xosz3JeE8MuKNi/dOeezLl9yTC3vEgLvl97xrQEqHWYt1g30Zgjg77NmRBGxTHqAgE5kpBzveN1shzDNT1vrseAvsOKYJYSk6QhTRhq3oaU1Xjpt6g+I/JkXnwlgeUBhSBefZeWPum2DhY3DUKZ8sEYhHWUWSBpDMqNAbnz1SkW035a7L2+VCXMea4xVwwPkd6p7YQdfZ/o/ngWI2v2HLZ10nqBLEIa6kxNAVkgZQHth4VEYgxIqbrkVtX9/qNaYfSMSoCclw6YhGmdculIaJuYsOiY/pvTUij9LVSHSkBtMVE1YxFmNYqR14FuhQo+1rLEH2+TmmSUkTfAfPEqtvCECNMiyBSD5tGap3TV4FcE+GEuGOTj+o3l7oOO5SOR69CLxWxMN9jEppOrPn8SqreR8mXBaQmogGkoeVAP7SuS7noW43SgBalRYYQizDXdY9TE5vXZIl+uRRDeT506Qq/AFmpAt6esQf7VaQIKTZ5gUijooPO5b4tKlLL3zz6pi1pO3rqOWX+Ifgp/F3gxbmqXC3xQbvi9pKMzMgHRA3o342vW/8fEMvxYEnkfVgjDCL/SoZhiTCTIu/DCmE/FfmF4RNQ/w47l8bQTgAAAABJRU5ErkJggg=="},7809:function(n,t,e){n.exports=e.p+"static/media/picture2.032662a2a907475127d7.png"}}]);
//# sourceMappingURL=234.6ddca703.chunk.js.map