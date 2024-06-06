import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";
import { Link, NavLink } from "react-router-dom";
import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

// export const Wrapper = styled.div`
//   position: absolute;
//   top: 72px;
//   left: 0;
//   width: 360px;
//   height: 640px;
//   background-color: red;
// `;
export const Wrapper = styled.div`
  position: fixed;
  top: 72px; /* Учитываем высоту фиксированного хедера */
  left: 0;
  width: 100%;
  height: calc(100vh - 72px); /* Высота окна минус высота хедера */
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: black;
  pointer-events: auto;
`;

export const Overlay = styled.div`
  position: fixed;
  top: 72px; /* Учитываем высоту фиксированного хедера */
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 998;
`;
