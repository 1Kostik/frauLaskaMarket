/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import ReactDOM from 'react-dom';
import { containerStyles } from "@styles/variables";
import { ReactComponent as CartIcon } from "../../assets/icons/shopping_bag.svg";
import { ReactComponent as BurgerMenu } from "../../assets/icons/menu.svg";
import {
  Section,
  LogoLink,
  LogoIcon,
  Nav,
  Wrapper,
  Links,
  Cart,
  NavWrapper,
  anchorStyles,
  cartStylesWithColor,
  burgerStyles,
  Button,
  WrapperMenu,
} from "./Header.styled";
import { useLocation } from "react-router-dom";
import ModalMobileHeader from "./ModalMobileHeader/ModalMobileHeader";
const modalPortal = document.querySelector('#portal-root');

const Header = () => {
  const location = useLocation();
  const isAromaSchool = location.pathname === "/aroma-school";
  const isConsultations = location.pathname === "/consultations";
  const isStore = location.pathname === "/store";
  const isCart = location.pathname === "/cart";
  const [isOpen, setIsOpen] = useState(false)
  const handleBurgerMenuClick = ()=>{
    setIsOpen(prev=>!prev)
    }
  const istrue = isCart || isStore || isConsultations || isAromaSchool || isOpen;
  
  return (
    <Section istrue={istrue}>
      <div css={containerStyles}>
        <Wrapper>
          <LogoLink to={"/"}>
            <LogoIcon istrue={istrue.toString()} />
          </LogoLink>
          <NavWrapper>
            <Nav
              to={"/consultations"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={istrue}
            >
              Консультації
            </Nav>
            <Nav
              to={"/aroma-school"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={istrue}
            >
              Школа ароматерапії
            </Nav>
            <a href="#footer" css={anchorStyles(istrue)}>
              Контакти
            </a>
            <Nav
              to={"/store"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={istrue}
            >
              Магазин
            </Nav>
          </NavWrapper>
          <WrapperMenu>
            <Cart to={"/cart"} istrue={istrue}>
              <CartIcon css={cartStylesWithColor(istrue.toString())} />
            </Cart>
            <Links to={"/aroma-school#target-section"} istrue={istrue}>
              Звʼязатись зі мною
            </Links>
            <Button istrue={istrue} onClick={handleBurgerMenuClick}>
              <BurgerMenu css={burgerStyles(istrue.toString())} />
            </Button>
            {isOpen && modalPortal &&
            ReactDOM.createPortal( <ModalMobileHeader />,modalPortal)
           }
          </WrapperMenu>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Header;
