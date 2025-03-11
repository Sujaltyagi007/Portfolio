import React from "react";
import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa6";
import AboutBtn from "../Component/AboutBtn/Header/SqurareBtn";
import Skill from "../Component/AboutBtn/Header/Skill";
import Experience from "../Component/AboutBtn/Experience/Experience";

const About = () => {
  const data = [
    {
      head: "12",
      body: "Years of Experience",
    },
    {
      head: "97",
      body: "Completed Projects",
    },
    {
      head: "81",
      body: "Happy Customers",
    },
    {
      head: "53",
      body: "Awards Wons",
    },
  ];
  return (
    <div className=" w-full overflow-auto  text-[#525252] dark:bg-black bg-amber-50 ">
      <div className={`w-full  font-extrabold text-4xl `}>
        <h1 className="w-full flex justify-center top-[50%] translate-y-[50px] tracking-wide text-[17vh] uppercase opacity-4 dark:opacity-25 ">
          Resume
        </h1>
        <div className="uppercase flex text-6xl justify-center -translate-y-[60%] gap-3 ">
          <h1 className=" text-white">About</h1>
          <h1 className="text-[#ffb400]">Me</h1>
        </div>
      </div>
      <div className="my-[3%]">
        <div className=" mx-[7%] gap-[2%] grid grid-cols-2">
          <div className="">
            <h1 className=" uppercase font-bold text-[2vw] dark:text-white text-black my-[2%]">
              Personal Infos
            </h1>
            <div className=" flex items-center justify-end w-full my-[5%]">
              <div className=" flex flex-col gap-3 text-[15px] w-full ">
                <span className="flex gap-1 font-[600]">
                  <p className="text-[#989898]">First Name:</p>Sujal
                </span>
                <span className="flex gap-1 font-[600]">
                  <p className="text-[#989898]">Age:</p>22
                </span>
                <span className="text-green-600 flex gap-1 font-[600]">
                  <p className=" text-[#989898]">Freelance:</p>Avaliable
                </span>
                <span className="flex gap-1 font-[600]">
                  <p className="text-[#989898]">Phone:</p>+91-123456789
                </span>
                <span className="flex gap-1 font-[600]">
                  <p className="text-[#989898]">Skype:</p>Steve.milner
                </span>
              </div>
              <div className=" w-full flex flex-col gap-3 text-[15px]">
                <span className="flex gap-1 dark:text-white font-[600]">
                  <p className="text-[#989898] ">Last Name:</p>Tyagi
                </span>
                <span className="flex gap-1 dark:text-white font-[600]">
                  <p className="text-[#989898] ">Nationality:</p>
                  Indian
                </span>
                <span className=" flex gap-1 dark:text-white font-[600]">
                  <p className=" text-[#989898] ">Address:</p>Delhi
                </span>
                <span className="flex gap-1 dark:text-white font-[600]">
                  <p className="text-[#989898] ">Email:</p>
                  Sujal123@gmail.com
                </span>
                <span className="flex gap-1 dark:text-white font-[600]">
                  <p className="text-[#989898] ">Language:</p>English
                  and Hindi
                </span>
              </div>
            </div>
            <motion.div
              whileHover={{
                background: `linear-gradient(to left, #ffb400 100%, transparent 50%)`,
              }}
              className=" dark:text-white text-[#8b8b8b] hover:text-white cursor-pointer text-[1vw] font-bold rounded-full flex justify-around items-center w-[40%] border border-amber-400"
            >
              <div className="uppercase w-[90%]  flex justify-center items-center ">
                Download CV
              </div>
              <div className="text-white h-[58px] text-2xl flex justify-center items-center bg-amber-400 rounded-full p-2 w-[25%] ">
                <FaDownload />
              </div>
            </motion.div>
          </div>
          <div className=" grid grid-cols-2">
            {data.map((item, index) => (
              <AboutBtn head={item.head} body={item.body} key={index} />
            ))}
          </div>
        </div>
      </div>
      <Skill />
      <Experience />
    </div>
  );
};

export default About;
