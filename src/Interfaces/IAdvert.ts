import { Category } from "@components/CustomSelect/CustomSelect";

interface IVolume {
  size: number | string;
  price: number | string;
  productCount: number | string;
}

export interface IAdvert {
  categoryId: Category | undefined;
  imageFiles: File[] | string[];
  mainImage: string | undefined;
  title: string;
  description: string;
  volumes: IVolume[];
  discount: number | string;
  stockCount: number | string;
  composition: string;
  colors: string[];
  feedbacks: string[];
}