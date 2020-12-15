import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  posts: [
    {title: 'foo'},
    {title: 'bar'},
    {title: 'two'},
  ]
}

export const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {},
});

export default topSlice.reducer;
