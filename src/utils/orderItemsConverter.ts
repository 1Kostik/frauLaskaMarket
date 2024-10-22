import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";
import { fullPrice } from "./fullPrice";

export const orderItemsConverter = (addedItems: IAddedToCartProduct[]) => {
  return addedItems.map((item) => {
    const { color, count, product_id, size, discount, price } = item;

    return {
      full_price: discount ? fullPrice(Number(price), discount) : price,
      discount: discount ? discount : null,
      color: color ? color : null,
      count,
      product_id,
      size: size ? size : null,
    };
  });
};
