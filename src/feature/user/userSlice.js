import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userInfo: {},
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateLoggedInUser: (state, action) => {
      state.userInfo = { ...action.payload.user };
      localStorage.setItem("userToken", action.payload.access_token);
      localStorage.setItem("userType", action.payload.user.user_type);
      return state;
    },
    logoutUser: (state) => {
      localStorage.removeItem("userToken");
      localStorage.removeItem("userType");
      state.userInfo = {};
      return state;
    },
  },
});

export const { updateLoggedInUser, logoutUser } = userSlice.actions;
export const loggedInUser = (state) => state.user.userInfo;
export default userSlice.reducer;
