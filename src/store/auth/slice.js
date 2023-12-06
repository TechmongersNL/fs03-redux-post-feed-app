import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    token: null,
    profileInfo: null
  },
  reducers: {
    setToken: (state, action) => {
        state.token = action.payload;
    },
    setProfileInfo: (state, action) => {
      state.profileInfo = action.payload;
    }
  },
});

export const { setToken, setProfileInfo } = authSlice.actions;
export default authSlice.reducer; 