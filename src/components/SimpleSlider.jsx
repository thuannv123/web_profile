import React from "react";
import Slider from "react-slick";
import test1 from "../assets/images/test_1.jpg.webp";
import test2 from "../assets/images/test_2.jpg.webp";
import test3 from "../assets/images/test_3.jpg.webp";

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
        },
      },
    ],
  };
  return (
    <Slider {...settings} className="">
      <div>
        <div class="test_item">
          <div class="test_title">Great to work with</div>
          <div class="test_text">
            <p>
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
              est mattis effic iturut magna. Pellentesque sit.
            </p>
          </div>
          <div class="test_image">
            <a href="#">
              <img src={test1} alt="" />
            </a>
          </div>
          <div class="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </div>
      <div>
        <div class="test_item">
          <div class="test_title">Great to work with</div>
          <div class="test_text">
            <p>
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
              est mattis effic iturut magna. Pellentesque sit.
            </p>
          </div>
          <div class="test_image">
            <a href="#">
              <img src={test2} alt="" />
            </a>
          </div>
          <div class="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </div>
      <div>
        <div class="test_item">
          <div class="test_title">Great to work with</div>
          <div class="test_text">
            <p>
              Etiam nec odio vestibulum est mattis effic iturut magna.
              Pellentesque sit amet tellus blandit. Etiam nec odio vestibulum
              est mattis effic iturut magna. Pellentesque sit.
            </p>
          </div>
          <div class="test_image">
            <a href="#">
              <img src={test3} alt="" />
            </a>
          </div>
          <div class="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </div>
    </Slider>
  );
}
