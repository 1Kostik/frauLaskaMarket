import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useNavigate } from "react-router-dom";

import { FaArrowRightLong } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";

import {
  tdArrow,
  tdTrash,
  thHeadsStyles,
} from "@pages/OrdersPage/OrdersPage.styled";

import {
  getProductById,
  updateOrder,
  updateProductCountDecrease,
  updateProductCountIncrease,
} from "@services/servicesApi";

import { IOrder, IOrderItem } from "Interfaces/IOrder";
import { Product } from "Interfaces/Product";
import { formatDate } from "@utils/formatDate";

import DeleteOrderWarningModal from "@components/DeleteOrderWarningModal/DeleteOrderWarningModal";
import Modal from "@components/Modal";
import SortingItems from "@components/SortingItems/SortingItems";
import StatusWarningModal from "@components/StatusWarningModal/StatusWarningModal";

interface IOrderItemProps {
  item: IOrder;
  onDelete: (id: number) => void;
}
const modalPortal = document.querySelector("#portal-root");

const OrderItem: React.FC<IOrderItemProps> = ({ item, onDelete }) => {
  const navigate = useNavigate();

  const [isChangeStatusModalOpen, setIsChangeStatusModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [pymentStatus, setPymentStatus] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const [idForUpdCount, setIdForUpdCount] = useState<number | null>(null);
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [previousProductIds, setPreviousProductIds] = useState<number[]>([]);
  const [disableOrder, setDisableOrder] = useState<boolean>(false);

  const variation_ids = orderProducts.flatMap((product) => {
    const orderItem = item.order_items.find(
      (orderItem: IOrderItem) => orderItem.product_id === product.id
    );

    if (orderItem) {
      const variations = product.variations.filter((variation) => {
        const sizeMatch = orderItem.size
          ? String(variation.size) === String(orderItem.size)
          : true;
        const colorMatch = orderItem.color
          ? String(variation.color).toLowerCase() ===
            String(orderItem.color).toLowerCase()
          : true;

        return sizeMatch && colorMatch;
      });

      return variations.map((variation) => {
        return { id: variation.id, count: orderItem.count };
      });
    }
    return [];
  });

  useEffect(() => {
    const product_ids =
      item.id === idForUpdCount
        ? item.order_items.map((orderItem) => orderItem.product_id)
        : [];
    async function fetchOrderProducts() {
      const result = await Promise.all(
        product_ids.map((productId) => getProductById(productId))
      );

      setOrderProducts(result);
    }

    if (product_ids.length > 0) {
      const arraysAreEqual =
        previousProductIds.length === product_ids.length &&
        previousProductIds.every(
          (value, index) => value === product_ids[index]
        );

      if (!arraysAreEqual) {
        fetchOrderProducts();
        setPreviousProductIds(product_ids);
      }
    }
  }, [item, previousProductIds, idForUpdCount]);

  async function updateStatus(orderId: number, status: string) {
    await updateOrder(orderId, status);
  }

  useEffect(() => {
    async function IncreaseCountProduct(id: number, count: number) {
      await updateProductCountIncrease(id, count);
    }
    if (
      variation_ids.length > 0 &&
      status === "Відхилено" &&
      isChangeStatusModalOpen
    )
      variation_ids.forEach((item) => {
        IncreaseCountProduct(item.id, item.count);
      });
  }, [variation_ids, status, isChangeStatusModalOpen]);

  useEffect(() => {
    async function DecreaseCountProduct(id: number, count: number) {
      await updateProductCountDecrease(id, count);
    }
    if (variation_ids.length > 0 && status === "Відправлено") {
      variation_ids.forEach((item) => {
        DecreaseCountProduct(item.id, item.count);
      });
    }
  }, [variation_ids, status]);

  useEffect(() => {
    if (item.status === "Відхилено" || item.status === "Відправлено") {
      setDisableOrder(true);
    }
  }, [item.status]);

  const handleUpdateStatus = (id: number) => {
    if (id && status === "Відхилено") {
      setIdForUpdCount(id);
      setDisableOrder(true);
      updateStatus(id, status);
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

  return (
    <tr key={item.id}>
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
          setSelectedOption={setPymentStatus}
          selectedOption={pymentStatus}
          disable={
            pymentStatus === "Оплачено"
              ? true
              : status === "Відправлено"
              ? false
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
          disable={disableOrder}
          setIsOpenModal={setIsChangeStatusModalOpen}
          setSelectedOption={setStatus}
          selectedOption={status}
          setIdForUpdCount={setIdForUpdCount}
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
