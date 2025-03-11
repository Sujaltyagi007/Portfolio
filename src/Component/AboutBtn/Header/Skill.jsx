import React from "react";
import { data } from "../../../Store/Store";
import CircleProgress from "./CircleProgress";

const Skill = () => {
  return (
    <div>
      <div className="flex flex-col items-center h-screen mt-[10%]">
        <h1 className=" uppercase text-3xl font-bold dark:text-white text-black m-5 ">
          My Skill
        </h1>
        <div className=" grid grid-cols-4 px-[5%] w-full  ">
          {data.map((item, index) => (
            <div
              className=" flex flex-col mt-[10%] justify-center items-center "
              key={index}
            >
              <CircleProgress
                percentage={item.per}
                index={item.per}
                circlewidth={"160"}
              />
              <p className=" uppercase text-lg font-[600] dark:text-white">
                {item.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skill;
