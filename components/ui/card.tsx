import Image from 'next/image';
import React from 'react'



import Arrow from './arrow';



import { StaticImageData } from 'next/image';

interface CardProps {
    title: string;
    description: string;
    imageSrc: StaticImageData; 
}




export default function Card({ title, description , imageSrc}: CardProps) {
    return (
        <div className='border border-[#2b2443] px-6 py-6 rounded-md  max-w-[20rem]' >

            <div className="p-2 border mb-4 bg-[#17191f] w-12 h-12 rounded-lg border-[#2b2443]">
            {<Image src={imageSrc} alt="first" className='' />}
            </div>
            <div className="space-y-4">

                <span className='text-2xl font-semibold'>
                    {title}
                </span>
                <p className='text-[#59595b]'>
                    {description}
                </p>

                <Arrow label='Learn More'/>
            </div>


        </div>
    )
}
