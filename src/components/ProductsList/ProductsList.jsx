import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { GridView, ListView } from "../index";
import { filterProducts } from "../../features/filters/filtersSlice";
import "./ProductsList.scss";

const ProductsList = () => {
  const {
    gridView,
    filteredProducts,
    filters: { text, category, price },
  } = useSelector((state) => state.filters);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(filterProducts());
  }, [category, text, price]);

  if (gridView === false) {
    return <ListView products={filteredProducts} />;
  }

  return <GridView products={filteredProducts}>Product list</GridView>;
};

export default ProductsList;
