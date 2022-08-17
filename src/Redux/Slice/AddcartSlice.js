import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  items: [],
};
export const basketSlice = createSlice({
  name: "basket",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items = [action.payload, ...state.items];
    },
    removeItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    increaseItem: (state, action) => {
      state.items = state.items.map((item) => {
        if (item.id !== action.payload) return item;
        return {
          ...item,
          quantity: item.quantity + 1,
        };
      });
    },
    decreaseItem: (state, action) => {
      state.items = state.items
        .map((item) => {
          if (item.id !== action.payload) return item;
          if (item.quantity === 1) return false;
          return {
            ...item,
            quantity: item.quantity - 1,
          };
        })
        .filter((item) => item !== false);
    },
  },
});

export const selectItem = (state) => state.basket.items;
export const totalPrice = (state) =>
  state.basket.items
    .map((item) => item.price * item.quantity)
    .reduce((a, b) => a + b, 0);
export const totalItem = (state) =>
  state.basket.items.map((item) => item.quantity).reduce((a, b) => a + b, 0);

export const { addItem, removeItem, increaseItem, decreaseItem } =
  basketSlice.actions;
export default basketSlice.reducer;
