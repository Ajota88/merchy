import { Sort, Filters, ProductsList } from "../../components";
import "./Products.scss";

const Products = () => {
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
