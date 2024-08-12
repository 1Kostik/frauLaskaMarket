export interface IOrderItem {
  product_id: number;
  title: string;
  count: number;
  totalCost: number;
  color: string | undefined;
  size: number | null | undefined;
  productCode: number;
}

export interface IOrder {
  id?:number;
  deliveryType: string;
  email: string;
  lastName: string;
  name: string;
  order_date: Date | string;
  order_items: IOrderItem[];
  paymentMethod: string;
  phone: string;
  status: string;
  total_amount: number;
  postOfficeNumber: string | number;
  recipientName: string;
  recipientLastName: string;
  recipientPhone: string;
}
