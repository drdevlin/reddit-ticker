import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  post: {},
  active: false
};

export const viewPortSlice = createSlice({
  name: 'viewPort',
  initialState,
  reducers: {
    setPost(state, action) {
      state.post = action.payload;
      state.active = !state.active;
    }
  },
});

export const { setPost } = viewPortSlice.actions;

export default viewPortSlice.reducer;

export const selectExternalPost = state => state.viewPort.post;
export const selectMode = state => state.viewPort.active;
