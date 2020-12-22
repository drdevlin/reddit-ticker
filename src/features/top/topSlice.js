import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { redditGet } from '../../api/reddit';

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('top/fetchPosts', async () => {
  const response = await redditGet('/r/toronto/top?t=day');
  return response.data.children; // Returns just the posts array
})

export const topSlice = createSlice({
  name: 'top',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchPosts.pending]: (state, action) => {
      state.status = 'loading';
    },
    [fetchPosts.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.posts = action.payload;
    },
    [fetchPosts.rejected]: (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    }
  },
});

export default topSlice.reducer;

export const selectAllPosts = state => state.top.posts;
export const selectStatus = state => state.top.status;
export const selectError = state => state.top.error;
