import{c as i,b as p,j as e}from"./index-f3Z1tpcS.js";function g(r){const t=new Date(r),n=String(t.getDate()).padStart(2,"0"),o=String(t.getMonth()+1).padStart(2,"0"),a=t.getFullYear();return`${n}.${o}.${a}`}const l=i`
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
`,s=i`
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
`,d=({name:r,updateStatus:t,setIsOpen:n})=>p("div",{css:l,children:[e("h2",{children:"Ви збираєтесь відхилити замовлення!"}),e("p",{children:"При відхилинні замовлення, буде не дійсним! !!!"}),e("p",{children:"Підтвердіть відхилиння замовлення номер:"}),e("span",{children:r}),e("button",{type:"button",onClick:()=>{t(),n&&n(!1)},css:s,children:"Підтвердіть"})]});export{d as S,g as f};
//# sourceMappingURL=StatusWarningModal-bm1Tv0iD.js.map
