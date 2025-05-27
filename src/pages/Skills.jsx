import React from "react";
import Infor from "../components/infor";
import SkillsProgress from "../components/Skill.jsx";
import icon6 from "../assets/images/icon_6.png.webp";
import icon7 from "../assets/images/icon_7.png.webp";
import icon8 from "../assets/images/icon_8.png.webp";
import icon9 from "../assets/images/icon_9.png.webp";

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
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus vitae sapien porttitor, dignissim quam sit
                        amet, aliquam lorem. Fusce id ligula non risus mollis
                        consectetur. Nam lobortis, erat quis pulvinar dignissim,
                        velit ligula ullamcorper ipsum, at sodales elit odio at
                        velit.
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <p>
                        Phasellus vitae sapien porttitor, dignissim quam sit
                        amet, aliquam lorem. Fusce id ligula non risus mollis
                        consectetur. Nam lobortis, erat quis pulvinar dignissim,
                        velit ligula ullamcorper ipsum, at sodales elit odio at
                        velit. Sed a est a quam mattis suscipit. Proin et
                        faucibus diam.
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
                    14
                  </div>
                  <div className="milestone_text">Years of Experience</div>
                </div>
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon7} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    +1000
                  </div>
                  <div className="milestone_text">Happy Clients</div>
                </div>
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon8} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    14k
                  </div>
                  <div className="milestone_text">Followers on FB</div>
                </div>
                <div className="milestone text-center">
                  <div className="milestone_icon">
                    <img src={icon9} alt="" />
                  </div>
                  <div className="milestone_counter" data-end-value="14">
                    732
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
