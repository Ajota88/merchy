import "./ProductCard.scss";
import { Link } from "react-router-dom";

const ProductCard = ({ image, title, price, id }) => {
  return (
    <div className="product">
      <div className="container">
        <img src={image} alt={title} />
        <Link to={`/products/${id}`}>
          <span>More details</span>
        </Link>
      </div>
      <div className="info">
        <h5>{title.substring(0, 15)}...</h5>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ProductCard;
