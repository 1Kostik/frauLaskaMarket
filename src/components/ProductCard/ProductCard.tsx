import React from "react";
import {
  CardWrapper,
  Container,
  ImageContainer,
  InfoContainer,
  H5,
} from "./ProductCard.styled";
import ProductInterface from "@components/ProductInterface";
import { handleImgError } from "@utils/handleImgError";

import { Product } from "Interfaces/Product";

import PriceItem from "@components/PriceItem/PriceItem";

interface Props {
  show?: boolean;
  handleOnClickCard?: (id: number) => void;
  item: Product;
  width?: string;
  setIsAdvertDeleted?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
}

const ProductCard: React.FC<Props> = ({
  show,
  handleOnClickCard,
  item,
  width,
  setIsAdvertDeleted,
  type,
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
          {type !== "popularity" && (
            <ProductInterface
              productId={id}
              setIsAdvertDeleted={setIsAdvertDeleted}
            />
          )}
        </ImageContainer>
        <InfoContainer>
          <H5>{title}</H5>
          <PriceItem variations={variations[0]} />
        </InfoContainer>
      </CardWrapper>
    </Container>
  );
};

export default ProductCard;
