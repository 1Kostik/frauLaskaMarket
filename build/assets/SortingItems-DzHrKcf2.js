import{r,n as s,a as I,c as h,o as J,ae as K,j as l,e as w,af as Q}from"./index-BYwag9Lo.js";import{S as V}from"./arrow-down-select-BalVnK-g.js";var E;function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},$.apply(null,arguments)}var X=function(t){return r.createElement("svg",$({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t),E||(E=r.createElement("path",{fill:"#D7D7D7",d:"m11.297 9-4.59 4.59A.996.996 0 1 0 8.117 15l3.89-3.88 3.88 3.88a.996.996 0 1 0 1.41-1.41L12.707 9a.996.996 0 0 0-1.41 0"})))},j;function y(){return y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)({}).hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},y.apply(null,arguments)}var Y=function(t){return r.createElement("svg",y({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none"},t),j||(j=r.createElement("path",{fill:"#D7D7D7",d:"m8.6 15.6-4.2-4.2L3 12.8l5.6 5.6 12-12L19.2 5z"})))};const Z=s.div`
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
`;const T=s.div`
  position: relative;
  height: ${({height:e})=>e||"40px"};
  width: ${({widthContainer:e})=>e||"100%"};
`,M=s.ul`
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
`,G=s.li`
  width: 204px;
  color: ${({color:e})=>e||"var(--text-light-grey)"};
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  cursor: pointer;
`,O=s.div`
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
  ${({disableWidth:e,isChange:t})=>I(h`
      width: ${e||(t?"38px":"100%")};
      max-width: unset;
    `)};
  ${({disableWidth:e,widthTagP:t,fontSize:n})=>J(h`
      width: ${e||t||"100%"};
      font-size: ${n||"14px"};
    `)}
`,ee=e=>h`
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
`,ae=e=>h`
  & path {
    fill: ${e||"var(--bg-black)"};
  }
`,re=e=>h`
  & path {
    fill: ${e||"var(--bg-light-grey)"};
  }
`,ie=async(e,t)=>{await K(e,t)},ge=({width:e,idOrders:t,widthTagP:n,widthContainer:i,height:A,border:L,options:c,padding:z,top:_,gap:U,color:g,fontSize:R,borderRadius:N,justifyContent:P,backGround:b,isOpenSearch:p,isOpenFilter:v,disableWidth:q,setSelectedOption:f,selectedOption:m,setIsOpenModal:o,disable:S})=>{const[u,x]=r.useState(!1),[B,k]=r.useState(!1),C=r.useRef(null),D=r.useRef(!0);r.useEffect(()=>{(v||p)&&x(!1)},[v,p]),r.useEffect(()=>{D.current&&(f&&c&&c.length>0&&(f(c[0]),k(!0)),D.current=!1);const a=d=>{C.current&&!C.current.contains(d.target)&&x(!1)};return document.addEventListener("mousedown",a),()=>{document.removeEventListener("mousedown",a)}},[f,c]);const F=()=>{S||x(a=>!a)},H=a=>{a==="Сплачено"&&Q(Number(t)),f&&(f(a),k(!0),x(!1),o&&a==="Відхилено"?o(!0):o&&o(!1)),t&&a==="Відправлено"&&ie(t,a)};return l(Z,{children:w(T,{height:A,widthContainer:i,children:[w(O,{onClick:F,isOpen:u,padding:z,border:L,borderRadius:N,justifyContent:P,backGround:b,children:[l(W,{widthTagP:n,isOpen:u,isChange:v&&p,isOpenSearch:p,disableWidth:q,color:g,fontSize:R,children:m||""}),u&&!S?l(X,{css:ae(g)}):l(V,{css:re(g)})]}),u&&l(M,{width:e,color:g,backGround:b,top:_,children:c&&c.map((a,d)=>w(te,{gap:U,children:[l(ne,{children:B&&m===a&&l(Y,{css:ee(g)})}),l(G,{onClick:()=>H(a),color:g,children:a},d)]},a+`${d}`))})]})})};export{X as S,ge as a,ie as u};
//# sourceMappingURL=SortingItems-DzHrKcf2.js.map
