import { useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "./Checkout.scss";

const Checkout = () => {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  console.log(import.meta.env.VITE_STRIPE_PUBLIC_KEY);
  const navigate = useNavigate();

  const dispatch = useDispatch();
  let [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");

  useEffect(() => {
    if (success) {
      dispatch(clearCart());
    }
  }, [searchParams]);

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

  if (success) {
    setTimeout(() => {
      navigate("/");
    }, 2000);

    return (
      <div className="checkout | section">
        <div className="container">
          <h2>payment successful</h2>
          <h4>
            You will be redirected to the home page in a moment or you can keep
            shopping.
          </h4>
          <Link to="/products" className="btn">
            CONTINUE SHOPPING
          </Link>
        </div>
      </div>
    );
  }

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
    <div className="checkout | section">
      <div className="container">
        <h2>PAYMENT IN TEST MODE</h2>
        <h4>
          To simulate a purchase, a fake credit card will be used. Copy and
          paste the card number in the stripe checkout interface. Enter a valid
          month, year and any 3 digit number in the CV.
        </h4>
        <p>Test Card Number : 4242 4242 4242 4242</p>
        <button className="btn" onClick={handleSubmit}>
          CONTINUE TO STRIPE CHECKOUT
        </button>
      </div>
    </div>
  );
};

export default Checkout;
