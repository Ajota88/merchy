import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import "./CartTotals.scss";

const CartTotals = () => {
  const { totalAmount } = useSelector((state) => state.cart);
  const { user, loginWithRedirect } = useAuth0();
  return (
    <div className="cart-total">
      <div>
        <article>
          <h4>
            order total: <span>${totalAmount}</span>
          </h4>
        </article>
        {user ? (
          <button className="btn">proceed to checkout</button>
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
