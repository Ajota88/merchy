import { createSlice } from "@reduxjs/toolkit";

const getLocalStorage = () => {
  let cart = localStorage.getItem("cart");
  if (cart) {
    return JSON.parse(localStorage.getItem("cart"));
  } else {
    return [];
  }
};

const initialState = {
  cart: getLocalStorage(),
  totalItems: 0,
  totalAmount: 0,
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { amount, product } = action.payload;
      const tempItem = state.cart.find((item) => item.id === product.id);
      if (tempItem) {
        const tempCart = state.cart.map((item) => {
          if (item?.id === product.id) {
            let newAmount = item.amount + amount;
            if (newAmount > 10) {
              newAmount = 10;
            }
            return { ...item, amount: newAmount };
          } else {
            return item;
          }
        });

        state.cart = tempCart;
      } else {
        const newItem = {
          id: product.id,
          name: product.title,
          amount,
          image: product.image,
          price: product.price,
        };
        state.cart = [...state.cart, newItem];
      }
    },
  },
});

export const { addToCart } = cartSlice.actions;

export default cartSlice.reducer;
