import React from 'react'

function Home() {
  return (
    <div className='relative'>
      {/* Background video */}
      <div className='absolute w-full h-[500px] top-0 left-0 bg-black bg-opacity-65 select-none flex flex-col text-white justify-center items-center '>
        <div className=' text-[40px] opacity-100 z-10'> Save Mother Nature </div>
        <div className='z-10'>Help us to restore the Natural water source</div>

        <span className=' z-10 opacity-100 bg-green-600 py-2 px-4 hover:rounded-full cursor-pointer mt-6'>
          Donate
        </span>

      </div>
      <video
        autoPlay
        muted
        loop
        className=' top-0 left-0 w-full h-[500px] object-cover -z-10'
      >
        <source src="forest.mp4" type="video/mp4" />
      </video>



      {/* Foreground content */}
      <div className='relative  z-10 '>

        <div className=' bg-gray-100 h-[400px] flex w-full justify-center px-3 gap-[200px] items-end'>
          <div className=' h-full flex justify-center items-center'>
            <div className='  flex justify-center  flex-col gap-2'>
              <div className='text-lg w-[300px]'> Become our organization <span className=' text-green-500'>MEMBER</span> and help people for their needs</div>
              <div className='w-[400px] text-xs text-gray-500'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                fugiat nulla pariatur.
              </div>
              <div className=' bg-lime-800 w-24 mt-10 text-center py-1 text-white cursor-pointer hover:rounded-full'>Register</div>
            </div>
          </div>
          <div>
            <img src='raj2.png' className=' h-[330px]'/>
          </div>
        </div>

        {/* <div>
          <img src='raj1.jpg' className=' w-full h-[180px] fill-current'/>
        </div> */}

        {/* <div className='bg-white min-h-screen p-8'>
          <h1 className='text-3xl font-bold'>Welcome to My Website</h1>
          <p className='mt-4'>
            Scroll down to see how the content scrolls over the running video.
          </p>
        </div>
        <div className='bg-white min-h-screen p-8'>
          <h2 className='text-2xl font-semibold'>Another Section</h2>
          <p className='mt-4'>
            More content here to demonstrate scrolling over the video. Keep adding more sections or content as needed.
          </p>
        </div>
        <div className='bg-white min-h-screen p-8'>
          <h2 className='text-2xl font-semibold'>Final Section</h2>
          <p className='mt-4'>
            The video should stay fixed in the background as you scroll through these sections.
          </p>
        </div>*/}
      </div>
    </div>
  )
}

export default Home
