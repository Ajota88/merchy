import { useSelector } from "react-redux";
import { GridView, ListView } from "../index";
import { featured } from "../../utils/constants";
import "./ProductsList.scss";

const ProductsList = () => {
  const { gridView, filteredProducts } = useSelector((state) => state.filters);

  if (gridView === false) {
    return <ListView products={filteredProducts} />;
  }

  return <GridView products={filteredProducts}>Product list</GridView>;
};

export default ProductsList;
