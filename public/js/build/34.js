"use strict";(self.webpackChunkDooTask=self.webpackChunkDooTask||[]).push([[34],{1557:(t,e,a)=>{a.d(e,{Z:()=>r});var n=a(1519),o=a.n(n)()((function(t){return t[1]}));o.push([t.id,".drawio-content[data-v-6aaeb891],.drawio-content .drawio-iframe[data-v-6aaeb891]{height:100%;left:0;position:absolute;top:0;width:100%}.drawio-content .drawio-iframe[data-v-6aaeb891]{background:0 0;border:0;float:none;margin:-1px 0 0;max-width:none;outline:0;padding:0}.drawio-content .drawio-loading[data-v-6aaeb891]{left:50%;position:absolute;top:50%;transform:translate(-50%,-50%)}",""]);const r=o},67034:(t,e,a)=>{a.r(e),a.d(e,{default:()=>u});var n=a(20629);function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}const i={name:"Drawio",props:{value:{type:Object,default:function(){return{}}},title:{type:String,default:""},readOnly:{type:Boolean,default:!1}},data:function(){return{loadIng:!0,url:null,bakData:""}},created:function(){var t="en";switch(this.getLanguage()){case"CN":case"TC":t="zh"}var e=this.readOnly?1:0,a=this.readOnly?0:1,n=this.themeIsDark?"dark":"kennedy",o=this.title?encodeURIComponent(this.title):"",r="?title=".concat(o,"&chrome=").concat(a,"&lightbox=").concat(e,"&ui=").concat(n,"&lang=").concat(t,"&offline=1&pwa=0&embed=1&noLangIcon=1&noExitBtn=1&noSaveBtn=1&saveAndExit=0&spin=1&proto=json");this.$Electron?this.url=$A.originUrl("drawio/webapp/index.html".concat(r)):this.url=$A.apiUrl("../drawio/webapp/".concat(r))},mounted:function(){window.addEventListener("message",this.handleMessage)},beforeDestroy:function(){window.removeEventListener("message",this.handleMessage)},watch:{value:{handler:function(t){this.bakData!=$A.jsonStringify(t)&&(this.bakData=$A.jsonStringify(t),this.updateContent())},deep:!0}},computed:function(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}({},(0,n.rn)(["themeIsDark"])),methods:{formatZoom:function(t){return t+"%"},updateContent:function(){this.$refs.myFlow.contentWindow.postMessage(JSON.stringify({action:"load",autosave:1,xml:this.value.xml}),"*")},handleMessage:function(t){var e=this.$refs.myFlow.contentWindow;if(t.source===e){var a=$A.jsonParse(t.data);switch(a.event){case"init":this.loadIng=!1,this.updateContent();break;case"load":void 0===this.value.xml&&e.postMessage(JSON.stringify({action:"template"}),"*");break;case"autosave":var n={xml:a.xml};this.bakData=$A.jsonStringify(n),this.$emit("input",n);break;case"save":this.$emit("saveData")}}}}};var s=a(93379),c=a.n(s),l=a(1557),d={insert:"head",singleton:!1};c()(l.Z,d);l.Z.locals;const u=(0,a(51900).Z)(i,(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"drawio-content"},[a("iframe",{ref:"myFlow",staticClass:"drawio-iframe",attrs:{src:t.url}}),t._v(" "),t.loadIng?a("div",{staticClass:"drawio-loading"},[a("Loading")],1):t._e()])}),[],!1,null,"6aaeb891",null).exports}}]);