export const previousPageNav = (path: string) => {
  switch (path) {
    case "product":
      return "Сторінка товару";
    case "privacy-policy":
      return "Договір публічної оферти";
    case "payment-delivery":
      return "Доставка та оплата  ";

    default:
      return "Магазин";
  }
};
