import React, { SetStateAction, useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

import {
  tdArrow,
  tdTrash,
  thHeadsStyles,
} from "@pages/OrdersPage/OrdersPage.styled";

// import {
//   getProductById,
//   // updateProductCountIncrease,
// } from "@services/servicesApi";

import { IOrder } from "Interfaces/IOrder";
// import { Product } from "Interfaces/Product";
import { formatDate } from "@utils/formatDate";

import DeleteOrderWarningModal from "@components/DeleteOrderWarningModal/DeleteOrderWarningModal";
import Modal from "@components/Modal";
import SortingItems from "@components/SortingItems/SortingItems";
import StatusWarningModal from "@components/StatusWarningModal/StatusWarningModal";
import { updateStatus } from "@utils/updateStatus";
import { orderStatusStyles } from "./OrderItem.styled";

interface IOrderItemProps {
  item: IOrder;
  setIsUpsateStatusOrder: React.Dispatch<SetStateAction<boolean>>;
  onDelete: (id: number) => void;
}
const modalPortal = document.querySelector("#portal-root");

const OrderItem: React.FC<IOrderItemProps> = ({
  item,
  onDelete,
  setIsUpsateStatusOrder,
}) => {
  const navigate = useNavigate();

  const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [disableOrder, setDisableOrder] = useState<boolean>(false);
  const [isOrderCompleted, setIsOrderCompleted] = useState(false);

  useEffect(() => {
    if (status === "Відправлено" && paymentStatus === "Сплачено") {
      setIsOrderCompleted(true);
    }
  }, [status, paymentStatus]);

  useEffect(() => {
    if (item.status === "Відхилено") {
      setDisableOrder(true);
    }
  }, [item.status]);

  const handleUpdateStatus = async (id: number) => {
    if (id && isChangeStatusModalOpen) {
      setDisableOrder(true);
      await updateStatus(id, "Відхилено");
      setIsUpsateStatusOrder((prev) => !prev);
    }
  };

  const handlePageRedirects = (id: number) => {
    if (id && !disableOrder) {
      navigate(`/admin/orders/${id}`);
    } else if (id && disableOrder && item.status === "Відправлено") {
      navigate(`/admin/orders/${id}`);
    }
  };

  const optionsPayment =
    item.payment_status === "Сплачено"
      ? ["Сплачено"]
      : ["В очікуванні", "Сплачено"];

  const optionStatus =
    item.status === "Відправлено"
      ? ["Відправлено"]
      : item.status === "Відхилено"
      ? ["Відхилено"]
      : ["В очікуванні", "Відправлено", "Відхилено"];

  const colorStatus = isOrderCompleted
    ? "#154214"
    : item.status === "Відхилено"
    ? "#5a2323"
    : "";

  return (
    <tr key={item.id} css={orderStatusStyles(colorStatus)}>
      <td css={thHeadsStyles}>{item.id}</td>
      <td css={thHeadsStyles}>{formatDate(item.order_date)}</td>
      <td css={thHeadsStyles}>{item.name}</td>
      <td css={thHeadsStyles}>{item.phone}</td>
      <td css={thHeadsStyles}>{item.total_amount}</td>
      <td css={thHeadsStyles}>{item.payment_method}</td>
      <td css={thHeadsStyles}>
        {" "}
        <SortingItems<string>
          idOrders={item.id}
          options={optionsPayment}
          width={"127px"}
          widthTagP={"50%"}
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
          setSelectedOption={setPaymentStatus}
          selectedOption={paymentStatus}
          disable={
            paymentStatus === "Сплачено" || status === "Відхилено"
              ? true
              : disableOrder
          }
        />
      </td>
      <td css={thHeadsStyles}>
        <SortingItems<string>
          idOrders={item.id}
          options={optionStatus}
          width={"127px"}
          widthTagP={"50%"}
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
          disable={status === "Відправлено" ? true : disableOrder}
          setIsOpenModal={setIsChangeStatusModalOpen}
          setSelectedOption={setStatus}
          selectedOption={status}
        />
      </td>
      <td onClick={() => setIsDeleteModalOpen(true)} css={thHeadsStyles}>
        <MdDeleteOutline css={tdTrash} />
      </td>
      <td
        onClick={() => handlePageRedirects(Number(item.id))}
        css={thHeadsStyles}
      >
        <FaArrowRightLong css={tdArrow} />
      </td>
      {isChangeStatusModalOpen &&
        modalPortal &&
        createPortal(
          <Modal setIsOpen={setIsChangeStatusModalOpen}>
            {status === "Відхилено" && (
              <StatusWarningModal
                updateStatus={() => handleUpdateStatus(Number(item.id))}
                name={item.id ? Number(item.id) : null}
                setIsOpen={setIsChangeStatusModalOpen}
              />
            )}
          </Modal>,
          modalPortal
        )}
      {isDeleteModalOpen &&
        modalPortal &&
        createPortal(
          <Modal setIsOpen={setIsDeleteModalOpen}>
            <DeleteOrderWarningModal
              id={item.id ? Number(item.id) : null}
              deleteOrder={onDelete}
            />
          </Modal>,
          modalPortal
        )}
    </tr>
  );
};

export default OrderItem;
