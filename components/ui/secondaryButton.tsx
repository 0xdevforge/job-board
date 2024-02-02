import React from 'react'
interface Props {
    text: string;
}

export default function SecondaryButton({ text }: Props) {
    return (
        <button className=' button text-black px-5 py-3 border-transparent hover:border-[#792899] border-2 rounded-full bg-white font-semibold hover:bg-transparent hover:text-white duration-300 transition-all'>
            {text}
        </button>
    )
}
