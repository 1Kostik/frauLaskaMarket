import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { onDesktop, onTablet } from "@styles/mixins";

export const sectionCart = css`
  padding: 24px 0px;
  width: 100%;
  background: var(--bg-black);
`;
export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: 16px;
  ${onTablet(css`
    width: 312px;
  `)};
`;
export const H2 = styled.h2`
  width: 100%;
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 120%;
  letter-spacing: 0.36px;
`;
export const ItemInfoContainer = styled.div`
  width: 100%;
  height: 120px;
  display: flex;
  border: 1px solid var(--bg-light-grey);
  border-radius: 16px;
  gap: 8px;
  padding: 11px;
  ${onTablet(css`
    width: 360px;
  `)};
  ${onDesktop(css`
    height: auto;
    width: 512px;
    gap: 12px;
    padding: 15px;
  `)};
`;
export const ImgContainer = styled.div`
  width: 96px;
  height: 96px;
  & img {
    width: 96px;
  }
`;
export const InfoContainer = styled.div`
  width: 100%;
`;
export const InfoTitle = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 4px;
`;

export const TitleItem = styled.h2`
  /* width: 100%; */
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.15px;
`;
export const DeleteBtn = styled.button`
  width: 20px;
  height: 20px;
  color: var(--text-light-grey);
`;
export const P = styled.p`
  font-family: Arial;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0.4px;
  color: var(--text-light-grey);
  margin-bottom: 4px;
`;

export const BtnContainer = styled.div`
  width: 93px;
  height: 36px;
  border: 1px solid #171616;
  border-radius: 16px;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const PriceContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const Increment = styled.button`
  width: 40px;
  height: 40px;
  padding: 12px;
  color: var(--text-light-grey);
`;
export const Decrement = styled.button`
  width: 40px;
  height: 40px;
  padding: 12px;
  color: var(--text-light-grey);
`;
export const Score = styled.span`
  border: 1px solid var(--bg-light-grey);
  border-radius: 8px;
  padding: 4px 12px;
  color: var(--text-light-grey);
`;

export const OldPrice = styled.span`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
  text-decoration: line-through;
`;
export const NewPrice = styled.span`
  color: var(--text-light-grey);
  font-family: Fixel;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 110%;
  letter-spacing: 1.6px;
`;
export const Price = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;
export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${onDesktop(css`
    flex-direction: unset;
    gap: 20px;
  `)};
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  ${onTablet(css`
    flex-direction: unset;
    gap: 16px;
  `)};
  ${onDesktop(css`
    width: 844px;
    gap: 20px;
  `)};
`;
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  ${onDesktop(css`
    gap: 20px;
  `)};
`;

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 271px;
  border-radius: 16px;
  border: 1px solid var(--bg-light-grey);
  background: var(--bg-light-grey);
  padding: 16px;
  ${onTablet(css`
    width: 688px;
    height: 271px;
  `)};
  ${onDesktop(css`
    width: 420px;
    height: 278px;
  `)};
`;

export const MainInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${onDesktop(css`
    gap: 40px;
  `)};
`;
