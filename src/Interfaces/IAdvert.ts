export interface IVariation {
  size: number | string;
  price: number | string;
  count: number | string;
  color: string;
  discount: number | string;
}

export interface IFeedback {
  name: string;
  profession: string;
  review: string;
}

export interface IAdvert {
  category_id: number | string;
  imageUrls: File[];
  mainImage: string;

  title: string;
  productCode: string;
  composition: string;
  benefit: string;
  description: string;

  variations: IVariation[];

  feedbacks: IFeedback[];

  popularity: string | number;
  ranking: string | number;

  newCategory?: string;
}
