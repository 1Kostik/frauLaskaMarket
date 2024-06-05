/** @jsxImportSource @emotion/react */
import React from "react";
import { containerStyles } from "@styles/variables";
import { ReactComponent as CartIcon } from "../../assets/icons/cart.svg";
import {
  Section,
  LogoLink,
  LogoIcon,
  Nav,
  Wrapper,
  Links,
  Cart,
  NavWrapper,
  anchorStylesWithColor,
  cartStylesWithColor,
} from "./Header.styled";
import { useLocation } from "react-router-dom";


const Header = () => {
  const location = useLocation();
  const isAromaSchool = location.pathname === "/aroma-school";
  const isConsultations = location.pathname === "/consultations";
  const isStore = location.pathname === "/store";
  const isCart = location.pathname === "/cart";
  const isTrue = isCart || isStore || isConsultations || isAromaSchool;
  // console.log('isTrue :>> ', isTrue);
  return (
    <Section isTrue={isTrue}>
      <div css={containerStyles}>
        <Wrapper>
          <LogoLink to={"/"} >
            <LogoIcon isTrue={isTrue}/>
          </LogoLink>
          <NavWrapper>
            <Nav
              to={"/consultations"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              } isTrue={isTrue}
            >
              Консультації
            </Nav>
            <Nav
              to={"/aroma-school"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              } isTrue={isTrue}
            >
              Школа ароматерапії
            </Nav>
            <a href="#footer" css={anchorStylesWithColor(isTrue)} >
              Контакти
            </a>
            <Nav
              to={"/store"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              } isTrue={isTrue}
            >
              Магазин
            </Nav>
          </NavWrapper>
          <Cart to={"/cart"} >
            <CartIcon css={cartStylesWithColor(isTrue)} />
          </Cart>
          <Links to={"/aroma-school#target-section"}>Звʼязатись зі мною</Links>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Header;
