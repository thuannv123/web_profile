import React from "react";

import icon1 from "../assets/images/icon_1.png.webp";
import icon2 from "../assets/images/icon_2.png.webp";
import icon3 from "../assets/images/icon_3.png.webp";
import icon4 from "../assets/images/icon_4.png.webp";
import icon5 from "../assets/images/icon_5.png.webp";
const Infor = () => {
  return (
    <div className="general_info d-flex flex-xl-column flex-md-row flex-column">
      <div>
        <div className="general_info_image">
          <img
            src="https://preview.colorlib.com/theme/vcard2/images/smith.jpg.webp"
            alt=""
          />
        </div>
      </div>
      <div className="general_info_content">
        <div className="general_info_content_inner scroll">
          <div className="general_info_title">General Information</div>
          <ul className="general_info_list">
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon1} alt="" />
              </div>
              <div className="general_info_text">
                Name: <span>Edsel Le</span>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center"></div>
              <div className="general_info_text">
                Location: <span>Ha Noi</span>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon2} alt="" />
              </div>
              <div className="general_info_text">
                Date of Birth: <span>February 06, 2001</span>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon3} alt="" />
              </div>
              <div className="general_info_text">
                <a href="mailto:edsel@gmail.com">edsel@gmail.com</a>
              </div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon4} alt="" />
              </div>
              <div className="general_info_text">1900 9090</div>
            </li>
            <li className="d-flex flex-row align-items-center justify-content-start">
              <div className="general_info_icon d-flex flex-column align-items-start justify-content-center">
                <img src={icon5} alt="" />
              </div>
              <div className="general_info_text">
                <a href="mailto:edsel@gmail.com">www.edsel.com</a>
              </div>
            </li>
          </ul>
          <div className="social_container">
            <ul className="d-flex flex-row align-items-start justify-content-start">
              <li>
                <a href="#">
                  <i className="fa-brands fa-google-plus-g"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-github"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="fa-solid fa-phone"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Infor;
