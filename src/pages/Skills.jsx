import React from "react";
import SkillsProgress from "../components/Skill.jsx";
import icon6 from "../assets/images/icon_6.png.webp";
import icon7 from "../assets/images/icon_7.png.webp";
import icon8 from "../assets/images/icon_8.png.webp";
import icon9 from "../assets/images/icon_9.png.webp";
import Infor from "../components/Infor.jsx";

const Skills = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What I am good at</div>
            <div className="main_title">My Skills</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="skill">
              <div className="skills_text">
                <div className="container-fluid">
                  <div className="row">
                    <div className="col-xl-6">
                      <p>
                        As a Frontend Developer, I possess strong expertise in
                        building responsive, user-centric web applications with
                        a focus on performance and accessibility. I am
                        proficient in core technologies such as HTML, CSS, and
                        JavaScript, and skilled in modern frameworks and
                        libraries like ReactJS and jQuery. My responsibilities
                        include developing clean and maintainable code,
                        integrating APIs, and optimizing user interfaces to
                        ensure seamless user experiences across different
                        devices and browsers. I have hands-on experience working
                        with popular CMS and e-commerce
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <p>
                        platforms like WordPress, Magento2, and Shopify,
                        customizing themes and plugins to meet client
                        requirements. I am also experienced in using version
                        control systems such as Git, and applying automation
                        tools and build processes to streamline development
                        workflows. In addition, I collaborate closely with
                        designers, backend developers, and QA teams to deliver
                        high-quality digital products. I am committed to
                        continuously learning new technologies and best
                        practices, improving code quality, and enhancing website
                        performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <SkillsProgress />
              <div className="milestones">
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon6} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    2+
                  </div>
                  <div className="milestone_text">Years of Experience</div>
                </div>
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon7} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    20+
                  </div>
                  <div className="milestone_text">The system is deployed</div>
                </div>
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon8} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    20+
                  </div>
                  <div className="milestone_text">The partners have worked</div>
                </div>
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon9} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    20+
                  </div>
                  <div className="milestone_text">Finished Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
