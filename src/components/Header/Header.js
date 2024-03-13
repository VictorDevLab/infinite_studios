import "./Header.css";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="logo">
          <img src={"assets/logo22.png"} alt="logo" />
        </div>
        <nav>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>

          <ul className="nav_links">
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
