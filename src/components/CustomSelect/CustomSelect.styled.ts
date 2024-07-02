import { css } from "@emotion/react";

export const selectWrapper = css`
  width: 200px;
`;

export const selectorStyle = (isShowDropdown: boolean) => css`
  display: flex;
  justify-content: space-between;

  & .arrow {
    transform: ${isShowDropdown ? "rotate(180deg)" : "rotate(0deg)"};
  }
`;

export const dropdown = ( categogy: number | undefined) => css`

  padding: 10px;

  border: 1px solid var(--border-color);
  border-radius: 10px;

  & div {
    position: relative;
    padding-left: 20px;
  }

  & :nth-of-type(${categogy})::before {
    content: "";
    position: absolute;
    left: -5px;
    display: block;
    width: 16px;
    height: 16px;
    background-color: green;
  }
`;
