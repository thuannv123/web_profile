import React, { useState, useEffect } from "react";
import LinearProgress from "@mui/material/LinearProgress";
import { Box, Typography } from "@mui/material";

const skillData = [
  {
    label: "HTML / CSS",
    value: 90,
    colorStart: "#79ccff",
    colorEnd: "#9b74ff",
  },
  {
    label: "Javascript",
    value: 83,
    colorStart: "#ff4646",
    colorEnd: "#F2CC39",
  },
  { label: "React JS", value: 79, colorStart: "#0054ff", colorEnd: "#ff23d3" },
  {
    label: "JQuery",
    value: 75,
    colorStart: "#79ff7c",
    colorEnd: "#ffbd4a",
  },
  { label: "PHP", value: 61, colorStart: "#79ff8f", colorEnd: "#7b74ff" },
  {
    label: "Tailwind CSS",
    value: 81,
    colorStart: "#ff2d72",
    colorEnd: "#ffab79",
  },
  {
    label: "Wordpress",
    value: 88,
    colorStart: "#A3CDD9",
    colorEnd: "#F2DA5E",
  },
  {
    label: "Magento2",
    value: 77,
    colorStart: "#F2F2F2",
    colorEnd: "#36C8D9",
  },
  {
    label: "Shopify",
    value: 70,
    colorStart: "#A3CDD9",
    colorEnd: "#F2DA5E",
  },
];

const GradientLinearProgress = ({ value, colorStart, colorEnd }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const step = value / 60;
    const timer = setInterval(() => {
      current += step;
      if (current >= value) {
        current = value;
        clearInterval(timer);
      }
      setProgress(current);
    }, 16);
    return () => clearInterval(timer);
  }, [value]);

  return (
    <LinearProgress
      variant="determinate"
      value={progress}
      sx={{
        height: 5,
        borderRadius: 0,
        backgroundColor: "#e5e6e8",
        "& .MuiLinearProgress-bar": {
          borderRadius: 0,
          backgroundImage: `linear-gradient(to right, ${colorStart}, ${colorEnd})`,
        },
      }}
    />
  );
};

export default function SkillsProgress() {
  return (
    <Box sx={{ width: "100%", mx: "auto" }} className="row">
      {skillData.map(({ label, value, colorStart, colorEnd }) => (
        <Box key={label} sx={{ mb: 3 }} className="col-xl-4 col-lg-6 pb_col">
          <Typography
            className="subtitle d-flex justify-content-between"
            variant="subtitle1"
            gutterBottom
          >
            <span className="fs-7">{label}</span>
            <span className="fs-7">{Math.round(value)}%</span>
          </Typography>
          <Box sx={{ position: "relative" }}>
            <GradientLinearProgress
              value={value}
              colorStart={colorStart}
              colorEnd={colorEnd}
            />
          </Box>
        </Box>
      ))}
    </Box>
  );
}
