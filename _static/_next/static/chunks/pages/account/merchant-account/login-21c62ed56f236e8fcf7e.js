(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9461],{45973:function(e,s,r){"use strict";var n=r(85893),t=r(9008),a=(r(67294),r(53010)),c=r(33875),i=r(84654),l=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.Z,{}),(0,n.jsx)(c.Z,{})]}),o=(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{})});s.Z=function(e){var s,r=e.header,a=void 0===r?l:r,c=e.footer,i=void 0===c?o:c,u=e.children,d=e.title,m=void 0===d?"Page":d;return s=""!==m?"E-needz | "+m:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.default,{children:(0,n.jsx)("title",{children:s})}),a,u,i]})}},24989:function(e,s,r){"use strict";r.r(s),r.d(s,{default:function(){return j}});var n=r(85893),t=r(67294),a=r(45973),c=r(64121),i=r(56883),l=r(20086),o=r(41664),u=r(11163),d=r(6645),m=r(14494),h=r(39249),p=(0,m.$j)((function(e){return e}))((function(e){e.auth;var s=(0,u.useRouter)(),r=((0,m.I0)(),(0,d.Z)(["auth"])),a=(0,c.Z)(r,2),p=(a[0],a[1],(0,t.useState)("")),f=p[0],j=p[1],x=(0,t.useState)(""),g=x[0],v=x[1];return(0,n.jsx)("div",{className:"ps-my-account",children:(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)(i.Z,{className:"ps-form--account",children:[(0,n.jsxs)("ul",{className:"ps-tab-list",children:[(0,n.jsx)("li",{className:"active",children:(0,n.jsx)(o.default,{href:"/account/merchant-account/login",children:(0,n.jsx)("a",{children:"Login"})})}),(0,n.jsx)("li",{children:(0,n.jsx)(o.default,{href:"/account/merchant-account/register",children:(0,n.jsx)("a",{children:"Register"})})})]}),(0,n.jsx)("div",{className:"ps-tab active pb-4",id:"sign-in",children:(0,n.jsxs)("div",{className:"ps-form__content",children:[(0,n.jsx)("h4",{children:"Merchant Login"}),(0,n.jsx)("div",{className:"form-group",children:(0,n.jsx)(i.Z.Item,{name:"email",rules:[{required:!0,message:"Please enter your email!"}],children:(0,n.jsx)(l.Z,{className:"form-control",id:"email",type:"email",placeholder:"Email",value:f,onChange:function(e){return j(e.target.value)}})})}),(0,n.jsx)("div",{className:"form-group form-forgot",children:(0,n.jsx)(i.Z.Item,{name:"password",rules:[{required:!0,message:"Please enter your password!"}],children:(0,n.jsx)(l.Z,{className:"form-control",type:"password",placeholder:"Password...",value:g,onChange:function(e){return v(e.target.value)}})})}),(0,n.jsx)("div",{className:"form-group d-flex justify-content-between",children:(0,n.jsxs)("div",{className:"ps-checkbox",children:[(0,n.jsx)("input",{className:"form-control",type:"checkbox",id:"remember-me",name:"remember-me"}),(0,n.jsx)("label",{htmlFor:"remember-me",children:"Rememeber me"})]})}),(0,n.jsx)("div",{className:"form-group submit",children:(0,n.jsx)("button",{type:"submit",className:"ps-btn ps-btn--fullwidth",onClick:function(){var e=new FormData;e.append("email",f),e.append("password",g),e.append("request_url",location.href);var r={method:"POST",body:e,redirect:"follow"};fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/seller_login"),r).then((function(e){return e.json()})).then((function(e){0===e.response_status&&h.Am.error(e.message),200===e.response_status&&(h.Am.success(e.message),s.push(e.data.url))})).catch((function(e){return console.log("error",e)}))},children:"Login"})})]})})]})})})})),f=r(53010),j=function(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsx)(a.Z,{footer:(0,n.jsx)(f.Z,{}),title:"Register",children:(0,n.jsx)("div",{className:"ps-page--my-account",children:(0,n.jsx)(p,{})})})})}},28055:function(e,s,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/merchant-account/login",function(){return r(24989)}])}},function(e){e.O(0,[8116,6883,3173,4740,9774,2888,179],(function(){return s=28055,e(e.s=s);var s}));var s=e.O();_N_E=s}]);