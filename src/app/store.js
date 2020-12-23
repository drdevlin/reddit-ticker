import { configureStore } from '@reduxjs/toolkit';
import topReducer from '../features/top/topSlice';
import hotReducer from '../features/hot/hotSlice';
import newReducer from '../features/new/newSlice';
import viewPortReducer from '../features/post/viewPortSlice';

export default configureStore({
  reducer: {
    top: topReducer,
    hot: hotReducer,
    new: newReducer,
    viewPort: viewPortReducer,
  },
});
