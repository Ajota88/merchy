import { useState } from "react";
import { AmountButtons } from "../index";
import { Link } from "react-router-dom";
import "./AddToCart.scss";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../features/cart/cartSlice";

const AddToCart = ({ product }) => {
  const dispatch = useDispatch();
  const [amount, setAmount] = useState(1);

  const increase = () => {
    if (amount < 10) {
      setAmount((prev) => prev + 1);
    }
  };

  const decrease = () => {
    if (amount > 1) {
      setAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="addtocart">
      <div className="amount-container">
        <AmountButtons
          increase={increase}
          decrease={decrease}
          amount={amount}
        />
      </div>
      <Link
        to="/cart"
        className="btn"
        onClick={() => dispatch(addToCart({ amount, product }))}
      >
        add to cart
      </Link>
    </div>
  );
};

export default AddToCart;
