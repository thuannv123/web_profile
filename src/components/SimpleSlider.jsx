import React from "react";
import Slider from "react-slick";
import test1 from "../assets/images/test_1.jpg.webp";
import test2 from "../assets/images/test_2.jpg.webp";
import test3 from "../assets/images/test_3.jpg.webp";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  return (
    <Slider {...settings}>
      <div>
        <div className="test_item">
          <div className="test_title">Great to work with</div>
          <div className="test_text">
            <p>
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
              est mattis effic iturut magna. Pellentesque sit.
            </p>
          </div>
          <div className="test_image">
            <a href="#">
              <img src={test1} alt="Customer 1" />
            </a>
          </div>
          <div className="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </div>

      <div>
        <div className="test_item">
          <div className="test_title">Great to work with</div>
          <div className="test_text">
            <p>
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
              est mattis effic iturut magna. Pellentesque sit.
            </p>
          </div>
          <div className="test_image">
            <a href="#">
              <img src={test2} alt="Customer 2" />
            </a>
          </div>
          <div className="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </div>

      <div>
        <div className="test_item">
          <div className="test_title">Great to work with</div>
          <div className="test_text">
            <p>
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
              est mattis effic iturut magna. Pellentesque sit.
            </p>
          </div>
          <div className="test_image">
            <a href="#">
              <img src={test3} alt="Customer 3" />
            </a>
          </div>
          <div className="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}
