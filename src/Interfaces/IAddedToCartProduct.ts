export interface IAddedToCartProduct {
  product_id: number;
  title: string;
  img: { img_url: string; id: number };
  productCode: number;
  size?: number | null | undefined;
  discount?: number | null;
  price: number;
  count: number;
  color?: string | undefined;
  totalСost: number;
}
