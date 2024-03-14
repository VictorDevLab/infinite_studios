import { useState, useEffect } from "react";
import "./Header.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [active, setIsActive] = useState("nav_links");

  const navToggle = () => {
    if (active === "nav_links") {
      setIsActive("nav_links nav_active");
    } else setIsActive("nav_links");
    // Icon Toggler
    // if (icon === "nav__toggler") {
    //   setIcon("nav__toggler toggle");
    // } else setIcon("nav__toggler");
  };
  useEffect(() => {
    const handleScroll = () => {
      // Check if the menu is active (you need to define your state for menu active status)
      // If menu is active, close it
      if (active === "nav_links nav_active") {
        setIsActive("nav_links");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [active]); // Run this effect only once after component mounts

  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={"assets/logo22.png"} alt="logo" />
        </div>
        <nav>
          <div className="nav_toggler" onClick={navToggle}>
            {active === "nav_links" ? (
              <GiHamburgerMenu className="icon" />
            ) : (
              <RxCross2 className="icon" />
            )}
          </div>

          <ul className={active}>
            <li>
              {" "}
              <a href="#about">About</a>
            </li>
            <li>
              {" "}
              <a href="#services">Services</a>
            </li>
            <li>
              {" "}
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              {" "}
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              {" "}
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
      <hr />
    </>
  );
};

export default Header;
