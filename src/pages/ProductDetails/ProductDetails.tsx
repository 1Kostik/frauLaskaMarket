import { useEffect, useState } from "react";
import {
  Container,
  ImageContainer,
  Wrapper,
  Section,
  InfoContainer,
  TextContainer,
  H3,
  P,
  TitleContainer,
  P1,
  P3,
  ColorContainer,
  H4,
  Ul,
  Li,
  SelectContainer,
  SelectWrapper,
  Title,
  Description,
  DescriptionContainer,
  ContainerTopSeller,
  checkedColor,
  ButtonAddToCart,
  ButtonToCart,
} from "./ProductDetails.styled";

import { containerStyles } from "@styles/variables";
import SortingItems from "@components/SortingItems/SortingItems";
import { useNavigate, useParams } from "react-router-dom";
import CardSlider from "@components/CardSlider/CardSlider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/cart/slice";
import { Feedback, Product, Variation } from "Interfaces/Product";
import { selectCart } from "@redux/cart/selectors";
import ProductInterface from "@components/ProductInterface";
import { getProductById } from "@services/servicesApi";
import PriceItem from "@components/PriceItem/PriceItem";
import { useSelector } from "react-redux";
import { selectToken } from "@redux/auth/selectors";
import TrendingProducts from "@components/TrendingProducts/TrendingProducts";
import { extractUnitTypeTitle } from "@utils/extractUnitTypeTitle";
import BackNavigation from "@components/BackNavigation/BackNavigation";

const ProductDetailsProps = {
  container: {
    "padding-top": ["", ""],
    "padding-bottom": ["", ""],
    width: ["100%"],
    height: ["", ""],
  },
  display: ["none", "none", "flex"],
  width: ["320px", "332px", "626px"],
  height: ["320px", "332px", "626px"],
  gap: ["6px", "12px"],
  slidesPerView: [1, 1, 1],
  spaceBetween: [16, 12],
  prevEl: ["prevSmButton"],
  nextEl: ["nextSmButton"],
};

const ProductDetailsPropsText = {
  container: {
    "padding-top": ["24px", "40px"],
    "padding-bottom": ["24px", "40px"],
    width: ["100%"],
    height: ["563px", "616px"],
  },
  display: ["none", "flex", "none"],
  width: ["320px", "728px", "1360px"],
  height: ["456px", "456px", "456px"],
  gap: ["6px", "12px"],
  slidesPerView: [1, 2, 3.5],
  spaceBetween: [16, 12],
  prevEl: ["prevMdButton"],
  nextEl: ["nextMdButton"],
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const token = useSelector(selectToken);
  // const totalQuantity = useAppSelector(selectCartTotalQuantity);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [addedColor, setAddedColor] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [feedBacks, setFeedBacks] = useState<Feedback[]>([]);
  const [variationItem, setVariationItem] = useState<Variation>();
  const [isProductInCart, setIsProductInCart] = useState<boolean>(false);
  const cart = useAppSelector(selectCart);
  const { id } = useParams();
  const imageArray = product && [...product.imageUrls];
  const title = product && product.title;
  const description = product && product.description;
  const colors =
    product &&
    Array.from(
      new Set(product.variations.map((item: Variation) => item.color))
    );
  const isColors = !!colors?.find((item) => item !== null);

  const benefit = product && product.benefit;
  const composition = product && product.composition.toLowerCase();
  const product_code = product && product.product_code;

  useEffect(() => {
    const fetchProduct = async () => {
      if (!id) {
        return;
      }
      try {
        const data = await getProductById(Number(id));
        setProduct(data);
        setProductPrice(data.variations[0].price);
        setSelectedOption(data.variations[0].size);
        setAddedColor(data.variations[0].color);
        setFeedBacks(data.feedbacks);
        setVariationItem(data.variations[0]);
      } catch (error) {
        console.log("error :>> ", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (selectedOption && product) {
      product.variations.forEach((item: Variation) => {
        if (selectedOption === item.size) {
          setProductPrice(item.price);
          const color = item.color ? item.color : "";
          setAddedColor(color);
          setVariationItem(item);
        }
      });
    }
  }, [product, selectedOption]);
  const extractNumber = (item: string) => {
    const match = item.match(/\d+/);
    return match ? Number(match[0]) : 0;
  };
  useEffect(() => {
    if (product) {
      let minSize: number | null = null;
      let itemSize: number | null = null;
      product.variations.forEach((item: Variation) => {
        if (addedColor === item.color) {
          if (item.size !== null && item.size !== "") {
            itemSize = extractNumber(item.size);
            if (minSize === null || itemSize < minSize) {
              minSize = itemSize;
              setProductPrice(item.price);
              setSelectedOption(item.size);
              setVariationItem(item);
            }
          }
        }
      });
    }
  }, [addedColor, product]);

  const options: string[] | null =
    product && product.variations
      ? product.variations
          .map((item: Variation) => item.size)
          .filter((size): size is string => size !== null && size !== "")
      : null;

  const unitType =
    options &&
    options.length > 0 &&
    options[0].replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");

  const isOptions =
    options && options.length > 0 && options[0] !== "" ? true : false;

  useEffect(() => {
    const productSearch = !!cart.find(
      (item) =>
        (item.product_id === Number(id) &&
          item.size === selectedOption &&
          item.size !== null) ||
        (item.size === selectedOption &&
          item.size !== null &&
          item.product_id === Number(id) &&
          item.color === addedColor) ||
        (item.product_id === Number(id) &&
          item.size === null &&
          item.color === null)
    );
    setIsProductInCart(productSearch);
  }, [addedColor, cart, id, selectedOption]);

  const handleAddToCart = () => {
    if (isProductInCart) {
      return;
    }
    if (product && id && productPrice !== null) {
      const productToAdd = {
        product_id: product.id,
        title: product.title,
        price: productPrice,
        size: selectedOption,
        discount: variationItem!.discount,
        img: product.imageUrls[0],
        product_code: product.product_code,
        count: 1,
        color: addedColor,
        total_cost: productPrice,
        quantity: variationItem!.count,
      };
      setIsProductInCart(true);
      dispatch(addToCart(productToAdd));
    } else {
      setMessage("Оберіть будь ласка колір!");
    }
  };

  const handleAddColor = (color: string) => {
    setAddedColor(color);
    setMessage(null);
  };

  return (
    <Section>
      <div css={containerStyles}>
        <Container>
          <Wrapper>
            <BackNavigation
              previousPage="Магазин"
              currentPage="Сторінка товару"
            />
            <InfoContainer>
              <ImageContainer>
                <CardSlider
                  renderArrayImg={imageArray}
                  stylesProps={ProductDetailsProps}
                />
                {token && (
                  <ProductInterface
                    productId={Number(id)}
                    title={title || ""}
                  />
                )}
              </ImageContainer>

              <TextContainer>
                <TitleContainer>
                  <H3>{title}</H3>
                  <P>Є в наявності</P>
                </TitleContainer>
                <P1>Код товару:№{product_code}</P1>
                {variationItem && (
                  <PriceItem
                    price={variationItem.price}
                    discount={variationItem.discount}
                    style_item={"productDetailsPage"}
                  />
                )}
                <P3>{description}</P3>
                {isColors && (
                  <ColorContainer
                    isErrorMessage={message !== null}
                    isOptions={isOptions}
                  >
                    <H4>Колір</H4>
                    <Ul>
                      {colors &&
                        colors
                          .filter((item): item is string => item !== null)
                          .map((item, i) => (
                            <Li
                              key={i}
                              style={{ background: item }}
                              onClick={() => handleAddColor(item)}
                            >
                              {" "}
                              {addedColor && addedColor === item ? (
                                <div css={checkedColor} />
                              ) : (
                                ""
                              )}
                            </Li>
                          ))}
                    </Ul>
                    {message && (
                      <p
                        style={{
                          color: "red",
                          fontSize: "14px",
                          fontWeight: "500",
                          position: "absolute",
                          bottom: "-17px",
                          left: "0px",
                        }}
                      >
                        {message}
                      </p>
                    )}
                  </ColorContainer>
                )}
                {isOptions && (
                  <SelectContainer>
                    <H4>{unitType ? extractUnitTypeTitle(unitType) : ""}</H4>
                    <SelectWrapper>
                      <SortingItems<string>
                        options={options}
                        padding={"12px"}
                        borderRadius={"16px"}
                        disableWidth={"unset"}
                        setSelectedOption={setSelectedOption}
                        selectedOption={selectedOption}
                      />
                    </SelectWrapper>
                  </SelectContainer>
                )}
                <ButtonAddToCart
                  onClick={handleAddToCart}
                  style={{ marginRight: 20 }}
                  disabled={isProductInCart}
                >
                  {isProductInCart ? "Товар у кошику" : "Додати до кошика"}
                </ButtonAddToCart>
                {isProductInCart && (
                  <ButtonToCart onClick={() => navigate("/cart")}>
                    Перейти до кошика
                  </ButtonToCart>
                )}
              </TextContainer>
            </InfoContainer>
          </Wrapper>
          <DescriptionContainer>
            <Title>З чим допоможе?</Title>
            <Description>{benefit}</Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <Title>Склад</Title>
            <Description>{composition}</Description>
          </DescriptionContainer>
          {feedBacks.length > 0 && (
            <div style={{ background: "#252525" }}>
              <CardSlider
                renderArrayText={feedBacks}
                stylesProps={ProductDetailsPropsText}
              />
            </div>
          )}
          <ContainerTopSeller>
            <TrendingProducts />
          </ContainerTopSeller>
        </Container>
      </div>
    </Section>
  );
};

export default ProductDetails;
