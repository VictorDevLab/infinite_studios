import "./About.css";

const About = () => {
  return (
    <div id="about" className="about_us">
      <div className="about_container">
        <div className="about_left">
          <div>
            <h4>About Us</h4>

            <h3>Capturing the Beat of the Moment</h3>
            <p>
              At Infinite Moments Studio, we're passionate about capturing
              life's most precious moments with creativity and authenticity.
              Founded 2020, our studio has been dedicated to crafting timeless
              photographs that tell stories and evoke emotions.
            </p>
          </div>
        </div>
        <div className="about_right">
          <img src="assets/aboutimg.jpeg" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
