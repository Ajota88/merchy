import { useGetProductsQuery } from "../../features/api/apiSlice";
import { Sort, Filters, ProductsList } from "../../components";
import "./Products.scss";

const Products = () => {
  const {
    data: products,
    isLoading,
    isSucces,
    isError,
    error,
  } = useGetProductsQuery();

  console.log(products);

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
