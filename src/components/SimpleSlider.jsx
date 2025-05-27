import React from "react";
import Carousel from "react-bootstrap/Carousel";
import test1 from "../assets/images/test_1.jpg.webp";
import test2 from "../assets/images/test_2.jpg.webp";
import test3 from "../assets/images/test_3.jpg.webp";

export default function SimpleSlider() {
  return (
    <Carousel>
      <Carousel.Item>
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
      </Carousel.Item>

      <Carousel.Item>
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
              <img src={test2} alt="Customer 1" />
            </a>
          </div>
          <div className="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </Carousel.Item>

      <Carousel.Item>
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
              <img src={test3} alt="Customer 1" />
            </a>
          </div>
          <div className="test_info">
            <a href="#">Diane Smith</a>
            <span>Customer</span>
          </div>
        </div>
      </Carousel.Item>
    </Carousel>
  );
}
