/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NavLink, useNavigate } from "react-router-dom";
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
  cartCount,
  addProductStyle,
  btnLogOut,
} from "./Header.styled";

import ModalMobileHeader from "../ModalMobileHeader/ModalMobileHeader";

import { selectCartTotalQuantity } from "@redux/cart/selectors";
import { useAppSelector } from "@redux/hooks";
import { selectToken } from "@redux/auth/selectors";
import { useDispatch, useSelector } from "react-redux";

import { MdOutlinePostAdd } from "react-icons/md";
import { RiLogoutBoxRLine } from "react-icons/ri";

import { logOut } from "@services/servicesApi";
import { useCheckTokenExpiration } from "@hooks/useCheckTokenExpiration";

const modalPortal = document.querySelector("#portal-root");

const colorsHeader = ["transparent", "var(--bg-light-grey)", "var(--bg-black)"];

const Header = () => {
  const checkExpiration = useCheckTokenExpiration();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionColor, setSectionColor] = useState(colorsHeader[0]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const totalQuantity = useAppSelector(selectCartTotalQuantity);
  const token = useSelector(selectToken);

  const show = windowWidth < 1440 ? false : true;

  const handleBurgerMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const istrue = "true";

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const section1 = document.getElementById("section1");
    const section2 = document.getElementById("section2");

    if (scrollY === 0 && !isOpen) {
      setSectionColor(colorsHeader[0]);
      setIsScrolled(false);
      return;
    }
    if (
      section1 &&
      scrollY >= section1.offsetTop &&
      scrollY < section1.offsetTop + section1.offsetHeight
    ) {
      setSectionColor(colorsHeader[1]);
      setIsScrolled(false);
    } else if (
      section2 &&
      scrollY >= section2.offsetTop &&
      scrollY < section2.offsetTop + section2.offsetHeight
    ) {
      setSectionColor(colorsHeader[2]);
      setIsScrolled(true);
    } else if (!section1 && scrollY >= 0 && scrollY < window.innerHeight) {
      setSectionColor(colorsHeader[2]);
      setIsScrolled(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSectionColor(colorsHeader[2]);
      document.body.classList.add("no-scroll");
      document.querySelector("#topBtn")?.classList.add("btn-hide");
    } else {
      document.querySelector("#topBtn")?.classList.remove("btn-hide");
      document.body.classList.remove("no-scroll");
      if (!isScrolled) {
        setSectionColor(colorsHeader[0]);
      }
    }
  }, [isOpen, isScrolled]);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleClickLogOut = async () => {
    checkExpiration();
    try {
      await logOut(dispatch);
      navigate("/");
    } catch (error) {
      console.error("Error during logout process:", error);
    }
  };

  return (
    <Section istrue={istrue} style={{ backgroundColor: sectionColor }}>
      <div css={containerStyles}>
        <Wrapper>
          <LogoLink to={"/"}>
            <LogoIcon istrue={istrue} />
          </LogoLink>
          <NavWrapper>
            <Nav
              to={"/"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={istrue}
            >
              Магазин
            </Nav>
            <Nav
              to={"https://fl.fraulaska.com/?wpm-page=start"}
              className={({ isActive }) =>
                isActive ? "active-link" : "inactive-link"
              }
              istrue={istrue}
              target="_blank"
              rel="noopener noreferrer"
            >
              Навчання
            </Nav>
            <a href="#footer" css={anchorStyles(istrue)}>
              Контакти
            </a>

            {!token && (
              <Nav
                to={"/privacy-policy"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                istrue={istrue}
              >
                Договір публичної оферти
              </Nav>
            )}
            {!token && (
              <Nav
                to={"/payment-delivery"}
                className={({ isActive }) =>
                  isActive ? "active-link" : "inactive-link"
                }
                istrue={istrue}
              >
                Доставка та оплата
              </Nav>
            )}
          </NavWrapper>
          {token && show && (
            <NavLink to="admin/orders" css={addProductStyle(istrue)}>
              Замовлення
            </NavLink>
          )}
          {token && show && (
            <NavLink to="/admin/create-advert" css={addProductStyle(istrue)}>
              <MdOutlinePostAdd />
              Додати товар
            </NavLink>
          )}
          {token && show && (
            <button css={btnLogOut(istrue)} onClick={handleClickLogOut}>
              <RiLogoutBoxRLine />
            </button>
          )}
          <WrapperMenu>
            {!token && (
              <Cart to={"/cart"} istrue={istrue}>
                {totalQuantity > 0 && (
                  <div css={cartCount(istrue.toString())}>{totalQuantity}</div>
                )}
                <CartIcon css={cartStylesWithColor(istrue.toString())} />
              </Cart>
            )}
            {!token && (
              <Links
                to={"https://t.me/frau_laska"}
                istrue={istrue}
                target="_blank"
                rel="noopener noreferrer"
              >
                Звʼязатись зі мною
              </Links>
            )}
            <Button istrue={istrue} onClick={handleBurgerMenuClick}>
              <BurgerMenu css={burgerStyles(istrue.toString())} />
            </Button>
            {isOpen &&
              modalPortal &&
              ReactDOM.createPortal(
                <ModalMobileHeader setIsOpen={setIsOpen} />,
                modalPortal
              )}
          </WrapperMenu>
        </Wrapper>
      </div>
    </Section>
  );
};

export default Header;
