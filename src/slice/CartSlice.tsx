// CartSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: number;
  title: string;
  price: number;
  qty: number;
}

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = { items: [] };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const selectItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (selectItem) {
        selectItem.qty += 1;
        console.log(selectItem);
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      console.log(item);
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
    },
    increaseCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const selectItem = state.items.find((item) => item.id === itemId);
      if (selectItem) {
        selectItem.qty += 1;
      }
    },
    decreaseCart: (state, action: PayloadAction<number>) => {
      const itemId = action.payload;
      const selectItem = state.items.find((item) => item.id === itemId);
      if (selectItem) {
        selectItem.qty -= 1;
        if (selectItem.qty < 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
    },
    clearCart: (state) => {
      state.items = [];
    },
  },
});

export const { addToCart, removeCart, clearCart, increaseCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
