import{c as d,b as x,j as t,d as V,r as o,a5 as q,a6 as J,D as $,t as K,a7 as Q,N as X,e as Y,h as Z,a8 as tt,a9 as et}from"./index-C641oKLp.js";import{f as st,S as rt}from"./StatusWarningModal-wfZ0LATZ.js";import{M as F}from"./Modal-BUhM34K4.js";import{a as B,u as at}from"./SortingItems-BoznZk6F.js";import{n as nt}from"./index.browser-DP16PUbO.js";import{P as ot}from"./Pagination-DevYrhYT.js";import"./arrow-down-select-Bh-MySUy.js";const it=d`
  width: 100%;
  height: 100%;

  & th,
  td {
    text-align: left;
    transition: transform 0.3s ease;
  }
  & th:nth-of-type(9),
  & th:last-child {
    text-align: center;
  }

  & td:nth-of-type(9) {
    text-align: center;
    height: 24px;
    cursor: pointer;
  }
  & td:nth-of-type(9):hover {
    transform: scale(1.4);
  }
  & td:last-child {
    display: flex;
    justify-content: center;
    height: 24px;
    align-items: center;
    cursor: pointer;
  }
  & td:last-child:hover {
    transform: scale(1.4);
  }
  & td:nth-of-type(7),
  & td:nth-of-type(8) {
    overflow: visible;
    cursor: pointer;
  }
`,ct=d`
  width: 1284px;
  height: 30px;
  display: block;
`,dt=d`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;
  display: block;
`,r=d`
  width: 127px;
  height: 24px;
  overflow: hidden;
  color: var(--White, #d7d7d7);
  font-variant-numeric: stacked-fractions ordinal;
  font-feature-settings: "case" on, "rvrn" on, "hist" on;
  text-overflow: ellipsis;
  font-family: Arial;
  font-size: var(--Typography-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;
`,lt=d`
  display: block;
  margin-top: 10px;
`;d``;const ht=d`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`,pt=d`
  display: unset;
  font-size: 16px;
  color: var(--White, #d7d7d7);
`,ut=d`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-top: 40px;
  color: var(--text-light-grey);

  & h2 {
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.48px;
    margin-bottom: 30px;
    text-align: center;
  }

  & p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.44px;
  }

  & p:first-of-type {
    margin-bottom: 20px;
  }

  & p:last-of-type {
    margin-bottom: 10px;
  }

  & span {
    margin-bottom: auto;
    font-family: Arial;
    font-size: 22px;
    letter-spacing: 0.44px;
    color: var(--edit-color);
  }
`,gt=d`
  width: 100%;
  padding: 12px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-btn-grey);

  font-size: var(--Typography-sm, 14px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.1px;
  color: var(--text-black);

  background-color: var(--bg-btn-grey);
`,ft=({id:e,deleteOrder:b})=>x("div",{css:ut,children:[t("h2",{children:"Ви збираєтесь видалити замовлення!"}),t("p",{children:"Підтвердіть видалиння замовлення номер:"}),t("span",{children:e}),t("button",{type:"button",onClick:()=>b(Number(e)),css:gt,children:"Підтвердіть"})]}),xt=e=>d`
  background-color: ${e};
  &:hover {
    background-color: ${e||"#393737"};
  }
`,_=document.querySelector("#portal-root"),yt=({item:e,onDelete:b,setIsUpsateStatusOrder:A})=>{const m=V(),[D,w]=o.useState(!1),[I,y]=o.useState(!1),[M,k]=o.useState(null),[S,j]=o.useState(null),[l,u]=o.useState(!1),N=a=>a.flatMap(i=>{const c=e.order_items.find(P=>P.product_id===i.id);return c?i.variations.filter(C=>{const s=c.size?String(C.size)===String(c.size):!0,h=c.color?String(C.color).toLowerCase()===String(c.color).toLowerCase():!0;return s&&h}).map(C=>({id:C.id,count:c.count})):[]}),T=e.id?e.order_items.map(a=>a.product_id):[],R=async()=>{const a=await Promise.all(T.map(i=>K(i)));return N(a)},L=async(a,i)=>{await Q(a,i)};o.useEffect(()=>{e.status==="Відхилено"&&u(!0)},[e.status]);const z=async a=>{if(a&&D){u(!0),await at(a,"Відхилено");const i=await R();i.length>0&&i.forEach(c=>{A(P=>!P),L(c.id,c.count)})}},E=a=>{a&&!l?m(`/admin/orders/${a}`):a&&l&&e.status==="Відправлено"&&m(`/admin/orders/${a}`)},O=e.payment_status==="Сплачено"?["Сплачено"]:["В очікуванні","Сплачено"],U=e.status==="Відправлено"?["Відправлено"]:e.status==="Відхилено"?["Відхилено"]:["В очікуванні","Відправлено","Відхилено"],W=e.payment_status==="Сплачено"&&e.status==="Відправлено"?"#154214":e.status==="Відхилено"?"#5a2323":"";return x("tr",{css:xt(W),children:[t("td",{css:r,children:e.id}),t("td",{css:r,children:st(e.order_date)}),t("td",{css:r,children:e.name}),t("td",{css:r,children:e.phone}),t("td",{css:r,children:e.total_amount}),t("td",{css:r,children:e.payment_method}),x("td",{css:r,children:[" ",t(B,{idOrders:e.id,options:O,width:"127px",widthTagP:"50%",widthContainer:"110px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",justifyContent:"center",backGround:"var(--bg-light-grey)",color:"var(--text-black)",fontSize:"12px",top:"30px",gap:"8px",setSelectedOption:k,selectedOption:M,disable:M==="Сплачено"||S==="Відхилено"?!0:l})]}),t("td",{css:r,children:t(B,{idOrders:e.id,options:U,width:"127px",widthTagP:"50%",widthContainer:"110px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",backGround:"var(--bg-light-grey)",color:"var(--text-black)",justifyContent:"center",fontSize:"12px",top:"30px",gap:"8px",disable:S==="Відправлено"?!0:l,setIsOpenModal:w,setSelectedOption:j,selectedOption:S})}),t("td",{onClick:()=>y(!0),css:r,children:t(q,{css:pt})}),t("td",{onClick:()=>E(Number(e.id)),css:r,children:t(J,{css:ht})}),D&&_&&$.createPortal(t(F,{setIsOpen:w,children:S==="Відхилено"&&t(rt,{updateStatus:()=>z(Number(e.id)),name:e.id?Number(e.id):null,setIsOpen:w})}),_),I&&_&&$.createPortal(t(F,{setIsOpen:y,children:t(ft,{id:e.id?Number(e.id):null,deleteOrder:b})}),_)]},e.id)},vt=()=>{const e=X(),[b,A]=o.useState([]),[m,D]=o.useState(null),[w,I]=Y(),[y,M]=o.useState(0),k=o.useMemo(()=>Object.fromEntries([...w]),[w]),{sortOrder:S="DESC",page:j}=k,[l,u]=o.useState(Number(j||1)),[N,T]=o.useState(!1),[R,L]=o.useState(!1),z=20,E=y&&Math.ceil(y/z),O=o.useCallback(s=>{I(h=>{const g=new URLSearchParams(h);return Object.keys(s).forEach(v=>g.delete(v)),Object.entries(s).forEach(([v,n])=>{Array.isArray(n)?n.forEach(p=>g.append(v,p)):n!==""&&g.set(v,n)}),g})},[I]),U=async s=>{try{await tt(s),T(h=>!h)}catch(h){console.log("error :>> ",h)}};o.useEffect(()=>{let s="ASC";switch(m){case"Дата: від новіших до старіших":s="DESC";break;case"Дата: від старіших до новіших":s="ASC";break;default:s="ASC";break}O({sortOrder:s,page:l.toString()})},[m,l,O]),o.useEffect(()=>{e();const s={...k,sortOrder:S,page:l.toString()},h=Object.entries(s).reduce((n,[p,f])=>{if(Array.isArray(f)){const G=f.filter(H=>H!=="");n[p]=G}else f!==void 0&&f!==""&&(n[p]=f);return n},{});O(h);const g=new URLSearchParams;Object.entries(h).forEach(([n,p])=>{Array.isArray(p)?p.forEach(f=>{f!==""&&g.append(n,f)}):p!==""&&g.append(n,p)});async function v(){try{const n=await et(g.toString());M(Number(n.totalOrders)),A(n.data)}catch(n){console.error("Failed to fetch products:",n)}}v()},[l,S,k,O,N,R]);const W=["Дата: від новіших до старіших","Дата: від старіших до новіших"],a=()=>u(1),i=()=>u(E),c=s=>u(s),P=()=>u(s=>s===E?s:s+1),C=()=>u(s=>s===1?s:s-1);return x("section",{style:{width:"100vw",paddingTop:"100px"},children:[x("div",{css:Z,children:[x("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"20px"},children:[t("h1",{style:{color:"white",fontSize:"25px"},children:"Всі замовлення"}),t("div",{style:{width:"265px"},children:t(B,{options:W,width:"285px",setSelectedOption:D,selectedOption:m})})]}),x("table",{css:it,children:[t("thead",{css:ct,children:x("tr",{css:dt,children:[t("th",{css:r,children:"Номер"}),t("th",{css:r,children:"Дата"}),t("th",{css:r,children:"Ім'я"}),t("th",{css:r,children:"Телефон"}),t("th",{css:r,children:"Сумма"}),t("th",{css:r,children:"Тип оплати"}),t("th",{css:r,children:"Оплата"}),t("th",{css:r,children:"Статус"}),t("th",{css:r,children:"Видалити"}),t("th",{css:r,children:"Детальніше"})]})}),t("tbody",{css:lt,children:b&&b.map(s=>t(yt,{item:s,onDelete:U,setIsUpsateStatusOrder:L},nt()))})]})]}),y>10&&t(ot,{totalPage:y,countItemPages:z,paginate:c,nextPage:P,prevPage:C,firstPageBtn:a,lastPageBtn:i,currentPage:l,lastPage:E})]})};export{vt as default};
//# sourceMappingURL=OrdersPage-BtU80FVN.js.map
