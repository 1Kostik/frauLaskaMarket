import OrderItemCard from "@components/OrderItemCard/OrderItemCard";
import ProductCard from "@components/ProductCard/ProductCard";
import { formatDate } from "@pages/OrdersPage/OrdersPage";
import { getOrderById, getProductById, updateOrder } from "@services/servicesApi";
import { containerStyles } from "@styles/variables";
import { IOrder } from "Interfaces/IOrder";
import { Product } from "Interfaces/Product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const OrderItemPage = () => {
  const navigate = useNavigate();

  const { id } = useParams();
  const [data, setData] = useState<IOrder>();
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [previousProductIds, setPreviousProductIds] = useState<number[]>([]);

  const productIdArray: number[] =
    data?.order_items.map((item) => Number(item.product_id)) ?? [];

  useEffect(() => {
    async function fetchOrder(id: number) {
      const result = await getOrderById(id);
      setData(result);
    }

    if (id) {
      fetchOrder(+id);
    }
  }, [id]);

  useEffect(() => {
    async function fetchOrderProducts(id: number) {
      const result = await getProductById(id);
      console.log("result :>> ", result);
      setOrderProducts((prev) => [...prev, result]);
    }

    if (productIdArray && productIdArray.length > 0) {
      const arraysAreEqual =
        previousProductIds.length === productIdArray.length &&
        previousProductIds.every(
          (value, index) => value === productIdArray[index]
        );

      if (!arraysAreEqual) {
        productIdArray.forEach((item) => {
          fetchOrderProducts(+item);
        });
        setPreviousProductIds(productIdArray);
      }
    }
  }, [productIdArray]);
  
const handleChangStatus = async()=>{
const status = "Виконано"
 await updateOrder(Number(id),status)
}
  // const handleOnClickCard = (id: number) => {
  //   navigate(`${id}`);
  // };

  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <h1 style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}>
          Замовлення № {id} від {data && formatDate(data!.order_date)}
        </h1>
        <div
          style={{ display: "flex", paddingTop: "100px", marginBottom: "20px" }}
        >
          <div>
            <div style={{ width: "100%", marginBottom: "100px" }}>
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Стан замовлення:{" "}
                  <span
                    style={{
                      color: "yellow",
                      fontSize: "25px",
                      textDecoration: "underline",
                    }}
                  >
                    {data!.status.toLowerCase()}
                  </span>
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Спосіб оплати: {data!.payment_method}
                </p>
              )}{" "}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Стан оплати:{" "}
                  <span
                    style={{
                      color: "green",
                      fontSize: "25px",
                      textDecoration: "underline",
                    }}
                  >
                    оплачено
                  </span>
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Доставка: {data!.delivery_type}
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Номер відділення: {data!.post_office_number}
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Загальна сума: {data!.total_amount}
                </p>
              )}
            </div>
            <div style={{ width: "20vw", marginBottom: "100px" }}>
              <p
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginBottom: "20px",
                }}
              >
                Інформація про замовника:
              </p>
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Призвище та ім'я замовника: {data!.last_name} {data!.name}
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Телефон: {data!.phone}
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Пошта: {data!.email}
                </p>
              )}
              <p
                style={{
                  color: "white",
                  fontSize: "25px",
                  marginBottom: "20px",
                }}
              >
                Отримувач інша людина:
              </p>
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Прізвище та ім'я отримувача: {data!.recipient_last_name}
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Им'я отримувача: {data!.recipient_name}
                </p>
              )}
              {data && (
                <p
                  style={{
                    color: "white",
                    fontSize: "25px",
                    marginBottom: "20px",
                  }}
                >
                  Телефон отримувача: {data!.recipient_name}
                </p>
              )}
              {/* {data && data.order_items.map(item=>(


        ))} */}
            </div>
          </div>
          <div style={{ width: "50vw" }}>
            <h2
              style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}
            >
              Інформація про товар:
            </h2>
            <div style={{ width: "100%" }}>
              {orderProducts &&
                orderProducts.map((item: Product) => (
                  <OrderItemCard
                    key={item.id}
                    // handleOnClickCard={() => handleOnClickCard(item.id)}
                    item={item}
                  />
                ))}
            </div>
          </div>
        </div>
        <button
          style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}
        onClick={handleChangStatus}
        >
          Замовлення виконано
        </button>
        <br />
        <button
          style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}
        >
          Видалити замовлення
        </button>
      </div>
    </section>
  );
};

export default OrderItemPage;
