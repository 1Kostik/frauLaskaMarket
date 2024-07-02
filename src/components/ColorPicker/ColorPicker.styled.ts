import { css } from "@emotion/react";

export const colorsWrapper = css`
  display: flex;
  column-gap: 10px;
`;

export const inputStyle = (color: string) => css`
  display: none;

  & + label {
    display: block;
    width: 20px;
    height: 20px;
    background-color: ${color};
    border: 1px solid transparent;
    cursor: pointer;
  }

  &:checked + label {
    border: 1px solid red;
  }
`;


