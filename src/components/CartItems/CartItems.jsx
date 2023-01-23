import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AmountButtons } from "../index";
import {
  toggleAmount,
  removeItem,
  cartTotalAmount,
} from "../../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import "./CartItems.scss";

const CartItems = ({ id, name, price, image, amount }) => {
  const dispatch = useDispatch();

  const handleItemRemove = () => {
    dispatch(removeItem(id));
    dispatch(cartTotalAmount());
  };

  return (
    <div className="cart-item">
      <div className="title">
        <img src={image} alt={name} />
        <div>
          <h5 className="name">{name}</h5>
          <h5 className="price-small">{price}</h5>
        </div>
      </div>
      <h5 className="price">{price}</h5>
      <AmountButtons
        className="amount-btns"
        amount={amount}
        increase={() => dispatch(toggleAmount({ id, value: "inc" }))}
        decrease={() => dispatch(toggleAmount({ id, value: "dec" }))}
      />
      <h5 className="subtotal">{price * amount}</h5>
      <button className="remove-btn" onClick={() => handleItemRemove()}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  );
};

export default CartItems;
