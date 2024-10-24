import{n as t,a as h,c as e,o as n,d as f,l as s,m as b,p as m,b as o,j as i}from"./index-C641oKLp.js";const y="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXtJREFUSEvNlb1KQ0EQhc+ojY8QBEEs3Ll5ijxBQAJRUILY2pkUIlqohWI6XyD+QQoRYmGbd7DIbCVKLJI2pZg7unIjGm+Sm2sS3GqLPd/Zszu7QxjzoDHzMVkDa21aVY8BmDjJVFUA5D3Pu+/ofyQQkRcAc3Hg3zSPzLzYy0D/CP+UM/PXxrsT/EuDc2PMprX2EsDqSBOo6hUz54jIt9ZeqOr6KA1ujDErRNQWkTyA0879jeIO7owxy2HwqAmujTE5ESkR0VpXZd02Go1sKpV6q9Vqe0R00F15URKUmHlDVaettWUAGQdR1Uqz2cwE8CMi2g0r6ygGTldg5mK1Wp1JJBIVVZ3yfT+dTCZfRcSdtzv30BHVwO143/O8w3q9PttqtdoBvAhgu9+DjGwQQIrMXHBzETkDsDXotQ9r4HhlIqKPzyw7CB61iqJweq6Jk2Aow34GzwDmh6L9XvzEzAuh33XQcE4ALMU0eVDVnZ4NJya0r2yyPXkcCd4BkTLCGbPYhp8AAAAASUVORK5CYII=",A=t.div`
  align-self: flex-start;
  display: flex;
  flex-direction: column;
  width: 320px;
  border-radius: 16px;
  border: 1px solid var(--bg-light-grey);
  background: var(--bg-light-grey);
  padding: 16px;

  ${h(e`
    width: 688px;
  `)};

  ${n(e`
    width: 420px;
  `)};
`,k=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`,u=t.h2`
  width: 100%;
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;
  margin-bottom: 24px;

  ${n(e`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)};
`,z=t.span`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  ${n(e`
    font-size: 14px;
  `)};
`,w=t.span`
  color: var(--bg-black);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;

  ${n(e`
    font-size: 14px;
  `)};
`,v=t.p`
  content: "";
  width: 100%;
  height: 1px;
  background-color: var(--bg-black);
  margin-bottom: 24px;
`,I=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`,P=t.h2`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  ${n(e`
    font-size: 18px;
  `)};
`,D=t.span`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  ${n(e`
    font-size: 18px;
  `)};
`,p=t.button`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-black);

  ${n(e`
    font-size: 14px;
  `)};
`,Q=t.div`
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;

  & label {
    display: flex;
    align-items: center;
    cursor: pointer;
    color: var(--bg-black);
    font-family: Arial;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.25px;
    ${n(e`
      font-size: 14px;
    `)};

    &::before {
      content: "";
      display: block;
      width: 16px;
      height: 16px;
      border: 1px solid var(--border-color);
      border-radius: 4px;
      margin-right: 10px;
    }
  }

  & input:checked + label::before {
    background: url(${y});
    background-position: center;
    background-color: black;
  }
`,E=({setCallMeBack:a,isOrderPage:d})=>{const g=f(),l=s(b),c=s(m).reduce((r,x)=>r+x.total_cost,0);return o(A,{children:[i(u,{children:"Разом"}),o(k,{children:[o(z,{children:[l," ",l===1?"товар":l>1&&l<5?"товари":"товарів"," ","на суму:"]})," ",o(w,{children:[c," ₴"]})]}),i(v,{}),o(I,{children:[i(P,{children:"До сплати:"})," ",o(D,{children:[c," ₴"]})]}),a&&o(Q,{children:[i("input",{type:"checkbox",id:"callMeBack",className:"hiddenInput"}),i("label",{htmlFor:"callMeBack",onClick:()=>a(r=>!r),children:"Передзвоніть мені для підтвердження"})]}),d?i(p,{type:"submit",form:"orderForm",children:"Оформити замовлення"}):i(p,{type:"submit",onClick:()=>g("/order"),children:"Перейти до замовлення"})]})};export{E as P};
//# sourceMappingURL=PaymentBlock-Cmsk3B5Z.js.map
