(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-dealers-dealers"],{"1bc7":function(e,t,a){"use strict";a.r(t);var n=a("b396"),i=a.n(n);for(var r in n)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(r);t["default"]=i.a},2337:function(e,t,a){e.exports=a.p+"static/dealers_poster2.png"},"487a":function(e,t,a){"use strict";a.d(t,"b",(function(){return n})),a.d(t,"c",(function(){return i})),a.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"header flex"},[n("v-uni-image",{staticClass:"headimg",attrs:{src:a("5a40")}}),n("v-uni-view",{staticClass:"info"},[n("v-uni-view",{staticClass:"userNickName"}),n("v-uni-view",[e.userInfo?n("v-uni-text",[e._v(e._s(e.userInfo.customerName))]):e._e()],1)],1)],1),n("v-uni-view",{staticClass:"main"},[n("v-uni-view",{staticClass:"navbar"},[n("v-uni-view",{staticClass:"navbar_sub flex"},[n("v-uni-text",[e._v("物流助手经销商端")]),n("v-uni-view",{staticClass:"checkout flex",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkout.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:a("f374")}}),n("v-uni-text",{staticClass:"u-center"},[e._v("个人中心")])],1)],1)],1),n("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0,interval:5e3}},[n("v-uni-swiper-item",[n("v-uni-image",{staticClass:"swiper-img",staticStyle:{width:"100%"},attrs:{src:a("2337")}})],1)],1),n("v-uni-view",{staticClass:"options flex"},e._l(e.optionList,(function(t,a){return n("v-uni-view",{key:a,staticClass:"items",on:{click:function(a){arguments[0]=a=e.$handleEvent(a),e.goto(t.type)}}},[n("v-uni-image",{staticClass:"options-img",attrs:{src:t.img}}),n("v-uni-view",[n("v-uni-view",{staticClass:"title"},[e._v(e._s(t.title))]),n("v-uni-view",{staticClass:"subtext"},[e._v(e._s(t.tips))])],1)],1)})),1)],1)],1)},i=[]},"5a40":function(e,t,a){e.exports=a.p+"static/dealers.png"},b396:function(e,t,a){"use strict";a("6a54");var n=a("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("2634")),r=n(a("2fdc")),s={data:function(){return{userInfo:null,optionList:[{img:"../../static/arrive.png",title:"我的订单",tips:"确认已送达货物",type:"1"}]}},onLoad:function(){uni.getStorageSync("userInfo")?this.userInfo=JSON.parse(uni.getStorageSync("userInfo")):console.log("缺少用户信息")},methods:{goto:function(e){var t=this;"1"==e?uni.navigateTo({url:"../myOrders/myOrders"}):"2"==e?uni.scanCode({success:function(e){console.log(e),"scanCode:ok"==e.errMsg&&(e.path||(e.path="pages/index/index?scene=7c46a61c40e84a16b04b742b7c0cb61d"),t.getQueryParams(e.path))},fail:function(e){console.log(e,"err")}}):uni.navigateTo({url:"../search/search?page=myappraise"})},getQueryParams:function(e){var t=this;return(0,r.default)((0,i.default)().mark((function a(){var n,r,s,o;return(0,i.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return uni.showLoading({title:"loading",mask:!0}),e=e.split("=")[1],a.next=4,t.api.post("getWechatCode",{id:e});case 4:if(n=a.sent,uni.hideLoading(),n){a.next=8;break}return a.abrupt("return");case 8:r=JSON.parse(n.data.params),s=r.carNo,o=r.deliveryNo,uni.navigateTo({url:"../appraiseNew/appraiseNew?deliveryNo="+o+"&carNo="+s});case 10:case"end":return a.stop()}}),a)})))()},checkout:function(){uni.navigateTo({url:"../userCenter/userCenter"})}}};t.default=s},b76e:function(e,t,a){var n=a("c86c");t=n(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-98d8ec9e]{background-color:#ed6622;padding:%?40?%;justify-content:flex-start;color:#fff}.info[data-v-98d8ec9e]{width:calc(100% - %?210?%);word-wrap:break-word}.info .location[data-v-98d8ec9e]{justify-content:flex-start;font-size:%?28?%;margin-top:%?12?%}.headimg[data-v-98d8ec9e]{height:%?180?%;width:%?180?%;border-radius:%?200?%;border:1px solid #ed6622;overflow:hidden;margin-right:%?20?%}.userNickName[data-v-98d8ec9e]{color:#fff;font-size:%?32?%;font-weight:700;margin-bottom:%?30?%}.navbar[data-v-98d8ec9e]{background-color:#ed6622}.u-center[data-v-98d8ec9e]{font-size:%?28?%}.navbar_sub[data-v-98d8ec9e]{padding:%?20?% %?30?%;background-color:#fff;border:1px solid #fff;border-top-right-radius:%?44?%;border-top-left-radius:%?44?%;font-size:%?32?%;color:#333}.navbar_sub uni-image[data-v-98d8ec9e]{width:%?50?%;height:%?50?%}.swiper[data-v-98d8ec9e]{margin:%?30?% %?20?% 0;height:%?300?%}.options[data-v-98d8ec9e]{flex-wrap:wrap;margin:%?20?%}.options .items[data-v-98d8ec9e]{display:flex;align-items:center;width:45%;margin-bottom:%?20?%;background-color:#f8f8f8;border-radius:%?16?%;padding:%?30?% %?10?%}.options .title[data-v-98d8ec9e]{font-size:%?32?%;color:#333;margin-bottom:%?16?%}.msg[data-v-98d8ec9e]{margin-top:%?100?%;font-size:%?24?%;color:#999;text-align:left;padding:%?12?%}.swiper-img[data-v-98d8ec9e]{width:100%;height:%?300?%}.options-img[data-v-98d8ec9e]{width:%?100?%;height:%?100?%;margin-right:%?20?%}',""]),e.exports=t},bea5:function(e,t,a){"use strict";a.r(t);var n=a("487a"),i=a("1bc7");for(var r in i)["default"].indexOf(r)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(r);a("f734");var s=a("828b"),o=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"98d8ec9e",null,!1,n["a"],void 0);t["default"]=o.exports},ee56:function(e,t,a){var n=a("b76e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=a("967d").default;i("50930ba4",n,!0,{sourceMap:!1,shadowMode:!1})},f374:function(e,t,a){e.exports=a.p+"static/checkout.png"},f734:function(e,t,a){"use strict";var n=a("ee56"),i=a.n(n);i.a}}]);