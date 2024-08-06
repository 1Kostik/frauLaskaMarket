import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface CartState {
  cart: any[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<any>) {
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart(
      state,
      action: PayloadAction<{ id: number; size: string; color: string }>
    ) {
      console.log(' action.payload :>> ',  action.payload)
      state.cart = state.cart.filter(
        (item) =>
          !(
            item.product_id === action.payload.id &&
            item.size === action.payload.size &&
            item.color === action.payload.color
          )
      );
    },
    increaseQuantity(
      state,
      action: PayloadAction<{ id: number; size: string }>
    ) {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (item) {
        item.quantity += 1;
        item.totalСost =
          Math.round(item.price - (item.price * item.discount) / 100) *
          item.quantity;
      }
    },
    decreaseQuantity(
      state,
      action: PayloadAction<{ id: number; size: string }>
    ) {
      const item = state.cart.find(
        (item) =>
          item.id === action.payload.id && item.size === action.payload.size
      );
      if (item && item.quantity > 1) {
        item.quantity -= 1;
        item.totalСost =
          Math.round(item.price - (item.price * item.discount) / 100) *
          item.quantity;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
