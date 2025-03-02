import{n as l,o as j,c as a,a as N,r as s,u as ge,b as K,d as Q,f as ze,j as t,e as u,F as ue,g as De,G as je,h as Ne,i as _e,k as Ae,l as R,m as Le}from"./index-BYwag9Lo.js";import{H as Be}from"./HeroSection-DncZLn4g.js";import{P as He}from"./ProductCard-CJZ9LeV5.js";import{S as We}from"./Modal-CmPI6vdA.js";import{S as Me,a as Ve}from"./SortingItems-DzHrKcf2.js";import{S as Je}from"./arrow-down-select-BalVnK-g.js";import{I as Ue}from"./index-jDB5c9JJ.js";import{P as Re}from"./Pagination-BAeZGXye.js";import"./handleImgError-Dq8s1xJF.js";const Te=l.div`
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
  height: 100dvh;  
  display: flex;
  flex-direction: column;
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
    min-width: 312px;
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
  border-bottom: ${({isOpen:n})=>n?"":"1px solid var(--bg-light-grey)"};
`,ct=l.div`
  width: 88%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    border-bottom: ${({isOpen:n})=>n?"1px solid var(--bg-light-grey)":""};
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
  flex-grow: 1;
  overflow-y: auto;
  min-height: 0;
  padding-bottom: 80px;
  ${N(a`
    width: 272px;
    padding-bottom: unset;
  `)};
`;var ie;function T(){return T=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var c in d)({}).hasOwnProperty.call(d,c)&&(n[c]=d[c])}return n},T.apply(null,arguments)}var oe=function(r){return s.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},r),ie||(ie=s.createElement("path",{fill:"#D7D7D7",d:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"})))},ae;function q(){return q=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var c in d)({}).hasOwnProperty.call(d,c)&&(n[c]=d[c])}return n},q.apply(null,arguments)}var ce=function(r){return s.createElement("svg",q({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},r),ae||(ae=s.createElement("path",{fill:"#D7D7D7",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41z"})))};const fe=()=>{const n=sessionStorage.getItem("savedFilterState"),r=n&&JSON.parse(n);return(r==null?void 0:r.checkedItems)||[]},lt=()=>{const n=sessionStorage.getItem("savedFilterState"),r=n&&JSON.parse(n);return(r==null?void 0:r.openCategories)||{}},de=()=>{const n=sessionStorage.getItem("savedOpenFilter");return n&&JSON.parse(n)},pt=({closeFilter:n,writeUrlFromStorage:r,setCurrentPage:d})=>{const c=ge(),F=K(),O=Q(),[w,S]=s.useState(lt()||{}),[g,I]=s.useState(fe()),[_,y]=s.useState();s.useEffect(()=>{c(ze())},[c]),s.useEffect(()=>{async function i(){const e=await De();y(e)}i()},[]);const k=(i,e)=>{i==="category"?g.some(h=>Number(h.id)===e.id)?(I(h=>h.filter(p=>Number(p.id)!==e.id)),S(h=>({...h,[e.id]:!1}))):I(h=>[...h,{id:e.id,productsId:[]}]):i==="product"&&I(h=>h.map(p=>{if(Number(p.id)===e.category_id){const L=p.productsId.includes(e.id)?p.productsId.filter(W=>W!==e.id):[...p.productsId,e.id];return{...p,productsId:L}}return p}))},m=i=>{S(e=>({...e,[i]:!e[i]}))},P=()=>{n(!1)},A=()=>{const e=F.search.split("&").filter(p=>!p.includes("categoryId")&&!p.includes("productId")).join("&"),h=F.pathname+e;O(h)},E=()=>{A(),I([]),S({}),sessionStorage.clear()},$=()=>{sessionStorage.setItem("savedFilterState",JSON.stringify({checkedItems:g,openCategories:w})),r(),d(1)};return t(tt,{children:u(dt,{children:[u(st,{children:[t(nt,{children:"Фільтр"}),t(it,{onClick:P,children:t(We,{css:rt})})]}),_&&_.map(i=>i.product_count>0&&u("div",{children:[u(at,{isOpen:w[i.id],children:[u(M,{onClick:()=>k("category",{id:i.id}),children:[t(te,{htmlFor:`checkBox${i.id}`,children:g.some(e=>Number(e.id)===i.id)?t(ce,{}):t(oe,{css:re})}),t(ne,{type:"checkbox",id:`checkBox${i.id}`,checked:g.some(e=>Number(e.id)===i.id),onChange:()=>k("category",{id:i.id})}),t(Z,{children:i.title})]}),u(M,{children:[t(ee,{children:i.product_count}),t(ot,{style:g.some(e=>Number(e.id)===i.id)?{visibility:"visible",cursor:"pointer"}:{visibility:"hidden",cursor:"default"},onClick:()=>m(i.id),disabled:!g.some(e=>Number(e.id)===i.id),children:w[i.id]&&g.some(e=>Number(e.id)===i.id)?t(Me,{}):t(Je,{})})]})]}),w[i.id]&&g.some(e=>Number(e.id)===i.id)?t(ue,{children:i.products.map(e=>{var h,p;return u(ct,{isOpen:w[i.id],children:[u(M,{onClick:()=>k("product",{id:e.product_id,category_id:e.categoryId}),children:[t(te,{htmlFor:`checkBox${e.product_id}`,children:(h=g.find(L=>Number(L.id)===e.categoryId))!=null&&h.productsId.includes(e.product_id)?t(ce,{}):t(oe,{css:re})}),t(ne,{type:"checkbox",id:`checkBox${e.product_id}`,checked:((p=g.find(L=>Number(L.id)===e.categoryId))==null?void 0:p.productsId.includes(e.product_id))||!1,onChange:()=>k("product",{id:e.product_id,category_id:e.categoryId})}),t(Z,{children:e.product_title})]}),t(M,{children:t(ee,{children:e.product_quantity})})]},`${e.product_id}`)})}):null]},i.id)),t(se,{onClick:$,children:"Показати"}),g.length>0&&t(se,{style:{marginTop:20},onClick:E,children:"Скинути фільтр"})]})})};function le(n){return je({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},child:[]}]})(n)}const pe=a`
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
`,xe=()=>{const n=sessionStorage.getItem("savedSearchItem");return n&&JSON.parse(n)},bt=({isOpenSearch:n,setSearchItem:r,hasFilteredProducts:d,setOpenFilter:c,isOpenFilter:F})=>{const O=K(),w=Q(),[S,g]=s.useState(!1),[I,_]=s.useState(window.innerWidth),[y,k]=s.useState(xe()||""),m=()=>{const e=O.search.split("&"),h=O.pathname+e.filter(p=>!p.includes("search")).join("&");w(h)},P=()=>{m(),k(""),r&&r(""),sessionStorage.removeItem("savedSearchItem"),g(e=>!e)};s.useEffect(()=>{d&&k("")},[d]),s.useEffect(()=>{F&&g(!1)},[F]),s.useEffect(()=>{I>=1440&&n?(g(!0),n(!0)):n&&n(S)},[S,I,n]),s.useEffect(()=>{const e=()=>{_(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}},[]);const A=e=>{k(e.target.value)},E=()=>{if(y===""&&r){m(),r(""),sessionStorage.removeItem("savedSearchItem");return}},$=()=>{r&&c&&(sessionStorage.setItem("savedSearchItem",JSON.stringify(y.toLowerCase())),r(y.toLowerCase()),c(!1)),y===""&&m()};return u("div",{css:ft,children:[!S&&t("button",{css:gt,onClick:P,children:t(le,{css:pe})}),S&&u("div",{css:xt,children:[t("button",{css:ut,onClick:$,children:t(le,{css:pe})}),t("input",{type:"text",id:"search",placeholder:"Search",css:ht,value:y,autoComplete:"off",onBlur:E,onChange:A,onKeyDown:e=>{e.key==="Enter"&&$()}}),t("button",{css:vt,onClick:P,children:t(Ue,{css:mt})})]})]})};var he;function G(){return G=Object.assign?Object.assign.bind():function(n){for(var r=1;r<arguments.length;r++){var d=arguments[r];for(var c in d)({}).hasOwnProperty.call(d,c)&&(n[c]=d[c])}return n},G.apply(null,arguments)}var St=function(r){return s.createElement("svg",G({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},r),he||(he=s.createElement("path",{fill:"#D7D7D7",d:"M2.5 14.167v1.666h5v-1.666zm0-10v1.666h8.333V4.167zM10.833 17.5v-1.667H17.5v-1.666h-6.667V12.5H9.167v5zm-5-10v1.667H2.5v1.666h3.333V12.5H7.5v-5zM17.5 10.833V9.167H9.167v1.666zm-5-3.333h1.667V5.833H17.5V4.167h-3.333V2.5H12.5z"})))};const wt=a`
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
`,Ct=()=>t("div",{css:wt,children:t("p",{css:yt,children:"На жаль, за вашим запитом товари не знайдені. Будь ласка, уточніть пошук!"})});function jt(){const n=K(),r=Q(),d=ge(),[c,F]=Ne(),O=s.useMemo(()=>Object.fromEntries([...c]),[c]),{sortOrder:w="ASC",sortField:S="price",page:g,search:I}=O,_=()=>fe().map(o=>({categoryId:o.id.toString(),productId:o.productsId.join(",")})),[y,k]=s.useState([]),[m,P]=s.useState(!1),[A,E]=s.useState(null),[$,i]=s.useState(Number(g||1)),[e,h]=s.useState(!1),[p,L]=s.useState(xe()||""),[W,me]=s.useState(window.innerWidth),[V,ve]=s.useState(0),[X,be]=s.useState(!1),J=12,U=V&&Math.ceil(V/J),Se=["Від найменшої ціни до найбільшої","Від найбільшої ціни до найменшої","За популярністю"],Y=s.useRef(!0),we=()=>{const o=_().map(v=>v.categoryId),x=_().flatMap(v=>v.productId.split(",")),C={...O,categoryId:o,productId:x};B(C)};s.useEffect(()=>{(async()=>{try{const x=[],C={},v=[];c.forEach((z,f)=>{f.includes("categoryId")?(sessionStorage.setItem("savedOpenFilter",JSON.stringify(!0)),v.push({id:z,productsId:[]})):f.includes("productId")&&x.push(Number(z))});const b=x.length>0?await Ae(x):[];b==null||b.forEach(({id:z,productsId:f})=>{f.length>0&&(C[z]=!0)}),sessionStorage.setItem("savedFilterState",JSON.stringify({openCategories:C,checkedItems:b.length>0?b:v}))}catch(x){console.error("Ошибка при записи в sessionStorage:",x)}})()},[c]),s.useEffect(()=>{de()&&P(de())},[]),s.useEffect(()=>{sessionStorage.setItem("savedOpenFilter",JSON.stringify(m))},[m]),s.useEffect(()=>{if(Y.current){switch(`sortOrder=${w}&sortField=${S}`){case"sortOrder=ASC&sortField=price":E("Від найменшої ціни до найбільшої");break;case"sortOrder=DESC&sortField=price":E("Від найбільшої ціни до найменшої");break;case"sortOrder=DESC&sortField=popularity":E("За популярністю");break}Y.current=!1}},[w,S]);const B=s.useCallback(o=>{F(x=>{const C=new URLSearchParams(x);return Object.keys(o).forEach(v=>C.delete(v)),Object.entries(o).forEach(([v,b])=>{Array.isArray(b)?b.forEach(z=>C.append(v,z)):b!==""&&C.set(v,b)}),C})},[F]);s.useEffect(()=>{switch(A){case"Від найменшої ціни до найбільшої":B({sortOrder:"ASC",sortField:"price"});break;case"Від найбільшої ціни до найменшої":B({sortOrder:"DESC",sortField:"price"});break;case"За популярністю":B({sortOrder:"DESC",sortField:"popularity"});break}},[A,X,B]),s.useEffect(()=>{const o=c.getAll("categoryId"),x=c.getAll("productId"),C={...O,sortOrder:w,sortField:S,categoryId:o.length>0?o:[],productId:x.length>0?x:[],page:$.toString(),limit:J.toString(),search:p.trim()||I},v=Object.entries(C).reduce((f,[H,D])=>{if(Array.isArray(D)){const Ee=D.filter($e=>$e!=="");f[H]=Ee}else D!==void 0&&D!==""&&(f[H]=D);return f},{});B(v);const b=new URLSearchParams;Object.entries(v).forEach(([f,H])=>{Array.isArray(H)?H.forEach(D=>{D!==""&&b.append(f,D)}):H!==""&&b.append(f,H)});async function z(){try{d(R(!0));const f=await Le(b.toString());d(R(!1)),ve(Number(f.total_products)),k(f.productData)}catch(f){console.error("Failed to fetch products:",f),d(R(!1))}}z()},[$,p,w,S,X,O,B,c,I]),s.useEffect(()=>{const o=()=>{me(window.innerWidth)};return window.addEventListener("resize",o),()=>{window.removeEventListener("resize",o)}},[]),s.useEffect(()=>{var o,x;m&&W>=360&&W<768?(document.body.classList.add("no-scroll"),(o=document.querySelector("#topBtn"))==null||o.classList.add("btn-hide")):((x=document.querySelector("#topBtn"))==null||x.classList.remove("btn-hide"),document.body.classList.remove("no-scroll"))},[m,W]);const ye=o=>i(o),Ce=()=>i(1),Ie=()=>i(U),ke=()=>i(o=>o===U?o:o+1),Oe=()=>i(o=>o===1?o:o-1),Pe=()=>{P(o=>!o)},Fe=o=>{r(`/product/${o}`,{state:{from:n.pathname}})};return u(ue,{children:[t(Be,{viewType:"other",children:"Магазин"}),u(Ke,{children:[t("div",{css:_e,children:u(Qe,{children:[m&&t(pt,{closeFilter:P,writeUrlFromStorage:we,setCurrentPage:i}),u(Te,{children:[u(qe,{children:[t(bt,{isOpenSearch:h,setSearchItem:L,setOpenFilter:P,isOpenFilter:m}),u(Xe,{children:[u(Ge,{onClick:Pe,children:[t(St,{css:et}),t(Ze,{children:"Фільтр"})]}),t(Ve,{options:Se,width:"260px",isOpenSearch:e,isOpenFilter:m,setSelectedOption:E,selectedOption:A})]})]}),t(Ye,{children:y.length===0&&p!==""?t(Ct,{}):y.map(o=>t(He,{show:m,handleOnClickCard:()=>Fe(o.id),item:o,setIsAdvertDeleted:be},o.id))})]})]})}),y&&y.length>0&&t(Re,{totalPage:V,countItemPages:J,paginate:ye,nextPage:ke,prevPage:Oe,firstPageBtn:Ce,lastPageBtn:Ie,currentPage:$,lastPage:U})]})]})}export{jt as default};
//# sourceMappingURL=StorePage-5FECQXVb.js.map
