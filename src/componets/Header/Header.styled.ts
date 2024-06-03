import styled from "@emotion/styled";
import { ReactComponent as Logo } from "../../assets/icons/Logo.svg";

export const Section = styled.header`
  width: 100vw;
  height: 72px;
  padding: 16px 0;
  /* @media (min-width: 768px) {
    height: 80px;
    padding: 20px 0;
  } */
  background-color: #d7d7d7;
  @media (min-width: 1440px) {
    height: 80px;
    padding: 20px 0;
  }
`;

export const LogoIcon = styled(Logo)`
  & path {
    fill: red;
  }
`;
// export const LogoIcon = css`
//   svg path {
//     fill: black; // Цвет, который вы хотите установить
//   }
// `;
