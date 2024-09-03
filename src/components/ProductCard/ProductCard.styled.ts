import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";
interface Props {
  show?: boolean;
}
export const CardWrapper = styled.div``;

export const Container = styled.div<Props>`
  border-radius: 16px;
  box-sizing: border-box;
  width: 100%;
  ${({ show }) =>
    onTablet(css`
      width: calc((100% - ((${show ? 1 : 3}) - 1) * 10px) / ${show ? 1 : 2});
      height: 391px;
    `)}
  ${({ show }) =>
    onDesktop(css`
      width: calc((100% - ((${show ? 3 : 4}) - 1) * 20px) / ${show ? 3 : 4});
      height: 396px;
    `)}
`;

export const ImageContainer = styled.div`
  position: relative;
  width: 100%;
  height: 336px;
  border-radius: 16px;
  background: #b7b7b7;
  margin-bottom: 8px;
  overflow: hidden;
`;

export const interfaceStyle = css`
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
      fill: #ff000080;
    }
  }
  & button:last-of-type:hover {
    & svg {
      fill: yellow;
    }
  }
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const H5 = styled.h5`
  width: 100%;
  height: 24px;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px; /* 133.333% */
  letter-spacing: 0.15px;
`;


