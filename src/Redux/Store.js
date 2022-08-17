import { configureStore } from "@reduxjs/toolkit";
import AddcartSlice from "./Slice/AddcartSlice";

export const store = configureStore({
  reducer: {
    basket: AddcartSlice,
  },
});
