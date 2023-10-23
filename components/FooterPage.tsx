
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane, faEarthAsia } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faInstagram, faFacebookF } from '@fortawesome/free-brands-svg-icons'




const FooterPage = () => {
    return (
        <div className='flex justify-center p-16 max-sm:p-0 flex-col md:flex-row relative
         bg-slate-500  gap-16 max-sm:gap-10'>
            <div className='flex justify-start max-sm:justify-center gap-10 max-sm:gap-5 relative'>
                <div className="text-white font-bold max-sm:text-sm">LOGO</div>
                <div className="flex flex-col">
                    <div className="text-gray-400 font-bold  max-sm:text-sm">Home</div>
                    <div className="text-gray-400  font-bold max-sm:text-sm">Discovery</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Photos</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Contact</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-400 font-bold max-sm:text-sm">About</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Help</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Terms</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Guidlines</div>
                </div>
                <div className="flex flex-col">
                    <div className="text-gray-400 font-bold max-sm:text-sm">Testimonials</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Advertise</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Integrations</div>
                    <div className="text-gray-400 font-bold max-sm:text-sm">Careers</div>
                </div>
            </div>
            <div className='flex gap-16 max-sm:gap-1 max-sm:flex-col md:flex-col lg:flex-row  items-center max-sm:pb-2'>
                <div className="">
                    <div className='relative w-full flex p-2'>
                        {/* <Input placeholder='Email' className=' w-full p-5 border rounded-sm outline-none bg-transparent' /> */}
                        <input
                            placeholder="Email"
                            style={{ background: "transparent" }}
                            className="w-full p-2 border border-gray-200 outline-none rounded-md"
                        />

                        <FontAwesomeIcon icon={faPaperPlane} className='w-4 absolute right-5 top-5 text-gray-300' />
                    </div>

                    <small className='text-gray-400'>Stay in touch with us for the freshest products!</small>

                </div>
                <div className="flex gap-6">
                    <div className="w-4 text-gray-300">
                        <FontAwesomeIcon icon={faInstagram} />
                    </div>
                    <div className="w-4 text-gray-300">
                        <FontAwesomeIcon icon={faTwitter} />
                    </div>
                    <div className="w-3 text-gray-300">
                        <FontAwesomeIcon icon={faFacebookF} />
                    </div>
                    <div className="w-4 text-gray-300">
                        <FontAwesomeIcon icon={faEarthAsia} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterPage
