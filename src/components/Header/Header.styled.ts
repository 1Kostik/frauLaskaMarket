import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { ReactComponent as Burger } from "../../assets/icons/burger-menu.svg";
import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";
interface SectionProps {
  isTrue?: boolean;
}
const combineStyles = (styles1: any, styles2: any) => css`
  ${styles1};
  ${styles2};
`;
export const BurgerMenu = styled(Burger)`
  width: 32px;
  height: 32px;
  padding: 4px;
  ${onDesktop(css`
    display: none;
  `)};
`;
export const Section = styled.header<SectionProps>`
  position: fixed;
  width: 100vw;
  height: 72px;
  padding: 16px 0;
  background-color: ${({ isTrue }) =>
    isTrue ? "var(--bg-black)" : "var(--bg-main-page)"};
  ${onDesktop(css`
    height: 80px;
    padding: 20px 0;
  `)};
`;

export const LogoIcon = styled(Logo)<SectionProps>`
  width: 49.5px;
  height: 40px;
  transition: var(--effectDuration);
  cursor: pointer;
  & path {
    fill: ${({ isTrue }) =>
      isTrue ? "var(--text-light-grey)" : "var(--text-black)"};
  }
  &:hover {
    & path {
      fill: var(--text-active-link-milk);
    }
  }
`;
export const NavWrapper = styled.nav`
  display: flex;
  width: 948px;
  height: 40px;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;
export const Nav = styled(NavLink)<SectionProps>`
  color: ${({ isTrue }) =>
    isTrue ? "var(--text-light-grey)" : "var(--text-black)"};
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.15px;
  text-decoration: none;
  transition: var(--effectDuration);
  &:hover {
    color: var(--text-active-link-milk);
    border-bottom: 3px solid var(--bg-light-grey);
  }
  &.active {
    color: var(--text-active-link-milk);
    border-bottom: 3px solid var(--bg-light-grey);
  }
`;
export const Links = styled(Link)`
  /* display: flex;
  align-items: center;
  justify-content: center; */
  width: 222px;
  height: 40px;
  padding: 6px 24px;
  text-decoration: none;
  border-radius: 100px;
  border: 1px solid var(--bg-light-grey);
  background: var(--bg-light-grey);
  color: var(--text-black);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.15px;
  transition: var(--effectDuration);
  &:hover {
    color: var(--text-light-grey);
    border: 1px solid var(--bg-light-grey);
    background: var(--bg-black);
  }
`;
export const Wrapper = styled.div`
  width: 320px;
  /* height: 40px; */
  display: flex;
  align-items: center;
  ${onDesktop(css`
    width: 1284px;
    height: 40px;
    gap: 8px;
  `)}
`;
export const LogoLink = styled(Link)`
  text-decoration: none;
`;
export const Cart = styled(Link)`
  text-decoration: none;
`;
export const cartStyles = css`
  border-radius: 50%;
  transition: var(--effectDuration);
  & path {
    fill: var(--bg-black);
  }
  &:hover {
    & path {
      fill: var(--fill-cart-hover);
    }
  }
  &:active {
    background-color: var(--bg-btn-grey);
    & path {
      fill: var(--bg-black);
    }
  }
`;
export const cartStylesWithColor = (isTrue: boolean) => css`
  ${combineStyles(
    cartStyles,
    css`
      path {
        fill: ${isTrue ? "var(--bg-light-grey)" : "var(--bg-black)"};
      }
    `
  )};
`;

export const anchorStyles = css`
  color: var(--text-black);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-decoration: none;
  transition: var(--effectDuration);
  &:hover {
    color: var(--text-active-link-milk);
    border-bottom: 3px solid var(--bg-light-grey);
  }
  &.active {
    color: var(--text-active-link-milk);
    border-bottom: 3px solid var(--bg-light-grey);
  }
`;
// Функция для комбинирования стилей

// Используем isTrue для управления цветом текста
export const anchorStylesWithColor = (isTrue: boolean) => css`
  ${combineStyles(
    anchorStyles,
    css`
      color: ${isTrue ? "var(--text-light-grey)" : "var(--text-black)"};
    `
  )};
`;
