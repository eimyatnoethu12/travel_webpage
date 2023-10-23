import React from 'react'
import { faChevronLeft, faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { siteConfig } from '@/Config_text/site'

const Trending = () => {
    return (
        <div className='mt-10 md:mt-16  md:mx-4'>
            <div className='flex justify-between w-full relative sm:mt-0 mt-2'>
                <div className="font-bold text-gray-900">TRENDING</div>
                <div className='flex gap-14 md:gap-7 mt-3'>
                    <div className="w-2 text-gray-300">
                        <FontAwesomeIcon icon={faChevronLeft} /></div>
                    <div className='w-2'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <br />
            <div className='w-full relative md:flex-row   flex-wrap flex-col flex justify-center gap-7 md:gap-3'>
            {siteConfig.trending.map((a:any)=>(
                <div className='shadow ' key={a.key}>
                <Image alt='image'
                    className='rounded-t-xl'
                    width={320} height={100} src={a.srcImage} />
                <br />
                <h1 className='ml-7 font-semibold'>{a.title}</h1>
                <small className='text-gray-400
                leading-6 w-56 mx-7
                line-clamp-2'>
                    {a.text_}
                </small>
                <div className='flex mx-7'>
                    <div>
                        <FontAwesomeIcon icon={faClock} className='w-3 text-gray-400 mt-1' />
                    </div> &nbsp;
                    <em className='text-gray-300 text-sm inline-flex'>{a.time} ago </em>
                </div>
            </div>
            ))}
            </div >
        </div>

    )
}

export default Trending
