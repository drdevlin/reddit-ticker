import { configureStore } from '@reduxjs/toolkit';
import topReducer from '../features/top/topSlice';

export default configureStore({
  reducer: {
    top: topReducer,
  },
});
