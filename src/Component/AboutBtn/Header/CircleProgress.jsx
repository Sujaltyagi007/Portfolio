import React from "react";

const CircleProgress = ({ percentage, circlewidth }) => {
  const radius = 60;
  const array = radius * Math.PI * 2;
  const dashoffset = array - (array * percentage) / 100;
  return (
    <div className=" dark:text-white text-black">
      <svg
        width={circlewidth}
        height={circlewidth}
        viewBox={`0 0 ${circlewidth} ${circlewidth}`}
      >
        <circle
          cx={circlewidth / 2}
          cy={circlewidth / 2}
          r={radius}
          strokeWidth={"10px"}
          className="circle-bg"
        />
        <circle
          cx={circlewidth / 2}
          cy={circlewidth / 2}
          r={radius}
          strokeWidth={"10px"}
          className="circle-progress"
          style={{
            strokeDasharray: array,
            strokeDashoffset: dashoffset,
          }}
          transform={`rotate(-90 ${circlewidth / 2} ${circlewidth / 2})`}
        />
        <text
          x="40%"
          y="43%"
          dy={`1em`}
          className=" text-2xl dark:white black fill-current"
        >
          {percentage}%
        </text>
      </svg>
    </div>
  );
};

export default CircleProgress;
