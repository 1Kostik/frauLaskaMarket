import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IOrder } from "Interfaces/IOrder";
import { fetchOrder } from "./operations";

interface IOrderState {
  data: IOrder | null;
  isLoading: boolean;
  error: unknown;
}

const initialState: IOrderState = {
  data: null,
  isLoading: false,
  error: null,
};

const handleFulfilled = (state: IOrderState, { payload }: PayloadAction<IOrder>) => {
  state.data = payload;
  state.isLoading = false;
  state.error = null;
};

const handlePending = (state: IOrderState) => {
  state.isLoading = true;
};

const handleRejected = (state: IOrderState, { payload }: PayloadAction<unknown>) => {
  state.isLoading = false;
  state.error = payload;
};

const ordersSlice = createSlice({
  name: "order",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrder.pending, handlePending)
      .addCase(fetchOrder.fulfilled, handleFulfilled)
      .addCase(fetchOrder.rejected, handleRejected);
  },
});

export default ordersSlice.reducer;
