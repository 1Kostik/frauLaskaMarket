import{n as v,c as w,r as h,j as r,b as A,aa as O,ab as M}from"./index-C641oKLp.js";const S=v.div`
  width: 100%;
  height: 40px;
  margin-top: 60px;
`,E=v.ul`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`,_=v.button`
  width: 25px;
  background: ${({currentPage:t})=>t?"var(--bg-light-grey)":"inherit"};
  color: ${({currentPage:t})=>t?"var(--text-black)":"var(--text-light-grey)"};
  font-family: "CentSchbkCyrill BT";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
  padding: 4px 6px;
  border-radius: ${({currentPage:t})=>t?"50%":"none"};

  &:active {
    background: var(--bg-light-grey);
    color: var(--text-black);
  }

  &:hover {
    border-radius: 50%;
    background: var(--bg-light-grey);
    color: var(--text-black);
  }
`,x=w`
  border-radius: 25px;
  padding: 4px 4px;
  width: 25px;
  height: 25px;
  color: var(--text-light-grey);

  &:hover {
    background: var(--bg-light-grey);
    color: var(--text-black);
  }
`,u=w`
  border-radius: 25px;
  padding: 4px 4px;
  width: 25px;
  height: 25px;
  color: var(--text-light-grey);

  &:hover {
    background: var(--bg-light-grey);
    path {
      fill: var(--text-black);
    }
  }
`;var y;function d(){return d=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},d.apply(null,arguments)}var $=function(e){return h.createElement("svg",d({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),y||(y=h.createElement("path",{fill:"#D7D7D7",d:"M3.471 8.667h7.447L7.665 11.92a.67.67 0 0 0 0 .947c.26.26.68.26.94 0l4.393-4.394c.26-.26.26-.68 0-.94l-4.387-4.4a.664.664 0 1 0-.94.94l3.247 3.26H3.471c-.366 0-.666.3-.666.667s.3.667.666.667"})))},f;function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var n in i)({}).hasOwnProperty.call(i,n)&&(t[n]=i[n])}return t},b.apply(null,arguments)}var L=function(e){return h.createElement("svg",b({xmlns:"http://www.w3.org/2000/svg",width:16,height:16,fill:"none"},e),f||(f=h.createElement("path",{fill:"#D7D7D7",d:"M12.528 7.337H5.08l3.253-3.253a.67.67 0 0 0 0-.947.664.664 0 0 0-.94 0L3.001 7.53c-.26.26-.26.68 0 .94l4.393 4.394a.664.664 0 1 0 .94-.94L5.081 8.67h7.446c.367 0 .667-.3.667-.666s-.3-.667-.667-.667"})))};const H=({totalPage:t,countItemPages:e,paginate:i,prevPage:n,nextPage:m,firstPageBtn:k,lastPageBtn:C,currentPage:l,lastPage:p})=>{const a=Math.ceil(t/e),D=()=>{let o,c;if(a<=5)o=0,c=a;else{const g=Math.floor(2.5);l<=g?(o=0,c=5):l+g>=a?(o=a-5,c=a):(o=l-g-1,c=l+g)}return Array.from({length:c-o},(g,j)=>j+o+1)};return r(S,{children:A(E,{children:[r("button",{onClick:()=>k(),style:{visibility:a<3||l===1?"hidden":"visible"},children:r(O,{css:x})}),r("button",{onClick:()=>n(),style:{visibility:l===1?"hidden":"visible"},children:r(L,{css:u})}),D().map(s=>r(_,{onClick:()=>i(s),currentPage:l===s,style:{visibility:a>1?"visible":"hidden"},children:s},s)),r("button",{onClick:()=>m(),style:{visibility:l===p?"hidden":"visible"},children:r($,{css:u})}),r("button",{onClick:()=>C(),style:{visibility:a<3||l===p?"hidden":"visible"},children:r(M,{css:x})})]})})};export{H as P};
//# sourceMappingURL=Pagination-DevYrhYT.js.map
