import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useSelector } from "react-redux";
import "./CartTotals.scss";

const CartTotals = () => {
  const { user, loginWithRedirect } = useAuth0();
  const { totalAmount, cart } = useSelector((state) => state.cart);

  return (
    <div className="cart-total">
      <div>
        <article>
          <h4>
            order total: <span>${totalAmount}</span>
          </h4>
        </article>
        {user ? (
          <Link to="/checkout" className="btn">
            proceed to checkout
          </Link>
        ) : (
          <button className="btn" onClick={loginWithRedirect}>
            Login
          </button>
        )}
      </div>
    </div>
  );
};

export default CartTotals;
