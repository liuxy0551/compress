(function(t){function e(e){for(var o,a,r=e[0],c=e[1],l=e[2],d=0,p=[];d<r.length;d++)a=r[d],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(o in c)Object.prototype.hasOwnProperty.call(c,o)&&(t[o]=c[o]);u&&u(e);while(p.length)p.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,r=1;r<n.length;r++){var c=n[r];0!==i[c]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},i={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="/video-to-gif/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"378a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("a133"),n("ed0d"),n("f09c"),n("e117");var o=n("8bbf"),i=n.n(o),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},a=[],r=(n("5c0b"),n("4023")),c={},l=Object(r["a"])(c,s,a,!1,null,null,null),u=l.exports,d=n("c730");Object(d["a"])("".concat("/video-to-gif/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var p=n("6389"),f=n.n(p),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t._e(),n("div",{staticClass:"content-box"},[n("div",{staticClass:"title"},[t._v("视频转 GIF")]),n("div",{staticClass:"form-box"},[n("div",{staticClass:"flex-row"},[n("div",{staticClass:"label"},[t._v("视频链接：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.video,expression:"options.video"}],staticClass:"w440",attrs:{type:"text",placeholder:"请输入视频链接",maxlength:"200"},domProps:{value:t.options.video},on:{input:function(e){e.target.composing||t.$set(t.options,"video",e.target.value)}}})]),n("div",{staticClass:"flex-row"},[n("div",{staticClass:"label"},[t._v("GIF 时长：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.numFrames,expression:"options.numFrames"}],staticClass:"w140",attrs:{type:"number",placeholder:"视频时长，单位：s"},domProps:{value:t.options.numFrames},on:{input:function(e){e.target.composing||t.$set(t.options,"numFrames",e.target.value)}}}),t.options.numFrames?n("div",{staticClass:"tip"},[t._v("预计等待"+t._s(3*t.options.numFrames)+"秒")]):t._e()]),n("div",{staticClass:"flex-row"},[n("div",{staticClass:"flex-row"},[n("div",{staticClass:"label"},[t._v("宽度：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.gifWidth,expression:"options.gifWidth"}],staticClass:"w140",attrs:{type:"text",placeholder:"宽度，如：800",maxlength:"4"},domProps:{value:t.options.gifWidth},on:{input:function(e){e.target.composing||t.$set(t.options,"gifWidth",e.target.value)}}})]),n("div",{staticClass:"flex-row l35"},[n("div",{staticClass:"label"},[t._v("高度：")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.options.gifHeight,expression:"options.gifHeight"}],staticClass:"w140",attrs:{type:"text",placeholder:"高度，如：600",maxlength:"4"},domProps:{value:t.options.gifHeight},on:{input:function(e){e.target.composing||t.$set(t.options,"gifHeight",e.target.value)}}})])])]),n("div",{staticClass:"btn-box"},[n("button",{on:{click:t.reset}},[t._v("重 置")]),n("button",{attrs:{disabled:t.doneDisabled},on:{click:t.done}},[t._v("确 认")]),t.base64?n("button",{on:{click:t.download}},[t._v("下 载")]):t._e()]),n("video-to-gif",{ref:"gifRef",attrs:{options:t.optionsDone},on:{save:t.save}})],1)],1)},m=[],h=(n("ecb4"),n("77ad"),n("e35a"),n("0d7a"),n("0eaa")),g=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"video-to-gif"},[n("img",{attrs:{src:t.url,alt:""}})])},b=[],w=n("70cd"),x=n.n(w),y={name:"VideoToGif",props:{options:{type:Object}},data:function(){return{url:""}},computed:{isSupported:function(){return x.a.isSupported()}},methods:{existingVideoGIFSupported:function(){},createGIF:function(t){var e=this,n=new Date;x.a.createGIF(t,(function(t){t.error||(e.url=t.image,e.$emit("save",t.image,n))}))}},mounted:function(){this.isSupported||alert("当前浏览器不支持后续操作，请更换浏览器后再试！")}},_=y,C=(n("6962"),Object(r["a"])(_,g,b,!1,null,"64b85cf0",null)),F=C.exports,O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"uploader-box"},[n("input",{attrs:{type:"file",accept:t.accept},on:{change:t.chooseFiles}})])},j=[],S={props:{accept:{type:String,default:"video/*"},maxSize:{default:15}},data:function(){return{}},computed:{fileMaxSize:function(){return 1024*this.maxSize*1024}},methods:{chooseFiles:function(t){var e=t.target.files[0];if(e.size>this.fileMaxSize)return alert("文件过大");var n=new FormData;n.append("attach",e)}}},$=S,k=Object(r["a"])($,O,j,!1,null,null,null),E=k.exports;n("e18c"),n("96db"),n("f4e3"),n("8256"),n("ab6e"),n("927c"),n("3c51"),n("db0a"),n("1cc1"),n("ab0f"),n("fc6e"),n("f30b"),n("cfd1"),n("d104"),n("f74a"),n("3598"),n("b497"),n("2909"),n("a7ef"),n("b523"),n("e671"),n("4140"),n("83db"),n("829d"),n("939f"),n("1bb1"),n("c3ba"),n("af86"),n("f1a9");function P(t){var e=t.split(","),n=e[0].match(/:(.*?);/)[1],o=atob(e[1]),i=o.length,s=new Uint8Array(i);while(i--)s[i]=o.charCodeAt(i);return new Blob([s],{type:n})}function M(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"file",n=document.createElement("a");n.setAttribute("href",t),n.setAttribute("download",e),n.setAttribute("target","_blank");var o=document.createEvent("MouseEvents");o.initEvent("click",!0,!0),n.dispatchEvent(o)}function D(t,e){var n=P(t),o=URL.createObjectURL(n);M(o,e)}var T={name:"Home",data:function(){return{options:{video:"http://media.liuxianyu.cn/node-n.mp4",gifWidth:840,gifHeight:500,numFrames:1},optionsTemp:null,optionsDone:null,loading:null,base64:null}},watch:{"options.numFrames":{handler:function(t,e){this.options.numFrames=t.slice(0,3)}}},computed:{doneDisabled:function(){return!this.options.video||(!this.options.gifWidth||(!this.options.gifHeight||!this.options.numFrames))}},methods:{reset:function(){this.options=Object.assign({},this.optionsTemp),this.$refs["gifRef"].url=""},done:function(){this.loading=this.$loading({lock:!0,text:"转换中，请稍等...",customClass:"loading-icon",background:"rgba(0, 0, 0, 0.6)"}),this.optionsDone=Object.assign({},this.options,{video:[this.options.video],numFrames:10*this.options.numFrames}),this.$refs["gifRef"].createGIF(this.optionsDone,this.loading)},save:function(t,e){this.base64=t;var n=t.indexOf("="),o=-1===n?t:t.substring(0,n),i=o.length,s=i-i/8*2;this.$message.info("文件大小：".concat(Math.round(s/1024/1024*100)/100,"M")),this.$notify({title:"成功",message:"耗时 ".concat(new Date-e," ms"),type:"success"}),this.loading.close()},download:function(){var t=this.options.video.split("/");D(this.base64,t[t.length-1].split(".")[0])}},mounted:function(){this.optionsTemp=Object(h["a"])({},this.options)},components:{VideoToGif:F,Uploader:E}},A=T,G=(n("9725"),n("b5d4"),Object(r["a"])(A,v,m,!1,null,"050c2250",null)),H=G.exports;i.a.use(f.a);var N=[{path:"/",name:"Home",component:H}],I=new f.a({routes:N}),R=I,V=n("5880"),W=n.n(V);i.a.use(W.a);var z=new W.a.Store({state:{},mutations:{},actions:{},modules:{}}),L=n("5f72");i.a.use(L["Loading"].directive),i.a.prototype.$loading=L["Loading"].service,i.a.config.productionTip=!1,new i.a({router:R,store:z,render:function(t){return t(u)}}).$mount("#app")},5880:function(t,e){t.exports=Vuex},"5c0b":function(t,e,n){"use strict";var o=n("a037"),i=n.n(o);i.a},"5f72":function(t,e){t.exports=ELEMENT},6389:function(t,e){t.exports=VueRouter},6962:function(t,e,n){"use strict";var o=n("8d46"),i=n.n(o);i.a},"6fa7":function(t,e,n){},"8bbf":function(t,e){t.exports=Vue},"8d46":function(t,e,n){},9725:function(t,e,n){"use strict";var o=n("6fa7"),i=n.n(o);i.a},a037:function(t,e,n){},b5d4:function(t,e,n){"use strict";var o=n("378a"),i=n.n(o);i.a}});