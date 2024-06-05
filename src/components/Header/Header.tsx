/** @jsxImportSource @emotion/react */
import React from "react";
import { containerStyles } from "@styles/variables";

import { Section, LogoIcon } from "./Header.styled";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  return (
    <Section>
      <div css={containerStyles}>
        <LogoIcon />
        <nav>
          <NavLink to={"/consultations"}>Консультації</NavLink>
          <NavLink to={"/aroma-school"}>Школа ароматерапії</NavLink>
          <NavLink to={"/#target-section"}>Контакти</NavLink>
          <NavLink to={"/store"}>Магазин</NavLink>
          <Link to={"/cart"}>Корзина</Link>
          <Link to={"/aroma-school#target-section"}>Звʼязатись зі мною</Link>
        </nav>
      </div>
    </Section>
  );
};

export default Header;
