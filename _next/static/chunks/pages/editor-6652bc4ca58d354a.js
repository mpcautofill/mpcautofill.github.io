(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[154],{1832:function(e,s,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/editor",function(){return l(1260)}])},1260:function(e,s,l){"use strict";l.r(s),l.d(s,{default:function(){return eo}});var n=l(5893),i=l(9749),t=l(7294),r=l(2664),a=l(8182),c=l(5675),d=l.n(c);function o(e){let[s,l]=(0,t.useState)(!0);(0,t.useEffect)(()=>l(!0),[e.imageIdentifier]);let i=(0,r.v9)(s=>null!=e.imageIdentifier?s.cardDocuments.cardDocuments[e.imageIdentifier]:void 0),c=(0,r.v9)(s=>null!=e.previousImageIdentifier?s.cardDocuments.cardDocuments[e.previousImageIdentifier]:void 0),o=(0,r.v9)(s=>null!=e.nextImageIdentifier?s.cardDocuments.cardDocuments[e.nextImageIdentifier]:void 0),h=null!=i?(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{opacity:s?1:0},children:(0,n.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),(0,n.jsx)(d(),{className:"card-img card-img-fade-in",loading:"lazy",style:{zIndex:1,opacity:s?0:1},src:i.small_thumbnail_url,onLoad:()=>l(!1),onClick:e.imageOnClick,alt:i.name,fill:!0}),e.previousImageIdentifier!==e.imageIdentifier&&void 0!==c&&(0,n.jsx)(d(),{className:"card-img",loading:"lazy",style:{zIndex:0,opacity:0},src:c.small_thumbnail_url,alt:c.name,fill:!0}),e.nextImageIdentifier!==e.imageIdentifier&&void 0!==o&&(0,n.jsx)(d(),{className:"card-img",loading:"lazy",style:{zIndex:0,opacity:0},src:o.small_thumbnail_url,alt:o.name,fill:!0})]}):e.noResultsFound?(0,n.jsx)(d(),{className:"card-img card-img-fade-in",loading:"lazy",style:{zIndex:1},src:"/blank.png",alt:"Card not found",fill:!0}):(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,n.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})});return(0,n.jsxs)(a.Z,{className:"mpccard mpccard-hover",onClick:e.cardOnClick,children:[(0,n.jsxs)(a.Z.Header,{className:"pb-0 text-center",children:[(0,n.jsx)("p",{className:"mpccard-slot",children:e.cardHeaderTitle}),e.cardHeaderButtons]}),(0,n.jsxs)("div",{children:[(0,n.jsx)("div",{className:"rounded-lg shadow-lg ratio ratio-7x5",style:{zIndex:0},children:h}),(0,n.jsxs)(a.Z.Body,{className:"mb-0 text-center",children:[(0,n.jsxs)(a.Z.Subtitle,{className:"mpccard-name",children:[null!=i&&i.name,null==i&&void 0!=e.searchQuery&&e.searchQuery.query]}),(0,n.jsx)("div",{className:"mpccard-spacing",children:(0,n.jsxs)(a.Z.Text,{className:"mpccard-source",children:[null!=i&&"".concat(i.source_verbose," [").concat(i.dpi," DPI]"),null==i&&void 0!=e.searchQuery&&"Your search query"]})})]})]}),null!=e.cardFooter&&(0,n.jsx)(a.Z.Footer,{className:"padding-top",style:{paddingTop:"50px"},children:e.cardFooter})]})}let h=(0,t.memo)(o);var x=l(1677),u=l(8208),j=l(9539),m=l(7104),g=l(6212),f=l(4051);function y(e){return(0,n.jsxs)(g.Z,{show:e.show,onHide:e.handleClose,size:"lg",children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Select Version"})}),(0,n.jsx)(g.Z.Body,{children:(0,n.jsx)(f.Z,{className:"g-0",xxl:4,xl:4,lg:3,md:2,sm:2,xs:2,children:e.imageIdentifiers.map((s,l)=>(0,n.jsx)(o,{imageIdentifier:s,cardHeaderTitle:"Option ".concat(l+1),cardOnClick:()=>{e.onClick(s),e.handleClose()},noResultsFound:!1},"gridSelector-".concat(s)))})}),(0,n.jsx)(g.Z.Footer,{children:(0,n.jsx)(m.Z,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})}let p=(0,t.memo)(function(e){let s=(0,r.I0)();return(0,n.jsx)(y,{imageIdentifiers:e.searchResultsForQuery,show:e.show,handleClose:e.handleClose,onClick:function(l){s((0,j.qP)({face:e.face,slot:e.slot,selectedImage:l}))}})}),v=(0,t.memo)(function(e){let s=(0,r.v9)(e=>e.project.cardback),l=(0,r.I0)();return(0,n.jsx)(y,{imageIdentifiers:e.searchResults,show:e.show,handleClose:e.handleClose,onClick:function(e){null!=s&&(l((0,j.ND)({currentImage:s,selectedImage:e,face:x.eJ})),l((0,j.mp)({selectedImage:e})))}})}),b=(0,t.memo)(function(e){var s,l,i;let a=e.searchQuery,c=e.face,d=e.slot,[o,g]=(0,t.useState)(!1),f=()=>g(!1),y=()=>g(!0),v=(0,r.I0)(),b=null!==(s=(0,r.v9)(e=>e.cardbacks.cardbacks))&&void 0!==s?s:[],S=(0,r.v9)(e=>e.project.cardback),Z=(0,r.v9)(e=>(null==a?void 0:a.query)!=null?(null!==(l=e.searchResults.searchResults[a.query])&&void 0!==l?l:{})[a.card_type]:c===x.eJ?b:[]),C=(0,r.v9)(e=>(null!==(i=e.project.members[d])&&void 0!==i?i:{})[c]),k=null==C?void 0:C.selectedImage,I=()=>{null!=k&&e.handleShowDetailedView(k)};(0,t.useEffect)(()=>{if(null!=Z){let e=k;null==e||Z.includes(e)||(e=void 0),Z.length>0&&null==e&&(null!=a?e=Z[0]:c===x.eJ&&null!=S&&(e=S)),v((0,j.qP)({face:c,slot:d,selectedImage:e}))}},[Z,S]);let N=null!=Z?Z:[],w=null!=k?N.indexOf(k):void 0,F=null!=w?N[(0,u.N0)(w+1,N.length)]:void 0,D=null!=w?N[(0,u.N0)(w-1,N.length)]:void 0,z=()=>{v((0,j.ao)({slot:d}))};function P(e){null!=w&&v((0,j.qP)({face:c,slot:d,selectedImage:N[(0,u.N0)(w+e,N.length)]}))}let T=(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("button",{className:"padlock",children:(0,n.jsx)("i",{className:"bi bi-unlock"})}),(0,n.jsx)("button",{className:"remove",children:(0,n.jsx)("i",{className:"bi bi-x-circle",onClick:z,"aria-label":"remove-".concat(c).concat(d)})})]}),_=(0,n.jsxs)(n.Fragment,{children:[1===N.length&&(0,n.jsxs)("p",{className:"mpccard-counter text-center align-middle",children:["1 / ",N.length]}),N.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{variant:"outline-info",className:"mpccard-counter-btn",onClick:y,children:[(null!=w?w:0)+1," / ",N.length]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m.Z,{variant:"outline-primary",className:"prev",onClick:()=>P(-1),children:"❮"}),(0,n.jsx)(m.Z,{variant:"outline-primary",className:"next",onClick:()=>P(1),children:"❯"})]})]})]});return(0,n.jsxs)("div",{style:{contentVisibility:"auto"},children:[(0,n.jsx)(h,{imageIdentifier:k,previousImageIdentifier:F,nextImageIdentifier:D,cardHeaderTitle:"Slot ".concat(d+1),cardFooter:_,cardHeaderButtons:T,imageOnClick:I,searchQuery:a,noResultsFound:null!=Z&&0===Z.length}),N.length>1&&(0,n.jsx)(p,{face:c,slot:d,searchResultsForQuery:N,show:o,handleClose:f})]})});var S=l(7088),Z=l(5713),C=l(5147);let k=(0,t.memo)(function(e){let[s,l]=(0,t.useState)(!0);(0,t.useEffect)(()=>l(!0),[e.imageIdentifier]);let i=(0,r.v9)(s=>s.cardDocuments.cardDocuments[e.imageIdentifier]),a=(0,r.v9)(e=>e.sourceDocuments.sourceDocuments);return(0,n.jsx)("div",{children:null!=i&&(0,n.jsxs)(g.Z,{show:e.show,onHide:e.handleClose,size:"xl",children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Card Details"})}),(0,n.jsx)(g.Z.Body,{children:(0,n.jsxs)(f.Z,{children:[(0,n.jsx)("div",{className:"col-lg-5 mb-3 mb-lg-0",style:{position:"relative"},children:(0,n.jsxs)("div",{className:"rounded-xl shadow-lg ratio ratio-7x5",style:{zIndex:0},children:[(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",style:{opacity:s?1:0},children:(0,n.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),(0,n.jsx)(d(),{alt:i.name,className:"card-img-fade-in",style:{zIndex:1,opacity:s?0:1},src:i.medium_thumbnail_url,onLoad:()=>l(!1),fill:!0})]})}),(0,n.jsxs)("div",{className:"col-lg-7",children:[(0,n.jsx)("h4",{children:i.name}),(0,n.jsx)(C.Z,{hover:!0,children:(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Source Name"})}),(0,n.jsx)("td",{children:null!=a&&null!=a[i.source_id].external_link?(0,n.jsx)("a",{href:a[i.source_id].external_link,target:"_blank",children:i.source}):(0,n.jsx)("a",{children:i.source})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Source Type"})}),(0,n.jsx)("td",{children:i.source_type})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Class"})}),(0,n.jsx)("td",{children:i.card_type.charAt(0).toUpperCase()+i.card_type.slice(1).toLowerCase()})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Identifier"})}),(0,n.jsx)("td",{children:(0,n.jsx)("code",{children:i.identifier})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Resolution"})}),(0,n.jsxs)("td",{children:[i.dpi," DPI"]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"Date Created"})}),(0,n.jsx)("td",{children:i.date})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("b",{children:"File Size"})}),(0,n.jsx)("td",{children:(0,u.K)(i.size,2)})]})]})}),(0,n.jsx)("div",{className:"d-grid gap-0",children:(0,n.jsx)(m.Z,{variant:"primary",onClick:()=>(0,u.GN)(i.download_link),children:"Download Image"})})]})]})}),(0,n.jsx)(g.Z.Footer,{children:(0,n.jsx)(m.Z,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})})});function I(){let e=(0,r.I0)(),[s,l]=(0,t.useState)(null),[i,a]=(0,t.useState)(!1),c=()=>a(!1),d=(0,t.useCallback)(e=>{l(e),a(!0)},[]),o="idle"===(0,r.v9)(e=>e.searchResults.status),h=(0,r.v9)(j.LI),u=[],m=[],y=(0,r.v9)(j.wH),p=(0,r.v9)(e=>e.searchSettings),v=(0,t.useMemo)(()=>JSON.stringify(p),[p]),C=JSON.stringify(p.sourceSettings.sources),I=(0,t.useMemo)(()=>{let e=Array.from(h);return e.sort(),JSON.stringify(e)},[y]);for(let[s,l]of((0,t.useEffect)(()=>{null!=p.sourceSettings.sources&&e((0,S.U9)())},[I,C]),(0,t.useEffect)(()=>{null!=p.sourceSettings.sources&&(e((0,Z.Ug)()),e((0,S.U9)()))},[v]),y.entries())){var N,w;u.push((0,n.jsx)(b,{searchQuery:null===(N=l.front)||void 0===N?void 0:N.query,face:x.i6,slot:s,handleShowDetailedView:d},"".concat(x.i6,"-slot-").concat(s))),m.push((0,n.jsx)(b,{searchQuery:null===(w=l.back)||void 0===w?void 0:w.query,face:x.eJ,slot:s,handleShowDetailedView:d},"".concat(x.eJ,"-slot-").concat(s)))}let F=(0,r.v9)(e=>e.viewSettings.frontsVisible);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(f.Z,{xxl:4,lg:3,md:2,sm:1,xs:1,className:"g-0",style:{display:F?"":"none"},children:u}),(0,n.jsx)(f.Z,{xxl:4,lg:3,md:2,sm:1,xs:1,className:"g-0",style:{display:F?"none":""},children:m}),(0,n.jsxs)(g.Z,{show:!o,children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Loading..."})}),(0,n.jsx)(g.Z.Body,{children:"TODO"})]}),null!=s&&(0,n.jsx)(k,{imageIdentifier:s,show:i,handleClose:c})]})}function N(e){let s=(0,r.I0)(),l=e.selectedImage,[i,a]=(0,t.useState)(!1),[c,d]=(0,t.useState)(!1),o=()=>a(!1),g=()=>a(!0),f=()=>d(!1),y=()=>d(!0),p=(0,r.v9)(e=>e.cardbacks.cardbacks);(0,t.useEffect)(()=>{p.length>0&&null==l&&s((0,j.mp)({selectedImage:p[0]}))},[p]);let b=null!=l?p.indexOf(l):void 0,S=null!=b?p[(0,u.N0)(b+1,p.length)]:void 0,Z=null!=b?p[(0,u.N0)(b-1,p.length)]:void 0;function C(e){if(null!=l&&null!=b){let n=p[(0,u.N0)(b+e,p.length)];s((0,j.ND)({currentImage:l,selectedImage:n,face:x.eJ})),s((0,j.mp)({selectedImage:n}))}}let I=(0,n.jsxs)(n.Fragment,{children:[1===p.length&&(0,n.jsxs)("p",{className:"mpccard-counter text-center align-middle",children:["1 / ",p.length]}),p.length>1&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(m.Z,{variant:"outline-info",className:"mpccard-counter-btn",onClick:y,children:[(null!=b?b:0)+1," / ",p.length]}),(0,n.jsxs)("div",{children:[(0,n.jsx)(m.Z,{variant:"outline-primary",className:"prev",onClick:()=>C(-1),children:"❮"}),(0,n.jsx)(m.Z,{variant:"outline-primary",className:"next",onClick:()=>C(1),children:"❯"})]})]})]});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(h,{imageIdentifier:l,previousImageIdentifier:S,nextImageIdentifier:Z,cardHeaderTitle:"Cardback",cardFooter:I,imageOnClick:g,noResultsFound:!1}),(0,n.jsx)(v,{searchResults:p,show:c,handleClose:f}),null!=l&&(0,n.jsx)(k,{imageIdentifier:l,show:i,handleClose:o})]})}var w=l(5749),F=l(975),D=l(3389);function z(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h5",{children:"Search Type"}),"Configure how closely the search results should match your query.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsx)(D.ZP,{onClick:()=>e.setSearchTypeSettings({...e.searchTypeSettings,fuzzySearch:!e.searchTypeSettings.fuzzySearch}),on:"Fuzzy (Forgiving) Search",onClassName:"flex-centre",off:"Precise Search",offClassName:"flex-centre",onstyle:"success",offstyle:"info",width:"100%",size:"md",height:x.B4+"px",active:e.searchTypeSettings.fuzzySearch})]})}var P=l(1555),T=l(2914);function _(e){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h5",{children:"Filters"}),"Configure the DPI (dots per inch) and file size ranges the search results must be within.",(0,n.jsx)("br",{}),"At a fixed physical size, a higher DPI yields a higher resolution print.",(0,n.jsx)("br",{}),"MakePlayingCards prints cards up to ",(0,n.jsx)("b",{children:"800 DPI"}),", meaning an 800 DPI print and a 1200 DPI print will ",(0,n.jsx)("b",{children:"look the same"}),".",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),(0,n.jsxs)(f.Z,{children:[(0,n.jsxs)(P.Z,{xs:6,children:[(0,n.jsxs)(T.Z.Label,{children:["Minimum: ",(0,n.jsxs)("b",{children:[e.filterSettings.minimumDPI," DPI"]})]}),(0,n.jsx)(T.Z.Range,{defaultValue:e.filterSettings.minimumDPI,min:x.sL,max:x.gx,step:x.Ox,onChange:s=>{e.setFilterSettings({...e.filterSettings,minimumDPI:parseInt(s.target.value)})}})]}),(0,n.jsxs)(P.Z,{xs:6,children:[(0,n.jsxs)(T.Z.Label,{children:["Maximum: ",(0,n.jsxs)("b",{children:[e.filterSettings.maximumDPI," DPI"]})]}),(0,n.jsx)(T.Z.Range,{defaultValue:e.filterSettings.maximumDPI,min:x.sL,max:x.gx,step:x.Ox,onChange:s=>{e.setFilterSettings({...e.filterSettings,maximumDPI:parseInt(s.target.value)})}})]})]}),(0,n.jsxs)(T.Z.Label,{children:["File size: Up to ",(0,n.jsxs)("b",{children:[e.filterSettings.maximumSize," MB"]})]}),(0,n.jsx)(T.Z.Range,{defaultValue:e.filterSettings.maximumSize,min:0,max:x.bD,step:x.B9,onChange:s=>{e.setFilterSettings({...e.filterSettings,maximumSize:parseInt(s.target.value)})}})]})}var B=l(8627);function E(e){let s=(0,r.v9)(e=>e.sourceDocuments.sourceDocuments),l=(s,l)=>{var n;let i=[...null!==(n=e.sourceSettings.sources)&&void 0!==n?n:[]],[t]=i.splice(s,1);i.splice(l,0,t),e.setSourceSettings({sources:i})},i=e=>{null!=e.destination&&l(e.source.index,e.destination.index)},t=s=>{var l;let n=[...null!==(l=e.sourceSettings.sources)&&void 0!==l?l:[]];n[s]=[n[s][0],!n[s][1]],e.setSourceSettings({sources:n})},a=()=>{var s;let l=null!==(s=e.sourceSettings.sources)&&void 0!==s?s:[],n=!l.some(e=>e[1]),i=l.map(e=>[e[0],n]);e.setSourceSettings({sources:i})},c=(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,n.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})});if(null!=s){var d;let r=(null!==(d=e.sourceSettings.sources)&&void 0!==d?d:[]).map((i,r)=>(0,n.jsx)(B._l,{draggableId:i[0].toString(),index:r,children:(a,c)=>(0,n.jsxs)("tr",{ref:a.innerRef,...a.draggableProps,...a.dragHandleProps,children:[(0,n.jsx)("td",{style:{verticalAlign:"middle",width:"20%"},children:(0,n.jsx)(D.ZP,{on:"On",onClassName:"flex-centre prevent-select",off:"Off",offClassName:"flex-centre prevent-select",onstyle:"primary",offstyle:"secondary",size:"md",height:x.B4+"px",active:i[1],onClick:()=>t(r)})}),(0,n.jsx)("td",{style:{verticalAlign:"middle",width:"40%"},children:null!=s[i[0]].external_link?(0,n.jsx)("a",{href:s[i[0]].external_link,target:"_blank",children:s[i[0]].name}):(0,n.jsx)("a",{children:s[i[0]].name})}),(0,n.jsx)("td",{className:"prevent-select",style:{verticalAlign:"middle",width:"30%"},children:s[i[0]].source_type}),(0,n.jsxs)("td",{style:{verticalAlign:"middle",width:"5%",textAlign:"center"},children:[(0,n.jsx)("div",{children:(0,n.jsx)("i",{className:"bi bi-chevron-double-up",style:{fontSize:"1em",cursor:"pointer"},onClick:()=>{l(r,0)}})}),(0,n.jsx)("div",{children:(0,n.jsx)("i",{className:"bi bi-chevron-double-down",style:{fontSize:"1em",cursor:"pointer"},onClick:()=>{var s;l(r,(null!==(s=e.sourceSettings.sources)&&void 0!==s?s:[]).length-1)}})})]}),(0,n.jsx)("td",{style:{verticalAlign:"middle",width:"5%",textAlign:"center"},children:(0,n.jsx)("i",{className:"bi bi-grip-horizontal",style:{fontSize:"2em"}})})]})},i[0]));c=(0,n.jsx)(B.Z5,{onDragEnd:i,children:(0,n.jsx)(B.bK,{droppableId:"source-order",children:(e,s)=>(0,n.jsx)("div",{style:{height:59*r.length+x.B4+"px"},children:(0,n.jsxs)(C.Z,{ref:e.innerRef,style:{tableLayout:"auto"},children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{style:{height:x.B4+"px"},onClick:a,children:[(0,n.jsx)("th",{className:"prevent-select",children:"Enabled"}),(0,n.jsx)("th",{className:"prevent-select",children:"Source Name"}),(0,n.jsx)("th",{className:"prevent-select",children:"Source Type"}),(0,n.jsx)("th",{}),(0,n.jsx)("th",{})]})}),(0,n.jsx)("tbody",{children:r})]})})})})}return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h5",{children:"Sources"}),"Configure the sources you'd like to search. ",(0,n.jsx)("b",{children:"Drag & drop"})," them to change the order they're searched in.",(0,n.jsx)("br",{}),"Use the ",(0,n.jsx)("b",{children:"arrows"})," to send a source to the top or bottom.",(0,n.jsx)("br",{}),"Click the ",(0,n.jsx)("b",{children:"table header"})," to enable or disable all sources.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),c]})}function H(){let e=(0,r.I0)(),[s,l]=(0,t.useState)(!1),i=(0,r.v9)(e=>e.searchSettings),[a,c]=(0,t.useState)(i.searchTypeSettings),[d,o]=(0,t.useState)(i.sourceSettings),[h,x]=(0,t.useState)(i.filterSettings),u=(0,r.v9)(e=>e.sourceDocuments.sourceDocuments);(0,t.useEffect)(()=>{if(null!=u){let s=(0,F.cI)(u);e((0,w.Fg)(s.searchTypeSettings)),e((0,w.Ph)(s.sourceSettings)),e((0,w._E)(s.filterSettings))}},[u]);let j=()=>l(!1),f=()=>{c(i.searchTypeSettings),x(i.filterSettings),o(i.sourceSettings),l(!0)},y=()=>{(0,F.Wm)({searchTypeSettings:a,sourceSettings:d,filterSettings:h}),e((0,w.Fg)(a)),e((0,w.Ph)(d)),e((0,w._E)(h)),j()};return(0,n.jsxs)("div",{className:"d-grid gap-0",children:[(0,n.jsxs)(m.Z,{variant:"primary",onClick:f,children:[(0,n.jsx)("i",{className:"bi bi-gear",style:{paddingRight:"0.5em"}}),"Search Settings"]}),(0,n.jsxs)(g.Z,{show:s,onHide:y,children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Search Settings"})}),(0,n.jsxs)(g.Z.Body,{children:[(0,n.jsx)(z,{searchTypeSettings:a,setSearchTypeSettings:c}),(0,n.jsx)("hr",{}),(0,n.jsx)(_,{filterSettings:h,setFilterSettings:x}),(0,n.jsx)("hr",{}),(0,n.jsx)(E,{sourceSettings:d,setSourceSettings:o})]}),(0,n.jsxs)(g.Z.Footer,{children:[(0,n.jsx)(m.Z,{variant:"secondary",onClick:j,children:"Close Without Saving"}),(0,n.jsx)(m.Z,{variant:"primary",onClick:y,children:"Save Changes"})]})]})]})}var R=l(1205),L=l(4641),O=l(2283);function q(){let e=(0,O.cf)(),s=(0,O.l)(),l=(0,r.I0)(),[i,a]=(0,t.useState)(!1),c=()=>a(!1),d=()=>a(!0),[o,h]=(0,t.useState)(""),[u,f]=(0,t.useState)(""),y=e=>{let s=[];for(let l of[x.Zb,x.WU,x.dt])null!=e[l]&&s.push(e[l].map(e=>"".concat(Math.floor(3*Math.random())+1,"x ").concat(x.P$[l]).concat((0,L.GL)(e.name))).join("\n"));return s.join("\n\n")};(0,t.useEffect)(()=>{void 0!=e.data&&f(y(e.data))},[e.data]);let p=()=>{var e;let n=(0,L.l_)(o,null!==(e=s.data)&&void 0!==e?e:{});l((0,j.HE)({lines:n})),c()};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(R.Z.Item,{onClick:d,children:[(0,n.jsx)("i",{className:"bi bi-card-text",style:{paddingRight:"0.5em"}})," ","Text"]}),(0,n.jsxs)(g.Z,{show:i,onHide:c,onExited:()=>h(""),children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Add Cards — Text"})}),(0,n.jsxs)(g.Z.Body,{children:[(0,n.jsxs)("p",{children:["Type the names of the cards you'd like to add to your order and hit ",(0,n.jsx)("b",{children:"Submit"}),". One card per line."]}),(0,n.jsxs)("p",{children:["Specify both front and back queries by separating them with"," ",(0,n.jsx)("code",{children:x.M0})," — for example,"," ",(0,n.jsxs)("code",{children:["4x goblin ",x.M0," ",x.P$[x.WU],"elf"]}),"."]}),(0,n.jsx)("p",{children:"If you don't specify a back query and your front query is a double-faced card, we will automatically query the back for you."}),(0,n.jsx)(T.Z.Group,{className:"mb-3",children:(0,n.jsx)(T.Z.Control,{as:"textarea",rows:12,placeholder:u,required:!0,onChange:e=>h(e.target.value),value:o})})]}),(0,n.jsxs)(g.Z.Footer,{children:[(0,n.jsx)(m.Z,{variant:"secondary",onClick:c,children:"Close"}),(0,n.jsx)(m.Z,{variant:"primary",onClick:p,children:"Submit"})]})]})]})}function A(){var e,s;let l=(0,O.l)(),i=(0,O.QA)(),a=(0,O.zr)();(0,r.v9)(e=>e.backend.url);let c=(0,r.I0)(),[d,o]=(0,t.useState)(!1),[h,u]=(0,t.useState)(!1),f=()=>o(!1),y=()=>o(!0),[p,v]=(0,t.useState)(""),[b,S]=O.gk.endpoints.queryImportSite.useLazyQuery(),Z=(0,t.useCallback)(async()=>{let e=p.trim();if(e.length>0){var s,n;u(!0);let e=await b(p),i=(0,L.l_)(null!==(s=e.data)&&void 0!==s?s:"",null!==(n=l.data)&&void 0!==n?n:{});c((0,j.HE)({lines:i})),f(),u(!1)}},[p]);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(R.Z.Item,{onClick:y,children:[(0,n.jsx)("i",{className:"bi bi-link-45deg",style:{paddingRight:"0.5em"}})," ","URL"]}),(0,n.jsxs)(g.Z,{show:d,onHide:f,onExited:()=>v(""),children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Add Cards — URL"})}),(0,n.jsxs)(g.Z.Body,{children:["Paste a link to a card list hosted on one of the below sites (not affiliated) to import the list into"," ",null!==(s=null===(e=a.data)||void 0===e?void 0:e.name)&&void 0!==s?s:x.vV,":",(0,n.jsx)("br",{}),null!=i.data?(0,n.jsx)("ul",{children:i.data.map(e=>(0,n.jsx)("li",{children:(0,n.jsx)("a",{href:e.url,target:"_blank",children:e.name},e.name)},"".concat(e.name,"-row")))}):(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("br",{}),(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,n.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})}),(0,n.jsx)("br",{})]}),(0,n.jsx)(T.Z.Group,{className:"mb-3",children:(0,n.jsx)(T.Z.Control,{type:"url",required:!0,placeholder:"https://",onChange:e=>v(e.target.value.trim()),value:p,disabled:h||null==i.data})})]}),(0,n.jsxs)(g.Z.Footer,{children:[(0,n.jsx)(m.Z,{variant:"secondary",onClick:f,children:"Close"}),(0,n.jsx)(m.Z,{variant:"primary",onClick:async()=>{await Z()},disabled:h||i.isFetching,children:"Submit"})]})]})]})}var M=l(7297),Q=l(9521),V=l(2512);function U(){let e=(0,M.Z)(["\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  padding: 20px;\n  border-width: 2px;\n  border-radius: 2px;\n  border-color: ",";\n  border-style: dashed;\n  color: #bdbdbd;\n  outline: none;\n  transition: border 0.24s ease-in-out;\n  cursor: pointer;\n"]);return U=function(){return e},e}let J=e=>e.isDragAccept?"#00e676":e.isDragReject?"#ff1744":e.isFocused?"#2196f3":"#eeeeee",W=Q.ZP.div(U(),e=>J(e));function X(e){let s=(0,t.useCallback)(s=>{s.forEach(s=>{let l=new FileReader;l.onabort=()=>console.log("file reading was aborted"),l.onerror=()=>console.log("file reading has failed"),l.onload=()=>{let s=l.result;e.callback(s)},l.readAsText(s)})},[]),{getRootProps:l,getInputProps:i,isFocused:r,isDragAccept:a,isDragReject:c}=(0,V.uI)({onDrop:s,accept:e.mimeTypes,maxFiles:1});return(0,n.jsx)("div",{className:"container",children:(0,n.jsxs)(W,{...l({isFocused:r,isDragAccept:a,isDragReject:c}),children:[(0,n.jsx)("input",{...i()}),"Drag and drop a file here, or click to select a file."]})})}function Y(){let[e,s]=(0,t.useState)(!1),l=()=>s(!1),i=()=>s(!0),r=e=>{console.log("file received!")};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(R.Z.Item,{onClick:i,children:[(0,n.jsx)("i",{className:"bi bi-file-code",style:{paddingRight:"0.5em"}})," ","XML"]}),(0,n.jsxs)(g.Z,{show:e,onHide:l,children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Add Cards — XML"})}),(0,n.jsx)(g.Z.Body,{children:(0,n.jsx)(X,{mimeTypes:{"text/xml":[".xml"]},callback:r})}),(0,n.jsx)(g.Z.Footer,{children:(0,n.jsx)(m.Z,{variant:"secondary",onClick:l,children:"Close"})})]})]})}function G(){let[e,s]=(0,t.useState)(!1),l=()=>s(!1),i=()=>s(!0),r=e=>{console.log("file received!")},a={width:"20%",textAlign:"center"};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(R.Z.Item,{onClick:i,children:[(0,n.jsx)("i",{className:"bi bi-file-earmark-spreadsheet",style:{paddingRight:"0.5em"}})," ","CSV"]}),(0,n.jsxs)(g.Z,{show:e,onHide:l,children:[(0,n.jsx)(g.Z.Header,{closeButton:!0,children:(0,n.jsx)(g.Z.Title,{children:"Add Cards — CSV"})}),(0,n.jsxs)(g.Z.Body,{children:[(0,n.jsxs)("p",{children:["Upload a CSV file of cards to add to the project. The file must"," ",(0,n.jsx)("b",{children:"exactly"})," match the following format:"]}),(0,n.jsxs)(C.Z,{bordered:!0,style:{borderStyle:"solid",borderColor:"#333333",borderWidth:"1px"},children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{style:a,children:"Quantity"}),(0,n.jsx)("th",{style:a,children:"Front"}),(0,n.jsx)("th",{style:a,children:"Front ID"}),(0,n.jsx)("th",{style:a,children:"Back"}),(0,n.jsx)("th",{style:a,children:"Back ID"})]}),(0,n.jsx)("tbody",{children:[,,,].fill((0,n.jsx)("tr",{children:[,,,,,].fill((0,n.jsx)("td",{style:{width:"20%"}}))}))})]}),"Where the columns follow these rules:",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Quantity"}),": The quantity to include of this row. Must be greater than 0. ",(0,n.jsx)("b",{children:"Cannot be blank."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Front"}),": Search query for card front. ",(0,n.jsx)("b",{children:"Cannot be blank."})]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Front ID"}),": If this image is in the front search results, it will be pre-selected. Can be blank."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Front"}),": Search query for card back. Can be blank."]}),(0,n.jsxs)("li",{children:[(0,n.jsx)("b",{children:"Front ID"}),": If this image is in the back search results, it will be pre-selected. Can be blank."]})]}),"For example:",(0,n.jsxs)(C.Z,{bordered:!0,style:{borderStyle:"solid",borderColor:"#333333",borderWidth:"1px"},children:[(0,n.jsxs)("thead",{children:[(0,n.jsx)("th",{style:a,children:"Quantity"}),(0,n.jsx)("th",{style:a,children:"Front"}),(0,n.jsx)("th",{style:a,children:"Front ID"}),(0,n.jsx)("th",{style:a,children:"Back"}),(0,n.jsx)("th",{style:a,children:"Back ID"})]}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"2"})}),(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"island"})}),(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"1HsvTYs1..."})}),(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"forest"})}),(0,n.jsx)("td",{style:a})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"3"})}),(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"t:goblin"})}),(0,n.jsx)("td",{style:a}),(0,n.jsx)("td",{style:a}),(0,n.jsx)("td",{style:a,children:(0,n.jsx)("code",{children:"1JtXL6Ca..."})})]})]})]}),(0,n.jsx)(X,{mimeTypes:{"text/csv":[".csv"]},callback:r})]}),(0,n.jsx)(g.Z.Footer,{children:(0,n.jsx)(m.Z,{variant:"secondary",onClick:l,children:"Close"})})]})]})}function $(){return(0,n.jsx)(n.Fragment,{children:(0,n.jsxs)(R.Z,{children:[(0,n.jsx)("div",{className:"d-grid gap-0",children:(0,n.jsxs)(R.Z.Toggle,{variant:"success",id:"dropdown-basic",children:[(0,n.jsx)("i",{className:"bi bi-plus-circle",style:{paddingRight:"0.5em"}})," ","Add Cards"]})}),(0,n.jsxs)(R.Z.Menu,{children:[(0,n.jsx)(q,{}),(0,n.jsx)(Y,{}),(0,n.jsx)(G,{}),(0,n.jsx)(A,{})]})]})})}var K=l(8375),ee=l(3489),es=l(6728);function el(){let e=(0,r.v9)(j.eY),s=(0,r.v9)(j.Ed),l=(0,r.v9)(j.zO),i=(0,r.v9)(j.p4),t=()=>(0,u.Di)("cards.xml",e),a=()=>(0,u.Di)("decklist.txt",s);return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("h2",{children:"Edit MPC Project"}),(0,n.jsxs)(K.Z,{variant:"secondary",children:["Your project contains ",(0,n.jsx)("b",{children:l})," card",1!==l&&"s",", belongs in the MPC bracket of up to"," ",(0,n.jsx)("b",{children:(0,u.wk)(l)})," cards, and is"," ",(0,n.jsx)("b",{children:(0,u.K)(i,0)})," in total.",(0,n.jsx)("br",{}),(0,n.jsx)("br",{}),l>=x.Wn&&(0,n.jsx)(K.Z,{variant:"warning",children:"You've reached the maximum project size!"}),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(P.Z,{xs:3,children:(0,n.jsx)("div",{className:"d-grid gap-0",children:(0,n.jsx)(es.Z,{placement:"top",overlay:e=>(0,n.jsx)(ee.Z,{...e,children:"Save Project"}),children:(0,n.jsx)(m.Z,{variant:"outline-light",children:(0,n.jsx)("i",{className:"bi bi-device-ssd",style:{fontSize:"1.25rem"}})})})})}),(0,n.jsx)(P.Z,{xs:3,children:(0,n.jsx)("div",{className:"d-grid gap-0",children:(0,n.jsx)(es.Z,{placement:"top",overlay:e=>(0,n.jsx)(ee.Z,{...e,children:"Download XML"}),children:(0,n.jsx)(m.Z,{variant:"outline-light",onClick:t,children:(0,n.jsx)("i",{className:"bi bi-file-earmark-arrow-down",style:{fontSize:"1.25rem"}})})})})}),(0,n.jsx)(P.Z,{xs:3,children:(0,n.jsx)("div",{className:"d-grid gap-0",children:(0,n.jsx)(es.Z,{placement:"top",overlay:e=>(0,n.jsx)(ee.Z,{...e,children:"Download Decklist"}),children:(0,n.jsx)(m.Z,{variant:"outline-light",onClick:a,children:(0,n.jsx)("i",{className:"bi bi-file-text",style:{fontSize:"1.25rem"}})})})})}),(0,n.jsx)(P.Z,{xs:3,children:(0,n.jsx)("div",{className:"d-grid gap-0",children:(0,n.jsx)(es.Z,{placement:"top",overlay:e=>(0,n.jsx)(ee.Z,{...e,children:"Download Images"}),children:(0,n.jsx)(m.Z,{variant:"outline-light",children:(0,n.jsx)("i",{className:"bi bi-images",style:{fontSize:"1.25rem"}})})})})})]})]})]})}var en=l(5384);function ei(){let e=(0,r.I0)();return(0,n.jsx)(D.ZP,{onClick:()=>e((0,en.$3)()),on:"Switch to Backs",onClassName:"flex-centre",off:"Switch to Fronts",offClassName:"flex-centre",onstyle:"info",offstyle:"info",width:"100%",size:"md",height:x.B4+"px",active:(0,r.v9)(e=>e.viewSettings.frontsVisible)})}var et=l(5582),er=l(1110),ea=function(){var e;let s=(0,r.I0)(),l=null!==(e=(0,r.v9)(e=>e.project.cardback))&&void 0!==e?e:void 0;return(0,t.useEffect)(()=>{s((0,et.$)())},[s]),(0,n.jsxs)(f.Z,{children:[(0,n.jsx)(P.Z,{lg:8,md:8,sm:6,xs:6,children:(0,n.jsx)(I,{})}),(0,n.jsx)(P.Z,{lg:4,md:4,sm:6,xs:6,style:{zIndex:1},children:(0,n.jsxs)("div",{className:"sticky-top sticky-offset g-0",style:{position:"sticky"},children:[(0,n.jsx)(er.Z,{children:(0,n.jsx)(el,{})}),(0,n.jsx)(f.Z,{className:"g-0",children:(0,n.jsx)(ei,{})}),(0,n.jsxs)(f.Z,{className:"g-0 py-3",children:[(0,n.jsx)(P.Z,{lg:6,md:12,sm:12,xs:12,children:(0,n.jsx)(H,{})}),(0,n.jsx)(P.Z,{lg:6,md:12,sm:12,xs:12,children:(0,n.jsx)($,{})})]}),(0,n.jsx)(P.Z,{className:"g-0",lg:{span:8,offset:2},md:12,children:(0,n.jsx)(N,{selectedImage:l})})]})})]})},ec=l(9008),ed=l.n(ec);function eo(){return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(ed(),{children:[(0,n.jsx)("title",{children:"Edit MPC Project"})," ",(0,n.jsx)("meta",{name:"description",content:"Edit MPC Project"})]}),(0,n.jsx)(i.Z,{children:(0,n.jsx)(ea,{})})]})}l(1351)}},function(e){e.O(0,[62,565,955,749,774,888,179],function(){return e(e.s=1832)}),_N_E=e.O()}]);