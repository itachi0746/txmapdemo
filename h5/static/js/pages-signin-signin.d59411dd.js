(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-signin-signin"],{"06b8":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return r}));var r={uniGrid:i("8ea2").default,uniGridItem:i("9a8a").default},n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("v-uni-view",{staticClass:"main"},[i("v-uni-view",{staticClass:"msg"},[t._v("已选打卡送货单号")]),i("v-uni-view",{staticClass:"table"},[i("uni-grid",{attrs:{column:5,square:!1}},[i("uni-grid-item",[i("v-uni-text",[t._v("送货单号")])],1),i("uni-grid-item",[i("v-uni-text",[t._v("目的地")])],1),i("uni-grid-item",[i("v-uni-text",[t._v("要求送达时间")])],1),i("uni-grid-item",[i("v-uni-text",[t._v("打卡次数")])],1),i("uni-grid-item",[i("v-uni-text",[t._v("选择")])],1)],1),t._l(t.tableData,(function(e){return i("uni-grid",{attrs:{column:5,square:!1}},[i("uni-grid-item",[i("v-uni-text",[t._v(t._s(e.orderNo))])],1),i("uni-grid-item",[i("v-uni-text",[t._v(t._s(e.target))])],1),i("uni-grid-item",[i("v-uni-text",[t._v(t._s(e.expectTime))])],1),i("uni-grid-item",[i("v-uni-text",[t._v(t._s(e.times))])],1),i("uni-grid-item",[i("v-uni-checkbox-group",{staticClass:"text"},[i("v-uni-label",[i("v-uni-checkbox",{attrs:{value:e.check,checked:e.check}})],1)],1)],1)],1)}))],2),i("v-uni-view",{staticClass:"location"},[i("v-uni-view",{staticClass:"msg"},[t._v("打卡时间：2020-12-04 13:50")]),i("v-uni-view",{staticClass:"msg"},[t._v("当前定位："+t._s(t.location))])],1),i("v-uni-view",{staticClass:"success"},[i("v-uni-view",{staticClass:"title"},[t._v("签到打卡成功！")]),i("v-uni-view",{staticClass:"tips"},[t._v("请注意行车休息，切勿疲劳驾驶。")])],1)],1),i("v-uni-button",{staticClass:"primary",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.back.apply(void 0,arguments)}}},[t._v("返回")])],1)},o=[]},"1b68":function(t,e,i){"use strict";i.r(e);var r=i("7a68"),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"20ae":function(t,e,i){"use strict";var r=i("ced2"),n=i.n(r);n.a},"2fbd":function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return t.width?i("v-uni-view",{staticClass:"uni-grid-item",style:"width:"+t.width+";"+(t.square?"height:"+t.width:"")},[i("v-uni-view",{staticClass:"uni-grid-item__box",class:{"uni-grid-item--border":t.showBorder,"uni-grid-item--border-top":t.showBorder&&t.index<t.column,"uni-highlight":t.highlight},style:{"border-right-color":t.borderColor,"border-bottom-color":t.borderColor,"border-top-color":t.borderColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t._onClick.apply(void 0,arguments)}}},[t._t("default")],2)],1):t._e()},n=[]},"40bd":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("14d9"),i("d3b7"),i("159b"),i("a434");var r={name:"UniGridItem",inject:["grid"],props:{index:{type:Number,default:0}},data:function(){return{column:0,showBorder:!0,square:!0,highlight:!0,left:0,top:0,openNum:2,width:0,borderColor:"#e5e5e5"}},created:function(){this.column=this.grid.column,this.showBorder=this.grid.showBorder,this.square=this.grid.square,this.highlight=this.grid.highlight,this.top=0===this.hor?this.grid.hor:this.hor,this.left=0===this.ver?this.grid.ver:this.ver,this.borderColor=this.grid.borderColor,this.grid.children.push(this),this.width=this.grid.width},beforeDestroy:function(){var t=this;this.grid.children.forEach((function(e,i){e===t&&t.grid.children.splice(i,1)}))},methods:{_onClick:function(){this.grid.change({detail:{index:this.index}})}}};e.default=r},"45aa":function(t,e,i){"use strict";var r=i("c961"),n=i.n(r);n.a},"4cce":function(t,e,i){"use strict";i.r(e);var r=i("40bd"),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"4ddf":function(t,e,i){var r=i("e782");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("60d3a584",r,!0,{sourceMap:!1,shadowMode:!1})},"7a68":function(t,e,i){"use strict";i("7a82");var r=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(i("8ea2")),o=r(i("f624")),d={components:{uniIcons:o.default,uniGrid:n.default},data:function(){return{tableData:[{orderNo:"KP20200707002-01-01",target:"湖南省长沙市开福区捞刀河镇楚家湖路374号",expectTime:"2020-07-17 09:00",times:"2",check:!0},{orderNo:"KP20200707002-01-01",target:"湖南省长沙市开福区捞刀河镇楚家湖路374号",expectTime:"2020-07-17 09:00",times:"2",check:!0},{orderNo:"KP20200707002-01-01",target:"湖南省长沙市开福区捞刀河镇楚家湖路374号",expectTime:"2020-07-17 09:00",times:"2",check:!0},{orderNo:"KP20200707002-01-01",target:"湖南省长沙市开福区捞刀河镇楚家湖路374号",expectTime:"2020-07-17 09:00",times:"2",check:!0},{orderNo:"KP20200707002-01-01",target:"湖南省长沙市开福区捞刀河镇楚家湖路374号",expectTime:"2020-07-17 09:00",times:"2",check:!0}],location:"定位中..."}},onLoad:function(){this.getLocation(this)},methods:{back:function(){uni.navigateBack()}}};e.default=d},8322:function(t,e,i){"use strict";i.r(e);var r=i("d4d2"),n=i.n(r);for(var o in r)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return r[t]}))}(o);e["default"]=n.a},"8ea2":function(t,e,i){"use strict";i.r(e);var r=i("ce7d"),n=i("8322");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("45aa");var d=i("f0c5"),a=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"004bf3d1",null,!1,r["a"],void 0);e["default"]=a.exports},"8ff0":function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-grid-item[data-v-6dc95594]{height:100%;display:flex}.uni-grid-item__box[data-v-6dc95594]{display:flex;width:100%;position:relative;flex:1;flex-direction:column}.uni-grid-item--border[data-v-6dc95594]{position:relative;border-bottom-color:#ebeef5;border-bottom-style:solid;border-bottom-width:1px;border-right-color:#ebeef5;border-right-style:solid;border-right-width:1px}.uni-grid-item--border-top[data-v-6dc95594]{border-top-color:#ebeef5;border-top-style:solid;border-top-width:1px;height:100%;box-sizing:border-box}.uni-highlight[data-v-6dc95594]:active{background-color:#f1f1f1}',""]),t.exports=e},"9a8a":function(t,e,i){"use strict";i.r(e);var r=i("2fbd"),n=i("4cce");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("20ae");var d=i("f0c5"),a=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"6dc95594",null,!1,r["a"],void 0);e["default"]=a.exports},c643:function(t,e,i){"use strict";var r=i("4ddf"),n=i.n(r);n.a},c961:function(t,e,i){var r=i("e3b5");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("e9624830",r,!0,{sourceMap:!1,shadowMode:!1})},ce7d:function(t,e,i){"use strict";i.d(e,"b",(function(){return r})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var r=function(){var t=this.$createElement,e=this._self._c||t;return e("v-uni-view",{staticClass:"uni-grid-wrap"},[e("v-uni-view",{ref:"uni-grid",staticClass:"uni-grid",class:{"uni-grid--border":this.showBorder},style:{"border-left-style":"solid","border-left-color":this.borderColor,"border-left-width":this.showBorder?"1px":0},attrs:{id:this.elId}},[this._t("default")],2)],1)},n=[]},ced2:function(t,e,i){var r=i("8ff0");r.__esModule&&(r=r.default),"string"===typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);var n=i("4f06").default;n("0b9f8866",r,!0,{sourceMap:!1,shadowMode:!1})},d4d2:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d401"),i("d3b7"),i("25f0"),i("159b"),i("ac1f"),i("e25e");var r={name:"UniGrid",props:{column:{type:Number,default:3},showBorder:{type:Boolean,default:!0},borderColor:{type:String,default:"#e5e5e5"},square:{type:Boolean,default:!0},highlight:{type:Boolean,default:!0}},provide:function(){return{grid:this}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{elId:t,width:0}},created:function(){this.children=[]},mounted:function(){this.init()},methods:{init:function(){var t=this;setTimeout((function(){t._getSize((function(e){t.children.forEach((function(t,i){t.width=e}))}))}),50)},change:function(t){this.$emit("change",t)},_getSize:function(t){var e=this;uni.createSelectorQuery().in(this).select("#".concat(this.elId)).boundingClientRect().exec((function(i){e.width=parseInt((i[0].width-1)/e.column)+"px",t(e.width)}))}}};e.default=r},e3b5:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.uni-grid-wrap[data-v-004bf3d1]{display:flex;flex:1;flex-direction:column;width:100%}.uni-grid[data-v-004bf3d1]{display:flex;flex-direction:row;flex-wrap:wrap}.uni-grid--border[data-v-004bf3d1]{border-left-color:#ebeef5;border-left-style:solid;border-left-width:1px}',""]),t.exports=e},e782:function(t,e,i){var r=i("24fb");e=r(!1),e.push([t.i,'@charset "UTF-8";\r\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\r\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\r\n/* 颜色变量 */\r\n/* 行为相关颜色 */\r\n/* 文字基本颜色 */\r\n/* 背景颜色 */\r\n/* 边框颜色 */\r\n/* 尺寸变量 */\r\n/* 文字尺寸 */\r\n/* 图片尺寸 */\r\n/* Border Radius */\r\n/* 水平间距 */\r\n/* 垂直间距 */\r\n/* 透明度 */\r\n/* 文章场景相关 */.content[data-v-6de2b7d9]{display:flex;flex-direction:column;padding:6px;height:calc(100vh - 44px);box-sizing:border-box;overflow-y:auto}.main[data-v-6de2b7d9]{width:100%;margin:0 auto;flex:1;overflow-y:auto}.main .msg[data-v-6de2b7d9]{color:#555}.main .table[data-v-6de2b7d9]{text-align:center;width:100%;margin-top:10px}.main .location[data-v-6de2b7d9]{margin:15px 0;border:1px solid #e5e5e5;padding:6px}.success[data-v-6de2b7d9]{margin:30px auto;text-align:center;color:#e6a23c}.success .title[data-v-6de2b7d9]{font-size:20px;margin-bottom:15px}.success .tips[data-v-6de2b7d9]{font-size:16px}.uni-grid-item[data-v-6de2b7d9]{word-break:break-all}.uni-grid-item uni-text[data-v-6de2b7d9], .uni-grid-item .text[data-v-6de2b7d9]{height:100%;display:flex;align-items:center;justify-content:center}',""]),t.exports=e},f5e6:function(t,e,i){"use strict";i.r(e);var r=i("06b8"),n=i("1b68");for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);i("c643");var d=i("f0c5"),a=Object(d["a"])(n["default"],r["b"],r["c"],!1,null,"6de2b7d9",null,!1,r["a"],void 0);e["default"]=a.exports}}]);