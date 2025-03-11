import React from "react";
import image from "../assets/dark.jpg";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
const Home = () => {
  return (
    <div className="w-full h-screen overflow-hidden text-[#666666] dark:bg-black bg-amber-50  ">
      <div className=" absolute w-full z-10 flex justify-center items-center -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] ">
        <div className=" w-full h-[90vh] px-[3%] dark:border-white flex flex-row  items-center ">
          <div
            className={`w-[32vw] h-[40vw]  rounded-4xl overflow-hidden shadow-[0_10px_20px_rgba(0,_0,_0,_0.9)] `}
          >
            <img src={image} alt="" className="" />
          </div>
          <div className="w-[50%] px-[2%] flex flex-col justify-center ">
            <div className="text-[4vw] w-full flex leading-[8vh] my-[4%]  font-bold uppercase">
              <div className="bg-[#ffb400] h-2 w-10 translate-y-[4vh] mr-[2%] rounded-2xl "></div>
              <div className="w-full">
                <h1 className="text-[#ffb400] w-full ">I'm Sujal Tyagi.</h1>
                <h2 className={`dark:text-white `}>web developer</h2>
              </div>
            </div>
            <div className="mx-[8%] dark:text-amber-500 text-gray-600">
              I'm a Tunisian based web designer & front‑end developer focused on
              crafting clean & user‑friendly experiences, I am passionate about
              building excellent software that improves the lives of those
              around me.
            </div>
            <motion.div
              whileHover={{
                background: `linear-gradient(to left, #ffb400 100%, transparent 50%)`,
              }}
              animate={{}}
              className="mx-[8%] cursor-pointer my-[4%] dark:text-white text-[1vw] font-bold rounded-full flex justify-around items-center w-[40%] border border-amber-400"
            >
              <div className="uppercase w-[90%] flex justify-center items-center ">
                More About me
              </div>
              <div className="text-white h-[4vw] text-2xl flex justify-center items-center bg-amber-400 rounded-full p-2 w-[4.5vw] ">
                <FaArrowRight />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <div className=" -rotate-15 relative bg-yellow-500 -top-6 -left-75 w-[40%] h-[150%]">
      </div>
    </div>
  );
};

export default Home;
