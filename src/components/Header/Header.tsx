/** @jsxImportSource @emotion/react */
import React from "react";
import { containerStyles } from "@styles/variables";
import {ReactComponent as CartIcon} from "../../assets/icons/cart.svg";
import { Section, LogoIcon, Nav, Wrapper, Links, Cart, NavWrapper, cartStyles } from "./Header.styled";

const Header = () => {
  return (
    <Section>
      <div css={containerStyles}>
        <Wrapper>
          <LogoIcon />
          <NavWrapper>
            <Nav to={"/consultations"}>Консультації</Nav>
            <Nav to={"/aroma-school"}>Школа ароматерапії</Nav>
            <Nav to={"/#target-section"}>Контакти</Nav>
            <Nav to={"/store"}>Магазин</Nav>
          </NavWrapper>
          <Cart to={"/cart"}>
          <CartIcon css={cartStyles}/>
          </Cart>
          <Links to={"/aroma-school#target-section"}>Звʼязатись зі мною</Links>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Header;
