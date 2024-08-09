import { containerStyles } from "@styles/variables";
import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
import { ReactComponent as ArrowDpwn } from "@assets/icons/arrow-down-select.svg"
import { useState } from "react";
const OrdersPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <h1 style={{ color: "white", fontSize: "25px", marginBottom: "20px" }}>
          Всі замовлення
        </h1>
        <div
          style={{
            border: "1px solid white",
            width: "100%",
            height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            padding:"10px"
          }}
        >
          <div  
          style={{
            // border: "1px solid white",
            width: "80%",
            // height: "80px",
            display: "flex",
            justifyContent: "space-between",
            alignItems:"center",
            padding:"10px"

          }}
          >
            <h2 style={{ color: "white", fontSize: "16px" }}>
              Номер Замовлення:{" "}
              <span style={{ color: "white", fontSize: "16px" }}>1111</span>
            </h2>
            <h2 style={{ color: "white", fontSize: "16px" }}>
              Дата:{" "} 
              <span style={{ color: "white", fontSize: "16px" }}>08.08.2024</span>
            </h2>
            <h2 style={{ color: "white", fontSize: "16px" }}>
              Статус:{" "} 
              <span style={{ color: "white", fontSize: "16px" }}>В очікуванні</span>
            </h2>
            <h2 style={{ color: "white", fontSize: "16px" }}>
              Загальна ціна:{" "} 
              <span style={{ color: "white", fontSize: "16px" }}>1000 грн</span>
            </h2>
            <h2 style={{ color: "white", fontSize: "16px" }}>
              Телефон:{" "} 
              <span style={{ color: "white", fontSize: "16px" }}>+380980312828</span>
            </h2>
          </div>
          <button
            style={{
              color: "white",
              // border: "1px solid white",
              width: "24px",
              height: "24px",
            display:"flex",
            justifyContent:"center",
            alignItems:"center"
            }}
          >
              {isOpen ? (
            <ArrowUp
            //  css={svgArrowUp}
              />
          ) : (
            <ArrowDpwn
            // css={svgArrowDpwn}
             />
          )}
          </button>
        </div>
      </div>
    </section>
  );
};

export default OrdersPage;
