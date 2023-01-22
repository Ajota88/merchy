import { useSelector } from "react-redux";
import { GridView, ListView } from "../index";
import { featured } from "../../utils/constants";
import "./ProductsList.scss";

const ProductsList = () => {
  const { gridView } = useSelector((state) => state.filters);

  if (gridView === false) {
    return <ListView products={featured} />;
  }

  return <GridView products={featured}>Product list</GridView>;
};

export default ProductsList;
