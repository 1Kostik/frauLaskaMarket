import React from "react";
import {
  CardWrapper,
  Container,
  ImageContainer,
  InfoContainer,
  H5,
  P,
} from "./ProductCard.styled";
import ProductInterface from "@components/ProductInterface";
import { handleImgError } from "@utils/handleImgError";

import { Product } from "Interfaces/Product";

interface Props {
  show?: boolean;
  handleOnClickCard?: (id: number) => void;
  item: Product;
  width?: string;
  setIsAdvertDeleted: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProductCard: React.FC<Props> = ({
  show,
  handleOnClickCard,
  item,
  width,
  setIsAdvertDeleted,
}) => {
  const { id, imageUrls, title, variations } = item;

  return (
    <Container
      show={show}
      onClick={() =>
        id !== undefined && handleOnClickCard && handleOnClickCard(id)
      }
    >
      <CardWrapper>
        <ImageContainer>
          <img
            src={imageUrls[0].img_url}
            alt=""
            style={{ width: `${width}` }}
            onError={handleImgError}
          />
          <ProductInterface
            productId={id}
            setIsAdvertDeleted={setIsAdvertDeleted}
          />
        </ImageContainer>
        <InfoContainer>
          <H5>{title}</H5>
          <P>
            {variations && variations.length > 0 ? variations[0].price : ""} грн
          </P>
        </InfoContainer>
      </CardWrapper>
    </Container>
  );
};

export default ProductCard;
