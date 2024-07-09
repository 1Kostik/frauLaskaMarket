import React from "react";
import {
  CardWrapper,
  Container,
  ImageContainer,
  InfoContainer,
  H5,
  P,
} from "./ProductCard.styled";
import { Product } from "Interfaces/Product";
import ProductInterface from "@components/ProductInterface";
interface Props {
  show?: boolean;
  handleOnClickCard?: (id: number) => void;
  item: Product;
  width?: string;
}
const ProductCard: React.FC<Props> = ({
  show,
  handleOnClickCard,
  item,
  width,
}) => {
  const { id, imageUrls, title, volumes } = item;

  return (
    <Container
      show={show}
      onClick={() =>
        id !== undefined && handleOnClickCard && handleOnClickCard(id)
      }
    >
      <CardWrapper>
        <ImageContainer>
          <img src={imageUrls[0]} alt="" style={{ width: `${width}` }} />
          <ProductInterface productId={id} />
        </ImageContainer>
        <InfoContainer>
          <H5>{title}</H5>
          <P>{volumes[0].price} грн</P>
        </InfoContainer>
      </CardWrapper>
    </Container>
  );
};

export default ProductCard;
