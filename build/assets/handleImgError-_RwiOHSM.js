import{c as t,o as n,b as i,j as p}from"./index-f3Z1tpcS.js";const h=t`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;

  ${n(t`
    line-height: 24px;
    font-size: 20px;
  `)}
`,x=t`
  height: 24px;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 1px;
  text-decoration: line-through;

  ${n(t`
    line-height: 24px;
    font-size: 20px;
  `)}
`,f=t`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  margin-bottom: 24px;
  ${n(t`
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`,P=t`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 22px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%;
  letter-spacing: 0.44px;
  letter-spacing: 1.6px;
  text-decoration: line-through;

  ${n(t`
    font-size: 32px;
    letter-spacing: 0.64px;
  `)}
`,d=t`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
  text-decoration: line-through;

  ${n(t`
    font-size: 16px;
  `)}
`,m=t`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;

  ${n(t`
    font-size: 16px;
  `)}
`,y=(o,r)=>Math.round(o*100/(100-r)),w=({price:o,discount:r,style_item:e,total_cost:l})=>{const s=e==="storePage"?h:e==="productDetailsPage"?f:e==="cartPage"?m:"",a=e==="storePage"?x:e==="productDetailsPage"?P:e==="cartPage"?d:"",c=e==="storePage"?"грн":"₴",g=e==="cartPage"?l:o;return i("p",{css:s,children:[r&&i("span",{children:[" ",p("span",{css:a,children:y(o,r)})," -"," "]}),g," ",c]})},u="/assets/emptyPlug-c0vISipj.webp",v=o=>{o.target.src=u};export{w as P,y as f,v as h};
//# sourceMappingURL=handleImgError-_RwiOHSM.js.map
