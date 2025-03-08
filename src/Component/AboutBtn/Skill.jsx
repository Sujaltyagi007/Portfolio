import React from "react";
import CircleProgress from "./CircleProgress";

const Skill = () => {
  const data = [
    { number: 25, value: "Html" },
    { number: 89, value: "css" },
    { number: 70, value: "javascript" },
    { number: 66, value: "php" },
    { number: 95, value: "wordpress" },
    { number: 50, value: "jquery" },
    { number: 65, value: "angular" },
    { number: 45, value: "React" },
  ];
  return (
    <div>
      <div className="flex flex-col items-center h-screen mt-[10%]">
        <h1 className=" uppercase text-3xl font-bold dark:text-white text-black m-5 ">
          My Skill
        </h1>
        <div className=" grid grid-cols-4 px-[5%] w-full  ">
          {data.map((items) => (
            <div className=" flex flex-col justify-center items-center ">
              <CircleProgress currentvalue={items.number} circlewidth={180} />
              <p className="text-xl font-[500]">{items.value}</p>
            </div>
          )
          )}
        </div>
      </div>
    </div>
  );
};

export default Skill;
