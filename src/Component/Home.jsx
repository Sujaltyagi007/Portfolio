import React from 'react'
import Logo from "../assets/Personal-Logo1.svg"

const Home = () => {
  return (
    <div className='w-full h-screen overflow-hidden'>
      <div className=" absolute w-full z-10 my-[2%] mx-[4%] ">
        <div style={{background:`url(${Logo})`,backgroundPosition:`center`,backgroundSize:`cover`}} className="w-16 h-16 bg-center bg-cover ">
          {/* <img src={Logo} alt="" /> */}
        </div>
        <div className="w-full h-full border border-black">
          hello sfghsfjghjdfhgudfhg
        </div>
      </div>
      <div className=" -rotate-15 relative bg-yellow-500 -top-6 -left-14 w-[25%] h-[150%]">
        <div className=""></div>
        <div className="">
          <img src="" alt="" />
        </div>
      </div>
    </div>
  )
}

export default Home
