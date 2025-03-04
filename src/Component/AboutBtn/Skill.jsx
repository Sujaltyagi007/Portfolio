import React from 'react'
import AboutCircle from './AboutCircle'

const Skill = () => {
    return (
        <div>
            <div className="flex flex-col items-center h-screen mt-[10%]" >
                <h1 className=' uppercase text-3xl font-bold text-white m-5 ' >My Skill</h1>
                <div className=" grid grid-cols-4 px-[5%] w-full  ">
                    <div className=" flex justify-center items-center "><AboutCircle prop={"html"} per={"25%"} />  </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"javascript"} per={"89%"} /> </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"css"} per={"70%"} /> </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"php"} per={"66%"} /> </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"core java"} per={"95%"} /> </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"Springboot"} per={"50%"} /> </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"tailwind"} per={"65%"} /> </div>
                    <div className=" flex justify-center items-center "><AboutCircle prop={"Bootstrap"} per={"45%"} /> </div>
                </div>
            </div>
        </div>
    )
}

export default Skill
