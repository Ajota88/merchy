import "./NavButtons.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

const NavButtons = () => {
  return (
    <div className="nav-buttons">
      <div className="nav-login">
        <FontAwesomeIcon icon={faUser} /> <span>Login</span>
      </div>
      <div className="nav-cart">
        <FontAwesomeIcon icon={faCartShopping} /> <span>Cart</span>
      </div>
      <FontAwesomeIcon icon={faBars} />
    </div>
  );
};

export default NavButtons;
