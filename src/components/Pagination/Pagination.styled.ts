import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 40px;
margin-top: 60px;
`;
export const PaginationContainer = styled.ul`
  display: flex;
  gap: 12px;
  width: 100%;
  height: 100%;

  align-items: center;
  justify-content: center;
  & button {
    background: inherit;
    color: var(--text-light-grey);
    font-family: "CentSchbkCyrill BT";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 16px; /* 133.333% */
    letter-spacing: 0.5px;
    padding:4px 8px;
    &:active{
        background: var( --bg-light-grey);
        color: var(--text-black);
        border-radius: 50%;
    }
  }
`;
