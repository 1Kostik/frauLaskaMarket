import { css } from "@emotion/react";
import styled from "@emotion/styled";
interface Props {
  isOpen: boolean;
}

export const Container = styled.div`
  width: 312px;
  height: 100%;
  border: 1px solid #d7d7d7;
  border-radius: 16px;
  padding: 26px 20px;
`;

export const H2 = styled.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 32px;
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 32px */
  letter-spacing: 0.64px;
`;

export const svgClose = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;
export const TitleContainer = styled.div`
  width: 272px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 36px;
`;
export const ButtonClose = styled.button`
  width: 40px;
  height: 40px;
  background: inherit;
  display: flex;
  align-items: center;
`;

export const ButtonShow = styled.button`
  width: 40px;
  height: 40px;
  background: inherit;
  padding: 8px;
`;

export const ItemContainer = styled.div<Props>`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  border-bottom: ${({ isOpen }) =>
    isOpen ? "" : "1px solid var(--bg-light-grey)"};
`;
export const SubItemContainer = styled.div<Props>`
  width: 100%;
  height: 40px;
  display: flex;

  &:last-child {
    border-bottom: ${({ isOpen }) =>
      isOpen ? "1px solid var(--bg-light-grey)" : ""};
  }
`;
export const P1 = styled.p`
  width: 175px;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
  white-space: normal;
`;
export const P2 = styled.p`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
`;
export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  /* gap: 8px; */
`;

export const Label = styled.label`
  width: 40px;
  height: 40px;
  padding: 8px;
`;

export const Input = styled.input`
  display: none;
`;
export const svgCheckBox = css`
  & path {
    fill: var(--bg-light-grey);
  }
`;

export const FilterBtn = styled.button`
  width: 100%;
  /* height: 40px; */
  background: inherit;
  padding: 6px 24px;
  border-radius: 24px;
  border: 1px solid var(--bg-light-grey);
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--bg-light-grey);
  color: var(--text-black);
  margin-top: 51px;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.15px;
`;
