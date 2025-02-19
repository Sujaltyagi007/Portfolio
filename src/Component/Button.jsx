import React from 'react'

const Button = ({icon}) => {
  return (
    <div className=' my-[25%] w-[4vw] text-black dark:text-white h-[8.5vh] flex justify-center text-xl items-center rounded-full  bg-yellow-500'> 
      {icon}
    </div>
  )
}

export default Button
