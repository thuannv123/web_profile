import React from "react";

import icon10 from "../assets/images/icon_10.png.webp";
import icon11 from "../assets/images/icon_11.png.webp";
import icon12 from "../assets/images/icon_12.png.webp";
import icon13 from "../assets/images/icon_13.png.webp";
import icon14 from "../assets/images/icon_14.png.webp";
import icon15 from "../assets/images/icon_15.png.webp";

import Infor from "../components/infor";
const Service = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What I am good at</div>
            <div className="main_title">My Services</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="services">
              <div className="services_container d-flex flex-row flex-wrap align-items-start justify-content-start">
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon10} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Fast coding service</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon11} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Documentations</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon12} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Online presentations</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon13} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Online shops</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon14} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Video footages</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    </p>
                  </div>
                </div>
                <div className="service">
                  <div className="service_title_container d-flex flex-row align-items-center justify-content-start">
                    <div>
                      <div className="service_icon">
                        <img src={icon15} alt="" />
                      </div>
                    </div>
                    <div className="service_title">Stock photos</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Service;
