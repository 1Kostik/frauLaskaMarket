export interface Product {
  id: number;
  categoryId: number;
  title: string;
  imageUrls: ImageUrl[];
  mainImage: string;
  description: string;
  ranking: number;
  benefit: string;
  popularity: number;
  productCode: string;
  composition: string;
  variations: Variation[];
  feedbacks: Feedback[];
}
export interface Variation {
  id: number;
  price: number;
  discount: number;
  count: number;
  size: number;
  color: string;
}

export interface Feedback {
  id: number;
  name: string;
  profession: string;
  review: string;
}

export interface ImageUrl {
  id: number;
  img_url: string;
}
