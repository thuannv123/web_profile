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
            <div className="main_subtitle">Full-Stack AI Engineer</div>
            <div className="main_title">Nguyen Van Thuan</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="about_content">
              <div className="about_title">Description</div>
              <div className="about_text">
                <p>
                  Full-stack engineer with 3+ years of web development
                  experience, now focused on building production LLM
                  applications. Since 04/2026, shipped LLM features used daily
                  by a marketing team: multi-provider integration (OpenAI,
                  Claude, Gemini), prompt and context engineering, structured
                  JSON outputs, and a versioned prompt store that lets
                  non-engineers iterate without redeploys. Strong TypeScript /
                  NestJS / PostgreSQL back end plus React / Next.js front end,
                  so can take an AI feature end-to-end from API design to UI.
                  Works daily with coding agents (Claude Code, Gemini, Codex).
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
