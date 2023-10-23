import React from 'react'
import { faChevronLeft, faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import { siteConfig} from '@/Config_text/site'
const HappeningPage = () => {
    return (
        <>
            <div className='flex justify-between w-full relativ m-0'>
                <div className="font-bold text-gray ml-3">HAPPENING NOW</div>
                <div className='flex gap-14 mt-1 mr-3'>
                    <div className="w-2 text-gray-300">
                        <FontAwesomeIcon icon={faChevronLeft} /></div>
                    <div className='w-2'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
            <br />
            <div className='w-full relative  flex justify-center gap-2'>

                <div className='grid grid-cols-3 py-25'>
                <div className='col-span-2 '>
                    {siteConfig.happen_big.map((a:any)=>(<>
                        <div className='relative' key={a.key}>
                            <Image alt='image'
                                className='rounded-xl'
                                width={660} height={100} src={a.srcImage_} />
                            <div className='absolute sm:top-10 sm:left-10 top-8 left-8'>
                                <h1 className='text-white md:text-xl'>{a.title_}</h1>
                            </div>
                            <div className='absolute sm:bottom-10 sm:left-6 bottom-1'>
                                <h1 className='ml-7 font-semibold text-white md:text-2xl '>{a.textTitle}</h1>
                                <small className='text-white
                    leading-6 mx-7
                    line-clamp-2'>
                                    {a.text_}
                                </small>
                                <div className='flex mx-7'>
                                    <div>
                                        <FontAwesomeIcon icon={faClock} className='w-3 text-gray-400 mt-1' />
                                    </div> &nbsp;
                                    <em className='text-gray-300 text-sm inline-flex'>{a.time} min ago </em>
                                </div>
                            </div>
                        </div>
                        <br/>
                    </>))}

                    </div>
                    <div className='col-span-1'>
                        {siteConfig.happen_small.map((a:any)=>(
                         <div className='' key={a.key}>
                         <Image alt='image'
                             className='rounded-xl '
                             width={350} height={100} src={a.srcImage} />
                         <h1 className='font-bold p-2 md:text-lg text-xs'>{a.Title}</h1>
                         <div className='flex sm:mx-7 m-0'>
                             <div>
                                 <FontAwesomeIcon icon={faClock} className='w-3 text-gray-400 sm:mt-1 mb-2 little sm:text-lg' />
                             </div>  &nbsp;
                            <small className='text-gray-300 sm:text-sm italic little 
                             inline-flex'>{a.time} ago by<small className='underline'>{a.author}</small> </small>
                         </div>
                     </div>
                        ))}
                    </div>
                </div>

            </div >
        </>

    )
}

export default HappeningPage
