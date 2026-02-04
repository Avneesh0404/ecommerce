import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  item: [],
};
export const CartSlice = createSlice({
  name: "Cart",
  initialState,
  reducers: {
    addtocart: (state, action) => {
      const { productid, title, price } = action.payload;
      const existingitem = state.item.find(
        (item) => item.productid === productid
      );
      if (existingitem) {
        existingitem.qty += 1;
      } else {
        state.item.push({ productid, title, price, qty: 1 });
      }
    },
  },
});
export const { addtocart } = CartSlice.actions;
export default CartSlice.reducer;
