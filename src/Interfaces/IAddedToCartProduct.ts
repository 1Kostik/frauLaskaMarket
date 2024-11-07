export interface IAddedToCartProduct {
  product_id: number;
  title: string;
  img: { img_url: string; id: number };
  product_code: string;
  size: string | null | undefined;
  discount: number | null;
  price: number | null;
  count: number;
  color: string | null| undefined;
  total_cost: number;
  quantity: number;
}
