import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.social}>
          <h2>Lorem ipsum dolor sit.</h2>
          <div>
            <a href="https://twitter.com/" target="_blank">
              <i className="fab fa-twitter fa-2x" />
            </a>
            <a href="https://www.facebook.com/" target="_blank">
              <i className="fab fa-facebook-f fa-2x" />
            </a>
            <a href="https://www.youtube.com/" target="_blank">
              <i className="fab fa-youtube fa-2x" />
            </a>
          </div>
        </div>
        <ul>
          <li>Company info</li>
          <li>All products</li>
          <li>About us</li>
          <li>Privacy policy</li>
          <li>Terms of service</li>
        </ul>
        <ul>
          <li>Blog posts</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
          <li>Lorem ipsum dolor.</li>
        </ul>
        <div>
          <h4>Subscribe</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <form action="#" className={styles.form_group}>
            <input type="text" placeholder="Email" />
            <button>
              <i className="fas fa-chevron-right"></i>
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
