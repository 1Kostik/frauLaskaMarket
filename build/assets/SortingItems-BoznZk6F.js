import{r as i,n as s,a as H,c as p,o as I,ae as J,j as l,b as v,af as K}from"./index-C641oKLp.js";import{S as Q}from"./arrow-down-select-Bh-MySUy.js";var D;function m(){return m=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},m.apply(null,arguments)}var V=function(t){return i.createElement("svg",m({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t),D||(D=i.createElement("path",{fill:"#D7D7D7",d:"m11.297 9-4.59 4.59A.996.996 0 1 0 8.117 15l3.89-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41L12.707 9a.996.996 0 0 0-1.41 0"})))},E;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)({}).hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(null,arguments)}var X=function(t){return i.createElement("svg",w({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t),E||(E=i.createElement("path",{fill:"#D7D7D7",d:"m8.6 15.6-4.2-4.2L3 12.8l5.6 5.6 12-12L19.2 5z"})))};const Y=s.div`
  cursor: pointer;
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
`;s.h4`
  display: ${({isNone:e})=>e?"none":""};
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
`;const Z=s.div`
  position: relative;
  height: ${({height:e})=>e||"40px"};
  width: ${({widthContainer:e})=>e||"100%"};
`,T=s.ul`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 8px;
  top: ${({top:e})=>e||"44px"};
  right: 0px;
  width: ${({width:e})=>e||"100%"};
  height: auto;
  border: ${({border:e})=>e||"1px solid #d7d7d7"};
  border-radius: 12px;
  padding: 8px;
  background: ${({backGround:e})=>e||"var(--bg-black)"};
  z-index: 100;
  transition: var(--effectDuration);
`,M=s.li`
  width: 204px;
  color: ${({color:e})=>e||"var(--text-light-grey)"};
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  cursor: pointer;
`,G=s.div`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${({padding:e})=>e||"8px 17px 8px 17px"};
  align-items: center;
  justify-content: ${({justifyContent:e})=>e||"space-between"};
  border-radius: ${({borderRadius:e})=>e||"24px"};
  gap: 6px;
  border: ${({border:e})=>e||"1px solid #d7d7d7"};
  background: ${({isOpen:e,backGround:t})=>e?"var(--bg-light-grey)":t||"var(--bg-black)"};
`,W=s.p`
  width: ${({disableWidth:e,isOpenSearch:t,widthTagP:n})=>e||(t?"14px":n||"100%")};
  max-width: ${({widthTagP:e})=>e||"180px"};
  color: ${({isOpen:e,color:t})=>e?"var(--text-black)":t||"var(--text-light-grey)"};
  text-align: right;
  font-family: Fixel;
  font-size: ${({fontSize:e})=>e||"12px"};
  font-style: normal;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.1px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${({disableWidth:e,isChange:t})=>H(p`
      width: ${e||(t?"38px":"100%")};
      max-width: unset;
    `)};
  ${({disableWidth:e,widthTagP:t,fontSize:n})=>I(p`
      width: ${e||t||"100%"};
      font-size: ${n||"14px"};
    `)}
`,ee=e=>p`
  & path {
    fill: ${e||"var(--bg-light-grey)"};
  }
`,te=s.div`
  display: flex;
  align-items: center;
  gap: ${({gap:e})=>e||"14px"};
  width: 242px;
  height: 24px;
`,ne=s.div`
  width: 24px;
  height: 24px;
`,re=e=>p`
  & path {
    fill: ${e||"var(--bg-black)"};
  }
`,ae=e=>p`
  & path {
    fill: ${e||"var(--bg-light-grey)"};
  }
`,ie=async(e,t)=>{await J(e,t)},ge=({width:e,idOrders:t,widthTagP:n,widthContainer:a,height:j,border:A,options:c,padding:L,top:z,gap:_,color:g,fontSize:U,borderRadius:F,justifyContent:R,backGround:$,isOpenSearch:y,isOpenFilter:N,disableWidth:O,setSelectedOption:h,selectedOption:x,setIsOpenModal:f,disable:b})=>{const[o,d]=i.useState(!1),[P,S]=i.useState(!1),k=i.useRef(null),C=i.useRef(!0);i.useEffect(()=>{C.current&&(h&&c&&c.length>0&&(h(c[0]),S(!0)),C.current=!1);const r=u=>{k.current&&!k.current.contains(u.target)&&d(!1)};return document.addEventListener("mousedown",r),()=>{document.removeEventListener("mousedown",r)}},[h,c]);const q=()=>{b||d(r=>!r)},B=r=>{r==="Сплачено"&&K(Number(t)),h&&(h(r),S(!0),d(!1),f&&r==="Відхилено"?f(!0):f&&f(!1)),t&&r==="Відправлено"&&ie(t,r)};return l(Y,{children:v(Z,{height:j,widthContainer:a,children:[v(G,{onClick:q,isOpen:o,padding:L,border:A,borderRadius:F,justifyContent:R,backGround:$,children:[l(W,{widthTagP:n,isOpen:o,isChange:N&&y,isOpenSearch:y,disableWidth:O,color:g,fontSize:U,children:x||""}),o&&!b?l(V,{css:re(g)}):l(Q,{css:ae(g)})]}),o&&l(T,{width:e,color:g,backGround:$,top:z,children:c&&c.map((r,u)=>v(te,{gap:_,children:[l(ne,{children:P&&x===r&&l(X,{css:ee(g)})}),l(M,{onClick:()=>B(r),color:g,children:r},u)]},r+`${u}`))})]})})};export{V as S,ge as a,ie as u};
//# sourceMappingURL=SortingItems-BoznZk6F.js.map
