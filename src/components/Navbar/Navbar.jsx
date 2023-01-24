import { useState } from "react";
import { SearchBar, NavButtons, Modal } from "../index";
import "./Navbar.scss";
import logo from "../../assets/logo-no-background.svg";
import { navLinks } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user } = useAuth0();
  console.log(user);
  return (
    <nav className="navbar">
      <div className="nav-left">
        <Link to="/">
          <img src={logo} alt="merchy" className="merchy logo" />
        </Link>
      </div>
      <div className="nav-center">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
      </div>
      <div className="nav-right">
        <SearchBar />
        <NavButtons handleOpen={() => setIsOpen(true)} />
      </div>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <ul>
          {navLinks.map((link) => (
            <li key={link.id} onClick={() => setIsOpen(false)}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
          {user && (
            <li>
              <Link to="/checkout">checkout</Link>
            </li>
          )}
        </ul>
        <NavButtons mobile="mobile" handleClose={() => setIsOpen(false)} />
      </Modal>
    </nav>
  );
};

export default Navbar;
