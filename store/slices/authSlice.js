import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  user: {},
  isLoading: true,
  isAuthenticated: false,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    saveUser: (state, action) => {
      state.user = action.payload;
      state.isLoading = false;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.user = {};
      state.isLoading = false;
      state.isAuthenticated = false;
    },
  },
});

export const { saveUser, logout } = authSlice.actions;
export default authSlice.reducer;
