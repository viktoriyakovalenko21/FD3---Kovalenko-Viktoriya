import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slices/cartSlice';
import itemsReducer from './slices/itemsSlice'; 

export const store = configureStore({
  reducer: {
    cart: cartReducer, 
    items: itemsReducer, 
  },
});