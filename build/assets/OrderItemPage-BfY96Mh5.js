import{c as o,u as R,N as L,d as G,q as U,r as c,l as H,ac as J,j as s,b as n,h as K,F as k,D as Q,t as V,a7 as X,ad as Y,a8 as Z,ae as $}from"./index-f3Z1tpcS.js";import{b as tt}from"./index-gdG87IFw.js";import{C as et}from"./CartItemCard-c5Ra2zI3.js";import{n as st}from"./index.browser-DP16PUbO.js";import{a as C}from"./SortingItems-BzyYjds4.js";import{M as nt}from"./Modal-GEOCQCwk.js";import{f as it,S as rt}from"./StatusWarningModal-bm1Tv0iD.js";import{P as ot,M as ct}from"./MyDocument-BHsYe8bH.js";import"./handleImgError-_RwiOHSM.js";import"./extractUnitTypeTitle-B3CNwRiF.js";import"./arrow-down-select-i5s9XQqm.js";const at=o`
  display: flex;
  color: #d7d7d7;
  font-size: 25px;
  transition: transform 0.3s ease;
  &:hover {
    transform: scale(1.2);
  }
`,dt=o`
  width: 100%;
  height: 40px;
  display: flex;

  gap: 8px;
`,lt=o`
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
`,pt=o`
  display: flex;
  gap: 12px;
  padding: 40px 0px;
`,ht=o`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  gap: 24px;
`,ut=o`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  gap: 8px;
`,a=o`
  color: var(--White, #d7d7d7);
  font-family: Fixel;
  font-size: var(--Typography-sm, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
`,l=o`
  display: flex;
  width: 100%;
  justify-content: space-between;
`,ft=o`
  margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`,p=o`
  width: 312px;
  color: var(--color, #a5a5a5);
  font-family: Rubik;
  font-size: var(--Typography-xs, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
`,mt=o`
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
`;o`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;const O=o`
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
`,z=document.querySelector("#portal-root"),Ot=()=>{const b=R(),E=L(),f=G(),{id:m}=U(),[g,w]=c.useState(!1),{data:t}=H(e=>e.order),[I,D]=c.useState([]),[x,M]=c.useState([]),[_,F]=c.useState(null),[d,N]=c.useState(null),[S,y]=c.useState(!1),T=(t==null?void 0:t.payment_status)==="Сплачено"?["Сплачено"]:["В очікуванні","Сплачено"],W=(t==null?void 0:t.status)==="Відправлено"?["Відправлено"]:(t==null?void 0:t.status)==="Відхилено"?["Відхилено"]:["В очікуванні","Відправлено","Відхилено"];c.useEffect(()=>{E(),b(J(Number(m)))},[b,m]),c.useEffect(()=>{const e=(t==null?void 0:t.order_items.map(r=>Number(r.product_id)))??[];async function i(){if(t){const r=await Promise.all(e.map(u=>V(u)));D(r)}}e.length>0&&(x.length===e.length&&x.every((u,v)=>u===e[v])||(i(),M(e)))},[t,x]);const P=I.map(e=>{const i=t==null?void 0:t.order_items.find(r=>r.product_id===e.id);if(i){const r=e.variations.filter(u=>{const v=i.size?String(u.size)===String(i.size):!0,B=i.color?String(u.color).toLowerCase()===String(i.color).toLowerCase():!0;return v&&B});return{product_id:e.id,title:e.title,img:e.imageUrls[0],product_code:i.product_id,size:i.size,discount:r[0].discount??null,price:r[0].price??null,count:i.count,color:i.color,total_cost:i.total_cost,quantity:i.count,variation_id:r[0].id}}return null}).filter(e=>e!==null),h=P.map(e=>({id:e.variation_id,count:e.quantity}));c.useEffect(()=>{async function e(i,r){await X(i,r)}h.length>0&&d==="Відхилено"&&g&&h.forEach(i=>{e(i.id,i.count)})},[h,d,g]),c.useEffect(()=>{async function e(i,r){await Y(i,r)}h.length>0&&d==="Відправлено"&&(t==null?void 0:t.status)!=="Відправлено"&&h.forEach(i=>{e(i.id,i.count)})},[h,d,t==null?void 0:t.status]),c.useEffect(()=>{((t==null?void 0:t.status)==="Відхилено"||(t==null?void 0:t.status)==="Відправлено")&&y(!0)},[t==null?void 0:t.status]),c.useEffect(()=>{d==="Відправлено"&&y(!0)},[d]);async function j(e,i){await $(e,i)}const A=e=>{e&&d==="Відхилено"&&(y(!0),j(e,d),f(-1))},q=async e=>{await Z(e),f(-1)};return s("section",{style:{height:"100vh",width:"100vw",paddingTop:"100px"},children:n("div",{css:K,children:[n("div",{css:dt,children:[s("button",{css:at,onClick:()=>f(-1),children:s(tt,{})}),n("h1",{css:lt,children:["Замовлення # ",m," від ",t&&it(t.order_date)]})]}),n("div",{css:pt,children:[n("div",{css:ht,children:[t&&n(k,{children:[n("div",{css:l,children:[s("h2",{css:a,children:"Замовник:"}),n("p",{css:p,children:[t.last_name," ",t.name]})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Контакти:"}),s("p",{css:p,children:t.phone})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Спосіб оплати:"}),s("p",{css:p,children:t.payment_method})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Спосіб доставки:"}),s("p",{css:p,children:t.delivery_type})]}),t.delivery_type!=="Самовивіз"&&n(k,{children:[n("div",{css:l,children:[s("h2",{css:a,children:"Адреса:"}),s("p",{css:p,children:t.delivery_city})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Відділення/поштомат:"}),s("p",{css:p,children:t.delivery_destination})]})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Статус оплати:"}),n("div",{css:p,children:[" ",s(C,{idOrders:t.id,options:T,width:"127px",widthTagP:"60%",widthContainer:"120px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",justifyContent:"center",backGround:"var(--bg-light-grey)",color:"var(--text-black)",fontSize:"12px",top:"30px",gap:"8px",setSelectedOption:F,selectedOption:_,disable:_==="Сплачено"?!0:d==="Відправлено"?!1:S})]})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Статус замовлення:"}),n("div",{css:p,children:[" ",s(C,{idOrders:t.id,options:W,width:"127px",widthTagP:"60%",widthContainer:"120px",height:"auto",border:"unset",padding:"unset",borderRadius:"12px",backGround:"var(--bg-light-grey)",color:"var(--text-black)",justifyContent:"center",fontSize:"12px",top:"30px",gap:"8px",disable:S,setIsOpenModal:w,setSelectedOption:N,selectedOption:d})]})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Отримувач:"}),n("p",{css:p,children:[t.recipient_last_name?t.recipient_last_name:t.last_name," ",t.recipient_name?t.recipient_name:t.name," ",t.recipient_phone?t.recipient_phone:""]})]}),n("div",{css:l,children:[s("h2",{css:a,children:"Передзвонити:"}),s("p",{css:p,children:t.call_me_back?"Так":"Ні"})]}),g&&z&&Q.createPortal(s(nt,{setIsOpen:w,children:d==="Відхилено"&&s(rt,{updateStatus:()=>A(Number(t.id)),name:t.id?Number(t.id):null})}),z)]}),n("div",{css:ft,children:[s("h2",{css:a,children:"Видалити замовлення:"}),n("p",{css:p,children:[s("button",{css:O,onClick:()=>q(Number(t==null?void 0:t.id)),children:"Видалити"}),s("button",{css:O,children:s(ot,{document:s(ct,{data:t}),fileName:"товарний чек.pdf",children:"Завантажити фаил PDF"})})]})]})]}),n("div",{css:ut,children:[P.map(e=>s(et,{item:e,width:"100%"},st())),n("div",{css:l,children:[s("h2",{css:a,children:"Загальна ціна"}),t&&n("p",{css:mt,children:[t.total_amount," ₴"]})]})]})]})]})})};export{Ot as default};
//# sourceMappingURL=OrderItemPage-BfY96Mh5.js.map
