export interface IVariation {
  size: number | string;
  price: number | string;
  count: number | string;
  color: string;
  discount: number | string;
}

export interface Ifeedback {
  name: string;
  profession: string;
  review: string;
}

export interface IAdvert {
  categoryId: number | undefined;
  imageFiles: File[] | string[];
  mainImage: string | undefined;

  title: string;
  productCode: string;
  composition: string;
  benefit: string;
  description: string;

  variations: IVariation[];

  feedbacks: Ifeedback[];

  newCategory?: string;
}
