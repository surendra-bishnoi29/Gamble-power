// import AllUsers from "../components/AllUsers";
// import AllFiles from "../components/file-manager/AllFiles";
import UserIcon from "../Icons/UserIcon";
import FilesIcon from "../Icons/FilesIcon";
// import AllOrganisations from "../components/Organisation-manager/AllOrganisations";
// import OrganisationUsers from "../components/Organisation-manager/OrganisationUsers";
import Home from "../components/Home";
import About from "../components/About";
import Events from "../components/Events";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

const appRoutes = [
  {
    path: "/",
    index:true,
    element: <Home />,
    state: "users",
    role: ["Admin", "User"],
    sidebarProps: {
      displayText: "User",
      icon: <div>Home</div>
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
    path: "/about",
    index:true,
    role:['User', 'Admin'],
    element: <About/>,
    state: "organisations",
    sidebarProps: {
      displayText: "organisation",
      icon: <div>About Us</div>
    }
  },
  {
    path: "/projects",
    index:true,
    role:['User', 'Admin'],
    element: <Projects/>,
    state: "projects",
    sidebarProps: {
      displayText: "projects",
      icon: <div>Projects</div>
    }
  },
  {
    path: "/events",
    index:true,
    role:['User', 'Admin'],
    element: <Events/>,
    state: "events",
    sidebarProps: {
      displayText: "events",
      icon: <div>Events</div>
    }
  },
  {
    path: "/contact-us",
    index:true,
    role:['User', 'Admin'],
    element: <Contact/>,
    state: "contact-us",
    sidebarProps: {
      displayText: "contact-us",
      icon: <div>Contact Us</div>
    }
  },

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



