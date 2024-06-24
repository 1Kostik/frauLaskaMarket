export interface Product {
  id: string;
  categoryId: string;
  code: string;
  title: string;
  imageUrls: string[];
  description: string;
  colors: string[];
  discount: number;
  stockCount: number;
  volumes: Volume[];
  ranking: number;
  benefit: string;
  composition: string;
}
interface Volume {
  size: string;
  price: number;
}
