import OrderItemCard from "@components/OrderItemCard/OrderItemCard";
import { formatDate } from "@pages/OrdersPage/OrdersPage";
import {
  getOrderById,
  getProductById,
  updateOrder,
} from "@services/servicesApi";
import { containerStyles } from "@styles/variables";
import { IOrder } from "Interfaces/IOrder";
import { Product } from "Interfaces/Product";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import {
  btnBack,
  btnDelete,
  description,
  infoContainer,
  infoWrapper,
  infoWrapperBtn,
  itemsContainer,
  tdTrash,
  title,
  titleContainer,
  titleH2,
  totalAmount,
  wrapper,
} from "./OrderItemPage.styled";
import CartItemCard from "@components/CartItemCard";
import { nanoid } from "nanoid";
import SortingItems from "@components/SortingItems/SortingItems";
import { MdDeleteOutline } from "react-icons/md";

const OrderItemPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [data, setData] = useState<IOrder>();
  const [orderProducts, setOrderProducts] = useState<Product[]>([]);
  const [previousProductIds, setPreviousProductIds] = useState<number[]>([]);
  const [pymentStatus, setPymentStatus] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const productIdArray: number[] =
    data?.order_items.map((item) => Number(item.product_id)) ?? [];
  const optionsPayment = ["В очікуванні", "Оплачено"];
  const optionStatus = ["В очікуванні", "Відправлено", "Відхилено"];
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
    async function fetchOrderProducts() {
      if (data) {
        const fetchedProducts = await Promise.all(
          productIdArray.map((productId) => getProductById(productId))
        );
        setOrderProducts(fetchedProducts);
      }
    }

    if (productIdArray.length > 0) {
      const arraysAreEqual =
        previousProductIds.length === productIdArray.length &&
        previousProductIds.every(
          (value, index) => value === productIdArray[index]
        );

      if (!arraysAreEqual) {
        fetchOrderProducts();
        setPreviousProductIds(productIdArray);
      }
    }
  }, [data, productIdArray, previousProductIds]);

  const productsForRender = orderProducts
    .map((item) => {
      const orderItem = data?.order_items.find(
        (orderItem) => orderItem.product_id === item.id
      );

      if (orderItem) {
        const variation = item.variations.find((variation) => {
          const sizeMatch = orderItem.size
            ? variation.size === orderItem.size
            : true;
          const colorMatch = orderItem.color
            ? variation.color === orderItem.color
            : true;
          return sizeMatch && colorMatch;
        });

        return {
          product_id: item.id,
          title: item.title,
          img: item.imageUrls[0],
          product_code: orderItem.product_id,
          size: orderItem.size,
          discount: variation?.discount ?? null,
          price: variation?.price ?? null,
          count: orderItem.count,
          color: orderItem.color,
          total_cost: orderItem.total_cost,
          quantity: orderItem.count,
        };
      }
      return null;
    })
    .filter((product) => product !== null);

  const handleChangStatus = async () => {
    const status = "Виконано";
    await updateOrder(Number(id), status);
  };

  return (
    <section style={{ height: "100vh", width: "100vw", paddingTop: "100px" }}>
      <div css={containerStyles}>
        <div css={titleContainer}>
          <button css={btnBack} onClick={() => navigate(-1)}>
            <IoMdArrowBack />
          </button>
          <h1 css={title}>
            Замовлення # {id} від {data && formatDate(data!.order_date)}
          </h1>
        </div>
        <div css={wrapper}>
          <div css={infoContainer}>
            {data && (
              <>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Замовник:</h2>
                  <p css={description}>
                    {data.last_name} {data.name}
                  </p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Контакти:</h2>
                  <p css={description}>{data.phone}</p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Спосіб оплати:</h2>
                  <p css={description}>{data.payment_method}</p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Спосіб доставки:</h2>
                  <p css={description}>{data.delivery_type}</p>
                </div>
                {data.delivery_type !== "Самовивіз" && (
                  <>
                    <div css={infoWrapper}>
                      <h2 css={titleH2}>Адреса:</h2>
                      <p css={description}>{data.delivery_type}</p>
                    </div>
                    <div css={infoWrapper}>
                      <h2 css={titleH2}>Відділення/поштомат:</h2>
                      <p css={description}>{data.post_office_number}</p>
                    </div>
                  </>
                )}
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Статус оплати:</h2>
                  {/* <p css={description}>{data.payment_status}</p> */}
                  <p css={description}>
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
                  </p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Статус замовлення:</h2>
                  {/* <p css={description}>{data.status}</p> */}
                  <p css={description}>
                    {" "}
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
                      setSelectedOption={setStatus}
                      selectedOption={status}
                    />
                  </p>
                </div>
                <div css={infoWrapper}>
                  <h2 css={titleH2}>Отримувач:</h2>
                  <p css={description}>
                    {data.recipient_last_name
                      ? data.recipient_last_name
                      : data.last_name}{" "}
                    {data.recipient_name ? data.recipient_name : data.name}{" "}
                    {data.recipient_phone ? data.recipient_phone : ""}
                  </p>
                </div>
              </>
            )}
            <div css={infoWrapperBtn}>
              <h2 css={titleH2}>Видалити замовлення:</h2>
              <p css={description}>
                <button css={btnDelete}>Видалити</button>
              </p>
            </div>
          </div>
          <div css={itemsContainer}>
            {productsForRender.map((item) => (
              <CartItemCard key={nanoid()} item={item} width={"100%"} />
            ))}
            <div css={infoWrapper}>
              <h2 css={titleH2}>Загальна ціна</h2>
              {data && <p css={totalAmount}>{data.total_amount} ₴</p>}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrderItemPage;
