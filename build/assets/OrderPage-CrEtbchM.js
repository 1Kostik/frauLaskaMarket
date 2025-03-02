import{c as w,n as B,a as ee,o as q,r as a,J as ne,K as re,e as n,j as e,F as te,d as le,L as G,q as ae,t as se,i as ce}from"./index-BYwag9Lo.js";import{n as A}from"./index.browser-DP16PUbO.js";import{H as oe}from"./HeroSection-DncZLn4g.js";import{F as b,E as W,a as de,b as he,c as pe,d as x}from"./index.esm-nC-lW14C.js";import{i as F,e as P,a as E,f as ue,g as O,b as D,d as me,N as fe,r as ye,p as ve,c as _e}from"./AdminForm.styled-BbJtrEca.js";import{f as ge}from"./handleImgError-Dq8s1xJF.js";import{C as be}from"./CartItemCard-udfdn1W-.js";import{P as xe}from"./PaymentBlock-BA88bXhg.js";import"./extractUnitTypeTitle-CymZndRq.js";const we=w`
  padding: 24px 0px;
  width: 100%;
  background: var(--bg-black);
`,ke=B.div`
  width: 100%;
  margin-bottom: 16px;
  ${ee(w`
    width: 312px;
  `)};
`,Se=B.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;

  ${q(w`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)}
`,Ce=B.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${q(w`
    flex-direction: unset;
    gap: 20px;
  `)};
`,Fe=B.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${q(w`
    gap: 40px;
  `)};
`,Pe=B.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${ee(w`
    flex-direction: unset;
    gap: 16px;
  `)};
  ${q(w`
    width: 844px;
    gap: 20px;
  `)};
`,Ee=B.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${q(w`
    gap: 20px;
  `)};
`,We=_=>_.map(r=>{const{color:o,count:C,product_id:g,size:k,discount:y,price:u}=r;return{full_price:y?ge(Number(u),y):u,discount:y||null,color:o||null,count:C,product_id:g,size:k||null}}),Q=w`
  position: relative;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`,X=w`
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
`,Z=w`
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
`,De=({formik:_})=>{const{setFieldValue:r,setFieldTouched:o,touched:C,errors:g,values:k}=_,[y,u]=a.useState(!1),[m,c]=a.useState(null),[s,f]=a.useState(""),[d,v]=a.useState(null),[h,i]=a.useState(0),[I,S]=a.useState(!1),[L,H]=a.useState(""),[N,z]=a.useState(""),[V,ie]=a.useState(null),[R,K]=a.useState(0),M=a.useRef(null),T=a.useRef(null),j=(t,p)=>{const l=t.target.value;p==="city"?f(l.trim()):z(l.trim()),p==="city"?i(0):K(0)},U=t=>{c(t),f(""),u(!1),v(null),i(0)},J=t=>{H(t),z(""),S(!1),K(0)};a.useEffect(()=>{const t=/^[а-яА-ЯёЁіІїЇ\s'’]+$/u.test(s);s.length>1&&t&&(async()=>{const p=await ne(s);v(p)})(),s.length===0&&v(null)},[s]),a.useEffect(()=>{const t=m==null?void 0:m.DeliveryCity;t&&(async()=>{const p=await re(t);ie(p)})(),H("")},[m]),a.useEffect(()=>{const t=p=>{const l=p.target;!l.closest("[id=city]")&&!l.closest("[id=warehouse]")?(u(!1),v(null),f(""),S(!1),z("")):l.closest("[id=city]")&&(u(!0),S(!1)),l.closest("[id=warehouse]")&&(S(!0),u(!1))};return document.addEventListener("click",t),()=>{document.removeEventListener("click",t)}},[]),a.useEffect(()=>{r("delivery_city",(m==null?void 0:m.Present)||""),r("delivery_destination",L)},[L,m,r]);const $=(V==null?void 0:V.filter(t=>t.Description.includes(N)))||[],Y=(t,p)=>{p==="city"?t.key==="ArrowDown"&&d?i(l=>l<d.length-1?l+1:l):t.key==="ArrowUp"?i(l=>l>0?l-1:l):t.key==="Enter"&&(t.preventDefault(),h>=0&&d&&U(d[h])):p==="warehouse"&&(t.key==="ArrowDown"&&$?K(l=>l<$.length-1?l+1:l):t.key==="ArrowUp"?K(l=>l>0?l-1:l):t.key==="Enter"&&(t.preventDefault(),R>=0&&$&&J($[R].Description)))};return a.useEffect(()=>{if(M.current&&h>=0){const t=M.current.children[h];t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}},[h]),a.useEffect(()=>{if(T.current&&R>=0){const t=T.current.children[R];t&&t.scrollIntoView({behavior:"smooth",block:"nearest"})}},[R]),n(te,{children:[n("div",{css:Q,children:[n("div",{css:X,children:[e("input",{type:"text",name:"city",id:"city",placeholder:m?"":"Місто",onChange:t=>j(t,"city"),value:s,autoComplete:"none",onFocus:()=>o("delivery_city",!1,!1),onKeyDown:t=>Y(t,"city"),css:[F,P(!!(g.delivery_city&&C.delivery_city))]}),e("p",{css:E(!!s||!!k.delivery_city),children:"Місто"}),!s&&e("div",{children:m==null?void 0:m.Present})]}),y&&d&&d.length>0&&e("div",{css:Z,ref:M,children:d.map((t,p)=>e("p",{onClick:()=>{U(t)},style:{backgroundColor:h===p?"#a6a4a450":"none"},children:t.Present},A()))})]}),n("div",{css:Q,children:[n("div",{css:X,children:[e("input",{type:"text",name:"warehouse",id:"warehouse",placeholder:L?"":"Відділення",onChange:t=>j(t,"warehouse"),value:N,autoComplete:"none",onFocus:()=>o("delivery_destination",!1,!1),onKeyDown:t=>Y(t,"warehouse"),css:[F,P(!!(g.delivery_destination&&C.delivery_destination))]}),e("p",{css:E(!!N||!!k.delivery_destination),children:"Відділення"}),!N&&e("div",{children:L})]}),I&&$.length>0&&e("div",{css:Z,ref:T,children:$.map(({Description:t},p)=>e("p",{onClick:()=>J(t),style:{backgroundColor:R===p?"#a6a4a450":"none"},children:t},A()))}),I&&$.length===0&&e("p",{children:"Немає відділень"})]})]})},$e=_=>pe({name:x().max(15,"Має бути 15 символів або менше").required("Обов'язкове"),last_name:x().max(15,"Має бути 15 символів або менше").required("Обов'язкове"),phone:x().matches(/^\+380\d{9}$/,"Невірний номер телефону").required("Обов'язковий"),email:x().email("Невірна адреса електронної пошти").required("Обов'язковий"),delivery_type:x().oneOf(["Нова пошта","Самовивіз"]),delivery_city:x().test("is-postPickup","Поля доставки обов'язкові",function(r){const{delivery_type:o}=this.parent;return!(o==="Нова пошта"&&r==null)}),delivery_destination:x().test("is-postPickup","Поля доставки обов'язкові",function(r){const{delivery_type:o}=this.parent;return!(o==="Нова пошта"&&r==null)}),recipient_name:x().max(15,"Має бути 15 символів або менше").test("isOtherRecipient-recipient_name","Обов'язкове",function(r){return!(_&&(!r||r.trim()===""))}),recipient_last_name:x().max(15,"Має бути 15 символів або менше").test("isOtherRecipient-recipient_last_name","Обов'язкове",function(r){return!(_&&(!r||r.trim()===""))}),recipient_phone:x().matches(/^\+380\d{9}$/,"Невірний номер телефону").test("isOtherRecipient-recipient_phone","Обов'язковий",function(r){return!(_&&(!r||r.trim()===""))}),payment_method:x().oneOf(["paymentByRequisites","Накладний платіж"])}),Ie={name:"",last_name:"",phone:"",email:"",delivery_type:"Нова пошта",delivery_city:"",delivery_destination:"",recipient_name:"",recipient_last_name:"",recipient_phone:"",payment_method:"paymentByRequisites"},Re=({addedItems:_,callMeBack:r,setIsSubmited:o})=>{const[C,g]=a.useState(!1),k=le(),y=()=>{g(c=>!c)},u=c=>{/\d/.test(c.key)&&c.preventDefault()},m=async c=>{const s={..._e(c),order_items:We(_),call_me_back:r};try{o(!0),c.payment_method==="paymentByRequisites"?(await G(s),o(!1),k(`/ordered?email=${c.email}`)):(await G(s),o(!1),k(`/ordered?email=${c.email}`))}catch(f){console.error("Error while making order:",f)}};return e(he,{initialValues:Ie,validationSchema:$e(C),onSubmit:c=>m(c),validateOnBlur:!1,children:c=>{const{setFieldValue:s,setFieldTouched:f,touched:d,errors:v,values:h}=c;return n(de,{css:ue,id:"orderForm",children:[n("div",{role:"group","aria-labelledby":"contactDetailsLabel",css:O,children:[e("h3",{children:"Ваші контактні дані"}),n("div",{children:[n("label",{htmlFor:"name",children:[e(b,{name:"name",type:"text",placeholder:"Ім’я",css:[F,P(!!(v.name&&d.name))],onFocus:()=>f("name",!1,!1),onKeyDown:u}),e("p",{css:E(!!h.name),children:"Ім’я"}),e(W,{name:"name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"last_name",children:[e(b,{name:"last_name",type:"text",placeholder:"Прізвище",css:[F,P(!!(v.last_name&&d.last_name))],onFocus:()=>f("last_name",!1,!1),onKeyDown:u}),e("p",{css:E(!!h.last_name),children:"Прізвище"}),e(W,{name:"last_name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"phone",children:[e(b,{name:"phone",children:i=>e("input",{...i.field,type:"tel",placeholder:"Номер телефону",onFocus:()=>{f("phone",!1,!1),i.field.value||s("phone","+380")},onChange:I=>{const S=I.target.value;S.match(/^\+380\d{0,9}$/)&&s("phone",S)},onBlur:()=>{i.field.value==="+380"&&s("phone","")},css:[F,P(!!(v.phone&&d.phone))]})}),e("p",{css:E(!!h.phone),children:"Номер телефону"}),e(W,{name:"phone",children:i=>e("div",{css:D,children:i})})]}),n("label",{children:[e(b,{name:"email",type:"email",placeholder:"E-mail",css:[F,P(!!(v.email&&d.email))],onFocus:()=>f("email",!1,!1)}),e("p",{css:E(!!h.email),children:"E-mail"}),e(W,{name:"email",children:i=>e("div",{css:D,children:i})})]})]})]}),n("div",{role:"group","aria-labelledby":"deliveryLabel",css:O,children:[e("h3",{children:"Доставка"}),n("div",{children:[n("div",{css:me,children:[e(b,{type:"radio",name:"delivery_type",value:"Нова пошта",id:"postPickup"}),e("label",{htmlFor:"postPickup",children:"Нова пошта"}),e(b,{type:"radio",name:"delivery_type",value:"Самовивіз",id:"selfPickup"}),e("label",{htmlFor:"selfPickup",children:"Самовивіз"})]}),h.delivery_type==="Нова пошта"&&n("div",{css:fe,children:[e(De,{formik:c}),e(W,{name:"delivery_destination",children:i=>e("div",{css:D,children:i})})]})]})]}),n("div",{css:[O,ye],children:[e("h3",{children:"Отримувач інша особа"}),e("input",{type:"checkbox",id:"recipient",className:"hiddenInput"}),e("label",{htmlFor:"recipient",onClick:y,children:"Отримувач буде інша особа"})]}),C&&n("div",{role:"group","aria-labelledby":"recipientLabel",css:O,children:[e("h3",{children:"Контактні дані отримувача"}),n("div",{children:[n("label",{htmlFor:"recipient_name",children:[e(b,{name:"recipient_name",type:"text",placeholder:"Ім’я",css:[F,P(!!(v.recipient_name&&d.recipient_name))],onFocus:()=>f("recipient_name",!1,!1),onKeyDown:u}),e("p",{css:E(!!h.recipient_name),children:"Ім’я"}),e(W,{name:"recipient_name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"recipient_last_name",children:[e(b,{name:"recipient_last_name",type:"text",placeholder:"Прізвище",css:[F,P(!!(v.recipient_last_name&&d.recipient_last_name))],onFocus:()=>f("recipient_last_name",!1,!1),onKeyDown:u}),e("p",{css:E(!!h.recipient_last_name),children:"Прізвище"}),e(W,{name:"recipient_last_name",children:i=>e("div",{css:D,children:i})})]}),n("label",{htmlFor:"recipient_phone",children:[e(b,{name:"recipient_phone",children:i=>e("input",{...i.field,type:"tel",placeholder:"Номер телефону",onFocus:()=>{f("recipient_phone",!1,!1),i.field.value||s("recipient_phone","+380")},onChange:I=>{const S=I.target.value;S.match(/^\+380\d{0,9}$/)&&s("recipient_phone",S)},onBlur:()=>{i.field.value==="+380"&&s("recipient_phone","")},css:[F,P(!!(v.recipient_phone&&d.recipient_phone))]})}),e("p",{css:E(!!h.recipient_phone),children:"Номер телефону"}),e(W,{name:"recipient_phone",children:i=>e("div",{css:D,children:i})})]})]})]}),n("div",{role:"group","aria-labelledby":"paymenyLabel",css:O,children:[e("h3",{children:"Оплата"}),n("div",{css:ve,children:[e(b,{type:"radio",name:"payment_method",value:"paymentByRequisites",id:"paymentByRequisites"}),e("label",{htmlFor:"paymentByRequisites",children:"Переказ на банківський рахунок"}),e(b,{type:"radio",name:"payment_method",value:"Накладний платіж",id:"deliveryPayment"}),e("label",{htmlFor:"deliveryPayment",children:"Накладний платіж"})]})]})]})}})},Te=()=>{const[_,r]=a.useState(!1),[o,C]=a.useState(!1),g=ae(se),k=g.reduce((y,u)=>y+u.total_cost,0);return n(te,{children:[e(oe,{viewType:"other",isEmpty:g.length===0,children:"Замовлення"}),e("section",{css:we,children:e("div",{css:ce,children:n(Ce,{children:[n(Fe,{children:[n(Pe,{children:[e(ke,{children:e(Se,{children:"Ваше замовлення"})}),e(Ee,{children:g.map(y=>e(be,{item:y,isOrderPage:!0},A()))})]}),e(Re,{addedItems:g,total_amount:k,callMeBack:_,setIsSubmited:C})]}),e(xe,{setCallMeBack:r,isOrderPage:!0,isSubmited:o})]})})})]})};export{Te as default};
//# sourceMappingURL=OrderPage-CrEtbchM.js.map
