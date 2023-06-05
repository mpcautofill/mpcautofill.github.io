"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[353],{2283:function(e,t,r){r.d(t,{D_:function(){return S},Hz:function(){return k},QA:function(){return h},QZ:function(){return b},Xz:function(){return j},cf:function(){return g},gk:function(){return c},l:function(){return y},uX:function(){return x},zr:function(){return v}});var n=r(5673),s=r(848),i=r(1677),a=r(975),l=r(4641);let o=async(e,t,r)=>{let s=t.getState().backend.url,i=(0,n.ni)({baseUrl:s});return i(e,t,r)},c=(0,s.LC)({reducerPath:"apiSlice",baseQuery:o,tagTypes:[i.Fj.BackendSpecific],endpoints:e=>({getCards:e.query({query:e=>({url:"2/cards/",method:"POST",body:{card_identifiers:JSON.stringify(e)}}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.results}),getCardbacks:e.query({query:()=>({url:"2/cardbacks/",method:"GET"}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.cardbacks}),search:e.query({query:e=>({url:"2/searchResults/",method:"POST",body:JSON.stringify({searchSettings:e.searchSettings,queries:Array.from(e.queries)})}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.results}),getSources:e.query({query:()=>({url:"2/sources/",method:"GET"}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.results}),getImportSites:e.query({query:()=>({url:"2/importSites/",method:"GET"}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.import_sites}),queryImportSite:e.query({query:e=>({url:"2/importSiteDecklist/",method:"POST",body:JSON.stringify({url:e})}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.cards}),getDFCPairs:e.query({query:()=>({url:"2/DFCPairs/",method:"GET"}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>Object.fromEntries(Object.keys(e.dfc_pairs).map(t=>[(0,l.dG)(t),(0,l.dG)(e.dfc_pairs[t])]))}),getSampleCards:e.query({query:()=>({url:"2/sampleCards/",method:"GET"}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.cards}),getContributions:e.query({query:()=>({url:"2/contributions/",method:"GET"}),providesTags:[i.Fj.BackendSpecific]}),getBackendInfo:e.query({query:()=>({url:"2/info/",method:"GET"}),providesTags:[i.Fj.BackendSpecific],transformResponse:(e,t,r)=>e.info}),getGoogleDriveImage:e.query({query:e=>({url:i._g,method:"GET",params:{id:e},responseHandler:"text"}),keepUnusedDataFor:1})})}),{useGetCardsQuery:u,useGetCardbacksQuery:d,useSearchQuery:m,useGetSourcesQuery:f,useGetImportSitesQuery:h,useQueryImportSiteQuery:p,useGetDFCPairsQuery:y,useGetSampleCardsQuery:g,useGetContributionsQuery:b,useGetBackendInfoQuery:v}=c;async function j(e,t){let r=await fetch((0,l.X8)(e,"/2/cards/"),{method:"POST",body:JSON.stringify({card_identifiers:Array.from(t)}),credentials:"same-origin",headers:(0,a.ho)()}),n=await r.json();return n.results}async function x(e){let t=await fetch((0,l.X8)(e,"/2/cardbacks/"),{method:"GET",credentials:"same-origin",headers:(0,a.ho)()}),r=await t.json();return r.cardbacks}async function S(e,t,r){let n=await fetch((0,l.X8)(e,"/2/searchResults/"),{method:"POST",body:JSON.stringify({searchSettings:t,queries:Array.from(r)}),credentials:"same-origin",headers:(0,a.ho)()}),s=await n.json();return s.results}async function k(e){let t=await fetch((0,l.X8)(e,"/2/sources/"),{method:"GET",credentials:"same-origin",headers:(0,a.ho)()}),r=await t.json();return r.results}},1677:function(e,t,r){var n;r.d(t,{A0:function(){return u},B4:function(){return g},B9:function(){return Z},Ds:function(){return P},Em:function(){return D},Fj:function(){return n},Fo:function(){return i},M0:function(){return y},Ni:function(){return m},Ox:function(){return k},P$:function(){return f},WU:function(){return c},Wn:function(){return T},Zb:function(){return l},_g:function(){return R},bD:function(){return w},dt:function(){return o},eJ:function(){return p},gx:function(){return S},i6:function(){return h},kw:function(){return C},mo:function(){return v},nS:function(){return q},qY:function(){return d},sL:function(){return x},tm:function(){return b},vV:function(){return s},vs:function(){return a},xk:function(){return j},yl:function(){return I}});let s="MPC Autofill",i="MakePlayingCards.com",a="https://www.makeplayingcards.com",l="CARD",o="CARDBACK",c="TOKEN",u="@",d=":",m={"":l,b:o,t:c},f=Object.fromEntries(Object.keys(m).map(e=>[m[e],e.length>0?e+d:e])),h="front",p="back",y="|",g=38,b=50,v=40,j=1200,x=0,S=1500,k=50,w=30,Z=1,q="csrftoken",I="searchSettings",C="googleAnalyticsConsent",D="backendURL",P=[18,36,55,72,90,108,126,144,162,180,198,216,234,396,504,612],T=P[P.length-1];(n||(n={})).BackendSpecific="backendSpecific";let R="https://script.google.com/macros/s/AKfycbw8laScKBfxda2Wb0g63gkYDBdy8NWNxINoC4xDOwnCQ3JMFdruam1MdmNmN4wI5k4/exec"},975:function(e,t,r){r.d(t,{j:function(){return y},ho:function(){return c},_m:function(){return m},Vs:function(){return h},cI:function(){return u},Y9:function(){return f},IT:function(){return p},Wm:function(){return d}});var n=r(1581),s=r.n(n),i=r(1955),a=r(1677);let l={title:"Search settings schema",type:"object",properties:{searchTypeSettings:{type:"object",properties:{fuzzySearch:{description:"Whether fuzzy search is enabled",type:"boolean"}},required:["fuzzySearch"]},sourceSettings:{type:"object",properties:{sources:{description:"The list of sources in the order they should be searched",type:["array","null"],items:{type:"array",items:[{type:"number",description:"The source's primary key",minimum:0},{type:"boolean",description:"Whether the source is enabled for searching"}],minItems:2,maxItems:2}}},required:["sources"]},filterSettings:{type:"object",properties:{minimumDPI:{type:"number",description:"The minimum DPI that cards must meet to be included in search results",minimum:0},maximumDPI:{type:"number",description:"The maximum DPI that cards can meet to be included in search results",minimum:0},maximumSize:{type:"number",description:"The maximum filesize that cards can have to be included in search results",minimum:0}},required:["minimumDPI","maximumDPI","maximumSize"]}},required:["searchTypeSettings","sourceSettings","filterSettings"],additionalProperties:!1},o=new(s());function c(){let e=i.Z.get(a.nS);if(null!=e)return{"X-CSRFToken":e}}function u(e){var t,r;let n=JSON.parse(null!==(t=localStorage.getItem(a.yl))&&void 0!==t?t:"{}"),s=o.compile(l),i=s(n);if(!i)return{searchTypeSettings:{fuzzySearch:!1},sourceSettings:{sources:Object.values(e).map(e=>[e.pk,!0])},filterSettings:{minimumDPI:a.sL,maximumDPI:a.gx,maximumSize:a.bD}};{let t=new Set(Object.values(e).map(e=>e.pk)),s=null!==(r=n.sourceSettings.sources)&&void 0!==r?r:[],i=new Set(s.map(e=>e[0]));return n.sourceSettings.sources=s.filter(e=>t.has(e[0])).concat(Array.from(t).filter(e=>!i.has(e)).map(e=>[e,!0])),n}}function d(e){localStorage.setItem(a.yl,JSON.stringify(e))}function m(){let e=i.Z.get(a.kw);return void 0!=e?!0===JSON.parse(e):void 0}function f(e){i.Z.set(a.kw,JSON.stringify(e),{expires:365,sameSite:"strict"})}function h(){return localStorage.getItem(a.Em)}function p(e){localStorage.setItem(a.Em,e)}function y(){localStorage.removeItem(a.Em)}},4641:function(e,t,r){r.d(t,{DE:function(){return m},GL:function(){return a},X8:function(){return f},XV:function(){return o},dG:function(){return l},jg:function(){return h},l_:function(){return c},ts:function(){return u},wt:function(){return d}});var n=r(9742),s=r(1677);function i(e){return e.replaceAll(/ +(?= )/g,"").trim()}function a(e){return i(e.replaceAll(/[([].*?[)\]]/g,""))}function l(e){return i(e.toLowerCase().trim().replace(/[~`!@#$%^&*(){}\[\];:"'<,.>?/\\|_+=]/g,""))}function o(e){for(let[t,r]of Object.entries(s.Ni))if(""!==t&&e.trimStart().toLowerCase().startsWith("".concat(t).concat(s.qY)))return{query:l(e.trimStart().slice(t.length+1)),card_type:r};return{query:l(e),card_type:s.Ni[""]}}function c(e,t){let r=[];return e.forEach(e=>{if(null!=e&&e.trim().length>0){let[n,i,a]=function(e,t){var r,n,i,a;let l,c;let[u,d,m]=function(e){var t;let r=e.replace(/\s+/g," ").trim(),n=RegExp("^(?:([0-9]*)?[xX]?\\s?(.*?)(?:".concat(s.A0,"([A-z0-9_\\-]*))?)?(?:(?:\\s*)").concat("\\"+s.M0,"(?:\\s*)(.+?)(?:").concat(s.A0,"([A-z0-9_\\-]*))?)?$"),"gm"),i=n.exec(r);return null==i?[0,null,null]:[parseInt(null!==(t=i[1])&&void 0!==t?t:"1"),[i[2],i[3]],[i[4],i[5]]]}(e),f=null;null!=d&&(null!==(r=d[0])&&void 0!==r?r:"").length>0&&(f=o(d[0]),l=null!==(n=d[1])&&void 0!==n?n:void 0);let h=null;return null!=m&&(null!==(i=m[0])&&void 0!==i?i:"").length>0?(h=o(m[0]),c=null!==(a=m[1])&&void 0!==a?a:void 0):null!=f&&(null==f?void 0:f.query)!=null&&f.query in t&&(h={query:t[f.query],card_type:s.Zb}),[u,null!=f?{query:f,selectedImage:l,selected:!1}:null,null!=h?{query:h,selectedImage:c,selected:!1}:null]}(e,t);n>0&&(null!=i||null!=a)&&r.push([n,i,a])}}),r}function u(e,t){return c(e.split(/\r?\n|\r|\n/g),t)}function d(e,t){let r=[];for(let[n,i,a]of e){let e=Math.min(n,s.Wn-(t+r.length));if((null!=i||null!=a)&&t+(r=[...r,...Array(e).fill({front:{query:null==i?void 0:i.query,selectedImage:null==i?void 0:i.selectedImage,selected:!1},back:{query:null==a?void 0:a.query,selectedImage:null==a?void 0:a.selectedImage,selected:!1}})]).length>=s.Wn)break}return r}function m(e){var t;let r=[...e.matchAll(/^(https?:\/\/)?(.*?)(?:\/.*)?$/gm)][0];return(null!==(t=r[1])&&void 0!==t?t:"https://")+r[2]}function f(e,t){return e+t}function h(e){return new Blob([(0,n.b$)(e)])}},8737:function(e,t,r){r.d(t,{If:function(){return l},LW:function(){return a},jb:function(){return i}});var n=r(1876);let s=(0,n.oM)({name:"backend",initialState:{url:null},reducers:{setURL:(e,t)=>{e.url=t.payload},clearURL:e=>{e.url=void 0}}}),{setURL:i,clearURL:a}=s.actions;t.ZP=s.reducer;let l=e=>e.backend.url},3152:function(e,t,r){r.d(t,{xu:function(){return i}});var n=r(1876),s=r(2283);let i=(0,n.hg)("cardbacks/fetchCardbacks",async(e,t)=>{let r=t.getState();return(0,s.uX)(r.backend.url)}),a=(0,n.oM)({name:"cardbacks",initialState:{cardbacks:[],status:"idle",error:null},reducers:{addCardbackDocuments:(e,t)=>{e.cardbacks=[...t.payload]}},extraReducers(e){e.addCase(i.pending,(e,t)=>{e.status="loading"}).addCase(i.fulfilled,(e,t)=>{e.status="succeeded",e.cardbacks=[...t.payload]}).addCase(i.rejected,(e,t)=>{e.status="failed",e.error=""})}});t.ZP=a.reducer},1230:function(e,t,r){r.d(t,{HS:function(){return q},LI:function(){return d},ND:function(){return v},NO:function(){return I},NV:function(){return u},O$:function(){return w},Tx:function(){return b},Y:function(){return p},fP:function(){return Z},mp:function(){return S},nZ:function(){return y},p4:function(){return h},pl:function(){return c},qP:function(){return g},qe:function(){return x},r7:function(){return k},sZ:function(){return f},uA:function(){return C},wH:function(){return o},zO:function(){return m}});var n=r(1876),s=r(1677),i=r(4641);let a={members:[{front:{query:{query:"island",card_type:s.Zb},selectedImage:void 0,selected:!1},back:null},{front:{query:{query:"island",card_type:s.Zb},selectedImage:void 0,selected:!1},back:null},{front:{query:{query:"grim monolith",card_type:s.Zb},selectedImage:void 0,selected:!1},back:null},{front:{query:{query:"past in flames",card_type:s.Zb},selectedImage:void 0,selected:!1},back:null},{front:{query:{query:"necropotence",card_type:s.Zb},selectedImage:void 0,selected:!1},back:null}],cardback:null},l=(0,n.oM)({name:"project",initialState:a,reducers:{setSelectedImage:(e,t)=>{null==e.members[t.payload.slot][t.payload.face]?e.members[t.payload.slot][t.payload.face]={query:{query:null,card_type:s.Zb},selectedImage:t.payload.selectedImage,selected:!1}:e.members[t.payload.slot][t.payload.face].selectedImage=t.payload.selectedImage},bulkReplaceSelectedImage:(e,t)=>{let r=new Set;for(let[n,s]of e.members.entries())null!=s[t.payload.face]&&s[t.payload.face].selectedImage===t.payload.currentImage&&r.add(n);for(let n of r)null==e.members[n][t.payload.face]?e.members[n][t.payload.face]={query:{query:null,card_type:s.Zb},selectedImage:t.payload.selectedImage,selected:!1}:e.members[n][t.payload.face].selectedImage=t.payload.selectedImage},bulkSetSelectedImage:(e,t)=>{for(let[r,n]of t.payload.slots)null==e.members[n][r]?e.members[n][r]={query:{query:null,card_type:s.Zb},selectedImage:t.payload.selectedImage,selected:!1}:(e.members[n][r].selectedImage=t.payload.selectedImage,e.members[n][r].selected=!1)},setQuery:(e,t)=>{let r=(0,i.XV)(t.payload.query);null==e.members[t.payload.slot][t.payload.face]?e.members[t.payload.slot][t.payload.face]={query:r,selectedImage:void 0,selected:!1}:e.members[t.payload.slot][t.payload.face].query=r},bulkSetQuery:(e,t)=>{let r=(0,i.XV)(t.payload.query);for(let[n,s]of t.payload.slots)null==e.members[s][n]?e.members[s][n]={query:r,selectedImage:void 0,selected:!1}:(e.members[s][n].query=r,e.members[s][n].selected=!1)},setSelectedCardback:(e,t)=>{e.cardback=t.payload.selectedImage},addMembers:(e,t)=>{e.members=[...e.members,...t.payload.members.slice(0,s.Wn-e.members.length)]},toggleMemberSelection:(e,t)=>{var r;null!=(null!==(r=e.members[t.payload.slot])&&void 0!==r?r:{})[t.payload.face]&&(e.members[t.payload.slot][t.payload.face].selected=!e.members[t.payload.slot][t.payload.face].selected)},bulkSetMemberSelection:(e,t)=>{for(let[r,n]of t.payload.slots)null==e.members[n][r]?e.members[n][r]={query:{query:null,card_type:s.Zb},selectedImage:void 0,selected:t.payload.selectedStatus}:e.members[n][r].selected=t.payload.selectedStatus},bulkAlignMemberSelection:(e,t)=>{var r,n,s;let i=(null!==(r=e.members[t.payload.slot])&&void 0!==r?r:{})[t.payload.face];if(null!=i)for(let[r,a]of e.members.entries())null!=a[t.payload.face]&&(null===(n=a[t.payload.face].query)||void 0===n?void 0:n.query)===i.query.query&&(null===(s=a[t.payload.face].query)||void 0===s?void 0:s.card_type)===i.query.card_type&&(a[t.payload.face].selected=i.selected)},deleteSlot:(e,t)=>{e.members.splice(t.payload.slot,1)},bulkDeleteSlots:(e,t)=>{t.payload.slots.sort(function(e,t){return t-e}).forEach(function(t){e.members.splice(t,1)})}}}),o=e=>e.project.members,c=e=>new Set(e.project.members.flatMap(e=>{var t,r;return((null===(t=e.front)||void 0===t?void 0:t.selectedImage)!=null?[e.front.selectedImage]:[]).concat((null===(r=e.back)||void 0===r?void 0:r.selectedImage)!=null?[e.back.selectedImage]:[])})),u=e=>e.project.members.flatMap((e,t)=>{var r,n;return((null===(r=e.front)||void 0===r?void 0:r.selected)===!0?[[s.i6,t]]:[]).concat((null===(n=e.back)||void 0===n?void 0:n.selected)===!0?[[s.eJ,t]]:[])}),d=e=>new Set(e.project.members.flatMap(e=>{var t,r,n,i;return((null===(t=e.front)||void 0===t?void 0:null===(r=t.query)||void 0===r?void 0:r.query)!=null?[s.P$[e.front.query.card_type]+e.front.query.query]:[]).concat((null===(n=e.back)||void 0===n?void 0:null===(i=n.query)||void 0===i?void 0:i.query)!=null?[s.P$[e.back.query.card_type]+e.back.query.query]:[])})),m=e=>e.project.members.length,f=e=>e.project.cardback,h=e=>{let t=new Set;for(let r of e.project.members)for(let e of[s.i6,s.eJ])null!=r[e]&&null!=r[e].selectedImage&&t.add(r[e].selectedImage);let r=e.cardDocuments.cardDocuments;return Array.from(t).reduce((e,t)=>{var n;return e+(null!==(n=r[t])&&void 0!==n?n:{size:0}).size},0)},p=e=>{let t=new Set(e.cardbacks.cardbacks);for(let a of e.project.members)for(let l of[s.i6,s.eJ]){var r,n,i;let s=a[l];(null==s?void 0:null===(r=s.query)||void 0===r?void 0:r.query)!=null&&(null!==(i=(null!==(n=e.searchResults.searchResults[s.query.query])&&void 0!==n?n:{})[s.query.card_type])&&void 0!==i?i:[]).length>0&&e.searchResults.searchResults[s.query.query][s.query.card_type].forEach(e=>t.add(e))}return t},y=e=>{let t=[];for(let i of e.project.members)for(let a of[s.i6,s.eJ]){var r,n;let s=i[a];(null==s?void 0:null===(r=s.query)||void 0===r?void 0:r.query)!=null&&null==(null!==(n=e.searchResults.searchResults[s.query.query])&&void 0!==n?n:{})[s.query.card_type]&&t.push(s.query)}return t},{setSelectedImage:g,bulkReplaceSelectedImage:b,bulkSetSelectedImage:v,setQuery:j,bulkSetQuery:x,setSelectedCardback:S,addMembers:k,toggleMemberSelection:w,bulkSetMemberSelection:Z,bulkAlignMemberSelection:q,deleteSlot:I,bulkDeleteSlots:C}=l.actions;t.ZP=l.reducer},7088:function(e,t,r){r.d(t,{U9:function(){return o}});var n=r(1876),s=r(2283),i=r(3152),a=r(1230),l=r(5713);let o=(0,n.hg)("cardDocuments/fetchCardDocuments",async(e,t)=>{await t.dispatch((0,l.IA)()),await t.dispatch((0,i.xu)());let r=t.getState(),n=(0,a.Y)(r),o=new Set(Object.keys(r.cardDocuments.cardDocuments)),c=new Set(Array.from(n).filter(e=>!o.has(e)));if(c.size>0)return(0,s.Xz)(r.backend.url,c)}),c=(0,n.oM)({name:"cardDocuments",initialState:{cardDocuments:{},status:"idle",error:null},reducers:{addCardDocuments:(e,t)=>{e.cardDocuments={...e.cardDocuments,...t.payload}}},extraReducers(e){e.addCase(o.pending,(e,t)=>{e.status="loading"}).addCase(o.fulfilled,(e,t)=>{e.status="succeeded",e.cardDocuments={...e.cardDocuments,...t.payload}}).addCase(o.rejected,(e,t)=>{e.status="failed",e.error=""})}});t.ZP=c.reducer},5713:function(e,t,r){r.d(t,{IA:function(){return a},Ug:function(){return c}});var n=r(1876),s=r(2283),i=r(1230);let a=(0,n.hg)("searchResults/fetchCards",async(e,t)=>{let r=t.getState(),n=(0,i.nZ)(r);if(n.length>0)return(0,s.D_)(r.backend.url,r.searchSettings,n)}),l=(0,n.oM)({name:"searchResults",initialState:{searchResults:{},status:"idle",error:null},reducers:{addSearchResults:(e,t)=>{e.searchResults={...e.searchResults,...t.payload}},clearSearchResults:e=>{e.searchResults={}}},extraReducers(e){e.addCase(a.fulfilled,(e,t)=>{e.searchResults={...e.searchResults,...t.payload}}),e.addCase(a.rejected,(e,t)=>{alert("TODO")})}}),{addSearchResults:o,clearSearchResults:c}=l.actions;t.ZP=l.reducer},5582:function(e,t,r){r.d(t,{$:function(){return i},TK:function(){return l}});var n=r(1876),s=r(2283);let i=(0,n.hg)("sourceDocuments/fetchSourceDocuments",async(e,t)=>{let r=t.getState();return(0,s.Hz)(r.backend.url)}),a=(0,n.oM)({name:"sourceDocuments",initialState:{sourceDocuments:void 0},reducers:{addSourceDocuments:(e,t)=>{e.sourceDocuments={...e.sourceDocuments,...t.payload}}},extraReducers(e){e.addCase(i.fulfilled,(e,t)=>{e.sourceDocuments={...e.sourceDocuments,...t.payload}}),e.addCase(i.rejected,(e,t)=>{alert("TODO")})}});t.ZP=a.reducer;let l=e=>e.sourceDocuments.sourceDocuments},5749:function(e,t,r){r.d(t,{Fg:function(){return l},Ph:function(){return o},_E:function(){return c},xN:function(){return u}});var n=r(1876),s=r(1677);let i={searchTypeSettings:{fuzzySearch:!1},sourceSettings:{sources:null},filterSettings:{minimumDPI:s.sL,maximumDPI:s.gx,maximumSize:s.bD}},a=(0,n.oM)({name:"searchSettings",initialState:i,reducers:{setSearchTypeSettings:(e,t)=>{e.searchTypeSettings=t.payload},setSourceSettings:(e,t)=>{e.sourceSettings=t.payload},setFilterSettings:(e,t)=>{e.filterSettings=t.payload}}}),{setSearchTypeSettings:l,setSourceSettings:o,setFilterSettings:c}=a.actions;t.ZP=a.reducer;let u=e=>e.searchSettings},1110:function(e,t,r){var n=r(5893),s=r(5152),i=r.n(s),a=r(7294);let l=e=>(0,n.jsx)(a.Fragment,{children:e.children});t.Z=i()(()=>Promise.resolve(l),{ssr:!1})},4353:function(e,t,r){r.d(t,{Z:function(){return ej}});var n,s,i=r(7297),a=r(5893),l=r(1163),o=r(4304),c=r(7294),u=r(682),d=r(3559),m=r(2664),f=r(9521),h=r(8356),p=r(1876),y=r(2283),g=r(8737),b=r(3152),v=r(1230),j=r(7088),x=r(5713),S=r(5582),k=r(5749),w=r(5384);let Z=(0,h.UY)({[y.gk.reducerPath]:y.gk.reducer,viewSettings:w.ZP,searchSettings:k.ZP,searchResults:x.ZP,cardDocuments:j.ZP,cardbacks:b.ZP,sourceDocuments:S.ZP,project:v.ZP,backend:g.ZP}),q=(0,p.xC)({reducer:Z,preloadedState:void 0,middleware:e=>e().concat(y.gk.middleware)});var I=r(1677),C=r(975),D=r(4641),P=r(1664),T=r.n(P),R=r(7104),E=r(1555),N=r(4051),_=r(8331),O=r(2021),F=r(1110);function B(){let e=(0,C._m)(),[t,r]=(0,c.useState)(!1),n=()=>{(0,C.Y9)(!0),r(!0)},s=()=>{(0,C.Y9)(!1),r(!0)};return(0,a.jsxs)(_.Z,{show:void 0==e&&!t,delay:3e3,animation:!0,children:[(0,a.jsx)(_.Z.Header,{closeButton:!1,children:(0,a.jsx)("strong",{className:"me-auto",children:"Cookie Usage"})}),(0,a.jsxs)(_.Z.Body,{children:[(0,a.jsxs)("p",{children:[I.vV," uses cookies for remembering your search settings, and for collecting analytics data to help improve the site. Your data is never shared with anyone. Would you like to opt out of analytics cookies?"]}),(0,a.jsxs)("p",{children:["View our privacy policy ",(0,a.jsx)(T(),{href:"/about",children:"here"}),"."]}),(0,a.jsx)("div",{className:"mt-2 pt-2 border-top",children:(0,a.jsxs)(N.Z,{children:[(0,a.jsx)(E.Z,{className:"d-grid gap-0",children:(0,a.jsx)(R.Z,{variant:"outline-info",size:"sm",onClick:s,children:"Opt out"})}),(0,a.jsx)(E.Z,{className:"d-grid gap-0",children:(0,a.jsx)(R.Z,{variant:"primary",size:"sm",onClick:n,children:"That's fine!"})})]})})]})]})}function z(){return(0,a.jsx)(F.Z,{children:(0,a.jsx)(O.Z,{position:"top-start",children:(0,a.jsx)(B,{})})})}var A=r(5675),V=r.n(A),M=r(1451),L=r(9126),G=r(4214),U=r(5276),W=r.n(U),H=r(8375),J=r(7346),X=r(4874);r(1351),(n=s||(s={})).IN_PROGRESS="record-circle-fill",n.SUCCEEDED="check-circle-fill",n.FAILED="x-circle-fill";let Y=["Validating URL","Pinging server","Checking search engine health"];function $(e){let t=!1;try{new URL(e),t=!0}catch(e){}return t}async function Q(e){let t=!1;try{let r=new(W());await r.ping(e,function(e,r){t=null==e})}catch(e){}return t}async function K(e){let t=!1;try{await fetch(new URL("2/searchEngineHealth/",e).toString(),{method:"GET",mode:"cors"}).then(e=>e.json()).then(e=>{var r;t=!0===(null!==(r=e.online)&&void 0!==r&&r)})}catch(e){}return t}function ee(e){var t;let{show:r,handleClose:n}=e,i=(0,m.I0)(),[l,o]=(0,c.useState)([]),[u,d]=(0,c.useState)(!1),f=(0,m.v9)(g.If),h=()=>{i((0,g.LW)()),(0,C.j)(),i(y.gk.util.invalidateTags([I.Fj.BackendSpecific])),o([])},[p,b]=(0,c.useState)(""),v=async e=>{e.preventDefault(),d(!0);let t=(0,D.DE)(p.trim()),r=[];for(let e of(o(r),[$,Q,K])){r.push(s.IN_PROGRESS),o(r);let n=await e(t);if(o(r=[...r.slice(0,-1),n?s.SUCCEEDED:s.FAILED]),!n)break}r.every(e=>e===s.SUCCEEDED)&&(i((0,g.jb)(t)),(0,C.IT)(t),i(y.gk.util.invalidateTags([I.Fj.BackendSpecific])),b("")),d(!1)};return(0,c.useEffect)(()=>{let e=(0,C.Vs)();void 0!=e&&(i((0,g.jb)(e)),i(y.gk.util.invalidateTags([I.Fj.BackendSpecific])))},[]),(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(X.Z,{show:r,onHide:n,children:[(0,a.jsx)(X.Z.Header,{closeButton:!0,children:(0,a.jsx)(X.Z.Title,{children:"Configure Server"})}),(0,a.jsxs)(X.Z.Body,{children:[null!=f&&(0,a.jsxs)(H.Z,{variant:"success",children:["You're currently connected to ",(0,a.jsx)("b",{children:f}),".",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)(R.Z,{variant:"danger",onClick:h,children:"Disconnect"})]}),"Enter the URL of the server you'd like to connect ",I.vV," ","to and hit ",(0,a.jsx)("b",{children:"Submit"}),".",(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsxs)(J.Z,{onSubmit:v,children:[(0,a.jsx)(J.Z.Group,{className:"mb-3",controlId:"formURL",children:(0,a.jsx)(J.Z.Control,{type:"url",placeholder:"https://",onChange:e=>b(e.target.value),value:p,disabled:u})}),l.length>0&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("hr",{}),(0,a.jsx)("ul",{children:Y.map((e,r)=>(0,a.jsxs)("li",{children:[(0,a.jsx)("i",{className:"bi bi-".concat(null!==(t=l[r])&&void 0!==t?t:"circle")})," ",e,l[r]===s.IN_PROGRESS&&"..."]},e))}),(0,a.jsx)("hr",{})]}),(0,a.jsx)(R.Z,{variant:"primary",type:"submit",disabled:u||0==p.trim().length,children:"Submit"})]})]})]})})}var et=r(6212),er=r(5305);function en(e){var t,r,n,s;let{show:i,handleClose:l}=e,o=(0,m.v9)(g.If),c=(0,y.zr)(void 0,{skip:null==o});return(0,a.jsxs)(et.Z,{show:i,onHide:l,children:[(0,a.jsx)(et.Z.Header,{closeButton:!0,children:(0,a.jsxs)(et.Z.Title,{children:["Support ",null!==(n=null===(t=c.data)||void 0===t?void 0:t.name)&&void 0!==n?n:"Your Server Manager"]})}),(0,a.jsx)(et.Z.Body,{children:(null==c?void 0:null===(r=c.data)||void 0===r?void 0:r.patreon)==null?(0,a.jsx)(er.$,{}):(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("h4",{children:"Patron Tiers"}),Object.values(null!==(s=c.data.patreon.tiers)&&void 0!==s?s:{}).map(e=>(0,a.jsx)("h6",{children:(0,a.jsxs)("b",{children:[e.title," ($",e.usd," USD)"]})},"patreon-tier-".concat(e.title)))]})}),(0,a.jsx)(et.Z.Footer,{children:(0,a.jsx)(R.Z,{variant:"secondary",onClick:l,children:"Close"})})]})}function es(){return(0,a.jsx)("a",{href:"https://www.buymeacoffee.com/chilli.axe",target:"_blank",children:(0,a.jsx)(V(),{className:"mx-auto d-block",src:"https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png",alt:"Buy Me A Coffee",width:217,height:60})})}function ei(e){let{show:t,handleClose:r}=e;return(0,a.jsxs)(et.Z,{show:t,onHide:r,children:[(0,a.jsx)(et.Z.Header,{closeButton:!0,children:(0,a.jsx)(et.Z.Title,{children:"Support the Developer"})}),(0,a.jsxs)(et.Z.Body,{children:[(0,a.jsx)("h4",{children:"A bit about me"}),(0,a.jsxs)("p",{children:["Hey there! Thanks for checking out ",I.vV,". I'm Nick, the creator and primary developer of this project."]}),(0,a.jsxs)("p",{children:["I'm responsible for this website, the code that image repository servers run on, and the desktop tool that automates"," ",(0,a.jsx)("a",{href:I.vs,target:"_blank",children:I.Fo}),"."]}),(0,a.jsxs)("p",{children:["I started developing ",I.vV," in early 2020 while I was in uni to simplify how the tabletop gaming community shares its MPC print-ready images — at the time, we were manually browsing through Google Drives to find cards we wanted to print and dragging & dropping them into MPC."]}),(0,a.jsxs)("p",{children:["These days, I'm working full-time and continuing to develop"," ",I.vV," by night, and I'm passionate about delivering the best print tooling I can to the tabletop gaming community."]}),(0,a.jsxs)("p",{children:[I.vV," is completely open source software (licensed under GPL-3) and all of its features will always be free."]}),(0,a.jsxs)("p",{children:["You can support my continued development of this project through"," ",(0,a.jsx)("i",{children:"Buy Me a Coffee"})," below ♥️"]}),(0,a.jsx)("h4",{children:"Where does my donation go?"}),(0,a.jsxs)("p",{children:["I don't host any ",I.vV," servers, just the website you're on right now — which GitHub allows me to host for free."]}),(0,a.jsx)("p",{children:"Any donation goes towards:"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{children:"Fuelling my coffee addiction, and"}),(0,a.jsx)("li",{children:"Allowing me to spend more time developing and improving this project for you all. Several large features are in the pipeline that I'm excited to share when they're ready!"})]}),(0,a.jsx)("hr",{}),(0,a.jsx)(es,{})]}),(0,a.jsx)(et.Z.Footer,{children:(0,a.jsx)(R.Z,{variant:"secondary",onClick:r,children:"Close"})})]})}function ea(){let e=(0,i.Z)(["\n  max-width: ","px;\n"]);return ea=function(){return e},e}function el(){let e=(0,i.Z)(["\n  --bs-navbar-padding-y: 0px;\n"]);return el=function(){return e},e}function eo(){let e=(0,i.Z)(["\n  font-weight: bold;\n"]);return eo=function(){return e},e}let ec=(0,f.ZP)(u.Z).withConfig({componentId:"sc-52e967b9-0"})(ea(),I.xk),eu=(0,f.ZP)(L.Z).withConfig({componentId:"sc-52e967b9-1"})(el()),ed=(0,f.ZP)(L.Z.Collapse).withConfig({componentId:"sc-52e967b9-2"})(eo());function em(){var e,t,r,n,s,i;let l=(0,m.v9)(g.If),o=(0,y.zr)(void 0,{skip:null==l}),[u,d]=(0,c.useState)(!1),[f,h]=(0,c.useState)(!1),[p,b]=(0,c.useState)(!1),v=()=>d(!1),j=()=>d(!0),x=()=>h(!1),S=()=>h(!0),k=()=>b(!1),w=()=>b(!0),Z=null!==(s=o.isSuccess?null===(e=o.data)||void 0===e?void 0:e.name:null)&&void 0!==s?s:I.vV;return(0,a.jsxs)(F.Z,{children:[(0,a.jsx)(eu,{expand:"lg",fixed:"top",variant:"dark",bg:"primary",children:(0,a.jsxs)(ec,{className:"justify-content-center align-middle",children:[(0,a.jsxs)(L.Z.Brand,{href:"/",as:T(),children:[(0,a.jsx)(V(),{src:"/logolowres.png",alt:"logo",width:I.mo,height:I.mo})," ",(0,a.jsx)("span",{className:"align-middle",children:(0,a.jsx)("b",{children:Z})})]}),(0,a.jsx)(L.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,a.jsxs)(ed,{id:"basic-navbar-nav",children:[(0,a.jsxs)(M.Z,{className:"me-auto",children:[null!=l&&(0,a.jsx)(M.Z.Link,{as:T(),href:"/editor",children:"Editor"}),null!=l&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(M.Z.Link,{as:T(),href:"/new",children:"What's New?"}),(0,a.jsx)(M.Z.Link,{as:T(),href:"/contributions",children:"Contributions"})]}),(0,a.jsx)(M.Z.Link,{as:T(),href:"https://github.com/chilli-axe/mpc-autofill/wiki/Overview",target:"_blank",children:"Wiki"}),(0,a.jsx)(M.Z.Link,{href:"https://github.com/chilli-axe/mpc-autofill/releases",target:"_blank",children:"Download"}),(0,a.jsxs)(G.Z,{title:"Donate",children:[(0,a.jsxs)(G.Z.Item,{onClick:S,children:[(0,a.jsx)("i",{className:"bi bi-code"})," Support the Developer"]}),(null===(t=o.data)||void 0===t?void 0:t.name)!=null&&(null!==(i=null===(r=o.data)||void 0===r?void 0:null===(n=r.patreon)||void 0===n?void 0:n.url)&&void 0!==i?i:"").trim().length>0&&(0,a.jsxs)(G.Z.Item,{onClick:w,children:[(0,a.jsx)("i",{className:"bi bi-server"})," Support"," ",o.data.name]})]})]}),(0,a.jsx)(M.Z,{className:"ms-auto d-flex",children:(0,a.jsx)(R.Z,{className:"my-xl-0 my-lg-0 my-md-2 my-sm-2 my-2",variant:"success",onClick:j,children:"Configure Server"})})]})]})}),(0,a.jsx)(ee,{show:u,handleClose:v}),(0,a.jsx)(ei,{show:f,handleClose:x}),(0,a.jsx)(en,{show:p,handleClose:k})]})}function ef(){let e=(0,i.Z)(["\n  overscroll-behavior: none;\n  overflow-x: hidden;\n  overflow-y: hidden; // https://stackoverflow.com/a/69589919/13021511\n"]);return ef=function(){return e},e}function eh(){let e=(0,i.Z)(["\n  top: ","px;\n  height: calc(\n    100vh - ","px\n  ); // for compatibility with older browsers\n  height: calc(100dvh - ","px); // handles the ios address bar\n  position: fixed;\n  overflow-y: scroll;\n  overflow-x: hidden;\n"]);return eh=function(){return e},e}function ep(){let e=(0,i.Z)(["\n  max-width: ","px;\n"]);return ep=function(){return e},e}function ey(){let e=(0,l.useRouter)(),{server:t}=e.query,r=null!=t&&"string"==typeof t&&t.length>0?(0,D.DE)(t.trim()):null,n=(0,m.I0)(),s=(0,m.v9)(g.If);return(0,c.useEffect)(()=>{null==s&&null!=r&&(n((0,g.jb)(r)),(0,C.IT)(r),null!=t&&"string"==typeof t&&t.length>0&&e.replace({server:t},void 0,{shallow:!0}))},[e.isReady,s,r,n]),(0,a.jsx)(a.Fragment,{})}let eg=(0,f.ZP)(m.zt).withConfig({componentId:"sc-8534e505-0"})(ef()),eb=(0,f.ZP)(u.Z).withConfig({componentId:"sc-8534e505-1"})(eh(),I.tm,I.tm,I.tm),ev=(0,f.ZP)(u.Z).withConfig({componentId:"sc-8534e505-2"})(ep(),I.xk);function ej(e){let{gutter:t=2,children:r}=e,n=(0,C._m)();return(0,a.jsxs)(a.Fragment,{children:[!0===n&&(0,a.jsx)(o.Wi,{trackPageViews:!0}),(0,a.jsx)(d.Z,{children:(0,a.jsxs)(eg,{store:q,children:[(0,a.jsx)(z,{}),(0,a.jsx)(ey,{}),(0,a.jsx)(em,{}),(0,a.jsx)(eb,{fluid:!0,className:"g-".concat(t),children:(0,a.jsx)(ev,{className:"g-".concat(t),children:r})})]})})]})}},5305:function(e,t,r){r.d(t,{$:function(){return u}});var n,s,i=r(7297),a=r(5893);r(7294);var l=r(9521);function o(){let e=(0,i.Z)(["\n  width: ","em;\n  height: ","em;\n"]);return o=function(){return e},e}let c=l.ZP.div.withConfig({componentId:"sc-ff15f3e1-0"})(o(),e=>null!==(n=e.size)&&void 0!==n?n:4,e=>null!==(s=e.size)&&void 0!==s?s:4);function u(e){let{size:t=4}=e;return(0,a.jsx)("div",{className:"d-flex justify-content-center align-items-center",children:(0,a.jsx)(c,{size:t,className:"spinner-border",role:"status",children:(0,a.jsx)("span",{className:"visually-hidden",children:"Loading..."})})})}},5384:function(e,t,r){r.d(t,{$3:function(){return l},Mo:function(){return d},O6:function(){return o},X8:function(){return c},tC:function(){return u}});var n=r(1876);let s=(0,n.oM)({name:"cardGrid",initialState:{frontsVisible:!0,sourcesVisible:{},facetBySource:!0},reducers:{switchToFront:e=>{e.frontsVisible=!0},switchToBack:e=>{e.frontsVisible=!1},toggleFaces:e=>{e.frontsVisible=!e.frontsVisible},toggleSourceVisible:(e,t)=>{var r;e.sourcesVisible={...e.sourcesVisible,[t.payload]:!(null===(r=e.sourcesVisible[t.payload])||void 0===r||r)}},makeAllSourcesVisible:e=>{e.sourcesVisible={}},makeAllSourcesInvisible:(e,t)=>{e.sourcesVisible=Object.fromEntries(t.payload.map(e=>[e,!1]))},toggleFacetBySource:e=>{e.facetBySource=!e.facetBySource}}}),{switchToFront:i,switchToBack:a,toggleFaces:l,toggleSourceVisible:o,makeAllSourcesVisible:c,makeAllSourcesInvisible:u,toggleFacetBySource:d}=s.actions;t.ZP=s.reducer}}]);