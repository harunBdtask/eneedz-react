(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5260],{32230:function(e,s,i){"use strict";var t=i(85893),r=i(41664);i(67294);s.Z=function(e){var s=e.breacrumb,i=e.layout,n=e.campaign_name;return(0,t.jsx)("div",{className:"ps-breadcrumb",children:(0,t.jsx)("div",{className:"fullwidth"===i?"ps-container":"container",children:(0,t.jsxs)("ul",{className:"breadcrumb",children:[s.map((function(e,s){return e.url?(0,t.jsx)("li",{children:(0,t.jsx)(r.default,{href:e.url,children:(0,t.jsx)("a",{children:e.text})})},e.text):(0,t.jsx)("li",{children:e.text},s)})),n&&(0,t.jsx)("li",{children:(0,t.jsx)("strong",{children:n})})]})})})}},96176:function(e,s,i){"use strict";var t=i(85893),r=(i(67294),i(67655)),n=i(1500),o=i(60790),c=i(62558),l=i(25954);s.Z=function(e){var s=e.product;return(0,t.jsx)("div",{className:"ps-product--detail ps-product--fullwidth",children:(0,t.jsxs)("div",{className:"ps-product__header",children:[(0,t.jsx)(l.Z,{product:s}),(0,t.jsxs)("div",{className:"ps-product__info",children:[(0,t.jsx)(n.Z,{product:s}),(0,t.jsx)(o.Z,{product:s}),(0,t.jsx)(r.Z,{product:s}),(0,t.jsx)(c.Z,{product:s})]})]})})}},43465:function(e,s,i){"use strict";var t=i(85893),r=(i(67294),i(33860));s.Z=function(){return(0,t.jsx)("div",{className:"ps-skeleton ps-skeleton-product-detail",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-5 col-12",children:(0,t.jsx)(r.Z.Input,{active:!0,size:600})}),(0,t.jsxs)("div",{className:"col-md-7 col-12",children:[(0,t.jsx)("div",{className:"mb-10",children:(0,t.jsx)(r.Z.Input,{active:!0,size:30,style:{width:500}})}),(0,t.jsx)(r.Z,{paragraph:{rows:16,title:!1}})]})]})})}},39574:function(e,s,i){"use strict";var t=i(85893),r=i(26265),n=i(41664),o=i(67294),c=i(46066),l=i(72091),a=i(68697),d=i(61087),u=i(79264),h=i(7864);function p(e,s){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);s&&(t=t.filter((function(s){return Object.getOwnPropertyDescriptor(e,s).enumerable}))),i.push.apply(i,t)}return i}function x(e){for(var s=1;s<arguments.length;s++){var i=null!=arguments[s]?arguments[s]:{};s%2?p(Object(i),!0).forEach((function(s){(0,r.Z)(e,s,i[s])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):p(Object(i)).forEach((function(s){Object.defineProperty(e,s,Object.getOwnPropertyDescriptor(i,s))}))}return e}s.Z=function(e){var s,i=e.dealTitle,r=e.endPoint,p=e._link,j=e._cat,f=(0,d.Z)(),m=f.productItems,v=f.loading,w=f.getProductsByCollection,g=(0,o.useState)(),_=g[0],N=g[1],b=(0,o.useState)(null),S=b[0],Z=b[1];if((0,o.useEffect)((function(){w({endPoint:r,perPage:10,cat_id:j})}),[r]),(0,o.useEffect)((function(){N(m)}),[m]),(0,o.useEffect)((function(){Z(window.screen.width)}),[S]),v){var T=(0,h.Z)(6).map((function(e,s){return(0,t.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-4 col-6",children:(0,t.jsx)(a.Z,{})},s)}));s=(0,t.jsx)("div",{className:"row",children:T})}else if(m&&_.length>0)if(m&&_.length>0)if(_.length>6){var y=_.map((function(e,s){return(0,t.jsx)(l.Z,{product:e},s)}));s=(0,t.jsx)(c.Z,x(x({},u.Kp),{},{className:"ps-carousel outside",children:y}))}else s=(0,t.jsx)("div",{className:"row no-carousel",children:_.map((function(e,s){return(0,t.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-4 col-6",children:(0,t.jsx)(l.Z,{product:e})},s)}))});else s=(0,t.jsx)("p",{children:"No product(s) found."});else s=(0,t.jsx)("p",{children:"No product(s) found."});return(0,t.jsx)("div",{className:"ps-deal-of-day",children:(0,t.jsx)("div",{className:"ps-container",children:(0,t.jsxs)("div",{className:"section-white",children:[(0,t.jsxs)("div",{className:"ps-section__header",children:[i&&(0,t.jsx)("div",{className:"ps-block--countdown-deal",children:(0,t.jsx)("div",{className:"ps-block__left",children:(0,t.jsx)("h3",{children:i})})}),(0,t.jsx)("div",{className:"search-products",children:(0,t.jsx)(n.default,{href:"".concat(p),children:(0,t.jsx)("a",{className:"ps-btn view-all",children:"View all"})})})]}),(0,t.jsx)("div",{className:"ps-section__content special-cat-section",children:S>768?s:(0,t.jsx)("div",{className:"row mobile-layout",children:(null===_||void 0===_?void 0:_.length)>0&&(null===_||void 0===_?void 0:_.map((function(e,s){return(0,t.jsx)("div",{className:"col-6 mb-4",children:(0,t.jsx)(l.Z,{product:e})},s)})))})})]})})})}},57914:function(e,s,i){"use strict";i.r(s),i.d(s,{default:function(){return E}});var t=i(809),r=i.n(t),n=i(85893),o=i(92447),c=i(11163),l=i(67294),a=i(32230),d=i(94281),u=i(96176),h=i(43465),p=i(45973),x=i(39574),j=i(25157),f=i(52794),m=i(41664),v=function(){var e=function(){var e=window.pageXOffset||document.documentElement.scrollTop||document.body.scrollTop||0,s=document.getElementById("header-mobile");null!==s&&(e>=300?s.classList.add("header--sticky"):s.classList.remove("header--sticky"))};return(0,l.useEffect)((function(){window.addEventListener("scroll",e)}),[]),(0,n.jsx)("header",{className:"header header--mobile header--mobile-product",id:"header-mobile","data-sticky":"true",children:(0,n.jsxs)("div",{className:"navigation--mobile",children:[(0,n.jsx)("div",{className:"navigation__left",children:(0,n.jsx)(m.default,{href:"/shop",children:(0,n.jsxs)("a",{href:"/",className:"header__back",children:[(0,n.jsx)("i",{className:"icon-chevron-left"}),(0,n.jsx)("strong",{children:"Back to previous"})]})})}),(0,n.jsx)("div",{className:"navigation__right",children:(0,n.jsx)(f.Z,{})})]})})},w=function(e){var s;return s="autopart"===e.type?{url:"/home/autopart",img:"icons/logo.svg"}:{url:"/",img:"/static/icons/logo.svg"},(0,n.jsx)(m.default,{href:s.url,children:(0,n.jsx)("a",{className:"ps-logo",children:(0,n.jsx)("img",{src:s.img,alt:""})})})},g=i(83255),_=i(35267),N=i(14494),b=i(10443),S=i(97953),Z=(0,N.$j)((function(e){return e}))((function(e){var s,i=e.ecomerce,t=e.auth,r=i.compareItems,o=i.wishlistItems;return s=t.isLoggedIn&&!0===Boolean(t.isLoggedIn)?(0,n.jsx)(b.Z,{isLoggedIn:!0}):(0,n.jsx)(b.Z,{isLoggedIn:!1}),(0,n.jsxs)("div",{className:"header__actions",children:[(0,n.jsx)(m.default,{href:"/account/compare",children:(0,n.jsxs)("a",{className:"header__extra",children:[(0,n.jsx)("i",{className:"icon-chart-bars"}),(0,n.jsx)("span",{children:(0,n.jsx)("i",{children:r?r.length:0})})]})}),(0,n.jsx)(m.default,{href:"/account/wishlist",children:(0,n.jsxs)("a",{className:"header__extra",children:[(0,n.jsx)("i",{className:"icon-heart"}),(0,n.jsx)("span",{children:(0,n.jsx)("i",{children:o?o.length:0})})]})}),(0,n.jsx)(S.Z,{}),s]})})),T=i(7864),y=i(754),k=function(){return(0,l.useEffect)((function(){window.addEventListener("scroll",T._)}),[]),(0,n.jsxs)("header",{className:"header header--1","data-sticky":"true",id:"headerSticky",children:[(0,n.jsx)("div",{className:"header__top",children:(0,n.jsxs)("div",{className:"ps-container",children:[(0,n.jsxs)("div",{className:"header__left",children:[(0,n.jsx)(w,{}),(0,n.jsx)(y.Z,{})]}),(0,n.jsx)("div",{className:"header__center",children:(0,n.jsx)(g.Z,{})}),(0,n.jsx)("div",{className:"header__right",children:(0,n.jsx)(Z,{})})]})}),(0,n.jsx)(_.Z,{})]})},O=i(84654),E=function(){var e=(0,c.useRouter)(),s=e.query.pid,i=(0,l.useState)(null),t=i[0],f=i[1],m=(0,l.useState)(!1),w=m[0],g=m[1],_=(0,l.useState)(),N=_[0],b=_[1];function S(){return(S=(0,o.Z)(r().mark((function s(i){var t;return r().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:if(g(!0),!i){s.next=9;break}return s.next=4,fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/product_details"),{method:"POST",body:JSON.stringify({product_id:i.split("-")[0],campaign_id:i.split("-")[1]})});case 4:return t=s.sent,s.next=7,t.json();case 7:(t=s.sent)&&(200===t.response_status?(f(t.data[0]),b(t.data[0].category_id)):e.push("/"),setTimeout(function(){g(!1)}.bind(this),250));case 9:case"end":return s.stop()}}),s,this)})))).apply(this,arguments)}(0,l.useEffect)((function(){s&&function(e){S.apply(this,arguments)}(s)}),[s]);var Z,T,y=[{text:"Home",url:"/"},{text:"Shop",url:"/shop"},{text:t?t.title:"Loading..."}];return console.log("single product",t),w?Z=(0,n.jsx)(h.Z,{}):t?(Z=(0,n.jsx)(u.Z,{product:t}),T=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(O.Z,{}),(0,n.jsx)(v,{})]})):T=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(k,{}),(0,n.jsx)(v,{})]}),(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(p.Z,{header:T,title:t?t.title:"Loading...",children:[(0,n.jsx)(a.Z,{breacrumb:y,layout:"fullwidth"}),(0,n.jsxs)("div",{className:"ps-page--product",children:[(0,n.jsxs)("div",{className:"ps-container",children:[(0,n.jsxs)("div",{className:"ps-page__container section-white mb-5",children:[(0,n.jsx)("div",{className:"ps-page__left",children:Z}),(0,n.jsx)("div",{className:"ps-page__right",children:(0,n.jsx)(j.Z,{})})]}),(0,n.jsx)("div",{className:"ps-page__container section-white mb-5",children:(0,n.jsx)(d.Z,{product_id:t?t.product_id:"",category_id:t?t.category_id:"",seller_id:t?t.seller_id:"",total_review:t&&t.total_review})})]}),(0,n.jsx)("div",{className:"mb-4",children:N&&(0,n.jsx)(x.Z,{endPoint:"/category_wise_product",dealTitle:"Related Products",_cat:N,_link:"/product/recommended-product"})})]})]})})}},79264:function(e,s,i){"use strict";i.d(s,{aL:function(){return o},Kp:function(){return c},QN:function(){return l},Wm:function(){return a}});var t=i(85893),r=(i(67294),i(60114)),n=i(87754),o={dots:!1,arrows:!0,infinite:!0,speed:750,slidesToShow:5,slidesToScroll:2,nextArrow:(0,t.jsx)(r.Z,{}),prevArrow:(0,t.jsx)(n.Z,{}),responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:2,initialSlide:2}},{breakpoint:480,settings:{slidesToShow:2,slidesToScroll:2}}]},c=(r.Z,n.Z,{dots:!1,infinite:!0,speed:750,slidesToShow:6,slidesToScroll:3,arrows:!0,nextArrow:(0,t.jsx)(r.Z,{}),prevArrow:(0,t.jsx)(n.Z,{}),lazyload:!0,responsive:[{breakpoint:1366,settings:{slidesToShow:5,slidesToScroll:4,infinite:!0}},{breakpoint:1200,settings:{slidesToShow:4,slidesToScroll:3,infinite:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:2,infinite:!0,dots:!0,arrows:!1}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,dots:!0,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1,dots:!0,arrows:!1}}]}),l={infinite:!0,speed:750,autoplay:!0,slidesToShow:3,slidesToScroll:3,arrows:!0,nextArrow:(0,t.jsx)(r.Z,{}),prevArrow:(0,t.jsx)(n.Z,{}),responsive:[{breakpoint:1750,settings:{slidesToShow:3,slidesToScroll:3,dots:!0,arrows:!1}},{breakpoint:1366,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0,arrows:!1}},{breakpoint:1200,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:3,infinite:!0,dots:!0}},{breakpoint:768,settings:{slidesToShow:2,slidesToScroll:2,dots:!0,arrows:!1}},{breakpoint:480,settings:{slidesToShow:1,dots:!0,arrows:!1}}]},a={dots:!1,arrows:!0,infinite:!0,speed:1e3,slidesToShow:1,slidesToScroll:1,nextArrow:(0,t.jsx)(r.Z,{}),prevArrow:(0,t.jsx)(n.Z,{})}},96106:function(e,s,i){(window.__NEXT_P=window.__NEXT_P||[]).push(["/product/[pid]",function(){return i(57914)}])}},function(e){e.O(0,[8116,642,6066,2879,453,7428,4740,1069,5786,2901,9774,2888,179],(function(){return s=96106,e(e.s=s);var s}));var s=e.O();_N_E=s}]);