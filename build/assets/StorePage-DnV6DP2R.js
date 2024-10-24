import{n as p,o as E,c as a,a as F,r as n,u as Se,f as Ce,j as t,b as u,F as oe,g as ke,G as Ie,d as Oe,e as Pe,h as Ee,i as Fe}from"./index-C641oKLp.js";import{H as $e}from"./HeroSection-C1HwKWAl.js";import{P as je}from"./ProductCard-C4G9q0qv.js";import{S as De}from"./Modal-BUhM34K4.js";import{S as ze,a as _e}from"./SortingItems-BoznZk6F.js";import{S as Ae}from"./arrow-down-select-Bh-MySUy.js";import{I as Be}from"./index-C5iM7ZWM.js";import{P as Le}from"./Pagination-DevYrhYT.js";import"./handleImgError-BVlSbmPZ.js";const He=p.div`
  width: 100%;
  height: 100%;
`,We=p.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;  
`,Me=p.button`
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
  ${E(a`
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
`,Ve=p.section`
  padding: 0px 0px 24px 0px;
  background: var(--bg-black);
  ${F(a`
    padding: 0px 0px 24px 0px;
  `)}
  ${E(a`
    padding: 0px 0px 40px 0px;
  `)}
`,Re=p.div`
  display: flex;
  margin-left: auto;
  margin-right: auto;
  ${F(a`
    gap: 20px;
  `)}
  ${E(a`
    gap: 24px;
  `)}
`,Ne=p.div`
  display: flex;
  gap: 12px;
  ${F(a`
    justify-content: space-between;
    gap: 12px;
  `)};
  ${E(a`
    gap: 24px;
  `)}
`,Te=p.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${F(a`
    display: flex;
    flex-wrap: wrap;
    flex-direction: unset;
    width: 100%;
    gap: 20px;
  `)}
  ${E(a`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `)}
`,qe=p.p`
  display: none;
  ${E(a`
    display: block;
    color: var(--text-light-grey);
    font-family: Fixel;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
  `)}
`,Ue=a`
  width: 20px;
  height: 20px;
`,Ge=p.div`
  position: fixed;
  width: 100%;
  height: 100vh;
  top: 72px;
  left: 0px;
  background: var(--bg-black);
  z-index: 100;
  pointer-events: auto;
  padding: 26px 20px;

  ${F(a`
    position: relative;
    top: unset;
    left: unset;
    width: 312px;
    height: 100%;
    border: 1px solid #d7d7d7;
    border-radius: 16px;
  `)};
`,Je=p.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.64px;
`,Ke=a`
  & path {
    fill: var(--bg-light-grey);
  }
`,Qe=p.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
  ${F(a`
    width: 272px;
  `)};
`,Xe=p.button`
  width: 40px;
  height: 40px;
  background: inherit;
  display: flex;
  align-items: center;
`,Ye=p.button`
  width: 40px;
  height: 40px;
  background: inherit;
  padding: 8px;
`,Ze=p.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${({isOpen:o})=>o?"":"1px solid var(--bg-light-grey)"};
`,et=p.div`
  width: 88%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  &:last-child {
    border-bottom: ${({isOpen:o})=>o?"1px solid var(--bg-light-grey)":""};
  }
`,G=p.p`
  width: 175px;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  white-space: normal;
`,J=p.p`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
`,A=p.div`
  display: flex;
  align-items: center;
`,K=p.label`
  width: 40px;
  height: 40px;
  padding: 8px;
`,Q=p.input`
  display: none;
`,X=a`
  & path {
    fill: var(--bg-light-grey);
  }
`,tt=p.button`
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
`,nt=p.div`
  width: 100%;

  ${F(a`
    width: 272px;
  `)};
`;var Y;function R(){return R=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var h=arguments[s];for(var c in h)({}).hasOwnProperty.call(h,c)&&(o[c]=h[c])}return o},R.apply(null,arguments)}var Z=function(s){return n.createElement("svg",R({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s),Y||(Y=n.createElement("path",{fill:"#D7D7D7",d:"M18 19H6c-.55 0-1-.45-1-1V6c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v12c0 .55-.45 1-1 1m1-16H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2"})))},ee;function N(){return N=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var h=arguments[s];for(var c in h)({}).hasOwnProperty.call(h,c)&&(o[c]=h[c])}return o},N.apply(null,arguments)}var te=function(s){return n.createElement("svg",N({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s),ee||(ee=n.createElement("path",{fill:"#D7D7D7",d:"M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2m-8.29 13.29a.996.996 0 0 1-1.41 0L5.71 12.7a.996.996 0 1 1 1.41-1.41L10 14.17l6.88-6.88a.996.996 0 1 1 1.41 1.41z"})))};const se=()=>{const o=localStorage.getItem("filter");return o&&JSON.parse(o)||[]},it=({closeFilter:o,setFilteredItemsId:s})=>{const h=Se(),[c,m]=n.useState({}),[d,b]=n.useState(se());console.log("obopenCategoriesject :>> ",c),console.log("checkedItems :>> ",d);const[x,I]=n.useState();n.useEffect(()=>{h(Ce())},[h]),n.useEffect(()=>{localStorage.setItem("filter",JSON.stringify(d))},[d]),n.useEffect(()=>{async function i(){const e=await ke();I(e)}i()},[]);const v=(i,e)=>{i==="category"?d.some(g=>g.id===e.id)?(b(g=>g.filter(l=>l.id!==e.id)),m(g=>({...g,[e.id]:!1}))):b(g=>[...g,{id:e.id,productsId:[]}]):i==="product"&&b(g=>g.map(l=>{if(l.id===e.category_id){const S=l.productsId.includes(e.id)?l.productsId.filter(B=>B!==e.id):[...l.productsId,e.id];return{...l,productsId:S}}return l}))},$=i=>{m(e=>({...e,[i]:!e[i]}))},w=()=>{o(!1)},y=()=>{const i=d.map(e=>({categoryId:e.id.toString(),productId:e.productsId.join(",")}));s(i)};return t(Ge,{children:u(nt,{children:[u(Qe,{children:[t(Je,{children:"Фільтр"}),t(Xe,{onClick:w,children:t(De,{css:Ke})})]}),x&&x.map(i=>i.product_count>0&&u("div",{children:[u(Ze,{isOpen:c[i.id],children:[u(A,{children:[t(K,{htmlFor:`checkBox${i.id}`,children:d.some(e=>e.id===i.id)?t(te,{}):t(Z,{css:X})}),t(Q,{type:"checkbox",id:`checkBox${i.id}`,checked:d.some(e=>e.id===i.id),onChange:()=>v("category",{id:i.id})}),t(G,{children:i.title})]}),u(A,{children:[t(J,{children:i.product_count}),t(Ye,{onClick:()=>$(i.id),disabled:!d.some(e=>e.id===i.id),children:c[i.id]&&d.some(e=>e.id===i.id)?t(ze,{}):t(Ae,{})})]})]}),c[i.id]&&d.some(e=>e.id===i.id)?t(oe,{children:i.products.map(e=>{var g,l;return u(et,{isOpen:c[i.id],children:[u(A,{children:[t(K,{htmlFor:`checkBox${e.product_id}`,children:(g=d.find(S=>S.id===e.categoryId))!=null&&g.productsId.includes(e.product_id)?t(te,{}):t(Z,{css:X})}),t(Q,{type:"checkbox",id:`checkBox${e.product_id}`,checked:((l=d.find(S=>S.id===e.categoryId))==null?void 0:l.productsId.includes(e.product_id))||!1,onChange:()=>v("product",{id:e.product_id,category_id:e.categoryId})}),t(G,{children:e.product_title})]}),t(A,{children:t(J,{children:e.product_quantity})})]},`${e.product_id}`)})}):null]},i.id)),t(tt,{onClick:y,children:"Показати"})]})})};function ne(o){return Ie({tag:"svg",attr:{fill:"none",viewBox:"0 0 24 24",strokeWidth:"2",stroke:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{strokeLinecap:"round",strokeLinejoin:"round",d:"M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"},child:[]}]})(o)}const ie=a`
  color: var(--bg-light-grey);
  width: 20px;
  height: 20px;
  z-index: 10;
`,rt=a`
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
`,ot=a`
  background: var(--bg-black);
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  padding: 8px 8px 8px 8px;
  justify-content: flex-end;
`,st=a`
  position: absolute;
  display: flex;
  align-items: center;
  top: 10px;
  left: 12px;
`,at=a`
  display: flex;
`,ct=a`
  position: relative;
  display: flex;
`,dt=a`
  color: var(--bg-light-grey);
  width: 16px;
  height: 16px;
  z-index: 10;
`,lt=a`
  position: absolute;
  display: flex;
  align-items: center;
  padding: 12px;
  top: 0;
  right: 0;

  ${E(a`
    display: none;
  `)}
`,pt=({isOpenSearch:o,setSearchItem:s,setFindProduct:h,hasFilteredProducts:c,setOpenFilter:m})=>{const[d,b]=n.useState(!1),[x,I]=n.useState(window.innerWidth),[v,$]=n.useState(""),w=()=>{b(l=>!l)};n.useEffect(()=>{c&&$("")},[c]),n.useEffect(()=>{x>=1440&&o?(b(!0),o(!0)):o&&o(d)},[d,x,o]),n.useEffect(()=>{const l=()=>{I(window.innerWidth)};return window.addEventListener("resize",l),()=>{window.removeEventListener("resize",l)}},[]);const y=l=>{$(l.target.value)},i=()=>{if(v===""&&h&&s){h([]),s("");return}},e=()=>{s&&m&&(s(v.toLowerCase()),m(!1))};return u("div",{css:at,children:[!d&&t("button",{css:ot,onClick:w,children:t(ne,{css:ie})}),d&&u("div",{css:ct,children:[t("button",{css:st,onClick:e,children:t(ne,{css:ie})}),t("input",{type:"text",id:"search",placeholder:"Search",css:rt,value:v,autoComplete:"off",onBlur:i,onChange:y,onKeyDown:l=>{l.key==="Enter"&&e()}}),t("button",{css:lt,onClick:w,children:t(Be,{css:dt})})]})]})};var re;function T(){return T=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var h=arguments[s];for(var c in h)({}).hasOwnProperty.call(h,c)&&(o[c]=h[c])}return o},T.apply(null,arguments)}var ht=function(s){return n.createElement("svg",T({xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20"},s),re||(re=n.createElement("path",{fill:"#D7D7D7",d:"M2.5 14.167v1.666h5v-1.666zm0-10v1.666h8.333V4.167zM10.833 17.5v-1.667H17.5v-1.666h-6.667V12.5H9.167v5zm-5-10v1.667H2.5v1.666h3.333V12.5H7.5v-5zM17.5 10.833V9.167H9.167v1.666zm-5-3.333h1.667V5.833H17.5V4.167h-3.333V2.5H12.5z"})))};function St(){const o=Oe(),[s,h]=Pe(),c=n.useMemo(()=>Object.fromEntries([...s]),[s]),{sortOrder:m="ASC",sortField:d="price",page:b}=c,[x,I]=n.useState(!1),[v,$]=n.useState(!1),[w,y]=n.useState(null),[i,e]=n.useState(Number(b||1)),[g,l]=n.useState(window.innerWidth),[S,B]=n.useState(""),[_,ae]=n.useState([]),ce=se().map(r=>({categoryId:r.id.toString(),productId:r.productsId.join(",")})),[L,de]=n.useState(ce),[H,le]=n.useState(0),[q,pe]=n.useState(!1),W=12,M=H&&Math.ceil(H/W),he=["Від найменшої ціни до найбільшої","Від найбільшої ціни до найменшої","За популярністю"],U=n.useRef(!0);n.useEffect(()=>{if(U.current){switch(`sortOrder=${m}&sortField=${d}`){case"sortOrder=ASC&sortField=price":y("Від найменшої ціни до найбільшої");break;case"sortOrder=DESC&sortField=price":y("Від найбільшої ціни до найменшої");break;case"sortOrder=DESC&sortField=popularity":y("За популярністю");break}U.current=!1}},[m,d]);const j=n.useCallback(r=>{h(D=>{const z=new URLSearchParams(D);return Object.keys(r).forEach(O=>z.delete(O)),Object.entries(r).forEach(([O,C])=>{Array.isArray(C)?C.forEach(V=>z.append(O,V)):C!==""&&z.set(O,C)}),z})},[h]);n.useEffect(()=>{switch(w){case"Від найменшої ціни до найбільшої":j({sortOrder:"ASC",sortField:"price"});break;case"Від найбільшої ціни до найменшої":j({sortOrder:"DESC",sortField:"price"});break;case"За популярністю":j({sortOrder:"DESC",sortField:"popularity"});break}},[w,q,j]),n.useEffect(()=>{const r=L.map(f=>f.categoryId),D=L.flatMap(f=>f.productId.split(",")),z={...c,sortOrder:m,sortField:d,categoryId:r,productId:D,page:i.toString(),limit:W.toString(),search:S.trim()},O=Object.entries(z).reduce((f,[P,k])=>{if(Array.isArray(k)){const we=k.filter(ye=>ye!=="");f[P]=we}else k!==void 0&&k!==""&&(f[P]=k);return f},{});j(O);const C=new URLSearchParams;Object.entries(O).forEach(([f,P])=>{Array.isArray(P)?P.forEach(k=>{k!==""&&C.append(f,k)}):P!==""&&C.append(f,P)});async function V(){try{const f=await Fe(C.toString());le(Number(f.total_products)),ae(f.productData)}catch(f){console.error("Failed to fetch products:",f)}}V()},[L,i,S,m,d,q,c,j]),n.useEffect(()=>{const r=()=>{l(window.innerWidth)};return window.addEventListener("resize",r),()=>{window.removeEventListener("resize",r)}},[]),n.useEffect(()=>{var r,D;x&&g>=360&&g<768?(document.body.classList.add("no-scroll"),(r=document.querySelector("#topBtn"))==null||r.classList.add("btn-hide")):((D=document.querySelector("#topBtn"))==null||D.classList.remove("btn-hide"),document.body.classList.remove("no-scroll"))},[x,g]);const ge=r=>e(r),ue=()=>e(1),fe=()=>e(M),xe=()=>e(r=>r===M?r:r+1),me=()=>e(r=>r===1?r:r-1),be=()=>{I(r=>!r)},ve=r=>{o(`product/${r}`)};return u(oe,{children:[t($e,{viewType:"other",children:"Магазин"}),u(Ve,{children:[t("div",{css:Ee,children:u(Re,{children:[x&&t(it,{closeFilter:I,setFilteredItemsId:de}),u(He,{children:[u(We,{children:[t(pt,{isOpenSearch:$,setSearchItem:B,setOpenFilter:I}),u(Ne,{children:[u(Me,{onClick:be,children:[t(ht,{css:Ue}),t(qe,{children:"Фільтр"})]}),t(_e,{options:he,width:"260px",isOpenSearch:v,isOpenFilter:x,setSelectedOption:y,selectedOption:w})]})]}),t(Te,{children:_&&_.map(r=>t(je,{show:x,handleOnClickCard:()=>ve(r.id),item:r,setIsAdvertDeleted:pe},r.id))})]})]})}),_&&_.length>0&&t(Le,{totalPage:H,countItemPages:W,paginate:ge,nextPage:xe,prevPage:me,firstPageBtn:ue,lastPageBtn:fe,currentPage:i,lastPage:M})]})]})}export{St as default};
//# sourceMappingURL=StorePage-DnV6DP2R.js.map
