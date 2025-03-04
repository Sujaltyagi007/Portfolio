import React from 'react'

const SqurareBtn = ({ head, body }) => {
    return (
        <div className="flex justify-center items-center ">
            <div className="uppercase border border-[#8f8f8f] w-[90%] h-[80%] rounded flex flex-col justify-center px-[20%]  ">
                <p className=' text-5xl font-extrabold dark:text-amber-400 flex '>{head}<span className='text-2xl ' >+</span></p>
                <div className="">
                    {/* <p className='border border-white'></p> */}
                    <p>{body}</p>
                </div>
            </div>
        </div>
    )
}

export default SqurareBtn
