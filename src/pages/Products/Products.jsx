import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useGetProductsQuery } from "../../features/api/apiSlice";
import { Sort, Filters, ProductsList, Spinner } from "../../components";
import { loadProducts } from "../../features/filters/filtersSlice.js";
import "./Products.scss";

const Products = () => {
  const dispatch = useDispatch();

  const {
    data: products,
    isLoading,
    isSucces,
    isError,
    error,
  } = useGetProductsQuery();

  useEffect(() => {
    !isLoading && dispatch(loadProducts(products));
  }, [products]);

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <section className="products-page">
      <div className="products-container section-center">
        <Filters />
        <div>
          <Sort />
          <ProductsList />
        </div>
      </div>
    </section>
  );
};

export default Products;
