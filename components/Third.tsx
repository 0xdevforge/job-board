import React from 'react'
import Card from './ui/card'



import first from "@/public/cards/card1.svg"

import second from "@/public/cards/card2.svg"

import third from "@/public/cards/card3.svg"




export default function Third() {
  return (
    <div className='min-h-screen flex flex-col -translate-y-44 items-start justify-center w-full mb-36'>
      <div className="space-y-4 w-full text-center ">
        <span className='bg-clip-text   text-transparent bg-gradient-to-b from-[#8550ec] to-[#924ee9]'>WHY JOBBOARD</span>

        <h5 className='text-5xl'>
          New way to get a job
        </h5>

        <p>
          Upon gaining entry to the JobBoard platform, your initial task involves inputting <br /> your initial team positions or roles.
        </p>
      </div>

      <div className="gap-8 flex items-center w-full px-56 justify-center my-16">
        <Card description='Say goodbye to the traditional job search process and step into the future of employment opportunities.' title='Future of Job Hosting' imageSrc={first}/>
        <Card description='Save time and effort by accessing a wide range of opportunities in various industries and career stages.' title='Simplify research' imageSrc={second}/>
        <Card description='Craft a detailed profile that effectively showcases your unique skills, past experiences, and notable accomplishmen.' title='Be unique' imageSrc={third}/>
      </div>
    </div>
  )
}
