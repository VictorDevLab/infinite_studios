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
              <a href="#">
                <FaFacebookF className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
                <IoLogoWhatsapp className="icon" />
              </a>
            </li>
            <li>
              <a href="#">
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
