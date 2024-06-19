import HeroSection from "@components/HeroSection/HeroSection";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectBasket } from "../../redux/selector";
import { removeFromBasket } from "../../redux/slisce";
import { containerStyles } from "@styles/variables";
import {
  BtnContainer,
  Decrement,
  DeleteBtn,
  H2,
  ImgContainer,
  Increment,
  InfoContainer,
  InfoTitle,
  ItemContainer,
  ItemInfoContainer,
  MainContainer,
  MainInfoContainer,
  NewPrice,
  OldPrice,
  P,
  PaymentContainer,
  Price,
  PriceContainer,
  Score,
  sectionCart,
  TitleContainer,
  TitleItem,
  Wrapper,
} from "./CartPage.styled";
import foto from "@assets/images/Photo (2).png";
const CartPage = () => {
  const dispatch = useAppDispatch();
  const [addedItems, setAddedItems] = useState([]);
  const basket = useAppSelector(selectBasket);

  const handleRemove = () => {
    if (basket.length > 0) {
      const id = basket[0].id;
      dispatch(removeFromBasket(id));
    }
  };
  return (
    <>
      <HeroSection viewType={"other"}>Кошик</HeroSection>
      <section css={sectionCart}>
        <div css={containerStyles}>
          <MainContainer>
            <MainInfoContainer>
              <ItemContainer>
                <TitleContainer>
                  <H2>Ваше замовлення</H2>
                </TitleContainer>
                <Wrapper>
                  <ItemInfoContainer>
                    <ImgContainer>
                      <img src={foto} alt="" />
                    </ImgContainer>
                    <InfoContainer>
                      <InfoTitle>
                        <TitleItem>Назва товару</TitleItem>{" "}
                        <DeleteBtn>x</DeleteBtn>
                      </InfoTitle>
                      <P>Код товару: №2147652</P>
                      <PriceContainer>
                        <BtnContainer>
                          <Decrement>-</Decrement>
                          <Score>0</Score>
                          <Increment>+</Increment>
                        </BtnContainer>
                        <Price>
                          <OldPrice>880 ₴</OldPrice>
                          <NewPrice>800 ₴</NewPrice>
                        </Price>
                      </PriceContainer>
                    </InfoContainer>
                  </ItemInfoContainer>
                  <ItemInfoContainer>
                    <ImgContainer>
                      <img src={foto} alt="" />
                    </ImgContainer>
                    <InfoContainer>
                      <InfoTitle>
                        <TitleItem>Назва товару</TitleItem>{" "}
                        <DeleteBtn>x</DeleteBtn>
                      </InfoTitle>
                      <P>Код товару: №2147652</P>
                      <PriceContainer>
                        <BtnContainer>
                          <Decrement>-</Decrement>
                          <Score>0</Score>
                          <Increment>+</Increment>
                        </BtnContainer>
                        <Price>
                          <OldPrice>880 ₴</OldPrice>
                          <NewPrice>800 ₴</NewPrice>
                        </Price>
                      </PriceContainer>
                    </InfoContainer>
                  </ItemInfoContainer>
                  <ItemInfoContainer>
                    <ImgContainer>
                      <img src={foto} alt="" />
                    </ImgContainer>
                    <InfoContainer>
                      <InfoTitle>
                        <TitleItem>Назва товару</TitleItem>{" "}
                        <DeleteBtn>x</DeleteBtn>
                      </InfoTitle>
                      <P>Код товару: №2147652</P>
                      <PriceContainer>
                        <BtnContainer>
                          <Decrement>-</Decrement>
                          <Score>0</Score>
                          <Increment>+</Increment>
                        </BtnContainer>
                        <Price>
                          <OldPrice>880 ₴</OldPrice>
                          <NewPrice>800 ₴</NewPrice>
                        </Price>
                      </PriceContainer>
                    </InfoContainer>
                  </ItemInfoContainer>
                  <ItemInfoContainer>
                    <ImgContainer>
                      <img src={foto} alt="" />
                    </ImgContainer>
                    <InfoContainer>
                      <InfoTitle>
                        <TitleItem>Назва товару</TitleItem>{" "}
                        <DeleteBtn>x</DeleteBtn>
                      </InfoTitle>
                      <P>Код товару: №2147652</P>
                      <PriceContainer>
                        <BtnContainer>
                          <Decrement>-</Decrement>
                          <Score>0</Score>
                          <Increment>+</Increment>
                        </BtnContainer>
                        <Price>
                          <OldPrice>880 ₴</OldPrice>
                          <NewPrice>800 ₴</NewPrice>
                        </Price>
                      </PriceContainer>
                    </InfoContainer>
                  </ItemInfoContainer>
                </Wrapper>
              </ItemContainer>
            </MainInfoContainer>
            <PaymentContainer></PaymentContainer>
          </MainContainer>
        </div>
      </section>
    </>
  );
};

export default CartPage;

// {/* <button
//   onClick={handleRemove}
//   style={{
//     color: "white",
//     padding: "6px 12px",
//     background: "black",
//     border: "1px solid white",
//     borderRadius: "12px",
//   }}
// >видалити
// </button> */}
