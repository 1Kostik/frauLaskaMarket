import { createSlice, isAnyOf, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "Interfaces/IAuthState";
import { authUser } from "./operations";
import { LoginError } from "Interfaces/IloginError";

const initialState: IAuthState = {
  token: null,
  username: null,
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
  state.error = null;
};

const handelRejected = (
  state: IAuthState,
  action: PayloadAction<LoginError | undefined>
) => {
  if (action.payload) {
    state.error = action.payload.errorMessage;
  } else {
    state.error = "Невідома помилка";
  }
  state.isLoading = false;
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    clearToken: (state: IAuthState) => {
      state.token = null;
      state.username = null;
      state.error = null;
    },
    clearError: (state: IAuthState) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addMatcher(isAnyOf(authUser.fulfilled), handelAuthFulfilled)
      .addMatcher(isAnyOf(authUser.pending), handelPending)
      .addMatcher(isAnyOf(authUser.rejected), handelRejected);
  },
});

export const { clearToken, clearError } = authSlice.actions;

export default authSlice.reducer;
