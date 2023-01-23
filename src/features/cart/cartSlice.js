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
  cart: [],
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

    toggleAmount: (state, action) => {
      const { id, value } = action.payload;

      let tempCart = state.cart.map((item) => {
        if (item?.id === id) {
          if (value === "inc") {
            let newAmount = item?.amount + 1;
            if (newAmount > 10) {
              newAmount = 10;
            }
            return { ...item, amount: newAmount };
          }

          if (value === "dec") {
            let newAmount = item.amount - 1;
            if (newAmount < 1) {
              newAmount = 1;
            }
            return { ...item, amount: newAmount };
          }
        } else {
          return item;
        }
      });

      state.cart = tempCart;
    },

    removeItem: (state, action) => {
      console.log(action.payload);
      state.cart = state.cart.filter((item) => item.id !== action.payload);
    },

    clearCart: (state) => {
      return (state = { ...state, cart: [], totalAmount: 0, totalItems: 0 });
    },

    cartTotalAmount: (state) => {
      const { totalItems, totalAmount } = state.cart.reduce(
        (total, cartItem) => {
          const { price, amount } = cartItem;
          total.totalItems += amount;
          total.totalAmount += price * amount;

          return total;
        },
        { totalItems: 0, totalAmount: 0 }
      );
      console.log(totalAmount);
      state.totalAmount = totalAmount;
      state.totalItems = totalItems;
    },
  },
});

export const {
  addToCart,
  toggleAmount,
  removeItem,
  clearCart,
  cartTotalAmount,
} = cartSlice.actions;

export default cartSlice.reducer;
