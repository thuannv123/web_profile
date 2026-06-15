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
                  Versatile Full-Stack Developer with 2+ years of professional
                  experience building, optimizing, and maintaining scalable web
                  applications and e-commerce platforms. Proficient across the
                  JavaScript/TypeScript ecosystem, specializing in modern
                  front-end frameworks (ReactJS, Next.js) and robust back-end
                  solutions (Node.js, NestJS, Supabase). Strong expertise in
                  transforming complex UI designs into responsive interfaces,
                  developing RESTful APIs, and optimizing database management
                  workflows. Skilled in leveraging AI-assisted workflows to
                  accelerate debugging, rapid prototyping, and coding efficiency
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
