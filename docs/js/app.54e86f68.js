(function(e){function t(t){for(var r,a,u=t[0],i=t[1],l=t[2],f=0,s=[];f<u.length;f++)a=u[f],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&s.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(t);while(s.length)s.shift()();return c.push.apply(c,l||[]),n()}function n(){for(var e,t=0;t<c.length;t++){for(var n=c[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==o[u]&&(r=!1)}r&&(c.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},a={app:0},o={app:0},c=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-2d0e95df":"2afd2987","chunk-579c5b46":"caf8a76e","chunk-03306c72":"8bd3bac6","chunk-2d1cda0e":"f777a457","chunk-2d224887":"ecc7d32c"}[e]+".js"}function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n={"chunk-579c5b46":1,"chunk-03306c72":1,"chunk-2d1cda0e":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-2d0e95df":"31d6cfe0","chunk-579c5b46":"0670aa22","chunk-03306c72":"687104cb","chunk-2d1cda0e":"a83b30c4","chunk-2d224887":"31d6cfe0"}[e]+".css",o=i.p+r,c=document.getElementsByTagName("link"),u=0;u<c.length;u++){var l=c[u],f=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(f===r||f===o))return t()}var s=document.getElementsByTagName("style");for(u=0;u<s.length;u++){l=s[u],f=l.getAttribute("data-href");if(f===r||f===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var r=t&&t.target&&t.target.src||o,c=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");c.code="CSS_CHUNK_LOAD_FAILED",c.request=r,delete a[e],d.parentNode.removeChild(d),n(c)},d.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(d)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var c=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=c);var l,f=document.createElement("script");f.charset="utf-8",f.timeout=120,i.nc&&f.setAttribute("nonce",i.nc),f.src=u(e);var s=new Error;l=function(t){f.onerror=f.onload=null,clearTimeout(d);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:f})}),12e4);f.onerror=f.onload=l,document.head.appendChild(f)}return Promise.all(t)},i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],f=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var d=f;c.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var r=n("19b3"),a=n.n(r);a.a},"19b3":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=n("f309");r["a"].use(a["a"]);var o=new a["a"]({icons:{iconfont:"fa"}}),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n(e.layout,{tag:"component"},[n("router-view")],1)],1)},u=[],i="default",l={computed:{layout:function(){return(this.$route.meta.layout||i)+"-layout"}}},f=l,s=(n("034f"),n("2877")),d=Object(s["a"])(f,c,u,!1,null,null,null),p=d.exports,h=(n("45fc"),n("d3b7"),n("8c4f")),m=n("2f62");r["a"].use(m["a"]);var b=new m["a"].Store({state:{login:null},mutations:{updateLogin:function(e,t){e.login=t}},actions:{},modules:{}});r["a"].use(h["a"]);var v=new h["a"]({mode:"history",base:"/",routes:[{path:"/",redirect:"/home"},{path:"/home",name:"home",component:function(){return Promise.all([n.e("chunk-579c5b46"),n.e("chunk-2d1cda0e")]).then(n.bind(null,"bb51"))},meta:{requiresAuth:!0}},{path:"/login",name:"login",component:function(){return Promise.all([n.e("chunk-579c5b46"),n.e("chunk-03306c72")]).then(n.bind(null,"a55b"))},meta:{layout:"empty"}},{path:"/confirm",name:"confirm",component:function(){return Promise.all([n.e("chunk-579c5b46"),n.e("chunk-2d224887")]).then(n.bind(null,"e116"))},meta:{layout:"empty"}},{path:"/404",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))},meta:{layout:"empty"}},{path:"*",redirect:"/404"}]});v.beforeEach((function(e,t,n){var r=b.state.login,a=e.matched.some((function(e){return e.meta.requiresAuth}));null!==r?a&&!r.user?n("/login"):n():a?n("/login"):n()}));var y=v,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[n("v-app-bar",{attrs:{color:"success accent-4",dark:""}},[n("v-toolbar-title",[e._v("Spotify Analytics")]),n("v-spacer")],1),n("v-content",[e._t("default")],2)],1)},k=[],w=(n("b324"),n("6544")),_=n.n(w),O=n("7496"),j=n("40dc"),E=n("a75b"),P=n("2fa4"),A=n("2a7f"),S={},x=Object(s["a"])(S,g,k,!1,null,"6a462fd4",null),T=x.exports;_()(x,{VApp:O["a"],VAppBar:j["a"],VContent:E["a"],VSpacer:P["a"],VToolbarTitle:A["a"]});var C=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",{attrs:{id:"inspire"}},[e._t("default")],2)},L=[],V={},N=Object(s["a"])(V,C,L,!1,null,null,null),$=N.exports;_()(N,{VApp:O["a"]});var q=n("ecee"),B=n("c074"),M=n("f2d1"),D=n("ad3d");q["c"].add(M["a"]),q["c"].add(B["a"]),r["a"].component("font-awesome-icon",D["a"]),r["a"].component("default-layout",T),r["a"].component("empty-layout",$),r["a"].config.productionTip=!1,new r["a"]({router:y,store:b,vuetify:o,render:function(e){return e(p)}}).$mount("#app")},"9c39":function(e,t,n){},b324:function(e,t,n){"use strict";var r=n("9c39"),a=n.n(r);a.a}});
//# sourceMappingURL=app.54e86f68.js.map