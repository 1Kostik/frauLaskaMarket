import{c as t,a as n,o as s,e as l,u as d,r as h,a3 as c,j as e,b as a,h as x,a4 as g}from"./index-f3Z1tpcS.js";const f=t`
  padding-top: 72px;
  padding-bottom: 36px;
  height: 66vh;

  & h1 {
    padding-top: 24px;
    font-size: 48px;
    font-weight: 800;
    color: var(--text-white);
    padding: 10px 0;
  }

  & p {
    font-family: Inter;
    font-size: 14px;
    line-height: 120%;
    color: var(--text-light-grey);
  }

  & p:last-of-type {
    font-family: Fixel;
    letter-spacing: 0.4px;
    line-height: 120%;
    margin-top: 16px;
  }

  ${n(t`
      & h1 {
        font-size: 64px;
      }

      & p {
        font-size: 18px;
      }
    `)}

  ${s(t`
    padding-top: 80px;
    height: 60vh;

    & h1 {
      font-size: 100px;
      padding: 30px 0;
    }

    & p {
      font-size: 24px;
    }

    & p:last-of-type {
      margin-top: 32px;
    }
  `)}
`,m=t`
  position: relative;
  display: block;

  width: 155px;
  padding: 10px 0;
  margin-top: 6px;

  font-family: Arial;
  font-size: 16px;
  line-height: 140%;
  color: var(--text-light-grey);
  transition: var(--effectDuration);

  ${s(t`
    width: 230px;
    margin-top: 12px;
    font-size: 24px;
  `)}

  &:hover {
    transform: scale(1.02);
  }

  &::after {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    bottom: 0;
    border-bottom: 1px solid var(--text-light-grey);
  }

  &:hover::after {
    border-bottom: 3px solid var(--text-light-grey);
  }
`,v=()=>{const[o]=l(),r=o.get("email"),p=o.get("order_id"),i=d();return h.useEffect(()=>{i(c())},[i,p]),e("section",{css:f,children:a("div",{css:x,children:[e("h1",{children:"Дякуємо за замовлення!"}),a("p",{children:[`Всі деталі будуть відправлені вам на пошту: ${r}`," "]}),e("p",{children:'Якщо ви не побачите листа у папці "Вхідні", будь ласка, перевірте папки "Спам", "Промоакції" або інші папки. Іноді електронні листи можуть бути помилково переміщені туди.'}),e(g,{to:"/store",css:m,children:"Продовжити покупки"})]})})};export{v as default};
//# sourceMappingURL=OrderedPage-ZadISLhr.js.map
