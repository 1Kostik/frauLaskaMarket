import{n as g,a as y,c as a,o as v,G as w,b as i,j as e,r as k,u as P,d as $,C as D,D as M,F as b,E as z,H as E,k as I,s as j}from"./index-C641oKLp.js";import{M as C}from"./Modal-BUhM34K4.js";import{h as S,P as O}from"./handleImgError-BVlSbmPZ.js";const Z=g.div`
  border-radius: 16px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  box-sizing: border-box;
  cursor: pointer;
  width: 100%;
  ${({show:o,widthContainer:r})=>y(a`
      width: ${r||`calc((100% - ((${o?1:3}) - 1) * 10px) / ${o?1:2})`};
    `)}
  ${({show:o,widthContainer:r})=>v(a`
      width: ${r||`calc((100% - ((${o?3:4}) - 1) * 20px) / ${o?3:4})`};
    `)}
    
    &:hover {
    transform: scale(1.02);
    transition: transform 0.3s ease;
    -webkit-box-shadow: 0px 0px 15px 2px rgba(215, 215, 215, 0.2);
    -moz-box-shadow: 0px 0px 15px 2px rgba(215, 215, 215, 0.2);
    box-shadow: 0px 0px 15px 2px rgba(215, 215, 215, 0.2);
  }
`,F=g.div`
  position: relative;
  width: 100%;
  height: 336px;
  border-radius: 16px;
  background: #b7b7b7;
  margin-bottom: 8px;
  overflow: hidden;
`;a`
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  & button {
    padding: 8px;
    border-radius: 100%;
    background-color: var(--bg-tranparent);
    transition: var(--effectDuration);

    & svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: var(--btn-show-more-hover);
    }
  }

  & button:first-of-type:hover {
    & svg {
      fill: #ff000080;
    }
  }
  & button:last-of-type:hover {
    & svg {
      fill: yellow;
    }
  }
`;const L=g.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex-grow: 1;
  padding: 0 5px 5px 5px;
  gap: 4px;
`,U=g.h5`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: 0.15px;

  ${v(a`
    font-size: 18px;
    line-height: 24px;
  `)}
`;function _(o){return w({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"g",attr:{id:"Edit"},child:[{tag:"g",attr:{},child:[{tag:"path",attr:{d:"M3.548,20.938h16.9a.5.5,0,0,0,0-1H3.548a.5.5,0,0,0,0,1Z"},child:[]},{tag:"path",attr:{d:"M9.71,17.18a2.587,2.587,0,0,0,1.12-.65l9.54-9.54a1.75,1.75,0,0,0,0-2.47l-.94-.93a1.788,1.788,0,0,0-2.47,0L7.42,13.12a2.473,2.473,0,0,0-.64,1.12L6.04,17a.737.737,0,0,0,.19.72.767.767,0,0,0,.53.22Zm.41-1.36a1.468,1.468,0,0,1-.67.39l-.97.26-1-1,.26-.97a1.521,1.521,0,0,1,.39-.67l.38-.37,1.99,1.99Zm1.09-1.08L9.22,12.75l6.73-6.73,1.99,1.99Zm8.45-8.45L18.65,7.3,16.66,5.31l1.01-1.02a.748.748,0,0,1,1.06,0l.93.94A.754.754,0,0,1,19.66,6.29Z"},child:[]}]}]}]})(o)}const H=a`
  z-index: 5;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  & button {
    padding: 8px;
    border-radius: 9px;
    background-color: var(--bg-tranparent);
    transition: var(--effectDuration);

    & svg {
      width: 30px;
      height: 30px;
    }

    &:hover {
      background-color: var(--btn-show-more-hover);
    }
  }

  & button:first-of-type:hover {
    & svg {
      fill: yellow;
    }
  }
  & button:last-of-type:hover {
    & svg {
      fill: var(--fill-delete-icon);
    }
  }
`,T=a`
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
  }

  & p {
    text-align: center;
    font-size: 18px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.44px;
    margin-bottom: 20px;
  }

  & span {
    margin-bottom: auto;
    font-family: Arial;
    font-size: 22px;
    letter-spacing: 0.44px;
    color: var(--edit-color);
  }
`,A=a`
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
`,G=({onDelete:o,productId:r,title:t})=>i("div",{css:T,children:[e("h2",{children:"Ви збираєтесь видалити продукт!"}),e("p",{children:"Підтвердіть видалення продукта:"}),t&&e("span",{children:t}),e("button",{type:"button",onClick:()=>o(r),css:A,children:"Підтвердити"})]}),f=document.querySelector("#portal-root"),N=({productId:o,title:r,setIsAdvertDeleted:t})=>{const[h,l]=k.useState(!1),p=P(),c=$(),s=n=>{n.stopPropagation(),p(z(o)).then(()=>{c(`/admin/edit-advert/:${o}`)})},d=n=>{p(E(n)).then(()=>{t?t(x=>!x):c("/store")})};return e(b,{children:i(b,{children:[i("div",{css:H,children:[e("button",{type:"button",onClick:s,children:e(_,{})}),e("button",{type:"button",onClick:n=>{n.stopPropagation(),l(!0)},children:e(D,{})})]}),h&&f&&M.createPortal(e(C,{setIsOpen:l,children:e(G,{onDelete:d,productId:o,title:r})}),f)]})})},K=({show:o,handleOnClickCard:r,item:t,width:h,setIsAdvertDeleted:l,type:p,widthContainer:c})=>{const{id:s,title:d}=t,u=I(j),n="imageUrls"in t&&t.imageUrls.length>0?t.imageUrls[0].img_url:"image_url"in t?t.image_url:"",x="variations"in t&&t.variations.length>0?t.variations[0].price:"price"in t?t.price:0,m="variations"in t&&t.variations.length>0?t.variations[0].discount:null;return e(Z,{widthContainer:c,show:o,onClick:()=>s!==void 0&&r&&r(s),children:i("div",{style:{display:"flex",flexDirection:"column",height:"100%"},children:[i(F,{children:[e("img",{src:n,alt:"",style:{width:`${h}`},onError:S}),p!=="popularity"&&u&&e(N,{productId:s,title:d,setIsAdvertDeleted:l})]}),i(L,{children:[e(U,{children:d}),e(O,{price:Number(x),discount:m,style_item:"storePage"})]})]})})};export{K as P,N as a};
//# sourceMappingURL=ProductCard-C4G9q0qv.js.map
