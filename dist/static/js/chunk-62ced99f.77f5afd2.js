(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-62ced99f"],{"11f1":function(t,e,n){},"17f3":function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var o={CREATE:"create",RUNNING:"running",REDRAW:"redraw",RELOAD:"reload",DESTROY:"destroy"}},"4bf3":function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"compbox",class:{compHighLight:t.isHighlight},style:t.boxStyle,attrs:{id:t.contentId}},[n(t.compConf.componentName,{ref:"contentComp",tag:"component",attrs:{compConf:t.compConf,mainId:t.compConf.compId,id:t.compConf.compId},on:{compState:t.compStateChanged}})],1)},a=[],i=(n("99af"),n("d81d"),n("b64b"),n("5530")),r=n("2f62"),c=!1,s={name:"previewCompItem",data:function(){return{myChart:null,isCtrl:!1,translateX:0,translateY:0,scaleW:1,scaleH:1,isReload:!1,linkageData:{},compState:null}},components:{},mixins:[],props:["compConf"],computed:Object(i["a"])(Object(i["a"])({},Object(r["c"])({activeComp:"getFirstActiveComp"})),{},{id:function(){return this.compConf.compId},contentId:function(){return this.id+"-preview-box"},boxStyle:function(){var t=this.compConf,e={};return t?(t.box.top&&(e.top=t.box.top+"px"),t.box.left&&(e.left=t.box.left+"px"),t.box.height&&(e.height=t.box.height+"px"),t.box.width&&(e.width=t.box.width+"px"),e.zIndex=t.compIndex,e.transform="translate(".concat(this.translateX,"px, ").concat(this.translateY,"px) scale(").concat(this.scaleW,", ").concat(this.scaleH,") rotate(").concat(t.box.rotate,"deg)"),e):e},isHighlight:function(){var t=this.compConf;return t.isHighlight&&!this.$store.getters.getPreviewState}}),created:function(){this.scaleW=1},updated:function(){this.isReload&&(this.$refs.contentComp.resize&&this.$refs.contentComp.resize(),this.isReload=!1)},methods:Object(i["a"])(Object(i["a"])({},Object(r["b"])(["switchComListDisplayState","moveTop","moveUp","moveDown","moveBottom","delComs","selectOnlyOne","selectComs","highLightCom","cancelHighLightCom"])),{},{handleOver:function(t){t.index;this.$store.commit("changeHighlight",{compId:this.id,value:!0})},handleOut:function(){this.$store.commit("changeHighlight",{compId:this.id,value:!1})},handleFocus:function(t){t.index;this.selectOnlyOne(this.id),this.$store.commit("setScreenGridShow",!0)},handleBlur:function(t){var e=t.left,n=t.top,o=t.width,a=t.height,i={compId:this.id,left:e,top:n,width:o,height:a};this.$store.commit("updateCompStyle",i),this.isReload=!0,this.$store.commit("setScreenGridShow",!1)},updateComp:function(t){t&&t.compId==this.compConf.compId&&(t.translateX&&(this.translateX=t.translateX),t.translateY&&(this.translateY=t.translateY),t.scaleH&&(this.scaleH=t.scaleH),t.scaleW&&(this.scaleW=t.scaleW))},changeScaleStyle:function(){var t=this;this.activeComp.property&&Object.keys(this.activeComp.property).map((function(e,n){t.activeComp.property[e].map((function(n,o){var a=["style"],i=0;"base"==e?(a.push(n),i=Math.ceil(t.scaleW*t.activeComp.style[n])):(a.push(e,n),i=Math.ceil(t.scaleW*t.activeComp.style[e][n])),t.$store.commit("modifyValueBySelected",{attrs:a,value:i})}))}))},clickComp:function(){this.$store.getters.getPreviewState||(this.isCtrl||this.$store.commit("cleanAllActive"),this.$store.commit("changeActive",{compId:this.id,value:!0}),this.isCtrl=!1)},multiselect:function(){this.$store.getters.getPreviewState||(this.isCtrl=!0)},enter:function(){this.$store.getters.getPreviewState||this.$store.commit("changeHighlight",{compId:this.id,value:!0})},leave:function(){this.$store.getters.getPreviewState||this.$store.commit("changeHighlight",{compId:this.id,value:!1})},reloadComp:function(t){t&&t.compId==this.compConf.compId&&(this.translateX=0,this.translateY=0,this.scaleW=1,this.scaleH=1,this.isReload=!0)},compStateChanged:function(t){c&&console.log("AbstractComp","[",this.id,"]","state change from:",this.compState," to ",t),this.compState=t},updateCompData:function(t){var e=this.$refs.contentComp;e.updateCompData||console.error("the component [",this.id,"] is not exist."),e.updateCompData(t)}})},l=s,u=(n("9e72"),n("2877")),h=Object(u["a"])(l,o,a,!1,null,"7bfa353d",null);e["a"]=h.exports},"5f96":function(t,e,n){},7031:function(t,e,n){"use strict";var o=n("17f3"),a=n("a553");e["a"]={name:"AbstractComp",mixins:[a["a"]],data:function(){return{chartData:null,nextIndex:0,compDataStatus:"loading",defaultColors:["#04d6ef","#ef58ea","#ff9e87","#0cc2ff","#fad860","#9bca63","#fe8463","#975fe5","#dc81d2","#8d98b3"]}},watch:{compDataStatus:{handler:function(t){"loading"===t&&this.chartLoading()}}},methods:{draw:function(){},chartLoading:function(){this.myChart&&this.myChart.showLoading({text:"",color:"#666",textColor:"#fff",maskColor:"rgba(115, 170, 229, 0)",zlevel:0,fontSize:30,showSpinner:!0,spinnerRadius:10,lineWidth:5})},_toggleCompShow:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],e=!(arguments.length>1&&void 0!==arguments[1])||arguments[1],n=arguments.length>2?arguments[2]:void 0;t&&(document.getElementById("".concat(n)).style.transition=e?"all .3s ease-out":"",document.getElementById("".concat(n)).style.transform=e?"scale(1)":"scale(0)")}},created:function(){this.updateState(o["a"].CREATE)},mounted:function(){var t=this;this.updateChartData(this.compData),this.draw(),this.updateState(o["a"].RUNNING),this.$nextTick((function(){t.linkageConfChanged()}))},destroyed:function(){this.updateState(o["a"].DESTROY)},render:function(t){var e=this.compConf.compId;return t("div",{attrs:{id:e},style:{left:"0px",top:"0px",width:"100%",height:"100%",position:"absolute"}})}}},"8a9a":function(t,e,n){"use strict";n.r(e);var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{style:t.style},["caroursel"===t.compConf.style.changeWay?[n("el-carousel",{ref:"carouselContainer",staticClass:"layer-box",attrs:{interval:t.compConf.style.interval,arrow:t.layerData.length>1?"hover":"never",autoplay:t.compConf.style.autoPlay,trigger:"click",height:t.obj.height+"px",direction:t.compConf.style.direction},on:{change:t._onCarouselChange}},t._l(t.layerData,(function(e,o){return n("el-carousel-item",{key:o,style:t.layerBoxStyle,attrs:{name:e.id}},[t.previewStatus?t._l(e.children,(function(e){return n("preview-comp-item",{key:e+"_carousel",ref:e,refInFor:!0,attrs:{compConf:t.getCompConf(e)}})})):t._l(e.children,(function(e){return n("container",{key:e,ref:e,refInFor:!0,attrs:{compConf:t.getCompConf(e)}})}))],2)})),1)]:t._l(t.layerData,(function(e,o){return n("div",{key:o,staticClass:"layer-box",style:t.normalLayerBoxStyle(o)},[t.previewStatus?t._l(e.children,(function(e){return n("preview-comp-item",{key:e+"_carousel",ref:e,refInFor:!0,attrs:{compConf:t.getCompConf(e)}})})):t._l(e.children,(function(e){return n("container",{key:e,ref:e,refInFor:!0,attrs:{compConf:t.getCompConf(e)}})}))],2)}))],2)},a=[],i=(n("4160"),n("e25e"),n("ac1f"),n("1276"),n("159b"),n("5530")),r=n("185a"),c=n("4bf3"),s=n("2f62"),l=n("7031"),u={name:"compContainer",mixins:[l["a"]],data:function(){return{previewCurrentIndex:0}},components:{container:r["a"],previewCompItem:c["a"]},computed:Object(i["a"])(Object(i["a"])(Object(i["a"])({},Object(s["c"])({previewStatus:"getPreviewState"})),Object(s["d"])(["components","preview"])),{},{compMap:function(){return this.previewStatus?this.preview.components.value:this.components.compMap},currentLayerIndex:function(){return this.compConf.currentLayerId},obj:function(){return this.compConf.box},layerData:function(){var t=this.getLayerChildrenComp(),e=_.cloneDeep(this.compConf.layer);return e.forEach((function(e){var n=_.isEmpty(t)?[]:t[e.id]?t[e.id]:[];n.length&&(e.children=n)})),e},style:function(){var t={width:this.obj.width+"px",height:this.obj.height+"px",backgroundColor:this.compConf.style.backgroundColor};return this.compConf.style.backgroundImage&&(t.backgroundImage="url(".concat(this.compConf.style.backgroundImage,")"),t.backgroundPosition="0 0",t.backgroundSize="100% 100%",t.backgroundRepeat="no-repeat"),t},layerBoxStyle:function(){return{height:this.obj.height+"px",display:"block"}}}),mounted:function(){},watch:{"compConf.currentLayerId":{handler:function(t,e){"caroursel"===this.compConf.style.changeWay?this.$refs.carouselContainer&&this.$refs.carouselContainer.setActiveItem(t):this.previewCurrentIndex=this._getCurrentIndex(t)}}},methods:{resize:function(){},normalLayerBoxStyle:function(t){return{transform:"scale(".concat(this.previewCurrentIndex===t?1:0,")"),left:0,top:0,position:"absolute"}},getChildrenRefs:function(){return this.$refs},getCompConf:function(t){return this.compMap[t]},getLayerChildrenComp:function(){var t=this.compMap,e={};for(var n in t)"layerChildren"===t[n]["compType"]&&(e[t[n]["layerId"]]||(e[t[n]["layerId"]]=[]),e[t[n]["layerId"]].push(n));return e},_onCarouselChange:function(t,e){this.previewCurrentIndex=t,this.previewStatus||this.$store.commit("changeCurrentLayer",{compId:this.layerData[t].parentId,layerId:this.layerData[t].id})},showLayerByLinkage:function(t){this.previewCurrentIndex!==t&&(t>this.layerData.length-1||("caroursel"===this.compConf.style.changeWay?this.$refs.carouselContainer&&this.$refs.carouselContainer.setActiveItem(t):this.previewCurrentIndex=t))},_clickByLinkAge:function(t){var e=this;this.$evtBus.on(t,(function(t){e._toggleCompShow(t.ctrlShow,t.switchVisible&&t.switchVisible[e.compConf.compId],e.compConf.compId),"undefined"!==typeof t.data.showLayer&&e.showLayerByLinkage(parseInt(t.data.showLayer));var n=e.getCompConf(t.source);"layerChildren"===n.compType&&n.parentCompId===t.target?console.log("容器内组件触发事件"):console.log("非容器内组件触发事件")}))},linkageConfChanged:function(t){if(this.compConf.linkage&&this.compConf.linkage.linkRevEvents)for(var e=this.compConf.linkage.linkRevEvents,n=0;n<e.length;n++){var o=e[n],a=o.evtName.split(":")[1];"click"===a&&this._clickByLinkAge(o)}},_getCurrentIndex:function(t){for(var e=0;e<this.layerData.length;e++)if(t===this.layerData[e].id)return e;return 0}}},h=u,p=(n("e6cf9"),n("2877")),f=Object(p["a"])(h,o,a,!1,null,"906ac3e8",null);e["default"]=f.exports},"9e72":function(t,e,n){"use strict";var o=n("11f1"),a=n.n(o);a.a},a553:function(t,e,n){"use strict";n("4160"),n("caad"),n("c975"),n("277d"),n("d81d"),n("4e82"),n("b0c0"),n("07ac"),n("ac1f"),n("2532"),n("5319"),n("159b");var o=n("5530"),a=n("17f3"),i=n("2f62"),r=n("0e0b");e["a"]={name:"ComInterface",props:["compConf"],data:function(){return{chartData:null,compDataStatus:"loading"}},computed:Object(o["a"])({compId:function(){return this.compConf.compId},box:function(){return this.compConf.box},styleConf:function(){return this.compConf.style},dataConf:function(){if(this.compConf.data)return this.compConf.data.conf},dataSourceConf:function(){if(this.compConf.data)return this.compConf.data.datasource},compData:function(){return this.$store.state.compData.compData[this.compId]},linkageConf:function(){return this.compConf.linkage},state:function(){return this.compConf.state}},Object(i["c"])({activeCompData:"getCompData"})),watch:{styleConf:{handler:function(t,e){this.updateState(a["a"].REDRAW),this.styleConfChanged(t,e),this.updateState(a["a"].RUNNING)},deep:!0},state:{handler:function(t,e){},deep:!0},compData:{handler:function(t,e){t&&this.updateCompData(!0)},deep:!0},linkageConf:{handler:function(t,e){this.linkageConfChanged(t,e)},deep:!0},"dataSourceConf.type":{handler:function(t,e){this.$evtBus.destroy(this.compId)}}},methods:{convertExpression:function(t){if(-1!==JSON.stringify(t).indexOf("${")){var e=JSON.stringify(t);t=this._getExpressionValue(e),t=JSON.parse(t)}return t},styleConfChanged:function(){},compDataChanged:function(){},resize:function(){},convertChartData:function(t){},linkageConfChanged:function(t,e){},updateState:function(t){this.$emit("compState",t)},updateChartData:function(t){this.chartData=this.convertChartData(t)||t},_linkageDataKeys:function(t){var e=[];for(var n in t)t[n].data.forEach((function(t){e.push({bindMapperColumn:t.bindMapperColumn,value:t.value,operationType:t.operationType})}));return e},_getColumnCondition:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];if(1===t.useType)return{bindMapperColumn:t.columnName,dsId:e,operationType:t.operationType,value:t.value};if(2===t.useType){if(!n.length)return{};var o=this._getGlobalParamsValue(t.columnName,n);return o?{bindMapperColumn:t.columnName,dsId:e,operationType:t.operationType,value:o}:{}}t.value;var a=this._getExpressionValue(t.value);return a&&-1===a.indexOf("${")&&-1===a.indexOf("}")?{bindMapperColumn:t.columnName,dsId:e,operationType:t.operationType,value:a}:{}},_mergeElementConfig:function(t,e,n){var o=this,a=e.data.conf[t],i=_.cloneDeep(a.searchElementConfigs)||[];if(i.length){var r=n.state.window.globalParams;i.sort((function(t,e){return t.useType-e.useType}));var c={};i.forEach((function(e){var n=o._getColumnCondition(e,t,r);_.isEmpty(n)||(c[e.columnName]=n)})),_.isEmpty(c)||(i=Object.values(c))}var s=n.getters.getLinkagesByCompId(e["compId"]);if(_.isEmpty(s))return i;var l=i.map((function(t){return t.bindMapperColumn}))||[],u=this._linkageDataKeys(s);return u.forEach((function(e,n){var o=l.indexOf(e.bindMapperColumn);-1!==o?(i[n]["value"]=e.value,i[n].operationType=e.operationType):i.push({dsId:t,bindMapperColumn:e.bindMapperColumn,value:e.value,operationType:e.operationType})})),i},_checkRequireFields:function(){var t=this.compConf;if("dataset"===t.data.datasource.type){var e=t.data.conf.datasetSelectedIds;if(e&&Array.isArray(e)&&e.length){var n=t.data.conf.datasetSelectedIds[0],o=t.data.conf[n]["requireFields"];if(!o||!o.length)return!0;var a=this._mergeElementConfig(n,t,this.$store);if(!a.length)return!1;var i=a.map((function(t){return t.bindMapperColumn})),r=0;return o.forEach((function(t){-1!==i.indexOf(t)&&r++})),r===o.length}}return!0},updateCompData:function(t){if(t)this.compDataStatus="loaded",this.updateState(a["a"].RELOAD),this.compData&&(this.updateChartData(this.compData),this.compDataChanged(),this.updateState(a["a"].RUNNING));else if(["dataset"].includes(this.compConf.data.datasource.type)){var e=this._checkRequireFields();if(!e)return;var n=this.$dm._getFormatRequestParams(this.compConf),o=this.$store.getters.getConditionsByCompId(this.compConf.compId);(o.length<1||JSON.stringify(o[0].groupByConfig)!==JSON.stringify(n[0].groupByConfig)||JSON.stringify(o[0].orderByConfigDTO)!==JSON.stringify(n[0].orderByConfigDTO)||JSON.stringify(o[0].searchElementConfigs)!==JSON.stringify(n[0].searchElementConfigs))&&(this.compDataStatus="loading",this.$dm.initCompData(this.compConf))}else this.$dm.initCompData(this.compConf)},_mergeArr:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=[],o=t.length>e.length?t.length:e.length,a=0;a<o;a++){var i=t[a]?t[a]:e[a];n.push(i)}return n},_showNoDataBox:function(t){var e=document.getElementById("".concat(t)).querySelector("".concat(t,"_no_data_box"));if(!e){var n=document.createElement("div");n.id="".concat(t,"_no_data_box"),n.innerHTML="无数据",document.getElementById("".concat(t)).appendChild(n)}},_handleStaticData:function(){},_handleConditionExpression:function(){},_getCompLinkageParamsValue:function(t,e){var n=this.$store.getters.getLinkagesByCompId(e);if(!n)return null;if(n=n[t[0]],!n)return null;if(n=n["sourceData"],!n)return null;for(var o=1;o<t.length;o++){if(!n[t[o]])return null;n=n[t[o]]}return n},_getGlobalParamsValue:function(t){var e=this.$store.state.window.globalParams;if(!e||!e.length)return null;for(var n=0;n<e.length;n++)if(e[n].name===t)return e[n].value?e[n].value:null;return null},_getExpressionValue:function(t){var e=this,n=r["a"].getCustomExpressionParams(t),o=[];return n&&n.length&&n.forEach((function(t){var n=r["a"].getCustomExpressionCloumn(t);if(n.length>=2)if("global"===n[0]){var a=e._getGlobalParamsValue(n[1]);a?o.push(a):o.push(t)}else{var i=e._getCompLinkageParamsValue(n,e.compConf["compId"]);i?o.push(i):o.push(t)}else o.push(t)})),o.length&&n.forEach((function(e,n){t=t.replace(e,o[n])})),t},_convertEventOutData:function(t,e){if(!e||!e.datasource||"static"===e.datasource.type)return t;var n=e.conf[e.conf.datasetSelectedIds[0]]["datasetMeta"],o=_.cloneDeep(t);if(_.isObject(t)){var a=function(e){n.forEach((function(n){[n.columnDesc,n.columnName].includes(e)&&n.columnDesc&&(o[n.columnDesc]=t[e],o[n.columnName]=t[e])}))};for(var i in t)a(i);return o}return _.isArray(t)?(t.forEach((function(e,a){var i=function(i){n.forEach((function(n){[n.columnDesc,n.columnName].includes(i)&&n.columnDesc&&(o[a][n.columnDesc]=t[e][i],o[a][n.columnName]=t[e][i])}))};for(var r in t[e])i(r)})),o):o}}}},e6cf9:function(t,e,n){"use strict";var o=n("5f96"),a=n.n(o);a.a}}]);