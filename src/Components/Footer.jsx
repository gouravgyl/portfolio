import React from "react";
import styles from "./Css/Footer.module.css";

function Footer() {
  return (
    <div className={styles.footerCont}>
      <div className={styles.titleHeader} data-aos="fade-right">
        Get In Touch
      </div>
      <div className={styles.line} data-aos="fade-left"></div>

      <div className={styles.socialMediaLinks}>
        <a href="https://www.linkedin.com/in/gourav-goyal18" target="_blank">
          <i className="ri-linkedin-box-fill"></i>
        </a>
        <a href="https://github.com/gouravgyl" target="_blank">
          <i className="ri-github-fill"></i>
        </a>

        <a href="" target="_blank">
          <i className="ri-twitter-fill"></i>
        </a>
      </div>

      <div className={styles.footerContacts}>
        <a href="https://goo.gl/maps/e2bkN5VpvqkbCogR7" target="_blank">
          <i class="ri-map-pin-fill" style={{ marginRight: "5px" }}></i>
          <span style={{ fontSize: "20px" }}>Jaipur</span>
        </a>

        <a href="tel:+918949044199">
          <i class="ri-phone-fill" style={{ marginRight: "5px" }}></i>
          <span style={{ fontSize: "20px" }}>8949044199</span>
        </a>

        <a href="mailto:gourav.goyal1899@gmail.com" target="_blank">
          <i class="ri-mail-open-fill" style={{ marginRight: "5px" }}></i>
          <span style={{ fontSize: "20px" }}>gourav.goyal1899@gmail.com</span>
        </a>
      </div>
    </div>
  );
}

export { Footer };
