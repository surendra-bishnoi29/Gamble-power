import React from 'react'
import StarIcon from '../../Icons/StarIcon'
import ArrowRight from '../../Icons/ArrowRight'
import InfoCards from './InfoCards'

function About() {
    return (
       
        <div className=' px-12 py-20  bg-white'>
            <div className=' w-full flex items-center'>

                <div className='w-2/5 p-6 flex flex-col text-left'>
                    <div className=' px-2 py-1 bg-lime-100 w-fit text-lg rounded-full mb-6'>ABOUT US</div>
                    <div className=' text-[40px] font-[700] mb-3'>The Gamble Power</div>
                    <div className=' max-w-[490px] text-lg mb-5 '>
                        Gamble Power is a leading provider of solar energy solutions, dedicated to empowering individuals and businesses with clean, renewable energy. We believe in the power of solar energy to transform lives and communities.
                    </div>
                    <div className=' flex gap-5 justify-center items-center w-fit mb-8'>
                        <div className=' text-lg flex justify-center items-center w-fit gap-4 border-r-2 pr-5 border-black'>
                            <StarIcon className='size-6' />
                            <div>
                                Excellent 4.8 / 5
                            </div>
                        </div>
                        <div className=' flex justify-center items-center gap-4'>

                            <div className='w-fit h-fit'>
                                <div className="flex justify-center -space-x-4">
                                    <img
                                        className="w-9 h-9 border-2 border-white rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="Client 1"
                                    />
                                    <img
                                        className="w-9 h-9 border-2 border-white rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Client 2"
                                    />
                                    <img
                                        className="w-9 h-9 border-2 border-white rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                        alt="Client 3"
                                    />
                                    <div className="flex items-center justify-center w-9 h-9 text-sm font-medium text-white bg-gray-700 border-2 border-white rounded-full">
                                        80+
                                    </div>
                                </div>
                            </div>
                            <div className=' text-lg'>
                                Reviews 130+
                            </div>
                        </div>
                    </div>
                    <div>
                        <div>
                            <button className="flex items-center justify-center gap-2 bg-lime-300 text-black font-medium py-2 px-6 rounded-full duration-300  hover:bg-lime-400 transition-all">
                                <ArrowRight />
                                <span className="text-lg">Learn More</span>
                            </button>
                        </div>
                    </div>

                </div>

                <div className='w-3/5 flex gap-5  justify-center'>
                        <div>
                        <img className=' object-cover w-[418px] h-[500px] rounded-2xl ' src='about-stand.jpg'/>
                        </div>
                        <div className=' -mt-10 flex flex-col gap-10'> 
                            <div>
                            <InfoCards data='87%' type='Success' description='Green Power is dedicated to empowering individuals and businesses with clean, renewable energy. We strive to make solar energy accessible and affordable for all.' />
                            </div>
                            <div className=' -ml-16'>
                            <InfoCards data='05+' type='Experience' description='Our vision is to be a global leader in sustainable energy solutions, creating a brighter, cleaner future for generations to come.' />
                            </div>
                        </div>
                </div>

            </div>

        </div>
    )
}

export default About