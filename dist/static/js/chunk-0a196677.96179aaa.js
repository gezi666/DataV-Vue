(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0a196677"],{b1e5:function(t,e,i){"use strict";i("4160"),i("caad"),i("159b");var a=i("c2d4"),o=i("ee5d");e["a"]={name:"AbstractEchartBarComp",mixins:[a["a"]],methods:{convertChartData:function(t){if(["flexibleLine","flexibleBar"].includes(this.compConf.componentName)){if("static"===this.compConf.data.datasource.type){var e=this.compConf.data.conf.datasetMeta,i=[],a=[];return e.forEach((function(t){1==t.columnDefDire?i.push(t.columnName):a.push(t.columnName)})),Object(o["d"])(t,{datasetMeta:e,xAxisIds:i,yAxisIds:a})}if(!t||!t[0])return;return Object(o["d"])(t[0],this.dataConf[this.dataConf.datasetSelectedIds[0]])}return["annularpie","liquidFill","scaledashboard"].includes(this.compConf.componentName)?t:Object(o["a"])(t,this.dataConf)}}}},c2d4:function(t,e,i){"use strict";i("b0c0"),i("ee5d");var a=i("7031"),o=i("313e"),n=i.n(o);e["a"]={name:"AbstractEchartComp",mixins:[a["a"]],data:function(){return{myChart:null}},methods:{draw:function(){this.myChart=n.a.init(document.getElementById(this.compConf.compId)),this.myChart.hideLoading(),this.myChart.setOption(this.option()),this.myChart.on("click",this._click),this.myChart.on("globalout",this._globalout)},resize:function(){this.myChart.resize()},_click:function(t){},_globalout:function(t){},_getDataTypeValue:function(t,e){if(e)return"classify"==e?t.name:"legend"==e?t.seriesName:"value"==e?t.value:void 0},styleConfChanged:function(){this.updateMyChart()},compDataChanged:function(){this.updateMyChart()},updateMyChart:function(){this.myChart&&this.myChart.hideLoading(),this.myChart&&this.myChart.clear(),this.myChart&&this.myChart.setOption(this.option())},option:function(){return{}}}}},ff67:function(t,e,i){"use strict";i.r(e);i("4160"),i("d81d"),i("b0c0"),i("e25e"),i("ac1f"),i("1276"),i("159b");var a,o,n=i("b85c"),r=i("b1e5"),l=!1,s={name:"BasicBar",mixins:[r["a"]],methods:{option:function(){var t=this.styleConf,e=this.chartData,i=[];e.legends.forEach((function(e){var a,o=t.series,r=null,l=Object(n["a"])(o);try{for(l.s();!(a=l.n()).done;){var s=a.value;if(e.name==s.value&&""!=s.color){r=s;break}r=null}}catch(c){l.e(c)}finally{l.f()}i.push({type:"bar",name:e.name,data:e.data,itemStyle:null==r?null:{color:r.color,opacity:r.opacity,borderColor:r.borderColor,borderWidth:r.lineWidth,borderType:r.lineType,barBorderRadius:parseInt(r.barRadius),shadowBlur:r.shadowBlur,shadowColor:r.shadowColor,shadowOffsetX:r.offsetX,shadowOffsetY:r.offsetY},label:{show:t.dataLabel,formatter:"{c}",fontSize:t.dataLabelSize,color:t.dataLabelColor,position:t.dataPosition},barGap:t.barGap,barCategoryGap:t.barCategoryGap,barWidth:t.barWidth})}));var a={color:this.defaultColors,backgroundColor:t.backgroundColor,itemStyle:{barBorderRadius:t.barBorderRadius},tooltip:{},markLine:{data:{0:{type:"max",valueIndex:1}}},xAxis:{type:"category",data:e.classify,show:t.x.isShow,position:t.x.position,axisLine:{symbol:["none",t.x.styleArrow],show:t.x.showLine,lineStyle:{color:t.x.styleColor,width:t.x.styleBold}},name:t.x.isUnit?t.x.unitName:"",nameTextStyle:{fontFamily:t.x.unitFontFamily,fontSize:t.x.unitFontSize,color:t.x.unitFontColor},axisLabel:{show:t.x.isAxisLabel,color:t.x.labelColor,fontSize:t.x.labelSize,rotate:t.x.wordDirection,margin:t.x.labelMargin,fontFamily:t.x.fontFamily},axisTick:{show:t.x.axisTick,length:t.x.axisTickLehgth,inside:t.x.axisTickInside,alignWithLabel:t.x.alignWithLabel,lineStyle:{color:t.x.tickColor,width:t.x.tickWidth,type:t.x.tickStyle,opacity:t.x.tickOpacity}},splitLine:{show:t.x.isGrid,lineStyle:{color:t.x.gridColor,width:t.x.gridBold,opacity:t.x.gridOpaque,type:t.x.splitLineType}}},yAxis:{type:"value",show:t.y.isShow,position:t.y.position,axisLine:{symbol:["none",t.y.styleArrow],show:t.y.showLine,lineStyle:{color:t.y.styleColor,width:t.y.styleBold}},name:t.y.isUnit?t.y.unitName:"",nameTextStyle:{fontFamily:t.y.unitFontFamily,fontSize:t.y.unitFontSize,color:t.y.unitFontColor},axisLabel:{show:t.y.isAxisLabel,color:t.y.labelColor,fontSize:t.y.labelSize,rotate:t.y.wordDirection,margin:t.y.labelMargin,fontFamily:t.y.fontFamily},axisTick:{show:t.y.axisTick,length:t.y.axisTickLehgth,inside:t.y.axisTickInside,lineStyle:{color:t.y.tickColor,width:t.y.tickWidth,type:t.y.tickStyle,opacity:t.y.tickOpacity}},splitLine:{show:t.y.isGrid,lineStyle:{color:t.y.gridColor,width:t.y.gridBold,opacity:t.y.gridOpaque,type:t.y.splitLineType}}},legend:{show:t.legend.isShow,icon:t.legend.icon,itemWidth:t.legend.iconWidth,itemHeight:t.legend.iconHeight,itemGap:10,textStyle:{color:t.legend.fontColor,fontSize:t.legend.fontSize,fontWeight:t.legend.fontBold,fontFamily:t.legend.fontFamily},formatter:function(e){var i=t.series;if(null==i||0==i.length)return e;var a,o=Object(n["a"])(i);try{for(o.s();!(a=o.n()).done;){var r=a.value;if(e==r.value)return r.name}}catch(l){o.e(l)}finally{o.f()}return e},left:t.legend.position.split("-")[0],top:t.legend.position.split("-")[1],orient:t.legend.layout},series:i,grid:{top:t.topPadding+"%",bottom:t.bottomPadding+"%",left:t.leftPadding+"%",right:t.rightPadding+"%"}};return a},carouselConfChanged:function(t,e){t&&!t.open&&this.compDataChanged()},carouselExe:function(t,e){var i=this.option();l&&console.log("BasicBar","[",this.compConf.compId,"]","carouselExe",t,e);var a=i.series[0].barWidth;i.series.map((function(e,o){e.name==t?(i.series[o].barWidth=parseInt(a)+5+"%",i.series[o].animation=!0):(i.series[o].animation=!1,i.series[o].barWidth=a)})),this.myChart.hideLoading(),this.myChart.clear(),this.myChart.setOption(i,!0),this.myChart.on("click",(function(t){console.log(t)}));if(t){var o=this.buildLinkageData(t);this.triggerLinkage(o)}else this.myChart.dispatchAction({type:"restore"})},_getDataTypeValue:function(t,e){if(e)return"legend"==e?t.name:"value"==e?t.value:void 0},_getDataItemByCarouse:function(t){var e=null,i=this.chartData;return i.legends.forEach((function(i){i.name==t&&(e=i)})),null==e&&console.log("xxxxxxxxxxxxxxx>[",this.compConf.compId,"]",i,t),e},getCarouselDataIndexes:function(){var t=[];return this.chartData.legends.map((function(e,i){t.push(e.name)})),t},buildLinkageData:function(t){var e=this.compConf.linkage.linkages;if(e&&0!=e.length){var i=this._getDataItemByCarouse(t),a=this,o={};return e.forEach((function(t){o[t.name]=a._getDataTypeValue(i,t.type)})),o}}},mounted:function(){this.isOpenCarouse&&this.startCarousel(this.getCarouselDataIndexes())}},c=s,d=i("2877"),h=Object(d["a"])(c,a,o,!1,null,null,null);e["default"]=h.exports}}]);