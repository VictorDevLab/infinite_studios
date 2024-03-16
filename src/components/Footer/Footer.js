import "./Footer.css";
import { FaFacebookF } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="foo">
        <div className="footer-left">
          <img src={"assets/footerlogo.png"} alt="Logo" />
        </div>
        <div className="footer-right">
          <ul className="social-icons">
            <li>
              <a href="https://web.facebook.com/profile.php?id=100082620677297">
                <FaFacebookF className="icon" />
              </a>
            </li>
            <li>
              <a href="https://wa.me/+254706861038">
                <IoLogoWhatsapp className="icon" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/infinite_studios__?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                <FaInstagram className="icon" />
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-copyright">
          &copy; {new Date().getFullYear()} Infinite Studios. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
