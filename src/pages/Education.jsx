import React from "react";
import Infor from "../components/infor";
import edu1 from "../assets/images/edu_1.png.webp";
import edu2 from "../assets/images/edu_2.png.webp";
import edu3 from "../assets/images/edu_3.png.webp";

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
                  <div className="edu_year">2010</div>
                </div>
                <div>
                  <div className="edu_image">
                    <img src={edu1} alt="" />
                  </div>
                </div>
                <div className="edu_content">
                  <div className="edu_title_container">
                    <div className="edu_title">University of Colorado</div>
                    <div className="edu_subtitle">Developer Diploma PhD</div>
                  </div>
                  <div className="edu_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                      Proin vitae tortor nec risus tristique efficitur. Aliquam
                      luctus est urna, id aliquam orci tempus sed. Aenean sit
                      amet leo id enim dapibus eleifend. Phasellus ut erat
                      dapibus, tempor sapien non, porta urna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div className="edu_year">2008</div>
                </div>
                <div>
                  <div className="edu_image">
                    <img src={edu2} alt="" />
                  </div>
                </div>
                <div className="edu_content">
                  <div className="edu_title_container">
                    <div className="edu_title">Graphic School</div>
                    <div className="edu_subtitle">Graphic Design Course</div>
                  </div>
                  <div className="edu_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                      Proin vitae tortor nec risus tristique efficitur. Aliquam
                      luctus est urna, id aliquam orci tempus sed. Aenean sit
                      amet leo id enim dapibus eleifend. Phasellus ut erat
                      dapibus, tempor sapien non, porta urna.
                    </p>
                  </div>
                </div>
              </div>
              <div className="edu_item d-flex flex-lg-row flex-column align-items-start justfy-content-start">
                <div>
                  <div className="edu_year">2007</div>
                </div>
                <div>
                  <div className="edu_image">
                    <img src={edu3} alt="" />
                  </div>
                </div>
                <div className="edu_content">
                  <div className="edu_title_container">
                    <div className="edu_title">Colorado High School</div>
                    <div className="edu_subtitle">
                      Bachelor Degree - Developer
                    </div>
                  </div>
                  <div className="edu_text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus vitae sapien porttitor, dignissim quam sit ame.
                      Proin vitae tortor nec risus tristique efficitur. Aliquam
                      luctus est urna, id aliquam orci tempus sed. Aenean sit
                      amet leo id enim dapibus eleifend. Phasellus ut erat
                      dapibus, tempor sapien non, porta urna.
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
