import React from "react";

const HeadBtn = ({ item }) => {
  return (
    <div className=" flex flex-col h-fit mx-4 gap-1 ">
      <p className={`bg-[#dddddd] rounded-full px-2 text-sm w-fit`}>
        {item.first}
        {!item.Second == "" ? `-${item.Second}` : ""}
      </p>
      <h1 className=" uppercase text-lg font-[500] font-stretch-50%">
        <span className=" dark:text-white text-[#676767] ">{item.head.tail}</span>
        {`-${item.head.bottom}`}
      </h1>
      <p className=" w-4/5">{item.para}</p>
    </div>
  );
};

export default HeadBtn;
