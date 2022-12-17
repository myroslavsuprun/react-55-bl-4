import { configureStore } from '@reduxjs/toolkit';
import { todoReducers } from './slice';

export const store = configureStore({
  reducer: todoReducers,
});
