import React from 'react'

const About = () => {
    return (
        <div className='w-full h-screen overflow-hidden text-[#666666] dark:bg-black bg-amber-50  '>
            <div className={`w-full  font-extrabold text-4xl `}>
                <h1 className='w-full flex justify-center top-[50%] translate-y-[50px] tracking-wide text-[17vh] uppercase opacity-30 '>Resume</h1>
                <div className="uppercase flex text-6xl justify-center -translate-y-[60%] gap-3 ">
                    <h1 className=' text-white'>About</h1>
                    <h1 className='text-[#ffb400]'>Me</h1>
                </div>
            </div>
            <div className="">
                <div className="border border-white items-center w-1/2">
                    <h1 className=' uppercase font-extrabold text-3xl my-[2%]'>Personal Info</h1>
                    <div className="flex flex-row justify-end dark:text-amber-50 ">
                        <div className=" w-full border border-white flex flex-col gap-2 text-[15px] ">
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>First Name:</p>Steve</span>
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Age:</p>45</span>
                            <span className='text-green-600 flex gap-1'><p className='text-amber-50'>Freelance:</p>Avaliable</span>
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Phone:</p>+91-123456789</span>
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Skype:</p>Steve.milner</span>
                        </div>
                        <div className=" w-full border border-white flex flex-col gap-2 text-[15px]">
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Last Name:</p>Steve</span>
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Nationality:</p>Indian</span>
                            <span className=' flex gap-1'><p className='text-amber-50'>Address:</p>Delhi</span>
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Email:</p>DemoMail@yahoo.com</span>
                            <span className='flex gap-1'><p className='text-[#cbcbcb]'>Language:</p>French and Bhojpuri</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
