"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[700],{2283:function(e,t,r){r.d(t,{D_:function(){return v},Hz:function(){return S},QA:function(){return h},QZ:function(){return g},Xz:function(){return x},cf:function(){return y},gk:function(){return o},l:function(){return p},uX:function(){return j},zr:function(){return b}});var n=r(5673),a=r(848),s=r(975),i=r(4641);let l=async(e,t,r)=>{let a=t.getState().backend.url,s=(0,n.ni)({baseUrl:a});return s(e,t,r)},o=(0,a.LC)({reducerPath:"apiSlice",baseQuery:l,endpoints:e=>({getCards:e.query({query:e=>({url:"2/cards/",method:"POST",body:{card_identifiers:JSON.stringify(e)}}),transformResponse:(e,t,r)=>e.results}),getCardbacks:e.query({query:()=>({url:"2/cardbacks/",method:"GET"}),transformResponse:(e,t,r)=>e.cardbacks}),search:e.query({query:e=>({url:"2/searchResults/",method:"POST",body:JSON.stringify({searchSettings:e.searchSettings,queries:Array.from(e.queries)})}),transformResponse:(e,t,r)=>e.results}),getSources:e.query({query:()=>({url:"2/sources/",method:"GET"}),transformResponse:(e,t,r)=>e.results}),getImportSites:e.query({query:()=>({url:"2/importSites/",method:"GET"}),transformResponse:(e,t,r)=>e.import_sites}),queryImportSite:e.query({query:e=>({url:"2/importSiteDecklist/",method:"POST",body:JSON.stringify({url:e})}),transformResponse:(e,t,r)=>e.cards}),getDFCPairs:e.query({query:()=>({url:"2/DFCPairs/",method:"GET"}),transformResponse:(e,t,r)=>Object.fromEntries(Object.keys(e.dfc_pairs).map(t=>[(0,i.dG)(t),(0,i.dG)(e.dfc_pairs[t])]))}),getSampleCards:e.query({query:()=>({url:"2/sampleCards/",method:"GET"}),transformResponse:(e,t,r)=>e.cards}),getContributions:e.query({query:()=>({url:"2/contributions/",method:"GET"})}),getBackendInfo:e.query({query:()=>({url:"2/info/",method:"GET"}),transformResponse:(e,t,r)=>e.info})})}),{useGetCardsQuery:c,useGetCardbacksQuery:u,useSearchQuery:d,useGetSourcesQuery:m,useGetImportSitesQuery:h,useQueryImportSiteQuery:f,useGetDFCPairsQuery:p,useGetSampleCardsQuery:y,useGetContributionsQuery:g,useGetBackendInfoQuery:b}=o;async function x(e,t){let r=await fetch((0,i.X8)(e,"/2/cards/"),{method:"POST",body:JSON.stringify({card_identifiers:Array.from(t)}),credentials:"same-origin",headers:(0,s.ho)()}),n=await r.json();return n.results}async function j(e){let t=await fetch((0,i.X8)(e,"/2/cardbacks/"),{method:"GET",credentials:"same-origin",headers:(0,s.ho)()}),r=await t.json();return r.cardbacks}async function v(e,t,r){let n=await fetch((0,i.X8)(e,"/2/searchResults/"),{method:"POST",body:JSON.stringify({searchSettings:t,queries:Array.from(r)}),credentials:"same-origin",headers:(0,s.ho)()}),a=await n.json();return a.results}async function S(e){let t=await fetch((0,i.X8)(e,"/2/sources/"),{method:"GET",credentials:"same-origin",headers:(0,s.ho)()}),r=await t.json();return r.results}},1677:function(e,t,r){r.d(t,{B4:function(){return h},B9:function(){return b},Ds:function(){return k},Em:function(){return S},M0:function(){return m},Ni:function(){return o},Ox:function(){return y},P$:function(){return c},WU:function(){return i},Wn:function(){return C},Zb:function(){return a},bD:function(){return g},dt:function(){return s},eJ:function(){return d},gx:function(){return p},i6:function(){return u},kw:function(){return v},nS:function(){return x},qY:function(){return l},sL:function(){return f},vV:function(){return n},yl:function(){return j}});let n="MPC Autofill",a="CARD",s="CARDBACK",i="TOKEN",l=":",o={"":a,b:s,t:i},c=Object.fromEntries(Object.keys(o).map(e=>[o[e],e.length>0?e+l:e])),u="front",d="back",m="|",h=38,f=0,p=1500,y=50,g=30,b=1,x="csrftoken",j="searchSettings",v="googleAnalyticsConsent",S="backendURL",k=[18,36,55,72,90,108,126,144,162,180,198,216,234,396,504,612],C=k[k.length-1]},975:function(e,t,r){r.d(t,{j:function(){return y},ho:function(){return c},_m:function(){return m},Vs:function(){return f},cI:function(){return u},Y9:function(){return h},IT:function(){return p},Wm:function(){return d}});var n=r(1955),a=r(1581),s=r.n(a);let i={title:"Search settings schema",type:"object",properties:{searchTypeSettings:{type:"object",properties:{fuzzySearch:{description:"Whether fuzzy search is enabled",type:"boolean"}},required:["fuzzySearch"]},sourceSettings:{type:"object",properties:{sources:{description:"The list of sources in the order they should be searched",type:["array","null"],items:{type:"array",items:[{type:"number",description:"The source's primary key",minimum:0},{type:"boolean",description:"Whether the source is enabled for searching"}],minItems:2,maxItems:2}}},required:["sources"]},filterSettings:{type:"object",properties:{minimumDPI:{type:"number",description:"The minimum DPI that cards must meet to be included in search results",minimum:0},maximumDPI:{type:"number",description:"The maximum DPI that cards can meet to be included in search results",minimum:0},maximumSize:{type:"number",description:"The maximum filesize that cards can have to be included in search results",minimum:0}},required:["minimumDPI","maximumDPI","maximumSize"]}},required:["searchTypeSettings","sourceSettings","filterSettings"],additionalProperties:!1};var l=r(1677);let o=new(s());function c(){let e=n.Z.get(l.nS);if(null!=e)return{"X-CSRFToken":e}}function u(e){var t,r;let n=JSON.parse(null!==(t=localStorage.getItem(l.yl))&&void 0!==t?t:"{}"),a=o.compile(i),s=a(n);if(!s)return{searchTypeSettings:{fuzzySearch:!1},sourceSettings:{sources:Object.values(e).map(e=>[e.pk,!0])},filterSettings:{minimumDPI:l.sL,maximumDPI:l.gx,maximumSize:l.bD}};{let t=new Set(Object.values(e).map(e=>e.pk)),a=null!==(r=n.sourceSettings.sources)&&void 0!==r?r:[],s=new Set(a.map(e=>e[0]));return n.sourceSettings.sources=a.filter(e=>t.has(e[0])).concat(Array.from(t).filter(e=>!s.has(e)).map(e=>[e,!0])),n}}function d(e){localStorage.setItem(l.yl,JSON.stringify(e))}function m(){let e=n.Z.get(l.kw);return void 0!=e?!0===JSON.parse(e):void 0}function h(e){n.Z.set(l.kw,JSON.stringify(e),{expires:365,sameSite:"strict"})}function f(){return localStorage.getItem(l.Em)}function p(e){localStorage.setItem(l.Em,e)}function y(){localStorage.removeItem(l.Em)}},4641:function(e,t,r){r.d(t,{DE:function(){return c},GL:function(){return s},X8:function(){return u},dG:function(){return i},l_:function(){return o}});var n=r(1677);function a(e){return e.replaceAll(/ +(?= )/g,"").trim()}function s(e){return a(e.replaceAll(/[([].*?[)\]]/g,""))}function i(e){return a(e.toLowerCase().trim().replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?/\\|_+=]/g,""))}function l(e){for(let[t,r]of Object.entries(n.Ni))if(""!==t&&e.trimStart().toLowerCase().startsWith("".concat(t).concat(n.qY)))return{query:i(e.trimStart().slice(t.length+1)),card_type:r};return{query:i(e),card_type:n.Ni[""]}}function o(e,t){let r=[];return e.split(/\r?\n|\r|\n/g).forEach(e=>{if(null!=e&&e.trim().length>0){let[a,s,i]=function(e,t){var r;let a=e.replace(/\s+/g," ").trim(),s=/^([0-9]*)?x?\s?(.*)$/.exec(a);if(null==s)return[0,null,null];let i=parseInt(null!==(r=s[1])&&void 0!==r?r:"1"),o=null,c=null,[u,d]=s[2].split(n.M0);return null!=u&&u.length>0&&(o=l(u)),null!=d&&d.length>0?c=l(d):null!=o&&null!=o.query&&o.query in t&&(c={query:t[o.query],card_type:n.Zb}),[i,o,c]}(e,t);a>0&&(null!=s||null!=i)&&r.push([a,s,i])}}),r}function c(e){var t;let r=[...e.matchAll(/^(https?:\/\/)?(.*?)(?:\/.*)?$/gm)][0];return(null!==(t=r[1])&&void 0!==t?t:"http://")+r[2]}function u(e,t){return e+t}},8208:function(e,t,r){r.d(t,{Di:function(){return o},GN:function(){return l},K:function(){return s},N0:function(){return a},wk:function(){return i}});var n=r(1677);function a(e,t){return(e%t+t)%t}function s(e,t){let r=10**t,n=e/1e6;return n=Math.round(n*r)/r,"".concat(n," MB")}function i(e){for(let t of n.Ds)if(t>=e)return t;return n.Ds[n.Ds.length-1]}function l(e){let t=!(arguments.length>1)||void 0===arguments[1]||arguments[1],r=document.createElement("a");r.href=e,r.setAttribute("download","deez.png"),t&&(r.target="_blank"),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}function o(e,t){let r=document.createElement("a");r.setAttribute("href","data:text/plain;charset=utf-8,"+encodeURIComponent(t)),r.setAttribute("download",e),r.style.display="none",document.body.appendChild(r),r.click(),document.body.removeChild(r)}},3152:function(e,t,r){r.d(t,{xu:function(){return s}});var n=r(1876),a=r(2283);let s=(0,n.hg)("cardbacks/fetchCardbacks",async(e,t)=>{let r=t.getState();return(0,a.uX)(r.backend.url)}),i=(0,n.oM)({name:"cardbacks",initialState:{cardbacks:[],status:"idle",error:null},reducers:{addCardbackDocuments:(e,t)=>{e.cardbacks=[...t.payload]}},extraReducers(e){e.addCase(s.pending,(e,t)=>{e.status="loading"}).addCase(s.fulfilled,(e,t)=>{e.status="succeeded",e.cardbacks=[...t.payload]}).addCase(s.rejected,(e,t)=>{e.status="failed",e.error=""})}});t.ZP=i.reducer},9539:function(e,t,r){r.d(t,{HE:function(){return S},ND:function(){return j},ZP:function(){return C},ao:function(){return k},Ed:function(){return p},eY:function(){return f},p4:function(){return y},LI:function(){return m},wH:function(){return d},zO:function(){return h},nZ:function(){return b},Y:function(){return g},mp:function(){return v},qP:function(){return x}});var n=r(1876),a=r(1677),s=r(8208),i=r(3518),l=r.n(i),o=r(4641);let c={members:[{front:{query:{query:"island",card_type:a.Zb},selectedImage:void 0},back:null},{front:{query:{query:"grim monolith",card_type:a.Zb},selectedImage:void 0},back:null},{front:{query:{query:"past in flames",card_type:a.Zb},selectedImage:void 0},back:null},{front:{query:{query:"necropotence",card_type:a.Zb},selectedImage:void 0},back:null}],cardback:null},u=(0,n.oM)({name:"project",initialState:c,reducers:{setSelectedImage:(e,t)=>{null==e.members[t.payload.slot][t.payload.face]?e.members[t.payload.slot][t.payload.face]={query:{query:null,card_type:a.Zb},selectedImage:t.payload.selectedImage}:e.members[t.payload.slot][t.payload.face].selectedImage=t.payload.selectedImage},bulkSetSelectedImage:(e,t)=>{let r=new Set;for(let[n,a]of e.members.entries())null!=a[t.payload.face]&&a[t.payload.face].selectedImage===t.payload.currentImage&&r.add(n);for(let n of r)null==e.members[n][t.payload.face]?e.members[n][t.payload.face]={query:{query:null,card_type:a.Zb},selectedImage:t.payload.selectedImage}:e.members[n][t.payload.face].selectedImage=t.payload.selectedImage},setSelectedCardback:(e,t)=>{e.cardback=t.payload.selectedImage},addImages:(e,t)=>{let r=[];for(let[n,s,i]of t.payload.lines){let t=Math.min(n,a.Wn-(e.members.length+r.length));if(r=[...r,...Array(t).fill({front:{query:s,selectedImage:null},back:{query:i,selectedImage:null}})],e.members.length+r.length>=a.Wn)break}e.members=[...e.members,...r]},deleteImage:(e,t)=>{e.members.splice(t.payload.slot,1)}}}),d=e=>e.project.members,m=e=>new Set(e.project.members.flatMap(e=>{var t,r,n,s;return((null===(t=e.front)||void 0===t?void 0:null===(r=t.query)||void 0===r?void 0:r.query)!=null?[a.P$[e.front.query.card_type]+e.front.query.query]:[]).concat((null===(n=e.back)||void 0===n?void 0:null===(s=n.query)||void 0===s?void 0:s.query)!=null?[a.P$[e.back.query.card_type]+e.back.query.query]:[])})),h=e=>e.project.members.length,f=e=>(function(e,t,r,n){let i=function(e,t){let r={front:{},back:{}};for(let[n,s]of e.entries())for(let e of[a.i6,a.eJ]){let a=s[e];if(null!=a){let s=a.selectedImage;null!=s&&s!==t&&(null==r[e][s]?r[e][s]=new Set([n]):r[e][s].add(n))}}return r}(e,r),o=document.implementation.createDocument("","",null),c=o.createElement("order"),u=o.createElement("details"),d=o.createElement("quantity");d.appendChild(o.createTextNode(n.toString())),u.appendChild(d);let m=o.createElement("bracket");for(let e of(m.appendChild(o.createTextNode((0,s.wk)(n).toString())),u.appendChild(m),c.append(u),[a.i6,a.eJ]))if(Object.keys(i[e]).length>0){let n=o.createElement("".concat(e,"s"));for(let[s,l]of Object.entries(i[e])){let i=function(e,t,r,n){let s=e[r];if(null==s)return null;let i=t.createElement("card"),l=t.createElement("id");l.appendChild(t.createTextNode(r)),i.appendChild(l);let o=t.createElement("slots");o.appendChild(t.createTextNode(Array.from(n).sort((e,t)=>e-t).toString())),i.appendChild(o);let c=t.createElement("name");c.appendChild(t.createTextNode("".concat(s.name,".").concat(s.extension))),i.append(c);let u=t.createElement("query");return u.appendChild(t.createTextNode(a.P$[s.card_type]+s.searchq)),i.append(u),i}(t,o,s,l),c=s===r&&e===a.eJ;null==i||c||n.appendChild(i)}n.children.length>0&&c.appendChild(n)}let h=o.createElement("cardback");null!=r&&h.appendChild(o.createTextNode(r)),c.appendChild(h),o.appendChild(c);let f=new XMLSerializer,p=f.serializeToString(o);return l()(p,{collapseContent:!0})})(d(e),e.cardDocuments.cardDocuments,e.project.cardback,h(e)),p=e=>(function(e,t){let r=function(e,t){function r(e){return null!=e&&null!=e.selectedImage&&Object.prototype.hasOwnProperty.call(t,e.selectedImage)&&t[e.selectedImage].card_type===a.Zb?(0,o.GL)(t[e.selectedImage].name):null}return e.map(e=>[r(e[a.i6]),r(e[a.eJ])])}(e,t),n=r.map(e=>null!=e[0]?null!=e[1]?"".concat(e[0]," ").concat(a.M0," ").concat(e[1]):e[0]:"").filter(e=>null!=e&&e.length>0);return(function(e){let t=e.reduce((e,t)=>(Object.prototype.hasOwnProperty.call(e,t)||(e[t]=0),e[t]++,e),{});return Object.keys(t).sort().map(e=>"".concat(t[e],"x ").concat(e))})(n).join("\n")})(d(e),e.cardDocuments.cardDocuments),y=e=>{let t=new Set;for(let r of e.project.members)for(let e of[a.i6,a.eJ])null!=r[e]&&null!=r[e].selectedImage&&t.add(r[e].selectedImage);let r=e.cardDocuments.cardDocuments;return Array.from(t).reduce((e,t)=>{var n;return e+(null!==(n=r[t])&&void 0!==n?n:{size:0}).size},0)},g=e=>{let t=new Set(e.cardbacks.cardbacks);for(let s of e.project.members)for(let i of[a.i6,a.eJ]){var r,n;let a=s[i];null!=a&&null!=a.query&&null!=a.query.query&&(null!==(n=(null!==(r=e.searchResults.searchResults[a.query.query])&&void 0!==r?r:{})[a.query.card_type])&&void 0!==n?n:[]).length>0&&e.searchResults.searchResults[a.query.query][a.query.card_type].forEach(e=>t.add(e))}return t},b=e=>{let t=[];for(let n of e.project.members)for(let s of[a.i6,a.eJ]){var r;let a=n[s];null!=a&&null!=a.query&&null!=a.query.query&&null==(null!==(r=e.searchResults.searchResults[a.query.query])&&void 0!==r?r:{})[a.query.card_type]&&t.push(a.query)}return t},{setSelectedImage:x,bulkSetSelectedImage:j,setSelectedCardback:v,addImages:S,deleteImage:k}=u.actions;var C=u.reducer},7088:function(e,t,r){r.d(t,{U9:function(){return o}});var n=r(1876),a=r(5713),s=r(3152),i=r(9539),l=r(2283);let o=(0,n.hg)("cardDocuments/fetchCardDocuments",async(e,t)=>{await t.dispatch((0,a.IA)()),await t.dispatch((0,s.xu)());let r=t.getState(),n=(0,i.Y)(r),o=new Set(Object.keys(r.cardDocuments.cardDocuments)),c=new Set(Array.from(n).filter(e=>!o.has(e)));if(c.size>0)return(0,l.Xz)(r.backend.url,c)}),c=(0,n.oM)({name:"cardDocuments",initialState:{cardDocuments:{},status:"idle",error:null},reducers:{addCardDocuments:(e,t)=>{e.cardDocuments={...e.cardDocuments,...t.payload}}},extraReducers(e){e.addCase(o.pending,(e,t)=>{e.status="loading"}).addCase(o.fulfilled,(e,t)=>{e.status="succeeded",e.cardDocuments={...e.cardDocuments,...t.payload}}).addCase(o.rejected,(e,t)=>{e.status="failed",e.error=""})}});t.ZP=c.reducer},5713:function(e,t,r){r.d(t,{IA:function(){return i},Ug:function(){return c}});var n=r(1876),a=r(9539),s=r(2283);let i=(0,n.hg)("searchResults/fetchCards",async(e,t)=>{let r=t.getState(),n=(0,a.nZ)(r);if(n.length>0)return(0,s.D_)(r.backend.url,r.searchSettings,n)}),l=(0,n.oM)({name:"searchResults",initialState:{searchResults:{},status:"idle",error:null},reducers:{addSearchResults:(e,t)=>{e.searchResults={...e.searchResults,...t.payload}},clearSearchResults:e=>{e.searchResults={}}},extraReducers(e){e.addCase(i.fulfilled,(e,t)=>{e.searchResults={...e.searchResults,...t.payload}}),e.addCase(i.rejected,(e,t)=>{alert("TODO")})}}),{addSearchResults:o,clearSearchResults:c}=l.actions;t.ZP=l.reducer},5582:function(e,t,r){r.d(t,{$:function(){return s}});var n=r(1876),a=r(2283);let s=(0,n.hg)("sourceDocuments/fetchSourceDocuments",async(e,t)=>{let r=t.getState();return(0,a.Hz)(r.backend.url)}),i=(0,n.oM)({name:"sourceDocuments",initialState:{sourceDocuments:void 0},reducers:{addSourceDocuments:(e,t)=>{e.sourceDocuments={...e.sourceDocuments,...t.payload}}},extraReducers(e){e.addCase(s.fulfilled,(e,t)=>{e.sourceDocuments={...e.sourceDocuments,...t.payload}}),e.addCase(s.rejected,(e,t)=>{alert("TODO")})}});t.ZP=i.reducer},5749:function(e,t,r){r.d(t,{Fg:function(){return l},Ph:function(){return o},_E:function(){return c}});var n=r(1876),a=r(1677);let s={searchTypeSettings:{fuzzySearch:!1},sourceSettings:{sources:null},filterSettings:{minimumDPI:a.sL,maximumDPI:a.gx,maximumSize:a.bD}},i=(0,n.oM)({name:"searchSettings",initialState:s,reducers:{setSearchTypeSettings:(e,t)=>{e.searchTypeSettings=t.payload},setSourceSettings:(e,t)=>{e.sourceSettings=t.payload},setFilterSettings:(e,t)=>{e.filterSettings=t.payload}}}),{setSearchTypeSettings:l,setSourceSettings:o,setFilterSettings:c}=i.actions;t.ZP=i.reducer},1110:function(e,t,r){var n=r(5893),a=r(5152),s=r.n(a),i=r(7294);let l=e=>(0,n.jsx)(i.Fragment,{children:e.children});t.Z=s()(()=>Promise.resolve(l),{ssr:!1})},700:function(e,t,r){r.d(t,{Z:function(){return el}});var n,a,s=r(5893),i=r(1451),l=r(4214),o=r(7054),c=r(682),u=r(5675),d=r.n(u),m=r(1664),h=r.n(m),f=r(7104),p=r(2664),y=r(1677),g=r(8375),b=r(4874),x=r(7294),j=r(2914),v=r(1876);let S=(0,v.oM)({name:"backend",initialState:{url:null},reducers:{setURL:(e,t)=>{e.url=t.payload},clearURL:e=>{e.url=void 0}}}),{setURL:k,clearURL:C}=S.actions;var w=S.reducer,Z=r(975),q=r(2283),D=r(4641),I=r(5276),E=r.n(I);r(1351),(n=a||(a={})).IN_PROGRESS="record-circle-fill",n.SUCCEEDED="check-circle-fill",n.FAILED="x-circle-fill";let P=["Validating URL","Pinging server","Checking search engine health"];function T(e){let t=!1;try{new URL(e),t=!0}catch(e){}return t}async function R(e){let t=!1;try{let r=new(E());await r.ping(e,function(e,r){t=null==e})}catch(e){}return t}async function N(e){let t=!1;try{await fetch(new URL("2/searchEngineHealth/",e).toString(),{method:"GET",mode:"cors"}).then(e=>e.json()).then(e=>{var r;t=!0===(null!==(r=e.online)&&void 0!==r&&r)})}catch(e){}return t}function O(e){var t;let r=(0,p.I0)(),[n,i]=(0,x.useState)([]),[l,o]=(0,x.useState)(!1),[c,u]=q.gk.endpoints.getBackendInfo.useLazyQuery(),d=(0,p.v9)(e=>e.backend.url),m=()=>{r(C()),(0,Z.j)(),r(q.gk.util.resetApiState()),i([])},[h,v]=(0,x.useState)(""),S=async e=>{e.preventDefault(),o(!0);let t=(0,D.DE)(h.trim()),n=[];for(let e of(i(n),[T,R,N])){n.push(a.IN_PROGRESS),i(n);let r=await e(t);if(i(n=[...n.slice(0,-1),r?a.SUCCEEDED:a.FAILED]),!r)break}n.every(e=>e===a.SUCCEEDED)&&(r(k(t)),(0,Z.IT)(t),r(q.gk.util.resetApiState()),v(""),c()),o(!1)};return(0,x.useEffect)(()=>{let e=(0,Z.Vs)();void 0!=e&&(r(k(e)),r(q.gk.util.resetApiState()),c())},[]),(0,s.jsx)(s.Fragment,{children:(0,s.jsxs)(b.Z,{show:e.show,onHide:e.handleClose,children:[(0,s.jsx)(b.Z.Header,{closeButton:!0,children:(0,s.jsx)(b.Z.Title,{children:"Configure Server"})}),(0,s.jsxs)(b.Z.Body,{children:[null!=d&&(0,s.jsxs)(g.Z,{variant:"success",children:["You're currently connected to ",(0,s.jsx)("b",{children:d}),".",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsx)(f.Z,{variant:"danger",onClick:m,children:"Disconnect"})]}),"Enter the URL of the server you'd like to connect ",y.vV," ","to and hit ",(0,s.jsx)("b",{children:"Submit"}),".",(0,s.jsx)("br",{}),(0,s.jsx)("br",{}),(0,s.jsxs)(j.Z,{onSubmit:S,children:[(0,s.jsx)(j.Z.Group,{className:"mb-3",controlId:"formURL",children:(0,s.jsx)(j.Z.Control,{placeholder:"https://",onChange:e=>v(e.target.value),value:h,disabled:l})}),n.length>0&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("hr",{}),(0,s.jsx)("ul",{children:P.map((e,r)=>(0,s.jsxs)("li",{children:[(0,s.jsx)("i",{className:"bi bi-".concat(null!==(t=n[r])&&void 0!==t?t:"circle")})," ",e,n[r]===a.IN_PROGRESS&&"..."]},e))}),(0,s.jsx)("hr",{})]}),(0,s.jsx)(f.Z,{variant:"primary",type:"submit",disabled:l||0==h.trim().length,children:"Submit"})]})]})]})})}var _=r(1110),z=r(6212);function A(){return(0,s.jsx)("a",{href:"https://www.buymeacoffee.com/chilli.axe",target:"_blank",children:(0,s.jsx)(d(),{className:"mx-auto d-block",src:"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",alt:"Buy Me A Coffee",width:217,height:60})})}function L(e){return(0,s.jsxs)(z.Z,{show:e.show,onHide:e.handleClose,children:[(0,s.jsx)(z.Z.Header,{closeButton:!0,children:(0,s.jsx)(z.Z.Title,{children:"Support the Developer"})}),(0,s.jsxs)(z.Z.Body,{children:[(0,s.jsx)("h4",{children:"A bit about me"}),(0,s.jsxs)("p",{children:["Hey there! Thanks for checking out ",y.vV,". I'm Nick, the creator and primary developer of this project."]}),(0,s.jsx)("p",{children:"I'm responsible for this website, the code that image repository servers run on, and the desktop tool that automates MakePlayingCards.com."}),(0,s.jsxs)("p",{children:["I started developing ",y.vV," in early 2020 while I was in uni to simplify how the tabletop gaming community shares its MPC print-ready images — at the time, we were manually browsing through Google Drives to find cards we wanted to print and dragging & dropping them into MPC."]}),(0,s.jsxs)("p",{children:["These days, I'm working full-time and continuing to develop"," ",y.vV," by night, and I'm passionate about delivering the best print tooling I can to the tabletop gaming community."]}),(0,s.jsxs)("p",{children:[y.vV," is completely open source software (licensed under GPL-3) and all of its features will always be free."]}),(0,s.jsxs)("p",{children:["You can support my continued development of this project through"," ",(0,s.jsx)("i",{children:"Buy Me a Coffee"})," below ♥️"]}),(0,s.jsx)("h4",{children:"Where does my donation go?"}),(0,s.jsxs)("p",{children:["I don't host any ",y.vV," servers, just the website you're on right now — which GitHub allows me to host for free."]}),(0,s.jsx)("p",{children:"Any donation goes towards:"}),(0,s.jsxs)("ul",{children:[(0,s.jsx)("li",{children:"Fuelling my coffee addiction, and"}),(0,s.jsx)("li",{children:"Allowing me to spend more time developing and improving this project for you all. Several large features are in the pipeline that I'm excited to share when they're ready!"})]}),(0,s.jsx)("hr",{}),(0,s.jsx)(A,{})]}),(0,s.jsx)(z.Z.Footer,{children:(0,s.jsx)(f.Z,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})}var G=r(5305);function M(e){var t,r,n,a;let i=(0,q.zr)();return(0,s.jsxs)(z.Z,{show:e.show,onHide:e.handleClose,children:[(0,s.jsx)(z.Z.Header,{closeButton:!0,children:(0,s.jsxs)(z.Z.Title,{children:["Support ",null!==(n=null===(t=i.data)||void 0===t?void 0:t.name)&&void 0!==n?n:"Your Server Manager"]})}),(0,s.jsx)(z.Z.Body,{children:(null==i?void 0:null===(r=i.data)||void 0===r?void 0:r.patreon)==null?(0,s.jsx)(G.$,{}):(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("h4",{children:"Patron Tiers"}),Object.values(null!==(a=i.data.patreon.tiers)&&void 0!==a?a:{}).map(e=>(0,s.jsx)("h6",{children:(0,s.jsxs)("b",{children:[e.title," ($",e.usd," USD)"]})},"patreon-tier-".concat(e.title)))]})}),(0,s.jsx)(z.Z.Footer,{children:(0,s.jsx)(f.Z,{variant:"secondary",onClick:e.handleClose,children:"Close"})})]})}function V(){var e,t,r,n,a,u;let m=(0,q.zr)(),[g,b]=(0,x.useState)(!1),[j,v]=(0,x.useState)(!1),[S,k]=(0,x.useState)(!1),C=()=>b(!1),w=()=>b(!0),Z=()=>v(!1),D=()=>v(!0),I=()=>k(!1),E=()=>k(!0),P=(0,p.v9)(e=>e.backend.url);return(0,s.jsxs)(_.Z,{children:[(0,s.jsx)(o.Z,{expand:"lg",fixed:"top",variant:"dark",bg:"primary",style:{minHeight:"50px"},children:(0,s.jsxs)(c.Z,{className:"justify-content-center fixed-top align-middle bg-primary",style:{maxWidth:"1200px"},children:[(0,s.jsxs)(o.Z.Brand,{href:"/",as:h(),children:[(0,s.jsx)(d(),{src:"/logolowres.png",alt:"logo",width:"40",height:"40"})," ",(0,s.jsx)("span",{className:"align-middle",children:(0,s.jsx)("b",{children:null!==(a=null===(e=m.data)||void 0===e?void 0:e.name)&&void 0!==a?a:y.vV})})]}),(0,s.jsx)(o.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,s.jsxs)(o.Z.Collapse,{id:"basic-navbar-nav",style:{fontWeight:"bold"},children:[(0,s.jsxs)(i.Z,{className:"me-auto",children:[(0,s.jsx)(i.Z.Link,{as:h(),href:"/editor",children:"Editor (Temp)"}),(0,s.jsx)(i.Z.Link,{as:h(),href:"/guide",children:"Guide"}),null!=P&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.Z.Link,{as:h(),href:"/new",children:"What's New?"}),(0,s.jsx)(i.Z.Link,{as:h(),href:"/contributions",children:"Contributions"})]}),(0,s.jsx)(i.Z.Link,{href:"https://github.com/chilli-axe/mpc-autofill/releases",target:"_blank",children:"Download"}),(0,s.jsxs)(l.Z,{title:"Donate",children:[(0,s.jsxs)(l.Z.Item,{onClick:D,children:[(0,s.jsx)("i",{className:"bi bi-code"})," Support the Developer"]}),(null===(t=m.data)||void 0===t?void 0:t.name)!=null&&(null!==(u=null===(r=m.data)||void 0===r?void 0:null===(n=r.patreon)||void 0===n?void 0:n.url)&&void 0!==u?u:"").trim().length>0&&(0,s.jsxs)(l.Z.Item,{onClick:E,children:[(0,s.jsx)("i",{className:"bi bi-server"})," Support"," ",m.data.name]})]})]}),(0,s.jsx)(i.Z,{className:"ms-auto",children:(0,s.jsx)(f.Z,{variant:"secondary",onClick:w,children:"Configure Server"})})]})]})}),(0,s.jsx)(O,{show:g,handleClose:C}),(0,s.jsx)(L,{show:j,handleClose:Z}),(0,s.jsx)(M,{show:S,handleClose:I})]})}var B=r(3559),F=r(8356),U=r(5713),J=r(7088),H=r(3152),W=r(5582),Y=r(5749),$=r(9539),X=r(5384);let Q=(0,F.UY)({[q.gk.reducerPath]:q.gk.reducer,viewSettings:X.ZP,searchSettings:Y.ZP,searchResults:U.ZP,cardDocuments:J.ZP,cardbacks:H.ZP,sourceDocuments:W.ZP,project:$.ZP,backend:w}),K=(0,v.xC)({reducer:Q,preloadedState:void 0,middleware:e=>e().concat(q.gk.middleware)});var ee=r(4304),et=r(5015),er=r(4051),en=r(1555),ea=r(2021);function es(){let e=(0,Z._m)(),[t,r]=(0,x.useState)(!1),n=()=>{(0,Z.Y9)(!0),r(!0)},a=()=>{(0,Z.Y9)(!1),r(!0)};return(0,s.jsxs)(et.Z,{show:void 0==e&&!t,delay:3e3,animation:!0,children:[(0,s.jsx)(et.Z.Header,{closeButton:!1,children:(0,s.jsx)("strong",{className:"me-auto",children:"Cookie Usage"})}),(0,s.jsxs)(et.Z.Body,{children:[(0,s.jsxs)("p",{children:[y.vV," uses cookies for remembering your search settings, and for collecting analytics data to help improve the site. Your data is never shared with anyone. Would you like to opt out of analytics cookies?"]}),(0,s.jsxs)("p",{children:["View our privacy policy ",(0,s.jsx)(h(),{href:"/about",children:"here"}),"."]}),(0,s.jsx)("div",{className:"mt-2 pt-2 border-top",children:(0,s.jsxs)(er.Z,{children:[(0,s.jsx)(en.Z,{className:"d-grid gap-0",children:(0,s.jsx)(f.Z,{variant:"outline-info",size:"sm",onClick:a,children:"Opt out"})}),(0,s.jsx)(en.Z,{className:"d-grid gap-0",children:(0,s.jsx)(f.Z,{variant:"primary",size:"sm",onClick:n,children:"That's fine!"})})]})})]})]})}function ei(){return(0,s.jsx)(_.Z,{children:(0,s.jsx)(ea.Z,{position:"top-start",children:(0,s.jsx)(es,{})})})}function el(e){let{children:t}=e,r=(0,Z._m)();return(0,s.jsxs)(s.Fragment,{children:[!0===r&&(0,s.jsx)(ee.Wi,{trackPageViews:!0}),(0,s.jsx)(B.Z,{children:(0,s.jsxs)(p.zt,{store:K,children:[(0,s.jsx)(ei,{}),(0,s.jsx)(V,{}),(0,s.jsx)(c.Z,{className:"addmargin",style:{maxWidth:"1200px"},children:t})]})})]})}},5305:function(e,t,r){r.d(t,{$:function(){return a}});var n=r(5893);function a(){return(0,n.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,n.jsx)("div",{className:"spinner-border",style:{width:"4em",height:"4em"},role:"status",children:(0,n.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}r(7294)},5384:function(e,t,r){r.d(t,{$3:function(){return l}});var n=r(1876);let a=(0,n.oM)({name:"cardGrid",initialState:{frontsVisible:!0},reducers:{switchToFront:e=>{e.frontsVisible=!0},switchToBack:e=>{e.frontsVisible=!1},toggleFaces:e=>{e.frontsVisible=!e.frontsVisible}}}),{switchToFront:s,switchToBack:i,toggleFaces:l}=a.actions;t.ZP=a.reducer}}]);