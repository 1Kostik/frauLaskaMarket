import HeroSection from "@components/HeroSection/HeroSection";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCart, selectCartTotalQuantity } from "../../redux/selectors";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/slice";
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
  svgClose,
  TitleContainer,
  TitleInfo,
  TitleItem,
  TitlePayment,
  Wrapper,
  WrapperTitle,
} from "./CartPage.styled";

import CartForm from "@components/CartForm";
import { ReactComponent as Close } from "@assets/icons/close2.svg";

interface Item {
  id: number;
  img: string;
  title: string;
  code: number;
  price: number;
  count: number;
  total: number;
  discount: number;
  color: string;
  size: string;
}
const CartPage = () => {
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const totalQuantity = useAppSelector(selectCartTotalQuantity);

  const initialItemsWithTotal = cart.map(
    ({
      id,
      title,
      img,
      productCode,
      size,
      discount,
      price,
      quantity,
      color,
    }: any) => ({
      id,
      title,
      img,
      code: productCode,
      price,
      discount,
      size,
      count: quantity,
      color,
      total: Math.ceil(price - (price * discount) / 100),
    })
  );
  const [addedItems, setAddedItems] = useState<Item[]>(initialItemsWithTotal);

  const handleAddItem = (id: number, size: string) => {
    setAddedItems((prev) => {
      return prev.map((item) => {
        if (id === item.id && item.size === size) {
          return {
            ...item,
            count: item.count + 1,
            total: item.price - (item.price * item.discount) / 100 + item.total,
          };
        }
        return item;
      });
    });
    dispatch(increaseQuantity({ id, size }));
  };
  const handleDeleteItem = (id: number, size: string) => {
    setAddedItems((prev) => {
      return prev.map((item) => {
        if (id === item.id && item.size === size && item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
            total:
              item.total - (item.price - (item.price * item.discount) / 100),
          };
        }
        return item;
      });
    });
    dispatch(decreaseQuantity({ id, size }));
  };
  const handleRemove = (id: number, size: string) => {
    const productSearch = cart.find(
      (item) => item.id === id && item.size === size
    );
    if (!productSearch) {
      return;
    }
    setAddedItems((prev) => {
      return prev.filter((item) => !(item.id === id && item.size === size));
    });
    dispatch(removeFromCart({ id, size }));
  };
  // const totalCount = addedItems.reduce((acc, item) => {
  //   return acc + item.count;
  // }, 0);
  const totalPrice = addedItems.reduce((acc, item) => {
    return acc + item.total;
  }, 0);

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
                  {addedItems.map((item) => (
                    <ItemInfoContainer key={item.id + item.size}>
                      <ImgContainer>
                        <img src={item.img} alt="" />
                      </ImgContainer>
                      <InfoContainer>
                        <InfoTitle>
                          <TitleItem>{item.title}</TitleItem>
                          <DeleteBtn
                            onClick={() => handleRemove(item.id, item.size)}
                          >
                            <Close css={svgClose} />
                          </DeleteBtn>
                        </InfoTitle>
                        <P>Код товару: №{item.code}</P>
                        <PriceContainer>
                          <BtnContainer>
                            <Decrement
                              onClick={() =>
                                handleDeleteItem(item.id, item.size)
                              }
                            >
                              -
                            </Decrement>
                            <Score>{item.count}</Score>
                            <Increment
                              onClick={() => handleAddItem(item.id, item.size)}
                            >
                              +
                            </Increment>
                          </BtnContainer>
                          <Price>
                            {item.discount > 0 && (
                              <OldPrice>{item.price} ₴</OldPrice>
                            )}
                            <NewPrice>{item.total}₴</NewPrice>
                          </Price>
                        </PriceContainer>
                      </InfoContainer>
                    </ItemInfoContainer>
                  ))}
                </Wrapper>
              </ItemContainer>
              <CartForm />
            </MainInfoContainer>
            <PaymentContainer>
              <TitlePayment>Разом</TitlePayment>
              <InfoPaymentContainer>
                <TitleInfo>
                  {totalQuantity}{" "}
                  {totalQuantity === 1
                    ? "товар"
                    : totalQuantity > 1 && totalQuantity < 5
                    ? "товари"
                    : "товарів"}{" "}
                  на суму:
                </TitleInfo>{" "}
                <InfoPrice>{totalPrice} ₴</InfoPrice>
              </InfoPaymentContainer>
              <Line></Line>
              <InfoWrapperPayment>
                <WrapperTitle>До сплати:</WrapperTitle>{" "}
                <EndPrice>{totalPrice} ₴</EndPrice>
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

/*
{
id:number,
img:string,
title:string,
codeItem:number,
price:number,
count:number,
discount:number,
}


*/
