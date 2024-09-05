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

  const firstImageUrl =
    imageUrls && imageUrls.length > 0 ? imageUrls[0].img_url : "";

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
            src={firstImageUrl}
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
          {variations && variations.length > 0 && (
            <PriceItem price={variations[0].price} discount={variations[0].discount}  style_item={"storePage"} />
          )}
        </InfoContainer>
      </CardWrapper>
    </Container>
  );
};

export default ProductCard;
