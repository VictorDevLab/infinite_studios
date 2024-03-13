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
          <img
            src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/426739477_377657794998240_1875412676401322565_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEyySF5cy0ePSryyuZEIZtsinXWwi-J7zqKddbCL4nvOhaskvD0ZNbJwgogk5_GXiHAixlUsH81RqZUDsEghWcy&_nc_ohc=or4pI4E5OxwAX9Rxobm&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDqmqJWfcKBf-pCFfchazGe8s6F1S0z0c2dk2IS6aYVaw&oe=65F7457A"
            alt="about"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
