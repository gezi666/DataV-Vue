(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-71428070"],{"52b5":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"titleUI"},[a("groupUI",{attrs:{styleObj:e.getObj}})],1)},n=[],o=(a("b0c0"),a("4d70")),i={name:"titleUI",props:["styleObj"],computed:{getObj:function(){var e={};return e.name=this.styleObj.name,"undefined"!=typeof this.styleObj.fold&&(e.fold=this.styleObj.fold),e.show=!0,e.showName="显示",e.value=this.getValue("isShow"),e.children=[{name:"标题文字",type:o["a"].TEXT,value:this.getValue("title")},{name:"字体大小",type:o["a"].NUMBER,value:this.getValue("textStyleFontSize")},{name:"颜色",type:o["a"].COLOR,value:this.getValue("textStyleColor")},{name:"粗细",type:o["a"].SELECT,value:this.getValue("textStyleFontWeight"),range:[{normal:"normal"},{bold:"粗体"},{bolder:"bolder"},{lighter:"lighter"}]},{name:"字体",type:o["a"].FONTFAMILY,value:this.getValue("textStyleFontFamily")},{name:"字体风格",type:o["a"].SELECT,value:this.getValue("textStyleFontFamily"),range:[{normal:"normal"},{italic:"italic"},{oblique:"oblique"}]},{name:"LEFT",type:o["a"].TEXT,value:this.getValue("left"),placeholder:"可填auto,left,center,right 或具体值(20/20%)"},{name:"TOP",type:o["a"].TEXT,value:this.getValue("top"),placeholder:"可填auto,top, middle, bottom 或具体值(20/20%)"},{name:"RIGHT",type:o["a"].TEXT,value:this.getValue("right"),placeholder:"可填auto,或具体值(20|20%)"},{name:"BOTTOM",type:o["a"].TEXT,value:this.getValue("bottom"),placeholder:"可填auto,或具体值(20|20%)"}],e}},methods:{getValue:function(e){return this.styleObj.value+" "+e}}},u=i,s=(a("7dc8"),a("2877")),r=Object(s["a"])(u,l,n,!1,null,"35aaf09c",null);t["default"]=r.exports},"7dc8":function(e,t,a){"use strict";var l=a("c169"),n=a.n(l);n.a},c169:function(e,t,a){}}]);