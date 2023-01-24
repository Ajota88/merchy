import "./NavButtons.scss";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faUser,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";

const NavButtons = ({ handleOpen, handleClose, mobile }) => {
  const { totalItems } = useSelector((state) => state.cart);
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  console.log(user);

  return (
    <div className="nav-buttons" data-type={mobile}>
      {!user ? (
        <button className="nav-login" onClick={loginWithRedirect}>
          <FontAwesomeIcon icon={faUser} /> <span>Login</span>
        </button>
      ) : (
        <button className="nav-login" onClick={logout}>
          <FontAwesomeIcon icon={faUser} /> <span>Logout</span>
        </button>
      )}
      <Link to="/cart" onClick={handleClose}>
        <button className="nav-cart">
          <div className="cart-icon">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="cart-value">{totalItems}</span>
          </div>
          <span>Cart</span>
        </button>
      </Link>
      <div className="nav-hamburger">
        <FontAwesomeIcon icon={faBars} onClick={handleOpen} />
      </div>
    </div>
  );
};

export default NavButtons;
