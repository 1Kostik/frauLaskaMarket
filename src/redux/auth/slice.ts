import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "Interfaces/IAuthState";
import { authUser } from "./operations";

const initialState: IAuthState = {
  token: "",
  username: "",
  isLoading: false,
  error: null,
};

const handelPending = (state: IAuthState) => {
  state.isLoading = true;
};

const handelAuthFulfilled = (
  state: IAuthState,
  { payload }: PayloadAction<{ token: string; name: string }>
) => {
  state.token = payload.token;
  state.username = payload.name;
  state.isLoading = false;
};

const handelRejected = (
  state: IAuthState,
  { payload }: PayloadAction<unknown>
) => {
  state.error = typeof payload === "string" ? payload : "Unknown error";
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(authUser.fulfilled), handelAuthFulfilled)
      .addMatcher(isAnyOf(authUser.pending), handelPending)
      .addMatcher(isAnyOf(authUser.rejected), handelRejected);
  },
});

export default authSlice.reducer;
