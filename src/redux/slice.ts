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
      state.cart.push(action.payload);
    },
    removeFromCart(state, action: PayloadAction<number>) {
        state.cart = state.cart.filter(item => item.id !== action.payload);
      },
  },
});

export const { addToCart, removeFromCart} = cartSlice.actions;
export default cartSlice.reducer;
