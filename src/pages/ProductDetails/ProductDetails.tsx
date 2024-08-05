import { useEffect, useState } from "react";
import {
  Container,
  ImageContainer,
  H2,
  Wrapper,
  Section,
  NavContainer,
  ButtonBack,
  svgArrowBack,
  svgArrowRight,
  InfoContainer,
  TextContainer,
  H3,
  P,
  TitleContainer,
  P1,
  P2,
  P3,
  ColorContainer,
  H4,
  Ul,
  Li,
  SelectContainer,
  Button,
  SelectWrapper,
  Title,
  Description,
  DescriptionContainer,
  DeliveryInfoContainer,
  Span,
  ContainerTopSeller,
  TitleWrapper,
  BackStore,
  ProductListContainer,
  checkedColor,
} from "./ProductDetails.styled";
import { LuArrowLeft } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { containerStyles } from "@styles/variables";
import SortingItems from "@components/SortingItems/SortingItems";
import { useNavigate, useParams } from "react-router-dom";
import ProductCard from "@components/ProductCard/ProductCard";
import CardSlider from "@components/CardSlider/CardSlider";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addToCart } from "../../redux/cart/slice";
import { Feedback, Product, Variation } from "Interfaces/Product";
import { selectCart } from "@redux/cart/selectors";
import ProductInterface from "@components/ProductInterface";
import { getProductById } from "@services/servicesApi";
import { popularity } from "@utils/popularity";

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
  prevEl: ["#prevSmButton"],
  nextEl: ["#nextSmButton"],
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
  prevEl: ["#prevMdButton"],
  nextEl: ["#nextMdButton"],
};

const ProductDetails = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [selectedOption, setSelectedOption] = useState<number | string | null>(
    null
  );
  const [productPrice, setProductPrice] = useState<number | null>(null);
  const [addedColor, setAddedColor] = useState("");
  const [message, setMessage] = useState<string | null>(null);
  const [product, setProduct] = useState<Product | null>(null);
  const [feedBacks, setFeedBacks] = useState<Feedback[]>([]);
  const cart = useAppSelector(selectCart);
  const dispatch = useAppDispatch();
  const { id } = useParams();
  const imageArray = product && [...product.imageUrls];
  const title = product && product.title;
  const description = product && product.description;
  const colors =
    product && product.variations.map((item: Variation) => item.color);
  const benefit = product && product.benefit;
  const composition = product && product.composition.toLowerCase();
  const productCode = product && product.productCode;

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
      } catch (error) {
        console.log("error :>> ", error);
      }
    };

    fetchProduct();
  }, [id]);

  useEffect(() => {
    if (selectedOption && product) {
      product.variations.forEach((item: Variation) => {
        if (Number(selectedOption) === item.size) {
          setProductPrice(item.price);
          const color = item.color ? item.color : "";
          setAddedColor(color);
        }
      });
    }
  }, [selectedOption]);
  useEffect(() => {
    if (product) {
      product.variations.forEach((item: Variation) => {
        if (addedColor === item.color) {
          setProductPrice(item.price);
          setSelectedOption(item.size);
        }
      });
    }
  }, [addedColor]);

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

  const options: number[] | null =
    product && product.variations
      ? product.variations
          .map((item: Variation) => item.size)
          .filter((size): size is number => size !== null)
      : null;

  const handleBackClick = () => {
    navigate("/store");
  };

  const handleAddToCart = () => {
    const productSearch = cart.find(
      (item) => item.id === Number(id) && item.size === selectedOption
    );
    if (productSearch) {
      return;
    }
    if (
      product &&
      id &&
      selectedOption &&
      productPrice !== null &&
      addedColor !== ""
    ) {
      const productToAdd = {
        id: product.id,
        title: product.title,
        price: productPrice,
        size: selectedOption,
        discount: product.variations[0].discount,
        img: product.imageUrls[0],
        productCode: product.productCode,
        quantity: 1,
        color: addedColor,
        totalСost:
          (productPrice -
            (productPrice * (product.variations[0].discount || 1)) / 100) *
          1,
      };

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
            <NavContainer>
              <ButtonBack onClick={handleBackClick}>
                <LuArrowLeft css={svgArrowBack} />
              </ButtonBack>
              <H2>Магазин</H2>
              <MdOutlineKeyboardArrowRight css={svgArrowRight} />
              <H2>Сторінка товару</H2>
            </NavContainer>
            <InfoContainer>
              <ImageContainer>
                <CardSlider
                  renderArrayImg={imageArray}
                  stylesProps={ProductDetailsProps}
                />
                <ProductInterface productId={Number(id)} />
              </ImageContainer>

              <TextContainer>
                <TitleContainer>
                  <H3>{title}</H3>
                  <P>Є в наявності</P>
                </TitleContainer>
                <P1>Код товару:№{productCode}</P1>
                <P2>{productPrice} ₴</P2>
                <P3>{description}</P3>
                <ColorContainer isErrorMessage={message !== null}>
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
                <SelectContainer>
                  <H4>Обʼєм</H4>
                  <SelectWrapper>
                    <SortingItems
                      options={options}
                      padding={"12px"}
                      borderRadius={"16px"}
                      disableWidth={"unset"}
                      setSelectedOption={setSelectedOption}
                      selectedOption={selectedOption}
                    />
                  </SelectWrapper>
                </SelectContainer>
                <Button onClick={handleAddToCart}>Додати до кошика</Button>
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
          <DescriptionContainer>
            <Title>Доставка</Title>
            <DeliveryInfoContainer>
              <Span>Самовивіз</Span>
              <Span> Доставимо протягом тижня</Span>
              <Span>Безкоштовно</Span>
            </DeliveryInfoContainer>
          </DescriptionContainer>
          <div style={{ background: "#252525" }}>
            <CardSlider
              renderArrayText={feedBacks}
              stylesProps={ProductDetailsPropsText}
            />
          </div>
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
        </Container>
      </div>
    </Section>
  );
};

export default ProductDetails;
