import{G as ce,c as U,b as s,j as e,F as K,r as v,u as Fe,l as Ce,P as Ee,R as _e,D as Ae,Q as Pe,S as Ue,N as Ve,d as Ie,f as Be,T as Le,U as De,V as Me,W as Te,X as Re,Y as We,Z as je,B as qe}from"./index-f3Z1tpcS.js";import{c as te,d as _,b as we,F as w,a as xe,e as j,f as ne,g as He,E as S,h as ae}from"./index.esm-C1qNprLQ.js";import{h as B,e as le,S as Se,j as ke,c as Oe,k as Ke,l as Ge,m as q,n as Y,o as J,q as k,s as H,t as Ze,u as Qe,v as Xe,w as Ye,x as Je,a as $,y as et,z as tt,A as rt,B as fe,C as it,D as st,E as ee,F as nt}from"./AdminForm.styled-BVdGt0lx.js";import{M as at,S as ot}from"./Modal-GEOCQCwk.js";import{n as $e}from"./index.browser-DP16PUbO.js";import{S as lt}from"./arrow-down-select-i5s9XQqm.js";import{a as ct}from"./index-gdG87IFw.js";function oe(r){return ce({tag:"svg",attr:{viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},child:[{tag:"line",attr:{x1:"12",y1:"5",x2:"12",y2:"19"},child:[]},{tag:"line",attr:{x1:"5",y1:"12",x2:"19",y2:"12"},child:[]}]})(r)}function dt(r){return ce({tag:"svg",attr:{viewBox:"0 0 576 512"},child:[{tag:"path",attr:{d:"M402.3 344.9l32-32c5-5 13.7-1.5 13.7 5.7V464c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V112c0-26.5 21.5-48 48-48h273.5c7.1 0 10.7 8.6 5.7 13.7l-32 32c-1.5 1.5-3.5 2.3-5.7 2.3H48v352h352V350.5c0-2.1.8-4.1 2.3-5.6zm156.6-201.8L296.3 405.7l-90.4 10c-26.2 2.9-48.5-19.2-45.6-45.6l10-90.4L432.9 17.1c22.9-22.9 59.9-22.9 82.7 0l43.2 43.2c22.9 22.9 22.9 60 .1 82.8zM460.1 174L402 115.9 216.2 301.8l-7.3 65.3 65.3-7.3L460.1 174zm64.8-79.7l-43.2-43.2c-4.1-4.1-10.8-4.1-14.8 0L436 82l58.1 58.1 30.9-30.9c4-4.2 4-10.8-.1-14.9z"},child:[]}]})(r)}function ve(r){return ce({tag:"svg",attr:{viewBox:"0 0 448 512"},child:[{tag:"path",attr:{d:"M268 416h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12zM432 80h-82.41l-34-56.7A48 48 0 0 0 274.41 0H173.59a48 48 0 0 0-41.16 23.3L98.41 80H16A16 16 0 0 0 0 96v16a16 16 0 0 0 16 16h16v336a48 48 0 0 0 48 48h288a48 48 0 0 0 48-48V128h16a16 16 0 0 0 16-16V96a16 16 0 0 0-16-16zM171.84 50.91A6 6 0 0 1 177 48h94a6 6 0 0 1 5.15 2.91L293.61 80H154.39zM368 464H80V128h288zm-212-48h24a12 12 0 0 0 12-12V188a12 12 0 0 0-12-12h-24a12 12 0 0 0-12 12v216a12 12 0 0 0 12 12z"},child:[]}]})(r)}const ze=r=>r.categories.list,ht=U`
  position: relative;
  width: 100%;
`,pt=r=>U`
  ${B}
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: default;

  & .arrow {
    display: flex;
    transform: ${r?"rotate(180deg)":"rotate(0deg)"};
  }
`,ut=U`
  position: absolute;
  top: 60px;
  z-index: 10;

  display: flex;
  flex-direction: column;

  width: 100%;
  padding: 10px;
  background-color: var(--bg-btn-black);

  border: 1px solid var(--border-color);
  border-radius: 12px;

  & div {
    position: relative;
    display: flex;
    padding-left: 24px;

    & p {
      flex-grow: 1;
      font-family: Arial;
      font-size: 14px;
      line-height: 22px;
      letter-spacing: 0.4px;
      color: var(--text-light-grey);
      cursor: pointer;
    }

    & .checkIcon {
      position: absolute;
      left: 0;
      fill: var(--text-light-grey);
    }

    & .editBtn,
    .deleteBtn {
      padding: 0 4px;
    }

    & .editBtn {
      margin: 0 20px;
      & svg {
        fill: var(--edit-color);
      }
    }
    & .deleteBtn {
      padding: 0 10px;
      & svg {
        fill: var(--fill-delete-icon);
      }
    }
  }
`,gt=U`
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
`,mt=U`
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
`,ft=({onDelete:r,name:p})=>s("div",{css:gt,children:[e("h2",{children:"Ви збираєтесь видалити категорію!"}),e("p",{children:"При видалені категорії, усі пов'язані з нею товари будут також видаленні !!!"}),e("p",{children:"Підтвердіть видалення категорії:"}),e("span",{children:p}),e("button",{type:"button",onClick:()=>r(p),css:mt,children:"Підтвердити"})]}),vt=U`
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
    margin-bottom: 10px;
  }

  & p {
    margin-bottom: 30px;
    font-family: Arial;
    font-size: 22px;
    letter-spacing: 0.44px;
    color: var(--edit-color);
  }

  & label {
    margin-bottom: 10px;
    font-size: 18px;
    align-self: start;
  }

  & #newName {
    width: 100%;
    padding: 12px;
    margin-bottom: auto;
    border-radius: 16px;
    border: 1px solid var(--border-gray);
    background-color: transparent;

    font-family: Fixel;
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: var(--text-dark-grey);

    &::placeholder {
      color: var(--text-dark-grey);
    }
  }

  & button {
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
  }
`,yt={newName:""},bt=te({newName:_()}),Ft=({name:r,onTitleEdit:p})=>e(K,{children:e(we,{initialValues:yt,validationSchema:bt,onSubmit:l=>{l.newName&&p(r,l.newName)},children:()=>s(xe,{css:vt,children:[e("h2",{children:"Зміна назви категорії:"}),e("p",{children:r}),e("label",{htmlFor:"newName",children:"Нове ім'я"}),e(w,{name:"newName",type:"text",placeholder:"Введіть нове ім'я",id:"newName"}),e("button",{type:"submit",children:"Змінити"})]})})}),ye=document.querySelector("#portal-root"),be=({formik:r,selectedValueId:p,selectType:l,items:m,index:f})=>{var g,N,P,E;const[z,F]=v.useState(!1),[u,A]=v.useState(typeof p=="string"?p.split(" ")[1]:p),[M,L]=v.useState(!1),[C,G]=v.useState(void 0),{setFieldError:re,setFieldValue:Z,errors:Q,touched:T}=r,X=Fe(),x=Ce(ze),ie=()=>{F(h=>!h),re("category_id",void 0)},R=h=>{var c;return((c=(m||x).find(b=>b.title===h))==null?void 0:c.id)||0},t=h=>{const c=h.target.innerText;A(R(c)),setTimeout(()=>{F(!1)},300)},a=()=>{var h;return u?(h=(m||x).find(c=>c.id===u))==null?void 0:h.title:l==="unitsType"?"Оберіть одиницю виміру":"Оберіть категорію"},o=(h,c)=>{G(c==="delete"?{type:"delete",name:h}:{type:"change",name:h}),L(!0)},n=h=>{X(Pe(R(h))).then(()=>L(!1))},y=(h,c)=>{X(Ue({id:R(h),name:c})).then(()=>L(!1))};return v.useEffect(()=>{l==="unitsType"&&r.values.variations[0].units!==""&&A(r.values.variations[0].units)},[r.values.variations,l]),v.useEffect(()=>{u&&Z(l==="categoryType"?"category_id":`variations.${f}.units`,u)},[u]),v.useEffect(()=>{const h=c=>{const b=c.target;!b.closest("[data-options]")&&!b.closest("[data-dropdown-trigger]")&&setTimeout(()=>{F(!1)},300)};return document.addEventListener("click",h),()=>{document.removeEventListener("click",h)}},[]),s("div",{css:ht,children:[s("div",{onClick:ie,"data-dropdown-trigger":!0,css:[pt(z),f!==void 0&&l!=="categoryType"?le(!!((N=(g=Q.variations)==null?void 0:g[f])!=null&&N.units&&((E=(P=T.variations)==null?void 0:P[f])!=null&&E.units))):le(!!(Q.category_id&&T.category_id))],children:[e("p",{children:a()}),e("button",{type:"button",children:e(lt,{className:"arrow"})})]}),z&&e("div",{"data-options":!0,css:ut,onClick:t,children:(m||x).map(h=>s("div",{children:[u===h.id&&e(Ee,{className:"checkIcon"}),e("p",{children:h.title}),l==="categoryType"&&s(K,{children:[e("button",{type:"button",className:"editBtn",onClick:()=>o(h.title,"change"),children:e(dt,{})}),e("button",{type:"button",onClick:()=>o(h.title,"delete"),className:"deleteBtn",children:e(_e,{})})]})]},$e()))}),M&&ye&&Ae.createPortal(s(at,{setIsOpen:L,children:[(C==null?void 0:C.type)==="change"&&e(Ft,{name:C.name,onTitleEdit:y}),(C==null?void 0:C.type)==="delete"&&e(ft,{onDelete:n,name:C.name})]}),ye)]})},Ct=U`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--border-light-grey);

  & .title-wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 10px;

    & svg {
      width: 24px;
      height: 24px;
      fill: var(--text-light-grey);
    }
  }

  & h3 {
    font-size: 14px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0.1px;
    color: var(--text-light-grey);
  }
`,wt=U`
  display: flex;
  /* column-gap: 10px; */
  flex-wrap: wrap;
  gap: 10px;
  & path {
    fill: var(--text-black);
  }
`,xt=r=>U`
  display: none;

  & + label {
    display: block;
    width: 40px;
    height: 40px;
    padding: 7px;

    border-radius: 12px;
    background-color: ${r};
    border: 1px solid transparent;
    cursor: pointer;
  }
`,St=["#FFFF","#000000","#808080","#FF0000","#FFA500","#FFFF00","#008000","#00FFFF","#0000FF","#8B00FF","#FFC0CB","#50C878","#808000","#FFD700","#C0C0C0"],kt=({formik:r,variation:p,index:l,onClose:m})=>{const[f,z]=v.useState(p||r.values.variations[l]),F=u=>{z(A=>({...A,color:u}))};return v.useEffect(()=>{r.setFieldValue(`variations.${l}.color`,f.color)},[f]),s("div",{css:Ct,children:[s("div",{className:"title-wrapper",children:[e("h3",{children:"Колір"}),e("button",{type:"button",onClick:()=>m(l,r),children:e(ct,{})})]}),e("div",{css:wt,children:St.map((u,A)=>s("div",{children:[e("input",{type:"radio",name:"color",id:`color-${l}-${A}`,checked:f.color===u,css:xt(u),onChange:()=>{F(u),r.setFieldError(`variations.${l}`,void 0)}}),e("label",{htmlFor:`color-${l}-${A}`,children:f.color===u?e(Se,{}):e(ke,{})})]},$e()))})]})},O=r=>{!/[0-9]/.test(r.key)&&r.key!=="Backspace"&&r.key!=="Delete"&&r.preventDefault()},$t=r=>{if(r){const p=r.variations.map(l=>({...l,price:Math.round(Number(l.price)*100/(100-Number(l.discount))),size:typeof l.size=="string"?parseInt(l.size):l.size}));return{...r,variations:p}}},zt=1024*1024*2,Nt={category_id:"",imageUrls:[],main_image:"",title:"",product_code:"",composition:"",benefit:"",description:"",variations:[{size:"",units:"",price:"",count:"",color:"",discount:""}],feedbacks:[{name:"",profession:"",review:""}],popularity:"",newCategory:""},Et=te({category_id:j().required("Оберіть категорію"),imageUrls:ne().min(1,"Необхідно вибрати принаймні одне зображення"),main_image:_(),title:_().required("Назва обов'язкова"),product_code:He().required("Код обов'язковий"),composition:_(),description:_().required("Опис обов'язковий"),variations:ne().of(te().shape({price:j().required("Ціна обов'язкова"),discount:j(),count:j().required("Кількість обов'язкова"),colors:_(),size:j(),units:_().test("is-size-field-filled","Виберіть одиницю виміру",function(r,p){const{size:l}=p.parent;return!(l!==void 0&&l!==""&&(!r||r.trim()===""))}).test("units-must-match","Одиниці повинні співпадати у всіх варіаціях",function(r,p){var f,z;const m=(z=((f=p.options.context)==null?void 0:f.variations)[0])==null?void 0:z.units;return!(m&&r!==m)})})),feedbacks:ne().of(te().shape({name:_(),profession:_(),review:_()}).test("all-or-none","All fields are required if any one field is filled",function(r){const{name:p,profession:l,review:m}=r||{},f=[p,l,m].some(F=>F&&F.trim()!==""),z=[p,l,m].every(F=>F&&F.trim()!=="");return f&&!z?this.createError({message:"Всі поля мають бути заповнені"}):!0})),newCategory:_()}),Lt=({product:r})=>{const p=Ve(),[l,m]=v.useState([]),[f,z]=v.useState(r?r.variations.reduce((t,a,o)=>(a.size!==null&&t.push(o),t),[]):[]),F=Ie(),u=Fe(),A=Ce(ze).map(t=>t.title),[M,L]=v.useState([]),C=v.useRef([]);v.useEffect(()=>{C.current=M.map(t=>C.current[t]||null)},[M]),v.useEffect(()=>(C.current.forEach(t=>t==null?void 0:t.addEventListener("input",()=>t.style.height=`${t.scrollHeight}px`)),()=>{C.current.forEach(t=>t==null?void 0:t.removeEventListener("input",()=>t.style.height=`${t.scrollHeight}px`))}),[M]),v.useEffect(()=>{const t=document.querySelectorAll("textarea");return t.forEach(a=>a.addEventListener("input",()=>a.style.height=`${a.scrollHeight}px`)),()=>{t.forEach(a=>a.removeEventListener("input",()=>a.style.height=`${a.scrollHeight}px`))}},[]),v.useEffect(()=>{p(),u(Be())},[u]),v.useEffect(()=>{r&&r.variations.map((t,a)=>{t.color&&m(o=>[...o,a])})},[r]);const G=(t,a)=>{const o=c=>c.toLowerCase().replace(/\s+/g,"-").replace(/[^\w.-]/g,""),{values:{imageUrls:n},setFieldValue:y,setFieldError:g}=a;g("imageUrls",void 0);const E=Array.from(t.target.files||[]).filter(c=>c.size<zt).map(c=>{const b=o(c.name);return new File([c],b,{type:c.type})}),h=E.map(c=>URL.createObjectURL(c));n.length+h.length>8||y("imageUrls",[...n,...E])},re=(t,a,o)=>{p();const{values:{imageUrls:n},setFieldValue:y}=o;!(a instanceof File)&&a.id?Me(a.id).then(()=>{a.id&&u(Te(a.id)),y("imageUrls",[...n.filter((g,N)=>N!==t)])}):y("imageUrls",[...n.filter((g,N)=>N!==t)])},Z=(t,a)=>{a.setFieldValue("imageUrls",(()=>{const{imageUrls:o}=a.values;return[o[t],...o.filter((y,g)=>g!==t)]})())},Q=(t,a)=>{p();const{setFieldError:o,setFieldValue:n}=a;if(t)if(A.includes(t)){o("newCategory","Категорія вже існує!");return}else u(Re(t)),n("newCategory","")},T=(t,a)=>{m(o=>o.includes(t)?(a.values.variations[t].color="",o.filter(n=>n!==t)):[...o,t])},X=(t,a)=>{z(o=>o.includes(t)?(a.values.variations[t].size="",o.filter(n=>n!==t)):[...o,t])},x=(t,a,o)=>[B,le(!!(t&&a)),o],ie=t=>{p();const a=t.imageUrls[0];if(a instanceof File){const n=a.name.split(".").slice(0,-1).join(".");t.main_image=n}else typeof a.img_url=="string"&&(t.main_image=a.img_url);delete t.newCategory,t.popularity=1,t.variations=t.variations.map(n=>{const{units:y,...g}=n;return{...g,price:n.discount?Math.round(Number(n.price)-Number(n.discount)/100*Number(n.price)):n.price,size:n.size!==""?n.size+" "+y:n.size}});const o=new FormData;t.imageUrls.forEach(n=>{if(n instanceof File)o.append("imageUrls",n);else return});for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)){const y=t[n];if(typeof y=="string"||typeof y=="number"){if(n==="id")continue;o.append(n,y.toString())}else Array.isArray(y)&&y.forEach((g,N)=>{if(typeof g=="object"&&g!==null&&!(g instanceof File)){for(const P in g)if(Object.prototype.hasOwnProperty.call(g,P)){const E=g[P];if(typeof E=="string"||typeof E=="number"){if(P==="img_url")continue;o.append(`${n}[${N}][${P}]`,E.toString())}}}})}r?(r==null?void 0:r.id)!==void 0&&u(je({id:r.id,formData:o})).unwrap().then(()=>F(`/store/product/${r.id}`)).catch(n=>console.log("err",n)):u(We(o)).unwrap().then(n=>F(`/store/product/${n.id}`)).catch(n=>console.log("err",n))},R=r&&$t(r);return e(K,{children:e(we,{initialValues:Oe(R)||Nt,validationSchema:Et,onSubmit:t=>{ie(t)},validateOnBlur:!1,validateOnChange:!1,children:t=>{const{values:{imageUrls:a,variations:o,feedbacks:n,newCategory:y,title:g,product_code:N,benefit:P,composition:E,description:h},setFieldError:c,errors:b,touched:I}=t,Ne=()=>{t.validateForm().then(d=>{Object.keys(d).length>0&&qe.error("Будь ласка, заповніть обов'язкові поля."),t.handleSubmit()})};return s(K,{children:[e("h1",{css:Ke,children:r?"Редагування товару":"Створення товару"}),e(xe,{children:s("div",{css:Ge,children:[s("div",{css:[q,Y],children:[e("h2",{children:"Категорія"}),s("div",{css:J,children:[A.length!==0&&s("div",{className:"errorContainer",children:[e(be,{formik:t,selectedValueId:r==null?void 0:r.category_id,selectType:"categoryType"}),e(S,{name:"category_id",children:d=>e("div",{css:k,children:d})})]}),s("label",{htmlFor:"newCategory",className:"errorContainer",children:[e(w,{name:"newCategory",type:"text",placeholder:"Назва нової категорії",onFocus:()=>c("newCategory",void 0),css:x(b.newCategory,I.newCategory)}),e(S,{name:"newCategory",children:d=>e("div",{css:k,children:d})})]}),e("button",{type:"button",onClick:()=>Q(y,t),css:H,children:"Створити категорію"})]})]}),s("div",{css:q,className:"errorContainer",children:[s("div",{css:Ze,children:[e("h2",{children:"Фотографії"}),a.length<8&&s(K,{children:[e("label",{htmlFor:"imageUrls",css:Qe,children:"Додати фотографію"}),e("input",{type:"file",name:"imageUrls",id:"imageUrls",accept:"image/*",multiple:!0,onChange:d=>G(d,t)})]})]}),e(ae,{name:"imageUrls",children:()=>s("div",{css:Xe,children:[a.map((d,V)=>s("div",{css:Ye,children:[e("button",{type:"button",className:"main-photo-btn",onClick:()=>Z(V,t),children:V===0?e(Se,{}):e(ke,{})}),e("button",{type:"button",className:"close-btn",onClick:()=>re(V,d,t),children:e(ot,{})}),e("div",{css:Je,children:e("img",{src:d instanceof File?URL.createObjectURL(d):typeof d.img_url=="string"?d.img_url:void 0,alt:`preview ${V}`})})]},V)),e(S,{name:"imageUrls",children:d=>e("div",{css:k,className:"images-error",children:d})})]})})]}),s("div",{css:[q,Y],children:[e("h2",{children:"Загальне"}),s("div",{css:J,children:[s("label",{htmlFor:"title",className:"errorContainer",children:[e(w,{name:"title",type:"text",id:"title",placeholder:"Назва товару",onFocus:()=>c("title",void 0),css:x(b.title,I.title)}),e("p",{css:$(!!g),children:"Назва товару"}),e(S,{name:"title",children:d=>e("div",{css:k,children:d})})]}),s("label",{htmlFor:"product_code",className:"errorContainer",children:[e(w,{name:"product_code",type:"text",id:"product_code",placeholder:"Код",onKeyPress:O,onFocus:()=>c("product_code",void 0),css:x(b.product_code,I.product_code)}),e("p",{css:$(!!N),children:"Код"}),e(S,{name:"product_code",children:d=>e("div",{css:k,children:d})})]}),s("label",{htmlFor:"composition",className:"errorContainer",children:[e(w,{name:"composition",as:"textarea",id:"composition",placeholder:"Склад",css:x(b.composition,I.composition,ee)}),e("p",{css:$(!!E),children:"Склад"}),e(S,{name:"composition",children:d=>e("div",{css:k,children:d})})]}),s("label",{htmlFor:"benefit",className:"errorContainer",children:[e(w,{name:"benefit",as:"textarea",id:"benefit",placeholder:"З чим допоможе?",css:x(b.benefit,I.benefit,ee)}),e("p",{css:$(!!P),children:"З чим допоможе?"}),e(S,{name:"benefit",children:d=>e("div",{css:k,children:d})})]}),s("label",{htmlFor:"description",className:"errorContainer",children:[e(w,{name:"description",as:"textarea",id:"description",placeholder:"Опис товару",onFocus:()=>c("description",void 0),css:x(b.description,I.description,ee)}),e("p",{css:$(!!h),children:"Опис товару"}),e(S,{name:"description",children:d=>e("div",{css:k,className:"text-area-error",children:d})})]})]})]}),e("div",{children:e(ae,{name:"variations",children:({push:d,remove:V})=>s("div",{css:et,children:[o.map((se,i)=>{var D,de,he,pe,ue,ge,me;return s("div",{css:[q,Y],children:[s("h2",{children:["Варіація товару: ",i+1]}),s("div",{css:tt,children:[s("div",{css:J,children:[s("label",{htmlFor:`variations${i}.price`,className:"errorContainer",children:[e(w,{name:`variations.${i}.price`,type:"text",placeholder:"Ціна товару",id:`variations${i}.price`,onFocus:()=>{c(`variations.${i}.price`,void 0)},onKeyPress:O,css:x((de=(D=b.variations)==null?void 0:D[i])==null?void 0:de.price,(pe=(he=I.variations)==null?void 0:he[i])==null?void 0:pe.price)}),e("p",{css:$(!!t.values.variations[i].price),children:"Ціна товару"}),e(S,{name:`variations.${i}.price`,children:W=>e("div",{css:k,children:W})})]}),s("label",{htmlFor:`variations${i}.discount`,className:"errorContainer",children:[e(w,{name:`variations.${i}.discount`,type:"text",placeholder:"Знижка",id:`variations${i}.discount`,onKeyPress:O,css:[B]}),e("p",{css:$(!!t.values.variations[i].discount),children:"Знижка"})]}),s("label",{htmlFor:`variations${i}.count`,className:"errorContainer",children:[e(w,{name:`variations.${i}.count`,type:"text",placeholder:"Кількість товару",id:`variations${i}.count`,onFocus:()=>{c(`variations.${i}.count`,void 0)},onKeyPress:O,css:x(((ue=b.variations)==null?void 0:ue[i])&&b.variations[i].count,(me=(ge=I.variations)==null?void 0:ge[i])==null?void 0:me.count)}),e("p",{css:$(!!t.values.variations[i].count),children:"Кількість товару"}),e(S,{name:`variations.${i}.count`,children:W=>e("div",{css:k,children:W})})]}),(l.includes(i)||o[i].color)&&e("div",{className:"errorContainer",children:e(kt,{formik:t,variation:r==null?void 0:r.variations[i],index:i,onClose:T})}),!l.includes(i)&&s("button",{type:"button",css:H,onClick:()=>T(i,t),children:[e("p",{children:"Додати колір"})," ",e(oe,{})]}),f.includes(i)&&s("div",{css:rt,children:[s("label",{htmlFor:`variations${i}.size`,className:"errorContainer",children:[e(w,{name:`variations.${i}.size`,type:"text",placeholder:"Кількість одиниць виміру",id:`variations${i}.size`,onKeyPress:O,css:[B]}),e("p",{css:$(!!t.values.variations[i].size),children:"Кількість одиниць виміру"})]}),s("div",{className:"errorContainer",children:[e(be,{formik:t,selectType:"unitsType",index:i,items:[{id:"мл",title:"мл"},{id:"гр",title:"гр"},{id:"шт",title:"шт"}],selectedValueId:r==null?void 0:r.variations[i].size}),e(S,{name:`variations.${i}.units`,children:W=>e("div",{css:k,children:W})})]})]}),s("button",{type:"button",css:H,onClick:()=>X(i,t),children:[e("p",{children:f.includes(i)?"Приховати":"Додати обʼєм / вагу / кількість"}),!f.includes(i)&&e(oe,{})]})]}),o.length>1&&e("button",{type:"button",onClick:()=>{V(i),Le(Number(o[i].id))},children:e(ve,{css:fe})})]})]},i)}),s("button",{type:"button",onClick:()=>d({size:"",price:"",count:"",color:"",discount:""}),css:H,children:[e("p",{children:"Додати варіацію товару"}),e(oe,{})]})]})})}),s("div",{css:[q,Y],children:[e("h2",{children:"Відгуки"}),e(ae,{name:"feedbacks",children:({push:d,remove:V})=>s("div",{css:it,children:[n.map((se,i)=>s("div",{css:st,className:"errorContainer",children:[s("div",{css:J,children:[s("label",{htmlFor:`feedbacks${i}.name`,className:"errorContainer",children:[e(w,{type:"text",name:`feedbacks.${i}.name`,id:`feedbacks${i}.name`,placeholder:"Імʼя людини",css:[B]}),e("p",{css:$(!!t.values.feedbacks[i].name),children:"Імʼя людини"})]}),s("label",{htmlFor:`feedbacks${i}.profession`,className:"errorContainer",children:[e(w,{type:"text",name:`feedbacks.${i}.profession`,id:`feedbacks${i}.proffesion`,placeholder:"Хто ця людина",css:[B]}),e("p",{css:$(!!t.values.feedbacks[i].profession),children:"Хто ця людина"})]}),s("label",{htmlFor:`feedbacks${i}.review`,className:"errorContainer",children:[e(w,{as:"textarea",name:`feedbacks.${i}.review`,id:`feedbacks${i}.review`,placeholder:"Текст відгуку",innerRef:D=>C.current[i]=D,css:[B,ee,{width:"100%"}]}),e("p",{css:$(!!t.values.feedbacks[i].review),children:"Текст відгуку"})]}),e(S,{name:`feedbacks.${i}`,children:D=>e("div",{css:k,children:D})})]}),n.length>1&&e("button",{type:"button",onClick:()=>{V(i),r&&n[i].id&&De(Number(n[i].id))},children:e(ve,{css:fe})})]},i)),e("button",{type:"button",onClick:()=>{L(se=>[...se,n.length]),d({name:"",profession:"",review:""})},css:H,children:"Додати відгук"})]})})]}),e("div",{css:nt,children:e("button",{type:"button",onClick:Ne,children:r?"Зберегти зміни":"Опублікувати оголошення"})})]})})]})}})})},Dt=U`
  padding-top: 112px;
`;export{Lt as A,Dt as s};
//# sourceMappingURL=CreateAdvertPage.styled-C1L4J8lF.js.map
