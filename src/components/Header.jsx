import "../styles/Header.css";
import Logo from "../images/logo.png";
import Hamburger from "../images/icons/hamburger-icon.jpg";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="logo">
          <img src={Logo} alt="" />
        </div>
        <nav className="desktop-menu">
          <ul>
            <li>Premium</li>
            <li>Support</li>
            <li>Download</li>
            <li>Sign up</li>
            <li>Log in</li>
          </ul>
        </nav>

        <nav className="mobile-menu">
          <img src={Hamburger} alt="" />
        </nav>
      </div>
    </header>
  );
};

export default Header;
