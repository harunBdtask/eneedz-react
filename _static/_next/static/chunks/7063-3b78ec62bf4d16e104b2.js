(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[7063],{32230:function(e,t,s){"use strict";var c=s(85893),n=s(41664);s(67294);t.Z=function(e){var t=e.breacrumb,s=e.layout,r=e.campaign_name;return(0,c.jsx)("div",{className:"ps-breadcrumb",children:(0,c.jsx)("div",{className:"fullwidth"===s?"ps-container":"container",children:(0,c.jsxs)("ul",{className:"breadcrumb",children:[t.map((function(e,t){return e.url?(0,c.jsx)("li",{children:(0,c.jsx)(n.default,{href:e.url,children:(0,c.jsx)("a",{children:e.text})})},e.text):(0,c.jsx)("li",{children:e.text},t)})),r&&(0,c.jsx)("li",{children:(0,c.jsx)("strong",{children:r})})]})})})}},99207:function(e,t,s){"use strict";s.d(t,{Z:function(){return d}});var c=s(85893),n=s(41664),r=(s(67294),s(10642)),i=s(14494),a=s(18428),o=s(26621),l=(0,i.$j)((function(e){return e}))((function(e){var t=e.ecomerce,s=e.product,n=(0,o.Z)().price,i=(0,a.Z)().addItem;return(0,c.jsxs)("div",{className:"ps-product__shopping",children:[n(s),(0,c.jsx)("a",{className:"ps-btn",href:"#",onClick:function(e){return function(e){e.preventDefault(),i({id:s.id,quantity:1},t.cartItems,"cart")}(e)},children:"Add to cart"}),(0,c.jsx)("ul",{className:"ps-product__actions",children:(0,c.jsx)("li",{children:(0,c.jsxs)("a",{href:"#",onClick:function(e){return function(e){e.preventDefault(),i({id:s.id},t.wishlistItems,"wishlist"),r.Z.success({centered:!0,title:"Success!",content:"This item has been added to your wishlist"}).update}(e)},children:[(0,c.jsx)("i",{className:"icon-heart"})," Wishlist"]})})})]})})),d=function(e){var t=e.product,s=(0,o.Z)(),r=s.thumbnailImage,i=(s.price,s.title);s.badge;return(0,c.jsxs)("div",{className:"ps-product ps-product--wide",children:[(0,c.jsx)("div",{className:"ps-product__thumbnail",children:(0,c.jsx)(n.default,{href:"/product/[pid]",as:"/product/".concat(t.product_id,"-").concat(t.campaign_id),children:(0,c.jsx)("a",{children:r(t)})})}),(0,c.jsxs)("div",{className:"ps-product__container",children:[(0,c.jsxs)("div",{className:"ps-product__content",children:[i(t),(null===t||void 0===t?void 0:t.seller_id)&&(0,c.jsxs)("p",{className:"ps-product__vendor",children:[(0,c.jsx)("b",{children:"Sold by:"})," ",(0,c.jsx)(n.default,{href:"/brands/".concat(t.seller_id),children:(0,c.jsx)("a",{children:t.seller_store_name})})]}),(0,c.jsxs)("ul",{className:"ps-product__desc",children:[(0,c.jsx)("li",{children:"Unrestrained and portable active stereo speaker"}),(0,c.jsx)("li",{children:" Free from the confines of wires and chords"}),(0,c.jsx)("li",{children:" 20 hours of portable capabilities"}),(0,c.jsx)("li",{children:"Double-ended Coil Cord with 3.5mm Stereo Plugs Included"}),(0,c.jsx)("li",{children:" 3/4\u2033 Dome Tweeters: 2X and 4\u2033 Woofer: 1X"})]})]}),(0,c.jsx)(l,{product:t})]})]})}},68697:function(e,t,s){"use strict";var c=s(85893),n=(s(67294),s(33860));t.Z=function(){return(0,c.jsxs)("div",{className:"ps-skeleton ps-skeleton--product",children:[(0,c.jsx)(n.Z.Input,{active:!0,size:350,style:{height:160}}),(0,c.jsx)(n.Z,{paragraph:{rows:4,title:!0}})]})}},29563:function(e,t,s){"use strict";s.d(t,{Z:function(){return g}});var c=s(85893),n=s(2864),r=s(41664),i=s(11163),a=s(67294),o=s(14494),l=s(39249),d=function(e){var t=e.setProductItems,s=e.campaignID;return(0,c.jsxs)("select",{className:"ps-select form-control mr-3","data-placeholder":"Sort Items",onChange:function(e){!function(e){var c="";1==e?c=JSON.stringify({per_page:1e3,page_offset:0,campaign_id:s,latest:"1",price:""}):2==e?c=JSON.stringify({per_page:1e3,page_offset:0,campaign_id:s,latest:"",price:"low_to_high"}):3==e&&(c=JSON.stringify({per_page:1e3,page_offset:0,campaign_id:s,latest:"",price:"high_to_low"})),fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/campaign_products"),{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){200===e.response_status&&t(e.data)})).catch((function(e){return console.log("error",e)}))}(e.target.value)},children:[(0,c.jsx)("option",{value:1,children:"Sort by latest"}),(0,c.jsx)("option",{value:2,children:"Sort by price: low to high"}),(0,c.jsx)("option",{value:3,children:"Sort by price: high to low"})]})},u=s(41312),p=s(99207),h=s(68697),f=s(34255),m=s(18428),_=s(26621),x=s(7864),j=s(45474),g=(0,o.$j)((function(e){return e}))((function(e){var t=e.products,s=e.columns,o=void 0===s?4:s,g=e.ecomerce,v=e.categoryId,N=e.campaignID,b=e.sellerId,y=(0,i.useRouter)(),w=(0,_.Z)().thumbnailImage,S=(0,a.useState)(!0),I=S[0],Z=S[1],k=(0,a.useState)(null),C=k[0],O=k[1],P=(0,a.useState)(0),D=P[0],T=P[1],J=(0,a.useState)(!1),q=J[0],z=(J[1],(0,a.useState)(1)[0]),A=(0,a.useState)("col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6"),E=A[0],V=A[1],W=(0,m.Z)().addItem;function X(e){e.preventDefault(),Z(!I)}var $;if((0,a.useEffect)((function(){!function(){switch(o){case 2:return V("col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6 "),3;case 4:return V("col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6"),4;case 6:return V("col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6"),6;default:V("col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6")}}(),T(t.length),O(t)}),[t]),q){var B=(0,x.Z)(12).map((function(e){return(0,c.jsx)("div",{className:E,children:(0,c.jsx)(h.Z,{})},e)}));$=(0,c.jsx)("div",{className:"row",children:B})}else if(C&&C.length>0)if(I){var F=C.map((function(e,s){return(0,c.jsx)("div",{className:"col-xl-2 col-lg-3 col-sm-4 col-6",children:(0,c.jsxs)("div",{className:"ps-product ps-product--inner",children:[(0,c.jsxs)("div",{className:"ps-product__thumbnail",children:[(0,c.jsx)(r.default,{href:"/product/[pid]",as:"/product/".concat(e.product_id,"-").concat(e.campaign_id),children:(0,c.jsx)("a",{children:w(e)})}),"1"===e.on_sale&&(0,c.jsxs)("small",{className:"product-offer-badge",children:["%",e.discount_percent," Off"]}),"1"===e.on_sale&&(0,c.jsxs)("small",{className:"product-offer-badge discount flex-column",children:[(0,c.jsx)("span",{className:"d-flex align-items-center justify-content-center",children:"off \u09f3"})," ",e.discount_amount]}),(0,c.jsx)(u.Z,{product:e})]}),(0,c.jsxs)("div",{className:"ps-product__container",children:[(0,c.jsx)(r.default,{href:"/store/".concat(e.seller_id),children:(0,c.jsxs)("a",{className:"ps-product__vendor",style:{display:"flex",justifyContent:"space-between"},children:[" ",(0,c.jsx)("span",{children:e.seller_store_name}),"0"===e.quantity?(0,c.jsx)("span",{style:{color:"red"},children:"Out Of stock"}):""]})}),(0,c.jsxs)("div",{className:"ps-product__content",children:[(0,j.cg)(e),(0,c.jsx)(r.default,{href:"/product/[pid]",as:"/product/".concat(e.product_id,"-").concat(e.category_id),children:(0,c.jsx)("a",{title:e.title,className:"product-title",children:e.title})}),(0,c.jsxs)("div",{className:"ps-product__rating form-group__rating",children:[(0,c.jsx)(n.Z,{disabled:!0,allowHalf:!0,defaultValue:e.ratings}),(0,c.jsx)("span",{children:e.ratingCount})]}),(0,c.jsxs)("div",{className:"d-flex justify-content-between flex-wrap",children:[(0,c.jsx)("button",{className:"ps-btn ps-btn--sm mr-2",onClick:function(){!function(e){"0"!==t[e].quantity&&(W({id:t[e].product_id,campaign_id:t[e].campaign_id,quantity:z},g.cartItems,"cart"),l.Am.success("The product added into your cart!"))}(s)},children:"Add to Cart"}),(0,c.jsx)("button",{className:"ps-btn ps-btn--sm",onClick:function(){!function(e){W({id:t[e].product_id,campaign_id:t[e].campaign_id,quantity:z},g.cartItems,"cart"),setTimeout((function(){y.push("/account/shopping-cart")}),1e3)}(s)},children:"Buy Now"})]})]})]})]})},e.product_id)}));$=(0,c.jsx)("div",{className:"ps-shop-items",children:(0,c.jsx)("div",{className:"row",children:F})})}else $=C.map((function(e){return(0,c.jsx)(p.Z,{product:e})}));else $=(0,c.jsx)("p",{children:"No product found."});return(0,c.jsxs)("div",{className:"ps-shopping pb-5",children:[(0,c.jsxs)("div",{className:"ps-shopping__header mt-4 mb-4",children:[(0,c.jsxs)("p",{children:[(0,c.jsx)("strong",{className:"mr-2",children:D}),"Products found"]}),(0,c.jsx)("div",{className:"ps-shopping__actions",children:(0,c.jsxs)("div",{className:"ps-shopping__view",children:[function(){var e;return(null===t||void 0===t?void 0:t.length)>0&&(null===t||void 0===t||t.map((function(t){e="1"===t.campaign_id?(0,c.jsx)(f.Z,{setProductItems:O,categoryId:v,sellerId:b}):(0,c.jsx)(d,{setProductItems:O,campaignID:N,sellerId:b})}))),e}(),(0,c.jsx)("p",{children:"View"}),(0,c.jsxs)("ul",{className:"ps-tab-list",children:[(0,c.jsx)("li",{className:!0===I?"active":"",children:(0,c.jsx)("a",{href:"#",onClick:function(e){return X(e)},children:(0,c.jsx)("i",{className:"icon-grid"})})}),(0,c.jsx)("li",{className:!0!==I?"active":"",children:(0,c.jsx)("a",{href:"#",onClick:function(e){return X(e)},children:(0,c.jsx)("i",{className:"icon-list4"})})})]})]})})]}),(0,c.jsx)("div",{className:"section-white",children:$})]})}))},34255:function(e,t,s){"use strict";var c=s(85893);t.Z=function(e){var t=e.setProductItems,s=e.isCampaign,n=e.categoryId,r=e.sellerId;return(0,c.jsxs)("select",{className:"ps-select form-control mr-3","data-placeholder":"Sort Items",onChange:function(e){!function(e){var c="";1==e?c=JSON.stringify({per_page:1e3,page_offset:0,category_id:n,seller_id:r,latest:"1",price:""}):2==e?c=JSON.stringify({per_page:1e3,page_offset:0,category_id:n,seller_id:r,latest:"",price:"low_to_high"}):3==e&&(c=JSON.stringify({per_page:1e3,page_offset:0,category_id:n,seller_id:r,latest:"",price:"high_to_low"})),s?fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/campaign_products"),{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){200===e.response_status&&t(e.data)})).catch((function(e){return console.log("error",e)})):void 0!=n?fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/category_wise_product"),{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){200===e.response_status&&t(e.data)})).catch((function(e){return console.log("error",e)})):void 0!=r&&fetch("".concat("https://soft35.bdtask.com/eneedz_api/api/react/website_api","/store_wise_products"),{method:"POST",body:c}).then((function(e){return e.json()})).then((function(e){200===e.response_status&&t(e.data)})).catch((function(e){return console.log("error",e)}))}(e.target.value)},children:[(0,c.jsx)("option",{value:1,children:"Sort by latest"}),(0,c.jsx)("option",{value:2,children:"Sort by price: low to high"}),(0,c.jsx)("option",{value:3,children:"Sort by price: high to low"})]})}},68346:function(e,t,s){"use strict";var c=s(85893),n=(s(67294),s(61614));t.Z=function(){return(0,c.jsx)("footer",{className:"ps-footer",children:(0,c.jsx)("div",{className:"container",children:(0,c.jsx)(n.Z,{})})})}}}]);