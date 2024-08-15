import {
  BtnContainer,
  Decrement,
  DeleteBtn,
  ImgContainer,
  Increment,
  InfoContainer,
  InfoTitle,
  ItemInfoContainer,
  NewPrice,
  OldPrice,
  P,
  Price,
  PriceContainer,
  Score,
  svgClose,
  TitleItem,
} from "./CartItemCard.styled";

import { ReactComponent as Close } from "@assets/icons/close2.svg";

import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";

interface ICartItemCardProps {
  item: IAddedToCartProduct;
  handleAddItem?: (id: number, size?: number | null) => void;
  handleDeleteItem?: (id: number, size?: number | null) => void;
  handleRemove?: (
    id: number,
    size?: number | null,
    color?: string | null
  ) => void;
  isOrderPage?: boolean;
}

const CartItemCard: React.FC<ICartItemCardProps> = ({
  item,
  handleAddItem,
  handleDeleteItem,
  handleRemove,
}) => {
  return (
    <ItemInfoContainer>
      <ImgContainer>
        <img src={item.img.img_url} alt="" />
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
        <P>Код товару: №{item.product_code}</P>
        <PriceContainer>
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
          <Price>
            {item.discount && item.discount > 0 && (
              <OldPrice>{item.price} ₴</OldPrice>
            )}
            <NewPrice>{item.total_cost}₴</NewPrice>
          </Price>
        </PriceContainer>
      </InfoContainer>
    </ItemInfoContainer>
  );
};

export default CartItemCard;
