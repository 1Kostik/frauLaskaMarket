export interface IOrderItem {
  product_id: number;
  count: number;
  color: string | undefined;
  size: number | null | undefined;
}

export interface IOrder {
  id?: number;
  delivery_type: string;
  email: string;
  last_name: string;
  name: string;
  order_items: IOrderItem[];
  payment_method: string;
  phone: string;
  post_office_number: string | number;
  recipient_name: string;
  recipient_last_name: string;
  recipient_phone: string;
}
