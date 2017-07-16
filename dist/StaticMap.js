(function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.StaticMap=t():e.StaticMap=t()})(this,function(){return function(e){function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var r={};return t.m=e,t.c=r,t.i=function(e){return e},t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{configurable:!1,enumerable:!0,get:n})},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="/",t(t.s=4)}([function(e,t,r){var n=r(2)(r(1),r(3),null,null,null);e.exports=n.exports},function(e,t,r){"use strict";function n(){return this.format.toLowerCase()}function o(){var e=["roadmap","satellite","hybrid","terrain"],t=this.type;if(e.indexOf(t)>-1)return t;throw Error("Type must be one of the following values "+e.join(", ").toUpperCase())}function a(){var e=c+"center="+this.center+"&zoom="+this.zoom+"&size="+this.sizeMap+"&maptype="+this.mapTypeMap+"&format="+this.formatMap+"&key="+this.googleApiKey+"&scale="+this.scaleMap+"&language="+this.language+this.markersMap+this.pathsMap;return this.$emit("get-url",e),e}function i(){return this.markers.map(function(e){var t="color:"+e.color,r="size:"+e.size,n="label:"+e.label;return"&markers=icon:"+e.icon+"|"+r+"|"+t+"|"+n+"|"+e.lat+","+e.lng}).join("")}function s(){return this.paths.map(function(e){var t="color:"+e.color,r="weight:"+e.weight,n="geodesic:"+e.geodesic;return"&path="+t+"|fillcolor:"+e.fillcolor+"|"+n+"|"+r+e.locations.map(function(e){if(e.startLat&&e.endLng)return"|"+e.startLat+","+e.endLng;throw Error("The path object must have startLat and endLng properties")}).join("")})[0]}function u(){var e=["1","2","4"];if(e.indexOf(this.scale)>-1)return this.scale;throw Error("Scale only can have the values "+e.join(", "))}function p(){if(this.size.length>0){var e=this.size;return e[0]+"x"+e[1]}throw Error("Size must have 2 values: WIDTH AND HEIGHT")}Object.defineProperty(t,"__esModule",{value:!0});var c="https://maps.googleapis.com/maps/api/staticmap?";t.default={computed:{formatMap:n,mapTypeMap:o,mapUrl:a,markersMap:i,pathsMap:s,scaleMap:u,sizeMap:p},props:{center:{type:String,required:!0},format:{type:String,default:"png"},getUrl:{type:Function},googleApiKey:{type:String,required:!0},language:{type:String,default:"en"},markers:{type:Array,default:function(){return[]}},paths:{type:Array,default:function(){return[]}},type:{type:String,default:"roadmap"},scale:{type:String,default:"1"},size:{type:Array,default:function(){return[500,400]}},zoom:{type:Number,required:!0}}}},function(e,t){e.exports=function(e,t,r,n,o){var a,i=e=e||{},s=typeof e.default;"object"!==s&&"function"!==s||(a=e,i=e.default);var u="function"==typeof i?i.options:i;t&&(u.render=t.render,u.staticRenderFns=t.staticRenderFns),n&&(u._scopeId=n);var p;if(o?(p=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=p):r&&(p=r),p){var c=u.functional,l=c?u.render:u.beforeCreate;c?u.render=function(e,t){return p.call(t),l(e,t)}:u.beforeCreate=l?[].concat(l,p):[p]}return{esModule:a,exports:i,options:u}}},function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{src:e.mapUrl,alt:"Static Google Map"}})},staticRenderFns:[]}},function(e,t,r){e.exports=r(0)}])});
//# sourceMappingURL=StaticMap.js.map