import{c as b,n as $,a as ee,o as O,r as c,I as ne,J as re,b as n,j as e,F as te,d as le,K as G,L as ae,l as se,p as ce,h as oe}from"./index-f3Z1tpcS.js";import{n as A}from"./index.browser-DP16PUbO.js";import{H as de}from"./HeroSection-BArZpEZO.js";import{F as _,E as W,a as he,b as pe,c as ue,d as g}from"./index.esm-C1qNprLQ.js";import{i as k,e as S,a as C,f as me,g as q,b as D,d as fe,N as ye,r as ve,p as _e,c as ge}from"./AdminForm.styled-BVdGt0lx.js";import{f as be}from"./handleImgError-_RwiOHSM.js";import{C as xe}from"./CartItemCard-c5Ra2zI3.js";import{P as we}from"./PaymentBlock-BQSzXIFN.js";import"./extractUnitTypeTitle-B3CNwRiF.js";const ke=b`
  padding: 24px 0px;
  width: 100%;
  background: var(--bg-black);
`,Se=$.div`
  width: 100%;
  margin-bottom: 16px;
  ${ee(b`
    width: 312px;
  `)};
`,Ce=$.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;

  ${O(b`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)}
`,Fe=$.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${O(b`
    flex-direction: unset;
    gap: 20px;
  `)};
`,Pe=$.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${O(b`
    gap: 40px;
  `)};
`,Ee=$.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${ee(b`
    flex-direction: unset;
    gap: 16px;
  `)};
  ${O(b`
    width: 844px;
    gap: 20px;
  `)};
`,We=$.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${O(b`
    gap: 20px;
  `)};
`,De=u=>u.map(l=>{const{color:o,count:F,product_id:m,size:x,discount:f,price:w}=l;return{full_price:f?be(Number(w),f):w,discount:f||null,color:o||null,count:F,product_id:m,size:x||null}}),Q=b`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`,X=b`
  position: relative;

  & input {
    width: 100%;
  }

  & div {
    position: absolute;
    top: 50%;
    left: 0;
    pointer-events: none;
    transform: translateY(-50%);

    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    padding: 0 12px;

    font-size: 12px;
    font-weight: 600;
    letter-spacing: 0.1px;
  }
`,Z=b`
  position: absolute;
  top: 54px;
  z-index: 2;
  width: 100%;
  max-height: 150px;
  padding: 10px;
  overflow-y: auto;

  border: 1px solid var(--border-color);
  border-radius: 12px;
  background-color: var(--bg-black);

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #6c6767;
    border-radius: 12px;
  }

  &::-webkit-scrollbar-track {
    background-color: #b7b7b7;
    border-radius: 12px;
  }

  & p {
    cursor: pointer;
    font-size: 12px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    &:hover {
      background-color: var(--bg-tranparent);
    }
  }
`,Ie=({formik:u})=>{const{setFieldValue:l,setFieldTouched:o,touched:F,errors:m,values:x}=u,[f,w]=c.useState(!1),[r,y]=c.useState(null),[s,v]=c.useState(""),[d,p]=c.useState(null),[i,P]=c.useState(0),[E,N]=c.useState(!1),[R,H]=c.useState(""),[K,B]=c.useState(""),[V,ie]=c.useState(null),[L,z]=c.useState(0),M=c.useRef(null),T=c.useRef(null),j=(t,h)=>{const a=t.target.value;h==="city"?v(a.trim()):B(a.trim()),h==="city"?P(0):z(0)},U=t=>{y(t),v(""),w(!1),p(null),P(0)},J=t=>{H(t),B(""),N(!1),z(0)};c.useEffect(()=>{const t=/^[а-яА-ЯёЁіІїЇ\s'’]+$/u.test(s);s.length>1&&t&&(async()=>{const h=await ne(s);p(h)})(),s.length===0&&p(null)},[s]),c.useEffect(()=>{const t=r==null?void 0:r.DeliveryCity;t&&(async()=>{const h=await re(t);ie(h)})(),H("")},[r]),c.useEffect(()=>{const t=h=>{const a=h.target;!a.closest("[id=city]")&&!a.closest("[id=warehouse]")?(w(!1),p(null),v(""),N(!1),B("")):a.closest("[id=city]")&&(w(!0),N(!1)),a.closest("[id=warehouse]")&&(N(!0),w(!1))};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]),c.useEffect(()=>{l("delivery_city",(r==null?void 0:r.Present)||""),l("delivery_destination",R)},[R,r,l]);const I=(V==null?void 0:V.filter(t=>t.Description.includes(K)))||[],Y=(t,h)=>{h==="city"?t.key==="ArrowDown"&&d?P(a=>a<d.length-1?a+1:a):t.key==="ArrowUp"?P(a=>a>0?a-1:a):t.key==="Enter"&&(t.preventDefault(),i>=0&&d&&U(d[i])):h==="warehouse"&&(t.key==="ArrowDown"&&I?z(a=>a<I.length-1?a+1:a):t.key==="ArrowUp"?z(a=>a>0?a-1:a):t.key==="Enter"&&(t.preventDefault(),L>=0&&I&&J(I[L].Description)))};return c.useEffect(()=>{if(M.current&&i>=0){const t=M.current.children[i];t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}},[i]),c.useEffect(()=>{if(T.current&&L>=0){const t=T.current.children[L];t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}},[L]),n(te,{children:[n("div",{css:Q,children:[n("div",{css:X,children:[e("input",{type:"text",name:"city",id:"city",placeholder:r?"":"Місто",onChange:t=>j(t,"city"),value:s,autoComplete:"none",onFocus:()=>o("delivery_city",!1,!1),onKeyDown:t=>Y(t,"city"),css:[k,S(!!(m.delivery_city&&F.delivery_city))]}),e("p",{css:C(!!s||!!x.delivery_city),children:"Місто"}),!s&&e("div",{children:r==null?void 0:r.Present})]}),f&&d&&d.length>0&&e("div",{css:Z,ref:M,children:d.map((t,h)=>e("p",{onClick:()=>{U(t)},style:{backgroundColor:i===h?"#a6a4a450":"none"},children:t.Present},A()))})]}),n("div",{css:Q,children:[n("div",{css:X,children:[e("input",{type:"text",name:"warehouse",id:"warehouse",placeholder:R?"":"Відділення",onChange:t=>j(t,"warehouse"),value:K,autoComplete:"none",onFocus:()=>o("delivery_destination",!1,!1),onKeyDown:t=>Y(t,"warehouse"),css:[k,S(!!(m.delivery_destination&&F.delivery_destination))]}),e("p",{css:C(!!K||!!x.delivery_destination),children:"Відділення"}),!K&&e("div",{children:R})]}),E&&I.length>0&&e("div",{css:Z,ref:T,children:I.map(({Description:t},h)=>e("p",{onClick:()=>J(t),style:{backgroundColor:L===h?"#a6a4a450":"none"},children:t},A()))}),E&&I.length===0&&e("p",{children:"Немає відділень"})]})]})},Le=u=>ue({name:g().max(15,"Має бути 15 символів або менше").required("Обов'язкове"),last_name:g().max(15,"Має бути 15 символів або менше").required("Обов'язкове"),phone:g().matches(/^\+380\d{9}$/,"Невірний номер телефону").required("Обов'язковий"),email:g().email("Невірна адреса електронної пошти").required("Обов'язковий"),delivery_type:g().oneOf(["Нова пошта","Самовивіз"]),delivery_city:g().test("is-postPickup","Поля доставки обов'язкові",function(l){const{delivery_type:o}=this.parent;return!(o==="Нова пошта"&&l==null)}),delivery_destination:g().test("is-postPickup","Поля доставки обов'язкові",function(l){const{delivery_type:o}=this.parent;return!(o==="Нова пошта"&&l==null)}),recipient_name:g().max(15,"Має бути 15 символів або менше").test("isOtherRecipient-recipient_name","Обов'язкове",function(l){return!(u&&(!l||l.trim()===""))}),recipient_last_name:g().max(15,"Має бути 15 символів або менше").test("isOtherRecipient-recipient_last_name","Обов'язкове",function(l){return!(u&&(!l||l.trim()===""))}),recipient_phone:g().matches(/^\+380\d{9}$/,"Невірний номер телефону").test("isOtherRecipient-recipient_phone","Обов'язковий",function(l){return!(u&&(!l||l.trim()===""))}),payment_method:g().oneOf(["LiqPay","Накладний платіж"])}),$e={name:"",last_name:"",phone:"",email:"",delivery_type:"Нова пошта",delivery_city:"",delivery_destination:"",recipient_name:"",recipient_last_name:"",recipient_phone:"",payment_method:"LiqPay"},qe=({addedItems:u,callMeBack:l})=>{const[o,F]=c.useState(!1),m=le(),x=()=>{F(r=>!r)},f=r=>{/\d/.test(r.key)&&r.preventDefault()},w=async r=>{const y={...ge(r),order_items:De(u),call_me_back:l};try{if(r.payment_method==="LiqPay"){const s=await G(y);await ae(s),m("/")}else await G(y),m(`/ordered?email=${r.email}`)}catch(s){console.error("Error while making order:",s)}};return e(pe,{initialValues:$e,validationSchema:Le(o),onSubmit:r=>w(r),validateOnBlur:!1,children:r=>{const{setFieldValue:y,setFieldTouched:s,touched:v,errors:d,values:p}=r;return n(he,{css:me,id:"orderForm",children:[n("div",{role:"group","aria-labelledby":"contactDetailsLabel",css:q,children:[e("h3",{children:"Ваші контактні дані"}),n("div",{children:[n("label",{htmlFor:"name",children:[e(_,{name:"name",type:"text",placeholder:"Ім’я",css:[k,S(!!(d.name&&v.name))],onFocus:()=>s("name",!1,!1),onKeyDown:f}),e("p",{css:C(!!p.name),children:"Ім’я"}),e(W,{name:"name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"last_name",children:[e(_,{name:"last_name",type:"text",placeholder:"Прізвище",css:[k,S(!!(d.last_name&&v.last_name))],onFocus:()=>s("last_name",!1,!1),onKeyDown:f}),e("p",{css:C(!!p.last_name),children:"Прізвище"}),e(W,{name:"last_name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"phone",children:[e(_,{name:"phone",children:i=>e("input",{...i.field,type:"tel",placeholder:"Номер телефону",onFocus:()=>{s("phone",!1,!1),i.field.value||y("phone","+380")},onChange:P=>{const E=P.target.value;E.match(/^\+380\d{0,9}$/)&&y("phone",E)},onBlur:()=>{i.field.value==="+380"&&y("phone","")},css:[k,S(!!(d.phone&&v.phone))]})}),e("p",{css:C(!!p.phone),children:"Номер телефону"}),e(W,{name:"phone",children:i=>e("div",{css:D,children:i})})]}),n("label",{children:[e(_,{name:"email",type:"email",placeholder:"E-mail",css:[k,S(!!(d.email&&v.email))],onFocus:()=>s("email",!1,!1)}),e("p",{css:C(!!p.email),children:"E-mail"}),e(W,{name:"email",children:i=>e("div",{css:D,children:i})})]})]})]}),n("div",{role:"group","aria-labelledby":"deliveryLabel",css:q,children:[e("h3",{children:"Доставка"}),n("div",{children:[n("div",{css:fe,children:[e(_,{type:"radio",name:"delivery_type",value:"Нова пошта",id:"postPickup"}),e("label",{htmlFor:"postPickup",children:"Нова пошта"}),e(_,{type:"radio",name:"delivery_type",value:"Самовивіз",id:"selfPickup"}),e("label",{htmlFor:"selfPickup",children:"Самовивіз"})]}),p.delivery_type==="Нова пошта"&&n("div",{css:ye,children:[e(Ie,{formik:r}),e(W,{name:"delivery_destination",children:i=>e("div",{css:D,children:i})})]})]})]}),n("div",{css:[q,ve],children:[e("h3",{children:"Отримувач інша особа"}),e("input",{type:"checkbox",id:"recipient",className:"hiddenInput"}),e("label",{htmlFor:"recipient",onClick:x,children:"Отримувач буде інша особа"})]}),o&&n("div",{role:"group","aria-labelledby":"recipientLabel",css:q,children:[e("h3",{children:"Контактні дані отримувача"}),n("div",{children:[n("label",{htmlFor:"recipient_name",children:[e(_,{name:"recipient_name",type:"text",placeholder:"Ім’я",css:[k,S(!!(d.recipient_name&&v.recipient_name))],onFocus:()=>s("recipient_name",!1,!1),onKeyDown:f}),e("p",{css:C(!!p.recipient_name),children:"Ім’я"}),e(W,{name:"recipient_name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"recipient_last_name",children:[e(_,{name:"recipient_last_name",type:"text",placeholder:"Прізвище",css:[k,S(!!(d.recipient_last_name&&v.recipient_last_name))],onFocus:()=>s("recipient_last_name",!1,!1),onKeyDown:f}),e("p",{css:C(!!p.recipient_last_name),children:"Прізвище"}),e(W,{name:"recipient_last_name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"recipient_phone",children:[e(_,{name:"recipient_phone",children:i=>e("input",{...i.field,type:"tel",placeholder:"Номер телефону",onFocus:()=>{s("recipient_phone",!1,!1),i.field.value||y("recipient_phone","+380")},onChange:P=>{const E=P.target.value;E.match(/^\+380\d{0,9}$/)&&y("recipient_phone",E)},onBlur:()=>{i.field.value==="+380"&&y("recipient_phone","")},css:[k,S(!!(d.recipient_phone&&v.recipient_phone))]})}),e("p",{css:C(!!p.recipient_phone),children:"Номер телефону"}),e(W,{name:"recipient_phone",children:i=>e("div",{css:D,children:i})})]})]})]}),n("div",{role:"group","aria-labelledby":"paymenyLabel",css:q,children:[e("h3",{children:"Оплата"}),n("div",{css:_e,children:[e(_,{type:"radio",name:"payment_method",value:"LiqPay",id:"LiqPay"}),e("label",{htmlFor:"LiqPay",children:"LiqPay - моментальні платежі по всьому світу"}),e(_,{type:"radio",name:"payment_method",value:"Накладний платіж",id:"deliveryPayment"}),e("label",{htmlFor:"deliveryPayment",children:"Оплата при отриманні замовлення"})]})]})]})}})},Ae=()=>{const[u,l]=c.useState(!1),o=se(ce),F=o.reduce((m,x)=>m+x.total_cost,0);return n(te,{children:[e(de,{viewType:"other",isEmpty:o.length===0,children:"Замовлення"}),e("section",{css:ke,children:e("div",{css:oe,children:n(Fe,{children:[n(Pe,{children:[n(Ee,{children:[e(Se,{children:e(Ce,{children:"Ваше замовлення"})}),e(We,{children:o.map(m=>e(xe,{item:m,isOrderPage:!0},A()))})]}),e(qe,{addedItems:o,total_amount:F,callMeBack:u})]}),e(we,{setCallMeBack:l,isOrderPage:!0})]})})})]})};export{Ae as default};
//# sourceMappingURL=OrderPage-DssY3GES.js.map
