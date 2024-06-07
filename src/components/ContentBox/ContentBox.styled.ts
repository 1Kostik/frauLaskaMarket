import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const box = (
  contentGap: number | number[],
  changeDirection: boolean | undefined,
  type: string | undefined
) => css`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: ${type === "type1" ? "24px 0" : "0"};
  gap: ${Array.isArray(contentGap) ? contentGap[0] : contentGap}px;

  border: ${type === "type2" ? "1px solid var(--border-grey);" : "none"};
  border-radius: 24px;

  ${onTablet(css`
    flex-direction: ${changeDirection ? " row-reverse" : "row"};
    gap: ${Array.isArray(contentGap) ? contentGap[1] : contentGap}px;
  `)}
  ${onDesktop(css`
    gap: ${Array.isArray(contentGap) ? contentGap[2] : contentGap}px;
  `)}
`;

export const textContainer = (
  containerWidth: number | undefined,
  type: string | undefined
) => css`
  width: 100%;
  /* width: 100% width: calc((${containerWidth}px / 2) - 8px); */
  padding: ${type === "type2" ? "24px" : ""};
  color: var(--text-light-grey);

  & h3 {
    margin-bottom: 40px;

    font-size: 18px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.36px;

    ${onDesktop(css`
      font-size: 24px;
      letter-spacing: 0.48px;
    `)}
  }

  & p {
    ${type === "type1" &&
    css`
      font-family: Inter;
      font-size: 18px;
      line-height: 120%;

      ${onDesktop(css`
        font-size: 24px;
      `)}
    `}
    ${type === "type2" &&
    css`
      margin-bottom: 24px;
      font-size: 12px;
      line-height: 24px;
      letter-spacing: 0.25px;

      ${onDesktop(css`
        font-size: 14px;
      `)}
    `}
  }

  & a {
    position: relative;
    display: block;
    width: 98px;
    padding: 10px 0;
    font-family: Fixel;
    font-size: 22px;
    line-height: 32px;
    text-transform: uppercase;
    color: inherit;
    &::after {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      border-bottom: 1px solid var(--text-light-grey);
    }
    &:hover::after {
      border-bottom: 2px solid var(--text-light-grey);
    }
  }
`;

export const imgThumb = (
  textHeight: number | undefined,
  containerWidth: number | undefined,
  isHideMobileImg: boolean | undefined,
  type: string | undefined
) =>
  css`
    display: ${isHideMobileImg ? "none" : "block"};
    width: 100%;
    height: ${textHeight}px;
    border-radius: 32px;
    overflow: hidden;

    ${onTablet(css`
      display: block;
    `)}

    ${type === "type2" &&
    css`
      height: 320px;
      ${onTablet(css`
        height: 397px;
      `)}
      ${onDesktop(css`
        height: 636px;
      `)}
    `}

    /* width: calc((${containerWidth}px / 2) - 8px); */

    & img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
