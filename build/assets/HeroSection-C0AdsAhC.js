import{n as d,o as n,c as o,a as s,d as b,j as e,i as u,e as c,F as p}from"./index-CIcvnpyc.js";const m=d.section`
  height: ${({viewType:t})=>t==="other"?"auto":"640px"};
  padding-top: ${({paddingTop:t})=>t||"72px"};
  padding-bottom: ${({viewType:t})=>t==="other"?"24px":"0"};
  overflow: hidden;
  background: ${({bgImage:t,viewType:r})=>{switch(r){case"main":return`url(${t}), linear-gradient(270deg, #e3e3e3 0.2%, #cbcbcb 99.85%)`;case"school":return`url(${t}), linear-gradient(90deg, #252525 0.1%, #565656 200%)`;case"other":return"var(--bg-black)";default:return}}};

  background-repeat: no-repeat;
  background-position: 50%;
  background-size: auto 820px;

  ${({viewType:t,paddingTop:r})=>t==="other"?n(o`
          padding-top: ${r||"80px"};
        `):n(o`
          height: 820px;
          padding-top: ${r||"80px"};
        `)}
`,v=d.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
  overflow: hidden;

  ${({viewType:t})=>t==="main"?s(o`
          align-items: center;
        `):s(o`
          align-items: flex-start;
        `)}
`,h=(t,r)=>o`
  ${t==="other"&&o`
    padding-top: ${r||"24px"};

    ${n(o`
        padding-top: ${r||"40px"};
      `)}
  `}

  font-size: 96px;
  font-weight: 800;
  color: var(--text-white);

  ${s(o`
    font-size: 120px;
  `)}
  ${n(o`
    font-size: 240px;
  `)}

  ${(t==="school"||t==="other")&&o`
    font-size: 40px;
    font-weight: 900;
    padding-bottom: ${t==="school"?"30px":"0"};
    color: var(--text-light-grey);

    ${s(o`
      font-size: 88px;
    `)}
    ${n(o`
      font-size: 160px;
    `)}
  `}
`,x=t=>o`
  font-family: Inter;
  font-size: 18px;
  line-height: 120%;
  color: var(--text-light-grey);

  margin-bottom: ${t==="ordered"?"0":"16px"};
  padding-top: ${t==="ordered"?"12px":"0"};

  ${n(o`
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

  ${s(o`
    position: absolute;
    top: 24px;
    right: 40px;
    width: auto;
    margin: 0;
  `)}

  ${n(o`
      top: 40px;
      right: 78px;
      font-size: 14px;
    `)}

  &:hover {
    color: var(--btn-show-more-hover);
    border: 1px solid var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }
`,k=({children:t,bgImage:r,viewType:i,isEmpty:g,pageName:l,id:f,paddingTop:a})=>{const $=b();return e(m,{bgImage:r,viewType:i,id:f,paddingTop:a,children:e(v,{css:u,viewType:i,children:Array.isArray(t)?l?c(p,{children:[e("h1",{css:h(i,a),children:t[0].props.children}),e("p",{css:x(l),children:t[1].props.children})]}):c(p,{children:[e("p",{css:x(),children:t[0].props.children}),e("h1",{css:[h(i,a)],children:t[1].props.children})]}):c(p,{children:[e("h1",{css:h(i,a),children:t}),g&&e("button",{css:z,type:"button",onClick:()=>$("/store"),children:"Продовжити покупки"})]})})})};export{k as H};
//# sourceMappingURL=HeroSection-C0AdsAhC.js.map
