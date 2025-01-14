import React from 'react'

function Benefits() {
    return (
        <div className=' flex flex-col justify-center items-center '>
            <div>
            <div className=' px-5 py-1 bg-lime-100 w-fit text-lg rounded-full mb-6'>BENEFITS</div>
            </div>
            <div class="mx-auto  px-4 sm:px-6 lg:px-8 py-8">
                <h2 class="  text-2xl font-semibold sm:text-3xl text-center">Sustainability and Environmental Responsibility</h2>

                <div class="grid sm:grid-cols-3 gap-16 sm:gap-8 mt-16 sm:mt-24">
                    <div class="text-center  max-w-sm">
                        <div class="relative w-20 h-20 sm:w-20 sm:h-20 lg:w-20 lg:h-20 mx-auto left-2">
                            <div
                                class="z-10 relative w-full h-full bg-lime-800 rounded-full   shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5"
                                    stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Import icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                                    </path>
                                </svg>
                            </div>
                            <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 class=" text-xl sm:text-2xl mt-6 sm:mt-10">Reducing Carbon Emissions</h3>
                        <p class="leading-relaxed mt-4">Begin by envisioning the new look and features for your website.</p>
                    </div>
                    <div class="text-center max-w-sm">
                        <div class="relative w-20 h-20 sm:w-20 sm:h-20 lg:w-20 lg:h-20 mx-auto left-2">
                            <div
                                class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="0.5"
                                    stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Translate icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"></path>
                                </svg>
                            </div>
                            <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 class=" text-xl sm:text-2xl mt-6 sm:mt-10">Eco-Friendly Practices</h3>
                        <p class="leading-relaxed mt-4">Collaborate with your design and development team to give your website a
                            fresh and modern design.</p>
                    </div>
                    <div class="text-center max-w-sm ">
                        <div class="relative w-20 h-20 sm:w-20 sm:h-20 lg:w-20 lg:h-20 mx-auto left-2">
                            <div
                                class="z-10 relative w-full h-full bg-white rounded-full border border-gray-300 shadow flex items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width=".5"
                                    stroke="currentColor" class="text-gray-500 w-1/2 h-1/2" alt="Export icon">
                                    <path stroke-linecap="round" stroke-linejoin="round"
                                        d="M12 9.75v6.75m0 0l-3-3m3 3l3-3m-8.25 6a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z">
                                    </path>
                                </svg>
                            </div>
                            <div class="absolute inset-0 -translate-x-2 -translate-y-2 bg-green-500 rounded-full"></div>
                        </div>
                        <h3 class=" text-xl sm:text-2xl mt-6 sm:mt-10">Green Energy Transition</h3>
                        <p class="leading-relaxed mt-4">After the redesign, relaunch your website and welcome your audience to the
                            new experience.</p>
                    </div>
                   
                </div>
            </div>
        </div>
    )
}

export default Benefits