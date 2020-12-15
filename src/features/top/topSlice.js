import { createSlice } from '@reduxjs/toolkit';

export const topSlice = createSlice({
  name: 'top',
  initialState: {
    posts: [],
  },
  reducers: {},
});

export default topSlice.reducer;
