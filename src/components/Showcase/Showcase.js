import React from "react";
import styles from "./Showcase.module.scss";
import showcase from "../../images/showcase.jpg";

const Showcase = () => {
  return (
    <section className={styles.showcase}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>The headphones of the future.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. A
            assumenda autem fuga ipsa laboriosam magnam nemo officiis pariatur
            ratione! Amet doloremque nostrum quasi rerum unde?
          </p>
          <a className={`${styles.btn} ${styles.btn_primary}`} href="#about">
            Read more
          </a>
        </div>
        <img src={showcase} alt="Headphones" />
      </div>
    </section>
  );
};

export default Showcase;
