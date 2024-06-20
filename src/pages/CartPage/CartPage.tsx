import HeroSection from "@components/HeroSection/HeroSection";
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectBasket } from "../../redux/selectors";
import { removeFromBasket } from "../../redux/slice";
import { containerStyles } from "@styles/variables";
import {
  BtnContainer,
  Button,
  CheckBoxContainer,
  Decrement,
  DeleteBtn,
  EndPrice,
  H2,
  H3,
  ImgContainer,
  Increment,
  InfoContainer,
  InfoPaymentContainer,
  InfoPrice,
  InfoTitle,
  InfoWrapperPayment,
  ItemContainer,
  ItemInfoContainer,
  Line,
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
  TitleInfo,
  TitleItem,
  TitlePayment,
  Wrapper,
  WrapperTitle,
} from "./CartPage.styled";
import foto from "@assets/images/Photo (2).png";
import CartForm from "@components/CartForm";

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
              <CartForm />
            </MainInfoContainer>
            <PaymentContainer>
              <TitlePayment>Разом</TitlePayment>
              <InfoPaymentContainer>
                <TitleInfo>1 товар на суму:</TitleInfo>{" "}
                <InfoPrice>800 ₴</InfoPrice>
              </InfoPaymentContainer>
              <Line></Line>
              <InfoWrapperPayment>
                <WrapperTitle>До сплати:</WrapperTitle>{" "}
                <EndPrice>800 ₴</EndPrice>
              </InfoWrapperPayment>
              <CheckBoxContainer>
                <input type="checkbox" />
                <H3>Передзвоніть мені для підтвердження</H3>
              </CheckBoxContainer>
              <Button type="submit" form="orderForm">
                Замовити
              </Button>
            </PaymentContainer>
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
