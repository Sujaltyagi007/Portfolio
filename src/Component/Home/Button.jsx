import React from "react";
const Button = ({ icon, active, setActive, prop, setColor }) => {
  const handleClick = () => {
    setActive(prop);
    setColor(prop);
  };
  return (
    <div
      onClick={handleClick}
      className={`my-2 w-[3.5vw] transition-all duration-300 origin-left dark:text-white h-[8vh] flex justify-center text-xl cursor-pointer items-center rounded-full  ${
        active && "bg-yellow-500 dark:bg-yellow-500 text-white"
      } dark:bg-[#2b2a2a] bg-[#eeeeee] `}
    >
      {icon}
    </div>
  );
};
export default Button;
