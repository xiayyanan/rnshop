webpackJsonp([6],{"5z/1":function(t,a){},AXXt:function(t,a){},gNHk:function(t,a){},xZ9l:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("PBVb"),s=e("P08N"),r={props:{navData:{type:Array,default:function(){return[]}}},data:function(){return{nav:{vuescroll:{mode:"slide",scroller:{minZoom:1,maxZoom:1}},scrollPanel:{scrollingX:!1},rail:{},bar:{background:"rgba(0,0,0,.25)"}}}},computed:{catIndex:function(){this.$store.state.category.catIndex;return this.$store.state.category.catIndex}},mounted:function(){var t=this.$store.state.category.catIndex,a=this;setTimeout(function(){return a.$refs.nav.scrollIntoView("#nav"+t)},300)},methods:{catChose:function(t){this.$store.commit("CHANGE_CATINDEX",t),this.$refs.nav.scrollIntoView("#nav"+t)}}},i={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cat-nav"},[e("vue-scroll",{ref:"nav",attrs:{ops:t.nav}},[e("ul",{staticClass:"cat-nav-list"},t._l(t.navData,function(a,n){return e("li",{class:{item:a,active:n==t.catIndex},attrs:{id:"nav"+n},on:{click:function(a){t.catChose(n)}}},[e("a",{staticClass:"tap"},[t._v(t._s(a.name))])])}))])],1)},staticRenderFns:[]};var c=e("VU/8")(r,i,!1,function(t){e("5z/1")},"data-v-6a46b85f",null).exports,o={props:{mainData:{type:Array,default:function(){return[]}}},data:function(){return{main:{vuescroll:{mode:"slide",scroller:{minZoom:1,maxZoom:1}},scrollPanel:{scrollingX:!1},rail:{},bar:{background:"rgba(0,0,0,.25)"}}}},computed:{catIndex:function(){this.$store.state.category.catIndex;return this.$store.state.category.catIndex}},mounted:function(){var t=this.$store.state.category.catIndex,a=this;setTimeout(function(){return a.$refs.main.scrollIntoView("#main"+t)},200)},watch:{catIndex:function(t){this.$refs.main.scrollIntoView("#main"+t)}}},l={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cat-main"},[e("vue-scroll",{ref:"main",attrs:{ops:t.main}},t._l(t.mainData,function(a,n){return e("div",{staticClass:"item",attrs:{id:"main"+n}},[e("div",{staticClass:"ads-box"},[e("router-link",{staticClass:"tap",attrs:{to:"/list"}},[e("img",{attrs:{src:a.adsImg}})])],1),t._v(" "),e("div",{staticClass:"cat-title"},[e("span",{staticClass:"name"},[t._v(t._s(a.name))])]),t._v(" "),e("ul",{staticClass:"cat-list"},t._l(a.list,function(a){return e("li",{staticClass:"itemsub"},[e("router-link",{staticClass:"tap",attrs:{to:"list"}},[e("img",{staticClass:"thumb",attrs:{src:a.thumb}}),t._v(" "),e("p",{staticClass:"name"},[t._v(t._s(a.name))])])],1)}))])}))],1)},staticRenderFns:[]};var u=e("VU/8")(o,l,!1,function(t){e("gNHk")},"data-v-3bc6ddba",null).exports,d=(e("VgY8"),{components:{"v-header":n.a,"v-tabBar":s.a,"v-nav":c,"v-main":u},data:function(){return{header:{title:"分类",back:{isBack:!0}},selected:0,categoryData:[]}},beforeCreate:function(){var t=this;this.$api({method:"post",url:"/category"}).then(function(a){t.categoryData=a.data.category}).catch(function(t){console.log(t)})}}),v={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"index"},[a("v-header",{attrs:{header:this.header}}),this._v(" "),a("v-tabBar"),this._v(" "),a("div",{staticClass:"rnui-content"},[a("v-nav",{attrs:{navData:this.categoryData}}),this._v(" "),a("v-main",{attrs:{mainData:this.categoryData}})],1)],1)},staticRenderFns:[]};var m=e("VU/8")(d,v,!1,function(t){e("AXXt")},"data-v-2164b0cf",null);a.default=m.exports}});
//# sourceMappingURL=6.344517e344fc7099e238.js.map