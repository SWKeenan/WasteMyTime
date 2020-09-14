(function(t){function e(e){for(var s,r,n=e[0],l=e[1],u=e[2],p=0,h=[];p<n.length;p++)r=n[p],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&h.push(a[r][0]),a[r]=0;for(s in l)Object.prototype.hasOwnProperty.call(l,s)&&(t[s]=l[s]);c&&c(e);while(h.length)h.shift()();return o.push.apply(o,u||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],s=!0,n=1;n<i.length;n++){var l=i[n];0!==a[l]&&(s=!1)}s&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var s={},a={app:0},o=[];function r(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=s,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(i,s,function(e){return t[e]}.bind(null,s));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var u=0;u<n.length;u++)e(n[u]);var c=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var s=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[1==t.titlepage?i("div",{staticClass:"titlepage"},[i("TitlePage",{on:{getSleep:t.getSleep}})],1):t._e(),1==t.timewaste?i("div",{staticClass:"timewaste"},[i("TimeWaste",{attrs:{sleepProp:t.sleep}})],1):t._e()])},o=[],r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"TimeWaste"}},[t._m(0),i("p",{staticClass:"textTop"},[t._v("There are 1440 minutes in a day. 24 hours. How do you waste them?")]),i("div",{staticClass:"timeWasteBar"},t._l(t.timeSpent,(function(t){return i("div",{key:t.id,staticClass:"percentage",style:{width:.5*t.time+"px",left:.5*t.timelength+"px","background-color":t.color}})})),0),i("p",{staticClass:"barTotal"},[t._v(t._s(t.barTotal)+" minutes remaining")]),i("div",{staticClass:"wastedActivitiesSubmit"},[i("form",{attrs:{action:"post"},on:{submit:function(e){return e.preventDefault(),t.submitActivity(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.activity,expression:"activity"}],staticClass:"inputClass",attrs:{type:"text",placeholder:"Activity...",autocomplete:"off"},domProps:{value:t.activity},on:{focus:function(e){t.showAuto=!0},input:[function(e){e.target.composing||(t.activity=e.target.value)},t.filterActivites]}}),i("select",{directives:[{name:"model",rawName:"v-model",value:t.value,expression:"value"}],staticClass:"inputClass",attrs:{id:"value",name:"value"},on:{change:function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.value=e.target.multiple?i:i[0]}}},[i("option",{attrs:{value:"",disabled:"",selected:""}},[t._v("Value...")]),i("option",{attrs:{value:"worth"}},[t._v("Worth")]),i("option",{attrs:{value:"waste"}},[t._v("Waste")]),i("option",{attrs:{value:"chore"}},[t._v("Chore")]),i("option",{attrs:{value:"sleep"}},[t._v("Sleep")])]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.time,expression:"time"}],staticClass:"inputClass",attrs:{type:"number",placeholder:"Time Spent (Minutes)..."},domProps:{value:t.time},on:{input:function(e){e.target.composing||(t.time=e.target.value)}}}),i("input",{staticClass:"inputClass",attrs:{type:"submit"}})]),t.filteredActivities&&t.showAuto?i("ul",t._l(t.filteredActivities,(function(e){return i("li",{key:e.id,staticClass:"autocompleteList",on:{click:function(i){return t.setState(e)}}},[t._v(t._s(e))])})),0):t._e()]),i("div",{staticClass:"wastedActivities"},[t._v(t._s(t.errorMessage))]),i("div",{staticClass:"wastedActivities"},t._l(t.timeSpent.slice().reverse(),(function(e){return i("p",{key:e.id,style:{color:e.color}},[t._v(t._s(e.activity)+" - "+t._s(e.value)+" - "+t._s(e.time))])})),0)])},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headline"},[i("h3",[t._v("Waste My Time")])])}],l=(i("4de4"),i("caad"),i("2532"),i("2ca0"),{name:"TimeWaste",props:["sleepProp"],data:function(){return{activity:"",suggestedActivites:["do dishes","sweeping","mopping","gym"],filteredActivities:[],showAuto:!1,value:"",time:"",color:"",timeLength:0,object:{},barTotal:1440,testTime:1440,timeSpent:[],errorMessage:"",sleep:this.sleepProp}},mounted:function(){this.sleepAmount()},methods:{setState:function(t){this.activity=t,this.showAuto=!1},filterActivites:function(){var t=this;this.filteredActivities=this.suggestedActivites.filter((function(e){return""==t.activity?"":e.toLowerCase().startsWith(t.activity.toLowerCase())}))},sleepAmount:function(){this.object={activity:"slept "+this.sleep+" minutes",value:"sleep",time:this.sleep,timelength:this.timeLength,color:"blue"},this.time=this.sleep,this.testTime-=parseInt(this.time),this.timeLength+=parseInt(this.time),console.log("time: "+this.time),console.log("testTime: "+this.testTime),console.log("timeLength: "+this.timeLength),console.log("barTotal: "+this.barTotal),this.barTotal-=this.time,this.timeSpent.push(this.object),console.log(this.timeSpent),this.time=""},submitActivity:function(){""==this.activity?this.errorMessage="Enter an activity":""==this.value?this.errorMessage="Enter a value":""==this.time?this.errorMessage="Enter a time":this.time<0?this.errorMessage="You went back in time?":0==this.time?this.errorMessage="Why would you enter zero?":("worth"==this.value?this.color="green":"waste"==this.value?this.color="red":"chore"==this.value?this.color="gray":"sleep"==this.value&&(this.color="blue"),this.errorMessage="",this.object={activity:this.activity,value:this.value,time:this.time,timelength:this.timeLength,color:this.color},this.testTime-=parseInt(this.time),this.timeLength+=parseInt(this.time),console.log("time: "+this.time),console.log("testTime: "+this.testTime),console.log("timeLength: "+this.timeLength),console.log("barTotal: "+this.barTotal),this.testTime<0?(this.errorMessage="You don't have enough time left!",this.testTime=this.barTotal,this.timeLength-=this.time):0==this.testTime?(this.errorMessage="You used up all your time!",this.barTotal-=this.time,this.timeSpent.push(this.object),this.suggestedActivites.includes(this.activity)||this.suggestedActivites.push(this.activity)):(this.barTotal-=this.time,this.timeSpent.push(this.object),this.suggestedActivites.includes(this.activity)||this.suggestedActivites.push(this.activity),console.log(this.timeSpent)))}}}),u=l,c=i("2877"),p=Object(c["a"])(u,r,n,!1,null,null,null),h=p.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"TitlePage"}},[t._m(0),i("p",{staticClass:"textTop"},[t._v("There are 1440 minutes in a day. 24 hours. How do you waste them?")]),i("div",{staticClass:"sleepQuestion"},[i("form",{attrs:{action:"post"},on:{submit:function(e){return e.preventDefault(),t.beginTW(e)}}},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.sleeptemp,expression:"sleeptemp"}],staticClass:"sleepClass",attrs:{type:"number",placeholder:"How many hours did you sleep last night?"},domProps:{value:t.sleeptemp},on:{input:function(e){e.target.composing||(t.sleeptemp=e.target.value)}}}),i("input",{staticClass:"inputClass",attrs:{type:"submit"},on:{click:t.beginTW}})])]),i("div",{staticClass:"wastedActivities"},[t._v(t._s(t.errorMessage))])])},v=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"headline"},[i("h3",[t._v("Waste My Time")])])}],d={name:"TitlePage",data:function(){return{audioOn:!1,errorMessage:"",sleeptemp:"",sleep:""}},methods:{beginTW:function(){if(""==this.sleeptemp)this.errorMessage="Enter a time you slept";else if(this.sleeptemp>24)this.errorMessage="You slept more than 24 hours? Try again.";else if(this.sleeptemp<0)this.errorMessage="You slept a negative number of hours? Oh stop it.";else if(0==this.audioOn){this.errorMessage="",this.audioOn=!this.audioOn;var t=new Audio(i("d5cb"));t.play(),this.sleep=60*this.sleeptemp,this.$emit("getSleep",this.sleep)}}}},g=d,f=Object(c["a"])(g,m,v,!1,null,null,null),y=f.exports,b={name:"App",data:function(){return{timewaste:!1,titlepage:!0}},components:{TimeWaste:h,TitlePage:y},methods:{getSleep:function(t){this.sleep=t,this.timewaste=!this.timewaste,this.titlepage=!this.titlepage}}},_=b,w=Object(c["a"])(_,a,o,!1,null,null,null),T=w.exports;s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(T)}}).$mount("#app")},d5cb:function(t,e,i){t.exports=i.p+"media/activation.4fc05256.mp3"}});
//# sourceMappingURL=app.2df5102a.js.map