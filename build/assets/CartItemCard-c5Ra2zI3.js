import{n as e,a as y,c as o,o as a,r as g,b as n,j as i}from"./index-f3Z1tpcS.js";import{h as u,P as v}from"./handleImgError-_RwiOHSM.js";import{e as b}from"./extractUnitTypeTitle-B3CNwRiF.js";const w=e.div`
  width: 100%;
  display: flex;
  border: 1px solid var(--bg-light-grey);
  border-radius: 16px;
  gap: 8px;
  padding: 11px;

  ${y(o`
    width: 360px;
  `)};

  ${({width:t})=>a(o`
      height: auto;
      width: ${t||"512px"};
      gap: 12px;
      padding: 15px;
    `)};
`,m=e.div`
  display: block;
  min-width: 96px;
  height: 96px;
  border-radius: 12px;
  overflow: hidden;
`,z=e.div`
  width: 100%;
`,C=e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`,_=e.h2`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;

  ${a(o`
    font-size: 18px;
  `)}
`,j=e.p`
  font-family: Arial;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--text-light-grey);
  margin-bottom: 4px;
`,I=t=>o`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--text-light-grey);
  margin-bottom: 4px;

  & .color {
    display: flex;
    margin-bottom: 4px;
  }

  & .color::after {
    content: "";
    display: block;
    width: 12px;
    height: 12px;
    margin-left: 4px;
    border-radius: 50%;
    background-color: ${t};
  }
`,k=e.div`
  width: 93px;
  height: 36px;
  border: 1px solid #171616;
  border-radius: 16px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`,P=e.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,$=e.button`
  align-self: flex-start;
  padding: 4px;
`,T=e.button`
  width: 40px;
  height: 40px;
  padding: 12px;
  color: var(--text-light-grey);
`,D=e.button`
  width: 40px;
  height: 40px;
  padding: 12px;
  color: var(--text-light-grey);
`,x=e.span`
  border: 1px solid var(--bg-light-grey);
  border-radius: 8px;
  padding: 4px 12px;
  color: var(--text-light-grey);
`;e.span`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
  text-decoration: line-through;

  ${a(o`
    font-size: 16px;
  `)}
`;e.span`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;

  ${a(o`
    font-size: 16px;
  `)}
`;const E=e.div`
  display: flex;
  align-items: center;
  gap: 8px;
`,S=o`
  width: 16px;
  height: 16px;
  & path {
    fill: var(--bg-light-grey);
  }
`;var h;function c(){return c=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var l=arguments[r];for(var s in l)({}).hasOwnProperty.call(l,s)&&(t[s]=l[s])}return t},c.apply(null,arguments)}var L=function(r){return g.createElement("svg",c({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},r),h||(h=g.createElement("path",{fill:"#D7D7D7",d:"m12.665 11.727-.94.94L8 8.94l-3.727 3.727-.94-.94L7.059 8 3.332 4.274l.94-.94L7.999 7.06l3.726-3.726.94.94L8.94 8z"})))};const N=({item:t,width:r,handleAddItem:l,handleDeleteItem:s,handleRemove:p,isOrderPage:f})=>{const d=t.size&&t.size.toString().replace(/[^a-zA-Zа-яА-ЯёЁ]/g,"");return n(w,{width:r,children:[i(m,{children:i("img",{src:t.img.img_url,alt:t.title,onError:u})}),n(z,{children:[n(C,{children:[i(_,{children:t.title}),p&&i($,{onClick:()=>p(t.product_id,t.size,t.color),children:i(L,{css:S})})]}),n("div",{css:I(t.color),children:[t.color&&i("p",{className:"color",children:"Колір: "}),t.size&&n("p",{className:"size",children:[d?b(d):"",": ",t.size]})]}),n(j,{children:["Код товару: №",t.product_code]}),n(P,{children:[f?i(x,{children:t.count}):n(k,{children:[s&&i(D,{onClick:()=>s(t.product_id,t.size),children:"-"}),i(x,{children:t.count}),l&&i(T,{onClick:()=>l(t.product_id,t.size),children:"+"})]}),i(E,{children:t&&i(v,{price:t.price,discount:t.discount,total_cost:t.total_cost,style_item:"cartPage"})})]})]})]})};export{N as C};
//# sourceMappingURL=CartItemCard-c5Ra2zI3.js.map
