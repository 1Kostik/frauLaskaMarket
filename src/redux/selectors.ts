import { BasketState } from "./slice";

export const selectBasket = (state: { basket: BasketState }) =>
  state.basket.basket;
