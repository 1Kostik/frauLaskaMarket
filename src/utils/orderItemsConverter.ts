import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";

export const orderItemsConverter = (addedItems: IAddedToCartProduct[]) => {
  return addedItems.map((item) => {
    const { color, count, productCode, product_id, size, title, totalСost } =
      item;
    return {
      color,
      count,
      productCode,
      product_id,
      size,
      title,
      totalСost,
    };
  });
};
