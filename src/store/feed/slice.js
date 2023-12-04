import { createSlice } from "@reduxjs/toolkit";

export const feedSlice = createSlice({
  name: "feed",
  initialState: {
    allPosts: []
  },
  reducers: {
    setPosts: (state, action) => {
        // empty for now
        console.log(action.payload)
        state.allPosts = action.payload;
    }
  },
});

export const { setPosts } = feedSlice.actions;
export default feedSlice.reducer; 