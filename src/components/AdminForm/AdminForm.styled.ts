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
  row-gap: 30px;

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

export const commonBlock = css`
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
  color: var(--text-light-grey);

  &::placeholder {
    color: var(--text-light-grey);
  }
`;

export const textAreaStyle = css`
  resize: vertical;
  width: 478px;
  min-height: 70px;
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

  transition: var(--effectDuration);

  &:hover {
    border: 1px solid var(--color, #a5a5a5);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
    color: var(--btn-show-more-hover);
  }

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
      /* background-color: green; */
    }
  }

  & .main-photo-btn {
    position: absolute;
    top: 8px;
    left: 8px;

    width: 40px;
    height: 40px;
    padding: 8px;
    border-radius: 8px;
    background-color: var(--bg-btn-grey);

    & path {
      fill: var(--bg-deep-black);
    }
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

export const trashCan = css`
  width: 24px;
  height: 24px;
  fill: var(--text-light-grey);
`;

export const buttonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  padding: 10px 16px;
  border-radius: 24px;
  border: 1px solid var(--bg-btn-grey);

  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  letter-spacing: 0.1px;
  color: var(--text-black);

  background-color: var(--bg-btn-grey);
  transition: var(--effectDuration);

  &:hover {
    background: var(--btn-show-more-hover);
    border: 1px solid var(--btn-show-more-hover);
    box-shadow: -4px 4px 4px 0px rgba(30, 51, 86, 0.08);
  }

  & svg {
    width: 20px;
    height: 20px;
    margin-left: 8px;
    fill: var(--text-black);
  }
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

  &.text-area-error {
    bottom: -12px;
  }

  &.images-error {
    right: 16px;
    bottom: 16px;
  }
`;
