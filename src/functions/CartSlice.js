import { createSlice } from "@reduxjs/toolkit";
export const CartSlice = createSlice({
  name: "Cart",
  initialState:{
    item: [],
    totalprice:0,
  },
  reducers: {
    addtocart: (state, action) => {
      const { productid, title, price } = action.payload;
      const existingitem = state.item.find(
        (item) => item.productid === productid
      );
      if (existingitem) {
        existingitem.qty += 1;
        state.totalprice += price;
      } else {
        state.item.push({ productid, title, price, qty: 1 });
        state.totalprice += price;
      }
    },
  },
});
export const { addtocart } = CartSlice.actions;
export default CartSlice.reducer;
