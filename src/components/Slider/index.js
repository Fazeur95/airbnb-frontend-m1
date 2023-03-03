import React, { useState } from "react";
import styles from "./index.module.scss";

//Make an auto slider with a timer

const ImageSlider = () => {
  const images = ["Marseille2.jpg", "Marseille1.png"];

  const [currentIndex, setCurrentIndex] = useState(0);

  const length = images.length;

  //If the current index is the last image, go back to the first image
  if (currentIndex === length - 1) {
    setTimeout(() => setCurrentIndex(0), 10000);
  } else {
    setTimeout(() => setCurrentIndex(currentIndex + 1), 10000);
  }

  return (
    <div className={styles.slider}>
      <div className={styles.slider__wrapper}>
        <div className={styles.slider__wrapper__image}>
          <img src={images[currentIndex]} alt="Slider image" />
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
