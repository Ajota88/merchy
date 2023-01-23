import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { CartContent } from "../../components";
import "./Cart.scss";

const Cart = () => {
  const { cart } = useSelector((state) => state.cart);

  if (cart.length === 0) {
    return (
      <div className="page-100">
        <div className="empty">
          <h2>Your Cart is empty</h2>
          <Link to="/products" className="btn">
            fill your cart
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div>
      <CartContent />
    </div>
  );
};

export default Cart;
