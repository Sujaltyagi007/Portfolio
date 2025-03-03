import React, { useState } from 'react'
import { LuSun, LuSunMoon } from 'react-icons/lu'
import NavBtn from './Component/NavBtn';
import Home from './Pages/Home'

const App = () => {
  // const [mode, setMode] = useState(false);
  // const handleMode = () => {
  //   setMode(!mode);
  //   console.log(mode);
  // }
  return (
    <div className="w-full h-full relative">
      <div className="absolute top-0 right-0 z-20">
        <NavBtn />
      </div>
      <div className="-z-0"> 
        <Home />
      </div>
    </div>

  )
}

export default App
