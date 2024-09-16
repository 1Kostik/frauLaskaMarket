import React from "react";
import {
  Container,
  ImageContainer,
  InfoContainer,
  H5,
} from "./ProductCard.styled";
import ProductInterface from "@components/ProductInterface";
import { handleImgError } from "@utils/handleImgError";

import { Product } from "Interfaces/Product";

import PriceItem from "@components/PriceItem/PriceItem";
import { IPopularityProducts } from "Interfaces/IPopularityProduct";

interface Props {
  show?: boolean;
  handleOnClickCard?: (id: number) => void;
  item: Product | IPopularityProducts;
  width?: string;
  setIsAdvertDeleted?: React.Dispatch<React.SetStateAction<boolean>>;
  type?: string;
  widthContainer?:string;
}

const ProductCard: React.FC<Props> = ({
  show,
  handleOnClickCard,
  item,
  width,
  setIsAdvertDeleted,
  type,
  widthContainer
}) => {
  const { id, title } = item;

  // Условная проверка на наличие imageUrls для Product и image_url для IPopularityProducts
  const firstImageUrl =
    "imageUrls" in item && item.imageUrls.length > 0
      ? item.imageUrls[0].img_url
      : "image_url" in item
      ? item.image_url
      : "";
  const price =
    "variations" in item && item.variations.length > 0
      ? item.variations[0].price
      : "price" in item
      ? item.price
      : 0;

  const discount =
    "variations" in item && item.variations.length > 0
      ? item.variations[0].discount
      : null;
  return (
    <Container
      widthContainer={widthContainer}
      show={show}
      onClick={() =>
        id !== undefined && handleOnClickCard && handleOnClickCard(id)
      }
    >
      <div>
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

          <PriceItem
            price={Number(price)}
            discount={discount}
            style_item={"storePage"}
          />
        </InfoContainer>
      </div>
    </Container>
  );
};

export default ProductCard;
