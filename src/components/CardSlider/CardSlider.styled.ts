import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

export const swiper = css`
  width: 340px;
  height: 524px;

  ${onTablet(css`
    width: 728px;
    height: 528px;
  `)}

  ${onDesktop(css`
    width: 1360px;
    height: 740px;
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
export const Container = styled.div`
  width: 100%;
  height: 640px;
  padding-top: 24px;
  padding-bottom: 24px;
  ${onDesktop(css`
    height: 900px;
    padding-top: 40px;
    padding-bottom: 40px;
  `)}
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
export const ArrowContainer = styled.div`
  display: flex;
  gap: 6px;
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
