import React, { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const AnimatedLoader = ({ targetPercentage, title, subtitle }) => {
  const [percentage, setPercentage] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = (targetPercentage * 100) / 60; // chia làm 60 bước
    const interval = setInterval(() => {
      current += step;
      if (current >= targetPercentage * 100) {
        current = targetPercentage * 100;
        clearInterval(interval);
      }
      setPercentage(current);
    }, 16); // ~60fps

    return () => clearInterval(interval);
  }, [targetPercentage]);

  return (
    <div className="loader_container">
      <CircularProgressbar
        value={percentage}
        text={`${Math.round(percentage)}%`}
        styles={buildStyles({
          pathColor: "rgb(133,131,225)",
          trailColor: "#e5e6e8",
          textColor: "#100f3a",
          textSize: "25px",
          strokeLinecap: "round",
        })}
      />

      <div
        className="loader_content"
        style={{ textAlign: "center", marginTop: 8 }}
      >
        <div className="loader_title">{title}</div>
        <div className="loader_subtitle">{subtitle}</div>
      </div>
    </div>
  );
};

export default function LoaderList() {
  const loaders = [
    {
      targetPercentage: 0.75,
      title: "intuition",
      subtitle: "Etiam nec odio vestibulum est.",
    },
    {
      targetPercentage: 0.83,
      title: "creativity",
      subtitle: "Odio vestibulum est mattis.",
    },
    {
      targetPercentage: 0.25,
      title: "pure luck",
      subtitle: "Vestibulum est mattis effic.",
    },
    {
      targetPercentage: 0.95,
      title: "awesomeness",
      subtitle: "Vestibulum est mattis effic.",
    },
  ];

  return (
    <div className="loaders">
      {loaders.map((loader, idx) => (
        <AnimatedLoader key={idx} {...loader} />
      ))}
    </div>
  );
}
