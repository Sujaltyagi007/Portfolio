import React from "react";
import AboutCircle from "./AboutCircle";

const Skill = () => {
  const data = [
    { 25: "html" },
    { 89: "javascript" },
    { 70: "css" },
    { 66: "php" },
    { 95: "wordpress" },
    { 50: "jquery" },
    { 65: "angular" },
    { 45: "react" },
  ];
  return (
    <div>
      <div className="flex flex-col items-center h-screen mt-[10%]">
        <h1 className=" uppercase text-3xl font-bold dark:text-white text-black m-5 ">
          My Skill
        </h1>
        <div className=" grid grid-cols-4 px-[5%] w-full  ">
          <div className=" flex justify-center items-center ">
            {data.map((index, item) => {
                {index}
            //   <AboutCircle width={200} percentage={index}  />
              {item}
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skill;
