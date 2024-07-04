// store.ts
import { configureStore } from '@reduxjs/toolkit';
import cartReducer, { CartState } from '../slice/CartSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type RootState = {
  cart: CartState;
};

export type AppDispatch = typeof store.dispatch;

export default store;
