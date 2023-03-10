import { AddToCart, Stars } from "../../components";
import { singleProduct } from "../../utils/constants";
import { Link, useParams } from "react-router-dom";
import { useGetSingleProductQuery } from "../../features/api/apiSlice";
import { Spinner } from "../../components";

import "./SingleProduct.scss";

const SingleProduct = () => {
  const { id } = useParams();

  const {
    data: product,
    isLoading,
    isError,
    error,
  } = useGetSingleProductQuery(id);

  if (isLoading) {
    return <Spinner />;
  }

  const {
    title,
    image,
    price,
    description,
    category,
    rating: { rate, count },
  } = product;

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
          <AddToCart product={product} />
        </section>
      </div>
    </div>
  );
};

export default SingleProduct;
