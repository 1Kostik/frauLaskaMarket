import { css } from "@emotion/react";

export const formWrapper = css`
  display: flex;
  flex-direction: column;
  row-gap: 16px;

  color: grey;

  & input[type="number"]::-webkit-inner-spin-button,
  input[type="number"]::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &  button {
    color: gold;
  }
`;

export const imagesContainer = css`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
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
    width: 20px;
    height: 20px;
    background-color: pink;
  }
  & .close-btn {
    position: absolute;
    right: 8px;
    top: 8px;
    padding: 2px;
    border-radius: 100%;
    background-color: var(--btn-show-more-hover);
  }
`;

export const imageThumb = css`
  width: 150px;
  height: 150px;
  border-radius: 15px;
  overflow: hidden;

  & img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const errorStyle = css`
  color: red;
  font-size: 14px;
  margin-top: 4px;
  background-color: pink;
`;

export const inputPhotos = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 150px;
  height: 150px;
  border-radius: 16px;
  border: 1px solid var(--border-color);
  color: var(--text-light-grey);

  & ~ input {
    display: none;
  }
`;

export const volumeStyle = css`
padding: 10px;
border: 1px solid green;


` 

