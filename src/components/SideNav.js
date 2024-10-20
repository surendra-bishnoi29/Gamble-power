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



function SideNav() {
  const [currentUser, setCurrentUser] = useState({});
  const { loading, setLoading, role } = useContext(ContextApp);
  const [routes, setRoutes] = useState(appRoutes)
  const [warning, setWarning] = useState(false)
  useEffect(() => {
    getUser()
  }, [])

  const getUser = async () => {
    setLoading(true);
    const response = await getCurrentUser();
    console.log("current user from side nav", response)
    if (response?.user) {
      setCurrentUser(response.user);
    }
    if (response?.error) {
      localStorage.clear();
      window.location.reload();
    }
    setLoading(false);

  }

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

  return (
    <>
      <Notification />
      {warning ? <WarningPage targetFunction={getPermissionToLogout} warningMsg={'Are you sure you want to logout ?'} /> : ''}
      <nav className="bg-transparent   justify-between flex  ">
        <div className=" flex w-full justify-end gap-10 sm:gap-0 items-center absolute z-10  ">
          {/* <a href="#" className=' hidden '>
            <img
              src={currentUser?.image == '' ? blank_img : currentUser?.image}
              className="rounded-full w-10 h-10 mb-3 mx-auto"
            />
          </a> */}
          <div className="">
            <ul className='flex flex-row justify-center sm:flex-row items-center -ml-4 mr-4 mt-2 '>
              {routes.map((route, index) => (
                <li key={index} className={classNames( route.state =='donate'?' bg-green-400 pr-1 ml-5  rounded-full':'')}>
                  <SideBarItem item={route} key={index} />
                </li>
              )
              )}
            </ul>
          </div>
          {/* <div className=' sm:hidden'>
            <UserDropdown logout={() => logout(true)} currentUser={currentUser} />
          </div> */}
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
    </>
  )
}

export default SideNav