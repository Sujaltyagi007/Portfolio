import { svg } from "framer-motion/client";
import React from "react";

const AboutCircle = ({ width, percentage }) => {
  const radius = 60;
  const dashArray = radius * Math.PI * 2;
  const dashOff = dashArray - (dashArray * percentage) / 100;
  return (
    <svg height={width} width={width} viewBox={` 0 0 ${width} ${width}`}>
      <circle
        cx={width / 2}
        cy={width / 2}
        strokeWidth={"10px"}
        r={radius}
        className="circel-bg"
      />
      <circle
        cx={width / 2}
        cy={width / 2}
        strokeWidth={"10px"}
        r={radius}
        className="circel-back"
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOff,
        }}
        transform={`rotate(-90 ${width / 2} ${width / 2})`}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.5rem" 
        dx="0.2rem"
        className="about-text dark:text-white text-black text-[2vw]"
      >
        {percentage}%
      </text>
    </svg>
  );
};

export default AboutCircle;
