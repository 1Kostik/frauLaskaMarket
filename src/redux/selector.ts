import { BasketState } from "./slisce";

export const selectBasket = (state: { basket: BasketState }) => state.basket.basket;