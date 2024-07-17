export interface Product {
  id: number;
  categoryId: number;
  title: string;
  imageUrls: string[];
  mainImage: string;
  description: string;
  colors: string[];
  discount: number;
  stockCount: number;
  volumes: Volume[];
  ranking: number;
  benefit: string;
  popularity: number;
  productCode: string;
  composition: string;
  feedbacks: string[];
}
export interface Volume {
  productCount: number;
  size: number;
  price: number;
}
