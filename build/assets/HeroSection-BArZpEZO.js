import{n as x,o as e,c as o,a as i,d as f,j as r,h as u,b as a,F as p}from"./index-f3Z1tpcS.js";const $=x.section`
  height: ${({viewType:t})=>t==="other"?"auto":"640px"};
  padding-top: 72px;
  padding-bottom: ${({viewType:t})=>t==="other"?"24px":"0"};

  background: ${({bgImage:t,viewType:s})=>{switch(s){case"main":return`url(${t}), linear-gradient(270deg, #e3e3e3 0.2%, #cbcbcb 99.85%)`;case"school":return`url(${t}), linear-gradient(90deg, #252525 0.1%, #565656 200%)`;case"other":return"var(--bg-black)";default:return}}};

  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 820px;

  ${({viewType:t})=>t==="other"?e(o`
          padding-top: 80px;
        `):e(o`
          height: 820px;
          padding-top: 80px;
        `)}
`,m=x.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  ${({viewType:t})=>t==="main"?i(o`
          align-items: center;
        `):i(o`
          align-items: flex-start;
        `)}
`,d=t=>o`
  ${t==="other"&&o`
    padding-top: 24px;

    ${e(o`
        padding-top: 40px;
      `)}
  `}

  font-size: 96px;
  font-weight: 800;
  color: var(--text-white);

  ${i(o`
    font-size: 120px;
  `)}
  ${e(o`
    font-size: 240px;
  `)}

  ${(t==="school"||t==="other")&&o`
    font-size: 40px;
    font-weight: 900;
    padding-bottom: ${t==="school"?"30px":"0"};
    color: var(--text-light-grey);

    ${i(o`
      font-size: 88px;
    `)}
    ${e(o`
      font-size: 160px;
    `)}
  `}
`,h=t=>o`
  font-family: Inter;
  font-size: 18px;
  line-height: 120%;
  color: var(--text-light-grey);

  margin-bottom: ${t==="ordered"?"0":"16px"};
  padding-top: ${t==="ordered"?"12px":"0"};

  ${e(o`
    font-size: 24px;
    margin-bottom: ${t} === "ordered"? "0":"20px";
  `)};
`,z=o`
  width: 160px;
  height: 40px;
  margin-top: 24px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--border-light-grey);

  color: var(--text-light-grey);
  font-size: 12px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  transition: var(--effectDuration);

  ${i(o`
    position: absolute;
    top: 24px;
    right: 40px;
    width: auto;
    margin: 0;
  `)}

  ${e(o`
      top: 40px;
      right: 78px;
      font-size: 14px;
    `)}

  &:hover {
    color: var(--btn-show-more-hover);
    border: 1px solid var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }
`,y=({children:t,bgImage:s,viewType:n,isEmpty:l,pageName:c,id:g})=>{const b=f();return r($,{bgImage:s,viewType:n,id:g,children:r(m,{css:u,viewType:n,children:Array.isArray(t)?c?a(p,{children:[r("h1",{css:d(n),children:t[0].props.children}),r("p",{css:h(c),children:t[1].props.children})]}):a(p,{children:[r("p",{css:h(),children:t[0].props.children}),r("h1",{css:d(n),children:t[1].props.children})]}):a(p,{children:[r("h1",{css:d(n),children:t}),l&&r("button",{css:z,type:"button",onClick:()=>b("/store"),children:"Продовжити покупки"})]})})})};export{y as H};
//# sourceMappingURL=HeroSection-BArZpEZO.js.map
