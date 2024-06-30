import styled from "@emotion/styled";
interface PropsBtn {
  currentPage: boolean;
}
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
`;
export const ButtonPage = styled.button<PropsBtn>`
  background: ${({ currentPage }) =>
    currentPage ? "var(--bg-light-grey)" : "inherit"};
  color: ${({ currentPage }) =>
    currentPage ? "var(--text-black)" : "var(--text-light-grey)"};
  font-family: "CentSchbkCyrill BT";
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.5px;
  padding: 4px 8px;
  border-radius: ${({ currentPage }) => (currentPage ? "50%" : "none")};
  &:active {
    background: var(--bg-light-grey);
    color: var(--text-black);
  }
`;
