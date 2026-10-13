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
                        I build production LLM applications on OpenAI, Claude
                        and Gemini APIs, with multi-provider fallback,
                        streaming, token and cost limits, tool / function
                        calling, structured outputs (JSON schema), and prompt
                        and context engineering. I work in Python, TypeScript,
                        JavaScript, SQL and PHP, and build back ends with
                        Node.js, NestJS, RESTful APIs, PostgreSQL and Supabase,
                        including SQL for analytics and BI.
                      </p>
                    </div>
                    <div className="col-xl-6">
                      <p>
                        On the front end I use React, Next.js, Tailwind CSS,
                        HTML5 and CSS3, built on 3+ years of front-end work for
                        e-commerce platforms. I containerize services with
                        Docker and deploy them to the cloud, use Git and GitHub
                        for version control, and work daily with Claude Code,
                        Gemini CLI and Codex, alongside Figma and Google
                        Analytics.
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
                    3+
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
