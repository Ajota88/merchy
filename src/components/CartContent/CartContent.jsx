import { useEffect } from "react";
import { Link } from "react-router-dom";
import { CartColumns, CartItems, CartTotals } from "../index";
import "./CartContent.scss";
import { useSelector, useDispatch } from "react-redux";
import { clearCart, cartTotalAmount } from "../../features/cart/cartSlice";

const CartContent = () => {
  const { cart } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(cartTotalAmount());
  }, [cart]);

  return (
    <div className="cart-content | section section-center">
      <CartColumns />
      <hr />
      {cart?.map((item) => (
        <CartItems key={item?.id} {...item} />
      ))}
      <hr />
      <div className="link-container">
        <Link to="/products" className="link-btn">
          continue shopping
        </Link>
        <button
          className="link-btn clear-btn"
          onClick={() => dispatch(clearCart())}
        >
          clear shopping cart
        </button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
