import React from "react";
import Infor from "../components/Infor";

const Experience = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What I am good at</div>
            <div className="main_title">My Experience</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="experience">
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">2024-Present</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">IT SPECIALIST</div>
                    <div className="exp_subtitle">
                      CVT Consulting and Investment Joint Stock Company
                    </div>
                  </div>
                  <div className="exp_text">
                    <p>
                      I design and develop responsive website interfaces, manage
                      content updates, and support the HR system using
                      LarkSuite. I work with HTML, CSS, JavaScript, and
                      WordPress to maintain sites like cvti.vn, v2c.vn, and
                      cllc.vn.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">2023-2024</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">Front End Developer</div>
                    <div className="exp_subtitle">Wiki Solution</div>
                  </div>
                  <div className="exp_text">
                    <p>
                      I create website UI/UX concepts and design interfaces
                      based on client requirements. I develop and maintain
                      front-end functionality using HTML, CSS, jQuery, and
                      implement responsive designs for various devices. I also
                      manage website content such as product updates and
                      articles, and design interfaces with Adobe XD and Figma.
                      Technologies I work with include Magento, PHTML/LESS,
                      jQuery, and PHP. Key projects include keds.co.th,
                      bigcamera.co.th, and aeo.th.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">2022-2023</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">WEB DEVELOPER</div>
                    <div className="exp_subtitle">
                      Nina Trading and Services Company
                    </div>
                  </div>
                  <div className="exp_text">
                    <p>
                      I design websites by translating Photoshop layouts into
                      functional, user-friendly interfaces. I also upgrade and
                      maintain existing websites to improve performance and
                      usability. Using PHP, HTML/LESS, and JavaScript, I create
                      user interfaces tailored to client requirements, ensuring
                      responsive and visually appealing results.
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

export default Experience;
