import { useSelector } from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import { loadStripe } from "@stripe/stripe-js";
import axios from "axios";
import "./CartTotals.scss";

const CartTotals = () => {
  const stripePromise = loadStripe(
    "pk_test_51MQKyHFnhpVEKYs6jBvfwZrkd5CtmF13FVvU7Uz7XFy3M56tKDfsnX3Aqk1Lyl7QeES4nQQyOm1GLXvUENABtY0J00lBgFKRoe"
  );

  const handleSubmit = async () => {
    try {
      const stripe = await stripePromise;

      const res = await axios.post("http://localhost:3000/api/payment", {
        cart,
        totalAmount,
      });

      const body = await res.data;
      console.log(body);
      window.location.href = body.url;
    } catch (error) {
      console.log(error);
    }
  };

  const { totalAmount, cart } = useSelector((state) => state.cart);
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
          <button className="btn" onClick={handleSubmit}>
            proceed to checkout
          </button>
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
