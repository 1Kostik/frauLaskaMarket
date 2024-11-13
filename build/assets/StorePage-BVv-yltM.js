import{n as l,o as j,c as a,a as N,r as i,u as ge,b as K,d as Q,f as ze,j as n,e as g,F as ue,g as De,G as je,h as Ne,i as _e,k as Ae,l as R,m as Le}from"./index-CIcvnpyc.js";import{H as Be}from"./HeroSection-C0AdsAhC.js";import{P as He}from"./ProductCard-EBzkehd6.js";import{S as We}from"./Modal-BVKPDhOY.js";import{S as Me,a as Ve}from"./SortingItems-CxFKbst1.js";import{S as Je}from"./arrow-down-select-CRW-JXJz.js";import{I as Ue}from"./index-CEhI5NU0.js";import{P as Re}from"./Pagination-BL4WhoLh.js";import"./handleImgError-hYtc4tMe.js";const Te=l.div`
  width: 100%;
  height: 100%;
`,qe=l.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;  
`,Ge=l.button`
  display: flex;
  align-items: center;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  background: var(--bg-black);
  ${j(a`
    border: 1px solid var(--bg-light-grey);
    border-radius: 24px;
    transition: var(--effectDuration);
    gap: 8px;
    padding: 10px 16px;
    &:hover {
      background-color: var(--bg-light-grey);
      & p {
        color: var(--text-black);
      }
      & path {
        fill: var(--bg-black);
      }
    }
  `)};
`,Ke=l.section`
  padding: 0px 0px 24px 0px;
  background: var(--bg-black);
  ${N(a`
    padding: 0px 0px 24px 0px;
  `)}
  ${j(a`
    padding: 0px 0px 40px 0px;
  `)}
`,Qe=l.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  ${N(a`
    gap: 20px;
  `)}
  ${j(a`
    gap: 24px;
  `)}
`,Xe=l.div`
  display: flex;
  gap: 12px;
  ${N(a`
    justify-content: space-between;
    gap: 12px;
  `)};
  ${j(a`
    gap: 24px;
  `)}
`,Ye=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${N(a`
    display: flex;
    flex-wrap: wrap;
    flex-direction: unset;
    width: 100%;
    gap: 20px;
  `)}
  ${j(a`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `)}
`,Ze=l.p`
  display: none;
  ${j(a`
    display: block;
    color: var(--text-light-grey);
    font-family: Fixel;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
  `)}
`,et=a`
  width: 20px;
  height: 20px;
`,tt=l.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 72px;
  left: 0px;
  background: var(--bg-black);
  z-index: 100;
  pointer-events: auto;
  padding: 26px 20px;

  ${N(a`
    position: relative;
    top: unset;
    left: unset;
    width: 312px;
    height: 100%;
    border: 1px solid #d7d7d7;
    border-radius: 16px;
  `)};
`,nt=l.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.64px;
`,rt=a`
  & path {
    fill: var(--bg-light-grey);
  }
`,st=l.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  ${N(a`
    width: 272px;
  `)};
`,it=l.button`
  width: 40px;
  height: 40px;
  background: inherit;
  display: flex;
  align-items: center;
`,ot=l.button`
  width: 40px;
  height: 40px;
  background: inherit;
  padding: 8px;
`,at=l.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${({isOpen:r})=>r?"":"1px solid var(--bg-light-grey)"};
`,ct=l.div`
  width: 88%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    border-bottom: ${({isOpen:r})=>r?"1px solid var(--bg-light-grey)":""};
  }
`,Z=l.p`
  width: 175px;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  white-space: normal;
  cursor: pointer;
`,ee=l.p`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: default;
`,M=l.div`
  display: flex;
  align-items: center;
`,te=l.label`
  pointer-events: none;
  width: 40px;
  height: 40px;
  padding: 8px;
`,ne=l.input`
  display: none;
`,re=a`
  & path {
    fill: var(--bg-light-grey);
  }
`,se=l.button`
  width: 100%;
  background: inherit;
  padding: 6px 24px;
  border-radius: 24px;
  border: 1px solid var(--bg-light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-light-grey);
  color: var(--text-black);
  margin-top: 51px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`,dt=l.div`
  width: 100%;

  ${N(a`
    width: 272px;
  `)};
`;var ie;function T(){return T=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var c in d)({}).hasOwnProperty.call(d,c)&&(r[c]=d[c])}return r},T.apply(null,arguments)}var oe=function(s){return i.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s),ie||(ie=i.createElement("path",{fill:"#D7D7D7",d:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"})))},ae;function q(){return q=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var c in d)({}).hasOwnProperty.call(d,c)&&(r[c]=d[c])}return r},q.apply(null,arguments)}var ce=function(s){return i.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s),ae||(ae=i.createElement("path",{fill:"#D7D7D7",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41z"})))};const fe=()=>{const r=sessionStorage.getItem("savedFilterState"),s=r&&JSON.parse(r);return(s==null?void 0:s.checkedItems)||[]},lt=()=>{const r=sessionStorage.getItem("savedFilterState"),s=r&&JSON.parse(r);return(s==null?void 0:s.openCategories)||{}},de=()=>{const r=sessionStorage.getItem("savedOpenFilter");return r&&JSON.parse(r)},pt=({closeFilter:r,writeUrlFromStorage:s,setCurrentPage:d})=>{const c=ge(),F=K(),E=Q(),[x,w]=i.useState(lt()||{}),[u,O]=i.useState(fe()),[y,I]=i.useState();i.useEffect(()=>{c(ze())},[c]),i.useEffect(()=>{async function e(){const t=await De();I(t)}e()},[]);const k=(e,t)=>{e==="category"?u.some(p=>Number(p.id)===t.id)?(O(p=>p.filter(h=>Number(h.id)!==t.id)),w(p=>({...p,[t.id]:!1}))):O(p=>[...p,{id:t.id,productsId:[]}]):e==="product"&&O(p=>p.map(h=>{if(Number(h.id)===t.category_id){const A=h.productsId.includes(t.id)?h.productsId.filter(W=>W!==t.id):[...h.productsId,t.id];return{...h,productsId:A}}return h}))},S=e=>{w(t=>({...t,[e]:!t[e]}))},$=()=>{r(!1)},_=()=>{const t=F.search.split("&").filter(h=>!h.includes("categoryId")&&!h.includes("productId")).join("&"),p=F.pathname+t;E(p)},P=()=>{_(),O([]),w({}),sessionStorage.clear()},H=()=>{sessionStorage.setItem("savedFilterState",JSON.stringify({checkedItems:u,openCategories:x})),s(),d(1)};return n(tt,{children:g(dt,{children:[g(st,{children:[n(nt,{children:"Фільтр"}),n(it,{onClick:$,children:n(We,{css:rt})})]}),y&&y.map(e=>e.product_count>0&&g("div",{children:[g(at,{isOpen:x[e.id],children:[g(M,{onClick:()=>k("category",{id:e.id}),children:[n(te,{htmlFor:`checkBox${e.id}`,children:u.some(t=>Number(t.id)===e.id)?n(ce,{}):n(oe,{css:re})}),n(ne,{type:"checkbox",id:`checkBox${e.id}`,checked:u.some(t=>Number(t.id)===e.id),onChange:()=>k("category",{id:e.id})}),n(Z,{children:e.title})]}),g(M,{children:[n(ee,{children:e.product_count}),n(ot,{style:u.some(t=>Number(t.id)===e.id)?{visibility:"visible",cursor:"pointer"}:{visibility:"hidden",cursor:"default"},onClick:()=>S(e.id),disabled:!u.some(t=>Number(t.id)===e.id),children:x[e.id]&&u.some(t=>Number(t.id)===e.id)?n(Me,{}):n(Je,{})})]})]}),x[e.id]&&u.some(t=>Number(t.id)===e.id)?n(ue,{children:e.products.map(t=>{var p,h;return g(ct,{isOpen:x[e.id],children:[g(M,{onClick:()=>k("product",{id:t.product_id,category_id:t.categoryId}),children:[n(te,{htmlFor:`checkBox${t.product_id}`,children:(p=u.find(A=>Number(A.id)===t.categoryId))!=null&&p.productsId.includes(t.product_id)?n(ce,{}):n(oe,{css:re})}),n(ne,{type:"checkbox",id:`checkBox${t.product_id}`,checked:((h=u.find(A=>Number(A.id)===t.categoryId))==null?void 0:h.productsId.includes(t.product_id))||!1,onChange:()=>k("product",{id:t.product_id,category_id:t.categoryId})}),n(Z,{children:t.product_title})]}),n(M,{children:n(ee,{children:t.product_quantity})})]},`${t.product_id}`)})}):null]},e.id)),n(se,{onClick:H,children:"Показати"}),u.length>0&&n(se,{style:{marginTop:20},onClick:P,children:"Скинути фільтр"})]})})};function le(r){return je({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},child:[]}]})(r)}const pe=a`
  color: var(--bg-light-grey);
  width: 20px;
  height: 20px;
  z-index: 10;
`,ht=a`
  color: var(--bg-light-grey);
  background: var(--bg-black);
  width: 200px;
  height: 40px;
  border: 1px solid var(--bg-light-grey);
  padding: 8px 12px 8px 38px;
  border-radius: 24px;

  &::placeholder {
    color: var(--bg-light-grey);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
  }

  &:focus {
    outline: none;
  }
`,gt=a`
  background: var(--bg-black);
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px 8px 8px 8px;
  justify-content: flex-end;
`,ut=a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: 12px;
`,ft=a`
  display: flex;
`,xt=a`
  position: relative;
  display: flex;
`,mt=a`
  color: var(--bg-light-grey);
  width: 16px;
  height: 16px;
  z-index: 10;
`,vt=a`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 12px;
  top: 0;
  right: 0;

  ${j(a`
    display: none;
  `)}
`,xe=()=>{const r=sessionStorage.getItem("savedSearchItem");return r&&JSON.parse(r)},bt=({isOpenSearch:r,setSearchItem:s,hasFilteredProducts:d,setOpenFilter:c})=>{const F=K(),E=Q(),[x,w]=i.useState(!1),[u,O]=i.useState(window.innerWidth),[y,I]=i.useState(xe()||""),k=()=>{const e=F.search.split("&"),t=F.pathname+e.filter(p=>!p.includes("search")).join("&");E(t)},S=()=>{k(),I(""),s&&s(""),sessionStorage.removeItem("savedSearchItem"),w(e=>!e)};i.useEffect(()=>{d&&I("")},[d]),i.useEffect(()=>{u>=1440&&r?(w(!0),r(!0)):r&&r(x)},[x,u,r]),i.useEffect(()=>{const e=()=>{O(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const $=e=>{I(e.target.value)},_=()=>{if(y===""&&s){k(),s(""),sessionStorage.removeItem("savedSearchItem");return}},P=()=>{s&&c&&(sessionStorage.setItem("savedSearchItem",JSON.stringify(y.toLowerCase())),s(y.toLowerCase()),c(!1)),y===""&&k()};return g("div",{css:ft,children:[!x&&n("button",{css:gt,onClick:S,children:n(le,{css:pe})}),x&&g("div",{css:xt,children:[n("button",{css:ut,onClick:P,children:n(le,{css:pe})}),n("input",{type:"text",id:"search",placeholder:"Search",css:ht,value:y,autoComplete:"off",onBlur:_,onChange:$,onKeyDown:e=>{e.key==="Enter"&&P()}}),n("button",{css:vt,onClick:S,children:n(Ue,{css:mt})})]})]})};var he;function G(){return G=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var d=arguments[s];for(var c in d)({}).hasOwnProperty.call(d,c)&&(r[c]=d[c])}return r},G.apply(null,arguments)}var St=function(s){return i.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},s),he||(he=i.createElement("path",{fill:"#D7D7D7",d:"M2.5 14.167v1.666h5v-1.666zm0-10v1.666h8.333V4.167zM10.833 17.5v-1.667H17.5v-1.666h-6.667V12.5H9.167v5zm-5-10v1.667H2.5v1.666h3.333V12.5H7.5v-5zM17.5 10.833V9.167H9.167v1.666zm-5-3.333h1.667V5.833H17.5V4.167h-3.333V2.5H12.5z"})))};const wt=a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
  min-height: 30vh;
  text-align: center;
`,yt=a`
  color: var(--text-light-grey);
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  font-family: Fixel;
  ${N(a`
    font-size: 30px;
  `)}
  ${j(a`
    font-size: 45px;
  `)}
`,Ct=()=>n("div",{css:wt,children:n("p",{css:yt,children:"На жаль, за вашим запитом товари не знайдені. Будь ласка, уточніть пошук!"})});function jt(){const r=K(),s=Q(),d=ge(),[c,F]=Ne(),E=i.useMemo(()=>Object.fromEntries([...c]),[c]),{sortOrder:x="ASC",sortField:w="price",page:u,search:O}=E,y=()=>fe().map(o=>({categoryId:o.id.toString(),productId:o.productsId.join(",")})),[I,k]=i.useState([]),[S,$]=i.useState(!1),[_,P]=i.useState(null),[H,e]=i.useState(Number(u||1)),[t,p]=i.useState(!1),[h,A]=i.useState(xe()||""),[W,me]=i.useState(window.innerWidth),[V,ve]=i.useState(0),[X,be]=i.useState(!1),J=12,U=V&&Math.ceil(V/J),Se=["Від найменшої ціни до найбільшої","Від найбільшої ціни до найменшої","За популярністю"],Y=i.useRef(!0),we=()=>{const o=y().map(v=>v.categoryId),m=y().flatMap(v=>v.productId.split(",")),C={...E,categoryId:o,productId:m};L(C)};i.useEffect(()=>{(async()=>{try{const m=[],C={},v=[];c.forEach((z,f)=>{f.includes("categoryId")?(sessionStorage.setItem("savedOpenFilter",JSON.stringify(!0)),v.push({id:z,productsId:[]})):f.includes("productId")&&m.push(Number(z))});const b=m.length>0?await Ae(m):[];b==null||b.forEach(({id:z,productsId:f})=>{f.length>0&&(C[z]=!0)}),sessionStorage.setItem("savedFilterState",JSON.stringify({openCategories:C,checkedItems:b.length>0?b:v}))}catch(m){console.error("Ошибка при записи в sessionStorage:",m)}})()},[c]),i.useEffect(()=>{de()&&$(de())},[]),i.useEffect(()=>{sessionStorage.setItem("savedOpenFilter",JSON.stringify(S))},[S]),i.useEffect(()=>{if(Y.current){switch(`sortOrder=${x}&sortField=${w}`){case"sortOrder=ASC&sortField=price":P("Від найменшої ціни до найбільшої");break;case"sortOrder=DESC&sortField=price":P("Від найбільшої ціни до найменшої");break;case"sortOrder=DESC&sortField=popularity":P("За популярністю");break}Y.current=!1}},[x,w]);const L=i.useCallback(o=>{F(m=>{const C=new URLSearchParams(m);return Object.keys(o).forEach(v=>C.delete(v)),Object.entries(o).forEach(([v,b])=>{Array.isArray(b)?b.forEach(z=>C.append(v,z)):b!==""&&C.set(v,b)}),C})},[F]);i.useEffect(()=>{switch(_){case"Від найменшої ціни до найбільшої":L({sortOrder:"ASC",sortField:"price"});break;case"Від найбільшої ціни до найменшої":L({sortOrder:"DESC",sortField:"price"});break;case"За популярністю":L({sortOrder:"DESC",sortField:"popularity"});break}},[_,X,L]),i.useEffect(()=>{const o=c.getAll("categoryId"),m=c.getAll("productId"),C={...E,sortOrder:x,sortField:w,categoryId:o.length>0?o:[],productId:m.length>0?m:[],page:H.toString(),limit:J.toString(),search:h.trim()||O},v=Object.entries(C).reduce((f,[B,D])=>{if(Array.isArray(D)){const Ee=D.filter($e=>$e!=="");f[B]=Ee}else D!==void 0&&D!==""&&(f[B]=D);return f},{});L(v);const b=new URLSearchParams;Object.entries(v).forEach(([f,B])=>{Array.isArray(B)?B.forEach(D=>{D!==""&&b.append(f,D)}):B!==""&&b.append(f,B)});async function z(){try{d(R(!0));const f=await Le(b.toString());d(R(!1)),ve(Number(f.total_products)),k(f.productData)}catch(f){console.error("Failed to fetch products:",f),d(R(!1))}}z()},[H,h,x,w,X,E,L,c,O]),i.useEffect(()=>{const o=()=>{me(window.innerWidth)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),i.useEffect(()=>{var o,m;S&&W>=360&&W<768?(document.body.classList.add("no-scroll"),(o=document.querySelector("#topBtn"))==null||o.classList.add("btn-hide")):((m=document.querySelector("#topBtn"))==null||m.classList.remove("btn-hide"),document.body.classList.remove("no-scroll"))},[S,W]);const ye=o=>e(o),Ce=()=>e(1),Ie=()=>e(U),ke=()=>e(o=>o===U?o:o+1),Oe=()=>e(o=>o===1?o:o-1),Pe=()=>{$(o=>!o)},Fe=o=>{s(`/product/${o}`,{state:{from:r.pathname}})};return g(ue,{children:[n(Be,{viewType:"other",children:"Магазин"}),g(Ke,{children:[n("div",{css:_e,children:g(Qe,{children:[S&&n(pt,{closeFilter:$,writeUrlFromStorage:we,setCurrentPage:e}),g(Te,{children:[g(qe,{children:[n(bt,{isOpenSearch:p,setSearchItem:A,setOpenFilter:$}),g(Xe,{children:[g(Ge,{onClick:Pe,children:[n(St,{css:et}),n(Ze,{children:"Фільтр"})]}),n(Ve,{options:Se,width:"260px",isOpenSearch:t,isOpenFilter:S,setSelectedOption:P,selectedOption:_})]})]}),n(Ye,{children:I.length===0&&h!==""?n(Ct,{}):I.map(o=>n(He,{show:S,handleOnClickCard:()=>Fe(o.id),item:o,setIsAdvertDeleted:be},o.id))})]})]})}),I&&I.length>0&&n(Re,{totalPage:V,countItemPages:J,paginate:ye,nextPage:ke,prevPage:Oe,firstPageBtn:Ce,lastPageBtn:Ie,currentPage:H,lastPage:U})]})]})}export{jt as default};
//# sourceMappingURL=StorePage-BVv-yltM.js.map
