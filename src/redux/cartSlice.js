// src/redux/cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

// Helper function to calculate total amount
const calculateTotalAmount = (items) => {
  return items.reduce((total, item) => total + (item.totalPrice || 0), 0);
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const newItem = action.payload;
      
      // Validate required fields
      if (!newItem || !newItem.id) {
        console.error('Invalid item added to cart:', newItem);
        return;
      }
      
      const existingItem = state.items.find(item => item.id === newItem.id);
      
      if (existingItem) {
        existingItem.quantity++;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      } else {
        // Ensure price is a number with fallback
        const price = typeof newItem.price === 'number' ? newItem.price : 0;
        
        state.items.push({
          id: newItem.id,
          title: newItem.title || 'Unknown Product',
          price: price,
          img: newItem.img || null,
          quantity: 1,
          totalPrice: price,
        });
      }
      
      state.totalQuantity++;
      state.totalAmount = calculateTotalAmount(state.items);
    },
    
    removeFromCart: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (!existingItem) return;
      
      if (existingItem.quantity === 1) {
        state.items = state.items.filter(item => item.id !== id);
      } else {
        existingItem.quantity--;
        existingItem.totalPrice = existingItem.price * existingItem.quantity;
      }
      
      state.totalQuantity--;
      state.totalAmount = calculateTotalAmount(state.items);
    },
    
    clearCart: (state) => {
      state.items = [];
      state.totalQuantity = 0;
      state.totalAmount = 0;
    },
    
    removeItemCompletely: (state, action) => {
      const id = action.payload;
      const existingItem = state.items.find(item => item.id === id);
      
      if (existingItem) {
        state.totalQuantity -= existingItem.quantity;
        state.items = state.items.filter(item => item.id !== id);
        state.totalAmount = calculateTotalAmount(state.items);
      }
    },
  },
});

export const { addToCart, removeFromCart, clearCart, removeItemCompletely } = cartSlice.actions;

export default cartSlice.reducer;