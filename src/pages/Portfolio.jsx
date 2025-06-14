import React, { useState } from "react";
import Infor from "../components/Infor";
import bigcam from "../assets/images/bigcam.png";
import keds from "../assets/images/keds.png";
import ae from "../assets/images/ae.png";
import cvt from "../assets/images/cvt.png";
import v2c from "../assets/images/v2c.png";
import cllc from "../assets/images/cllc.png";

const categories = ["All", "Frontend", "Backend"];
const data = [
  {
    name: "Bigcamera",
    category: "Frontend",
    image: bigcam,
    url: "https://www.bigcamera.co.th/",
  },
  {
    name: "Keds",
    category: "Frontend",
    image: keds,
    url: "https://keds.co.th/",
  },
  {
    name: "American Eagle",
    category: "Frontend",
    image: ae,
    url: "https://aeo.th/",
  },
  {
    name: "CVT",
    category: "Frontend",
    image: cvt,
    url: "https://cvti.vn/",
  },
  {
    name: "Visa2Canada",
    category: "Frontend",
    image: v2c,
    url: "https://v2c.vn/",
  },
  {
    name: "Canadian Language Learning Center",
    category: "Frontend",
    image: cllc,
    url: "https://cllc.vn/",
  },
];

const Portfolio = () => {
  const [activeTab, setActiveTab] = useState("All");

  const filteredItems =
    activeTab === "All"
      ? data
      : data.filter((item) => item.category === activeTab);

  return (
    <div className="content_container">
      <div className="main_content_outer  d-flex flex-xl-row flex-column align-items-start justify-content-start">
        <Infor />
        <div className="main_content">
          <div className="main_title_container d-flex flex-column align-items-start justify-content-end">
            <div className="skill_subtitle">What clients say</div>
            <div className="main_title">My Portfolio</div>
          </div>
          <div className="main_content_scroll scroll">
            <div className="tabs-container">
              <div className="tabs portfolio_categories button-group filters-button-group">
                <ul>
                  {categories.map((category) => (
                    <li
                      key={category}
                      className={`tab portfolio_category  ${
                        activeTab === category ? "active" : ""
                      }`}
                      onClick={() => setActiveTab(category)}
                    >
                      {category}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="portfolio_grid">
                {filteredItems.map((item, index) => (
                  <div
                    className="grid-item portfolio_item p_design"
                    key={index}
                  >
                    <img src={item.image} alt={item.name} />
                    <div className="portfolio_item_content">
                      <div className="portfolio_item_title">
                        <a href={item.url}>{item.name}</a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
