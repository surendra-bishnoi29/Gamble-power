// import AllUsers from "../components/AllUsers";
// import AllFiles from "../components/file-manager/AllFiles";
import UserIcon from "../Icons/UserIcon";
import FilesIcon from "../Icons/FilesIcon";
// import AllOrganisations from "../components/Organisation-manager/AllOrganisations";
// import OrganisationUsers from "../components/Organisation-manager/OrganisationUsers";
import Home from "../components/Home";

import HomeIcon from "../Icons/HomeIcon";
import InfoIcon from "../Icons/InfoIcon";


const appRoutes = [
  {
    path: "/",
    index:true,
    element: <Home />,
    state: "Home",
    role: ["Admin", "Public", "Head-Volunteer"],
    sidebarProps: {
      displayText: "Home",
      icon: <div>Home</div>,
      sidebarIcon : <HomeIcon className={'size-5'}/>
    }
  },
  // {
  //   path: "/files",
  //   index:true,
  //   role:['User', 'Admin'],
  //   element: <AllFiles />,
  //   state: "file",
  //   sidebarProps: {
  //     displayText: "Files",
  //     icon: <FilesIcon />
  //   }
  // },
 {
    path: "#about",
    index:true,
    role:['Public', 'Admin',"Head-Volunteer"],
    element: <Home/>,
    state: "about",
    sidebarProps: {
      displayText: "about",
      icon: <div>About</div>,
      sidebarIcon : <InfoIcon className={'size-5'}/>
    }
  },

  {
    path: "#service",
    index:true,
    role:['Public', 'Admin',"Head-Volunteer"],
    element: <Home/>,
    state: "service",
    sidebarProps: {
      displayText: "service",
      icon: <div>Service</div>,
      sidebarIcon : <InfoIcon className={'size-5'}/>
    }
  },


  {
    path: "#contact",
    index:true,
    role:['Public', 'Admin',"Head-Volunteer"],
    element: <Home/>,
    state: "contact",
    // sidebarProps: {
    //   displayText: "service",
    //   icon: <div>Service</div>,
    //   sidebarIcon : <InfoIcon className={'size-5'}/>
    // }
  },

  // {
  //   path: "/benefits",
  //   index:true,
  //   role:['Public', 'Admin',"Head-Volunteer"],
  //   element: <Home/>,
  //   state: "benefits",
  //   sidebarProps: {
  //     displayText: "benefits",
  //     icon: <div>Benefits</div>,
  //     sidebarIcon : <InfoIcon className={'size-5'}/>
  //   }
  // },
//   {
//     path: "/projects",
//     index:true,
//     role:['Public', 'Admin', "Head-Volunteer"],
//     element: <Projects/>,
//     state: "projects",
//     sidebarProps: {
//       displayText: "projects",
//       icon: <div>Projects</div>,
//       sidebarIcon : <SquareIcon className={'size-5'} />
//     }
//   },
//   {
//     path: "/events",
//     index:true,
//     role:['Public', 'Admin', "Head-Volunteer"],
//     element: <Events/>,
//     state: "events",
//     sidebarProps: {
//       displayText: "events",
//       icon: <div>Events</div>,
//       sidebarIcon : <CalendarIcon className={'size-5'} />
//     }
//   },
//   {
//     path: "/contact-us",
//     index:true,
//     role:['Public', 'Admin', "Head-Volunteer"],
//     element: <Contact/>,
//     state: "contact-us",
//     sidebarProps: {
//       displayText: "contact-us",
//       icon: <div>Contact Us</div>,
//       sidebarIcon : <ContactUsIcon className={'size-5'}/>
//     }
//   },

  // {
  //   path: "/donate",
  //   index:true,
  //   role:['User', 'Admin'],
  //   element: <Contact/>,
  //   state: "donate",
  //   sidebarProps: {
  //     displayText: "donate",
  //     icon: <div>Donate Now</div>
  //   }
  // }
  

  // {
  //   path: "/Organisations/users",
  //   // index:true,
  //   role:['User', 'Admin'],
  //   element: <Home/>,
  //   state: "file",
  //   // sidebarProps: {
  //   //   displayText: "Files",
  //   //   icon: <FilesIcon />
  //   // }
  // },

];

export default appRoutes;



