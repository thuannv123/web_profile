import React from "react";
import "../assets/style/style.scss";
import LoaderList from "../components/Circular";
import Infor from "../components/Infor";

const Home = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="main_subtitle">Front-End Developer</div>
            <div className="main_title">Nguyen Van Thuan</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="about_content">
              <div className="about_title">Description</div>
              <div className="about_text">
                <p>
                  Dynamic Front-End Developer with 2+ years of professional
                  experience in building, maintaining, and optimizing responsive
                  web interfaces and e-commerce applications. Proficient in Core
                  JavaScript (ES6+), modern styling frameworks, and
                  transitioning towards advanced Component-Driven Architecture
                  (ReactJS, Next.js). Strong expertise in converting complex UI
                  concepts (Figma/Photoshop) into pixel-perfect, cross-browser
                  compatible web pages. Skilled in AI-assisted development and
                  automated workflows to maximize coding efficiency and
                  accelerate debugging processes.
                </p>
              </div>
              <LoaderList />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
