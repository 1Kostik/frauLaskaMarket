import HeroSection from "@components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/selectors";
import { removeFromCart } from "../../redux/slice";
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
import foto from "@assets/images/Photo (2).png";
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
}
const CartPage = () => {
  const dispatch = useAppDispatch();
  const initialItems = [
    {
      id: 1,
      img: foto,
      title: "Face cream",
      code: 123,
      price: 880,
      count: 1,
      discount: 0,
    },
    {
      id: 2,
      img: foto,
      title: "Hand cream",
      code: 124,
      price: 680,
      count: 1,
      discount: 10,
    },
  ];
  const initialItemsWithTotal = initialItems.map((item) => ({
    ...item,
    total: Math.ceil(item.price - (item.price * item.discount) / 100),
  }));
  const [addedItems, setAddedItems] = useState<Item[]>(initialItemsWithTotal);
  // useEffect(() => {
  //   // Симуляция загрузки начальных данных (например, из API)
  //   const fetchInitialItems = async () => {
  //     const initialItems = await fetchDataFromAPI();
  //     const itemsWithTotal = initialItems.map(item => ({
  //       ...item,
  //       total: item.price - (item.price * item.discount / 100),
  //     }));
  //     setAddedItems(itemsWithTotal);
  //   };
  
  //   fetchInitialItems();
  // }, []);
  const cart = useAppSelector(selectCart);
  const handleAddItem = (id: number) => {
    setAddedItems((prev) => {
      return prev.map((item) => {
        if (id === item.id) {
          return {
            ...item,
            count: item.count + 1,
            total: item.price - (item.price * item.discount) / 100 + item.total,
          };
        }
        return item;
      });
    });
  };
  const handleDeleteItem = (id: number) => {
    setAddedItems((prev) => {
      return prev.map((item) => {
        if (id === item.id && item.count > 1) {
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
  };
  const handleRemove = () => {
    if (cart.length > 0) {
      const id = cart[0].id;
      dispatch(removeFromCart(id));
    }
  };
  const totalCount = addedItems.reduce((acc, item) => {
    return acc + item.count;
  }, 0);
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
                    <ItemInfoContainer>
                      <ImgContainer>
                        <img src={item.img} alt="" />
                      </ImgContainer>
                      <InfoContainer>
                        <InfoTitle>
                          <TitleItem>{item.title}</TitleItem>
                          <DeleteBtn onClick={handleRemove}>
                            <Close css={svgClose} />
                          </DeleteBtn>
                        </InfoTitle>
                        <P>Код товару: №{item.code}</P>
                        <PriceContainer>
                          <BtnContainer>
                            <Decrement
                              onClick={() => handleDeleteItem(item.id)}
                            >
                              -
                            </Decrement>
                            <Score>{item.count}</Score>
                            <Increment onClick={() => handleAddItem(item.id)}>
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
                  {totalCount}{" "}
                  {totalCount === 1
                    ? "товар"
                    : totalCount > 1 && totalCount < 5
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
