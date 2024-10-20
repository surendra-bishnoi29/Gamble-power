import React, {useContext} from "react";
import { ContextApp } from "../ContextAPI";
import { NavHashLink } from "react-router-hash-link";
import { useLocation } from "react-router-dom";
import { classNames } from "./utilities/utilityFunctions";

function SideBarItem({item}) {
    const { appState, setAppState} = useContext(ContextApp);
    // const navigate = useNavigate()
    const location = useLocation()
    console.log(item, "apart from item ", location)
    return (
      item.sidebarProps && item.path ? (
       <NavHashLink
       to={(appState != item.state) ? (item.path + '#top'):location.pathname+location.search}
       className=" cursor-pointer text-sm hover:text-green-500 text-gray-300     m-2 rounded-sm pl-2  select-none" 
       style={appState === item.state?{ display:'block', color:"#22C55E", textDecoration:item.state !='donate'&&'underline', fontWeight:'600'}:{display:'block'}}
       >
      <span className={classNames(item.state =='donate'? ' text-white no-underline bg-green-500   ':'')}>
     {item.sidebarProps.icon}
     </span>
        </NavHashLink>
      ) : null
    );
}

export default SideBarItem