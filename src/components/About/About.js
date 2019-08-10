import React from "react";
import styles from "./About.module.scss";
// import background from "../../images/about.jpg";

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.about_inner}>
        <h4>Loud & Clear</h4>
        <h1>People Aren't Hearing All the Music</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
          repudiandae laboriosam quia, error tempore porro ducimus voluptate
          laborum nostrum iure.
        </p>
      </div>
    </section>
  );
};

export default About;
