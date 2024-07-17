

export interface IVolume {
  size: number | string;
  price: number | string;
  productCount: number | string;
}

export interface IAdvert {
  categoryId: number | undefined;
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
  benefit: string;
  productCode: string;
  newCategory?: string;
}
