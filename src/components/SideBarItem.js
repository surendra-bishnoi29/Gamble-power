import React, {useContext} from "react";
import { ContextApp } from "../ContextAPI";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { classNames } from "./utilities/utilityFunctions";

function SideBarItem(props) {

    const {item, setSideBarModal,  className = 'cursor-pointer text-xl  text-white font-[600] block    m-2 rounded-sm pl-2  select-none', showSidebarIcon = false} = props
    const { appState, setAppState, } = useContext(ContextApp);
    // const navigate = useNavigate()
    const location = useLocation()
    //console.log(item, "apart from item ", location)

    const scrollToTop = () => {
      if(setSideBarModal){
        setSideBarModal(false)
      }
      window.scrollTo({
        top: 0,
        behavior: "smooth", // Smooth scrolling
      });
    };
     
    return (
      item.sidebarProps && item.path ? (
       <NavHashLink
       to={(appState != item.state) ? (item.path ):location.pathname+location.search}
       className={className}
       onClick={scrollToTop}
      //  style={appState === item.state?{ display:'block', color:"#ffffff", textDecoration:item.state !='donate'&&'', fontWeight:'600'}:{display:'block'}}
       >
      <span  className={classNames(' flex items-center gap-3')}>
        {showSidebarIcon && item.sidebarProps.sidebarIcon}  {item.sidebarProps.icon}
     </span>
        </NavHashLink>
      ) : null
    );
}

export default SideBarItem