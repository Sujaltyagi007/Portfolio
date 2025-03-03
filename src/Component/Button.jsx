import React from 'react'
const Button = ({ icon, active }) => {
  return (
    <div className={`my-2 w-[3.5vw] hover:w-[8.5vw] transition-all duration-300 origin-left dark:text-white h-[7vh] flex justify-center text-xl cursor-pointer items-center rounded-full  ${active && "bg-yellow-500 dark:bg-yellow-500 text-white"} dark:bg-[#2b2a2a] bg-[#eeeeee] `} >
      {icon}
    </div>
  )
}
export default Button
