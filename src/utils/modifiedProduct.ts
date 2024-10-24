import { IAdvert } from "Interfaces/IAdvert";

export const modifiedProduct = (product: IAdvert) => {
  if (product) {
    const fullPriceVariations = product.variations.map((item) => ({
      ...item,
      price: Math.round(
        (Number(item.price) * 100) / (100 - Number(item.discount))
      ),
      size: typeof item.size === "string" ? parseInt(item.size) : item.size,
    }));
    return { ...product, variations: fullPriceVariations };
  }
};
