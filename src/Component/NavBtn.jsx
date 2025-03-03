import React, { useState } from 'react'
import Button from './Button'
import { FaHome, FaUser, FaEnvelopeOpen } from 'react-icons/fa'
import { PiBagSimpleFill } from 'react-icons/pi'
import { BiSolidMessageRoundedDetail } from 'react-icons/bi'
import { LuSun, LuSunMoon } from 'react-icons/lu'
const NavBtn = () => {
    const [icon, setIcon] = useState(0);
    const handleIcon = () => {
        setIcon(!icon);
    }
    return (
        <div className=" mr-[2%] h-screen w-[5%] flex flex-col items-center ">
            <div onClick={handleIcon}
                className="bg-[#eee] dark:bg-[#2b2a2a] my-[5vh] cursor-pointer dark:text-white text-black w-[4vw] flex justify-center items-center text-2xl h-[8.5vh] rounded-full transition-all duration-600 ease-in-out" >
                {icon ? <LuSunMoon /> : <LuSun />}
            </div>
            <div className="flex h-[70vh] ">
                <ul className='flex flex-col gap-2 justify-center items-center '>
                    <Button icon={<FaHome />} active={true} />
                    <Button icon={<FaUser />} active={false} />
                    <Button icon={<PiBagSimpleFill />} active={false} />
                    <Button icon={<FaEnvelopeOpen />} active={false} />
                    <Button icon={<BiSolidMessageRoundedDetail />} active={false} />
                </ul>
            </div>
        </div>
    )
}

export default NavBtn

