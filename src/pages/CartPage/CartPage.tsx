import HeroSection from "@components/HeroSection/HeroSection";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { selectCart } from "../../redux/cart/selectors";
import {
  decreaseQuantity,
  increaseQuantity,
  removeFromCart,
} from "../../redux/cart/slice";
import { containerStyles } from "@styles/variables";
import {
  H2,
  ItemContainer,
  MainContainer,
  MainInfoContainer,
  sectionCart,
  TitleContainer,
  Wrapper,
} from "./CartPage.styled";

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
import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";
import CartItemCard from "@components/CartItemCard";
import { nanoid } from "nanoid";
import PaymentBlock from "@components/PaymentBlock";
import { toast } from "react-toastify";

const CartPage = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cart = useAppSelector(selectCart);

  const [addedItems, setAddedItems] = useState<IAddedToCartProduct[]>([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // useEffect для обновления addedItems на основе состояния корзины
  useEffect(() => {
    const updatedItems = cart.map(
      ({
        product_id,
        title,
        img,
        product_code,
        size,
        discount,
        price,
        count,
        color,
        total_cost,
        quantity,
      }: IAddedToCartProduct) => ({
        product_id,
        title,
        img,
        product_code,
        size,
        discount,
        price,
        count,
        color,
        total_cost,
        quantity,
      })
    );
    setAddedItems(updatedItems);
  }, [cart]); // Зависимость от cart

  const handleAddItem = (id: number, size?: number | null) => {
    const addedItem = addedItems.find(
      (item) => id === item.product_id && item.size === size
    );
    if (addedItem && addedItem.count >= addedItem.quantity) {
      toast.warn("Товару на складі більше немає");
      return;
    }
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

  const handleRemove = (
    id: number,
    size?: number | null,
    color?: string | null
  ) => {
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
                    <H2>Товари у кошику</H2>
                  </TitleContainer>
                  <Wrapper>
                    {addedItems.map((item) => (
                      <CartItemCard
                        key={nanoid()}
                        item={item}
                        handleAddItem={handleAddItem}
                        handleDeleteItem={handleDeleteItem}
                        handleRemove={handleRemove}
                      />
                    ))}
                  </Wrapper>
                </ItemContainer>
              </MainInfoContainer>
              <PaymentBlock />
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



/*
let priceWithDiscount = 900; // Цена со скидкой
let discountPercent = 10; // Процент скидки

let fullPrice = (priceWithDiscount * 100) / (100 - discountPercent);

console.log(fullPrice); // Выведет 1000

*/