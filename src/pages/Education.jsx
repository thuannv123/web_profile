import React from "react";
import edu1 from "../assets/images/fpt.png";
import Infor from "../components/Infor";

const Education = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What I am good at</div>
            <div className="main_title">My Education</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="education">
              <div className="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div className="edu_year">2019</div>
                </div>
                <div>
                  <div className="edu_image">
                    <img src={edu1} alt="" />
                  </div>
                </div>
                <div className="edu_content">
                  <div className="edu_title_container">
                    <div className="edu_title">FPT Polytechnic</div>
                    <div className="edu_subtitle">Website Design</div>
                  </div>
                  <div className="edu_text">
                    <p>
                      I studied Website Design at FPT Polytechnic, where I
                      gained solid knowledge and practical skills in creating
                      responsive and user-friendly websites. The program covered
                      essential technologies such as HTML, CSS, JavaScript, and
                      principles of UI/UX design, preparing me to build
                      effective and modern web interfaces.
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

export default Education;
