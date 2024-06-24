import { CartState } from "./slice";

export const selectCart = (state: { cart: CartState }) =>
  state.cart.cart;
