import { useSelector } from "react-redux";
import "./CartTotals.scss";

const CartTotals = () => {
  const { totalAmount } = useSelector((state) => state.cart);

  return (
    <div className="cart-total">
      <div>
        <article>
          <h4>
            order total: <span>{totalAmount}</span>
          </h4>
        </article>
        <button className="btn">proceed to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
