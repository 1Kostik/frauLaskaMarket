import { css } from "@emotion/react";

export const modalContainer = css`
  position: relative;
  width: 500px;
  height: 400px;
  padding: 24px;
  border: 1px solid var(--border-color);
  box-shadow: -4px 4px 8px 0px rgba(30, 51, 86, 0.16);
  border-radius: 24px;
  background-color: var(--bg-black);

  & .closeBtn {
    position: absolute;
    top: 10px;
    right: 10px;

    border-radius: 50%;
    transition: var(--effectDuration);

    &:hover {
      background-color: var(--btn-show-more-hover);
      & path {
        fill: var(--bg-deep-black);
      }
    }
  }
`;
