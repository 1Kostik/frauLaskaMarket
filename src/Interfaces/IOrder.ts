export interface IOrderItem {
  id?: number;
  product_id: number;
  full_price: number;
  count: number;
  discount: number;
  color: string | undefined | null;
  size: string | null | undefined;
  title: string;
  total_cost: number;
  product_code: string;
}

export interface IOrder {
  id?: number;
  delivery_type: string;
  email: string;
  last_name: string;
  name: string;
  order_date: string;
  order_items: IOrderItem[];
  payment_method: string;
  payment_status: string;
  phone: string;
  delivery_city: string;
  delivery_destination: string;
  recipient_name: string;
  recipient_last_name: string;
  recipient_phone: string;
  call_me_back: boolean;
  total_amount: number;
  status: string;
}
