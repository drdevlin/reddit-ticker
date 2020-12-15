import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {title: 'foo'},
    {title: 'bar'},
    {title: 'baz'},
  ],
};

export const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {},
});

export default topSlice.reducer;

export const selectAllPosts = state => state.top.posts;
