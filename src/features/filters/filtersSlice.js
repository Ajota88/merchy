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
      let maxPrice = action.payload.map((p) => p.price);
      maxPrice = Math.max(...maxPrice);
      console.log(maxPrice);
      state.filters.maxPrice = maxPrice;
      state.filters.price = maxPrice;
      state.filteredProducts = action.payload;
      state.allProducts = action.payload;
    },
    updateFilters: (state, action) => {
      const { name, value } = action.payload;
      state.filters = { ...state.filters, [name]: value };
    },
    filterProducts: (state) => {
      const { allProducts } = state;
      const { text, category, price } = state.filters;
      let tempProducts = [...allProducts];

      if (text) {
        tempProducts = tempProducts.filter((product) =>
          product.title.toLowerCase().startsWith(text)
        );
      }

      if (category !== "all") {
        tempProducts = tempProducts.filter(
          (product) => product.category === category
        );
      }

      if (price) {
        tempProducts = tempProducts.filter((product) => product.price <= price);
      }

      state.filteredProducts = tempProducts;
    },
    clearFilters: (state) => {
      state.filters.text = "";
      state.filters.price = state.filters.maxPrice;
      state.filters.category = "all";
    },
    sortProducts: (state, action) => {
      state.sort = action.payload;
      let tempProducts = [...state.filteredProducts];
      if (state.sort === "price-lowest") {
        tempProducts = tempProducts.sort((a, b) => a.price - b.price);
      }
      if (state.sort === "price-highest") {
        tempProducts = tempProducts.sort((a, b) => b.price - a.price);
      }
      if (state.sort === "name-a") {
        tempProducts = tempProducts.sort((a, b) =>
          a.title.localeCompare(b.title)
        );
      }
      if (state.sort === "name-z") {
        tempProducts = tempProducts.sort((a, b) =>
          b.title.localeCompare(a.title)
        );
      }

      state.filteredProducts = tempProducts;
    },
  },
});

export const {
  setGridView,
  setListView,
  loadProducts,
  updateFilters,
  filterProducts,
  clearFilters,
  sortProducts,
} = filtersSlice.actions;

export default filtersSlice.reducer;
