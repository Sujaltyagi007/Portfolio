import React from 'react'
import { motion } from "motion/react"

const Button = ({icon,active}) => {
  return (
    <motion.div whileHover={{width:`8.5vw`}} className={`my-2 w-[3.5vw]  origin-left dark:text-white h-[7.2vh] flex justify-center text-xl cursor-pointer items-center rounded-full  ${active && "bg-yellow-500 dark:bg-yellow-500 text-white"} dark:bg-[#2b2a2a] bg-[#eeeeee] `} > 
      {icon}
    </motion.div>
  )
}

export default Button
