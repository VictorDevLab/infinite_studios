import ServiceCard from "./ServiceCard";
import "./Services.css";

const Services = () => {
  return (
    <div id="services" className="services">
      <div className="services_container">
        <div className="service_left">
          <h4>our services</h4>
          <h2>Quality Photos With Quality Service</h2>
        </div>
        <div className="service_cards">
          <ServiceCard
            number={1}
            image="assets/graduation.jpeg"
            name={"Graduation"}
            description={
              "Commemorate your achievements with a graduation photo shoot! Our skilled photographers capture the essence of this momentous occasion."
            }
          />
          <ServiceCard
            number={2}
            image="assets/newborn.jpeg"
            description={
              "Capture the tender moments of your little one's earliest days with our newborn photo shoots."
            }
          />
          <ServiceCard
            number={3}
            image="assets/birthday.jpeg"
            name={" Birthday shoot"}
            description={
              "Mark your little one's milestone with a birthday photo shoot! Our experienced photographers specialize in capturing the joy and excitement of this special day."
            }
          />
          {/* <ServiceCard
            number={4}
            image={`https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/336379067_713829737199875_5687469872451913077_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEU9wzNWhEzGJNVL2UPHS-dTeGGLwB9JPxN4YYvAH0k_B-YUy1CyBiPjkJzkkJg_i5DJ7fzoQzPJ4xw-TvsG0BG&_nc_ohc=f2C5H_8Y9L0AX9UCMVR&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfAFN18rMQI3LnPpTYgDCCS-wlI1f_i0wj6WwHxUeQ6YAA&oe=65F7171B`}
            name={"LandScape"}
            description={
              "We Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo r"
            }
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Services;
