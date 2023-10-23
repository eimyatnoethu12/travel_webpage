'use client'
import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import { useState } from 'react'

const NavbarPage = () => {
    const [isVisible, setIsVisible] = useState(false);
    const toggleVisibility = () => {
        setIsVisible(!isVisible);
    };
    return (
        <>
            <div className='md:flex justify-between fixed w-full bg-slate-100 p-4
            hidden'>
                <div className='font-extrabold text-red-400 ml-5'>LOGO</div>
                <div className='flex justify-start gap-6 mr-3'>
                    <div className='text-sm font-bold '>HOME</div>
                    <div className='text-sm  font-semibold text-gray-400'>DISCOVERY</div>
                    <div className='text-sm font-bold text-gray-400'>PHOTOS</div>
                    <div className='text-sm font-bold text-gray-400'>CONTACT</div>

                    <Image alt="image" className='circle -mt-2 '
                        width={50} height={40} src="/profile.jpg" />

                </div>

            </div>
            <div className='flex justify-between fixed w-full bg-slate-100 p-4
            md:hidden'>

                <div className='font-extrabold text-red-400 ml-5'>LOGO</div>
                <div className='flex flex-col absolute right-0 items-end
                bg-gray-100 px-5 pb-6 text center  
                gap-6 '>
                    <button onClick={toggleVisibility} className='h-3'>
                        <FontAwesomeIcon icon={faBars} className=' text-gray-400' />
                    </button>
                    {isVisible && <>
                        <div className='text-sm font-bold '>HOME</div>
                        <div className='text-sm  font-semibold text-gray-400'>DISCOVERY</div>
                        <div className='text-sm font-bold text-gray-400'>PHOTOS</div>
                        <div className='text-sm font-bold text-gray-400'>CONTACT</div>
                        <Image alt="image" className='circle -mt-2 '
                            width={50} height={40} src="/profile.jpg" />
                    </>}




                </div>

            </div>



        </>

    )
}

export default NavbarPage
