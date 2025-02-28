import React, { useState } from 'react'
import Home from "./Pages/Home"
import { LuSun, LuSunMoon } from 'react-icons/lu'
import About from './Pages/About';

const App = () => {
  const [mode, setMode] = useState(false);
  const handleMode = () => {
    setMode(!mode);
    console.log(mode);
  }
  return (
    <div className={`w-full h-full flex flex-col ${!mode && "dark"}`}>
      <div className="w-0 h-0 sticky z-20 left-[93.2%] top-[5%] ">
        <div onClick={() => handleMode()}
          className="bg-[#eee] dark:bg-[#2b2a2a] dark:text-white text-black w-[4vw] flex justify-center items-center text-2xl h-[8.5vh] rounded-full transition-all duration-600 ease-in-out" >
          {!mode ? <LuSun /> : <LuSunMoon />}
        </div>
      </div>
      <About />
    </div>
  )
}

export default App
