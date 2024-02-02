"use client";

import React from 'react'



interface Props {
    text: string;
}


export default function Button({ text }: Props) {
    return (
        <button className=' button text-white px-5 py-3 border-[#792899] border-2 rounded-full hover:bg-white font-semibold hover:text-black duration-300 transition-all text-lg'>
            {text}
        </button>
    )
}
