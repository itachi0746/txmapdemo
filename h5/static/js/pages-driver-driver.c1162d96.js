(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-driver-driver"],{"0186":function(t,i,n){"use strict";n.d(i,"b",(function(){return e})),n.d(i,"c",(function(){return r})),n.d(i,"a",(function(){return a}));var a={uniIcons:n("3e6c").default},e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"header flex"},[a("v-uni-image",{staticClass:"headimg",attrs:{src:n("2efd")}}),a("v-uni-view",{staticClass:"info"},[a("v-uni-view",{staticClass:"userNickName"}),a("v-uni-view",{staticClass:"location flex"})],1)],1),a("v-uni-view",{staticClass:"main"},[a("v-uni-view",{staticClass:"navbar"},[a("v-uni-view",{staticClass:"navbar_sub flex"},[a("v-uni-text",[t._v("物流助手司机端")]),a("v-uni-view",{staticClass:"checkout flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.checkout.apply(void 0,arguments)}}},[a("v-uni-image",{attrs:{src:n("f374")}}),a("v-uni-text",{staticClass:"u-center"},[t._v("切换角色")])],1)],1)],1),a("v-uni-view",{staticClass:"pd10"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{autoplay:!0,interval:5e3}},[a("v-uni-swiper-item",[a("v-uni-image",{staticClass:"swiper-img",staticStyle:{width:"100%"},attrs:{src:n("393f")}})],1)],1),a("v-uni-view",{staticClass:"options flex",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.clockIn.apply(void 0,arguments)}}},[a("v-uni-view",{staticClass:"left flex"},[a("v-uni-image",{staticClass:"options-img",attrs:{src:n("2833")}}),a("v-uni-view",{staticClass:"list"},[a("v-uni-view",{staticStyle:{"margin-bottom":"8px"}},[t._v("在途打卡")]),a("v-uni-view",{staticClass:"subtext"},[t._v("在运载途中打卡")])],1)],1),a("uni-icons",{attrs:{type:"forward",size:"30",color:"gray"}})],1),a("v-uni-view",{staticClass:"msg"},[t._v("“在途打卡”是供物流车辆司机在运输途中打卡，记录运输途径和时间")])],1)],1)],1)},r=[]},2611:function(t,i,n){"use strict";n("6a54"),Object.defineProperty(i,"__esModule",{value:!0}),i.default=void 0;var a={data:function(){return{}},onLoad:function(){},methods:{checkout:function(){uni.redirectTo({url:"../index/index"})},clockIn:function(){uni.navigateTo({url:"../search/search?page=saleorderlist"})}}};i.default=a},2833:function(t,i,n){t.exports=n.p+"static/loca.png"},"2efd":function(t,i,n){t.exports=n.p+"static/driver.png"},"393f":function(t,i,n){t.exports=n.p+"static/driver_poster2.png"},9657:function(t,i,n){"use strict";n.r(i);var a=n("2611"),e=n.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return a[t]}))}(r);i["default"]=e.a},a010:function(t,i,n){"use strict";n.r(i);var a=n("0186"),e=n("9657");for(var r in e)["default"].indexOf(r)<0&&function(t){n.d(i,t,(function(){return e[t]}))}(r);n("eec8");var s=n("828b"),c=Object(s["a"])(e["default"],a["b"],a["c"],!1,null,"36124fc2",null,!1,a["a"],void 0);i["default"]=c.exports},bd31:function(t,i,n){var a=n("dafc");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var e=n("967d").default;e("ce8155ac",a,!0,{sourceMap:!1,shadowMode:!1})},dafc:function(t,i,n){var a=n("c86c");i=a(!1),i.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.header[data-v-36124fc2]{background-color:#ed6622;padding:%?40?%;justify-content:flex-start;color:#fff}.info .location[data-v-36124fc2]{justify-content:flex-start;font-size:%?28?%;margin-top:%?12?%}.headimg[data-v-36124fc2]{height:%?180?%;width:%?180?%;border-radius:%?200?%;border:1px solid #ed6622;overflow:hidden;margin-right:%?20?%}.userNickName[data-v-36124fc2]{color:#fff;font-size:%?32?%;font-weight:700}.navbar[data-v-36124fc2]{background-color:#ed6622}.navbar_sub[data-v-36124fc2]{padding:%?20?% %?30?%;background-color:#fff;border:1px solid #fff;border-top-right-radius:%?44?%;border-top-left-radius:%?44?%;font-size:%?32?%}.navbar_sub uni-image[data-v-36124fc2]{width:%?50?%;height:%?50?%}.swiper[data-v-36124fc2]{margin-top:%?20?%;height:%?300?%}.options[data-v-36124fc2]{margin-top:%?20?%;background-color:#ededed;padding:%?50?% %?20?%;border-radius:%?24?%}.options .left[data-v-36124fc2]{justify-content:flex-start}.msg[data-v-36124fc2]{margin-top:%?100?%;font-size:%?24?%;color:#999;text-align:left;padding:%?12?%}.swiper-img[data-v-36124fc2]{width:100%;height:%?300?%}.options-img[data-v-36124fc2]{width:%?100?%;height:%?100?%;margin-right:%?20?%}.pd10[data-v-36124fc2]{padding:0 %?20?%}.u-center[data-v-36124fc2]{font-size:%?28?%}',""]),t.exports=i},eec8:function(t,i,n){"use strict";var a=n("bd31"),e=n.n(a);e.a},f374:function(t,i,n){t.exports=n.p+"static/checkout.png"}}]);