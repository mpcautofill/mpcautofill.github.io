(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{4196:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributions",function(){return t(646)}])},7309:function(e,n,t){"use strict";t.d(n,{Z:function(){return l}});var r=t(5893),i=t(1664),s=t.n(i),c=t(3205);function a(){return(0,r.jsx)("span",{style:{marginLeft:"0.25em",marginRight:"0.25em"},children:" "})}function l(){var e,n;let t=(0,c.zr)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("footer",{className:"page-footer font-small blue",children:(0,r.jsxs)("div",{className:"footer-copyright text-center py-3",children:["Made with ♥️ by chilli_axe",(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)("a",{href:"https://github.com/chilli-axe/mpc-autofill",target:"_blank",children:"GitHub"}),t.isSuccess&&(null===(e=t.data)||void 0===e?void 0:e.reddit)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)("a",{href:t.data.reddit,target:"_blank",children:"Reddit"})]}),t.isSuccess&&(null===(n=t.data)||void 0===n?void 0:n.discord)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)("a",{href:t.data.discord,target:"_blank",children:"Discord"})]}),(0,r.jsx)(a,{}),"•",(0,r.jsx)(a,{}),(0,r.jsx)(s(),{href:"/about",children:"About"})]})})]})}},6666:function(e,n,t){"use strict";t.d(n,{J:function(){return o}});var r=t(2692),i=t(5893),s=t(9521);function c(){let e=(0,r.Z)(["\n  position: absolute;\n  top: 50vh;\n  left: 50vw;\n  transform: translate(-50%, -50%);\n  text-align: center;\n"]);return c=function(){return e},e}function a(){let e=(0,r.Z)(["\n  font-size: 1.25em;\n"]);return a=function(){return e},e}let l=s.ZP.div.withConfig({componentId:"sc-2f488237-0"})(c()),d=s.ZP.p.withConfig({componentId:"sc-2f488237-1"})(a());function o(e){let{title:n,text:t}=e;return(0,i.jsxs)(l,{children:[(0,i.jsx)("h1",{children:n}),t.map((e,n)=>(0,i.jsx)(d,{children:e},n.toString()))]})}},5617:function(e,n,t){"use strict";t.d(n,{O:function(){return c}});var r=t(5893),i=t(1677),s=t(6666);function c(){return(0,r.jsx)(s.J,{title:"No Server Configured",text:["You haven't configured a server for ".concat(i.vV," to communicate with just yet"),"Click the Configure Server button in the top-right to get started!"]})}},646:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return _}});var r=t(5893),i=t(9008),s=t.n(i);t(7294);var c=t(8375),a=t(1677),l=t(8737),d=t(1664),o=t.n(d),h=t(3205),u=t(5305),x=t(6898);function j(){var e,n,t,i,s,c,d;let o=(0,h.QZ)();(0,h.zr)();let x=(0,l.Sb)(),j=(null===(e=o.data)||void 0===e?void 0:e.card_count_by_type)!=null?Object.values(o.data.card_count_by_type).reduce((e,n)=>e+n,0):0,m=(Math.round((null!==(i=null===(n=o.data)||void 0===n?void 0:n.total_database_size)&&void 0!==i?i:0)/1e9*100)/100).toLocaleString(),f=Object.fromEntries([a.Zb,a.dt,a.WU].map(e=>{var n;return[e,(null!==(c=(null!==(s=null===(n=o.data)||void 0===n?void 0:n.card_count_by_type)&&void 0!==s?s:{})[e])&&void 0!==c?c:0).toLocaleString()]}));return o.isFetching||(null===(t=o.data)||void 0===t?void 0:t.sources)==null?(0,r.jsx)(u.$,{}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{children:[x," Contributions"]}),(0,r.jsxs)("p",{children:["The ",x," database tracks ",(0,r.jsx)("b",{children:j.toLocaleString()})," ","images, with a total size of ",(0,r.jsxs)("b",{children:[m," GB"]})," — comprised of ",(0,r.jsx)("b",{children:f[a.Zb]})," cards,"," ",(0,r.jsx)("b",{children:f[a.dt]})," cardbacks, and"," ",(0,r.jsx)("b",{children:f[a.WU]})," tokens — from"," ",(0,r.jsx)("b",{children:(null!==(d=o.data.sources)&&void 0!==d?d:[]).length})," sources."]}),(0,r.jsxs)("p",{children:[a.vV," databases are typically synced with all sources every day (beginning at midnight UTC) to ensure all changes are recorded in a timely manner."]})]})}function m(e){let{contribution:n}=e;return(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:null!=n.external_link&&n.external_link.length>0?(0,r.jsx)(o(),{href:n.external_link,target:"_blank",children:n.name}):n.name}),(0,r.jsx)("td",{children:n.source_type}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:n.qty_cards})," card","1"!=n.qty_cards&&"s",","," ",(0,r.jsx)("b",{children:n.qty_cardbacks})," cardback","1"!=n.qty_cardbacks&&"s",", and"," ",(0,r.jsx)("b",{children:n.qty_tokens})," token","1"!=n.qty_tokens&&"s",", at"," ",(0,r.jsxs)("b",{children:[n.avgdpi," DPI"]})," on average and a total size of"," ",(0,r.jsx)("b",{children:n.size}),".",n.description.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)("i",{children:['"',n.description,'"']})]})]})]},n.name)}function f(){var e;let n=(0,h.QZ)();return n.isFetching||(null===(e=n.data)||void 0===e?void 0:e.sources)==null?(0,r.jsx)(u.$,{}):(0,r.jsx)(x.y6,{children:(0,r.jsxs)(x.pp,{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"prevent-select",children:"Name"}),(0,r.jsx)("th",{className:"prevent-select",children:"Type"}),(0,r.jsx)("th",{className:"prevent-select",children:"Contribution"})]})}),(0,r.jsx)("tbody",{children:n.data.sources.map(e=>(0,r.jsx)(m,{contribution:e},"".concat(e.name,"-row")))})]})})}var b=t(7309),g=t(4279),p=t(5617);function v(){let e=(0,l.Sb)();return(0,r.jsxs)(c.Z,{variant:"secondary",children:[(0,r.jsx)("h3",{children:"Contribution Guidelines"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Image filetype must be either ",(0,r.jsx)("code",{children:"png"})," (recommended) or"," ",(0,r.jsx)("code",{children:"jpeg"})]}),(0,r.jsxs)("li",{children:["When you have multiple versions of a card in the same folder, use parentheses to differentiate them — e.g."," ",(0,r.jsx)("code",{children:"Image A.png"})," and ",(0,r.jsx)("code",{children:"Image A (Extended).png"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["The text in parentheses (e.g. ",(0,r.jsx)("code",{children:"Extended"})," in the above example) will be ignored by the search engine."]})})]}),(0,r.jsxs)("li",{children:["If a card has multiple names, use an ampersand to separate them — e.g. ",(0,r.jsx)("code",{children:"Fire & Ice.png"})]}),(0,r.jsxs)("li",{children:["Store your token images in a folder called ",(0,r.jsx)("code",{children:"Tokens"})," ","(anywhere in your repository)"]}),(0,r.jsxs)("li",{children:["Store your cardback images in a folder called ",(0,r.jsx)("code",{children:"Cardbacks"})," ","(anywhere in your repository)"]}),(0,r.jsxs)("li",{children:["Prepend the names of any folders you don't want to be indexed by"," ",e," with ",(0,r.jsx)("code",{children:"!"}),"— e.g. ",(0,r.jsx)("code",{children:"!Misc and Art"})]}),(0,r.jsxs)("li",{children:["Limit your files to less than ",(0,r.jsx)("b",{children:"30 MB"})," per image — this is the maximum that Google Scripts can return in one request and the maximum that"," ",(0,r.jsx)("a",{href:a.vs,target:"_blank",children:a.Fo})," ","accepts, meaning the desktop client won't work with images that exceed this limit."]})]})]})}function y(){let e=(0,l.NM)();return e?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(j,{}),(0,r.jsx)(v,{}),(0,r.jsx)(f,{}),(0,r.jsx)(b.Z,{})]}):(0,r.jsx)(p.O,{})}function _(){let e=(0,l.Sb)();return(0,r.jsxs)(g.XR,{children:[(0,r.jsxs)(s(),{children:[(0,r.jsxs)("title",{children:[e," Contributions"]}),(0,r.jsx)("meta",{name:"description",content:"A summary of the image contributors connected to ".concat(a.vV,".")})]}),(0,r.jsx)(y,{})]})}},9008:function(e,n,t){e.exports=t(2636)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=4196)}),_N_E=e.O()}]);