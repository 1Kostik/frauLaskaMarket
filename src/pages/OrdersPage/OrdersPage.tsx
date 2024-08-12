import { containerStyles } from "@styles/variables";
// import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
// import { ReactComponent as ArrowDpwn } from "@assets/icons/arrow-down-select.svg";
import { useEffect, useState } from "react";
import { getOrders } from "@services/servicesApi";
import { IOrder } from "Interfaces/IOrder";
import { useNavigate } from "react-router-dom";
export function formatDate(dateString: Date | string) {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}
const OrdersPage = () => {
  const navigate = useNavigate();
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IOrder[]>([]);

  console.log("data :>> ", data);

  useEffect(() => {
    async function fetchOrders() {
      const data = await getOrders();
      setData(data);
    }
    fetchOrders();
  }, []);
  /*
deliveryType:"Самовивіз з відділення"
email:"example@gmail.com"
id:65
lastName:"Sororchan"
name:"Konstantin"
order_date:"2023-07-31T12:30:00.000Z"
order_items:(2) [{…}, {…}]
paymentMethod:"LiqPay"
phone:"+380980231212"
postOfficeNumber:12
recipientLastName:null
recipientName:null
recipientPhone:null
status:"pending"
total_amount:287 
*/

  const handlePageRedirects = (id: number) => {
    if (id) {
      navigate(`/admin/orders/${id}`);
    }
  };
  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <h1 style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}>
          Всі замовлення
        </h1>
        {data &&
          data.length > 0 &&
          data.map((item: IOrder) => (
            <div
              style={{
                border: "1px solid white",
                width: "100%",
                height: "80px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
                marginBottom: "20px",
              }}
              key={item.id}
            >
              <div
                style={{
                  // border: "1px solid white",
                  width: "80%",
                  // height: "80px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                }}
              >
                <h2 style={{ color: "white", fontSize: "16px" }}>
                  Номер Замовлення:{" "}
                  <span style={{ color: "white", fontSize: "16px" }}>
                    {item.id}
                  </span>
                </h2>
                <h2 style={{ color: "white", fontSize: "16px" }}>
                  Дата:{" "}
                  <span style={{ color: "white", fontSize: "16px" }}>
                    {formatDate(item.order_date)}
                  </span>
                </h2>
                <h2 style={{ color: "white", fontSize: "16px" }}>
                  Статус:{" "}
                  <span style={{ color: "white", fontSize: "16px" }}>
                    {item.status}
                  </span>
                </h2>
                <h2 style={{ color: "white", fontSize: "16px" }}>
                  Загальна сума:{" "}
                  <span style={{ color: "white", fontSize: "16px" }}>
                    {item.total_amount} грн
                  </span>
                </h2>
                <h2 style={{ color: "white", fontSize: "16px" }}>
                  Телефон:{" "}
                  <span style={{ color: "white", fontSize: "16px" }}>
                    {item.phone}
                  </span>
                </h2>
              </div>
              <button
                style={{
                  color: "white",
                  // border: "1px solid white",
                  // width: "24px",
                  height: "24px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
                onClick={() => handlePageRedirects(item.id!)}
              >
                Детальніше
                {/* {isOpen ? (
                  <ArrowUp
                  //  css={svgArrowUp}
                  />
                ) : (
                  <ArrowDpwn
                  // css={svgArrowDpwn}
                  />
                )} */}
              </button>
            </div>
          ))}
      </div>
    </section>
  );
};

export default OrdersPage;
