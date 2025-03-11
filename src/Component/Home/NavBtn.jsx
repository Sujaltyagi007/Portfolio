import React, { useState } from "react";
import Button from "./Button";
import { icons } from "../../Store/Store";

import { LuSun, LuSunMoon } from "react-icons/lu";
const NavBtn = ({ handleButton, button, setActive }) => {  
  const [color,setColor] = useState("Home");
  return (
    <div className=" sticky mr-[2%] h-screen w-[5%] flex flex-col items-center ">
      <div
        onClick={handleButton}
        className="bg-[#eee] dark:bg-[#2b2a2a] my-[5vh] cursor-pointer dark:text-white text-black w-[4vw] flex justify-center items-center text-2xl h-[8vh] rounded-full transition-all duration-600 ease-in-out"
      >
        {button ? <LuSun /> : <LuSunMoon />}
      </div>
      <div className="flex h-[70vh] ">
        <ul className="flex flex-col gap-2 justify-center items-center ">
          {icons.map((item, index) => (
            <Button
              key={index}
              icon={item.icon}
              active={ color === item.name }
              setColor={setColor}
              setActive={setActive}
              prop={item.name}
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavBtn;
