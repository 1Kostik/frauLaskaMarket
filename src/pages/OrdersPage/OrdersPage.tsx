import { containerStyles } from "@styles/variables";
import { useEffect, useState } from "react";
import { deleteOrder, getOrders } from "@services/servicesApi";
import { IOrder } from "Interfaces/IOrder";
import {
  tableStyles,
  tbodyStyles,
  theadStyles,
  thHeadsStyles,
  trHeadsStyles,
} from "./OrdersPage.styled";
import OrderItem from "@components/OrderItem/OrderItem";
import { nanoid } from "nanoid";

export function formatDate(dateString: Date | string): string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  return `${day}.${month}.${year}`;
}

const OrdersPage = () => {
  const [data, setData] = useState<IOrder[]>([]);

  const fetchOrders = async () => {
    const data = await getOrders();
    setData(data);
  };
  useEffect(() => {
    fetchOrders();
  }, []);
  const handleDeleteOrder = async (id: number) => {
    await deleteOrder(id);
    fetchOrders();
  };
  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <h1 style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}>
          Всі замовлення
        </h1>

        <table css={tableStyles}>
          <thead css={theadStyles}>
            <tr css={trHeadsStyles}>
              <th css={thHeadsStyles}>Номер</th>
              <th css={thHeadsStyles}>Дата</th>
              <th css={thHeadsStyles}>Ім'я</th>
              <th css={thHeadsStyles}>Телефон</th>
              <th css={thHeadsStyles}>Сумма</th>
              <th css={thHeadsStyles}>Тип оплати</th>
              <th css={thHeadsStyles}>Оплата</th>
              <th css={thHeadsStyles}>Статус</th>
              <th css={thHeadsStyles}>Видалити</th>
              <th css={thHeadsStyles}>Детальніше</th>
            </tr>
          </thead>
          <tbody css={tbodyStyles}>
            {data &&
              data.map((item) => (
                <OrderItem
                  item={item}
                  key={nanoid()}
                  onDelete={handleDeleteOrder}
                />
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default OrdersPage;
