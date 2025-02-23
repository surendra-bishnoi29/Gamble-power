import React, { useContext, useEffect } from 'react'
import SideNav from './SideNav'
import { Outlet, useNavigate } from 'react-router-dom'
import { getItem } from '../login/storageService';
import { Navigate, useLocation } from "react-router-dom"
import { ContextApp } from '../ContextAPI';
import Header from './Header';
import ExtraHeader from './utilities/ExtraHeader';
import Footer from './Footer';
import { useMediaQuery } from 'react-responsive';
import CreateVolunteer from '../Volunteer/CreateVolunteer';
import Donate from '../Donate';

function MainLayout(props) {

  const logged_in = getItem('loggedIn');
  const navigate = useNavigate();
  const { loggedIn = true,   role = "Public", donateModal, setDonateModal, volunteerModal, setVolunteerModal } = useContext(ContextApp);
  // //console.log("currwnt user from main layout", getItem('currentUser'))
  // const {role} = useContext(ContextApp);

  const isDesktop = useMediaQuery({ minWidth: 1024 });
  const isTablet = useMediaQuery({ minWidth: 640, maxWidth: 1023 });
  const isMobile = useMediaQuery({ maxWidth: 639 });
  const hideAddFile = useMediaQuery({ maxWidth: 440 });


  useEffect(() => {
    scrollToTop();
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Smooth scrolling
    });
  };

  useEffect(() => {
    if (role == 'Admin') {
      //console.log("not logged in", role)
    }
    else {
      // navigate('/files')
      //console.log("logged in", loggedIn)
    }
    if (!loggedIn) {
      // navigate('/login')
    }

  }, [loggedIn, role])

  return (
    <>
      {volunteerModal && <CreateVolunteer />}
      {donateModal && <Donate />}
      <div className=' w-full h-full  '>

        {/* <div className=' w-full h-[20px] bg-gray-100  absolute -z-1'></div> */}
        {/* <div className=' z-10 lg:block hidden'><ExtraHeader /> </div> */}
        <SideNav />
        {/* <Header/> */}
        <div className='w-full overflow-auto'>
          <Outlet />
        </div>
        <Footer />
      </div>
    </>

  )
}

export default MainLayout