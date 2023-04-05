(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{15:function(t,e,n){},25:function(t,e,n){"use strict";n.r(e);var o=n(17),a=n.n(o),c=n(3),s=n(0),r=n.n(s),i=n(11),d=n(18),u=(n(15),n(14)),l=n(1),j=r.a.memo((function(t){var e=t.goods;return 0!==e.length?Object(l.jsx)(u.a,{className:"list-of-goods",children:e.map((function(t){return Object(l.jsx)(u.a.Item,{"data-cy":"good",style:{color:t.color},className:"list-of-goods__item",children:t.name},t.id)}))}):Object(l.jsx)("h3",{children:"The list of goods is empty"})})),b=n(19);function f(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){var e;return t.ok?null!==(e=t.headers.get("content-type"))&&void 0!==e&&e.includes("application/json")?t.json():Promise.reject(new Error("Content-type is not supported")):Promise.reject(new Error("".concat(t.status," - ").concat(t.statusText)))}))}var h=function(){return f().then((function(t){return Object(b.a)(t).sort((function(t,e){return t.name.localeCompare(e.name)})).slice(0,5)}))},m=function(){return f().then((function(t){return t.filter((function(t){return"red"===t.color}))}))},O=function(){var t=Object(s.useState)([]),e=Object(c.a)(t,2),n=e[0],o=e[1],a=Object(s.useState)(!1),r=Object(c.a)(a,2),u=r[0],b=r[1],O=Object(s.useState)(!1),p=Object(c.a)(O,2),g=p[0],y=p[1],x=Object(s.useCallback)((function(t){y(!1),b(!0),t().then(o).catch((function(){return y(!0)})).finally((function(){return b(!1)}))}),[]);return Object(l.jsxs)("div",{className:"App",children:[Object(l.jsxs)("div",{className:"header",children:[Object(l.jsx)("h1",{className:"page-header",children:"Dynamic list of Goods"}),Object(l.jsxs)("div",{className:"buttons-container",children:[Object(l.jsx)(i.a,{type:"button","data-cy":"all-button",variant:"info",className:"load-button",onClick:function(){return x(f)},disabled:u,children:"Load all goods"}),Object(l.jsx)(i.a,{type:"button","data-cy":"first-five-button",variant:"success",className:"load-button",onClick:function(){return x(h)},disabled:u,children:"Load 5 first goods"}),Object(l.jsx)(i.a,{type:"button","data-cy":"red-button",variant:"danger",className:"load-button",onClick:function(){return x(m)},disabled:u,children:"Load red goods"})]})]}),g&&Object(l.jsx)("h3",{children:"Error occured when data loaded"}),u?Object(l.jsx)(d.a,{animation:"border",role:"status"}):Object(l.jsx)(j,{goods:n})]})};a.a.render(Object(l.jsx)(O,{}),document.getElementById("root"))}},[[25,1,2]]]);
//# sourceMappingURL=main.62abfabf.chunk.js.map