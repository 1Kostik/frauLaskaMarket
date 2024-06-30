export interface Product {
  id: number;
  categoryId: number;  
  title: string;
  imageUrls: string[];
  description: string;
  colors: string[];
  discount: number;
  stockCount: number;
  volumes: Volume[];
  ranking: number;
  benefit: string;
  popularity:number;
  productCode:string,
  composition: string;
}
export interface Volume {
  size: string;
  price: number;
}
