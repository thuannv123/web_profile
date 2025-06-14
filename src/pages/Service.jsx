import React from "react";

import icon10 from "../assets/images/icon_10.png.webp";
import icon11 from "../assets/images/icon_11.png.webp";
import icon12 from "../assets/images/icon_12.png.webp";
import icon13 from "../assets/images/icon_13.png.webp";
import icon14 from "../assets/images/icon_14.png.webp";
import icon15 from "../assets/images/icon_15.png.webp";
import Infor from "../components/Infor";

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
                    <div className="service_title">Website Development</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Build responsive, fast, and user-friendly websites using
                      HTML, CSS, JavaScript, and CMS platforms.
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
                    <div className="service_title">UI/UX Design to Code</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Convert UI designs from Figma, Adobe XD, or Photoshop into
                      clean and functional web interfaces.
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
                    <div className="service_title">Landing Page Creation</div>
                  </div>
                  <div className="service_text">
                    <p>
                      Design and develop modern, SEO-friendly landing pages
                      optimized for performance and conversion.
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
                    <div className="service_title">
                      Website Maintenance & Updates
                    </div>
                  </div>
                  <div className="service_text">
                    <p>
                      Update content, fix bugs, improve layouts, and ensure
                      cross-browser compatibility on existing websites.
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
                    <div className="service_title">
                      Responsive Design Implementation
                    </div>
                  </div>
                  <div className="service_text">
                    <p>
                      Ensure websites look great and function well on all screen
                      sizes and devices.
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
                    <div className="service_title">
                      E-commerce Website Customization
                    </div>
                  </div>
                  <div className="service_text">
                    <p>
                      Customize and maintain online stores using Magento2,
                      Shopify, and WordPress WooCommerce.
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
