import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const SearchContainer = styled.div`
  display: none;
  ${onTablet(css`
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
  `)}
  ${onDesktop(css``)}
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 20px; /* 166.667% */
  letter-spacing: 0.1px;
  border-radius: 24px;
  padding: 9px 15px;
  border: 1px solid var(--bg-light-grey);
  background: var(--bg-black);
  transition: var(--effectDuration);
  &:hover {
    color: var(--text-black);
    background-color: var(--bg-light-grey);
  }
`;
export const Section = styled.section`
  padding: 0px 20px 24px 20px;
  background: var(--bg-black);
  ${onTablet(css`
    padding: 0px 40px 24px 40px;
  `)}
  ${onDesktop(css`
    padding: 0px 78px 40px 78px;
  `)}
`;
export const MaineContainer = styled.div`
  width: 320px;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  ${onTablet(css`
    width: 688px;
    gap: 20px;
  `)}
  ${onDesktop(css`
    width: 1284px;
    gap: 24px;
  `)}
`;
export const Wrapper = styled.div`
  ${onTablet(css`
    display: flex;
    justify-content: space-between;
    gap: 5px;
  `)};
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;
export const ProductListContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${onTablet(css`
    display: flex;
    flex-wrap: wrap;
    flex-direction: unset;
    width: 100%;
    gap: 20px;
  `)}
  ${onDesktop(css`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
  `)}
`;
