import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";
interface Props {
  isMainPage: boolean;
}
export const swiper = css`
  width: 340px;
  height: 524px;
  img {
    object-fit: cover;
  }
  ${onTablet(css`
    width: 728px;
    height: 528px;
  `)}

  ${onDesktop(css`
    width: 1360px;
    height: 740px;
  `)}
`;
export const reviews = css`
  width: 343px;
  height: 456px;
  img {
    object-fit: cover;
  }
  ${onTablet(css`
    width: 728px;
    height: 456px;
  `)}

  ${onDesktop(css`
    width: 1360px;
    height: 456px;
  `)}
`;
export const TitleContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  height: 40px;
  align-items: center;
  justify-content: space-between;
  ${onTablet(css``)}
  ${onDesktop(css`
    margin-bottom: 40px;
  `)}
`;
export const Container = styled.div<Props>`
  width: 100%;
  height: ${({ isMainPage }) => (isMainPage ? "640px" : "563px")};
  padding-top: 24px;
  padding-bottom: 24px;
  ${({ isMainPage }) =>
    isMainPage
      ? onDesktop(css`
          height: 900px;
          padding-top: 40px;
          padding-bottom: 40px;
        `)
      : onDesktop(css`
          height: 616px;
          padding-top: 40px;
          padding-bottom: 40px;
        `)};
`;
export const arrowLeft = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;
export const arrowRight = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;
export const ArrowContainer = styled.div<Props>`
  display: flex;
  gap: ${({ isMainPage }) => (isMainPage ? "6px" : "12px")};
  ${onTablet(css`
    gap: 12px;
  `)}
`;

export const Button = styled.button`
  background: transparent;
`;

export const H2 = styled.h2`
  color: var(--text-light-grey);
  font-size: 22px;
  font-family: Fixel;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 22px */
  letter-spacing: 0.44px;
  ${onDesktop(css`
    font-size: 32px;
  `)}
`;
