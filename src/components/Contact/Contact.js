import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="container">
      <h2 className="ct-section-head">CONTACT US</h2>
      <div className="contact-section">
        <div className="contact-fields">
          <div className="left-form">
            <form>
              <div className="form-group">
                <label className="sr-only" htmlFor="fname">
                  First Name
                </label>
                <input
                  className="required form-control"
                  id="fname"
                  name="fname"
                  placeholder="First Name "
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="lname">
                  Last Name
                </label>
                <input
                  className="required form-control"
                  id="lname"
                  name="lname"
                  placeholder="Last Name "
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label className="sr-only" htmlFor="contactEmail">
                  Email
                </label>
                <input
                  className="required form-control h5-email"
                  id="contactEmail"
                  name="contactEmail"
                  placeholder="Email "
                  type="text"
                  required
                />
              </div>

              <div className="form-group">
                <label className="sr-only" htmlFor="comment">
                  Type your message here
                </label>
                <textarea
                  className="required form-control"
                  id="comment"
                  name="comment"
                  placeholder="Type your message here "
                  rows="6"
                  required
                ></textarea>
              </div>
              <button className="btn btn-accent" type="submit">
                Submit
              </button>
            </form>
          </div>
          <div className="contact-info">
            <div className="phone">
              <h2>Call</h2>
              <a href="tel:+5555555555">0712345678</a>
            </div>
            <div className="email">
              <h2>Email</h2>
              <a href="mailto:info@webcorpco.com">developer@gmail.com</a>
            </div>
            <div className="location">
              <h2>Visit</h2>
              <p>
                Ngong Town <br />
                The Praise Building <br />
                Third Floor <br />
                {/* <a className="btn btn-accent" href="" target="_blank">
                  <img
                    src="https://www.solodev.com/assets/contact-us-page/map-marker.png"
                    alt="Map Marker"
                  />
                  Google Maps
                </a> */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
