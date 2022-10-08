import '../styles/Footer.css';

export default function FooterLinks() {
  return (
    <div className="footer-links">
      <div className="company">
        <ul>
          <li className="heading">COMPANY</li>
          <li>About</li>
          <li>Jobs</li>
          <li>For the Records</li>
        </ul>
      </div>

      <div className="communities">
        <ul>
            <li className='heading'>COMMUNITIES</li>
            <li>For Artists</li>
            <li>Developers</li>
            <li>Advertising</li>
            <li>Investors</li>
            <li>Vendors</li>
        </ul>
      </div>

      <div className="useful-links">
        <ul>
            <li className='heading'>USEFUL LINKS</li>
            <li>Support</li>
            <li>Web Player</li>
            <li>Free Mobile App</li>
        </ul>
      </div>
    </div>
  );
}
