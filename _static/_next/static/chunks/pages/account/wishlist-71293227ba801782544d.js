(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2743],{32230:function(e,t,s){"use strict";var i=s(85893),r=s(41664);s(67294);t.Z=function(e){var t=e.breacrumb,s=e.layout,n=e.campaign_name;return(0,i.jsx)("div",{className:"ps-breadcrumb",children:(0,i.jsx)("div",{className:"fullwidth"===s?"ps-container":"container",children:(0,i.jsxs)("ul",{className:"breadcrumb",children:[t.map((function(e,t){return e.url?(0,i.jsx)("li",{children:(0,i.jsx)(r.default,{href:e.url,children:(0,i.jsx)("a",{children:e.text})})},e.text):(0,i.jsx)("li",{children:e.text},t)})),n&&(0,i.jsx)("li",{children:(0,i.jsx)("strong",{children:n})})]})})})}},70889:function(e,t,s){"use strict";var i=s(85893),r=s(41664),n=(s(67294),s(26621));t.Z=function(e){var t=e.product,s=(0,n.Z)(),c=s.thumbnailImage,l=s.title;return(0,i.jsxs)("div",{className:"ps-product--cart",children:[(0,i.jsx)("div",{className:"ps-product__thumbnail",children:(0,i.jsx)(r.default,{href:"/product/[pid]",as:"/product/".concat(t.id),children:(0,i.jsx)("a",{children:c(t)})})}),(0,i.jsx)("div",{className:"ps-product__content",children:l(t)})]})}},45973:function(e,t,s){"use strict";var i=s(85893),r=s(9008),n=(s(67294),s(53010)),c=s(33875),l=s(84654),a=(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(l.Z,{}),(0,i.jsx)(c.Z,{})]}),d=(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(n.Z,{})});t.Z=function(e){var t,s=e.header,n=void 0===s?a:s,c=e.footer,l=void 0===c?d:c,h=e.children,o=e.title,u=void 0===o?"Page":o;return t=""!==u?"E-needz | "+u:"E-needz | Multipurpose Marketplace React Ecommerce Template",(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(r.default,{children:(0,i.jsx)("title",{children:t})}),n,h,l]})}},85203:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return u}});var i=s(85893),r=s(67294),n=s(32230),c=s(45973),l=s(14494),a=s(70889),d=s(18428),h=(0,l.$j)((function(e){return e}))((function(e){var t,s=e.ecomerce,n=(0,d.Z)(),c=n.loading,l=n.products,h=n.getProducts,o=(0,d.Z)(),u=o.addItem,x=o.removeItem;return(0,r.useEffect)((function(){s.wishlistItems&&h(s.wishlistItems)}),[s]),console.log("w-products",l),l?t=(0,i.jsx)("div",{className:"table-responsive",children:(0,i.jsxs)("table",{className:"table ps-table--whishlist",children:[l.data?(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{}),(0,i.jsx)("th",{children:"Product name"}),(0,i.jsx)("th",{children:"Unit Price"}),(0,i.jsx)("th",{children:"Vendor"}),(0,i.jsx)("th",{})]})}):"",(0,i.jsx)("tbody",{children:l.data?l.data.map((function(e){return(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)("a",{href:"#",onClick:function(t){return function(e,t){e.preventDefault(),x(t,s.wishlistItems,"wishlist")}(t,e)},children:(0,i.jsx)("i",{className:"icon-cross"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(a.Z,{product:e})}),(0,i.jsxs)("td",{className:"price",children:["$",e.price]}),(0,i.jsx)("td",{children:e.vendor}),(0,i.jsx)("td",{children:(0,i.jsx)("a",{className:"ps-btn",href:"",onClick:function(t){return function(e,t){e.preventDefault(),u({id:t.product_id,category_id:t.category_id,quantity:1},s.cartItems,"cart")}(t,e)},children:"Add to cart"})})]},e.category_id)})):(0,i.jsx)("div",{style:{display:"flex",justifyContent:"center",width:"100%"},children:(0,i.jsx)("div",{className:"alert alert-danger text-center",role:"alert",children:"Wishlist is empty!"})})})]})}):c||(t=(0,i.jsx)("div",{className:"alert alert-danger",role:"alert",children:"Wishlist is empty!"})),(0,i.jsx)("div",{className:"ps-section--shopping ps-whishlist",children:(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"section-white",children:[(0,i.jsx)("div",{className:"ps-section__header justify-content-center",children:(0,i.jsx)("h1",{children:"Wishlist"})}),(0,i.jsx)("div",{className:"ps-section__content",children:t})]})})})})),o=s(53010),u=function(){return(0,i.jsx)(c.Z,{footer:(0,i.jsx)(o.Z,{}),title:"Wishlist",children:(0,i.jsxs)("div",{className:"ps-page--simple",children:[(0,i.jsx)(n.Z,{breacrumb:[{text:"Home",url:"/"},{text:"Wishlist"}]}),(0,i.jsx)(h,{})]})})}},59026:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/account/wishlist",function(){return s(85203)}])}},function(e){e.O(0,[8116,4740,9774,2888,179],(function(){return t=59026,e(e.s=t);var t}));var t=e.O();_N_E=t}]);