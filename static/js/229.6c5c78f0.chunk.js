"use strict";(self.webpackChunktweets_project=self.webpackChunktweets_project||[]).push([[229],{229:function(e,t,r){r.r(t),r.d(t,{default:function(){return m}});var n=r(689),s=r(439),c=r(791),o=r(165),u=r(861),a=r(243);a.Z.defaults.baseURL="https://64455cc4914c816083cd1353.mockapi.io/tweets";var i=function(){var e=(0,u.Z)((0,o.Z)().mark((function e(){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a.Z.get("/users");case 3:return e.abrupt("return",e.sent);case 6:e.prev=6,e.t0=e.catch(0);case 8:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(){return e.apply(this,arguments)}}(),l=r(7),f=r.n(l),p=r(184),d=function(e){var t=e.onClick;return(0,p.jsx)("button",{type:"button",onClick:t,children:"Follow"})},h=function(e){var t=e.onClick;return(0,p.jsx)("button",{type:"button",onClick:t,children:"Following"})},j=function(e){var t=e.user,r=t.id,n=t.name,o=t.tweets,u=t.avatar,a=t.followers,i=(0,c.useState)(function(e){var t=localStorage.getItem("follow-".concat(e)),r=JSON.parse(t);if(r)return r}(r)||!1),l=(0,s.Z)(i,2),f=l[0],j=l[1],v=(0,c.useState)(function(e){var t=localStorage.getItem("followers-".concat(e));return JSON.parse(t)}(r)||Number(a)),w=(0,s.Z)(v,2),x=w[0],g=w[1];(0,c.useEffect)((function(){localStorage.setItem("follow-".concat(r),f),localStorage.setItem("followers-".concat(r),x)}),[x,f,r]);var m=function(){j(!f),f||g((function(e){return e+1})),f&&g((function(e){return e-1}))};return(0,p.jsxs)("li",{children:[(0,p.jsx)("img",{src:u,alt:n}),(0,p.jsxs)("p",{children:[o," tweets"]}),(0,p.jsxs)("p",{children:[x.toLocaleString("en-US")," followers"]}),f?(0,p.jsx)(h,{onClick:m}):(0,p.jsx)(d,{onClick:m})]})};j.PropType={user:f().shape({name:f().string.isRequired,tweets:f().number.isRequired,avatar:f().string.isRequired,followers:f().string.isRequired}).isRequired};var v=function(){var e=(0,c.useState)([]),t=(0,s.Z)(e,2),r=t[0],n=t[1],o=(0,c.useState)(null),u=(0,s.Z)(o,2),a=u[0],l=u[1];return(0,c.useEffect)((function(){i().then((function(e){var t=e.data;return n(t)})).catch((function(e){return l(e)}))}),[]),(0,p.jsxs)(p.Fragment,{children:[a&&(0,p.jsx)("p",{children:a.message}),(0,p.jsx)("ul",{children:r.map((function(e){return(0,p.jsx)(j,{user:e},e.id)}))})]})},w=r(87),x=r(134),g=function(){return(0,p.jsxs)(w.rU,{to:"/",children:[(0,p.jsx)(x.kyg,{}),"Back home"]})};var m=function(){var e=(0,n.TH)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(g,{state:{from:e}}),(0,p.jsx)(v,{})]})}}}]);
//# sourceMappingURL=229.6c5c78f0.chunk.js.map