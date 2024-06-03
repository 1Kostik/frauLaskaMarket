/** @jsxImportSource @emotion/react */
import React from "react";
import { containerStyles } from "@styles/variables";

import { Section, LogoIcon } from "./Header.styled";

const Header = () => {
  return (
    <Section>
      <div css={containerStyles}>
        
          <LogoIcon />
     
        <nav></nav>
      </div>
    </Section>
  );
};

export default Header;
