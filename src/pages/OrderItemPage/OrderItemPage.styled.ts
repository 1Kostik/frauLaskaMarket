import { css } from "@emotion/react";

export const btnBack = css`
  display: flex;
  color: #d7d7d7;
  font-size: 25px;
`;
export const titleContainer = css`
  width: 100%;
  height: 40px;
  display: flex;

  gap: 8px;
`;
export const title = css`
  color: var(--White, #d7d7d7);
  font-variant-numeric: ordinal;
  font-feature-settings: "case" on, "cpsp" on, "rvrn" on, "hist" on;

  /* H2 */
  -webkit-text-stroke-width: 1;
  -webkit-text-stroke-color: var(--White, #d7d7d7);
  font-family: Fixel;
  font-size: var(--Typography-3xl, 32px);
  font-style: normal;
  font-weight: 600;
  line-height: 100%; /* 32px */
  letter-spacing: 0.64px;
`;
export const wrapper = css`
  display: flex;
  gap: 12px;
  padding: 40px 0px;
`;
export const infoContainer = css`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  /* border: 1px solid white; */
  gap: 24px;
`;
export const itemsContainer = css`
  display: flex;
  flex-direction: column;
  width: 636px;
  height: 80vh;
  /* border: 1px solid white; */
  gap: 8px;
`;
export const titleH2 = css`
  color: var(--White, #d7d7d7);

  /* Label/Label Large */
  font-family: Fixel;
  font-size: var(--Typography-sm, 16px);
  font-style: normal;
  font-weight: 600;
  line-height: 20px; /* 142.857% */
  letter-spacing: 0.1px;
`;
export const infoWrapper = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const infoWrapperBtn = css`
margin-top: 50px;
  display: flex;
  width: 100%;
  justify-content: space-between;
`;
export const description = css`
  width: 312px;
  color: var(--color, #a5a5a5);

  /* Body/Body Small */
  font-family: Rubik;
  font-size: var(--Typography-xs, 14px);
  font-style: normal;
  font-weight: 400;
  line-height: 16px; /* 133.333% */
`;
export const totalAmount = css`
  width: 150px;
  color: var(--White, #d7d7d7);
  text-align: right;
  font-variant-numeric: ordinal;
  font-feature-settings: "case" on, "rvrn" on, "hist" on;

  /* H4 */
  font-family: Fixel;
  font-size: var(--Typography-lg, 18px);
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.15px;
`;
export const tdTrash=css`
font-size: 16px;
color: var(--White, #d7d7d7);
`;
export const btnDelete=css`
font-size: 14px;
/* color: var(--White, #d7d7d7); */
border-radius:16px;
background-color: #d7d7d7;
padding: 5px 23px;

`;