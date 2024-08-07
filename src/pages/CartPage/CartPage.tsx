import HeroSection from "@components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
  selectCart,
  selectCartTotalQuantity,
} from "../../redux/cart/selectors";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cart/slice";
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
import {
  BackStore,
  ContainerTopSeller,
  ProductListContainer,
  Title,
  TitleWrapper,
} from "@pages/ProductDetails/ProductDetails.styled";
import { useNavigate } from "react-router-dom";
import { Product } from "Interfaces/Product";
import ProductCard from "@components/ProductCard/ProductCard";
import { popularity } from "@utils/popularity";
import { nanoid } from "nanoid";
import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";



const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);
  const totalQuantity = useAppSelector(selectCartTotalQuantity);

  const [addedItems, setAddedItems] = useState<IAddedToCartProduct[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const totalPrice = cart.reduce((acc, item) => {
    return acc + item.totalCost;
  }, 0);

  // useEffect для обновления addedItems на основе состояния корзины
  useEffect(() => {
    const updatedItems = cart.map(
      ({
        product_id,
        title,
        img,
        productCode,
        size,
        discount,
        price,
        count,
        color,
        totalCost,
      }: IAddedToCartProduct) => ({
        product_id,
        title,
        img,
        productCode,
        size,
        discount,
        price,
        count,
        color,
        totalCost,
      })
    );
    setAddedItems(updatedItems);
  }, [cart]); // Зависимость от cart

  const handleAddItem = (id: number, size?: number | null) => {
    setAddedItems((prev) => {
      return prev.map((item) => {
        if (id === item.product_id && item.size === size) {
          return {
            ...item,
            count: item.count + 1,
          };
        }
        return item;
      });
    });
    dispatch(increaseQuantity({ id, size }));
  };

  const handleDeleteItem = (id: number, size?: number | null) => {
    setAddedItems((prev) => {
      return prev.map((item) => {
        if (id === item.product_id && item.size === size && item.count > 1) {
          return {
            ...item,
            count: item.count - 1,
          };
        }
        return item;
      });
    });
    dispatch(decreaseQuantity({ id, size }));
  };

  const handleRemove = (id: number, size?: number | null, color?: string | null) => {
    setAddedItems((prev) => {
      return prev.filter(
        (item) =>
          !(
            item.product_id === id &&
            item.size === size &&
            item.color === color
          )
      );
    });
    dispatch(removeFromCart({ id, size, color }));
  };

  const handleBackClick = () => {
    navigate("/store");
  };

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const widthImg: string =
    windowWidth >= 360 && windowWidth < 768
      ? "320px"
      : windowWidth >= 768 && windowWidth < 1440
      ? "336px"
      : windowWidth >= 1440
      ? "306px"
      : "100%";

  const title = addedItems.length !== 0 ? "Кошик" : "Кошик порожній";

  return (
    <>
      <HeroSection viewType={"other"} isEmpty={addedItems.length === 0}>
        {title}
      </HeroSection>
      <section css={sectionCart}>
        <div css={containerStyles}>
          {addedItems.length > 0 ? (
            <MainContainer>
              <MainInfoContainer>
                <ItemContainer>
                  <TitleContainer>
                    <H2>Ваше замовлення</H2>
                  </TitleContainer>
                  <Wrapper>
                    {addedItems.map((item) => (
                      <ItemInfoContainer key={nanoid()}>
                        <ImgContainer>
                          <img src={item.img.img_url} alt="" />
                        </ImgContainer>
                        <InfoContainer>
                          <InfoTitle>
                            <TitleItem>{item.title}</TitleItem>
                            <DeleteBtn
                              onClick={() =>
                                handleRemove(
                                  item.product_id,
                                  item.size,
                                  item.color
                                )
                              }
                            >
                              <Close css={svgClose} />
                            </DeleteBtn>
                          </InfoTitle>
                          <P>Код товару: №{item.productCode}</P>
                          <PriceContainer>
                            <BtnContainer>
                              <Decrement
                                onClick={() =>
                                  handleDeleteItem(item.product_id, item.size)
                                }
                              >
                                -
                              </Decrement>
                              <Score>{item.count}</Score>
                              <Increment
                                onClick={() =>
                                  handleAddItem(item.product_id, item.size)
                                }
                              >
                                +
                              </Increment>
                            </BtnContainer>
                            <Price>
                              {item.discount && item.discount > 0 && (
                                <OldPrice>{item.price} ₴</OldPrice>
                              )}
                              <NewPrice>{item.totalCost}₴</NewPrice>
                            </Price>
                          </PriceContainer>
                        </InfoContainer>
                      </ItemInfoContainer>
                    ))}
                  </Wrapper>
                </ItemContainer>
                <CartForm addedItems={addedItems} total_amount={totalPrice} />
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
          ) : (
            <>
              <ContainerTopSeller>
                <TitleWrapper>
                  <Title>Топ продажів</Title>
                  <BackStore onClick={handleBackClick}>Button</BackStore>
                </TitleWrapper>

                <ProductListContainer>
                  {popularity &&
                    popularity.map((item: Product) => (
                      <ProductCard key={item.id} width={widthImg} item={item} />
                    ))}
                </ProductListContainer>
              </ContainerTopSeller>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default CartPage;
