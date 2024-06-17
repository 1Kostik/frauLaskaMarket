import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop } from "@styles/mixins";
interface Props {
  isOpen?: boolean;
  padding?: string;
  borderRadius?: string;
}
interface Ih4 {
  isNone?: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
`;

export const H4 = styled.h4<Ih4>`
  display: ${({ isNone }) => (isNone ? "none" : "")};
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.1px;
`;

export const SelectContainer = styled.div`
  position: relative;
  height: 40px;
  width: 100%;
`;

export const SelectOptionContainer = styled.ul`
  position: absolute;
  top: 44px;
  right: 0px;
  width: 100%;
  height: auto;
  border: 1px solid #d7d7d7;
  border-radius: 12px;
  padding: 8px;
  background: var(--bg-black);
  z-index: 100;
  transition: var(--effectDuration);
`;

export const SelectOption = styled.li`
  color: var(--text-light-grey);
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
  letter-spacing: 0.4px;
`;

export const SelectTitleContainer = styled.div<Props>`
  display: flex;
  width: 100%;
  height: 100%;
  padding: ${({ padding }) => (padding ? padding : "8px 20px 8px 24px")};
  align-items: center;
  justify-content: space-between;
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius : "24px"};
  gap: 12px;
  border: 1px solid #d7d7d7;
  background: ${({ isOpen }) =>
    isOpen ? "var(--bg-light-grey)" : "var(--bg-black)"};
`;

export const P = styled.p<Props>`
  color: ${({ isOpen }) =>
    isOpen ? "var(--text-black)" : "var(--text-light-grey)"};
  text-align: right;
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  ${onDesktop(css`
    font-size: 14px;
  `)}
`;
export const svgCheckedStyles = css`
  &path {
    fill: var(--bg-light-grey);
  }
`;
export const SelectOne = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
  width: 100%;
  height: 40px;
`;

export const SvgContainer = styled.div`
  width: 24px;
  height: 24px;
`;

export const svgArrowUp = css`
  & path {
    fill: var(--bg-black);
  }
`;
export const svgArrowDpwn = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;
