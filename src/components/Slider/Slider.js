import React from "react";
import styles from "./Slider.module.scss";

const getWidth = viewPortWidth => (viewPortWidth > 600 ? 500 : 300);
const getHeight = viewPortHeight => (viewPortHeight > 600 ? 500 : 300);

const Slider = props => {
  const { images, selected, next, prev, close, viewWidth, viewHeight } = props;
  const imgWidth = getWidth(viewWidth);
  const imgHeight = getHeight(viewHeight);
  const translate = {
    maxWidth: `${imgWidth}px`,
    transform: `translateX(-${imgWidth * selected}px)`
  };
  const imageStyle = {
    height: `${imgHeight}px`
  };
  return (
    <section className={styles.slider} onClick={close}>
      <div className={styles.info}>
        <div>{`${selected + 1} / ${images.length}`}</div>
        <button>
          <i className="fas fa-times fa-2x" id="close_btn" />
        </button>
      </div>
      <div className={styles.wrapper}>
        <div className={styles.inner} style={translate}>
          {images.map((image, index) => (
            <img
              style={imageStyle}
              src={image}
              className={index === selected ? styles.active : null}
              key={image}
              alt="slider"
            />
          ))}
        </div>
      </div>
      <div className={styles.control}>
        <button className={styles.control_btn} onClick={prev}>
          <i className="fas fa-chevron-left fa-2x" />
        </button>
        <button className={styles.control_btn} onClick={next}>
          <i className="fas fa-chevron-right fa-2x" />
        </button>
      </div>
    </section>
  );
};

export default Slider;
