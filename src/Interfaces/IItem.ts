export interface Item {
  id: number;
  img: { id: number; img_url: string };
  title: string;
  code: number;
  price: number;
  count: number;
  totalСost: number;
  discount: number;
  color: string;
  size: string;
}