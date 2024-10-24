import{c as i,n as s,a as m,o as d,u as A,l as F,p as P,r as h,b as u,j as n,h as _,F as f,B as j,w as D,x as E,y as H}from"./index-C641oKLp.js";import{H as z}from"./HeroSection-C1HwKWAl.js";import{w as B,x as M}from"./TrendingProducts-CUGlh-3K.js";import{C as Q}from"./CartItemCard-CfpWUhFR.js";import{n as q}from"./index.browser-DP16PUbO.js";import{P as R}from"./PaymentBlock-Cmsk3B5Z.js";import"./ProductCard-C4G9q0qv.js";import"./Modal-BUhM34K4.js";import"./handleImgError-BVlSbmPZ.js";import"./extractUnitTypeTitle-B3CNwRiF.js";const W=i`
  padding: 24px 0px;
  width: 100%;
  background: var(--bg-black);
`,G=s.div`
  width: 100%;
  margin-bottom: 16px;
  ${m(i`
    width: 312px;
  `)};
`,J=s.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;

  ${d(i`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)}
`,K=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${d(i`
    flex-direction: unset;
    gap: 20px;
  `)};
`,L=s.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${m(i`
    flex-direction: unset;
    gap: 16px;
  `)};
  ${d(i`
    width: 844px;
    gap: 20px;
  `)};
`,N=s.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${d(i`
    gap: 20px;
  `)};
`,O=s.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${d(i`
    gap: 40px;
  `)};
`,at=()=>{const l=A(),x=F(P),[c,p]=h.useState([]);h.useEffect(()=>{const e=x.map(({product_id:r,title:a,img:t,product_code:o,size:v,discount:I,price:$,count:b,color:S,total_cost:T,quantity:k})=>({product_id:r,title:a,img:t,product_code:o,size:v,discount:I,price:$,count:b,color:S,total_cost:T,quantity:k}));p(e)},[x]);const g=(e,r)=>{const a=c.find(t=>e===t.product_id&&t.size===r);if(a&&a.count>=a.quantity){j.warn("Товару на складі більше немає");return}p(t=>t.map(o=>e===o.product_id&&o.size===r?{...o,count:o.count+1}:o)),l(D({id:e,size:r}))},y=(e,r)=>{p(a=>a.map(t=>e===t.product_id&&t.size===r&&t.count>1?{...t,count:t.count-1}:t)),l(E({id:e,size:r}))},w=(e,r,a)=>{p(t=>t.filter(o=>!(o.product_id===e&&o.size===r&&o.color===a))),l(H({id:e,size:r,color:a}))},C=c.length!==0?"Кошик":"Кошик порожній";return u(f,{children:[n(z,{viewType:"other",isEmpty:c.length===0,children:C}),n("section",{css:W,children:n("div",{css:_,children:c.length>0?u(K,{children:[n(O,{children:u(L,{children:[n(G,{children:n(J,{children:"Товари у кошику"})}),n(N,{children:c.map(e=>n(Q,{item:e,handleAddItem:g,handleDeleteItem:y,handleRemove:w},q()))})]})}),n(R,{})]}):n(f,{children:n(B,{children:n(M,{})})})})})]})};export{at as default};
//# sourceMappingURL=CartPage-B0ir5Cwq.js.map
