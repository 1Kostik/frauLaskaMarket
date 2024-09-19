/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
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
} from "./Header.styled";
import { NavLink, useLocation, useParams } from "react-router-dom";
import ModalMobileHeader from "../ModalMobileHeader/ModalMobileHeader";
import { selectCartTotalQuantity } from "@redux/cart/selectors";
import { useAppSelector } from "@redux/hooks";
// import { getAuth } from "@redux/auth/selectors";
import { MdOutlinePostAdd } from "react-icons/md";
const modalPortal = document.querySelector("#portal-root");

const colorsHeader = ["transparent", "var(--bg-light-grey)", "var(--bg-black)"];
const Header = () => {
  const location = useLocation();
  const { id } = useParams();
  const isAromaSchool = location.pathname === "/aroma-school";
  const isConsultations = location.pathname === "/consultations";
  const isStore = location.pathname === "/store";
  const isProductDetails = location.pathname === `/store/product/${id}`;
  const isCart = location.pathname === "/cart";
  const isOrder = location.pathname === "/order";
  const isAdmin = location.pathname.startsWith("/admin");
  const isOrdered = location.pathname.startsWith("/ordered");
  const isCertificates =location.pathname === "/certificates";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [sectionColor, setSectionColor] = useState(colorsHeader[0]);
  // const cart = useAppSelector(selectCart);
  const totalQuantity = useAppSelector(selectCartTotalQuantity);
  // const isAuth = useAppSelector(getAuth);
  const isAuth = true;

  const handleBurgerMenuClick = () => {
    setIsOpen((prev) => !prev);
  };

  const istrue =
    isCart ||
    isOrder ||
    isStore ||
    isConsultations ||
    isAromaSchool ||
    isOpen ||
    isProductDetails ||
    isAdmin ||
    isOrdered ||
    isScrolled ||
    isCertificates
      ? "true"
      : "false";

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

  return (
    <Section istrue={istrue} style={{ backgroundColor: sectionColor }}>
      <div css={containerStyles}>
        <Wrapper>
          <LogoLink to={"/"}>
            <LogoIcon istrue={istrue} />
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
          {isAuth && (
            <NavLink to="admin/orders" css={addProductStyle(istrue)}>
              Замовлення
            </NavLink>
          )}
          {isAuth && (
            <NavLink to="/admin/create-advert" css={addProductStyle(istrue)}>
              <MdOutlinePostAdd />
              Додати товар
            </NavLink>
          )}
          <WrapperMenu>
            {isAuth && (
              <Cart to={"/cart"} istrue={istrue}>
                {totalQuantity > 0 && (
                  <div css={cartCount(istrue.toString())}>{totalQuantity}</div>
                )}
                <CartIcon css={cartStylesWithColor(istrue.toString())} />
              </Cart>
            )}
            {!isAuth && (
              <Links to={"/aroma-school#target-section"} istrue={istrue}>
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
