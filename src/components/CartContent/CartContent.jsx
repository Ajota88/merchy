import { Link } from "react-router-dom";
import { CartColumns, CartItems, CartTotals } from "../index";
import "./CartContent.scss";
import { useSelector } from "react-redux";

const CartContent = () => {
  const { cart } = useSelector((state) => state.cart);

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
        <button className="link-btn clear-btn">clear shopping cart</button>
      </div>
      <CartTotals />
    </div>
  );
};

export default CartContent;
