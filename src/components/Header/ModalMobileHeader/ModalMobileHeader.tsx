import React from "react";
import { Overlay, Wrapper } from "./ModalMobileHeader.styled";

const ModalMobileHeader = () => {
  return (
    <Wrapper>
        <h1 style={{color:"white",fontSize:"25px",zIndex:'1000'}}>ModalMobileHeader</h1> 
        <Overlay/>     
    </Wrapper>
  );
};

export default ModalMobileHeader;
