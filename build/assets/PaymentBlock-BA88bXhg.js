import{n as t,a as h,c as e,o,d as b,q as s,N as m,t as y,e as n,j as i}from"./index-BYwag9Lo.js";const A="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAXtJREFUSEvNlb1KQ0EQhc+ojY8QBEEs3Ll5ijxBQAJRUILY2pkUIlqohWI6XyD+QQoRYmGbd7DIbCVKLJI2pZg7unIjGm+Sm2sS3GqLPd/Zszu7QxjzoDHzMVkDa21aVY8BmDjJVFUA5D3Pu+/ofyQQkRcAc3Hg3zSPzLzYy0D/CP+UM/PXxrsT/EuDc2PMprX2EsDqSBOo6hUz54jIt9ZeqOr6KA1ujDErRNQWkTyA0879jeIO7owxy2HwqAmujTE5ESkR0VpXZd02Go1sKpV6q9Vqe0R00F15URKUmHlDVaettWUAGQdR1Uqz2cwE8CMi2g0r6ygGTldg5mK1Wp1JJBIVVZ3yfT+dTCZfRcSdtzv30BHVwO143/O8w3q9PttqtdoBvAhgu9+DjGwQQIrMXHBzETkDsDXotQ9r4HhlIqKPzyw7CB61iqJweq6Jk2Aow34GzwDmh6L9XvzEzAuh33XQcE4ALMU0eVDVnZ4NJya0r2yyPXkcCd4BkTLCGbPYhp8AAAAASUVORK5CYII=",k=t.div`
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

  ${o(e`
    width: 420px;
  `)};
`,u=t.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 27px;
`,z=t.h2`
  width: 100%;
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;
  margin-bottom: 24px;

  ${o(e`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)};
`,w=t.span`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;

  ${o(e`
    font-size: 14px;
  `)};
`,v=t.span`
  color: var(--bg-black);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.25px;

  ${o(e`
    font-size: 14px;
  `)};
`,D=t.p`
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

  ${o(e`
    font-size: 18px;
  `)};
`,Q=t.span`
  color: var(--bg-black);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  ${o(e`
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
  transition: var(--effectDuration);
  ${o(e`
    font-size: 14px;
  `)};
  &:hover {
    transform: scale(1.02);
    color: var(--text-light-grey);
    background: var(--bg-black);
  }
`,C=t.div`
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
    ${o(e`
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
    background: url(${A});
    background-position: center;
    background-color: black;
  }
`,j=({setCallMeBack:l,isOrderPage:g,isSubmited:d})=>{const x=b(),r=s(m),c=s(y).reduce((a,f)=>a+f.total_cost,0);return n(k,{children:[i(z,{children:"Разом"}),n(u,{children:[n(w,{children:[r," ",r===1?"товар":r>1&&r<5?"товари":"товарів"," ","на суму:"]})," ",n(v,{children:[c," ₴"]})]}),i(D,{}),n(I,{children:[i(P,{children:"До сплати:"})," ",n(Q,{children:[c," ₴"]})]}),l&&n(C,{children:[i("input",{type:"checkbox",id:"callMeBack",className:"hiddenInput"}),i("label",{htmlFor:"callMeBack",onClick:()=>l(a=>!a),children:"Передзвоніть мені для підтвердження"})]}),g?i(p,{type:"submit",form:"orderForm",disabled:d,children:"Оформити замовлення"}):i(p,{type:"submit",onClick:()=>x("/order"),children:"Перейти до замовлення"})]})};export{j as P};
//# sourceMappingURL=PaymentBlock-BA88bXhg.js.map
