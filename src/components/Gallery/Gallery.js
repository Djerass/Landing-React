import React, { Component } from "react";
import styles from "./Gallery.module.scss";

import img1 from "../../images/gal2323.jpg";
import img2 from "../../images/gal39834.jpg";
import img3 from "../../images/gal43884.jpg";
import img4 from "../../images/gal4958.jpg";
import img5 from "../../images/gal4545.jpg";
import img6 from "../../images/gal74744.jpg";

const hideBodyOverflow = () => (document.body.style.overflow = "hidden");
const autoBodyOverflow = () => (document.body.style.overflow = "auto");

class Gallery extends Component {
  state = {
    images: [img1, img2, img3, img4, img5, img6],
    isImageBoxShown: false,
    selectedImgIndex: 0
  };

  nextImg = () => {
    this.setState(prev => {
      return {
        selectedImgIndex:
          prev.selectedImgIndex === prev.images.length - 1
            ? 0
            : prev.selectedImgIndex + 1
      };
    });
  };

  previousImg = () => {
    this.setState(prev => {
      return {
        selectedImgIndex:
          prev.selectedImgIndex === 0
            ? prev.images.length - 1
            : prev.selectedImgIndex - 1
      };
    });
  };
  openImageBox = e => {
    e.preventDefault();
    const { index } = e.target.dataset;
    if (index) {
      hideBodyOverflow();
      this.setState({
        isImageBoxShown: true,
        selectedImgIndex: Number.parseInt(index)
      });
    }
  };
  closeImageBox = e => {
    if (
      e.target.id === "close_btn" ||
      (e.target.tagName !== "I" && e.target.tagName !== "IMG")
    ) {
      autoBodyOverflow();
      this.setState({ isImageBoxShown: false });
    }
  };
  render() {
    const galleryItems = this.state.images.map((image, index) => {
      return (
        <a href={image} key={image}>
          <img
            src={image}
            alt={image}
            style={{ height: "100%" }}
            data-index={index}
            onClick={this.openImageBox}
          />
        </a>
      );
    });
    return (
      <section className={styles.gallery}>
        <div className={styles.gallery_inner}>{galleryItems}</div>
        {this.state.isImageBoxShown ? (
          <div onClick={this.closeImageBox} className={styles.image_box}>
            <div className={styles.image_info}>
              <div>
                {this.state.selectedImgIndex + 1} / {this.state.images.length}
              </div>
              <div>
                <i
                  className="fas fa-times fa-2x"
                  id="close_btn"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className={styles.image_control}>
              <button onClick={this.previousImg}>
                <i className="fas fa-chevron-left fa-5x" />
              </button>
              <img
                src={this.state.images[this.state.selectedImgIndex]}
                alt="gallery"
              />
              <button onClick={this.nextImg}>
                <i className="fas fa-chevron-right fa-5x" />
              </button>
            </div>
          </div>
        ) : null}
      </section>
    );
  }
}

export default Gallery;
