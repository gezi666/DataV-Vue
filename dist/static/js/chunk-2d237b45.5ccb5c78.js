(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d237b45"],{fbf9:function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("Div",{style:t.style},[n("iframe",{attrs:{src:t.srcUrl,width:t.obj.width,height:t.obj.height,scrolling:"yes"}})])},i=[],r=n("ee5d"),h=n("7031"),c={name:"CustomImage",mixins:[h["a"]],computed:{srcUrl:function(){var t="";return t=null==this.chartData?"http://www.baidu.com":this.checkUrl(this.chartData.value)?this.chartData.value:"http://www.baidu.com",t},obj:function(){return this.compConf.box},style:function(){return{width:this.obj.width+"px",height:this.obj.height+"px",background:"#fff"}}},methods:{convertChartData:function(){return Object(r["c"])(this.compData,this.dataConf)},checkUrl:function(t){return/^((https|http|ftp|rtsp|mms){0,1}(:\/\/){0,1})www\.(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/i.test(t)}}},s=c,o=n("2877"),u=Object(o["a"])(s,a,i,!1,null,null,null);e["default"]=u.exports}}]);