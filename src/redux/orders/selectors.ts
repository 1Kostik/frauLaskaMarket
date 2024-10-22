import { RootState } from "@redux/store";
export const selectOrderData = (state: RootState) => state.order.data;
export const selectOrderLoading = (state: RootState) => state.order.isLoading;
export const selectOrderError = (state: RootState) => state.order.error;
