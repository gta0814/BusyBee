(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],{152:function(e,t,c){},230:function(e,t,c){"use strict";c.r(t);var i=c(0),a=c.n(i),s=c(27),n=c.n(s),l=(c(152),c(90)),r=c(88),o=c(31),j=c(234),d=c(87),h=c(245),b=(c(153),c(40)),x=c(20),p=c(79),O=c(47),u=c(246),m=c(4),g=function(e){var t=e.filterByCategory,c=e.setFilterByCategory,i=e.sortBy,a=e.setSortBy,s=e.products,n=Object(r.a)(new Set(s.map((function(e){return e.category})))).map((function(e){return Object(m.jsx)(h.a.Item,{children:Object(m.jsx)("a",{target:"_blank",onClick:function(){c(e)},children:e})})})),l=Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.a.Item,{children:Object(m.jsx)("a",{target:"_blank",onClick:function(){a("Default")},children:"Default"})}),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)("a",{target:"_blank",onClick:function(){a("PriceDesc")},children:"Price(high to low)"})}),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)("a",{target:"_blank",onClick:function(){a("PriceAsc")},children:"Price(low to high)"})})]}),o=Object(m.jsxs)(h.a,{children:[Object(m.jsx)(h.a.Item,{children:Object(m.jsx)("a",{target:"_blank",onClick:function(){c("All")},children:"All"})}),n]});return Object(m.jsxs)(p.a,{children:[Object(m.jsx)(O.a,{span:3,children:Object(m.jsx)(u.a,{overlay:o,children:Object(m.jsxs)("a",{children:["Filter by: ",t]})})}),Object(m.jsx)(O.a,{span:3,children:Object(m.jsx)(u.a,{overlay:l,children:Object(m.jsxs)("a",{children:["Sort by: ",i]})})})]})},f=c(236),v=c(46),y=c(238),C=c(247),w=c(248),A=f.a.Meta,I=function(e){var t=e.product,c=e.addCartItem,i=t.productName,a=t.price,s=t.category,n=t.imageUrl,l=i,r=c?[Object(m.jsxs)(v.a,{onClick:function(){return c(t)},children:["Add to cart",Object(m.jsx)(w.a,{label:"Add to cart"},"add")]})]:[];return Object(m.jsxs)(f.a,{cover:Object(m.jsx)(y.a,{src:n}),actions:r,children:[Object(m.jsx)(C.a,{children:s}),Object(m.jsx)(A,{title:l,description:"$".concat(a)})]})},S=c(239),B=c(242),M=function(e){var t=e.items,c=e.removeItem,i=e.setShowCheckout;return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{style:{padding:15},children:[Object(m.jsx)("b",{children:"Shopping Cart"}),Object(m.jsx)(S.b,{style:{marginTop:10},itemLayout:"horizontal",dataSource:t,renderItem:function(e){var t=e.productName,i=e.price,a=e.imageUrl,s=e.id;return Object(m.jsx)(S.b.Item,{actions:[Object(m.jsx)(v.a,{onClick:function(){return c(s)},children:"delete"})],children:Object(m.jsx)(S.b.Item.Meta,{avatar:Object(m.jsx)(B.a,{src:a}),title:t,description:"$".concat(i)})})}}),"Total: $",t.reduce((function(e,t){return e+t.price}),0).toFixed(2),Object(m.jsx)("br",{}),Object(m.jsx)(v.a,{type:"primary",onClick:function(){i(!0)},children:"Checkout"})]})})},k=j.a.Sider,z=j.a.Content,H=function(e){var t=e.addCartItem,c=e.products,a=e.cartItems,s=e.removeCartItem,n=e.setShowCheckout,l=Object(i.useState)("All"),r=Object(o.a)(l,2),j=r[0],d=r[1],h=Object(i.useState)("Default"),b=Object(o.a)(h,2),x=b[0],u=b[1],f=c.filter((function(e){return"All"===j||e.category===j}));return"PriceAsc"===x?f=f.sort((function(e,t){return e.price<t.price?-1:1})):"PriceDesc"===x&&(f=f.sort((function(e,t){return e.price<t.price?1:-1}))),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)(z,{style:{padding:"0 24px",minHeight:280},children:[Object(m.jsx)(g,{filterByCategory:j,setFilterByCategory:d,sortBy:x,setSortBy:u,products:c}),Object(m.jsx)(p.a,{children:f.map((function(e){return Object(m.jsx)(O.a,{span:"8",children:Object(m.jsx)(I,{product:e,addCartItem:t})})}))})]}),Object(m.jsx)(k,{width:300,theme:"light",children:Object(m.jsx)(M,{items:a,removeItem:s,setShowCheckout:n})})]})},F=c(244),N=[{productName:"Sony headset",languages:{cn:"\u7d22\u5c3c\u8033\u673a"},price:120.5,category:"Computer accessories",imageUrl:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"},{productName:"Good headset",languages:{cn:"\u8033\u673a"},price:65,category:"Computer accessories",imageUrl:"https://images.unsplash.com/photo-1484704849700-f032a568e944?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"},{productName:"Nike running shoes",languages:{cn:"\u8fd0\u52a8\u978b"},price:70.2,category:"Sports",imageUrl:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"},{productName:"Motorbike",languages:{cn:"\u6469\u6258\u8f66"},price:17320.5,category:"Transport",imageUrl:"https://images.unsplash.com/photo-1587971051803-70bf6d4ae977?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1548&q=80"},{productName:"Nike 2",languages:{cn:"\u8fd0\u52a8\u978b 2"},price:221,category:"Sports",imageUrl:"https://images.unsplash.com/photo-1515955656352-a1fa3ffcd111?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"}],L=c(241),E=c(243),V=c(237),_=c(240),q=function(e){var t=e.showCheckout,c=e.setShowCheckout,a=e.cartItems,s=Object(i.useState)(!1),n=Object(o.a)(s,2),l=n[0],r=n[1];return l?Object(m.jsx)(L.a,{title:"Success",visible:t,closable:!1,footer:null,children:Object(m.jsx)(E.a,{status:"success",title:"Order placed",subTitle:"Order number: 2017182818828182881",extra:[Object(m.jsx)(v.a,{type:"primary",onClick:function(){c(!1),r(!1)},children:"Buy Again"},"console")]})}):Object(m.jsxs)(L.a,{title:"Checkout",visible:t,onOk:function(){return r(!0)},onCancel:function(){return c(!1)},okText:"Place order",cancelText:"Cancel",children:[Object(m.jsx)(S.b,{style:{marginTop:10},itemLayout:"horizontal",dataSource:a,renderItem:function(e){var t=e.productName,c=e.price,i=e.imageUrl;return Object(m.jsx)(S.b.Item,{children:Object(m.jsx)(S.b.Item.Meta,{avatar:Object(m.jsx)(B.a,{src:i}),title:t,description:"$".concat(c)})})}}),Object(m.jsxs)(V.a,{name:"basic",initialValues:{remember:!0},onFinish:null,onFinishFailed:null,autoComplete:"off",children:[Object(m.jsx)(V.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(m.jsx)(_.a,{})}),Object(m.jsx)(V.a.Item,{label:"Phone number",name:"phone",rules:[{required:!0,message:"Please input your phone!"}],children:Object(m.jsx)(_.a,{})}),Object(m.jsx)(V.a.Item,{label:"Note",name:"note",children:Object(m.jsx)(_.a,{})})]})]})},T=c(235),P=function(){var e=Object(i.useState)(!1),t=Object(o.a)(e,2),c=t[0],a=t[1],s=function(e){var t=e.showEnquireModal,c=e.setShowEnquireModal;return Object(m.jsx)(L.a,{title:"Get a shipping quote",visible:t,onOk:function(){return c(!1)},onCancel:function(){return c(!1)},okText:"Enquire",cancelText:"Cancel",children:Object(m.jsxs)(V.a,{name:"basic",initialValues:{remember:!0},onFinish:null,onFinishFailed:null,autoComplete:"off",children:[Object(m.jsx)(V.a.Item,{label:"Name",name:"name",rules:[{required:!0,message:"Please input your name!"}],children:Object(m.jsx)(_.a,{placeholder:"Enter your name"})}),Object(m.jsx)(V.a.Item,{label:"Phone number",name:"phone",rules:[{required:!0,message:"Please input your phone!"}],children:Object(m.jsx)(_.a,{placeholder:"Enter your phone"})}),Object(m.jsx)(V.a.Item,{label:"Length",name:"length",children:Object(m.jsx)(_.a,{placeholder:"Length(cm)"})}),Object(m.jsx)(V.a.Item,{label:"Width",name:"width",children:Object(m.jsx)(_.a,{placeholder:"Width(cm)"})}),Object(m.jsx)(V.a.Item,{label:"Height",name:"height",children:Object(m.jsx)(_.a,{placeholder:"Height(cm)"})}),Object(m.jsx)(V.a.Item,{label:"Weight",name:"weight",children:Object(m.jsx)(_.a,{placeholder:"Weight(kg)"})}),Object(m.jsx)(V.a.Item,{label:"Comment",name:"comment",children:Object(m.jsx)(_.a,{})})]})})};return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("img",{src:"/BusyBee/banner2.webp",style:{position:"absolute"}}),Object(m.jsx)("div",{style:{position:"relative",marginTop:"299px",marginBottom:"12px",marginRight:"150px"},children:Object(m.jsx)("h1",{style:{fontSize:"60px",lineHeight:"normal",textAlign:"right",color:"white"},children:Object(m.jsxs)("span",{children:["SAFE,",Object(m.jsx)("br",{}),"EFFICIENT,",Object(m.jsx)("br",{}),"PROFESSIONAL,"]})})}),Object(m.jsxs)("div",{style:{position:"relative",textAlign:"left",marginLeft:"150px",color:"white"},children:[Object(m.jsx)("p",{style:{lineHeight:"1.4em",fontSize:"28px"},children:Object(m.jsx)("span",{children:"Need a logistic Service? We can help."})}),Object(m.jsx)("p",{style:{lineHeight:"1.4em",fontSize:"28px"},children:Object(m.jsx)("span",{children:Object(m.jsx)("span",{children:"Call 403-999-9999"})})})]}),Object(m.jsx)("div",{style:{zIndex:"1000",position:"relative",marginLeft:"calc((100% - 980px) * 0.5)"},children:Object(m.jsx)("img",{src:"/BusyBee/middle-banner.png"})}),Object(m.jsxs)("div",{style:{zIndex:"500",position:"relative",marginTop:"-50px",backgroundColor:"white"},children:[Object(m.jsx)("img",{src:"https://static.wixstatic.com/media/d8d9e0_6545abcec818418bb4abb2c81d990bed~mv2.jpg/v1/fill/w_658,h_768,al_c,q_85,usm_0.66_1.00_0.01/d8d9e0_6545abcec818418bb4abb2c81d990bed~mv2.webp",alt:"ING_33594_154729.jpg"}),Object(m.jsxs)("div",{style:{width:"500px",float:"right",marginTop:"150px",marginRight:"150px"},children:[Object(m.jsx)("div",{id:"comp-jvv1hhoo",className:"_2Hij5","data-testid":"richTextElement",children:Object(m.jsx)("h2",{className:"font_2",children:Object(m.jsx)("span",{children:Object(m.jsx)("span",{children:Object(m.jsx)("span",{style:{fontSize:"34px"},children:"About Little Bee Logistic Services"})})})})}),Object(m.jsx)("div",{id:"comp-jvv1inv9",className:"_2Hij5","data-testid":"richTextElement",children:Object(m.jsx)("p",{className:"font_8",children:Object(m.jsx)("span",{children:Object(m.jsx)("span",{children:Object(m.jsx)("span",{style:{fontSize:"20px"},children:"Little Bee is located in Edmonton, focuses on ocean freight between China and Canada. We strives to provide logistics solutions to its customers. With good price, high efficiency, and professional logistic services, we help customers ship their newly purchased goods from Canada to cities across China."})})})})}),Object(m.jsx)("div",{style:{marginTop:"50px"},children:Object(m.jsx)(v.a,{children:"Learn more"})}),Object(m.jsx)("div",{"data-mesh-id":"comp-jvv1fyqvinlineContent-wedge-4"})]})]}),Object(m.jsx)(p.a,{children:Object(m.jsx)(O.a,{span:"24",children:Object(m.jsxs)("div",{style:{height:"400px",lineHeight:"100px",textAlign:"center",background:"rgb(255, 228, 115)",fontWeight:"bold",fontSize:"48px"},children:["Come visit our shop.".toUpperCase(),Object(m.jsxs)(p.a,{children:[Object(m.jsx)(O.a,{span:"12",style:{fontSize:"12px",marginRight:"0px",width:"100%"},children:Object(m.jsx)("p",{children:"Our address: Find us at 123, ABC Street. Abc 31577 CA"})}),Object(m.jsx)(O.a,{span:"12",children:Object(m.jsx)("iframe",{style:{marginRight:"20px",display:"flex"},src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2373.501270683217!2d-113.4888836837542!3d53.495239171248734!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x53a018b1722368cd%3A0xbf925aa4568ac673!2s5910%2099%20St%20NW%2C%20Edmonton%2C%20AB%20T6E%203N9%2C%20Canada!5e0!3m2!1sen!2sau!4v1638009189157!5m2!1sen!2sau",width:"400",height:"280",allowfullscreen:"",loading:"lazy"})})]})]})})}),Object(m.jsxs)(p.a,{gutter:"16",children:[Object(m.jsx)(O.a,{span:"8",children:Object(m.jsx)(b.b,{to:"/shop",children:Object(m.jsx)(I,{product:N[0],addCartItem:null})})}),Object(m.jsx)(O.a,{span:"8",children:Object(m.jsx)(b.b,{to:"/shop",children:Object(m.jsx)(I,{product:N[1],addCartItem:null})})}),Object(m.jsx)(O.a,{span:"8",children:Object(m.jsx)(b.b,{to:"/shop",children:Object(m.jsx)(I,{product:N[2],addCartItem:null})})})]}),Object(m.jsx)(T.a,{children:"Shipping Quote"}),Object(m.jsxs)(p.a,{gutter:16,children:[Object(m.jsx)(O.a,{span:6}),Object(m.jsx)(O.a,{span:6,children:Object(m.jsx)(f.a,{title:"Ocean freight",bordered:!1,actions:[Object(m.jsx)(v.a,{onClick:function(){a(!0)},children:"Enquire now"})],cover:Object(m.jsx)("img",{src:"/BusyBee/shipping1.jpeg"})})}),Object(m.jsx)(O.a,{span:6,children:Object(m.jsx)(f.a,{title:"Air freight",bordered:!1,actions:[Object(m.jsx)(v.a,{onClick:function(){a(!0)},children:"Enquire now"})],cover:Object(m.jsx)("img",{src:"/BusyBee/shipping2.jpeg"})})})]}),Object(m.jsx)(s,{showEnquireModal:c,setShowEnquireModal:a})]})},W=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{children:[Object(m.jsx)("img",{style:{position:"absolute"},src:"/BusyBee/banner2.webp"}),Object(m.jsxs)("div",{style:{position:"relative",top:150,width:"80%",margin:"auto",textAlign:"center",color:"white"},children:[Object(m.jsx)("p",{style:{fontSize:"60px"},children:"Why Choose Busy Bee"}),Object(m.jsx)("p",{style:{fontSize:"36px"},children:"Busy Bee is located in Edmonton, focuses on ocean freight between China and Canada. We strives to provide logistics solutions to its customers. With good price, high efficiency, and professional logistic services, we help customers ship their newly purchased goods from Canada to cities across China. Small businesses are also important members of our logistic services. We provide small businesses with a one-stop shipping service between Canada and China."})]})]})})},D=function(){return Object(m.jsx)(m.Fragment,{children:Object(m.jsxs)("div",{style:{background:"rgb(40,41,43)"},children:[Object(m.jsx)(p.a,{children:Object(m.jsx)("h1",{style:{color:"white",fontSize:"60px",textAlign:"center",width:"100%"},children:"Logistic Services"})}),Object(m.jsxs)("div",{style:{display:"flex",height:"800px"},children:[Object(m.jsxs)("div",{style:{position:"absolute",background:"rgb(40,41,43)",height:"300px",padding:"100px"},children:[Object(m.jsxs)("svg",{preserveAspectRatio:"xMidYMid meet","data-bbox":"28 43.6 144 112.8",viewBox:"28 43.6 144 112.8",height:"50",width:"50",xmlns:"http://www.w3.org/2000/svg","data-type":"color",role:"presentation","aria-hidden":"true","aria-labelledby":"svgcid-g5mihi-rx7dgn",children:[Object(m.jsx)("title",{id:"svgcid-g5mihi-rx7dgn"}),Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{fill:"#C6A105",d:"M45.335 103.403h-6.032v-14.95h-6.031V70.512h6.031v-8.971h39.206v5.98H45.335v8.971h-6.032v5.98h6.032v20.931z","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M51.367 43.6v20.931h-6.032V43.6h6.032z","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M63.43 55.561v8.971h-6.032v-8.971h6.032z","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M54.383 76.492v5.98h-6.032v-5.98h6.032z","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M96.604 103.403h-6.031V76.492h36.19v20.931h-6.032V82.472H96.604v20.931z","data-color":"1"}),Object(m.jsx)("path",{d:"M96.604 106.394h-36.19V76.492h36.19v29.902zm-30.158-5.981h24.127V82.472H66.446v17.941z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M156.921 97.423h-6.032V82.472h-24.126v14.951h-6.032V76.492h36.19v20.931z","data-color":"1"}),Object(m.jsx)("path",{d:"M111.683 82.472h-36.19V55.561h36.19v26.911zm-30.158-5.98h24.127V61.541H81.525v14.951z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M141.842 82.472h-36.19V55.561h36.19v26.911zm-30.159-5.98h24.127V61.541h-24.127v14.951z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M148.925 133.407l-5.831-1.53c1.25-4.675 5.396-8.535 9.782-12.624 5.746-5.353 11.666-10.866 12.87-18.84h-50.084l-14.144 5.98H39.303v14.72c0 3.761.191 6.231 1.166 7.715l-5.057 3.265c-1.799-2.745-2.141-5.977-2.141-10.98v-20.7h67.015l14.144-5.98H172v2.99c0 12.221-8.314 19.965-14.994 26.19-3.74 3.484-7.274 6.775-8.081 9.794z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M150.119 139.411l-9.966-7.741c-1.038-.803-2.234-.701-3.204.269l-3.72 3.711c-3.166 3.154-7.95 3.422-11.377.619l-5.594-4.561c-1.019-.832-2.21-.774-3.191.149l-4.256 3.998c-3.229 3.034-8.005 3.154-11.351.277l-5.094-4.377c-1.004-.864-2.193-.847-3.182.035l-4.781 4.243c-3.299 2.932-8.073 2.903-11.345-.064l-4.578-4.155c-.987-.894-2.179-.926-3.185-.079l-5.289 4.453c-3.378 2.847-8.157 2.672-11.359-.412l-4.047-3.89c-.981-.94-2.174-1.007-3.197-.196l-9.614 7.694L28 134.73l9.614-7.694c3.406-2.727 8.003-2.5 11.183.558l4.047 3.89c1.001.964 2.219 1.025 3.256.146l5.291-4.453c3.331-2.812 7.924-2.716 11.162.228l4.577 4.152c1.013.914 2.229.932 3.248.02l4.781-4.243c3.263-2.897 7.853-2.941 11.158-.096l5.092 4.374c1.029.888 2.249.847 3.253-.099l4.256-3.995c3.195-3.014 7.793-3.186 11.172-.426l5.594 4.561c1.05.859 2.268.774 3.266-.219l3.718-3.711c3.141-3.136 7.746-3.452 11.205-.759l9.965 7.741-3.719 4.706z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M56.151 156.4l-3.787-4.655 9.614-7.694c3.405-2.727 8.006-2.5 11.183.558l4.045 3.89c1.004.964 2.224 1.025 3.257.146l5.291-4.453c3.334-2.809 7.922-2.71 11.161.222l4.578 4.158c1.013.914 2.228.926 3.25.02l4.78-4.243c3.265-2.903 7.855-2.941 11.158-.096l5.092 4.374c1.031.888 2.249.847 3.253-.099l4.254-3.998c3.204-3.008 7.799-3.183 11.172-.429l5.597 4.567c1.048.861 2.271.777 3.265-.219l3.718-3.711c3.14-3.136 7.747-3.449 11.203-.759l2.606 2.024-3.72 4.707-2.606-2.024c-1.032-.803-2.231-.707-3.204.269l-3.72 3.711c-3.166 3.154-7.95 3.419-11.377.619l-5.596-4.564c-1.015-.832-2.204-.768-3.191.149l-4.253 3.998c-3.232 3.034-8.005 3.151-11.351.28l-5.095-4.377c-1.003-.864-2.191-.85-3.181.032l-4.783 4.246c-3.302 2.932-8.073 2.903-11.345-.064l-4.578-4.158c-.99-.894-2.174-.926-3.185-.076l-5.289 4.453c-3.378 2.847-8.157 2.672-11.359-.412l-4.048-3.89c-.979-.94-2.174-1.01-3.195-.196l-9.614 7.694z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M123.747 106.394v5.98h-6.032v-5.98h6.032z","data-color":"1"})]})]}),Object(m.jsx)("h1",{style:{color:"white"},children:"Ocean Logistic Service"})]}),Object(m.jsxs)("div",{style:{position:"absolute",background:"rgb(40,41,43)",height:"300px",marginLeft:"49%",padding:"100px"},children:[Object(m.jsxs)("svg",{preserveAspectRatio:"xMidYMid meet","data-bbox":"31.2 29.2 137.599 141.6",viewBox:"31.2 29.2 137.599 141.6",height:"50",width:"50",xmlns:"http://www.w3.org/2000/svg","data-type":"color",role:"presentation","aria-hidden":"true","aria-labelledby":"svgcid-462m36nh5soc",children:[Object(m.jsx)("title",{id:"svgcid-462m36nh5soc"}),Object(m.jsxs)("g",{children:[Object(m.jsx)("path",{fill:"#C6A105",d:"M35.429 99.125L31.2 94.902 55.127 71.01l4.229 4.223-23.927 23.892z","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M104.218 170.8l-4.229-4.223 23.927-23.892 4.229 4.223-23.927 23.892z","data-color":"1"}),Object(m.jsx)("path",{d:"M64.087 123.638l-16.917-8.446a2.984 2.984 0 0 1-1.338-4.007l4.229-8.446a2.992 2.992 0 0 1 3.166-1.61l25.378 4.223-.981 5.891-23.199-3.861-1.904 3.803 14.241 7.11-2.675 5.343z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M86.577 153.517a2.99 2.99 0 0 1-2.678-1.651l-8.458-16.892 5.351-2.671 7.121 14.221 3.809-1.902-3.867-23.165 5.9-.98 4.229 25.341a2.984 2.984 0 0 1-1.612 3.161l-8.458 4.223a3.013 3.013 0 0 1-1.337.315z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M94.297 91.402l-14.51-14.486-29.985-16.694a2.983 2.983 0 0 1-1.533-2.607v-8.446c0-.898.406-1.753 1.107-2.319a3.002 3.002 0 0 1 2.497-.604L122.4 61.027l-1.227 5.845L54.25 52.847v3.016l28.813 16.041c.24.134.461.3.657.496l14.805 14.781-4.228 4.221z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M150.018 150.77h-8.458a2.988 2.988 0 0 1-2.611-1.531l-16.718-29.94-14.507-14.489 4.229-4.223 14.802 14.784c.196.195.362.417.497.656l16.064 28.771h3.02L132.29 77.973l5.853-1.225 14.802 70.424a2.974 2.974 0 0 1-.605 2.494 2.993 2.993 0 0 1-2.322 1.104z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{d:"M65.405 139.489c-1.732 0-3.125-.545-4.209-1.627-3.131-3.126-1.776-8.811 4.261-17.89 3.923-5.897 9.72-12.967 14.773-18.009l57.1-57.017c5.485-5.477 22.685-19.572 29.607-12.672 6.902 6.897-7.205 24.087-12.691 29.564l-57.1 57.017c-5.05 5.045-12.13 10.835-18.036 14.751-5.942 3.941-10.431 5.883-13.705 5.883zm.114-5.944c3.557.26 17.159-8.685 27.399-18.913l57.1-57.017c9.773-9.758 13.949-19.858 12.691-21.118-1.253-1.257-11.373 2.914-21.149 12.672l-57.1 57.017c-10.249 10.231-19.181 23.88-18.941 27.359z",fill:"#C6A105","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M107.209 137.949l-4.229-4.223 11.963-11.946 4.229 4.223-11.963 11.946z","data-color":"1"}),Object(m.jsx)("path",{fill:"#C6A105",d:"M83.282 48.355l-4.229-4.223L94.007 29.2l4.23 4.223-14.955 14.932z","data-color":"1"})]})]}),Object(m.jsx)("h1",{style:{color:"white"},children:"Air Cargo Services"})]}),Object(m.jsx)("img",{style:{width:"50%"},src:"/BusyBee/service1.webp"}),Object(m.jsx)("img",{style:{width:"50%"},src:"/BusyBee/service2.webp"})]}),Object(m.jsx)("div",{style:{zIndex:"1000",position:"relative",marginLeft:"calc((100% - 980px) * 0.5)",marginBottom:"500px"},children:Object(m.jsx)("img",{src:"/BusyBee/service3.png"})})]})})},G=c(33),U=j.a.Header,R=j.a.Content,Y=j.a.Footer,$=d.a.Option;var J=function(){var e=Object(i.useState)([]),t=Object(o.a)(e,2),c=t[0],a=t[1],s=Object(i.useState)(!1),n=Object(o.a)(s,2),p=n[0],O=n[1],u=Object(i.useState)(localStorage.getItem("language")),g=Object(o.a)(u,2),f=(g[0],g[1],Object(G.b)());return Object(m.jsx)(j.a,{children:Object(m.jsxs)(b.a,{history:f,children:[Object(m.jsx)(U,{className:"header",children:Object(m.jsxs)(h.a,{theme:"dark",mode:"horizontal",children:[Object(m.jsx)(h.a.Item,{children:Object(m.jsx)(b.b,{to:"",children:Object(m.jsx)("img",{height:"40px",width:"40px",src:"/BusyBee/logo.jpeg"})})},"1"),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)(b.b,{to:"",children:"Home"})},"2"),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)(b.b,{to:"/shop",children:"Products"})},"3"),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)(b.b,{to:"/services",children:"Services"})},"5"),Object(m.jsx)(h.a.Item,{children:Object(m.jsx)(b.b,{to:"/about",children:"About"})},"6"),Object(m.jsx)(h.a.Item,{disabled:!0,children:Object(m.jsxs)(d.a,{defaultValue:"en",style:{width:120},onChange:null,children:[Object(m.jsx)($,{value:"en",children:"English"}),Object(m.jsx)($,{value:"cn",children:"\u4e2d\u6587"})]})},"4")]})}),Object(m.jsx)(R,{style:{padding:"0 30px"},children:Object(m.jsxs)(j.a,{className:"site-layout-background",style:{padding:"24px 0"},children:[Object(m.jsxs)(x.c,{children:[Object(m.jsx)(x.a,{path:"/shop",element:Object(m.jsx)(H,{addCartItem:function(e){console.log("cartItems",[].concat(Object(r.a)(c),[Object(l.a)(Object(l.a)({},e),{},{id:Object(F.a)()})])),a([].concat(Object(r.a)(c),[Object(l.a)(Object(l.a)({},e),{},{id:Object(F.a)()})]))},setShowCheckout:O,removeCartItem:function(e){a(c.filter((function(t){return t.id!==e})))},cartItems:c,products:N})}),Object(m.jsx)(x.a,{path:"/services",element:Object(m.jsx)(D,{})}),Object(m.jsx)(x.a,{path:"/about",element:Object(m.jsx)(W,{})}),Object(m.jsx)(x.a,{path:"*",element:Object(m.jsx)(P,{})})]}),Object(m.jsx)(q,{showCheckout:p,setShowCheckout:O,cartItems:c})]})}),Object(m.jsx)(Y,{style:{textAlign:"center"},children:"@Max 2021 - Prototype shopping cart application"})]})})},Q=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,249)).then((function(t){var c=t.getCLS,i=t.getFID,a=t.getFCP,s=t.getLCP,n=t.getTTFB;c(e),i(e),a(e),s(e),n(e)}))};n.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(J,{})}),document.getElementById("root")),Q()}},[[230,1,2]]]);
//# sourceMappingURL=main.5e321086.chunk.js.map