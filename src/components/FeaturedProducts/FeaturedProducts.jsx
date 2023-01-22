import "./FeaturedProducts.scss";
import { ProductCard } from "../index";
import { featured } from "../../utils/constants";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  return (
    <section className="featured-products">
      <div className="title">
        <h2>featured products</h2>
        <div className="underline"></div>
      </div>
      <div className="featured section-center">
        {featured.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>

      <Link to="/products" className="btn featured__btn">
        All Products
      </Link>
    </section>
  );
};

export default FeaturedProducts;
