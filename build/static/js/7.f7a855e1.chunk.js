(this.webpackJsonpboston=this.webpackJsonpboston||[]).push([[7],{151:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return m}));var r=n(17),c=n(1),s=n(46),i=n(3),a=n(69),o=n(6),l=n(2),u=n(70),j=n(52),d=n(51),b=n(0);function f(e){var t=e.item,n=e.index,s=Object(c.useState)(!1),i=Object(r.a)(s,2),a=i[0],f=i[1],m=Object(c.useRef)(null),h=Object(j.a)(m,{threshold:0}),x=["/images/portfolios/".concat(n+1,".jpg")];return Object(b.jsxs)("div",{className:"relative group",children:[Object(b.jsx)("button",{onClick:function(){return f(!0)},className:"absolute top-5 right-5 flex items-center justify-center text-white focus:outline-none h-14 w-14 group-hover:opacity-70 opacity-0 transition-all duration-300 bg-black z-10",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"})})}),Object(b.jsx)("div",{className:"aspect-w-3 aspect-h-4 sm:aspect-w-1 sm:aspect-h-1",ref:m,children:h?Object(b.jsx)("img",{src:"/images/portfolios/".concat(n+1,".jpg"),alt:"portfolio",className:"object-cover filter grayscale"}):Object(b.jsx)(d.a,{})}),Object(b.jsxs)("div",{className:"bg-gray-100 dark:bg-gray-800 bg-opacity-90 absolute flex bottom-0 w-full font-sm",children:[Object(b.jsx)("div",{className:"uppercase px-4 h-20 flex items-center flex-1",children:Object(b.jsxs)("h4",{className:"font-normal mb-0",children:[" ",t.title," "]})}),Object(b.jsx)(o.b,{to:"".concat(l.f,"/").concat(n+1),className:"h-20 w-20 flex items-center justify-center bg-gray-700 flex-shrink-0 text-white",children:Object(b.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(b.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.3,d:"M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"})})})]}),a&&Object(b.jsx)(u.a,{mainSrc:x[0],onCloseRequest:function(){return f(!1)}})]})}function m(){var e=Object(c.useState)(0),t=Object(r.a)(e,2),n=t[0],o=t[1];return Object(c.useEffect)((function(){document.title="Portfolio"}),[]),Object(c.useEffect)((function(){window.scrollTo({top:0,behavior:"smooth"})}),[n]),Object(b.jsxs)("div",{className:"animate__animated  animate__fadeIn py-20",children:[Object(b.jsx)(s.a,{children:"Portfolio"}),Object(b.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-10 mb-20",children:i.j.slice(n,n+i.i.itemsPerPage).map((function(e,t){return Object(b.jsx)(f,{item:e,index:t+n},t)}))}),i.j.length>i.i.itemsPerPage&&Object(b.jsx)(a.a,{setCurrentPage:o,currentPage:n,items:i.j})]})}},46:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(e){var t=e.children;return Object(r.jsxs)("div",{className:"relative uppercase mb-8",children:[Object(r.jsx)("h2",{className:"font-semibold relative z-10 text-3xl dark:text-white",children:t}),Object(r.jsx)("span",{className:"absolute -top-7 font-bold text-gray-100 dark:text-gray-800 dark:opacity-0 text-5xl sm:text-7xl",children:t})]})}},51:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n(0);function c(){return Object(r.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center",children:[Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-32 w-32 text-gray-400 animate-pulse",viewBox:"0 0 20 20",fill:"currentColor",children:Object(r.jsx)("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),Object(r.jsx)("span",{className:"text-sm uppercase animate-pulse",children:"Image Loading.."})]})}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(17),c=n(1);function s(e,t){var n=Object(c.useState)(!1),s=Object(r.a)(n,2),i=s[0],a=s[1],o=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&a(!0)}))}),t);return Object(c.useEffect)((function(){e.current&&o.observe(e.current)}),[e]),i}},69:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n(17),c=n(1),s=n(3),i=n(0);function a(e){var t=e.children,n=e.onClick,r=e.active,c=void 0!==r&&r;return Object(i.jsx)("button",{onClick:n,className:"dark:bg-gray-800 outline-none uppercase transition-all duration-300 tracking-wide text-sm rounded-full ".concat(c?"bg-primary dark:bg-primary text-white":"bg-gray-200"," focus:outline-none flex h-8 w-8 items-center justify-center"),children:t})}function o(e){var t=e.items,n=e.setCurrentPage,o=e.currentPage,l=Object(c.useState)(!1),u=Object(r.a)(l,2),j=u[0],d=u[1],b=Object(c.useState)(!0),f=Object(r.a)(b,2),m=f[0],h=f[1],x=Object(c.useState)(1),g=Object(r.a)(x,2),p=g[0],O=g[1];return Object(c.useEffect)((function(){h(0===o),o+s.i.itemsPerPage>=t.length?d(!0):d(!1)}),[o,t.length]),Object(c.useEffect)((function(){O((function(e){return e+Math.floor(t.length/s.i.itemsPerPage)}))}),[t.length]),Object(i.jsxs)("nav",{className:"flex space-x-3 justify-center",children:[!m&&Object(i.jsx)(a,{onClick:function(){return n(o-s.i.itemsPerPage)},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M15 19l-7-7 7-7"})})}),Array(p).fill("").map((function(e,t){return Object(i.jsx)(a,{active:o===t*s.i.itemsPerPage&&!0,onClick:function(){return n(t*s.i.itemsPerPage)},children:t+1},t)})),!j&&Object(i.jsx)(a,{onClick:function(){return n(o+s.i.itemsPerPage)},children:Object(i.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(i.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1,d:"M9 5l7 7-7 7"})})})]})}}}]);
//# sourceMappingURL=7.f7a855e1.chunk.js.map