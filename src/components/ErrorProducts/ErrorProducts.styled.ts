import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const error_products = css`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 20px;
  width: 100%;
  min-height: 30vh;
  text-align: center;
`;
export const text = css`
  color: var(--text-light-grey);
  font-size: 20px;
  font-weight: 600;
  line-height: 150%;
  font-family: Fixel;
  ${onTablet(css`
    font-size: 30px;
  `)}
  ${onDesktop(css`
    font-size: 45px;
  `)}
`;
