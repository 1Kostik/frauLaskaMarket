import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { Product } from "Interfaces/Product";
import { createAdvert } from "./operations";

interface IAdsState {
  ads: Product[];
  advert: Product | undefined;
  isLoading: boolean;
  error: unknown;
}

const initialState: IAdsState = {
  ads: [],
  advert: undefined,
  isLoading: false,
  error: null,
};

const handleFulfilled = (
  state: IAdsState,
  { payload }: PayloadAction<Product>
) => {
  state.advert = payload;
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

const adsSlice = createSlice({
  name: "ads",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(createAdvert.fulfilled), handleFulfilled)
      .addMatcher(isAnyOf(createAdvert.pending), handlePending)
      .addMatcher(isAnyOf(createAdvert.rejected), handleRejected);
  },
});

export default adsSlice.reducer;


