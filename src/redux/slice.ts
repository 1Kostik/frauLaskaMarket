import { createSlice, PayloadAction } from "@reduxjs/toolkit";
export interface BasketState {
  basket: any[];
}

const initialState: BasketState = {
  basket: [],
};

const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addToBasket(state, action: PayloadAction<any>) {
      state.basket.push(action.payload);
    },
    removeFromBasket(state, action: PayloadAction<number>) {
        state.basket = state.basket.filter(item => item.id !== action.payload);
      },
  },
});

export const { addToBasket, removeFromBasket} = basketSlice.actions;
export default basketSlice.reducer;
