import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { redditGet } from '../../api/reddit';

const initialState = {
  posts: [],
  status: 'idle',
  error: null
};

export const fetchPosts = createAsyncThunk('hot/fetchPosts', async () => {
  const response = await redditGet('/r/toronto/hot');
  return response.data.children; // Returns just the posts array
})

export const hotSlice = createSlice({
  name: 'hot',
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

export default hotSlice.reducer;

export const selectAllPosts = state => state.hot.posts;
