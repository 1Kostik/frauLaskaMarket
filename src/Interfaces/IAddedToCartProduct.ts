export interface IAddedToCartProduct {
  product_id: number;
  title: string;
  img: { img_url: string; id: number };
  product_code: number;
  size: number | null | undefined;
  discount: number | null;
  price: number;
  count: number;
  color: string | undefined;
  total_cost: number;
}
