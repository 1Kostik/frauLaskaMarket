import styled from "@emotion/styled";
import { HeroSectionProps } from "./HeroSection";
import { css } from "@emotion/react";
import { onDesktop, onTablet } from "@styles/mixins";

export const Section = styled.section<HeroSectionProps>`
  height: ${({ viewType }) => (viewType === "other" ? "196px" : "640px")};
  padding-top: 72px;
  padding-bottom: ${({ viewType }) => (viewType === "other" ? "60px" : "0")};

  background: ${({ bgImage, viewType }) => {
    switch (viewType) {
      case "main":
        return `url(${bgImage}), linear-gradient(270deg, #e3e3e3 0.2%, #cbcbcb 99.85%)`;
      case "school":
        return `url(${bgImage}), linear-gradient(90deg, #252525 0.1%, #565656 200%)`;
      case "other":
        return `var(--bg-black)`;
      default:
        return;
    }
  }};

  background-repeat: no-repeat;
  background-position: 50% 20px;
  background-size: auto 800px;

  ${({ viewType }) =>
    viewType === "other" &&
    onTablet(css`
      height: 244px;
    `)}
  ${({ viewType }) =>
    viewType === "other"
      ? onDesktop(css`
          height: 340px;
          padding-top: 80px;
        `)
      : onDesktop(css`
          height: 820px;
          padding-top: 80px;
        `)}
`;

export const Container = styled.div<HeroSectionProps>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;

  ${({ viewType }) =>
    viewType === "main"
      ? onTablet(css`
          align-items: center;
        `)
      : onTablet(css`
          align-items: flex-start;
        `)}
`;

export const titleStyle = (viewType?: string) => css`
  font-size: 96px;
  font-weight: 800;
  color: var(--text-white);

  ${onTablet(css`
    font-size: 120px;
  `)}
  ${onDesktop(css`
    font-size: 240px;
  `)}

  ${(viewType === "school" || viewType === "other") &&
  css`
    font-size: 40px;
    font-weight: 900;
    padding-bottom: ${viewType === "school" ? "30px" : "0"};
    color: var(--text-light-grey);

    ${onTablet(css`
      font-size: 88px;
    `)}
    ${onDesktop(css`
      font-size: 160px;
    `)}
  `}
`;

export const paragraphStyle = css`
  font-family: Inter;
  font-size: 18px;
  line-height: 120%;
  color: var(--text-light-grey);
  margin-bottom: 16px;

  ${onDesktop(css`
    font-size: 24px;
    margin-bottom: 20px;
  `)};
`;
