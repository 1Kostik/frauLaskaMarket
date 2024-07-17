import { css } from "@emotion/react";

export const interfaceStyle = css`
  z-index: 5;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;

  & button {
    padding: 8px;
    border-radius: 100%;
    background-color: var(--bg-tranparent);
    transition: var(--effectDuration);

    & svg {
      width: 20px;
      height: 20px;
    }

    &:hover {
      background-color: var(--btn-show-more-hover);
    }
  }

  & button:first-of-type:hover {
    & svg {
      fill: yellow;
    }
  }
  & button:last-of-type:hover {
    & svg {
      fill: var(--fill-delete-icon);
    }
  }
`;
