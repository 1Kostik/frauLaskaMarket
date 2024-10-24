import{c as g,r as c,j as i,b as e,ag as b}from"./index-C641oKLp.js";const v=r=>g`
    position: relative;
    width: ${r!=null&&r.width?r==null?void 0:r.width:"500px"};
    height: ${r!=null&&r.height?r==null?void 0:r.height:"400px"};
    padding: ${r!=null&&r.unset?r==null?void 0:r.unset:"24px"};
    border: ${r!=null&&r.unset?r==null?void 0:r.unset:"1px solid var(--border-color)"};
    box-shadow: ${r!=null&&r.unset?r==null?void 0:r.unset:"-4px 4px 8px 0px rgba(30, 51, 86, 0.16)"};
    border-radius: 24px;
    background-color: ${r!=null&&r.unset?r==null?void 0:r.unset:"var(--bg-black)"};

    & .closeBtn {
      position: absolute;
      top: 10px;
      right: 10px;

      border-radius: 50%;
      transition: var(--effectDuration);
      background-color:var(--bg-black-tranparent);
      &:hover {
        background-color: var(--btn-show-more-hover);
        & path {
          fill: var(--bg-deep-black);
        }
      }
    }
  `;var p;function d(){return d=Object.assign?Object.assign.bind():function(r){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var o in a)({}).hasOwnProperty.call(a,o)&&(r[o]=a[o])}return r},d.apply(null,arguments)}var x=function(n){return c.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:40,height:40,fill:"none"},n),p||(p=c.createElement("path",{fill:"#D7D7D7",d:"M27 14.41 25.59 13 20 18.59 14.41 13 13 14.41 18.59 20 13 25.59 14.41 27 20 21.41 25.59 27 27 25.59 21.41 20z"})))};const f=({setIsOpen:r,children:n,myStyles:a})=>{const o=()=>{r(!1)};return c.useEffect(()=>{const u=h=>{h.code==="Escape"&&r(!1)};return document.addEventListener("keydown",u),()=>{document.removeEventListener("keydown",u)}},[r]),i(b,{setIsOpen:o,type:"modal",children:e("div",{css:v(a),children:[i("button",{type:"button",onClick:o,className:"closeBtn",children:i(x,{})}),n]})})};export{f as M,x as S};
//# sourceMappingURL=Modal-BUhM34K4.js.map
