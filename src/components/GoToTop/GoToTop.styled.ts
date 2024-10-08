import styled from "@emotion/styled";

export const GoToTopWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopButton = styled.div`
  font-size: 2.4rem;
  width: 5rem;
  height: 5rem;
  color: #fff;
  opacity: 0.9;
  background-color: gray;
  box-shadow: 1px 2px 4px 0px rgba(0, 0, 0, 0.216);
  border-radius: 50%;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 999;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: opacity 1.2s ease, transform 1.5s ease;

  .top-btn--icon {
    animation: gototop 1.5s ease-in infinite alternate-reverse;
  }

  @keyframes gototop {
    0% {
      transform: translateY(-0.5rem);
    }
    100% {
      transform: translateY(0.5rem);
    }
  }
`;
