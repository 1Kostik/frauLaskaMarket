import{c as n,u as R,O as L,d as G,v as U,r as l,q as H,ad as J,j as e,e as s,i as K,F as _,E as Q,w as V,a9 as X,ae as Y}from"./index-BYwag9Lo.js";import{b as Z}from"./index-jDB5c9JJ.js";import{C as $}from"./CartItemCard-udfdn1W-.js";import{n as tt}from"./index.browser-DP16PUbO.js";import{a as S}from"./SortingItems-DzHrKcf2.js";import{M as et}from"./Modal-CmPI6vdA.js";import{f as st,S as it}from"./StatusWarningModal-DqTdITeG.js";import{P as rt,M as nt}from"./MyDocument-DWueRjfm.js";import"./handleImgError-Dq8s1xJF.js";import"./extractUnitTypeTitle-CymZndRq.js";import"./arrow-down-select-BalVnK-g.js";const ot=n`
  display: flex;
  color: #d7d7d7;
  font-size: 25px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`,ct=n`
  width: 100%;
  height: 40px;
  display: flex;

  gap: 8px;
`,at=n`
  color: var(--White, #d7d7d7);
  font-variant-numeric: ordinal;
  font-feature-settings: "case" on, "cpsp" on, "rvrn" on, "hist" on;
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #d7d7d7);
  font-family: Fixel;
  font-size: var(--Typography-3xl, 32px);
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.64px;
`,dt=n`
  display: flex;
  gap: 12px;
  padding: 40px 0px;
`,lt=n`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  gap: 24px;
`,pt=n`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  gap: 8px;
`,o=n`
  color: var(--White, #d7d7d7);
  font-family: Fixel;
  font-size: var(--Typography-sm, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
`,c=n`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,ht=n`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`,a=n`
  width: 312px;
  color: var(--color, #a5a5a5);
  font-family: Rubik;
  font-size: var(--Typography-xs, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`,ut=n`
  width: 150px;
  color: var(--White, #d7d7d7);
  text-align: right;
  font-variant-numeric: ordinal;
  font-feature-settings: "case" on, "rvrn" on, "hist" on;
  font-family: Fixel;
  font-size: var(--Typography-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`;n`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;const P=n`
  font-size: 14px;
  border-radius: 16px;
  background-color: #d7d7d7;
  padding: 5px 20px;
  margin-right: 15px;
  transition: transform 0.3s ease;
  & + button {
    margin-right: 0;
  }
  &:hover {
    transform: scale(1.1);
  }
`,k=document.querySelector("#portal-root"),kt=()=>{const y=R(),O=L(),u=G(),{id:f}=U(),[z,v]=l.useState(!1),{data:t}=H(i=>i.order),[C,I]=l.useState([]),[m,E]=l.useState([]),[b,M]=l.useState(null),[p,D]=l.useState(null),[w,g]=l.useState(!1),F=(t==null?void 0:t.payment_status)==="Сплачено"?["Сплачено"]:["В очікуванні","Сплачено"],T=(t==null?void 0:t.status)==="Відправлено"?["Відправлено"]:(t==null?void 0:t.status)==="Відхилено"?["Відхилено"]:["В очікуванні","Відправлено","Відхилено"];l.useEffect(()=>{O(),y(J(Number(f)))},[y,f]),l.useEffect(()=>{const i=(t==null?void 0:t.order_items.map(d=>Number(d.product_id)))??[];async function r(){if(t){const d=await Promise.all(i.map(h=>V(h)));I(d)}}i.length>0&&(m.length===i.length&&m.every((h,x)=>h===i[x])||(r(),E(i)))},[t,m]);const W=C.map(i=>{const r=t==null?void 0:t.order_items.find(d=>d.product_id===i.id);if(r){const d=i.variations.filter(h=>{const x=r.size?String(h.size)===String(r.size):!0,B=r.color?String(h.color).toLowerCase()===String(r.color).toLowerCase():!0;return x&&B});return{product_id:i.id,title:i.title,img:i.imageUrls[0],product_code:r.product_id.toString(),size:r.size,discount:d[0].discount??null,price:d[0].price??null,count:r.count,color:r.color,total_cost:r.total_cost,quantity:r.count,variation_id:d[0].id}}return null}).filter(i=>i!==null);l.useEffect(()=>{((t==null?void 0:t.status)==="Відхилено"||(t==null?void 0:t.status)==="Відправлено")&&g(!0)},[t==null?void 0:t.status]),l.useEffect(()=>{p==="Відправлено"&&g(!0)},[p]);async function j(i,r){await Y(i,r)}const A=i=>{i&&p==="Відхилено"&&(g(!0),j(i,p),u(-1))},N=async i=>{await X(i),u(-1)},q=(t==null?void 0:t.payment_method)==="paymentByRequisites"?"Переказ на банківський рахунок":t==null?void 0:t.payment_method;return e("section",{style:{height:"100vh",width:"100vw",paddingTop:"100px"},children:s("div",{css:K,children:[s("div",{css:ct,children:[e("button",{css:ot,onClick:()=>u(-1),children:e(Z,{})}),s("h1",{css:at,children:["Замовлення # ",f," від ",t&&st(t.order_date)]})]}),s("div",{css:dt,children:[s("div",{css:lt,children:[t&&s(_,{children:[s("div",{css:c,children:[e("h2",{css:o,children:"Замовник:"}),s("p",{css:a,children:[t.last_name," ",t.name]})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Контакти:"}),e("p",{css:a,children:t.phone})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Спосіб оплати:"}),e("p",{css:a,children:q})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Спосіб доставки:"}),e("p",{css:a,children:t.delivery_type})]}),t.delivery_type!=="Самовивіз"&&s(_,{children:[s("div",{css:c,children:[e("h2",{css:o,children:"Адреса:"}),e("p",{css:a,children:t.delivery_city})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Відділення/поштомат:"}),e("p",{css:a,children:t.delivery_destination})]})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Статус оплати:"}),s("div",{css:a,children:[" ",e(S,{idOrders:t.id,options:F,width:"127px",widthTagP:"60%",widthContainer:"120px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",justifyContent:"center",backGround:"var(--bg-light-grey)",color:"var(--text-black)",fontSize:"12px",top:"30px",gap:"8px",setSelectedOption:M,selectedOption:b,disable:b==="Сплачено"?!0:p==="Відправлено"?!1:w})]})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Статус замовлення:"}),s("div",{css:a,children:[" ",e(S,{idOrders:t.id,options:T,width:"127px",widthTagP:"60%",widthContainer:"120px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",backGround:"var(--bg-light-grey)",color:"var(--text-black)",justifyContent:"center",fontSize:"12px",top:"30px",gap:"8px",disable:w,setIsOpenModal:v,setSelectedOption:D,selectedOption:p})]})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Отримувач:"}),s("p",{css:a,children:[t.recipient_last_name?t.recipient_last_name:t.last_name," ",t.recipient_name?t.recipient_name:t.name," ",t.recipient_phone?t.recipient_phone:""]})]}),s("div",{css:c,children:[e("h2",{css:o,children:"Передзвонити:"}),e("p",{css:a,children:t.call_me_back?"Так":"Ні"})]}),z&&k&&Q.createPortal(e(et,{setIsOpen:v,children:p==="Відхилено"&&e(it,{updateStatus:()=>A(Number(t.id)),name:t.id?Number(t.id):null})}),k)]}),s("div",{css:ht,children:[e("h2",{css:o,children:"Видалити замовлення:"}),s("p",{css:a,children:[e("button",{css:P,onClick:()=>N(Number(t==null?void 0:t.id)),children:"Видалити"}),e("button",{css:P,children:e(rt,{document:e(nt,{data:t}),fileName:"товарний чек.pdf",children:"Завантажити фаил PDF"})})]})]})]}),s("div",{css:pt,children:[W.map(i=>e($,{item:i,width:"100%"},tt())),s("div",{css:c,children:[e("h2",{css:o,children:"Загальна ціна"}),t&&s("p",{css:ut,children:[t.total_amount," ₴"]})]})]})]})]})})};export{kt as default};
//# sourceMappingURL=OrderItemPage-cMl1reLm.js.map
