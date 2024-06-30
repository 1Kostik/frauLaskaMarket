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
    removeFromCart(state, action: PayloadAction<{ id: number; size: string }>) {
      state.cart = state.cart.filter(
        (item) =>
          !(item.id === action.payload.id && item.size === action.payload.size)
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
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
