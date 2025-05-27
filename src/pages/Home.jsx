import React from "react";
import "../assets/style/style.scss";
import LoaderList from "../components/Circular";
import Infor from "../components/infor";

const Home = () => {
  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="main_subtitle">HTML5 & CSS Developer</div>
            <div className="main_title">Jeremy Smith</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="about_content">
              <div className="about_title">Description</div>
              <div className="about_text">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Phasellus vitae sapien porttitor, dignissim quam sit amet,
                  aliquam lorem. Fusce id ligula non risus mollis consectetur.
                  Nam lobortis, erat quis pulvinar dignissim, velit ligula
                  ullamcorper ipsum, at sodales elit odio at velit. Sed a est a
                  quam mattis suscipit. Proin et faucibus diam. Lorem ipsum
                  dolor sit amet, consectetur adipiscing elit. Phasellus vitae
                  sapien porttitor, dignissim quam sit amet, aliquam lorem.
                  Fusce id ligula non risus mollis consectetur. Nam lobortis,
                  erat quis pulvinar dignissim, velit ligula ullamcorper ipsum,
                  at sodales elit odio at velit. Sed a est a quam mattis
                  suscipit.
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
