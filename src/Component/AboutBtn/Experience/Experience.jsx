import React from "react";
import { PiBagFill } from "react-icons/pi";
import HeadBtn from "./HeadBtn";
import { headBtndata } from "../../../Store/Store";

const Experience = () => {
  

  return (
    <div className="w-full h-full">
      <h1 className=" uppercase flex justify-center items-center text-3xl font-[500] text-[#676767] mb-[3%]">
        Experience and education
      </h1>
      <div className=" grid grid-cols-2 px-[5%] ">
        {headBtndata.map((item) => (
          <div className="flex m-5">
            <p className=" text-white text-2xl h-fit w-fit p-[1.5%] rounded-full bg-amber-500 flex">
              <PiBagFill />
            </p>
            <HeadBtn item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experience;
