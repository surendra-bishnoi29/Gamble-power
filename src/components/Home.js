import React, {useContext} from 'react'
import {  useNavigate } from 'react-router-dom'
import { ContextApp } from '../ContextAPI';


function Home() {
const navigate = useNavigate();

 const { donateModal, setDonateModal } = useContext(ContextApp);


  const goToCreateVolunteer = () =>{
    navigate('/contact-us#add-volunteer')
  }

  return (
    <div className='relative'>
      {/* Background video */}
      <div className='absolute w-full h-[500px] top-0 left-0 bg-black bg-opacity-65 select-none flex flex-col text-white justify-center items-center '>
        <div className=' text-[40px] opacity-100 z-10 font-bold'> जल ही जीवन है </div>
        <div className='z-10'>Help us to restore the Natural water source</div>

        <span onClick={()=>{setDonateModal(true)}} className=' z-10 opacity-100 bg-green-600 py-2 px-4 hover:rounded-full cursor-pointer mt-6'>
          Donate
        </span>

      </div>
      <video
        autoPlay
        muted
        loop
        className=' top-0 left-0 w-full h-[500px] object-cover -z-10'
      >
        <source src="https://jaljivnam.s3.ap-south-1.amazonaws.com/Water%20Bodies%20of%20Rajasthan.mp4" type="video/mp4" />
      </video>



      {/* Foreground content */}
      <div className=' bg-gray-100 h-full relative pt-11  z-10 '>

        <div className='   flex w-full h-full justify-center px-3 gap-[100px] items-center flex-wrap'>
          <div className=' h-full flex justify-center items-center '>
            <div className='  flex justify-center  flex-col gap-2'>
              <div className=' text-[26px] text-blue-400'>IF THERE IS A WATER THERE IS A FUTURE</div>
              <div className='text-[22px] max-w-[400px]'> Become our organization <span className=' text-green-500'>MEMBER</span> and help people for their needs</div>
              <div className='max-w-[400px] text-[16px] font-[500] text-gray-500'> Join us in restoring natural water sources, ensuring clean and accessible water for communities in need. Together, we can make a difference for our planet and future generations. Your support matters!
              </div>
              <div onClick={goToCreateVolunteer} className=' bg-green-500 w-24 mt-10 text-center py-1 text-white cursor-pointer hover:rounded-full'>Register</div>
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
