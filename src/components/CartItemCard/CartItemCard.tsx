import {
  BtnContainer,
  Decrement,
  DeleteBtn,
  ImgContainer,
  Increment,
  InfoContainer,
  InfoTitle,
  ItemInfoContainer,
  P,
  Price,
  PriceContainer,
  Score,
  svgClose,
  TitleItem,
  typeWrapper,
} from "./CartItemCard.styled";

import { ReactComponent as Close } from "@assets/icons/close2.svg";

import PriceItem from "@components/PriceItem/PriceItem";
import { extractUnitTypeTitle } from "@utils/extractUnitTypeTitle";

import { handleImgError } from "@utils/handleImgError";

import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";

interface ICartItemCardProps {
  item: IAddedToCartProduct;
  width?: string;
  handleAddItem?: (id: number, size?: string | null) => void;
  handleDeleteItem?: (id: number, size?: string | null) => void;
  handleRemove?: (
    id: number,
    size?: string | null,
    color?: string | null
  ) => void;
  isOrderPage?: boolean;
}

const CartItemCard: React.FC<ICartItemCardProps> = ({
  item,
  width,
  handleAddItem,
  handleDeleteItem,
  handleRemove,
  isOrderPage,
}) => {
  const unitType =
    item.size && item.size.toString().replace(/[^a-zA-Zа-яА-ЯёЁ]/g, "");

  return (
    <ItemInfoContainer width={width}>
      <ImgContainer>
        <img src={item.img.img_url} alt={item.title} onError={handleImgError} />
      </ImgContainer>
      <InfoContainer>
        <InfoTitle>
          <TitleItem>{item.title}</TitleItem>
          {handleRemove && (
            <DeleteBtn
              onClick={() =>
                handleRemove(item.product_id, item.size, item.color)
              }
            >
              <Close css={svgClose} />
            </DeleteBtn>
          )}
        </InfoTitle>
        <div css={typeWrapper(item.color)}>
          {item.color && <p className="color">Колір: </p>}
          {item.size && (
            <p className="size">
              {unitType ? extractUnitTypeTitle(unitType) : ""}: {item.size}
            </p>
          )}
        </div>
        <P>Код товару: №{item.product_code}</P>
        <PriceContainer>
          {!isOrderPage ? (
            <BtnContainer>
              {handleDeleteItem && (
                <Decrement
                  onClick={() => handleDeleteItem(item.product_id, item.size)}
                >
                  -
                </Decrement>
              )}
              <Score>{item.count}</Score>
              {handleAddItem && (
                <Increment
                  onClick={() => handleAddItem(item.product_id, item.size)}
                >
                  +
                </Increment>
              )}
            </BtnContainer>
          ) : (
            <Score>{item.count}</Score>
          )}

          <Price>
            {item && (
              <PriceItem
                price={item.price!}
                discount={item.discount}
                total_cost={item.total_cost}
                style_item={"cartPage"}
              />
            )}
          </Price>
        </PriceContainer>
      </InfoContainer>
    </ItemInfoContainer>
  );
};

export default CartItemCard;
