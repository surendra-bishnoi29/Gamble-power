import React from 'react'
import StarIcon from '../../Icons/StarIcon'
import ArrowRight from '../../Icons/ArrowRight'
import InfoCards from './InfoCards'

function About() {
    return (
        <div className='px-4 sm:px-6 md:px-8 lg:px-12 py-10 md:py-16 lg:py-20 bg-white'>
            <div className='w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-0'>
                {/* Left Content Section */}
                <div className='w-full lg:w-2/5 p-2 md:p-4 lg:p-6 flex flex-col text-left'>
                    {/* About Us Badge */}
                    <div className='px-2 py-1 bg-lime-100 w-fit text-base md:text-lg rounded-full mb-4 md:mb-6'>
                        ABOUT US
                    </div>

                    {/* Title */}
                    <div className='text-3xl md:text-4xl lg:text-[40px] font-bold mb-3'>
                        The Gamble Power
                    </div>

                    {/* Description */}
                    <div className='max-w-full lg:max-w-[490px] text-base md:text-lg mb-5'>
                        Gamble Power is a leading provider of solar energy solutions, dedicated to empowering individuals and businesses with clean, renewable energy. We believe in the power of solar energy to transform lives and communities.
                    </div>

                    {/* Reviews Section */}
                    <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 justify-start sm:items-center w-fit mb-6 md:mb-8'>
                        {/* Rating */}
                        <div className='text-base md:text-lg flex justify-center items-center w-fit gap-4 sm:border-r-2 sm:pr-5 sm:border-black'>
                            <StarIcon className='size-5 md:size-6' />
                            <div>
                                Excellent 4.8 / 5
                            </div>
                        </div>

                        {/* Client Avatars */}
                        <div className='flex justify-start items-center gap-4'>
                            <div className='w-fit h-fit'>
                                <div className="flex justify-center -space-x-4">
                                    <img
                                        className="w-8 h-8 md:w-9 md:h-9 border-2 border-white rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                                        alt="Client 1"
                                    />
                                    <img
                                        className="w-8 h-8 md:w-9 md:h-9 border-2 border-white rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                                        alt="Client 2"
                                    />
                                    <img
                                        className="w-8 h-8 md:w-9 md:h-9 border-2 border-white rounded-full"
                                        src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                                        alt="Client 3"
                                    />
                                    <div className="flex items-center justify-center w-8 h-8 md:w-9 md:h-9 text-xs md:text-sm font-medium text-white bg-gray-700 border-2 border-white rounded-full">
                                        80+
                                    </div>
                                </div>
                            </div>
                            <div className='text-base md:text-lg'>
                                Reviews 130+
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div>
                        <button className="flex items-center justify-center gap-2 bg-lime-300 text-black font-medium py-2 px-4 md:px-6 rounded-full duration-300 hover:bg-lime-400 transition-all">
                            <ArrowRight />
                            <span className="text-base md:text-lg">Learn More</span>
                        </button>
                    </div>
                </div>

                {/* Right Content Section */}
                <div className='w-full lg:w-3/5 flex flex-col sm:flex-row gap-5 justify-center items-center sm:items-start'>
                    {/* Main Image */}
                    <div className='w-full sm:w-[80%] sm:max-w-full max-w-[400px] lg:w-auto'>
                        <img 
                            className='object-cover w-full sm:w-[418px] h-[300px]  sm:h-[500px] rounded-2xl' 
                            src='https://jaljivnam.s3.ap-south-1.amazonaws.com/gamble-dump/public/about-stand.jpg'
                            alt="About Gamble Power"
                        />
                    </div>
                    
                    {/* Info Cards */}
                    <div className='lg:-mt-10 flex justify-center items-center sm:items-start flex-col gap-6 lg:gap-10 w-full sm:w-[80%] lg:w-auto'> 
                        <div>
                            <InfoCards 
                                data='87%' 
                                type='Success' 
                                description='Green Power is dedicated to empowering individuals and businesses with clean, renewable energy. We strive to make solar energy accessible and affordable for all.' 
                            />
                        </div>
                        <div className='sm:-ml-16'>
                            <InfoCards 
                                data='05+' 
                                type='Experience' 
                                description='Our vision is to be a global leader in sustainable energy solutions, creating a brighter, cleaner future for generations to come.' 
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About