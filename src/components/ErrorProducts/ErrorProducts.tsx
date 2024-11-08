import React from "react";
import { error_products, text } from "./ErrorProducts.styled";

const ErrorProducts: React.FC = () => {
  return (
    <div css={error_products}>
      <p css={text}>
        На жаль, за вашим запитом товари не знайдені. Будь ласка, уточніть
        пошук!
      </p>
    </div>
  );
};

export default ErrorProducts;
