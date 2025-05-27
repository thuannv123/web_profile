import React, { useState } from "react";
import Infor from "../components/infor";

const categories = ["All", "Frontend", "Backend", "Data Analyst"];
const data = [
  {
    name: "Bigcam",
    category: "Frontend",
    image: "https://preview.colorlib.com/theme/vcard2/images/smith.jpg.webp",
  },
  {
    name: "Lensly",
    category: "Backend",
    image: "https://preview.colorlib.com/theme/vcard2/images/smith.jpg.webp",
  },
  {
    name: "Brandico",
    category: "Data Analyst",
    image: "https://preview.colorlib.com/theme/vcard2/images/smith.jpg.webp",
  },
  {
    name: "Mockup",
    category: "Frontend",
    image: "https://preview.colorlib.com/theme/vcard2/images/smith.jpg.webp",
  },
  {
    name: "Shootify",
    category: "Backend",
    image: "https://preview.colorlib.com/theme/vcard2/images/smith.jpg.webp",
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
                      <div className="portfolio_item_title">{item.name}</div>
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
