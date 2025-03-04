import React from 'react'
import { motion } from 'framer-motion'
import { FaDownload } from "react-icons/fa6";
import AboutBtn from "../Component/AboutBtn/SqurareBtn"
import Skill from '../Component/AboutBtn/Skill';

const About = () => {
    return (
        <div className=' w-full  overflow-auto  text-[#8f8f8f] dark:bg-black bg-amber-50 '>
            <div className={`w-full  font-extrabold text-4xl `}>
                <h1 className='w-full flex justify-center top-[50%] translate-y-[50px] tracking-wide text-[17vh] uppercase opacity-20 '>Resume</h1>
                <div className="uppercase flex text-6xl justify-center -translate-y-[60%] gap-3 ">
                    <h1 className=' text-white'>About</h1>
                    <h1 className='text-[#ffb400]'>Me</h1>
                </div>
            </div>
            <div className="my-[3%]">
                <div className=" mx-[7%] gap-[2%] grid grid-cols-2">
                    <div className="">
                        <h1 className=' uppercase font-bold text-[2vw] dark:text-white text-black my-[2%]'>Personal Infos</h1>
                        <div className=" flex items-center justify-end w-full my-[5%]">
                            <div className=" flex flex-col gap-5 text-[15px] w-full ">
                                <span className='flex gap-1'><p className='text-[#cbcbcb]'>First Name:</p>Steve</span>
                                <span className='flex gap-1'><p className='text-[#cbcbcb]'>Age:</p>45</span>
                                <span className='text-green-600 flex gap-1'><p className='text-amber-50'>Freelance:</p>Avaliable</span>
                                <span className='flex gap-1'><p className='text-[#cbcbcb]'>Phone:</p>+91-123456789</span>
                                <span className='flex gap-1'><p className='text-[#cbcbcb]'>Skype:</p>Steve.milner</span>
                            </div>
                            <div className=" w-full flex flex-col gap-3 text-[15px]">
                                <span className='flex gap-1 dark:text-white font-[600]'><p className='text-[#cbcbcb] font-normal'>Last Name:</p>Steve</span>
                                <span className='flex gap-1 dark:text-white font-[600]'><p className='text-[#cbcbcb] font-normal'>Nationality:</p>Indian</span>
                                <span className=' flex gap-1 dark:text-white font-[600]'><p className='text-amber-50 font-normal'>Address:</p>Delhi</span>
                                <span className='flex gap-1 dark:text-white font-[600]'><p className='text-[#cbcbcb] font-normal'>Email:</p>DemoMail@yahoo.com</span>
                                <span className='flex gap-1 dark:text-white font-[600]'><p className='text-[#cbcbcb] font-normal'>Language:</p>French and Bhojpuri</span>
                            </div>
                        </div>
                        <motion.div whileHover={{ background: `linear-gradient(to left, #ffb400 100%, transparent 50%)`, }} className=" dark:text-white text-[#8b8b8b] hover:text-white cursor-pointer text-[1vw] font-bold rounded-full flex justify-around items-center w-[40%] border border-amber-400">
                            <div className="uppercase w-[90%]  flex justify-center items-center ">
                                Download CV
                            </div>
                            <div className="text-white h-[58px] text-2xl flex justify-center items-center bg-amber-400 rounded-full p-2 w-[25%] "><FaDownload /></div>
                        </motion.div>
                    </div>
                    <div className=" grid grid-cols-2">
                        <AboutBtn head={"12"} body={"Years of Experience"} />
                        <AboutBtn head={"97"} body={"Completed Projects"} />
                        <AboutBtn head={"81"} body={"Happy Customers"} />
                        <AboutBtn head={"53"} body={"Awards Wons"} />
                    </div>
                </div>
            </div>
            <Skill />
        </div>
    )
}

export default About
