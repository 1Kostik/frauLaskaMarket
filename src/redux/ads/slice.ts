import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { ImageUrl, Product } from "Interfaces/Product";
import {
  createProduct,
  deleteProduct,
  getProduct,
  updateProduct,
} from "./operations";

interface IAdsState {
  ads: Product[];
  product: Product | null;
  isLoading: boolean;
  error: unknown;
}

const initialState: IAdsState = {
  ads: [],
  product: null,
  isLoading: false,
  error: null,
};

const handleFulfilled = (
  state: IAdsState,
  { payload }: PayloadAction<Product>
) => {
  state.product = payload;
  state.isLoading = false;
};

const handlePending = (state: IAdsState) => {
  state.isLoading = true;
};

const handleRejected = (
  state: IAdsState,
  { payload }: PayloadAction<unknown>
) => {
  state.isLoading = false;
  state.error = payload;
};

const handleDeleteFulfilled = (
  state: IAdsState,
  { payload }: { payload: Product[] }
) => {
  state.ads = payload;
  state.isLoading = false;
};

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {
    deleteImage(state: IAdsState, { payload }: { payload: number }) {
      state.product = {
        ...(state.product as Product),
        imageUrls:
          state.product?.imageUrls.filter(
            (image: ImageUrl) => image.id !== payload
          ) || [],
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(deleteProduct.fulfilled, handleDeleteFulfilled)
      .addMatcher(
        isAnyOf(
          createProduct.fulfilled,
          updateProduct.fulfilled,
          getProduct.fulfilled
        ),
        handleFulfilled
      )
      .addMatcher(
        isAnyOf(
          createProduct.pending,
          updateProduct.pending,
          getProduct.pending
        ),
        handlePending
      )
      .addMatcher(
        isAnyOf(
          createProduct.rejected,
          deleteProduct.rejected,
          updateProduct.rejected,
          getProduct.rejected
        ),
        handleRejected
      );
  },
});

export default adsSlice.reducer;
export const { deleteImage } = adsSlice.actions;
