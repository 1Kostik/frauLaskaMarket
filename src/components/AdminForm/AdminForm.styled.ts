import { css } from "@emotion/react";

export const pageTitle = css`
  padding-bottom: 40px;
  font-size: 32px;
  font-weight: 600;
  letter-spacing: 0.64px;
  color: var(--text-light-grey);
`;

export const formContainer = css`
  display: flex;
  column-gap: 20px;

  & .errorContainer {
    position: relative;
  }
`;

export const formDataWrapper = css`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  width: 844px;

  color: grey;

  & input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

export const blockWrapper = css`
  padding: 16px;
  border-radius: 16px;
  border: 1px solid var(--border-light-grey);

  & h2 {
    min-width: 312px;
    font-size: 24px;
    font-weight: 600;
    line-height: 120%;
    letter-spacing: 0.48px;
    color: var(--text-light-grey);
  }
`;

export const categoryBlock = css`
  display: flex;
  column-gap: 20px;
`;

export const categoryFields = css`
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 24px;
`;

export const inputFieldStyle = css`
  width: 100%;
  padding: 12px;
  border-radius: 16px;
  border: 1px solid var(--border-gray);
  background-color: transparent;

  font-family: Fixel;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-dark-grey);

  &::placeholder {
    color: var(--text-dark-grey);
  }
`;

export const titleImagesWrapper = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const addImagesBtn = css`
  width: 169px;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--border-light-grey);

  font-family: Fixel;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-light-grey);

  cursor: pointer;

  & ~ input {
    display: none;
  }
`;

export const imagesContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
`;

export const imageWrapper = css`
  position: relative;

  border: 1px solid var(--border-color);
  border-radius: 16px;

  &:first-of-type {
    border-radius: 16px;
    border: 1px solid green;

    & .main-photo-btn {
      background-color: green;
    }
  }

  & .main-photo-btn {
    position: absolute;
    top: 8px;
    left: 8px;
    width: 40px;
    height: 40px;
    border-radius: 8px;
    background-color: var(--bg-btn-grey);
  }
  & .close-btn {
    position: absolute;
    right: 8px;
    top: 8px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    border-radius: 8px;

    background-color: var(--bg-btn-grey);

    & path {
      fill: var(--bg-black);
    }
  }
`;

export const imageThumb = css`
  width: calc((800px - (3 * 14px)) / 4);
  height: 174px;
  border-radius: 15px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const volumeStyle = css`
  padding: 10px;
  border: 1px solid green;
`;

export const buttonStyle = css`
  width: 100%;
  padding: 12px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-btn-grey);

  font-size: var(--Typography-sm, 14px);
  font-weight: 600;
  line-height: 1;
  letter-spacing: 0.1px;
  color: var(--text-black);

  background-color: var(--bg-btn-grey);
`;

export const submitWrapper = css`
  width: 420px;
  height: 74px;
  ${blockWrapper}

  & button {
    ${buttonStyle}
  }
`;

export const errorStyle = css`
  position: absolute;
  font-size: 14px;
  padding-top: 4px;
  color: var(--error-color);
`;
