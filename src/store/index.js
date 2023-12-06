import { configureStore } from "@reduxjs/toolkit";
import feedReducer from "./feed/slice";
import authReducer from "./auth/slice";

const store = configureStore({
  reducer: {
    feed: feedReducer,
    auth: authReducer
  },
});

export default store;