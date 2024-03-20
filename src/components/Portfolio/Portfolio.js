import { useState } from "react";
import "./Portfolio.css";
import { motion } from "framer-motion";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div id="portfolio" className="portfolio">
      <div className="portfolio_container">
        <h2>Gallery</h2>
        <div className="gallery">
          <img src="assets/g22.jpeg" alt="" />
          <img src="assets/g3.jpeg" alt="" />
          <img src="assets/g8.jpeg" alt="" />
          <img src="assets/g14.jpeg" alt="" />
          <img src="assets/g16.jpeg" alt="" />
          <img src="assets/g19.jpeg" alt="" />
          <img src="assets/g9.jpeg" alt="" />
          <img src="assets/g10.jpeg" alt="" />
          <img src="assets/g21.jpeg" alt="" />
          <img src="assets/g15.jpeg" alt="" />
        </div>
        <>
          {isOpen && (
            <div className="gallery">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                src="assets/g20.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                src="assets/g18.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                src="assets/g23.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="assets/g24.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                src="assets/g25.jpeg"
                alt=""
              />

              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                src="assets/g26.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                src=""
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                src="assets/g27.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                src="assets/g28.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src="assets/g29.jpeg"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                src="assets/g20.jpeg"
                alt=""
              />
            </div>
          )}
        </>
        <div className="button_container">
          <button class="custom-button" onClick={handleOpen}>
            {isOpen ? "show less" : "See More"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
