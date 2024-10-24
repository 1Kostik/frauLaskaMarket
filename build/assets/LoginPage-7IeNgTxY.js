import{c as t,a as A,o as j,r as i,d as M,u as P,k as u,s as C,_,j as e,$ as L,b as c,a0 as x,F as z,h as q}from"./index-C641oKLp.js";import{c as B,d as f,b as D,F as v,E as w,a as T}from"./index.esm-CjI4zg9W.js";const W=t`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`,Z=t`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  row-gap: 40px;

  width: 320px;
  height: 322px;
  padding: 24px 20px;
  border: 1px solid var(--border-gray);
  border-radius: 32px;

  ${A(t`
    width: 488px;
  `)}
`,I=t`
  position: absolute;
  top: 16px;
  font-family: Fixel;
  font-size: 16px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: yellow;
`,b=t`
  position: relative;
  width: 100%;
`,y=t`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border-gray);
  background-color: transparent;

  font-family: Fixel;
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-light-grey);

  &::placeholder {
    color: var(--text-light-grey);
  }

  ${j(t`
    font-size: 14px;
  `)}
`,N=t`
  position: absolute;
  top: 10px;
  right: 10px;
`,S=t`
  position: absolute;
  top: 48px;
  font-size: 12px;
  line-height: 16px;
  color: red;
`,E=r=>r?t`
        border: 1px solid red;
      `:t``,U=t`
  width: 100%;
  padding: 10px 16px;

  border-radius: 24px;
  background-color: var(--bg-btn-submit);
  box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);

  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  ${j(t`
    font-size: 14px;
  `)}
`;var F;function p(){return p=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)({}).hasOwnProperty.call(a,n)&&(r[n]=a[n])}return r},p.apply(null,arguments)}var V=function(s){return i.createElement("svg",p({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s),F||(F=i.createElement("path",{fill:"#434343",d:"M12 6.47c2.76 0 5 2.24 5 5 0 .51-.1 1-.24 1.46l3.06 3.06c1.39-1.23 2.49-2.77 3.18-4.53-1.73-4.38-6-7.49-11-7.49-1.27 0-2.49.2-3.64.57l2.17 2.17c.47-.14.96-.24 1.47-.24M2.71 3.13a.996.996 0 0 0 0 1.41l1.97 1.97A11.9 11.9 0 0 0 1 11.47c1.73 4.39 6 7.5 11 7.5 1.52 0 2.97-.3 4.31-.82l2.72 2.72a.996.996 0 1 0 1.41-1.41L4.13 3.13c-.39-.39-1.03-.39-1.42 0M12 16.47c-2.76 0-5-2.24-5-5 0-.77.18-1.5.49-2.14l1.57 1.57c-.03.18-.06.37-.06.57 0 1.66 1.34 3 3 3 .2 0 .38-.03.57-.07l1.57 1.57c-.65.32-1.37.5-2.14.5m2.97-5.33a2.97 2.97 0 0 0-2.64-2.64z"})))},O;function d(){return d=Object.assign?Object.assign.bind():function(r){for(var s=1;s<arguments.length;s++){var a=arguments[s];for(var n in a)({}).hasOwnProperty.call(a,n)&&(r[n]=a[n])}return r},d.apply(null,arguments)}var G=function(s){return i.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},s),O||(O=i.createElement("path",{fill:"#434343",d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5M12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5m0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3"})))};const H={email:"",password:""},J=B({email:f().email("Введіть коректну електронну адресу").max(40,"Логін має бути не більше 40 символів").required("Обов'язкове поле"),password:f().matches(/^[a-zA-Z0-9!]+$/,"Пароль повинен містити лише англійські літери та цифри").matches(/^(?=.*[a-zA-Z])(?=.*\d)/,"Пароль повинен містити хоча б одну англійську літеру та одну цифру").min(8,"Пароль має бути від 8 до 15 символів").max(25,"Пароль має бути від 8 до 25 символів").required("Обов'язкове поле")}),K=()=>{const r=M(),s=P(),a=u(C),n=u(_),[h,$]=i.useState(!1);i.useEffect(()=>{a&&r("/")},[r,a]);const k=()=>{$(o=>!o)};return e(z,{children:e(D,{initialValues:H,validationSchema:J,onSubmit:o=>{s(L(o))},validateOnChange:!1,validateOnBlur:!1,children:({touched:o,errors:g,setFieldError:m})=>e("div",{css:W,children:c(T,{css:Z,children:[n==="Email or password invalid!"&&e("div",{css:I,children:"Невірний логін, пароль!"}),c("label",{htmlFor:"email",css:b,children:[e(v,{type:"string",name:"email",id:"email",placeholder:"Логін",css:[y,E(!!(g.email&&o.email))],onFocus:()=>{s(x()),m("email",void 0)}}),e(w,{name:"email",children:l=>e("div",{css:S,children:l})})]}),c("label",{htmlFor:"password",css:b,children:[e(v,{type:h?"text":"password",name:"password",id:"password",placeholder:"Пароль",css:[y,E(!!(g.password&&o.password))],onFocus:()=>{s(x()),m("password",void 0)}}),e("div",{onClick:k,css:N,children:h?e(G,{}):e(V,{})}),e(w,{name:"password",children:l=>e("div",{css:S,children:l})})]}),e("button",{type:"submit",css:U,children:"Увійти"})]})})})})},X=()=>e(z,{children:e("div",{css:q,children:e(K,{})})});export{X as default};
//# sourceMappingURL=LoginPage-7IeNgTxY.js.map
