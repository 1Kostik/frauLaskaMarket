import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";

export const Section = styled.header`
  width: 100vw;
  height: 72px;
  padding: 16px 0;
  background-color:var(--bg-main-page);
  /* @media (min-width: 768px) {
    height: 80px;
    padding: 20px 0;
  } */
  @media (min-width: 1440px) {
    height: 80px;
    padding: 20px 0;
  }
`;

export const LogoIcon = styled(Logo)`
  width: 49.5px;
  height: 40px;
  transition: var(--effectDuration);
  cursor: pointer;
  & path {
    fill: var(--bg-black);
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
export const Nav = styled(NavLink)`
  color: var(--text-black);
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
  display: flex;
  align-items: center;
  width: 1284px;
  height: 40px;
  gap: 8px;
`;
export const Cart = styled(Link)`
  text-decoration: none;
`;
export const cartStyles = css`
  transition: var(--effectDuration);
  & path {
    fill: var(--bg-black);
  }
  &:hover {
    & path {
      fill: var(--fill-cart-hover);
    }
  }
  &:active{
border-radius: 50%;
background-color: var(--bg-btn-grey);
    & path {
      fill: var(--bg-black);
    }
  }
`;
