
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAddedToCartProduct } from "Interfaces/IAddedToCartProduct";
export interface CartState {
  cart: IAddedToCartProduct[];
}

const initialState: CartState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IAddedToCartProduct>) {
    
      state.cart = [...state.cart, action.payload];
    },
    removeFromCart(
      state,
      action: PayloadAction<{ id: number; size?: number | null; color?: string | null}>
    ) {
      
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
      action: PayloadAction<{ id: number; size?: number | null}>
    ) {
      const item = state.cart.find(
        (item) =>
          item.product_id === action.payload.id && item.size === action.payload.size
      );
      if (item) {
        item.count += 1;
        item.totalСost =
          Math.round(item.price - (item.price * (item.discount || 0)) / 100) *
          item.count;
      }
    },
    decreaseQuantity(
      state,
      action: PayloadAction<{ id: number; size?: number | null }>
    ) {
      const item = state.cart.find(
        (item) =>
          item.product_id === action.payload.id && item.size === action.payload.size
      );
      if (item && item.count > 1) {
        item.count -= 1;
        item.totalСost =
          Math.round(item.price - (item.price * (item.discount || 0)) / 100) *
          item.count;
      }
    },
  },
});

export const { addToCart, removeFromCart, increaseQuantity, decreaseQuantity } =
  cartSlice.actions;
export default cartSlice.reducer;
