import { css } from "@emotion/react";
// import styled from "@emotion/styled";

export const tableStyles = css`
  width: 100%;
  height: 100%;
  /* border: 1px solid white; */
  & th,
  td {
    text-align: left;
  }
  & th:nth-child(9),
  & th:last-child {
    text-align: center;
  }

  & td:nth-child(9) {
    text-align: center;
    height: 24px;
    cursor: pointer;
  }
  & td:nth-child(9):hover {
    transform: scale(1.4);
    transition: transform 0.3s ease;
  }
  & td:last-child {
    display: flex;
    justify-content: center;
    height: 24px;
    align-items: center;
    cursor: pointer;
  }
  & td:last-child:hover {
    transform: scale(1.4);
    transition: transform 0.3s ease;
  }
  & td:nth-child(7),
  & td:nth-child(8) {
    overflow: visible;
    cursor: pointer;
  }
`;
export const theadStyles = css`
  width: 1284px;
  height: 30px;
  display: block;
`;
export const trHeadsStyles = css`
  width: 100%;
  height: 100%;
  border-bottom: 1px solid white;
  display: block;
`;
export const thHeadsStyles = css`
  width: 127px;
  height: 24px;
  overflow: hidden;
  color: var(--White, #d7d7d7);
  font-variant-numeric: stacked-fractions ordinal;
  font-feature-settings: "case" on, "rvrn" on, "hist" on;
  text-overflow: ellipsis;

  /* Body/Body Medium */
  font-family: Arial;
  font-size: var(--Typography-sm, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 24px; /* 171.429% */
  letter-spacing: 0.25px;
`;
export const tbodyStyles = css`
  display: block;
  margin-top: 10px;
`;
export const trtbodyStyles = css``;
export const tdArrow = css`
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;
export const tdTrash = css`
  display: unset;
  font-size: 16px;
  color: var(--White, #d7d7d7);
`;
