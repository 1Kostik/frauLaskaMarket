import HeroSection from "@components/HeroSection/HeroSection"

const OrderedPage = () => {
  return (
    <>
      <HeroSection viewType={"other"} pageName="ordered">
        <h1>Дякуємо за замовлення!</h1>
        <p>Всі деталі будуть відправлені вам на пошту (Назва пошти)</p>
      </HeroSection>
    </>
  );
}

export default OrderedPage