import Logo from "../images/logo.png";
import '../styles/Footer.css';

export default function FooterLogo() {
  return (
    <div className="footer-logo">
        <img src={Logo} alt="Footer Logo" />
    </div>
  ) 
}

