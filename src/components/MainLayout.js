import React, {useContext, useEffect} from 'react'
import SideNav from './SideNav'
import { Outlet, useNavigate } from 'react-router-dom'
import { getItem } from '../login/storageService';
import {Navigate, useLocation} from "react-router-dom"
import { ContextApp } from '../ContextAPI';
import Header from './Header';
import ExtraHeader from './utilities/ExtraHeader';
import Footer from './Footer';

function MainLayout(props) {

  const logged_in = getItem('loggedIn');
  const navigate = useNavigate();
  const {loggedIn = true, role = "Admin"} = useContext(ContextApp);
  // console.log("currwnt user from main layout", getItem('currentUser'))
  // const {role} = useContext(ContextApp);
  useEffect(() =>{
    if(role =='Admin'){
      console.log("not logged in", role)
    }
    else{
      // navigate('/files')
      console.log("logged in", loggedIn)
    }
    if(!loggedIn){
      // navigate('/login')
    }
    
  },[loggedIn, role])

  return (
    (loggedIn?
      <div className=' w-full h-full  '>
        {/* <div className=' w-full h-[20px] bg-gray-100  absolute -z-1'></div> */}
       <div className=' z-10'><ExtraHeader /> </div> 
      <SideNav />
      {/* <Header/> */}
      <div className='w-full overflow-auto'>
      <Outlet />
      </div>
      <Footer/>
  </div>:
  <Navigate to="/login"  replace />
    )
   
  )
}

export default MainLayout