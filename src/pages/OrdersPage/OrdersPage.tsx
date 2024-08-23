import { containerStyles } from "@styles/variables";
// import { ReactComponent as ArrowUp } from "@assets/icons/arrow-up-select.svg";
// import { ReactComponent as ArrowDpwn } from "@assets/icons/arrow-down-select.svg";
import { useEffect, useState } from "react";
import { getOrders } from "@services/servicesApi";
import { IOrder } from "Interfaces/IOrder";
import { useNavigate } from "react-router-dom";
// import { MdDeleteOutline } from "react-icons/md";
import { FaArrowRightLong } from "react-icons/fa6";

import {
  tableStyles,
  tbodyStyles,
  tdArrow,
  tdTrash,
  theadStyles,
  thHeadsStyles,
  trHeadsStyles,
} from "./OrdersPage.styled";
import SortingItems from "@components/SortingItems/SortingItems";
import { MdDeleteOutline } from "react-icons/md";
import { createPortal } from "react-dom";
import Modal from "@components/Modal";
import StatusWarningModal from "@components/StatusWarningModal/StatusWarningModal";
export function formatDate(dateString: Date | string): string {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();
  // const hours = String(date.getHours()).padStart(2, "0");
  // const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year}`;
}
const modalPortal = document.querySelector("#portal-root");

const OrdersPage = () => {
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);
  // const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<IOrder[]>([]);
  const [pymentStatus, setPymentStatus] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  console.log("status :>> ", status);
  useEffect(() => {
    async function fetchOrders() {
      const data = await getOrders();
      setData(data);
    }
    fetchOrders();
  }, []);
  const handlePageRedirects = (id: number) => {
    if (id) {
      navigate(`/admin/orders/${id}`);
    }
  };
  const handleDeleteOrder = (id: number) => {
    console.log("id :>> ", id);
  };
  const handleUpdateStatus = (id: number) => {
    console.log("id :>> ", id);
  };
  const optionsPayment = ["В очікуванні", "Оплачено"];
  const optionStatus = ["В очікуванні", "Відправлено", "Відхилено"];
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
              {/* <th css={thHeadsStyles}>Прізвище</th> */}
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
                <tr key={item.id}>
                  <td css={thHeadsStyles}>{item.id}</td>
                  <td css={thHeadsStyles}>{formatDate(item.order_date)}</td>
                  <td css={thHeadsStyles}>{item.name}</td>
                  {/* <td css={thHeadsStyles}>{item.last_name}</td> */}
                  <td css={thHeadsStyles}>{item.phone}</td>
                  <td css={thHeadsStyles}>{item.total_amount}</td>
                  <td css={thHeadsStyles}>{item.payment_method}</td>
                  <td css={thHeadsStyles}>
                    {" "}
                    <SortingItems<string>
                      options={optionsPayment}
                      width={"127px"}
                      widthTagP={"auto"}
                      widthContainer={"110px"}
                      height={"auto"}
                      border={"unset"}
                      padding={"unset"}
                      borderRadius={"12px"}
                      justifyContent={"center"}
                      backGround={"var(--bg-light-grey)"}
                      color={"var(--text-black)"}
                      fontSize={"12px"}
                      top={"30px"}
                      gap={"8px"}
                      setSelectedOption={setPymentStatus}
                      selectedOption={pymentStatus}
                    />
                  </td>
                  <td css={thHeadsStyles}>
                    <SortingItems<string>
                      options={optionStatus}
                      width={"127px"}
                      widthTagP={"auto"}
                      widthContainer={"110px"}
                      height={"auto"}
                      border={"unset"}
                      padding={"unset"}
                      borderRadius={"12px"}
                      backGround={"var(--bg-light-grey)"}
                      color={"var(--text-black)"}
                      justifyContent={"center"}
                      fontSize={"12px"}
                      top={"30px"}
                      gap={"8px"}
                      setIsOpenModal={setIsModalOpen}
                      setSelectedOption={setStatus}
                      selectedOption={status}
                    />
                  </td>
                  <td
                    onClick={() => handleDeleteOrder(Number(item.id))}
                    css={thHeadsStyles}
                  >
                    <MdDeleteOutline css={tdTrash} />
                  </td>
                  <td
                    onClick={() => handlePageRedirects(Number(item.id))}
                    css={thHeadsStyles}
                  >
                    <FaArrowRightLong css={tdArrow} />
                  </td>
                  
                </tr>
              ))}
          </tbody>
        </table>
        {isModalOpen &&
                    modalPortal &&
                    createPortal(
                      <Modal setIsOpen={setIsModalOpen}>
                        {status === "Відхилено" && (
                          <StatusWarningModal
                            // updateStatus={() =>
                            //   handleUpdateStatus(Number(item.id))
                            // }
                            // name={item.id ? Number(item.id) : null}
                          />
                        )}
                      </Modal>,
                      modalPortal
                    )}
      </div>
    </section>
  );
};

export default OrdersPage;
