import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from '../styles/Slide.module.css';
import Image from 'next/image';

type sliderType = {
  slider: string[];
};

export default function Slide({ slider }: sliderType) {
  function SampleNextArrow(props: any) {
    let { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: 'block' }}
        onClick={onClick}
      />
    );
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    // lazyLoad: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    customPaging: function (i: any) {
      return <div className="dot"></div>;
    },
    dotsClass: 'slick-dots slick-thumb',
  };

  return (
    <div className={styles.container}>
      <Slider {...settings} className={styles.slideWrap}>
        {slider.map((slide, index) => {
          return (
            <div key={index} className={styles.slideBox}>
              <Image
                src={slide}
                alt="project"
                fill
                className={styles.slideImg}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}
