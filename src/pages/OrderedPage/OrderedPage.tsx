import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { useAppDispatch } from "@redux/hooks";

import { clearCart } from "@redux/cart/slice";

import HeroSection from "@components/HeroSection/HeroSection";

const OrderedPage = () => {
  const [searchParams] = useSearchParams();
  const email = searchParams.get("email");
  const order_id = searchParams.get("order_id");

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(clearCart());
  }, [dispatch, order_id]);

  return (
    <>
      <HeroSection viewType={"other"} pageName="ordered">
        <h1>Дякуємо за замовлення!</h1>
        <p>{`Всі деталі будуть відправлені вам на пошту: ${email}`} </p>
      </HeroSection>
    </>
  );
};

export default OrderedPage;
