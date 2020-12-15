import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import topReducer from '../features/top/topSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    top: topReducer,
  },
});
