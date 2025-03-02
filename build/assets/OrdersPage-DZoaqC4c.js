import{c as o,e as g,j as t,d as q,r as a,a7 as V,a8 as J,E as U,O as K,h as Q,i as X,a9 as Y,aa as Z}from"./index-BYwag9Lo.js";import{f as tt,S as et}from"./StatusWarningModal-DqTdITeG.js";import{M as W}from"./Modal-CmPI6vdA.js";import{a as R,u as st}from"./SortingItems-DzHrKcf2.js";import{n as rt}from"./index.browser-DP16PUbO.js";import{P as at}from"./Pagination-BAeZGXye.js";import"./arrow-down-select-BalVnK-g.js";const nt=o`
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
`,ot=o`
  width: 1284px;
  height: 30px;
  display: block;
`,it=o`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;
  display: block;
`,r=o`
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
`,ct=o`
  display: block;
  margin-top: 10px;
`;o``;const dt=o`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`,lt=o`
  display: unset;
  font-size: 16px;
  color: var(--White, #d7d7d7);
`,ht=o`
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
`,pt=o`
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
`,ut=({id:e,deleteOrder:y})=>g("div",{css:ht,children:[t("h2",{children:"Ви збираєтесь видалити замовлення!"}),t("p",{children:"Підтвердіть видалиння замовлення номер:"}),t("span",{children:e}),t("button",{type:"button",onClick:()=>y(Number(e)),css:pt,children:"Підтвердіть"})]}),ft=e=>o`
  background-color: ${e};
  &:hover {
    background-color: ${e||"#393737"};
  }
`,D=document.querySelector("#portal-root"),gt=({item:e,onDelete:y,setIsUpsateStatusOrder:A})=>{const b=q(),[C,S]=a.useState(!1),[E,x]=a.useState(!1),[m,P]=a.useState(null),[c,j]=a.useState(null),[i,h]=a.useState(!1),[I,M]=a.useState(!1);a.useEffect(()=>{c==="Відправлено"&&m==="Сплачено"&&M(!0)},[c,m]),a.useEffect(()=>{e.status==="Відхилено"&&h(!0)},[e.status]);const z=async d=>{d&&C&&(h(!0),await st(d,"Відхилено"),A(N=>!N))},T=d=>{d&&!i?b(`/admin/orders/${d}`):d&&i&&e.status==="Відправлено"&&b(`/admin/orders/${d}`)},v=e.payment_status==="Сплачено"?["Сплачено"]:["В очікуванні","Сплачено"],k=e.status==="Відправлено"?["Відправлено"]:e.status==="Відхилено"?["Відхилено"]:["В очікуванні","Відправлено","Відхилено"],O=I?"#154214":e.status==="Відхилено"?"#5a2323":"";return g("tr",{css:ft(O),children:[t("td",{css:r,children:e.id}),t("td",{css:r,children:tt(e.order_date)}),t("td",{css:r,children:e.name}),t("td",{css:r,children:e.phone}),t("td",{css:r,children:e.total_amount}),t("td",{css:r,children:e.payment_method}),g("td",{css:r,children:[" ",t(R,{idOrders:e.id,options:v,width:"127px",widthTagP:"50%",widthContainer:"110px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",justifyContent:"center",backGround:"var(--bg-light-grey)",color:"var(--text-black)",fontSize:"12px",top:"30px",gap:"8px",setSelectedOption:P,selectedOption:m,disable:m==="Сплачено"||c==="Відхилено"?!0:i})]}),t("td",{css:r,children:t(R,{idOrders:e.id,options:k,width:"127px",widthTagP:"50%",widthContainer:"110px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",backGround:"var(--bg-light-grey)",color:"var(--text-black)",justifyContent:"center",fontSize:"12px",top:"30px",gap:"8px",disable:c==="Відправлено"?!0:i,setIsOpenModal:S,setSelectedOption:j,selectedOption:c})}),t("td",{onClick:()=>x(!0),css:r,children:t(V,{css:lt})}),t("td",{onClick:()=>T(Number(e.id)),css:r,children:t(J,{css:dt})}),C&&D&&U.createPortal(t(W,{setIsOpen:S,children:c==="Відхилено"&&t(et,{updateStatus:()=>z(Number(e.id)),name:e.id?Number(e.id):null,setIsOpen:S})}),D),E&&D&&U.createPortal(t(W,{setIsOpen:x,children:t(ut,{id:e.id?Number(e.id):null,deleteOrder:y})}),D)]},e.id)},Pt=()=>{const e=K(),[y,A]=a.useState([]),[b,C]=a.useState(null),[S,E]=Q(),[x,m]=a.useState(0),P=a.useMemo(()=>Object.fromEntries([...S]),[S]),{sortOrder:c="DESC",page:j}=P,[i,h]=a.useState(Number(j||1)),[I,M]=a.useState(!1),[z,T]=a.useState(!1),v=20,k=x&&Math.ceil(x/v),O=a.useCallback(s=>{E(p=>{const u=new URLSearchParams(p);return Object.keys(s).forEach(w=>u.delete(w)),Object.entries(s).forEach(([w,n])=>{Array.isArray(n)?n.forEach(l=>u.append(w,l)):n!==""&&u.set(w,n)}),u})},[E]),d=async s=>{try{await Y(s),M(p=>!p)}catch(p){console.log("error :>> ",p)}};a.useEffect(()=>{let s="ASC";switch(b){case"Дата: від новіших до старіших":s="DESC";break;case"Дата: від старіших до новіших":s="ASC";break;default:s="ASC";break}O({sortOrder:s,page:i.toString()})},[b,i,O]),a.useEffect(()=>{e();const s={...P,sortOrder:c,page:i.toString()},p=Object.entries(s).reduce((n,[l,f])=>{if(Array.isArray(f)){const G=f.filter(H=>H!=="");n[l]=G}else f!==void 0&&f!==""&&(n[l]=f);return n},{});O(p);const u=new URLSearchParams;Object.entries(p).forEach(([n,l])=>{Array.isArray(l)?l.forEach(f=>{f!==""&&u.append(n,f)}):l!==""&&u.append(n,l)});async function w(){try{const n=await Z(u.toString());m(Number(n.totalOrders)),A(n.data)}catch(n){console.error("Failed to fetch products:",n)}}w()},[i,c,P,O,I,z]);const N=["Дата: від новіших до старіших","Дата: від старіших до новіших"],_=()=>h(1),$=()=>h(k),B=s=>h(s),L=()=>h(s=>s===k?s:s+1),F=()=>h(s=>s===1?s:s-1);return g("section",{style:{width:"100vw",paddingTop:"100px"},children:[g("div",{css:X,children:[g("div",{style:{width:"100%",display:"flex",justifyContent:"space-between",marginBottom:"20px"},children:[t("h1",{style:{color:"white",fontSize:"25px"},children:"Всі замовлення"}),t("div",{style:{width:"265px"},children:t(R,{options:N,width:"285px",setSelectedOption:C,selectedOption:b})})]}),g("table",{css:nt,children:[t("thead",{css:ot,children:g("tr",{css:it,children:[t("th",{css:r,children:"Номер"}),t("th",{css:r,children:"Дата"}),t("th",{css:r,children:"Ім'я"}),t("th",{css:r,children:"Телефон"}),t("th",{css:r,children:"Сумма"}),t("th",{css:r,children:"Тип оплати"}),t("th",{css:r,children:"Оплата"}),t("th",{css:r,children:"Статус"}),t("th",{css:r,children:"Видалити"}),t("th",{css:r,children:"Детальніше"})]})}),t("tbody",{css:ct,children:y&&y.map(s=>t(gt,{item:s,onDelete:d,setIsUpsateStatusOrder:T},rt()))})]})]}),x>10&&t(at,{totalPage:x,countItemPages:v,paginate:B,nextPage:L,prevPage:F,firstPageBtn:_,lastPageBtn:$,currentPage:i,lastPage:k})]})};export{Pt as default};
//# sourceMappingURL=OrdersPage-DZoaqC4c.js.map
