import { css } from "@emotion/react";
import styled from "@emotion/styled";
export const P = styled.p`
  width: 100%;
  height: 24px;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 133.333% */
  letter-spacing: 1px;
`;
export const old_price = css`
  height: 24px;
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 120%; /* 133.333% */
  letter-spacing: 1px;
  text-decoration: line-through;
`;