(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4086],{45973:function(e,a,s){"use strict";var t=s(85893),r=s(9008),n=(s(67294),s(53010)),o=s(33875),c=s(84654),l=(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.Z,{}),(0,t.jsx)(o.Z,{})]}),i=(0,t.jsx)(t.Fragment,{children:(0,t.jsx)(n.Z,{})});a.Z=function(e){var a,s=e.header,n=void 0===s?l:s,o=e.footer,c=void 0===o?i:o,d=e.children,u=e.title,m=void 0===u?"Page":u;return a=""!==m?"E-needz | "+m:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.default,{children:(0,t.jsx)("title",{children:a})}),n,d,c]})}},9941:function(e,a,s){"use strict";var t=s(85893),r=s(64121),n=s(36808),o=s(41664),c=s(11163),l=(s(67294),s(6645)),i=s(14494),d=s(39249),u=s(20301);a.Z=function(e){var a,s,m,h,p,x=e.data,f=(0,i.I0)(),v=(0,l.Z)(["auth"]),j=(0,r.Z)(v,2),g=j[0],_=j[1],N=(0,c.useRouter)();return(0,t.jsxs)("aside",{className:"ps-widget--account-dashboard",children:[(0,t.jsxs)("div",{className:"ps-widget__header",children:[(0,t.jsx)("div",{className:"profile-image",children:null!==g&&void 0!==g&&g.auth?(0,t.jsx)("img",{src:null===(a=g.auth)||void 0===a?void 0:a.image,alt:null===(s=g.auth)||void 0===s?void 0:s.name}):(0,t.jsx)("img",{src:"/static/img/users/3.jpg",alt:null===(m=g.auth)||void 0===m?void 0:m.name})}),(0,t.jsxs)("figure",{children:[(0,t.jsx)("figcaption",{children:null===(h=g.auth)||void 0===h?void 0:h.name}),(0,t.jsx)("p",{children:null===(p=g.auth)||void 0===p?void 0:p.mobile})]})]}),(0,t.jsx)("div",{className:"ps-widget__content",children:(0,t.jsxs)("ul",{children:[x.map((function(e){return(0,t.jsx)("li",{className:e.active?"active":"",children:(0,t.jsx)(o.default,{href:e.url,children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:e.icon}),e.text]})})},e.text)})),(0,t.jsx)("li",{className:"/account/review"==N.pathname?"active":"",children:(0,t.jsx)(o.default,{href:"review",children:(0,t.jsxs)("a",{children:[(0,t.jsx)("i",{className:"icon-book"}),"Review"]})})}),(0,t.jsx)("li",{children:(0,t.jsx)(o.default,{href:"#",children:(0,t.jsxs)("a",{onClick:function(e){e.preventDefault(),_("auth"),f((0,u.Gd)()),(0,n.remove)("auth"),d.Am.success("You successfully logged out!"),localStorage.removeItem("paymentInfo"),localStorage.removeItem("paymentGateway"),localStorage.removeItem("p_info"),N.push("/")},children:[(0,t.jsx)("i",{className:"icon-exit"}),"Logout"]})})})]})})]})}},85938:function(e,a,s){"use strict";s.r(a),s.d(a,{__N_SSP:function(){return p},default:function(){return x}});var t=s(85893),r=s(11163),n=s(67294),o=s(45973),c=s(9941),l=s(64121),i=s(6645),d=s(39249),u=function(){var e=(0,i.Z)(["auth"]),a=(0,l.Z)(e,2),s=a[0],r=a[1],o=(0,n.useState)(""),c=o[0],u=o[1],m=(0,n.useState)(""),h=m[0],p=m[1],x=(0,n.useState)(""),f=x[0],v=x[1],j=(0,n.useState)(""),g=j[0],_=j[1],N=(0,n.useState)(""),y=N[0],b=N[1],C=(0,n.useState)(""),S=C[0],w=C[1],F=(0,n.useState)(""),Z=F[0],k=F[1],A=(0,n.useState)(""),P=A[0],E=A[1],I=(0,n.useState)(""),z=I[0],L=I[1],O=(0,n.useState)(""),R=O[0],T=O[1],D=(0,n.useState)(""),M=D[0],U=D[1],G=(0,n.useState)(""),X=G[0],Y=G[1],H=(0,n.useState)(""),q=H[0],B=H[1],J=(0,n.useState)(""),K=J[0],Q=J[1];(0,n.useEffect)((function(){var e,a=new FormData;a.append("customer_id",null===(e=s.auth)||void 0===e?void 0:e.id);var t={method:"POST",body:a,redirect:"follow"};fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/customer_dashboard","/customer_profile"),t).then((function(e){return e.json()})).then((function(e){200===e.response_status&&(u(e.data.first_name),p(e.data.last_name),v(e.data.customer_email),b(e.data.customer_short_address),w(e.data.customer_address_1),k(e.data.customer_address_2),E(e.data.state),L(e.data.city),T(e.data.zip),U(e.data.country),Y(e.data.company),_(e.data.customer_mobile),Q(e.data.image))})).catch((function(e){return console.log("error",e)}))}),[]);return(0,t.jsxs)("form",{className:"ps-form--account-setting",onSubmit:function(e){var a;e.preventDefault();var t=new FormData;t.append("customer_id",null===(a=s.auth)||void 0===a?void 0:a.id),t.append("first_name",c),t.append("last_name",h),t.append("customer_email",f),t.append("customer_mobile",g),t.append("customer_short_address",y),t.append("state",P),t.append("city",z),t.append("zip",R),t.append("country",M),t.append("company",X),q?t.append("image",q):t.append("old_image",K);var n={method:"POST",body:t,redirect:"follow"};fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/customer_dashboard","/profile_update"),n).then((function(e){return e.json()})).then((function(e){if(200===e.response_status){var a;d.Am.success("Your Profile was updated successfully");var t={id:null===(a=s.auth)||void 0===a?void 0:a.id,email:f,mobile:g,name:"".concat(c," ").concat(h),image:URL.createObjectURL(q)};r("auth",t,{path:"/"})}else 0===e.response_status?d.Am.error(e.message):console.log("profile update error",e)})).catch((function(e){return console.log("error",e)}))},children:[(0,t.jsx)("div",{className:"ps-form__header",children:(0,t.jsx)("h3",{children:"Account Information"})}),(0,t.jsxs)("div",{className:"ps-form__content",children:[(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"first_name",children:"First Name"}),(0,t.jsx)("input",{id:"first_name",className:"form-control",type:"text",placeholder:"First Name",value:c,onChange:function(e){return u(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"last_name",children:"Last Name"}),(0,t.jsx)("input",{id:"last_name",className:"form-control",type:"text",placeholder:"Last Name",value:h,onChange:function(e){return p(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"mobile",children:"Mobile"}),(0,t.jsx)("input",{id:"mobile",className:"form-control",type:"number",placeholder:"Mobile",value:g,onChange:function(e){return _(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"email",children:"Email"}),(0,t.jsx)("input",{id:"email",className:"form-control",type:"email",placeholder:"Email",value:f,onChange:function(e){return v(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"short_address",children:"Short Address"}),(0,t.jsx)("input",{id:"short_address",className:"form-control",type:"text",placeholder:"Short Address",value:y,onChange:function(e){return b(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"customer_address_1",children:"Customer Address 1"}),(0,t.jsx)("input",{id:"customer_address_1",className:"form-control",type:"text",placeholder:"Customer Address 1",value:S,onChange:function(e){return w(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"customer_address_2",children:"Customer Address 2"}),(0,t.jsx)("input",{id:"customer_address_2",className:"form-control",type:"text",placeholder:"Customer Address 2",value:Z,onChange:function(e){return k(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"state",children:"State"}),(0,t.jsx)("input",{id:"state",className:"form-control",type:"text",placeholder:"State",value:P,onChange:function(e){return E(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"city",children:"City"}),(0,t.jsx)("input",{id:"city",className:"form-control",type:"text",placeholder:"City",value:z,onChange:function(e){return L(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"zip_code",children:"Zip Code"}),(0,t.jsx)("input",{id:"zip_code",className:"form-control",type:"number",placeholder:"Zip Code",value:R,onChange:function(e){return T(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"country",children:"Country"}),(0,t.jsx)("input",{id:"country",className:"form-control",type:"text",placeholder:"country",value:M,onChange:function(e){return U(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"company_name",children:"Company Name"}),(0,t.jsx)("input",{id:"company_name",className:"form-control",type:"text",placeholder:"Company Name",value:X,onChange:function(e){return Y(e.target.value)}})]})}),(0,t.jsx)("div",{className:"col-sm-6",children:(0,t.jsxs)("div",{className:"form-group",children:[(0,t.jsx)("label",{htmlFor:"profile_picture",children:"Profile Logo/Picture"}),(0,t.jsx)("input",{id:"profile_picture",className:"form-control",type:"file",onChange:function(e){return B(e.target.files[0])}}),(0,t.jsx)("input",{id:"profile_picture",className:"form-control",value:K,onChange:function(e){return Q(K)},hidden:!0})]})})]}),(0,t.jsx)("div",{className:"ps-form__submit text-center",children:(0,t.jsx)("button",{className:"ps-btn success",type:"submit",children:"Update Profile"})})]})]})},m=function(){return(0,t.jsx)("section",{className:"ps-my-account ps-page--account",children:(0,t.jsx)("div",{className:"ps-container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-lg-3",children:(0,t.jsx)("div",{className:"ps-page__left",children:(0,t.jsx)(c.Z,{data:[{text:"Account Information",url:"/account/user-information",icon:"icon-user",active:!0},{text:"Invoices",url:"/account/invoices",icon:"icon-papers"},{text:"Track Order",url:"/account/order-tracking",icon:"icon-papers"},{text:"Payment History",url:"/account/payment-history",icon:"icon-cog"},{text:"Address",url:"/account/address",icon:"icon-map-marker"},{text:"Change Password",url:"/account/change-password",icon:"icon-lock"}]})})}),(0,t.jsx)("div",{className:"col-lg-9",children:(0,t.jsx)("div",{className:"ps-page__content",children:(0,t.jsx)(u,{})})})]})})})},h=s(53010),p=!0,x=function(e){var a=e.auth,s=(0,r.useRouter)();return(0,t.jsx)(t.Fragment,{children:a?(0,t.jsx)(o.Z,{footer:(0,t.jsx)(h.Z,{}),title:"User Information",children:(0,t.jsx)("div",{className:"ps-page--my-account",children:(0,t.jsx)(m,{})})}):void s.push("/account/login")})}},89913:function(e,a,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/user-information",function(){return s(85938)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return a=89913,e(e.s=a);var a}));var a=e.O();_N_E=a}]);