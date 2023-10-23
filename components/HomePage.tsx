import React from 'react'
import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft, faChevronRight, faClock } from '@fortawesome/free-solid-svg-icons'
import { siteConfig } from '@/Config_text/site'

const HomePage = () => {
    return (
        // Home Page
        <div className='flex  md:flex-row flex-col relative -z-10 w-full  p-0 -mt-12'>
            {/* Home Left Side */}
            <div className='relative lg:w-4/6  w-full '>
                <Image src={'/sun.jpg'} width={800} height={300}
                    alt='homeimgae' className='' />
                <div className='absolute sm:left-28 sm:top-28 
                top-4 text-sm left-14 md:left-20  lg:left-28 lg:top-28 md:text-lg
                lg:text-xl font-bold text-white'>
                    <h1 className=''>WORLD NEWS</h1>
                    <br />
                    <hr />
                    <br />
                    <h1 className='lg:text-2xl text-lg font-bold'>Amazing places in America to visit.</h1>
                    <h3 className='md:text-sm text-xs font-light'>For some reason &mdash; this country, this city, this neighborhood, this particular street &ndash; is the
                        <br />place you are living a majority of your life in.
                    </h3>
                    <br />
                    <button className='bg-red-400 lg:p-3 md:p-2 md:px-7 p-1 px-3 font-bold rounded-lg text-sm '>LEARN MORE</button>
                </div>

            </div>
            {/* Home Right Side */}
            <div className='relative  md:w-2/6 top-4  lg:top-4 md:top-16  flex flex-col ml-4'>
                {/* Home Right Side - Heading and Button */}
                <div className='relative  w-full
            lg:right-3 flex justify-between   right-2'>
                    <h1 className='text-2xl font-bold text-gray-800'>More News</h1>
                    <div className='flex sm:gap-14 gap-5 md:mt-3 mr-10 sm:mr-0'>
                        <div className="w-2 text-gray-300">
                            <FontAwesomeIcon icon={faChevronLeft} /></div>
                        <div className='w-2'>
                            <FontAwesomeIcon icon={faChevronRight} />
                        </div>
                    </div>
                </div>
                <br />
                {/* Home Right Side - Body */}
                <div className='bg-gray-500 relative -left-4
                 w-full border border-b-1'></div>
                <br />
                {siteConfig.news.map((a:any)=>(
                      <div className='ml-5 md:m-0' key={a.key}>
                      <h1 className='text-red-400 text-sm font-bold leading-7'>{a.title_red}</h1>
                      <h1 className='font-bold text-sm leading-7'>{a.title_black}</h1>
                      <small className='text-gray-400
                      leading-6
                      line-clamp-2'>
                          {a.text_}
                      </small>
                      <div className='flex'>
                          <div>
                              <FontAwesomeIcon icon={faClock} className='w-3 text-gray-300 mt-1' />
                          </div>
                          &nbsp;
                          <em className='text-gray-300 text-sm inline-flex'>{a.time} ago </em>
                      </div>
                  </div>
                ))}
              
            </div>

        </div >
    )
}

export default HomePage
