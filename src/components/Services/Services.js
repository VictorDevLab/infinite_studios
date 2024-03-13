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
            image={`https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/278184790_115274887798472_5446700313285230370_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEptMdD9jVqoWc7EpdPuXAQ9SinbVHPmSX1KKdtUc-ZJYdmuB8fH15ZpXd5igjE4wvPesNNcfjTdCAwyhw7whbE&_nc_ohc=_t_OcqRWYw4AX_MDML7&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfAtDrmttER5rzjFTv0_qqhVlt4WOtw_xVDrFjwyiVaIRQ&oe=65F5C14A`}
            name={"LandScape"}
            description={
              "We Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo r"
            }
          />
          <ServiceCard
            number={2}
            image={`https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/349090905_1288901725087135_1698026021765735877_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHWqEgE6K4e24G_peBt75eXqQqPxzyiT0ypCo_HPKJPTIOHHagmKtvjbBRgTBVdgdVB98q4zFKDDXYqlnLbva9K&_nc_ohc=8LMVXTtscg8AX9s0JIn&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBd5M3IMlNMO9cKaXgtg0Q_DfLHBg3Iref6ZHmy533mtw&oe=65F6B8A3`}
            name={"LandScape"}
            description={
              "We Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo r"
            }
          />
          <ServiceCard
            number={3}
            image={`https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/342713432_200042136153355_7033285264223216734_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG2CoZNlpi5RPZXvTJtm0wK5zQt5cV-R9jnNC3lxX5H2I60M4U4xgYI2a56i1StjE8LBV0qwHDz8_gWpxrutGtc&_nc_ohc=XzxHnXw2mtcAX9DDVm9&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfDXwkk0DskjinY9v1fVozWSYRXI0ovI4E15yMKKwMsCxQ&oe=65F6D10E`}
            name={"LandScape"}
            description={
              "We Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo Create the Art of Observation Lorem ipsum dolo r"
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
