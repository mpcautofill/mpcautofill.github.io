(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[553],{5424:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/new",function(){return n(3911)}])},3990:function(e,t,n){"use strict";n.d(t,{O:function(){return NoBackendDefault}});var r=n(5893),c=n(615),a=n(7297);function NoBackendDefault(){return(0,r.jsx)(a.J,{title:"No Server Configured",text:["You haven't configured a server for ".concat(c.vV," to communicate with just yet."),"Click the Configure Server button in the top-right to get started!"]})}},3877:function(e,t,n){"use strict";n.d(t,{Z:function(){return Footer}});var r=n(5893),c=n(1664),a=n.n(c),s=n(3644);function Spacer(){return(0,r.jsx)("span",{style:{marginLeft:"0.25em",marginRight:"0.25em"},children:" "})}function Footer(){var e,t;let n=(0,s.zr)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("footer",{className:"page-footer font-small blue",children:(0,r.jsxs)("div",{className:"footer-copyright text-center py-3",children:["Made with ♥️ by chilli_axe",(0,r.jsx)(Spacer,{}),"•",(0,r.jsx)(Spacer,{}),(0,r.jsx)("a",{href:"https://github.com/chilli-axe/mpc-autofill",target:"_blank",children:"GitHub"}),n.isSuccess&&(null===(e=n.data)||void 0===e?void 0:e.reddit)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Spacer,{}),"•",(0,r.jsx)(Spacer,{}),(0,r.jsx)("a",{href:n.data.reddit,target:"_blank",children:"Reddit"})]}),n.isSuccess&&(null===(t=n.data)||void 0===t?void 0:t.discord)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(Spacer,{}),"•",(0,r.jsx)(Spacer,{}),(0,r.jsx)("a",{href:n.data.discord,target:"_blank",children:"Discord"})]}),(0,r.jsx)(Spacer,{}),"•",(0,r.jsx)(Spacer,{}),(0,r.jsx)(a(),{href:"/about",children:"About"})]})})]})}},7297:function(e,t,n){"use strict";n.d(t,{J:function(){return GenericErrorPage}});var r=n(2729),c=n(5893),a=n(9521);function _templateObject(){let e=(0,r._)(["\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  font-size: 1.25em;\n"]);return _templateObject1=function(){return e},e}let s=a.ZP.div.withConfig({componentId:"sc-2f488237-0"})(_templateObject()),i=a.ZP.p.withConfig({componentId:"sc-2f488237-1"})(_templateObject1());function GenericErrorPage(e){let{title:t,text:n}=e;return(0,c.jsxs)(s,{children:[(0,c.jsx)("h1",{children:t}),n.map((e,t)=>(0,c.jsx)(i,{children:e},t.toString()))]})}},3911:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return New}});var r=n(5893),c=n(9008),a=n.n(c),s=n(7294),i=n(615),o=n(3990),d=n(6470),l=n(2729),u=n(7104),h=n(1555),j=n(4051),x=n(9521),f=n(3644),m=n(8043),p=n(3740);function _templateObject(){let e=(0,l._)(["\n  display: inline;\n"]);return _templateObject=function(){return e},e}function _templateObject1(){let e=(0,l._)(["\n  display: inline;\n"]);return _templateObject1=function(){return e},e}let w=x.ZP.h3.withConfig({componentId:"sc-fce3accf-0"})(_templateObject()),g=x.ZP.p.withConfig({componentId:"sc-fce3accf-1"})(_templateObject1());function NewCard(e){let{cardDocument:t}=e;return(0,r.jsx)(h.Z,{children:(0,r.jsx)(p.Ev,{maybeCardDocument:t,cardHeaderTitle:t.date,noResultsFound:!1},"new-cards-".concat(t.identifier))})}function NewCardsForSource(e){var t;let{sourceKey:n,firstPage:c}=e,[a,i]=(0,s.useState)(1),o=(0,f.u3)([n,a]),d=(0,r.jsx)("div",{className:"d-grid gap-0 mx-auto",style:{maxWidth:"20%"},children:(0,r.jsx)(u.Z,{onClick:()=>i(a+1),disabled:o.isFetching,children:o.isFetching?(0,r.jsx)(m.$,{size:1.5}):"Load More"})});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{className:"orpheus",children:(0,r.jsx)("em",{children:c.source.name})}),"\xa0\xa0\xa0",(0,r.jsxs)(g,{className:"text-primary",children:[c.hits," new card",1!=c.hits&&"s"]}),(0,r.jsxs)(j.Z,{xxl:6,lg:4,md:3,sm:2,xs:2,className:"g-0",children:[c.cards.map(e=>(0,r.jsx)(NewCard,{cardDocument:e},"whats-new-card-".concat(e.identifier))),(null!==(t=o.data)&&void 0!==t?t:[]).map(e=>(0,r.jsx)(NewCard,{cardDocument:e},"whats-new-card-".concat(e.identifier)))]}),(0,r.jsx)("br",{}),a<c.pages&&d]})}function NewCards(){let e=(0,f.H9)(),t=(0,d.Sb)();return e.isFetching||null==e.data?(0,r.jsx)(m.$,{}):(0,r.jsx)(r.Fragment,{children:Object.keys(e.data).length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("p",{children:["Check out the new cards added to ",t," in the last two weeks."]}),Object.entries(e.data).map((e,t)=>{let[n,c]=e;return(0,r.jsxs)(r.Fragment,{children:[0!=t&&(0,r.jsx)("hr",{}),(0,r.jsx)(NewCardsForSource,{sourceKey:n,firstPage:c},n)]})})]}):(0,r.jsxs)("p",{children:["Looks like nothing was added to ",t," in the last two weeks. :("]})})}var b=n(3877),_=n(6753);function NewOrDefault(){let e=(0,d.NM)();return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("h1",{children:"What's New?"}),(0,r.jsx)(NewCards,{}),(0,r.jsx)(b.Z,{})]}):(0,r.jsx)(o.O,{})}function New(){let e=(0,d.Sb)();return(0,r.jsxs)(_.XR,{children:[(0,r.jsxs)(a(),{children:[(0,r.jsx)("title",{children:"".concat(e," New Cards")}),(0,r.jsx)("meta",{name:"description",content:"Check out the new cards added to ".concat(i.vV," over the last two weeks.")})]}),(0,r.jsx)(NewOrDefault,{})]})}},9008:function(e,t,n){e.exports=n(6561)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5424)}),_N_E=e.O()}]);