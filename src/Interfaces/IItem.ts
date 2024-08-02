export interface Item {
  id: number;
  img: { id: number; img_url: string };
  title: string;
  code: number;
  price: number;
  count: number;
  total: number;
  discount: number;
  color: string;
  size: string;
}