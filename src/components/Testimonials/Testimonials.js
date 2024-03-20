import "./Testimonials.css";

const Testimonials = () => {
  return (
    <div id="testimonials" className="testimonials">
      <div className="intro">
        <h4>testimonials</h4>
        <h2>Glowing Testimonials from Our Cherished Clients</h2>
      </div>

      <div class="outerdiv">
        <div class="innerdiv">
          {/* <!-- div1 --> */}
          <div class="div1 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="assets/mercy.jpeg" alt="" />
              </div>
              <div class="detbox">
                <p class="name">Mercy Clifford</p>
                <p class="designation">Verified Graduate</p>
              </div>
            </div>
            <div class="review">
              <h4>Elevating Ordinary Moments to Extraordinary Memories</h4>
              <p>
                “Working with Infinite Studios was a truly magical experience.
                They have a unique talent for capturing the beauty in everyday
                moments and turning them into extraordinary memories. Their
                passion for their craft is evident in every photograph, and we
                are forever grateful for the timeless memories they've created
                for us. ”
              </p>
            </div>
          </div>
          {/* <!-- div2 --> */}
          <div class="div2 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="assets/tracy.jpeg" alt="" />
              </div>
              <div class="detbox">
                <p class="name">Tracy Wambui</p>
                <p class="designation">Music Producer</p>
              </div>
            </div>
            <div class="review">
              <h4>Exceptional Attention to Detail</h4>
              <p>
                “ I cannot recommend Infinite studios enough! Their attention to
                detail is unmatched. ”
              </p>
            </div>
          </div>
          {/* <!-- div3 --> */}
          <div class="div3 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="assets/kira.jpeg" alt="" />
              </div>
              <div class="detbox">
                <p class="name dark">Kira Whittle</p>
                <p class="designation dark">Dancer</p>
              </div>
            </div>
            <div class="review dark">
              <h4>A Seamless and Enjoyable Experience!</h4>
              <p>
                “ Our experience with Infinite Moments Studios was seamless from
                start to finish. Their team made us feel comfortable and at ease
                throughout the entire process. Not only did they deliver
                exceptional photographs, but they also made the entire
                experience enjoyable and stress-free. ”
              </p>
            </div>
          </div>
          {/* <!-- div4 --> */}
          <div class="div4 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="assets/jannete.jpeg" alt="" />
              </div>
              <div class="detbox">
                <p class="name dark">Jeanette Harmon</p>
                <p class="designation dark">Event Organiser</p>
              </div>
            </div>
            <div class="review dark">
              <h4>Capturing Moments Beyond Expectations</h4>
              <p>
                “ Working with infinite studios was an absolute pleasure! Their
                team has an extraordinary knack for capturing the essence of
                every moment. ”
              </p>
            </div>
          </div>
          {/* <!-- div5 --> */}
          <div class="div5 eachdiv">
            <div class="userdetails">
              <div class="imgbox">
                <img src="assets/jane.jpeg" alt="" />
              </div>
              <div class="detbox">
                <p class="name">Jane Njeri</p>
                <p class="designation">Content manager</p>
              </div>
            </div>
            <div class="review">
              <h4>Transforming Visions into Reality</h4>
              <p>
                “ Choosing Infinite Moments Studios was the best decision we
                made for our project. They listened attentively to our ideas and
                brought them to life with stunning imagery. Their creativity and
                dedication turned our vision into reality, and we couldn't be
                happier with the results. ”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
