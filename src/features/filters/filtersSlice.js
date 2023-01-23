import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  filteredProducts: [],
  allProducts: [],
  gridView: true,
  sort: "price-lowest",
  filters: {
    text: "",
    category: "all",
    minPrice: 0,
    maxPrice: 0,
    price: 0,
  },
};

export const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setGridView: (state) => {
      state.gridView = true;
    },
    setListView: (state) => {
      state.gridView = false;
    },
    loadProducts: (state, action) => {
      (state.filteredProducts = action.payload),
        (state.allProducts = action.payload);
    },
  },
});

export const { setGridView, setListView, loadProducts } = filtersSlice.actions;

export default filtersSlice.reducer;
