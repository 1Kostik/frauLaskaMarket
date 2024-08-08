export interface Item {
  product_id: number;
  img: { id: number; img_url: string };
  title: string;
  productCode: number;
  price: number;
  count: number;
  totalСost: number;
  discount?: number;
  color: string;
  size: string;
}