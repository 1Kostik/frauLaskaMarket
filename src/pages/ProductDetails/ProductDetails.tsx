import React, { useEffect, useState } from "react";
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
  BackTitle,
  TitleWrapper,
} from "./ProductDetails.styled";
import { LuArrowLeft } from "react-icons/lu";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { containerStyles } from "@styles/variables";
import foto1 from "@assets/images/Photo (1).png";
import SortingItems from "@components/SortingItems/SortingItems";
import { useNavigate } from "react-router-dom";
import ProductCard from "@components/ProductCard/ProductCard";
import { ProductListContainer } from "@pages/StorePage/StorePage.styled";
import CardSlider from "@components/CardSlider/CardSlider";
import { text } from "@assets/answers";
import { imageArray } from "@assets/imagesArr";

const ProductDetails = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const options = ["10ml", "20ml", "30ml", "40ml", "50ml", "60ml"];
  const arrNumbers = [1, 2, 3, 4];
  const handleBackClick = () => {
    navigate(-1);
  };
  const ProductDetailsProps = {
    container: {
      "padding-top": ["", ""],
      "padding-bottom": ["", ""],
      width: ["100%"],
      height: ["", ""],
    },
    display: ["none", "none","flex"],
    width: ["320px", "332px", "626px"],
    height: ["320px", "332px", "626px"],
    gap: ["6px", "12px"],
    slidesPerView: [1, 1, 1],
    spaceBetween: [16, 12],
    prevEl: ["#prevSmButton"],
    nextEl: ["#nextSmButton"],
  };
const ProductDetailsPropsText={
  container: {
    "padding-top": ["24px", "40px"],
    "padding-bottom": ["24px", "40px"],
    width: ["100%"],
    height: ["563px", "616px"],
  },
  display: ["none", "flex","none"],
  width: ["320px", "728px", "1360px"],
  height: ["456px", "456px", "456px"],
  gap: ["6px", "12px"],
  slidesPerView: [1, 2, 3.5],
  spaceBetween: [16, 12],
  prevEl: ["#prevMdButton"],
  nextEl: ["#nextMdButton"],
}
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
              </ImageContainer>
              <TextContainer>
                <TitleContainer>
                  <H3>Eu mi et tellus etiam</H3>
                  <P>Є в наявності</P>
                </TitleContainer>
                <P1>Код товару:№2147652</P1>
                <P2>800 ₴</P2>
                <P3>
                  Eu mi et tellus etiam tellus varius ut fermentum. Lorem
                  egestas lacinia nec aliquam elit etiam. Eu mi et tellus etiam
                  tellus varius ut fermentum. Lorem egestas lacinia nec aliquam
                  elit etiam.Eu mi et tellus etiam tellus varius ut fermentum.
                  Lorem egestas lacinia nec aliquam elit etiam.Eu mi et tellus
                  etiam tellus varius ut fermentum. Lorem egestas lacinia nec
                  aliquam elit etiam.
                </P3>
                <ColorContainer>
                  <H4>Колір</H4>
                  <Ul>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                    <Li></Li>
                  </Ul>
                </ColorContainer>
                <SelectContainer>
                  <H4>Обʼєм</H4>
                  <SelectWrapper>
                    <SortingItems
                      isNone={true}
                      options={options}
                      padding={"12px"}
                      borderRadius={"16px"}
                    />
                  </SelectWrapper>
                </SelectContainer>
                <Button>Додати до кошика</Button>
              </TextContainer>
            </InfoContainer>
          </Wrapper>
          <DescriptionContainer>
            <Title>З чим допоможе?</Title>
            <Description>
              Eu mi et tellus etiam tellus varius ut fermentum. Lorem egestas
              lacinia nec aliquam elit etiam. Neque fames iaculis enim lacus.
              Risus cursus enim feu
            </Description>
          </DescriptionContainer>
          <DescriptionContainer>
            <Title>Склад</Title>
            <Description>
              Eu mi et tellus etiam tellus varius ut fermentum. Lorem egestas
              lacinia nec aliquam elit etiam. Neque fames iaculis enim lacus.
              Risus cursus enim feu
            </Description>
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
            <CardSlider renderArrayText={text}  stylesProps={ProductDetailsPropsText} />
          </div>
          <ContainerTopSeller>
            <TitleWrapper>
              <Title>Топ продажів</Title>
              <BackTitle>Button</BackTitle>
            </TitleWrapper>

            <ProductListContainer>
              {arrNumbers.map((item) => (
                <ProductCard
                  key={item}
                  // show={openFilter}
                  // handleOnClickCard={handleOnClickCard}
                  // id={item}
                />
              ))}
            </ProductListContainer>
          </ContainerTopSeller>
        </Container>
      </div>
    </Section>
  );
};

export default ProductDetails;