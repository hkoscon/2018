webpackJsonp([10],{V4G9:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),i=s.n(n),a=s("NYxO"),r={name:"session",components:{LinearLoader:function(){return s.e(6).then(s.bind(null,"SD9I"))},Speakers:function(){return s.e(9).then(s.bind(null,"KlP+"))},Tag:function(){return s.e(8).then(s.bind(null,"xdTy"))}},props:{event:{type:Object,default:function(){return{topic:!1}}},ready:{type:Boolean,required:!0},filter:{type:Object,required:!0},filterActive:{type:Boolean,required:!0},startTime:{type:String},endTime:{type:String},day:{type:Number}},computed:{isActive:function(){return-1!==this.filter.level.indexOf(this.event.level)},classes:function(){return i()({},this.readyClass,this.activeClass)},hasFilter:function(){return this.event.topic&&this.filterActive},activeClass:function(){if(!this.ready)return{};var e=this.isActive,t=this.hasFilter;return{active:t&&e,deactive:t&&!e}},readyClass:function(){return{notReady:!this.ready}}},methods:i()({handleClick:function(){this.openModal(i()({day:this.day,startTime:this.startTime,endTime:this.endTime},this.event))}},Object(a.d)({openModal:"modal/openModal"}))},l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"session-wrap",class:e.classes,on:{click:e.handleClick}},[s("div",{staticClass:"session"},[s("div",{staticClass:"session-card z-depth-1"},[s("div",{staticClass:"overlay"},[s("div",{staticClass:"card-content"},[e.ready?[s("span",{staticClass:"card-title"},[e._v(e._s(e.event.display))]),e._v(" "),s("ul",{staticClass:"meta"},[e.event.language?s("li",[e._v(e._s(e.event.language))]):e._e(),e._v(" "),e.event.level?s("li",[e._v(e._s(e.event.level))]):e._e(),e._v(" "),s("li",[e._v(e._s(e.event.venue.name))])])]:e._e(),e._v(" "),e.ready?e._e():s("linear-loader")],2),e._v(" "),s("tag",{attrs:{tags:e.event.tags}}),e._v(" "),e.event.topic?s("speakers",{attrs:{speakers:e.event.speakers}}):e._e()],1)])])])},c=[],d=s("XyMi"),v=Object(d.a)(r,l,c,!1,null,null,null);t.default=v.exports}});
//# sourceMappingURL=10.88822a08851935ad37b9.js.map