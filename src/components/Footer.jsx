import FooterLogo from "./FooterLogo";
import FooterLinks from "./FooterLinks";
import FooterSocials from "./FooterSocials";
import FooterLocation from "./FooterLocation";
import FooterExtras from "./FooterExtras";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <footer>
      <section className="container">
        <FooterLogo />
        <FooterLinks />
        <FooterSocials />
        <FooterLocation />
        <FooterExtras />
      </section>
    </footer>
  );
}
