(this["webpackJsonp@coreui/coreui-pro-react-admin-template"]=this["webpackJsonp@coreui/coreui-pro-react-admin-template"]||[]).push([[21],{1479:function(t,e,c){"use strict";c.r(e);var r=c(709),n=c(651),o=c(1),a=c(643),i=c(645),s=c(18);e.default=function(){var t=Object(o.useState)([{position:"static"},{position:"static"},{position:"top-right",autohide:3e3}]),e=Object(n.a)(t,2),c=e[0],u=e[1],l=Object(o.useState)("top-right"),b=Object(n.a)(l,2),j=b[0],d=b[1],h=Object(o.useState)(!0),m=Object(n.a)(h,2),f=m[0],O=m[1],p=Object(o.useState)(5e3),x=Object(n.a)(p,2),y=x[0],v=x[1],g=Object(o.useState)(!0),k=Object(n.a)(g,2),S=k[0],w=k[1],A=Object(o.useState)(!0),N=Object(n.a)(A,2),T=N[0],C=N[1],I=c.reduce((function(t,e){return t[e.position]=t[e.position]||[],t[e.position].push(e),t}),{});return Object(s.jsxs)(a.j,{children:[Object(s.jsxs)(a.n,{children:["Toasts.",Object(s.jsx)(i.a,{name:"-Toast"})]}),Object(s.jsx)(a.k,{children:Object(s.jsx)(a.w,{children:Object(s.jsxs)(a.wb,{children:[Object(s.jsx)(a.u,{sm:"12",lg:"6",children:Object(s.jsxs)(a.J,{children:[Object(s.jsx)("h5",{children:"Add toast with following props:"}),Object(s.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2 mt-4",children:[Object(s.jsx)(a.T,{id:"autohide",checked:f,onChange:function(t){O(t.target.checked)},custom:!0}),Object(s.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"autohide",children:"Autohide of the toast"})]}),f&&Object(s.jsxs)(a.K,{className:"my-2",children:[Object(s.jsx)(a.cb,{htmlFor:"ccyear",children:"Time to autohide"}),Object(s.jsx)(a.S,{type:"number",value:y,onChange:function(t){v(Number(t.target.value))}})]}),Object(s.jsxs)(a.K,{className:"my-2",children:[Object(s.jsx)(a.cb,{htmlFor:"ccyear",children:"Position"}),Object(s.jsx)("select",{className:"form-control",value:j,onChange:function(t){d(t.target.value)},children:["static","top-left","top-center","top-right","top-full","bottom-left","bottom-center","bottom-right","bottom-full"].map((function(t,e){return Object(s.jsx)("option",{children:t},e)}))})]}),Object(s.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(s.jsx)(a.T,{id:"fade",checked:T,onChange:function(t){C(t.target.checked)},custom:!0}),Object(s.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"fade",children:"fade"})]}),Object(s.jsxs)(a.K,{variant:"custom-checkbox",className:"my-2",children:[Object(s.jsx)(a.T,{id:"close",custom:!0,checked:S,onChange:function(t){w(t.target.checked)}}),Object(s.jsx)(a.cb,{variant:"custom-checkbox",htmlFor:"close",children:"closeButton"})]}),Object(s.jsx)(a.f,{className:"mr-1 w-25",color:"success",onClick:function(){u([].concat(Object(r.a)(c),[{position:j,autohide:f&&y,closeButton:S,fade:T}]))},children:"Add toast"})]})}),Object(s.jsx)(a.u,{sm:"12",lg:"6",children:Object.keys(I).map((function(t){return Object(s.jsx)(a.Rb,{position:t,children:I[t].map((function(e,c){return Object(s.jsxs)(a.Ob,{show:!0,autohide:e.autohide,fade:e.fade,children:[Object(s.jsx)(a.Qb,{closeButton:e.closeButton,children:"Toast title"}),Object(s.jsx)(a.Pb,{children:"This is a toast in ".concat(t," positioned toaster number ").concat(c+1,".")})]},"toast"+c)}))},"toaster"+t)}))})]})})})]})}},645:function(t,e,c){"use strict";c.d(e,"a",(function(){return b})),c.d(e,"b",(function(){return h}));var r=c(40),n=c(164),o=c(1),a=c.n(o),i=c(643),s=c(18),u=["name","text"],l=function(t){var e=t.name,c=t.text,o=Object(n.a)(t,u),a=e?"https://coreui.io/react/docs/components/".concat(e):t.href;return Object(s.jsx)("div",{className:"card-header-actions",children:Object(s.jsx)(i.db,Object(r.a)(Object(r.a)({},o),{},{href:a,rel:"noreferrer noopener",target:"_blank",className:"card-header-action",children:Object(s.jsx)("small",{className:"text-muted",children:c||"docs"})}))})},b=a.a.memo(l),j=["children"],d=function(t){var e=Object(r.a)({},t),c=e.children,o=Object(n.a)(e,j);return Object(s.jsx)(i.b,Object(r.a)(Object(r.a)({href:"https://coreui.io/pro/react/",color:"danger",target:"_blank",rel:"noreferrer noopener"},o),{},{children:c||"CoreUI Pro Component"}))},h=a.a.memo(d)},651:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var r=c(652);function n(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t)){var c=[],r=!0,n=!1,o=void 0;try{for(var a,i=t[Symbol.iterator]();!(r=(a=i.next()).done)&&(c.push(a.value),!e||c.length!==e);r=!0);}catch(s){n=!0,o=s}finally{try{r||null==i.return||i.return()}finally{if(n)throw o}}return c}}(t,e)||Object(r.a)(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},652:function(t,e,c){"use strict";c.d(e,"a",(function(){return n}));var r=c(653);function n(t,e){if(t){if("string"===typeof t)return Object(r.a)(t,e);var c=Object.prototype.toString.call(t).slice(8,-1);return"Object"===c&&t.constructor&&(c=t.constructor.name),"Map"===c||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Object(r.a)(t,e):void 0}}},653:function(t,e,c){"use strict";function r(t,e){(null==e||e>t.length)&&(e=t.length);for(var c=0,r=new Array(e);c<e;c++)r[c]=t[c];return r}c.d(e,"a",(function(){return r}))},709:function(t,e,c){"use strict";c.d(e,"a",(function(){return o}));var r=c(653);var n=c(652);function o(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||Object(n.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=21.ec1100bf.chunk.js.map