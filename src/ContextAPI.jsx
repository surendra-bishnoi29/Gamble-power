import React, { createContext, useRef, useState, useEffect } from 'react'
import { getItem } from './login/storageService'




export const ContextApp = createContext()




const ContextAppProvider = props => {
  // const navigate = useNavigate()
  const r = getItem('role') || "Public";
  const l = getItem('loggedIn') || false;
  const [appState, setAppState] = useState("")
  const notifisystem = useRef()
  const [keyword, setKeyword] = useState('')
  const [currentUser, setCurrentUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [loggedIn, setLoggedIn] = useState(l);
  const [role, setRole] = useState("Public");
  const [loginModal, setLoginModal] = useState(false);
  const [donateModal, setDonateModal] = useState(false);
  const [volunteerModal, setVolunteerModal] = useState(false);

  useEffect(()=>{
    setRole(r);
  },[loggedIn])

  const login = () =>{
    console.log("login true")
    setLoggedIn(true);
    // setItem('loggedIn', true);
    
    // navigate('/')
  }



  return <ContextApp.Provider
    value={{
      appState, setAppState,
      notifisystem,
      keyword, setKeyword,
      currentUser, setCurrentUser,
      loggedIn, login, setLoggedIn,
      loading, setLoading,
      role, setRole, loginModal, setLoginModal,
      donateModal, setDonateModal, volunteerModal, setVolunteerModal
    }}>
    {props.children}
  </ContextApp.Provider>
}
export default ContextAppProvider;