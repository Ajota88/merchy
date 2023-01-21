import { useState } from "react";
import { SearchBar, NavButtons, Modal } from "../index";
import "./Navbar.scss";
import logo from "../../assets/logo-no-background.svg";
import { navLinks } from "../../utils/constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={logo} alt="merchy" className="logo" />
      </div>
      <div className="nav-center">
        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <Link to={link.url}>{link.text}</Link>
            </li>
          ))}
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
        </ul>
        <NavButtons mobile="mobile" />
      </Modal>
    </nav>
  );
};

export default Navbar;
