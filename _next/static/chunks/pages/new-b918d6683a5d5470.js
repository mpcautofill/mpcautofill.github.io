(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[971],{290:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new",function(){return t(9532)}])},7309:function(e,n,t){"use strict";t.d(n,{Z:function(){return o}});var r=t(5893),s=t(1664),i=t.n(s),c=t(3205);function a(){return(0,r.jsx)("span",{style:{marginLeft:"0.25em",marginRight:"0.25em"},children:" "})}function o(){var e,n;let t=(0,c.zr)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("footer",{className:"page-footer font-small blue",children:(0,r.jsxs)("div",{className:"footer-copyright text-center py-3",children:["Made with ♥️ by chilli_axe",(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)("a",{href:"https://github.com/chilli-axe/mpc-autofill",target:"_blank",children:"GitHub"}),t.isSuccess&&(null===(e=t.data)||void 0===e?void 0:e.reddit)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)("a",{href:t.data.reddit,target:"_blank",children:"Reddit"})]}),t.isSuccess&&(null===(n=t.data)||void 0===n?void 0:n.discord)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)("a",{href:t.data.discord,target:"_blank",children:"Discord"})]}),(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)(i(),{href:"/about",children:"About"})]})})]})}},6666:function(e,n,t){"use strict";t.d(n,{J:function(){return l}});var r=t(2692),s=t(5893),i=t(9521);function c(){let e=(0,r.Z)(["\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]);return c=function(){return e},e}function a(){let e=(0,r.Z)(["\n  font-size: 1.25em;\n"]);return a=function(){return e},e}let o=i.ZP.div.withConfig({componentId:"sc-2f488237-0"})(c()),d=i.ZP.p.withConfig({componentId:"sc-2f488237-1"})(a());function l(e){let{title:n,text:t}=e;return(0,s.jsxs)(o,{children:[(0,s.jsx)("h1",{children:n}),t.map((e,n)=>(0,s.jsx)(d,{children:e},n.toString()))]})}},5617:function(e,n,t){"use strict";t.d(n,{O:function(){return c}});var r=t(5893),s=t(1677),i=t(6666);function c(){return(0,r.jsx)(i.J,{title:"No Server Configured",text:["You haven't configured a server for ".concat(s.vV," to communicate with just yet"),"Click the Configure Server button in the top-right to get started!"]})}},9532:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return F}});var r=t(5893),s=t(9008),i=t.n(s),c=t(7294),a=t(1677),o=t(8737),d=t(2692),l=t(7104),u=t(1555),h=t(4051),x=t(9521),f=t(3205),j=t(9159),m=t(5305);function g(){let e=(0,d.Z)(["\n  display: inline;\n"]);return g=function(){return e},e}function p(){let e=(0,d.Z)(["\n  display: inline;\n"]);return p=function(){return e},e}let w=x.ZP.h3.withConfig({componentId:"sc-8a8ecba-0"})(g()),v=x.ZP.p.withConfig({componentId:"sc-8a8ecba-1"})(p());function b(e){let{cardDocument:n}=e;return(0,r.jsx)(u.Z,{children:(0,r.jsx)(j.Ev,{maybeCardDocument:n,cardHeaderTitle:n.date,noResultsFound:!1},"new-cards-".concat(n.identifier))})}function k(e){var n;let{sourceKey:t,firstPage:s}=e,[i,a]=(0,c.useState)(1),o=(0,f.u3)([t,i]),d=(0,r.jsx)("div",{className:"d-grid gap-0 mx-auto",style:{maxWidth:"20%"},children:(0,r.jsx)(l.Z,{onClick:()=>a(i+1),disabled:o.isFetching,children:o.isFetching?(0,r.jsx)(m.$,{size:1.5}):"Load More"})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{className:"orpheus",children:(0,r.jsx)("em",{children:s.source.name})}),"\xa0\xa0\xa0",(0,r.jsxs)(v,{className:"text-primary",children:[s.hits," new card",1!=s.hits&&"s"]}),(0,r.jsxs)(h.Z,{xxl:6,lg:4,md:3,sm:2,xs:2,className:"g-0",children:[s.cards.map(e=>(0,r.jsx)(b,{cardDocument:e},"whats-new-card-".concat(e.identifier))),(null!==(n=o.data)&&void 0!==n?n:[]).map(e=>(0,r.jsx)(b,{cardDocument:e},"whats-new-card-".concat(e.identifier)))]}),(0,r.jsx)("br",{}),i<s.pages&&d]})}function _(){let e=(0,f.H9)(),n=(0,o.Sb)();return e.isFetching||null==e.data?(0,r.jsx)(m.$,{}):(0,r.jsx)(r.Fragment,{children:Object.keys(e.data).length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Check out the new cards added to ",n," in the last two weeks."]}),Object.entries(e.data).map((e,n)=>{let[t,s]=e;return(0,r.jsxs)(r.Fragment,{children:[0!=n&&(0,r.jsx)("hr",{}),(0,r.jsx)(k,{sourceKey:t,firstPage:s},t)]})})]}):(0,r.jsxs)("p",{children:["Looks like nothing was added to ",n," in the last two weeks. :("]})})}var N=t(7309),C=t(3492),Z=t(5617);function y(){let e=(0,o.NM)();return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"What's New?"}),(0,r.jsx)(_,{}),(0,r.jsx)(N.Z,{})]}):(0,r.jsx)(Z.O,{})}function F(){let e=(0,o.Sb)();return(0,r.jsxs)(C.XR,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsxs)("title",{children:[e," New Cards"]}),(0,r.jsx)("meta",{name:"description",content:"Check out the new cards added to ".concat(a.vV," over the last two weeks.")})]}),(0,r.jsx)(y,{})]})}},9008:function(e,n,t){e.exports=t(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=290)}),_N_E=e.O()}]);