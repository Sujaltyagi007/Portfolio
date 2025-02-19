import React, { useState } from 'react'
import Logo from "../assets/Personal-Logo1.svg"
import image from "../assets/dark.jpg"
import Button from '../Component/Button'
import { FaHome, FaUser } from "react-icons/fa";
import { PiBagSimpleFill, PiChatCircleFill } from 'react-icons/pi';
import { FaEnvelopeOpen } from 'react-icons/fa6';
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';




const Home = () => {

  return (
    <div className='w-full h-screen overflow-hidden dark:bg-gray-900 bg-amber-50  '>
      <div className=" absolute w-full z-10 flex justify-center items-center -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] ">
        <div className=" w-full h-[90vh] px-[3%] dark:border-white flex flex-row  items-center ">
          <div className={`w-[32vw] h-[40vw]  rounded-4xl overflow-hidden shadow-[0_10px_20px_rgba(0,_0,_0,_0.9)] `}>
            <img src={image} alt="" className='' />
          </div>
          <div className="w-[50%] border  border-black flex flex-col justify-center items-center">
            <div className="text-[4vw] w-full flex leading-[8vh] my-[4%]  font-bold uppercase">
              <div className="bg-[#ffb400] h-2 w-10 translate-y-[4vh] mr-[2%] rounded-2xl "></div>
              <div className="border border-black w-full">
                <h1 className='text-[#ffb400] w-full '>I'm steve milner.</h1>
                <h2 className={`dark:text-white text-black`}>web designer</h2>
              </div>
            </div>
            <div className="mx-[8%] dark:text-amber-500 text-black">
              I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </div>
          </div>
          <div className=" h-full w-[20%] flex flex-col items-end justify-center ">
            <div className=""></div>
            <ul>
              <Button icon={<FaHome />} />
              <Button icon={<FaUser />} />
              <Button icon={<PiBagSimpleFill />} />
              <Button icon={<FaEnvelopeOpen />} />
              <Button icon={<BiSolidMessageRoundedDetail />} />
            </ul>
          </div>
        </div>
      </div>
      <div className=" -rotate-15 relative bg-yellow-500 -top-6 -left-66 w-[40%] h-[150%]">
        <div className=""></div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
