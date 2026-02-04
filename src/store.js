import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./functions/CartSlice";
export const store = configureStore({
  reducer: {
    cart: cartreducer,
  },
});
