(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1046],{32230:function(e,t,n){"use strict";var a=n(85893),s=n(41664);n(67294);t.Z=function(e){var t=e.breacrumb,n=e.layout,r=e.campaign_name;return(0,a.jsx)("div",{className:"ps-breadcrumb",children:(0,a.jsx)("div",{className:"fullwidth"===n?"ps-container":"container",children:(0,a.jsxs)("ul",{className:"breadcrumb",children:[t.map((function(e,t){return e.url?(0,a.jsx)("li",{children:(0,a.jsx)(s.default,{href:e.url,children:(0,a.jsx)("a",{children:e.text})})},e.text):(0,a.jsx)("li",{children:e.text},t)})),r&&(0,a.jsx)("li",{children:(0,a.jsx)("strong",{children:r})})]})})})}},45973:function(e,t,n){"use strict";var a=n(85893),s=n(9008),r=(n(67294),n(53010)),c=n(33875),i=n(84654),o=(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(i.Z,{}),(0,a.jsx)(c.Z,{})]}),d=(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(r.Z,{})});t.Z=function(e){var t,n=e.header,r=void 0===n?o:n,c=e.footer,i=void 0===c?d:c,u=e.children,l=e.title,m=void 0===l?"Page":l;return t=""!==m?"E-needz | "+m:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(s.default,{children:(0,a.jsx)("title",{children:t})}),r,u,i]})}},5786:function(e,t,n){"use strict";n.r(t),n.d(t,{__N_SSP:function(){return _},default:function(){return g}});var a=n(85893),s=n(11163),r=n(67294),c=n(14494),i=n(32230),o=n(45973),d=n(809),u=n.n(d),l=n(92447),m=n(64121),p=n(10642),h=n(41664),x=n(6645),f=n(39249),j=(0,c.$j)()((function(){var e=(0,x.Z)(["auth"]),t=(0,m.Z)(e,1)[0],n=(0,s.useRouter)(),c=(0,r.useState)([]),i=c[0],o=c[1],d=(0,r.useState)(""),j=(d[0],d[1]),v=(0,r.useState)({}),_=v[0],g=v[1];(0,r.useEffect)((function(){g(JSON.parse(localStorage.getItem("_p_a_"))),function(){var e=(0,l.Z)(u().mark((function e(){var n,a,s,r,c;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return(a=new FormData).append("customer_id",null===(n=t.auth)||void 0===n?void 0:n.id),e.next=4,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/customer_dashboard","/payment_gateway_list"),{method:"POST",body:a});case 4:return s=e.sent,e.next=7,s.json();case 7:200===(null===(r=e.sent)||void 0===r?void 0:r.response_status)?(c=null===r||void 0===r?void 0:r.data.filter((function(e){return"1"===e.customer_dashboard_status})),o(c)):f.Am.error(r.message);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()()}),[t.auth]);var y=function(){var e=(0,l.Z)(u().mark((function e(a){var s,r,c,i,o,d;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(a.preventDefault(),s=a.currentTarget.dataset.bankname.toLowerCase(),"bank"!==(r=s.split(" ")[0])){e.next=9;break}return localStorage.setItem("paymentGateway",r),n.push("/account/payment/".concat(r,"-").concat(_.order_id)),e.abrupt("return");case 9:return(i=new FormData).append("payment_amount",_.amount),i.append("payment_method",r),i.append("customer_id",null===(c=t.auth)||void 0===c?void 0:c.id),i.append("order_id",_.order_id),i.append("response_url","".concat(location.origin,"/account/invoices")),e.next=17,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/customer_dashboard","/make_payment_submit"),{method:"POST",body:i});case 17:return o=e.sent,e.next=20,o.json();case 20:200===(null===(d=e.sent)||void 0===d?void 0:d.response_status)?"nagad"===r?(window.open("".concat(d.data.url)),setOpenModal(!1),b(),j("")):"sslcommerz"===r&&(window.open("https://".concat(d.data.url)),setOpenModal(!1),b(),j("")):f.Am.error(d.message);case 22:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),b=function(){p.Z.destroyAll()};return(0,a.jsx)(a.Fragment,{children:(0,a.jsx)("div",{className:"ps-checkout ps-section--shopping",children:(0,a.jsxs)("div",{className:"container",children:[(0,a.jsx)("div",{className:"ps-section__header pb-5 justify-content-center",children:(0,a.jsx)("h1",{children:"Payment Gateways"})}),(0,a.jsx)("div",{className:"ps-section__content",children:(0,a.jsx)("div",{className:"row",children:(0,a.jsx)("div",{className:"col-xl-6 offset-xl-3",children:(0,a.jsxs)("div",{className:"payments-wrapper",style:{background:"white",padding:40},children:[(0,a.jsx)("div",{className:"payment-methods",children:Array.isArray(i)&&i.length>0&&i.map((function(e){return(0,a.jsxs)("div",{className:"payment-gateway d-flex align-items-center justify-content-center","data-bankname":e.agent,onClick:y,children:[(0,a.jsxs)("div",{className:"agent-logo mr-3",children:["Bank Payment"===e.agent&&(0,a.jsx)("img",{src:"/static/payments/bank.jpg",alt:e.agent}),"Nagad Payment"===e.agent&&(0,a.jsx)("img",{src:"/static/payments/nagad.png",alt:e.agent}),"SSLCOMMERZ"===e.agent&&(0,a.jsx)("img",{src:"/static/payments/sslcommerz.png",alt:e.agent})]}),(0,a.jsx)("h4",{children:e.agent})]},e.id)}))}),(0,a.jsx)("div",{className:"ps-block__footer mt-5",children:(0,a.jsx)(h.default,{href:"/account/invoices",children:(0,a.jsxs)("a",{children:[(0,a.jsx)("i",{className:"icon-arrow-left mr-2"}),"Return to Invoice"]})})})]})})})})]})})})})),v=n(53010),_=!0,g=(0,c.$j)()((function(e){var t=e.auth,n=(0,s.useRouter)();return(0,a.jsx)(a.Fragment,{children:t?(0,a.jsx)(o.Z,{footer:(0,a.jsx)(v.Z,{}),title:"Payment",children:(0,a.jsxs)("div",{className:"ps-page--simple",children:[(0,a.jsx)(i.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Invoices",url:"/account/invoices"},{text:"Payment"}]}),(0,a.jsx)(j,{})]})}):void n.push("/account/login")})}))},19581:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/payment",function(){return n(5786)}])}},function(e){e.O(0,[8116,642,4740,9774,2888,179],(function(){return t=19581,e(e.s=t);var t}));var t=e.O();_N_E=t}]);