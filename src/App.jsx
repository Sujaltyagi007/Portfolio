import React,{useState} from 'react'
import Home from "./Pages/Home"
import { LuSun, LuSunMoon } from 'react-icons/lu'

const App = () => {
  const [mode,setMode] = useState(false);
  const handleMode = () =>{
    setMode(!mode);
    console.log(mode);
  }
  return (
    <div className={`w-full h-full flex flex-col ${!mode && "dark"}`}>
      <div className="w-0 h-0 sticky z-20 left-[92.5%] top-[5%] ">
        <div onClick={()=>handleMode()} className="bg-black dark:bg-white dark:text-black text-white w-[4.3vw] flex justify-center items-center text-2xl h-[9vh] rounded-full">
          {!mode?<LuSun />:<LuSunMoon />}
        </div>
      </div>
      <Home />
    </div>
  )
}

export default App
