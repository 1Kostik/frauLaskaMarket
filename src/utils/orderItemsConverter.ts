import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";

export const orderItemsConverter = (addedItems: IAddedToCartProduct[]) => {
  return addedItems.map((item) => {
    const { color, count, productCode, product_id, size, title, totalCost } =
      item;
    return {
      color,
      count,
      product_code: productCode,
      product_id,
      size,
      title,
      total_cost: totalCost,
    };
  });
};
