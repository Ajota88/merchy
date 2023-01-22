import "./NavButtons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const NavButtons = ({ handleOpen, mobile }) => {
  return (
    <div className="nav-buttons" data-type={mobile}>
      <button className="nav-login">
        <FontAwesomeIcon icon={faUser} /> <span>Login</span>
      </button>
      <button className="nav-cart">
        <div className="cart-icon">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="cart-value">4</span>
        </div>
        <span>Cart</span>
      </button>
      <div className="nav-hamburger">
        <FontAwesomeIcon icon={faBars} onClick={handleOpen} />
      </div>
    </div>
  );
};

export default NavButtons;
