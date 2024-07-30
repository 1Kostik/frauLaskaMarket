import { products } from "@assets/products";
import { Product } from "Interfaces/Product";

export const popularity = products
  .map((item: Product) => {
    return item;
  })
  .sort((a: Product, b: Product) => b.popularity - a.popularity);
