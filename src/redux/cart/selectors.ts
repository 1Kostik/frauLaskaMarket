import { CartState } from "./slice";

export const selectCart = (state: { cart: CartState }) => state.cart.cart;
export const selectCartTotalQuantity = (state: { cart: CartState }) =>
  state.cart.cart.reduce((total, item) => total + item.quantity, 0);

// export const selectCartTotalPrice = (state: { cart: CartState }) =>
//   state.cart.cart.reduce((total, item) => total + item.price * item.quantity * (1 - item.discount / 100), 0);
