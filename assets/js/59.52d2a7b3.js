(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{501:function(e,t,r){"use strict";r.r(t);var n=r(39),o=(r(48),r(69),r(46),r(101)),u=r(329),i=function(e){var t,r=e.length-1,n=e.slice();do{t=!1;for(var o=0;o<r;o+=1)if(n[o]>n[o+1]){var u=n[o];n[o]=n[o+1],n[o+1]=u,t=!0}r-=1}while(t);return n},a=Object(o.d)({name:"worker-function-example",setup:function(){var e=Object(o.o)(15e3),t=Object(u.q)({refreshMs:10}).now,r=Object(n.a)(Array(5e4)).map((function(){return Math.floor(1e6*Math.random())})),a=Object(o.o)([]),c=Object(o.a)((function(){return a.value.slice(0,10)})),l=Object(o.a)((function(){return a.value.slice(-10)})),s=Object(u.db)(i,{timeout:e}),v=s.exec;return{now:t,timeout:e,firstSegment:c,lastSegment:l,sortArray:function(){a.value=i(r)},sortWorker:function(){v(r).then((function(e){return a.value=e})).catch((function(e){return a.value=["error",e]}))},working:s.loading,error:s.error,cancelled:s.cancelled}}}),c=r(28),l=Object(c.a)(a,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("h3",[e._v("Sort")]),e._v(" "),r("p",[e._v("time: "+e._s(e.now))]),e._v(" "),r("h6",[e._v("\n    If UI thread is working the refresh rate should go down and the time will\n    stop\n  ")]),e._v(" "),r("div",[r("label",[e._v("Timeout")]),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model.number",value:e.timeout,expression:"timeout",modifiers:{number:!0}}],attrs:{type:"number"},domProps:{value:e.timeout},on:{input:function(t){t.target.composing||(e.timeout=e._n(t.target.value))},blur:function(t){return e.$forceUpdate()}}})]),e._v(" "),r("p",[e._v("\n    Numbers:\n    "),r("b",[e._v(e._s(e.firstSegment))]),e._v("...\n    "),r("b",[e._v(e._s(e.lastSegment))])]),e._v(" "),r("ul",[r("li",[r("button",{on:{click:e.sortArray}},[e._v("Function")])]),e._v(" "),r("li",[r("button",{attrs:{disabled:e.working},on:{click:e.sortWorker}},[e._v("Worker")]),e._v(" "),e.cancelled?r("p",{style:{color:"red"}},[e._v(e._s(e.error))]):e._e()])])])}),[],!1,null,null,null);t.default=l.exports}}]);