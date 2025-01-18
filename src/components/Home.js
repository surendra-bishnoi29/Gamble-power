import React, { useContext, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { ContextApp } from '../ContextAPI';
import AlternativeEnergyCard from './Home/AlternativeCard';
import SatisfiedClients from './Home/SatisfiedClientsAvatars';
import About from './About/About';
import { InfiniteSlider } from './About/InfiniteSlider';
import Values from './Values';
import Services from './Service';
import Benefits from './Benefits.js';
import Contact from './Contact/index.js';

function Home() {
  const navigate = useNavigate();
  const { donateModal, setDonateModal } = useContext(ContextApp);
  const { hash } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    if (hash) {
      const element = document.getElementById(hash.replace('#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);

  const goToContact = () => {
    navigate('#contact');
  };

  return (
    <div className="relative w-full">
      {/* Background video container */}
      <div className="absolute w-full h-screen min-h-[1000px] top-0 left-0 bg-gradient-to-b from-black/55 to-black/10 select-none flex flex-col text-white items-center">
        <div className="flex z-10 justify-evenly flex-col items-center absolute px-4 md:px-6 lg:px-8 top-[15vh] md:top-[20vh] lg:top-[200px] w-full max-w-[900px] text-center gap-6 md:gap-8 lg:gap-10">
          {/* Heading */}
          <div className="font-[500] text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-opensans tracking-normal lg:leading-[50px]">
            Creating a Sustainable Future with Renewable Energy Solutions.
          </div>
          
          {/* Subheading */}
          <div className="text-sm sm:text-base md:text-lg">
            Discover the amazing ways solar energy can transform<br className="hidden md:block" /> your home or business.
          </div>

          {/* CTA Button */}
          <button className="relative inline-flex items-center px-4 md:px-6 hover:pr-8 md:hover:pr-12 py-2 overflow-hidden text-base md:text-lg font-medium text-black rounded-full group hover:bg-gray-50">
            <span className="absolute left-0 block w-full h-full transition-all bg-lime-400 group-hover:bg-lime-500 opacity-100 group-hover:h-full top-0 group-hover:top-0 duration-400 ease"></span>
            <svg className="relative w-4 h-4 md:w-5 md:h-5 mr-2 text-white hover:fill-yellow-500" fill="none" stroke="black" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
            </svg>
            <span className="absolute right-0 flex items-center justify-start w-8 md:w-10 h-8 md:h-10 duration-300 transform translate-x-full group-hover:translate-x-0 ease">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
              </svg>
            </span>
            <span onClick={goToContact} className="relative">Get A Free Quote</span>
          </button>

          {/* Cards Section */}
          <div className="flex z-10 justify-center items-center mt-8 md:mt-12 lg:mt-16 w-full flex-col md:flex-row gap-4 px-4">
            <AlternativeEnergyCard />
            <SatisfiedClients />
          </div>
        </div>
      </div>

      {/* Video Background */}
      <video
        autoPlay
        muted
        loop
        className="w-full min-h-[1000px] h-screen object-cover -z-10"
      >
        <source src="https://jaljivnam.s3.ap-south-1.amazonaws.com/gamble-dump/public/home.mov" type="video/mp4" />
      </video>

      {/* Content Sections */}
      <div id="about" className="bg-white relative pt-8 md:pt-11 z-10">
        <About />
      </div>

      <div className="p-4 sm:p-8 md:p-12 lg:p-16">
        <Values />
      </div>

      <div id="service" className="p-4 sm:p-8 md:p-12 lg:p-16">
        <Services />
      </div>

      <div>
        <InfiniteSlider />
      </div>

      <div id="contact" className="">
        <Contact />
      </div>
    </div>
  );
}

export default Home;