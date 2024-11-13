import{c as o,n as i,a as y,o as c,b as j,u as z,q as B,t as D,r as g,e as h,j as e,i as m,F as f,y as E,z as H,A as _}from"./index-CIcvnpyc.js";import{H as M}from"./HeroSection-C0AdsAhC.js";import{r as N,s as Q,B as q}from"./BackNavigation-ua4OzkqB.js";import{C as L}from"./CartItemCard-BSHhOiDy.js";import{n as R}from"./index.browser-DP16PUbO.js";import{P as W}from"./PaymentBlock-hqRO6KEi.js";import"./ProductCard-EBzkehd6.js";import"./Modal-BVKPDhOY.js";import"./handleImgError-hYtc4tMe.js";import"./extractUnitTypeTitle-CymZndRq.js";const G=o`
  padding: 24px 0px;
  width: 100%;
  background: var(--bg-black);
`,J=i.div`
  width: 100%;
  margin-bottom: 16px;
  ${y(o`
    width: 312px;
  `)};
`,K=i.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;

  ${c(o`
    font-size: 24px;
    letter-spacing: 0.48px;
  `)}
`,O=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${c(o`
    flex-direction: unset;
    gap: 20px;
  `)};
`,U=i.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${y(o`
    flex-direction: unset;
    gap: 16px;
  `)};
  ${c(o`
    width: 844px;
    gap: 20px;
  `)};
`,V=i.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${c(o`
    gap: 20px;
  `)};
`,X=i.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${c(o`
    gap: 40px;
  `)};
`,Y=l=>{switch(l){case"product":return"Сторінка товару";case"privacy-policy":return"Договір публічної оферти";case"payment-delivery":return"Доставка та оплата  ";default:return"Магазин"}},pt=()=>{const l=j(),u=z(),x=B(D),v=l.state.from.split("/")[1]||"/",[p,d]=g.useState([]);g.useEffect(()=>{const n=x.map(({product_id:r,title:a,img:t,product_code:s,size:T,discount:$,price:b,count:S,color:k,total_cost:A,quantity:F})=>({product_id:r,title:a,img:t,product_code:s,size:T,discount:$,price:b,count:S,color:k,total_cost:A,quantity:F}));d(n)},[x]);const C=(n,r)=>{d(a=>a.map(t=>n===t.product_id&&t.size===r?{...t,count:t.count+1}:t)),u(E({id:n,size:r}))},w=(n,r)=>{d(a=>a.map(t=>n===t.product_id&&t.size===r&&t.count>1?{...t,count:t.count-1}:t)),u(H({id:n,size:r}))},I=(n,r,a)=>{d(t=>t.filter(s=>!(s.product_id===n&&s.size===r&&s.color===a))),u(_({id:n,size:r,color:a}))},P=p.length!==0?"Кошик":"Кошик порожній";return h(f,{children:[e("section",{style:{paddingTop:80},children:e("div",{css:m,style:{paddingTop:40},children:e(q,{previousPage:Y(v),currentPage:"Кошик"})})}),e(M,{viewType:"other",isEmpty:p.length===0,paddingTop:"0",children:P}),e("section",{css:G,children:e("div",{css:m,children:p.length>0?h(O,{children:[e(X,{children:h(U,{children:[e(J,{children:e(K,{children:"Товари у кошику"})}),e(V,{children:p.map(n=>e(L,{item:n,handleAddItem:C,handleDeleteItem:w,handleRemove:I},R()))})]})}),e(W,{})]}):e(f,{children:e(N,{children:e(Q,{})})})})})]})};export{pt as default};
//# sourceMappingURL=CartPage-C-DcS9sq.js.map
