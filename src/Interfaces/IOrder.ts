export interface IOrderItem {
  product_id: number;
  title: string;
  count: number;
  total_cost: number;
  color: string | undefined;
  size: number | null | undefined;
  product_code: number;
}

export interface IOrder {
  id?:number;
  delivery_type: string;
  email: string;
  last_name: string;
  name: string;
  order_date: Date | string;
  order_items: IOrderItem[];
  payment_method: string;
  phone: string;
  status: string;
  total_amount: number;
  post_office_number: string | number;
  recipient_name: string;
  recipient_last_name: string;
  recipient_phone: string;
}
