import React from 'react';
import { FaArrowRight } from "react-icons/fa6";

import first from "@/public/arcs/first.svg";
import second from "@/public/arcs/second.svg";
import third from "@/public/arcs/third.svg";
import Image from 'next/image';

import logo from "@/public/icons/logo.svg"
import slack from "@/public/icons/second.svg"
import white from "@/public/icons/third.svg"
import fourth from "@/public/icons/fourth.svg"
import fifth from "@/public/icons/fifth.svg"
import sixth from "@/public/icons/sixth.svg"
import seventh from "@/public/icons/seventh.svg"




export default function Header() {
    return (
        <div className="z-10">


            <div className="h-0">
                <Image src={first} alt="first ellipse" className='relative justify-center w-full px-44 bottom-24' />
            </div>

            <div className="h-0">
                <Image src={second} alt="second ellipse" className='relative justify-center w-full px-12 bottom-8' />
            </div>

            <div className="h-0">
                <Image src={third} alt="third ellipse" className='relative top-44 py-20 ' />
            </div>


            <div className="h-0 flex justify-between px-12 py-16 relative">
                <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={logo} alt="logo" className='relative  ' />
                </div>
                <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={slack} alt="logo" className='relative  ' />
                </div>
            </div>


            <div className="h-0 flex justify-between px-44 py-32 relative">
                <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={white} alt="logo" className='relative  ' />
                </div>
                <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={fourth} alt="logo" className='relative  ' />
                </div>
            </div>

            <div className="h-0 flex justify-between px-60 py-28 relative">
                <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={fifth} alt="logo" className='relative  ' />
                </div>
                <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={sixth} alt="logo" className='relative  ' />
                </div>
            </div>

            <div className="flex items-center justify-center h-0">
            <div className="p-4 border-[#4e4c6c] border rounded-md bg-[#17191f] w-16 h-16">
                    <Image src={seventh} alt="logo" className='relative  bottom-2' />
                </div></div>        

            <header className=' flex w-full items-center justify-center z-30 -translate-y-[500px]'>
                <div className=" ">
                    <div className="border text-lg py-2 px-6 rounded-full lg:mx-72 flex gap-2 text-gray-400 border-gray-400">
                        <span className='text-white'>The best job seekers</span> | <span className='bg-clip-text flex gap-2 items-center text-transparent bg-gradient-to-b from-[#8550ec] to-[#924ee9] group hover:text-white transition-colors duration-300 ease-in-out cursor-pointer'>
                            Explore <FaArrowRight className='ml-2 transition-transform duration-300 ease-in-out group-hover:translate-x-2' color='#8550ec' />
                        </span>
                    </div>
                    <div className="text-center">
                        <h1 className='lg:text-6xl mt-12'>We know the way to success.</h1>
                        <h2 className='lg:text-6xl text-[#848484]'>
                            Find and become a professional.
                        </h2>
                        <p className='my-6'>A successful business needs a qualified team of people</p>

                        <div className="flex items-center text-white overflow-hidden shadow-lg  py-2 mx-24 border-[#30274c] border  rounded-full bg-[#1e1932] outline-none">
                            <i className="fas fa-search px-4"></i>
                            <input
                                type="text"
                                className=" bg-transparent flex-1 outline-none "
                            />
                            <button className="button text-black px-4 py-2 border-transparent hover:border-[#792899] border-2 rounded-full bg-white font-semibold hover:bg-transparent hover:text-white duration-300 transition-all mr-3">
                                Find Jobs <i className="fas fa-arrow-right ml-2"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
