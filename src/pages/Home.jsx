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
            <div className="main_subtitle">AI Engineer – LLM Applications</div>
            <div className="main_title">Nguyen Van Thuan</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="about_content">
              <div className="about_title">Description</div>
              <div className="about_text">
                <p>
                  Engineer with 3+ years of web development experience, focused
                  on production LLM applications since 04/2026. Built LLM
                  features used daily by a marketing team: multi-provider
                  integration (OpenAI, Claude, Gemini) with fallback, streaming
                  responses, token and cost limits, tool/function calling,
                  structured JSON outputs, and a versioned prompt store that
                  lets non-engineers iterate without redeploys. Works across
                  Python and TypeScript (NestJS) back ends, PostgreSQL, React /
                  Next.js front ends, and Docker-based cloud deployment, so can
                  take an AI feature end-to-end from API design to production.
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
