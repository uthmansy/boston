(this.webpackJsonpboston=this.webpackJsonpboston||[]).push([[8],{147:function(e,i,t){"use strict";t.r(i),t.d(i,"default",(function(){return d}));var u=t(4),a=t(135),l=t(137),s=t(1),n=t(64),r=t(123),o=t(52),c=t(51),m=t(3),p=t(0);function d(){var e=Object(u.f)().index,i=Object(s.useRef)(null),t=Object(o.a)(i,{threshold:0});return Object(s.useEffect)((function(){document.title=n.a[e-1].title,window.scrollTo({top:0,behavior:"smooth"})}),[e]),Object(p.jsxs)("div",{className:"animate__animated animate__fadeIn py-20",children:[Object(p.jsxs)("header",{className:"bg-gray-100 dark:bg-gray-800 p-7",children:[Object(p.jsx)("h3",{className:"text-2xl font-semibold text-gray-700 dark:text-white mb-0",children:n.a[e-1].title}),Object(p.jsxs)("span",{className:"text-sm tracking-wide uppercase dark:text-gray-500",children:["Posted on: ",n.a[e-1].date]})]}),Object(p.jsx)("div",{className:"aspect-w-2 aspect-h-1 mb-10 relative",ref:i,children:t?Object(p.jsx)("img",{src:"/images/posts/".concat(e,".jpg"),alt:"post",className:"object-cover"}):Object(p.jsx)(c.a,{})}),Object(p.jsx)("div",{className:"mb-10",children:Object(p.jsx)(a.a,{children:n.a[e-1].body,remarkPlugins:[l.a]})}),Object(p.jsxs)("div",{children:[Object(p.jsx)("h3",{children:"Comments"}),Object(p.jsx)(r.DiscussionEmbed,{shortname:m.f,config:{url:window.location.href,identifier:e,title:n.a[e-1].title}})]})]})}},51:function(e,i,t){"use strict";t.d(i,"a",(function(){return a}));var u=t(0);function a(){return Object(u.jsxs)("div",{className:"bg-gray-200 dark:bg-gray-800 flex flex-col items-center justify-center",children:[Object(u.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-32 w-32 text-gray-400 animate-pulse",viewBox:"0 0 20 20",fill:"currentColor",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z",clipRule:"evenodd"})}),Object(u.jsx)("span",{className:"text-sm uppercase animate-pulse",children:"Image Loading.."})]})}},52:function(e,i,t){"use strict";t.d(i,"a",(function(){return l}));var u=t(17),a=t(1);function l(e,i){var t=Object(a.useState)(!1),l=Object(u.a)(t,2),s=l[0],n=l[1],r=new IntersectionObserver((function(e){e.forEach((function(e){e.isIntersecting&&n(!0)}))}),i);return Object(a.useEffect)((function(){e.current&&r.observe(e.current)}),[e]),s}},64:function(e,i,t){"use strict";t.d(i,"a",(function(){return u}));var u=[{title:"A Blog post with support for Markdown",date:"tuesday 09/07/2021",image:"/images/posts/1.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"elementum sed sit amet dui. Donec rutrum congue",date:"tuesday 09/07/2021",image:"/images/posts/2.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Nulla quis lorem ut libero malesuada feugiat.",date:"tuesday 09/07/2021",image:"/images/posts/3.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Curabitur aliquet quam id dui posuere blandit",date:"tuesday 09/07/2021",image:"/images/posts/4.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Curabitur aliquet quam id dui posuere blandit.",date:"tuesday 09/07/2021",image:"/images/posts/5.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Curabitur aliquet quam id dui posuere blandit",date:"tuesday 09/07/2021",image:"/images/posts/1.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Curabitur aliquet quam id dui posuere blandit",date:"tuesday 09/07/2021",image:"/images/posts/1.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Vivamus magna justo, lacinia eget consectetur sed, convallis.",date:"tuesday 09/07/2021",image:"/images/posts/1.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'},{title:"Proin eget tortor risus.",date:"tuesday 09/07/2021",image:"/images/posts/1.jpg",body:'Lorem ipsum dolor sit amet, *consectetur adipiscing elit*. Proin eget tortor risus. __Vestibulum__ ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Pellentesque in ipsum id orci porta dapibus.\n\n> Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Proin eget tortor risus. Nulla porttitor accumsan tincidunt.\n\nMauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Curabitur aliquet quam id dui posuere blandit.\n\nVestibulum ante ipsum primis in [link text](http://dev.nodeca.com) luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus suscipit tortor eget felis porttitor volutpat. Pellentesque in ipsum id orci porta dapibus.\n\n[link text](http://dev.nodeca.com)\n\n[link with title](http://nodeca.github.io/pica/demo/ "title text!")\n\nAutoconverted link https://github.com/nodeca/pica (enable linkify to see)\n'}]}}]);
//# sourceMappingURL=8.9494c1d3.chunk.js.map