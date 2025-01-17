import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ContextApp } from '../ContextAPI';
import AlternativeEnergyCard from './Home/AlternativeCard';
import SatisfiedClients from './Home/SatisfiedClientsAvatars';
import About from './About/About';
import { InfiniteSlider } from './About/InfiniteSlider';
import Values from './Values';
import Services from './Service';
import Benefits from './Benefits.js';
import Contact from './Contact/index.js';
import { useLocation } from 'react-router-dom';


function Home() {
  const navigate = useNavigate();

  const { donateModal, setDonateModal } = useContext(ContextApp);
  const { hash } = useLocation();

  useEffect(() => {
    // Scroll to top first if you want
    window.scrollTo(0, 0);

    // If there's a hash in the URL, try to scroll to that element
    if (hash) {
     
      const element = document.getElementById(hash.replace('#', ''));
      console.log("i got hash ", element)
      if (element) {
        // For smooth scrolling:
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);


  const goToContact = () => {
    navigate('#contact')
  }

  return (
    <div className='relative'>
      {/* Background video */}
      <div className='absolute w-full h-screen top-0 left-0 bg-gradient-to-b from-black/55 to-black/10 select-none flex flex-col text-white  items-center '>
        <div className='flex z-10 justify-center flex-col items-center absolute top-[200px] max-w-[900px] text-center gap-10'>
          <div className=' font-[500] text-[50px] font-opensans'>Creating a Sustainable Future with Renewable Energy Solutions.</div>
          <div className=''>Discover the amazing ways solar energy can transform <br /> your home or business.</div>
          {/* <div>
            <button className="flex items-center justify-center gap-2 bg-lime-400 text-black font-medium py-2 px-6 rounded-full shadow-md hover:bg-lime-500 transition-all">
              <span className="text-lg">→</span>
              <span className="text-lg">Get A Free Quote</span>
            </button>
          </div> */}



          <button class="relative inline-flex items-center px-6 hover:pr-12 py-2 overflow-hidden text-lg font-medium text-black   rounded-full  group hover:bg-gray-50">
            <span class="absolute left-0 block w-full h-full transition-all bg-lime-400 group-hover:bg-lime-500 opacity-100 group-hover:h-full top-0 group-hover:top-0 duration-400 ease"></span>
            <svg class="relative w-5 h-5 mr-2 text-white hover:fill-yellow-500" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            <span class="absolute right-0 flex items-center justify-start w-10 h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
            </span>
            <span onClick={goToContact} class="relative">Get A Free Quote</span>
            
          </button>
          <div className='flex z-10 justify-center  items-center mt-16 bottom-12 max-w-[900px] text-center gap-4 '>
          <AlternativeEnergyCard />
          <SatisfiedClients />
        </div>
        </div>
        
      </div>
      <video
        autoPlay
        muted
        loop
        className=' top-0 left-0 w-full  object-cover -z-10'
      >
        <source src="home.mov" type="video/mp4" />
      </video>



      {/* Foreground content */}
      <div id='about' className=' bg-white h-full relative pt-11  z-10 '>
        <About />
        {/* <div className='   flex w-full h-full justify-center px-3 gap-[100px] items-center flex-wrap'>
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
            <img src='raj2.png' className=' h-[330px]' />
          </div>
        </div> */}

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

      <div className=' p-16'>
          <Values />
      </div>

      <div id='service' className=' p-16'>
        <Services />
      </div>

     

      <div>
        <InfiniteSlider />
      </div>


        <div id='contact' className=' p-16'>
        <Contact />
      </div> 

      
    </div>
  )
}

export default Home
