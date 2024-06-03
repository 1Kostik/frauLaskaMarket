/** @jsxImportSource @emotion/react */
import React from "react";
import { containerStyles } from "@styles/variables";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { Section, LogoIcon } from "./Header.styled";

const Header = () => {
  return (
    <Section>
      <div css={containerStyles}>
        
          <Logo css={} />
     
        <nav></nav>
      </div>
    </Section>
  );
};

export default Header;
