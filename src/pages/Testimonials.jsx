import React from "react";
import Infor from "../components/infor";

const Testimonials = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What clients say</div>
            <div className="main_title">Testimonials</div>
          </div>
          <div className="main_content_scroll scroll"></div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
