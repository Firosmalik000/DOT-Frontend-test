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

const username = localStorage.getItem('user');
const initialState: CartState = {
  items: JSON.parse(localStorage.getItem(`cart_${username}`) || '[]'),
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const username = localStorage.getItem('user');
      const item = action.payload;
      const selectItem = state.items.find((cartItem) => cartItem.id === item.id);
      if (selectItem) {
        selectItem.qty += 1;
      } else {
        state.items.push({ ...item, qty: 1 });
      }
      localStorage.setItem(`cart_${username}`, JSON.stringify(state.items));
    },
    removeCart: (state, action: PayloadAction<number>) => {
      const username = localStorage.getItem('user');
      const itemId = action.payload;
      state.items = state.items.filter((item) => item.id !== itemId);
      localStorage.setItem(`cart_${username}`, JSON.stringify(state.items));
    },
    increaseCart: (state, action: PayloadAction<number>) => {
      const username = localStorage.getItem('user');
      const itemId = action.payload;
      const selectItem = state.items.find((item) => item.id === itemId);
      if (selectItem) {
        selectItem.qty += 1;
      }
      localStorage.setItem(`cart_${username}`, JSON.stringify(state.items));
    },
    decreaseCart: (state, action: PayloadAction<number>) => {
      const username = localStorage.getItem('user');
      const itemId = action.payload;
      const selectItem = state.items.find((item) => item.id === itemId);
      if (selectItem) {
        selectItem.qty -= 1;
        if (selectItem.qty < 1) {
          state.items = state.items.filter((item) => item.id !== itemId);
        }
      }
      localStorage.setItem(`cart_${username}`, JSON.stringify(state.items));
    },
    clearCart: (state) => {
      const username = localStorage.getItem('user');
      state.items = [];
      localStorage.setItem(`cart_${username}`, JSON.stringify(state.items));
    },
  },
});

export const { addToCart, removeCart, clearCart, increaseCart, decreaseCart } = cartSlice.actions;

export default cartSlice.reducer;
