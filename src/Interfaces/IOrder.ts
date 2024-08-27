export interface IOrderItem {
  product_id: number;
  count: number;
  color: string | undefined | null;
  size: number | null | undefined;
  title:string;
  total_cost:number;
  product_code:number;
}
/*

color:"#D7D7D7"
count:3
id:48
product_code:603008
product_id:95
size:"250"
title:"UTerra"
total_cost:342

*/
export interface IOrder {
  id?: number;
  delivery_type: string;
  email: string;
  last_name: string;
  name: string;
  order_date: string;
  order_items: IOrderItem[];
  payment_method: string;
  payment_status:string;
  phone: string;
  delivery_city: string;
  delivery_destination: string;
  recipient_name: string;
  recipient_last_name: string;
  recipient_phone: string;
  call_me_back: boolean;
  total_amount:number;
  status:string;
}
/*

delivery_type:"Самовивіз"
email:"sorochankostya@gmail.com"
id:68
last_name:"asd"
name:"Konstantin"
order_date:"2024-08-13T12:12:16.000Z"
order_items:(2) [{…}, {…}]
payment_method:"deliveryPayment"
payment_status:"Не сплачено"
phone:"+380935834662"
post_office_number:null
recipient_last_name:null
recipient_name:null
recipient_phone:null
status:"В очікуванні"
total_amount:1134

*/