import React, { Component } from "react";
import styles from "./Gallery2.module.scss";

import img1 from "../../images/gal2323.jpg";
import img2 from "../../images/gal39834.jpg";
import img3 from "../../images/gal43884.jpg";
import img4 from "../../images/gal4958.jpg";
import img5 from "../../images/gal4545.jpg";
import img6 from "../../images/gal74744.jpg";
import Slider from "../Slider/Slider";

const hideBodyOverflow = () => (document.body.style.overflow = "hidden");
const autoBodyOverflow = () => (document.body.style.overflow = "auto");

class Gallery extends Component {
  state = {
    images: [img1, img2, img3, img4, img5, img6],
    isImageBoxShown: false,
    selectedImgIndex: 0,
    viewportWidth: 0,
    viewportHeight: 0
  };
  componentDidMount = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    this.setState({ viewportWidth, viewportHeight });
    window.addEventListener("resize", this.resize);
    window.addEventListener("orientationchange", this.resize);
  };
  componentWillUnmount = () => {
    window.removeEventListener("resize", this.resize);
    window.removeEventListener("orientationchange", this.resize);
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

  resize = () => {
    const viewportWidth = document.documentElement.clientWidth;
    const viewportHeight = document.documentElement.clientHeight;
    this.setState({ viewportWidth, viewportHeight });
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
          <Slider
            images={this.state.images}
            selected={this.state.selectedImgIndex}
            viewWidth={this.state.viewportWidth}
            viewHeight={this.state.viewportHeight}
            prev={this.previousImg}
            next={this.nextImg}
            close={this.closeImageBox}
          />
        ) : null}
      </section>
    );
  }
}

export default Gallery;
