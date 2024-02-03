"use client";

import React from 'react'
import logo from "@/public/Navbar/logo.svg"
import cart from "@/public/Navbar/cart.svg"

import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/Button';
import SecondaryButton from './ui/secondaryButton';
export default function Navbar() {

    const links = ['Demos', 'About', 'Jobs', 'Category', 'News', 'All Pages'];
    return (
        <nav className='bg-[#0d0e11] flex items-start px-12 pt-8  pb-4 justify-between w-full text-lg '>
            <Image src={logo} alt="logo" className='mt-1 w-40' />
            <ul className='flex items-center  gap-12  text-white'>
                {links.map((link, index) => (
                    <li className='link  pb-2 hover:text-[#a549e2]' key={index}>
                        <Link href="#">{link}</Link>
                    </li>
                ))}
            </ul>

            <div className="flex gap-3 items-center -mt-2">
                <div className="relative text-white mt-1 cursor-pointer pr-12">
                    <Image src={cart} alt="cart" className='w-4 h-6' />
                    <span className="absolute  left-5 text-sm bottom-5 flex w-6 border-[#792899] border-2 rounded-full items-center justify-center h-6 ">0</span>
                </div>
                <Button text='Job Post' />
                <SecondaryButton text='CV Post' />
            </div>
        </nav>
    )
}
