import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuth } from "Interfaces/IAuth";

const initialState: IAuth = {
  isAuth: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    handleAuth(state, action: PayloadAction<boolean>) {
      state.isAuth = action.payload;
    },
  },
});

export const { handleAuth } = authSlice.actions;
export default authSlice.reducer;
