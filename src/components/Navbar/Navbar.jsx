import "./Navbar.scss";
import logo from "../../assets/logo-no-background.svg";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src={logo} alt="merchy" className="logo" />
    </div>
  );
};

export default Navbar;
