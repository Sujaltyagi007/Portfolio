import React from 'react'

const AboutCircle = ({prop, per}) => {
  return (
    <div className="flex flex-col gap-5 my-[10%] justify-center items-center m-auto">
      <div className=' h-[9vw] w-[9vw] rounded-full bg-amber-500 flex justify-center items-center'>
        <div className=' h-[7.8vw] text-3xl text-white w-[7.8vw] rounded-full dark:bg-black flex justify-center items-center'>
          {per}
        </div>
      </div>
      <div className=" uppercase text-white font-medium text-lg">{prop}</div>
    </div>
  )
}

export default AboutCircle
