import React from 'react'

import first from "@/public/second/first.svg";
import second from "@/public/second/second.svg";
import third from "@/public/second/third.svg";
import fourth from "@/public/second/fourth.svg";
import five from "@/public/second/fifth.svg";
import six from "@/public/second/sixth.svg";
import seventh from "@/public/second/7th.svg";
import eight from "@/public/second/8th.svg";
import nine from "@/public/second/9th.svg";
import ten from "@/public/second/10th.svg";
import eleven from "@/public/second/11th.svg";
import Image from 'next/image';
import SecondaryButton from './ui/secondaryButton';



import region from "@/public/second/region.svg";
import remote from "@/public/second/remote.svg";
import apply from "@/public/second/apply.svg";








export default function Second() {
    const jobs = [
        { title: 'Graphic Designer', location: 'Las Vegas', salary: '$65k' },
        { title: 'Brand Manager', location: 'Los Angeles', salary: '$65k' },
        { title: 'Social Media Manager', location: 'Remote', salary: '$45k' },
        { title: 'Graphic Designer', location: 'Las Vegas', salary: '$65k' },
        { title: 'Brand Manager', location: 'Los Angeles', salary: '$65k' },
        { title: 'Social Media Manager', location: 'Remote', salary: '$45k' },
        { title: 'Graphic Designer', location: 'Las Vegas', salary: '$65k' },
        { title: 'Brand Manager', location: 'Los Angeles', salary: '$65k' },
        { title: 'Social Media Manager', location: 'Remote', salary: '$45k' },
        { title: 'Graphic Designer', location: 'Las Vegas', salary: '$65k' },
        { title: 'Brand Manager', location: 'Los Angeles', salary: '$65k' },
        { title: 'Social Media Manager', location: 'Remote', salary: '$45k' },
    ];



    return (
        <div className="">
            <div className="relative z-10">
                <div className="h-0 ">
                    <Image src={first} alt="" className='-translate-y-72 ' />
                </div>
                <div className="h-0 ">
                    <Image src={second} alt="" className='-translate-y-[310px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={third} alt="" className='-translate-y-[240px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={fourth} alt="" className='-translate-y-[120px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={five} alt="" className='-translate-y-[50px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={six} alt="" className='translate-y-[10px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={seventh} alt="" className='translate-y-[30px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={eight} alt="" className='translate-y-[50px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={nine} alt="" className='translate-y-[60px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={ten} alt="" className='translate-y-[90px] ' />
                </div>
                <div className="h-0 ">
                    <Image src={eleven} alt="" className='translate-y-[135px] ' />
                </div>

            </div>


            <div className=' flex relative z-10  justify-between w-full -translate-y-[190px] px-32 '>
                <div className="w-1/2 space-y-4 ">
                    <span className='uppercase bg-clip-text flex gap-2 items-center text-transparent bg-gradient-to-b from-[#8550ec] to-[#924ee9] font-semibold'>
                        about jobboard
                    </span>

                    <div className="text-5xl">
                        <h3 className=''>
                            One step to your
                        </h3>
                        <h4 className='text-[#848484]'>
                            future starts here
                        </h4>
                    </div>

                    <p className='pr-36 text-lg'  >
                        Receive a customized salary approximation based on your profile. Access reviews for more than 600,000 companies worldwide.
                    </p>
                    <div className="py-8">
                        <SecondaryButton text='Learn More' />
                    </div>

                </div>

                <div className='border w-1/2 max-w-lg  text-lg border-[#3e3067] rounded-md'>

                    <div className="pt-4 px-4 ">
                        <span className='flex justify-between items-center'>
                            <span className="text-[#64616d]">Jobs</span>
                            <span>All Jobs</span>
                        </span>
                    </div>
                    <div className="border-b py-2 border-[#64616d] mx-4 ">

                    </div>

                    <div className="marquee max-h-72 px-4 translate-y-16 -mt-10">
                        <div className="marquee-content ">
                            {jobs.map((job, index) => (
                                <div key={index} className="flex border-2 border-[#3e3067]  items-center justify-between hover:border-[#6b3493] bg-[#13151a] transition-all duration-300 p-4 rounded mb-4">
                                    <div>
                                        <h2 className="text-lg bg-clip-text flex gap-2 items-center text-white hover:text-transparent bg-gradient-to-b from-[#8550ec] to-[#924ee9] cursor-pointer">{job.title}</h2>
                                        <div className="flex items-center gap-4  mt-2">
                                            <div className="flex items-center gap-2">
                                                <Image src={region} alt="" />
                                                <span>{job.location}</span>
                                            </div>
                                            <div className='flex gap-2 items-center'>
                                                <Image src={remote} alt="" />
                                                <span>Remote</span>
                                            </div>

                                        </div>
                                    </div>

                                    <div className="flex flex-col space-y-2">
                                        <span className='flex gap-2 items-center'>
                                            <Image src={apply} alt="" />
                                            <span>{job.salary}</span>
                                        </span>

                                        <button className=' button text-black px-4 py-1 text-sm border-transparent hover:border-[#792899] border-2 rounded-full bg-white font-semibold hover:bg-transparent hover:text-white duration-300 transition-all'>
                                            Apply
                                        </button>



                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
