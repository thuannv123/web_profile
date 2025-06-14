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
                  I’m a passionate Frontend Developer with over 2 years of
                  experience in creating responsive, user-focused websites and
                  web applications. I have hands-on experience with HTML, CSS,
                  JavaScript, and libraries/frameworks such as jQuery, ReactJS,
                  WordPress, Magento2, and Shopify. I enjoy turning design ideas
                  into functional, clean interfaces and continuously improving
                  my skills to build better digital experiences.
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
