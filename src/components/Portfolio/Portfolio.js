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
        <h2>Portfolio</h2>
        <div className="gallery">
          <img
            src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/399850519_327528216677865_8064431200670904212_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFR7hn9_ljA3RX5rcfiJMHfyfrg4zL1mm_J-uDjMvWabzjsOxNmT9QtY9IesE7o-cXVhV72O3kiV1igw9jYkp6R&_nc_ohc=Vp6VoFS6UMwAX_T5fzr&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfAlX0YTnmfiivddeM9ajx3b6X82WbVj1dMo2RNjccE-MQ&oe=65F66F74"
            alt=""
          />
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/358032385_255773357186685_2078616661139132183_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG5MpS81n-diUbbNi6TRgZXHW_51EcuNJkdb_nURy40mVaxp1i_jbLRBiON7CGzCDtcEtlIRHeNi6WBOtzEVcwt&_nc_ohc=ybOB9ueDxVMAX-7y1HH&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfABMgQc51gIxm0LPo66QaGHbDNpI5ixYruWCIa4iAJwQw&oe=65F6B404"
            alt=""
          />
          <img
            src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/427897993_380395241391162_7067729550200933126_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHLTUR0bBr6PcTVFWeKF_xs58ZZx3BtLOznxlnHcG0s7LlSgwH9aM5YpqEG3dCm5TzONr8d2kkyFChXuJfJcrhr&_nc_ohc=unkQcWjQaxIAX-o2yOd&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfA8O-H9SwhCpECDnnudB_tjMilehwx_Spk9v872heOBTA&oe=65F66D8F"
            alt=""
          />
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/414975151_352836994146987_7026736554118002562_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHkum01TjYvLj6LYaSjEranJgyMCgmYWwUmDIwKCZhbBSVsUck6o4ZRAWLl44VjhNRuwOdHVB-z_m9DCDifm8kZ&_nc_ohc=_8jeJEfsjVUAX_nIBa9&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBAlftYj0epKmxgVcikZ2CfQGx8F48rC_NcwCcd2TtUSw&oe=65F608AE"
            alt=""
          />
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/358133817_255773570519997_2520124216262469570_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEqgpnRu2WaFyYMp0-DkpsA-w4gmEHD--j7DiCYQcP76Buzy43J0v8UCaESYGqvZZD4SFbY_O49rx4jojnGxmqN&_nc_ohc=sToQUPzVnHUAX8AG8pX&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfB74YOPNaM5McjOMm8-tb7xz9z2GTnz1sUgP_n3u5zirA&oe=65F7C37D"
            alt=""
          />

          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/387867096_309463101817710_3609551457101789598_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHJ2ljI4QhMQffrTnUk3qd5muEQ5hEXCpea4RDmERcKl2EIBBa3Zwc3j1AbDj_kq4qvKmBJqaTt1GKOsbtuS-RJ&_nc_ohc=zhoGUr7aVZoAX-wnTkt&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfC9QrcKqhtFK_4KHEvSdzzpYMrCzZe-BLpRd2EFswK0WA&oe=65F77F05"
            alt=""
          />
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/279900347_122874340371860_7676740272946210872_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG7fbnNmrhhRY_wEDbFafuqQag1i7my9mBBqDWLubL2YI1U6aEK4ksh3IqwcVBlpSc3ZmyMUCCG2hDKwe5LPfv1&_nc_ohc=K7CkLWG5kwgAX_QSxmp&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCMhJv9bYBm5LaHr6fW2jVeG09GuvkGw-h5xgjgAzIEvw&oe=65F6B39B"
            alt=""
          />
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/352741912_283615574041475_1518156480785583944_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeH7L1VSwajEGtlwlrWRyMb97NJx_crZVJHs0nH9ytlUkdulwjRFteiNJxD7PcTGn9EeG-44eqPzy8MUckzq1XZv&_nc_ohc=8UcrdXyObYoAX8xvRU-&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfACcMDoRQkbEREOHshFwrVLl6nnvSYwdCr7fQO4NLoiPw&oe=65F74E0A"
            alt=""
          />
          <img
            src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/428643882_384421040988582_7667064033616135875_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF8DRbbBtzMVw0M2VlFv9JV-tui5u57PuL626Lm7ns-4laXW20_eSB_GuldDNAzzoj3tNia64DmJQ3dcyceXKSE&_nc_ohc=OcuOHaF0fz0AX9iTOnE&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfDQM_EFlMVJ_VzHSmtUvr_uXsoKz3Aq1__j0xreklljOw&oe=65F7E82D"
            alt=""
          />
          <img
            src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/428628871_382241194539900_2959432275489702439_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFkvFweXkn5hpBYYk4-zFKdbthIW56c6hlu2EhbnpzqGXzuU8bidTQXuffDDh9OeYM3tAN_kuywE_xtKAB6ZBq1&_nc_ohc=LjJT0wB2VqoAX9LpQiQ&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfCIlYsoEYAwEGLartpfVziUS2gplGHNk_evkRfk6Z71TA&oe=65F70C21"
            alt=""
          />
          <img
            src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/426168120_377657938331559_2628596755491533750_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeF4JfoUYT7Gs7_KiMPstf-R4rkCdedPKv7iuQJ1508q_qG_W8dsf778BtkZOoohCO0JYa0NhQ5xBPSg9KDpPP7i&_nc_ohc=GtKeStR4S6wAX_MCxeb&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfBhtrOP9EqORdJ5hG0iKpbG1Nlla0UNBD03Cveyt7i4_w&oe=65F7CB6D"
            alt=""
          />
          <img
            src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/432771571_395987323165287_7432648385834445516_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFa22vMijbDerujpoaEJ42QRgbv86pwHmtGBu_zqnAeaxGkenIKAbhzsdSfh4ma0NCcm6h-9OQplzldfj7sNl5C&_nc_ohc=aH3izqLEdH0AX_lqTJg&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCMHD4sPvZAF24Boor0IitcuS0jnruO_aZT9U_d25kLBg&oe=65F68012"
            alt=""
          />
        </div>
        <>
          {isOpen && (
            <div className="gallery">
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/428066683_382241157873237_712699639224191812_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFwEQTCZkxebFi33pJEbCVq8yerA3xaikrzJ6sDfFqKSml3EktCQeLVvT8VZ6B0exX3r1JFpdjjKx9VAS5b6nLW&_nc_ohc=3vnGQZxuVOQAX9-O_dm&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfC0t2Rob6w3IfRYINsvbjHP2zjKw1YZQui0wLCtITxaug&oe=65F79CB4"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/427161598_377657641664922_8067639300074312291_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeEXXNeMquJukdUBqR30_3ZNu-Gcake38Ga74ZxqR7fwZp_hHZXka7JV0FyQNoZyiGSDz68vNcmMBQ4JZCiIGRwP&_nc_ohc=tF3IDHDHi-8AX8pjOZ1&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfARXwmmqVpAMYMIu52VYHcCq8SmLxVot8P4pBN5WkGA6Q&oe=65F65617"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/426642957_377657834998236_1785823904285688758_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeFCBZMXWLTcNOoJ3yFNZ0T3fyxrAIgTR2B_LGsAiBNHYCYhkrsbK2CK8bv3D42zahYds2_S-t5OaV1oGVNboOa9&_nc_ohc=LwCuzmIClxIAX8lsAHz&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfCzEBx99zaDlHsggluhaMEG25ywdjhzGPaMm9fDArHR-Q&oe=65F7B470"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/420119930_363568963073790_4629938284485990972_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHLhJ6qYvsVVoZwi6xrLnaQxa5BLnQsV9DFrkEudCxX0Jqhl6mxdbXDMT5RD8Ha3LeNxQ72zaV_myVn4QliGZ8r&_nc_ohc=RTeglpwMi4AAX8NrAuw&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfB3QAIToBzPKLFSCySguPpjWmzrDDSgsS4_FTdMqNseZQ&oe=65F7811C"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/420189436_363569019740451_5006947939986735585_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG1bk4ROkV3OVV04CJr0Mn1b4shaA3mDHtviyFoDeYMexR2tSzpOYpAn8ewdRpakGM_Kjkd_DbS6tqz7NKrQwmv&_nc_ohc=STc7bhQhLGIAX-pXahU&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfA8CX-a0l_qSKlOEn8gZOZAfGrst5SLmJi7txnn-viILQ&oe=65F7E6D1"
                alt=""
              />

              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/416697390_357929243637762_8110667734603367119_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeG8EFtM0LbIRWfwwWO-IXTLxBdQ2QsJk3XEF1DZCwmTdfuHjavfeMsqpyoeGEAzI1pm-fXVlmlnJALhXDvrwHYP&_nc_ohc=ikV9qh4u7oYAX918iBY&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBhPA4EbmG4sCIj2FfS_rfWsWIl_YKiuBnkteMZFSfRgA&oe=65F65249"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.7 }}
                src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/414978464_352837040813649_3853805947180170002_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHGUPXBXvY6kuN_rmpKKrOFTGu4c7CUM85Ma7hzsJQzznK6W_Y2Z5-zxD_Y-pAr9vMEqn5mdzoXrXImr9o445i4&_nc_ohc=YeYTzLfbbkUAX_AoJ_4&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfBNcNpB9iwPsP41p7LndUzTwEGu622eq8-IgyOOVI_OyQ&oe=65F7E6CA"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.8 }}
                src="https://scontent.fnbo9-1.fna.fbcdn.net/v/t39.30808-6/405293958_334432019320818_8001695910695854992_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGtFDvP4_lsgyBzg1OnaJFk8Ia_cAMvsh7whr9wAy-yHisjysrzZTK6RPrjfNqyJyyEqaQdozSn497vCT54yibd&_nc_ohc=kmDr7oTxQFsAX9650XV&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo9-1.fna&oh=00_AfAd_lID0SR-OjGTvsgHg1ToXLt07KipYVoYvE-Hf8FFDQ&oe=65F6E4D7"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/399690075_327528146677872_8068043318462397306_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGA3iXl4bQ1ebMOB9hh4f1YOfO31zvhpJw587fXO-GknD-wZcOzQ5i4cIcLaV9N_U_o44hvHZUlOLyJRotdFlOT&_nc_ohc=F1k4EJvW2m0AX_JQMIT&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfC3NJqkTx5empewJMX33YPRLqnEcRkfgEOKiQg0hRyG8g&oe=65F75D3E"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/396978571_320839524013401_959363723438155503_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHno8KkxuFOfqBsjysciVBiPeHsqoqARGQ94eyqioBEZFCmRbG-5A_fPAucfMUnUzId5S_h3LWZtI6k29S3KzL-&_nc_ohc=FOwH-cSzd7MAX_qAF5q&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfBclcEIJ4D7cg7-zjQ4guBWQ4E7YsVvQViquKzE8PAV2A&oe=65F7B804"
                alt=""
              />
              <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.1 }}
                src="https://scontent.fnbo10-1.fna.fbcdn.net/v/t39.30808-6/387786290_306988818731805_4415289851307530397_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHKQQAzAVYK5RMass1xzHu2dOkkltpUgix06SSW2lSCLLOWo5G1Ac6UtCK0_IHag-xNjSntEGvw_oKrS_UZij-E&_nc_ohc=VGSkeVWw6v0AX8KKbrV&_nc_pt=5&_nc_zt=23&_nc_ht=scontent.fnbo10-1.fna&oh=00_AfAZ6bPXRysM_JFw5NZdTwdt7TsVVPWnC3vFVCx9I5HLRA&oe=65F61347"
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
