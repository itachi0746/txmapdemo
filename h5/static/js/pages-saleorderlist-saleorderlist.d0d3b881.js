(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-saleorderlist-saleorderlist"],{"1e21":function(e,t,i){e.exports=i.p+"static/empty.jpg"},2590:function(e,t,i){"use strict";i("6a54");var a=i("f5bd").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,i("fd3c"),i("c223"),i("8f71"),i("bf0f"),i("2797"),i("aa9c");var n=a(i("2634")),s=a(i("2fdc")),r={data:function(){return{keywords:"",carNo:"",sellectAll:!1,orderList:[],location:"定位中...",locationSuccess:!1,empty:!1,signInSuccess:!1,latitude:"",longitude:"",signTime:"",covers:[{latitude:null,longitude:null,iconPath:"../../static/loca.png",width:30,height:30}]}},onLoad:function(e){console.log(e),e.carNo&&e.deliveryNo&&(this.keywords=e.deliveryNo,this.carNo=e.carNo),this.getLocation(this,this.setMarker)},methods:{setMarker:function(e){e.covers[0].latitude=e.latitude,e.covers[0].longitude=e.longitude,console.log(e)},getOrders:function(e,t){var i=this;return(0,s.default)((0,n.default)().mark((function a(){var s;return(0,n.default)().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i.orderList=[],i.empty=!0,uni.showLoading({mask:!0}),a.next=5,i.api.post("getRelationDelivery",{carNo:e,deliveryNo:t});case 5:if(s=a.sent,uni.hideLoading(),s){a.next=9;break}return a.abrupt("return");case 9:s.data&&s.data.length>0?(s.data.map((function(e){e.checked=!0,e.show=!1,e.disabled=!1})),i.orderList=s.data,i.sellectAll=!0,i.empty=!1):(i.orderList=[],i.empty=!0);case 10:case"end":return a.stop()}}),a)})))()},search:function(){uni.navigateTo({url:"../search/search?page=saleorderlist&carNo=".concat(this.carNo,"&deliveryNo=").concat(this.keywords)})},showDetail:function(e){this.orderList[e].show=!this.orderList[e].show},isSellectAll:function(e){var t=this;this.sellectAll=!this.sellectAll,this.orderList.map((function(e){e.checked=t.sellectAll}))},selectChange:function(e){this.orderList[e].checked=!this.orderList[e].checked},scanCode:function(){var e=this;console.log("ddd"),uni.scanCode({success:function(t){console.log(t),"scanCode:ok"==t.errMsg&&(t.path||(t.path="pages/index/index?scene=7c46a61c40e84a16b04b742b7c0cb61d"),e.getQueryParams(t.path))},fail:function(e){console.log(e)}})},getQueryParams:function(e){var t=this;return(0,s.default)((0,n.default)().mark((function i(){var a,s,r,o;return(0,n.default)().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return uni.showLoading({title:"loading",mask:!0}),e=e.split("=")[1],i.next=4,t.api.post("getWechatCode",{id:e});case 4:if(a=i.sent,uni.hideLoading(),a){i.next=8;break}return i.abrupt("return");case 8:s=JSON.parse(a.data.params),r=s.carNo,o=s.deliveryNo,t.carNo=r,t.keywords=o,t.getOrders(r,o);case 12:case"end":return i.stop()}}),i)})))()},signIn:function(){var e=this;return(0,s.default)((0,n.default)().mark((function t(){var i,a,s,r;return(0,n.default)().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.locationSuccess){t.next=2;break}return t.abrupt("return",e.error("定位失败不能打卡"));case 2:if(i=e.orderList.filter((function(e){return e.checked})),!(i.length<1)){t.next=5;break}return t.abrupt("return",e.error("请勾选送货单"));case 5:return a=[],i.forEach((function(e){a.push(e.deliveryNo)})),s={address:e.location,carNo:e.carNo,deliveryNo:a.join(","),latitude:e.latitude,longitude:e.longitude},uni.showLoading({title:"数据提交中",mask:!0}),t.next=11,e.api.post("deliverySign",s);case 11:if(r=t.sent,uni.hideLoading(),r){t.next=15;break}return t.abrupt("return");case 15:e.success("打卡成功"),e.signInSuccess=!0,i.map((function(e){return e.disabled=!0})),e.orderList=i,e.signTime=r.data;case 20:case"end":return t.stop()}}),t)})))()},back:function(){uni.redirectTo({url:"../driver/driver"})}}};t.default=r},"516a":function(e,t,i){var a=i("c86c");t=a(!1),t.push([e.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-5a8fe2f5]{padding:%?12?% %?0?%;display:flex;flex-direction:column;height:calc(100vh - 44px);box-sizing:border-box;overflow-y:auto}.header[data-v-5a8fe2f5]{padding:%?20?%;position:relative}.header .searchIcon[data-v-5a8fe2f5]{position:absolute;left:%?40?%;top:%?30?%}.header .scanIcon[data-v-5a8fe2f5]{position:absolute;right:%?40?%;top:%?30?%}.header .search[data-v-5a8fe2f5]{border:1px solid #ebeef5;border-radius:%?36?%;height:%?64?%;line-height:%?64?%;padding-left:%?66?%;padding-right:%?66?%;background-color:#f8f8f8}.main[data-v-5a8fe2f5]{width:100%;margin:0 auto;flex:1;overflow-y:auto}.main .sub_headeer[data-v-5a8fe2f5]{padding:%?12?%;border-bottom:1px solid #ebeef5;margin-bottom:%?16?%}.main .sub_headeer .title[data-v-5a8fe2f5]{border-left:%?8?% solid #ed6622;padding:%?8?% %?16?%;font-size:%?32?%}.main .orderList[data-v-5a8fe2f5]{border-top:1px solid #ebeef5}.main .orderList .simple[data-v-5a8fe2f5]{position:relative;display:flex;align-items:center;padding:%?28?% %?20?%;border-bottom:1px solid #ebeef5}.main .orderList .simple .forwrad[data-v-5a8fe2f5]{position:absolute;right:%?4?%;top:%?16?%}.main .orderList .simple-r[data-v-5a8fe2f5]{display:flex;justify-content:space-between;align-items:center}.main .orderList .detail[data-v-5a8fe2f5]{background-color:#f2f2f2;padding:%?20?%;font-size:%?24?%;color:#555}.main .location[data-v-5a8fe2f5]{padding:%?24?% %?20?%;color:#ed6622;font-size:%?28?%}.empty[data-v-5a8fe2f5]{padding:%?100?% %?0?%;text-align:center}.empty uni-image[data-v-5a8fe2f5]{width:%?400?%;height:%?400?%}.successInfo[data-v-5a8fe2f5]{margin:%?40?% auto;text-align:center;color:#f60}.successInfo .title[data-v-5a8fe2f5]{font-size:%?36?%;margin-bottom:%?40?%}.sellectAll[data-v-5a8fe2f5]{font-size:%?24?%}.list-item[data-v-5a8fe2f5]{font-size:%?28?%;color:#555}.map-div[data-v-5a8fe2f5]{height:%?400?%;width:100%;-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;padding:0 %?20?%;margin-top:%?24?%}.btn-div[data-v-5a8fe2f5]{margin:0 %?20?%}',""]),e.exports=t},"5e4a":function(e,t,i){var a=i("516a");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);var n=i("967d").default;n("75e32ad6",a,!0,{sourceMap:!1,shadowMode:!1})},"62ea":function(e,t,i){"use strict";var a=i("5e4a"),n=i.n(a);n.a},"639d":function(e,t,i){"use strict";i.r(t);var a=i("2590"),n=i.n(a);for(var s in a)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(s);t["default"]=n.a},8966:function(e,t,i){"use strict";i.r(t);var a=i("f4a9"),n=i("639d");for(var s in n)["default"].indexOf(s)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(s);i("62ea");var r=i("828b"),o=Object(r["a"])(n["default"],a["b"],a["c"],!1,null,"5a8fe2f5",null,!1,a["a"],void 0);t["default"]=o.exports},f4a9:function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return s})),i.d(t,"a",(function(){return a}));var a={uniIcons:i("3e6c").default},n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"content"},[e.signInSuccess?e._e():a("v-uni-view",{staticClass:"header"},[a("uni-icons",{staticClass:"searchIcon",attrs:{type:"search",size:"22",color:"$uni-border-color"}}),a("v-uni-input",{staticClass:"search",attrs:{type:"text",value:e.keywords,placeholder:"搜索送货单号/物流单号","placeholder-class":"placeholderClass2"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.search.apply(void 0,arguments)}}})],1),a("v-uni-view",{staticClass:"main"},[e.signInSuccess?a("v-uni-view",{staticClass:"sub_headeer"},[e._v("已选打卡送货单号")]):a("v-uni-view",{staticClass:"sub_headeer flex"},[a("v-uni-view",{staticClass:"title"},[a("v-uni-text",{staticStyle:{"font-weight":"bold"}},[e._v("送货单号")]),a("v-uni-text",{staticClass:"subtext"},[e._v("（请选择送货单号打卡）")])],1),a("v-uni-view",{staticClass:"sellectAll",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.isSellectAll.apply(void 0,arguments)}}},[a("v-uni-label",[a("v-uni-radio",{attrs:{value:"1",checked:e.sellectAll,color:"#ed6622"}}),a("v-uni-text",{},[e._v("全选")])],1)],1)],1),e._l(e.orderList,(function(t,i){return a("v-uni-view",{key:i,staticClass:"orderList"},[a("v-uni-view",{staticClass:"simple"},[a("v-uni-radio",{staticClass:"radio-div",attrs:{value:t.id,checked:t.checked,disabled:t.disabled,color:"#ed6622"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectChange(i)}}}),a("v-uni-view",{staticClass:"simple-r",staticStyle:{flex:"1"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.showDetail(i)}}},[a("v-uni-text",{staticClass:"list-item"},[e._v(e._s(t.deliveryNo))]),a("uni-icons",{attrs:{type:t.show?"arrowdown":"arrowright",size:"24",color:"#d4d4d4"}})],1)],1),a("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"item.show"}],staticClass:"detail"},[a("v-uni-view",{staticClass:"msg"},[e._v("目的地："+e._s(t.address))]),a("v-uni-view",{staticClass:"msg",staticStyle:{margin:"5px 0px"}},[e._v("要求送达时间："+e._s(t.expectArriveTime))]),a("v-uni-view",{staticClass:"msg"},[e._v("打卡次数："+e._s(t.signCount))])],1)],1)})),a("v-uni-view",{staticClass:"location"},[e.signInSuccess?a("v-uni-view",[a("v-uni-text",{staticStyle:{"font-weight":"bold"}},[e._v("打卡时间："+e._s(e.signTime))])],1):e._e(),a("v-uni-view",{staticStyle:{"margin-top":"15px"}},[a("v-uni-text",{staticStyle:{"font-weight":"bold"}},[e._v("当前位置：")]),a("v-uni-text",[e._v(e._s(e.location))])],1)],1),e.signInSuccess?a("v-uni-view",{staticClass:"successInfo"},[a("v-uni-view",{staticClass:"title"},[e._v("签到打卡成功！")]),a("v-uni-view",{staticClass:"tips"},[e._v("请注意行车休息，切勿疲劳驾驶。")])],1):e._e(),a("v-uni-view",{staticClass:"map-div"},[a("span",[e._v("map-div")]),a("v-uni-view",{staticStyle:{width:"100%",height:"100%"},attrs:{id:"TXMap"}})],1)],2),e.empty?a("v-uni-view",{staticClass:"empty",staticStyle:{flex:"1"}},[a("v-uni-image",{attrs:{src:i("1e21"),mode:""}}),a("v-uni-view",{staticStyle:{margin:"10px 0px",color:"#ed6622"}},[e._v("暂无送货单信息")]),a("v-uni-view",{staticClass:"subtext"},[e._v("试试搜索送货单号")])],1):e._e(),a("v-uni-view",{staticClass:"btn-div"},[e.orderList.length>0&&!e.signInSuccess?a("v-uni-button",{staticClass:"primary font14",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.signIn.apply(void 0,arguments)}}},[e._v("点我打卡")]):e._e(),e.signInSuccess?a("v-uni-button",{staticClass:"primary font14",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.back.apply(void 0,arguments)}}},[e._v("返回")]):e._e()],1)],1)},s=[]}}]);