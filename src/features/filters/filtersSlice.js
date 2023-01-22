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
  },
});

export const { setGridView, setListView } = filtersSlice.actions;

export default filtersSlice.reducer;
