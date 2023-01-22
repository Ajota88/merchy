import { AddToCart, Stars } from "../../components";
import { singleProduct } from "../../utils/constants";
import { Link } from "react-router-dom";

import "./SingleProduct.scss";

const SingleProduct = () => {
  const {
    title,
    image,
    price,
    description,
    category,
    rating: { rate, count },
  } = singleProduct;

  return (
    <div className="single-product |  section-center">
      <Link to="/products" className="btn">
        back to products
      </Link>
      <div className="product-center">
        <img src={image} alt={title} />
        <section className="content">
          <h2>{title}</h2>
          <Stars stars={rate} reviews={count} />
          <h5 className="price">${price}</h5>
          <p className="desc">{description}</p>
          <p className="info">
            <span>Category: </span>
            {category}
          </p>

          <hr />
          <AddToCart product={singleProduct} />
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
