(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[187],{4196:function(e,n,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/contributions",function(){return s(5241)}])},7309:function(e,n,s){"use strict";s.d(n,{Z:function(){return l}});var r=s(5893),t=s(1664),i=s.n(t),a=s(2283);function d(){return(0,r.jsx)("span",{style:{marginLeft:"0.25em",marginRight:"0.25em"},children:" "})}function l(){var e,n;let s=(0,a.zr)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("hr",{}),(0,r.jsx)("footer",{className:"page-footer font-small blue",children:(0,r.jsxs)("div",{className:"footer-copyright text-center py-3",children:[(0,r.jsx)("a",{href:"https://github.com/chilli-axe/mpc-autofill",target:"_blank",children:"GitHub"}),(null===(e=s.data)||void 0===e?void 0:e.reddit)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),"•",(0,r.jsx)(d,{}),(0,r.jsx)("a",{href:s.data.reddit,target:"_blank",children:"Reddit"})]}),(null===(n=s.data)||void 0===n?void 0:n.discord)!=null&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(d,{}),"•",(0,r.jsx)(d,{}),(0,r.jsx)("a",{href:s.data.discord,target:"_blank",children:"Discord"})]}),(0,r.jsx)(d,{}),"•",(0,r.jsx)(d,{}),(0,r.jsx)(i(),{href:"/about",children:"About"})]})})]})}},5241:function(e,n,s){"use strict";s.r(n),s.d(n,{default:function(){return g}});var r=s(5893),t=s(9008),i=s.n(t),a=s(9749),d=s(7309),l=s(2283),c=s(1677),o=s(8375),h=s(5147);s(7294);var u=s(2664),x=s(1664),j=s.n(x);function m(){var e,n,s,t,i,a,d,o,h,x,j;let m=(0,u.v9)(e=>e.backend.url),b=(0,l.QZ)(),v=(0,l.zr)(),g=(null===(e=b.data)||void 0===e?void 0:e.card_count_by_type)!=null?Object.values(b.data.card_count_by_type).reduce((e,n)=>e+n,0):0,p=(Math.round((null!==(a=null===(n=b.data)||void 0===n?void 0:n.total_database_size)&&void 0!==a?a:0)/1e9*100)/100).toLocaleString(),f=Object.fromEntries([c.Zb,c.dt,c.WU].map(e=>{var n;return[e,(null!==(o=(null!==(d=null===(n=b.data)||void 0===n?void 0:n.card_count_by_type)&&void 0!==d?d:{})[e])&&void 0!==o?o:0).toLocaleString()]}));return null!=m?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("h2",{children:[null!==(h=null===(s=v.data)||void 0===s?void 0:s.name)&&void 0!==h?h:""," Contributions"]}),(0,r.jsxs)("p",{children:["The ",null!==(x=null===(t=v.data)||void 0===t?void 0:t.name)&&void 0!==x?x:""," database tracks"," ",(0,r.jsx)("b",{children:g.toLocaleString()})," images, with a total size of"," ",(0,r.jsxs)("b",{children:[p," GB"]})," — comprised of"," ",(0,r.jsx)("b",{children:f[c.Zb]})," cards,"," ",(0,r.jsx)("b",{children:f[c.dt]})," cardbacks, and"," ",(0,r.jsx)("b",{children:f[c.WU]})," tokens — from"," ",(0,r.jsx)("b",{children:(null!==(j=null===(i=b.data)||void 0===i?void 0:i.sources)&&void 0!==j?j:[]).length})," sources."]}),(0,r.jsxs)("p",{children:[c.vV," databases are typically synced with all sources every day (beginning at midnight UTC) to ensure all changes are recorded in a timely manner."]})]}):(0,r.jsx)("br",{})}function b(){var e,n;let s=(0,l.zr)(),t=null!==(n=null===(e=s.data)||void 0===e?void 0:e.name)&&void 0!==n?n:c.vV;return(0,r.jsxs)(o.Z,{variant:"secondary",children:[(0,r.jsx)("h3",{children:"Contribution Guidelines"}),(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["Image filetype must be either ",(0,r.jsx)("code",{children:"png"})," (recommended) or"," ",(0,r.jsx)("code",{children:"jpeg"})]}),(0,r.jsxs)("li",{children:["When you have multiple versions of a card in the same folder, use parentheses to differentiate them — e.g."," ",(0,r.jsx)("code",{children:"Image A.png"})," and ",(0,r.jsx)("code",{children:"Image A (Extended).png"}),(0,r.jsx)("ul",{children:(0,r.jsxs)("li",{children:["The text in parentheses (e.g. ",(0,r.jsx)("code",{children:"Extended"})," in the above example) will be ignored by the search engine."]})})]}),(0,r.jsxs)("li",{children:["If a card has multiple names, use an ampersand to separate them — e.g. ",(0,r.jsx)("code",{children:"Fire & Ice.png"})]}),(0,r.jsxs)("li",{children:["Store your token images in a folder called ",(0,r.jsx)("code",{children:"Tokens"})," ","(anywhere in your repository)"]}),(0,r.jsxs)("li",{children:["Store your cardback images in a folder called ",(0,r.jsx)("code",{children:"Cardbacks"})," ","(anywhere in your repository)"]}),(0,r.jsxs)("li",{children:["Prepend the names of any folders you don't want to be indexed by"," ",t," with ",(0,r.jsx)("code",{children:"!"}),"— e.g. ",(0,r.jsx)("code",{children:"!Misc and Art"})]}),(0,r.jsxs)("li",{children:["Limit your files to less than ",(0,r.jsx)("b",{children:"30 MB"})," per image — this is the maximum that Google Scripts can return in one request and the maximum that MakePlayingCards.com accepts, meaning the desktop client won't work with images that exceed this limit."]})]})]})}function v(){var e;let n=(0,u.v9)(e=>e.backend.url),s=(0,l.QZ)();return null!=n?(null===(e=s.data)||void 0===e?void 0:e.sources)==null?(0,r.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,r.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,r.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}):(0,r.jsxs)(h.Z,{style:{tableLayout:"auto"},children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{className:"prevent-select",children:"Name"}),(0,r.jsx)("th",{className:"prevent-select",children:"Type"}),(0,r.jsx)("th",{className:"prevent-select",children:"Contribution"}),(0,r.jsx)("th",{}),(0,r.jsx)("th",{})]})}),(0,r.jsx)("tbody",{children:s.data.sources.map(e=>(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:null!=e.external_link?(0,r.jsx)(j(),{href:e.external_link,target:"_blank",children:e.name}):e.name}),(0,r.jsx)("td",{children:e.source_type}),(0,r.jsxs)("td",{children:[(0,r.jsx)("b",{children:e.qty_cards})," card","1"!=e.qty_cards&&"s",","," ",(0,r.jsx)("b",{children:e.qty_cardbacks})," cardback","1"!=e.qty_cardbacks&&"s",", and"," ",(0,r.jsx)("b",{children:e.qty_tokens})," token","1"!=e.qty_tokens&&"s",", at"," ",(0,r.jsxs)("b",{children:[e.avgdpi," DPI"]})," on average and a total size of"," ",(0,r.jsx)("b",{children:e.size}),".",e.description.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("br",{}),(0,r.jsxs)("i",{children:['"',e.description,'"']})]})]})]},e.name))})]}):(0,r.jsx)(r.Fragment,{})}function g(){return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(i(),{children:[(0,r.jsxs)("title",{children:[c.vV," Contributions"]}),(0,r.jsx)("meta",{name:"description",content:"TODO"})," "]}),(0,r.jsxs)(a.Z,{children:[(0,r.jsx)(m,{}),(0,r.jsx)(b,{}),(0,r.jsx)(v,{}),(0,r.jsx)(d.Z,{})]})]})}},5147:function(e,n,s){"use strict";var r=s(4184),t=s.n(r),i=s(7294),a=s(6792),d=s(5893);let l=i.forwardRef(({bsPrefix:e,className:n,striped:s,bordered:r,borderless:i,hover:l,size:c,variant:o,responsive:h,...u},x)=>{let j=(0,a.vE)(e,"table"),m=t()(n,j,o&&`${j}-${o}`,c&&`${j}-${c}`,s&&`${j}-${"string"==typeof s?`striped-${s}`:"striped"}`,r&&`${j}-bordered`,i&&`${j}-borderless`,l&&`${j}-hover`),b=(0,d.jsx)("table",{...u,className:m,ref:x});if(h){let e=`${j}-responsive`;return"string"==typeof h&&(e=`${e}-${h}`),(0,d.jsx)("div",{className:e,children:b})}return b});n.Z=l}},function(e){e.O(0,[565,749,774,888,179],function(){return e(e.s=4196)}),_N_E=e.O()}]);