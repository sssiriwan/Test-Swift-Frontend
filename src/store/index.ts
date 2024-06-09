import { configureStore } from '@reduxjs/toolkit';
import shapeSlice from './shapeSlice';

export const store = configureStore({
  reducer: {
    shapes: shapeSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
