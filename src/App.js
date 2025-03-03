import { BrowserRouter, Navigate, Route, Routes, useNavigate } from "react-router-dom";
import MainLayout from './components/MainLayout';
// import { routes } from "./routes";
import React, {useState} from "react";
// import LoginPage from "./login/LoginPage";
import { useContext, useEffect } from "react";
import { getItem } from "./login/storageService";
import { ContextApp } from "./ContextAPI";
import appRoutes from "./routes/appRoutes";
import {generateRoute} from "./routes/index"
import RedirctWithQuery from "./login/RedirctWithQuery";
// const role = getItem('role');

function App() {
 
  const {role } = useContext(ContextApp) || "Public"
 
  const [routes, setRoutes] = useState()
  useEffect(() => {
   setRoutesFromStorage()
  
  } ,[role])

  const setRoutesFromStorage = () =>{
    const n_appRoutes = appRoutes.filter((route) => {
      if (!route.role || !route.role.includes(role)) {
        return null; // Skip routes that don't match the user's role
      }
      return route;
    });
   
    const temp = generateRoute(n_appRoutes);
    
    if(role == null){
      const t = generateRoute(appRoutes);
      setRoutes(t)
      return
    }
    setRoutes(temp);
  }

  


  return (
    <div className=' w-screen h-screen'>
      <BrowserRouter>

        <Routes>
          <Route path="/" element={
            <MainLayout />
          }>
           {routes}
          </Route>
          {/* <Route path="/login" element={<LoginPage />}></Route> */}
          <Route path="*" element={<RedirctWithQuery/>}></Route>
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
