import React, { useContext, useEffect, useState } from 'react'
import appRoutes from '../routes/appRoutes'
import SideBarItem from './SideBarItem'
import UserDropdown from './profileDropdown'
import { ContextApp } from '../ContextAPI'
import { getItem } from '../login/storageService'
import { getCurrentUser } from '../Actions/userAction'
import Notification from '../Notification'
import WarningPage from './utilities/WarningPage'
import blank_img from '../components/utilities/blank.jpg'
import { classNames } from './utilities/utilityFunctions'
import ModalLogin from '../login/ModalLogin'
import Logo from './Logo'
import SidebarIcon from '../Icons/SidebarIcon'
import SideBarModalComponent from './SideBarModalComponent'
import CreateVolunteer from '../Volunteer/CreateVolunteer'
import Donate from '../Donate'
import { useNavigate } from 'react-router-dom'



function SideNav() {

  const navigate = useNavigate();

  const [currentUser, setCurrentUser] = useState({});
  const { loading, setLoading, role, loginModal, setLoginModal, loggedIn, donateModal, setDonateModal, volunteerModal, setVolunteerModal } = useContext(ContextApp);
  const [routes, setRoutes] = useState(appRoutes)
  const [warning, setWarning] = useState(false)
  const [sideBarModal, setSideBarModal] = useState(false)
  // const [loginModal, setLoginModal] = useState(false)
  // useEffect(() => {
  //   getUser()
  // }, [])

  // const getUser = async () => {
  //   setLoading(true);
  //   const response = await getCurrentUser();
  //   console.log("current user from side nav", response)
  //   if (response?.user) {
  //     setCurrentUser(response.user);
  //   }
  //   if (response?.error) {
  //     localStorage.clear();
  //     window.location.reload();
  //   }
  //   setLoading(false);

  // }

  const logout = (permitted = false, getWarning = true) => {
    if (getWarning) {
      setWarning(true)
      return
    }
    if (permitted) {
      localStorage.clear();
      window.location.reload();
    }
    setWarning(false)
  }



  const getPermissionToLogout = (c) => {
    logout(c, false)
  }

  useEffect(() => {
    const n_appRoutes = appRoutes.filter((route) => {
      if (!route.role || !route.role.includes(role)) {
        return route; // Skip routes that don't match the user's role
      }
      return route;
    });
    console.log("n_appRoutes in side nav", n_appRoutes)
    setRoutes(n_appRoutes);
    console.log("role in side nav", role)
  }, [role])


  const gotoContact = () => {
    navigate('#contact')
  }

  return (
    <>
      {loginModal && <ModalLogin />}

      <Notification />
      {warning ? <WarningPage targetFunction={getPermissionToLogout} warningMsg={'Are you sure you want to logout ?'} /> : ''}
      <nav className="    justify-between w-full  flex  ">

        {/* <div className=" flex w-full   justify-between sm:gap-0 items-center absolute z-20 mt-4 px-10">
          <div className='flex justify-center items-center gap-1'>
            <Logo className='w-14 h-14' />
            <div className=' font-bold text-white text-3xl'>
              Gamble Power
            </div>
          </div>
          <div className=' z-50'>
            <button className="bg-white z-10 cursor-pointer text-black font-medium py-2 px-6 rounded-full mt-1 shadow-md hover:bg-green-500 transition duration-300">
              Contact Us
            </button>

          </div>
        </div> */}

        <div className=" flex w-full  justify-between sm:gap-0 items-center absolute z-10 px-10 mt-6 ">
          <div className='flex justify-center items-center gap-1'>
            <Logo className='sm:w-14 sm:h-14 w-10 h-10' />
            <div className=' font-bold text-white text-xl sm:text-3xl'>
              Gamble Power
            </div>
          </div>
          {/* <a href="#" className=' hidden '>
            <img
              src={currentUser?.image == '' ? blank_img : currentUser?.image}
              className="rounded-full w-10 h-10 mb-3 mx-auto"
            />
          </a> */}


          <div className="-pl-16 ">
            <ul className='lg:flex hidden flex-row justify-center  items-center -ml-4 mr-4  '>
              {routes.map((route, index) => (
                <li key={index} className={classNames(route.state == 'donate' ? ' bg-green-400 pr-1 ml-5  rounded-full' : '')}>
                  <SideBarItem item={route} key={index} />
                </li>
              )
              )}
            </ul>
          </div>

          <div className=' flex justify-center items-center gap-5'>
            <div onClick={gotoContact} className=' sm:block hidden'>
              <button className="bg-white z-10 cursor-pointer text-black font-medium py-2 px-6 rounded-full mt-1 shadow-md hover:text-white hover:bg-green-500 transition duration-300">
                Contact Us
              </button>
            </div>
            <div className=' mt-2 lg:hidden block '>
              <div className=' cursor-pointer text-white' onClick={() => setSideBarModal(!sideBarModal)}>
                <SidebarIcon className='size-6 sm:size-10' />
              </div>

              {sideBarModal && <SideBarModalComponent setSideBarModal={setSideBarModal} sideBarModal={sideBarModal} />}

            </div>
          </div>
          {/* {!loggedIn ? <div onClick={() => { setLoginModal(true) }} className='  text-sm mt-2 mr-4 cursor-pointer text-gray-300 hover:text-green-400 '>
            Login
            
          </div>
            :
            <div onClick={() => { logout() }} className='  text-sm mt-2 mr-4 cursor-pointer text-gray-300 hover:text-green-400 '>
              logout
            </div>
          } */}
        </div>

        {/* <div className="mb-4  hidden sm:flex sm:flex-col justify-center items-center gap-5 border-t border-gray-700 pt-5">
          
          <a onClick={() => { logout(true) }}>
            <span >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 text-white hover:text-red-500">
                <path stroke-linecap="round" stroke-linejoin="round" d="M5.636 5.636a9 9 0 1 0 12.728 0M12 3v9" />
              </svg>
            </span>
          </a>
        </div> */}
      </nav>

      {/* <div className=' fixed block lg:hidden z-40 w-full bg-slate-50'>
        <div className=' pl-8 py-2 border-b-2 flex items-center justify-between'>
          <Logo />
          <div className=' pr-4'>
            <div className=' cursor-pointer' onClick={() => setSideBarModal(!sideBarModal)}>
              <SidebarIcon />
            </div>

            {sideBarModal && <SideBarModalComponent setSideBarModal={setSideBarModal} sideBarModal={sideBarModal} />}

          </div>
        </div>

      </div> */}

    </>
  )
}

export default SideNav