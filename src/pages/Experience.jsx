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
                  <div className="exp_time">04/2026 - Present</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">
                      Freelance AI / Full-Stack Developer
                    </div>
                    <div className="exp_subtitle">
                      Pati Group — Ads Launcher (ads.patigroup.com)
                    </div>
                  </div>
                  <div className="exp_text">
                    <p>
                      - Built LLM-powered features on OpenAI, Claude and Gemini
                      APIs to automate marketing campaign data analysis for 5
                      daily internal users.
                      <br />
                      - Implemented provider fallback, streaming responses and
                      per-request token and cost limits to keep the features
                      reliable and within budget.
                      <br />
                      - Used tool / function calling and JSON-schema structured
                      outputs so the model could query campaign data and return
                      results the application could consume directly.
                      <br />
                      - Designed prompt templates and context strategies,
                      reducing task time from 2 hours to 10 minutes.
                      <br />
                      - Built async REST APIs in NestJS with a versioned prompt
                      store on Supabase (PostgreSQL), so the marketing team
                      could update prompts without redeploying.
                      <br />
                      - Containerized services with Docker and deployed them to
                      the cloud.
                      <br />
                      - Developed e-commerce features for supplement products
                      with React and Next.js.
                    </p>
                  </div>
                  <div className="exp_title_container">
                    <div className="exp_subtitle">
                      MaoTrung — E-commerce (maotrung.com) &amp; BI Dashboard
                      (bi.maotrung.com)
                    </div>
                  </div>
                  <div className="exp_text">
                    <p>
                      - Built the maotrung.com front end in Next.js and
                      integrated it with backend product APIs.
                      <br />
                      - Developed a BI dashboard (bi.maotrung.com) tracking
                      revenue and product sales volume for the management team.
                      <br />
                      - Built a competitor price comparison module that collects
                      prices from competitor websites and matches them against
                      MaoTrung&apos;s product catalog to support pricing
                      decisions.
                      <br />- Technologies Used: Python, TypeScript, React,
                      Next.js, Node.js, NestJS, PostgreSQL, Supabase, Docker,
                      OpenAI / Claude / Gemini APIs, Git.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">09/2025 - 03/2026</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">Self-directed Study</div>
                    <div className="exp_subtitle">AI / LLM Engineering</div>
                  </div>
                  <div className="exp_text">
                    <p>
                      - Full-time self-study to transition from front-end to AI
                      engineering: Python, LLM APIs, prompt engineering and tool
                      / function calling, applied directly in the freelance
                      projects above.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">07/2024 - 09/2025</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">
                      Front-End Developer / Web Operations
                    </div>
                    <div className="exp_subtitle">
                      CVT Consulting and Investment JSC
                    </div>
                  </div>
                  <div className="exp_text">
                    <p>
                      - Built responsive landing pages and campaign assets from
                      Figma designs for business portals cvti.vn and v2c.vn.
                      <br />
                      - Monitored site performance and fixed front-end defects
                      to improve cross-browser rendering speed.
                      <br />- Technologies Used: JavaScript, HTML5, CSS3, CMS.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">03/2023 - 05/2024</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">Front-End Developer</div>
                    <div className="exp_subtitle">Wiki Solution</div>
                  </div>
                  <div className="exp_text">
                    <p>
                      - Developed and refactored front-end interfaces for
                      international e-commerce platforms (bigcamera.co.th,
                      keds.co.th, aeo.th).
                      <br />
                      - Built reusable templates and components, and provided
                      tier-2 support for front-end bugs.
                      <br />- Technologies Used: JavaScript, jQuery, LESS,
                      PHTML, PHP, Magento 2.
                    </p>
                  </div>
                </div>
              </div>
              <div className="exp_item d-flex flex-md-row flex-column align-items-start justify-content-start">
                <div>
                  <div className="exp_time">09/2022 - 02/2023</div>
                </div>
                <div className="exp_content">
                  <div className="exp_title_container">
                    <div className="exp_title">Front-End Developer</div>
                    <div className="exp_subtitle">
                      Nina Trading and Services Co., Ltd
                    </div>
                  </div>
                  <div className="exp_text">
                    <p>
                      - Built responsive layouts from Photoshop designs and
                      upgraded legacy client websites to modern standards.
                      <br />- Technologies Used: PHP, LESS, JavaScript, Magento
                      2.
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
