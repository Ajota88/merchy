import { AmountButtons } from "../index";
import { Link } from "react-router-dom";
import "./AddToCart.scss";

const AddToCart = () => {
  return (
    <div className="addtocart">
      <div className="amount-container">
        <AmountButtons />
      </div>
      <Link to="/cart" className="btn">
        add to cart
      </Link>
    </div>
  );
};

export default AddToCart;
