(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[924],{9317:function(e,t,n){"use strict";n.r(t);var r=n(2809),i=n(266),o=n(809),a=n.n(o),d=n(1043),l=n(4237),u=n(655),c=n(7294),s=n(6914),f=n(5116),p=n(8186),v=n(5893);function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function g(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var w=l.ZP.div.withConfig({displayName:"calls__WrapperAddress",componentId:"sc-wpndg6-0"})(["display:grid;height:960px;margin-bottom:96px;"]),m=l.ZP.div.withConfig({displayName:"calls__WrapperLogin",componentId:"sc-wpndg6-1"})(["margin:24px;display:grid;grid-row-gap:24px;height:150px;"]);t.default=function(){var e=(0,c.useState)(!1),t=e[0],n=e[1],r=(0,c.useState)([]),o=r[0],l=r[1],h=(0,c.useState)(""),b=h[0],j=h[1],O=(0,c.useState)(""),P=O[0],_=O[1];(0,c.useEffect)((function(){(0,p.Po)().then((function(e){l(null===e||void 0===e?void 0:e.data)}))}),[]);var N=[{field:"id",headerName:"ID",width:70},{field:"lastName",headerName:"\u0418\u043c\u044f",width:130},{field:"phoneNumber",headerName:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430",width:200},{field:"call",headerName:"\u0421\u0442\u0430\u0442\u0443\u0441",width:130},{field:"street",headerName:"\u0417\u0430\u043f\u0438\u0441\u044c",width:130},{field:"action",headerName:"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043b\u0438",sortable:!1,width:150,renderCell:function(e){return(0,v.jsx)(s.Z,{variant:"contained",onClick:function(t){null===t||void 0===t||t.stopPropagation();var n=e.api,r={};n.getAllColumns().filter((function(e){return"__check__"!==e.field&&!!e})).forEach((function(t){return r[t.field]=e.getValue(e.id,t.field)})),null===o||void 0===o||o.forEach(function(){var e=(0,i.Z)(a().mark((function e(t){return a().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.t0=(null===t||void 0===t?void 0:t.id)&&!(null!==t&&void 0!==t&&t.call)&&(null===t||void 0===t?void 0:t.id)===(null===r||void 0===r?void 0:r.id),!e.t0){e.next=4;break}return e.next=4,(0,p.fB)(null===t||void 0===t?void 0:t.id,g(g({},t),{},{call:!0,dateCall:(new Date).toLocaleString(),operator:"Operator"}));case 4:(null===t||void 0===t||!t.call)&&(null===t||void 0===t?void 0:t.id)&&(null===t||void 0===t?void 0:t.id)===(null===r||void 0===r?void 0:r.id)&&(0,p.Po)().then((function(e){l(null===e||void 0===e?void 0:e.data)}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},children:"\u041f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043b\u0438"})}},{field:"date",headerName:"\u0414\u0430\u0442\u0430 \u043f\u043e\u0441\u0442\u0443\u043f\u043b\u0435\u043d\u0438\u044f \u0437\u0430\u044f\u0432\u043a\u0438",width:200},{field:"dateCall",headerName:"\u0414\u0430\u0442\u0430 \u043e\u0442\u0432\u0435\u0442\u0430 \u043d\u0430 \u0437\u0430\u044f\u0432\u043a\u0443",width:200},{field:"operator",headerName:"\u041a\u0442\u043e \u043f\u0435\u0440\u0435\u0437\u0432\u043e\u043d\u0438\u043b",width:200}];return(0,v.jsx)(d.jj,{children:(0,v.jsx)(w,{children:(0,v.jsx)("div",{children:t?(0,v.jsx)(u._$r,{rows:o,columns:N,pageSize:15,rowsPerPageOptions:[1],logLevel:"error"}):(0,v.jsxs)(m,{children:[(0,v.jsx)(f.Z,{value:b,onChange:function(e){return j(e.target.value)},id:"Name",label:"Name"}),(0,v.jsx)(f.Z,{value:P,onChange:function(e){return _(e.target.value)},id:"Password",label:"Password",type:"password"}),(0,v.jsx)(s.Z,{variant:"contained",onClick:function(){return(0,p.v0)(b,P).then((function(e){return n(!!e)})).catch((function(e){return alert("\u041d\u0435\u0432\u0435\u0440\u043d\u044b\u0439 \u043b\u043e\u0433\u0438\u043d \u0438\u043b\u0438 \u043f\u0430\u0440\u043e\u043b\u044c")}))},children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})]})})})})}},8186:function(e,t,n){"use strict";n.d(t,{v0:function(){return o},CP:function(){return a},Po:function(){return d},fB:function(){return l}});var r=n(9669),i=n.n(r),o=(i().post("http://dev.avksrv.ru/admin/login",{email:"innerhard@gmail.com",password:"WhoFuckMe!100505"}),function(e,t){return i().post("http://dev.avksrv.ru/admin/login",{email:e,password:t})}),a=function(){return i().get("http://dev.avksrv.ru/category-services")},d=function(){return i().get("http://dev.avksrv.ru/callphones")},l=function(e,t){return i().put("http://dev.avksrv.ru/callphones/".concat(e),t)}},7964:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/calls",function(){return n(9317)}])}},function(e){e.O(0,[774,179,865,18,43,888,377],(function(){return t=7964,e(e.s=t);var t}));var t=e.O();_N_E=t}]);