import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const sectionStyle = css`
  padding: 80px 0px 24px 0px;
  background: var(--bg-black);
  ${onTablet(css`
    padding: 80px 0px 24px 0px;
  `)}
  ${onDesktop(css`
    padding: 80px 0px 40px 0px;
  `)}
`;
export const imgGalery = css`
  width: 100%;
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  background: var(--bg-btn-grey);
`;
export const title = css`
  width: 100%;
  color: var(--text-light-grey);
  font-size: 160px;
`;
export const imgStyles = css`
  width: 420px;
  height: 294px;
  & img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;
