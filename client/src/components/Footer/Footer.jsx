import React from 'react'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'

const Footer = () => {
    return (
        <div className='text-black bg-[#f8f5ff] pt-20 md:px-12 px-4 '>


            <div className=" flex md:flex-row flex-col md:space-y-0 space-y-5 justify-between">
                <div>
                </div>
                <p >Copyright 2023 | All Rights Reserved</p>
                <div className='flex justify-between  md:w-[10%] w-[40%] md:space-x-5 pb-10'>
                    <BsFacebook className="text-[#022279]   text-2xl md:text-4xl" />
                    <BsTwitter className="text-[#022279]    text-2xl md:text-4xl" />
                    <BsInstagram className="text-[#022279]  text-2xl md:text-4xl" />
                </div>
            </div>
        </div>
    )
}

export default Footer