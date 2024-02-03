import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'


interface ArrowProps {
    label: string;
}



export default function Arrow({ label }: ArrowProps) {
    return (
        <div>
            <span className='bg-clip-text flex gap-2 items-center text-transparent bg-gradient-to-b from-[#8550ec] to-[#924ee9] group hover:text-white transition-colors duration-300 ease-in-out cursor-pointer'>
                {label} <FaArrowRight className='ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2' color='#8550ec' />
            </span>
        </div>
    )
}
