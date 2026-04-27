
import { configureStore } from '@reduxjs/toolkit';
import productReducer from './slice/ProductSlice.js'; 

export const store = configureStore({
  reducer: {
    product: productReducer, 
  },
});