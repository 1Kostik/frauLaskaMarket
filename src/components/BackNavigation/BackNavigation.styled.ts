import { css } from "@emotion/react";
import { onDesktop } from "@styles/mixins";

export const navContainer = css`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 50px;
`;
export const previosPageTitle = css`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  cursor: pointer;
  transition: var(--effectDuration);
  &:hover {
    transform: scale(1.05);
  }
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;
export const currentPageTitle = css`
  color: var(--text-active-link-milk);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-decoration: underline;
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;
export const buttonBack = css`
  width: 20px;
  height: 20px;
  display: flex;
  transition: var(--effectDuration);
  &:hover {
    transform: scale(1.2);
  }
`;

export const svgArrowBack = css`
  width: 18px;
  height: 18px;
  color: var(--bg-light-grey);
`;

export const svgArrowRight = css`
  width: 16px;
  height: 16px;
  color: var(--bg-light-grey);
`;
