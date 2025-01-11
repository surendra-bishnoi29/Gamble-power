import React, { useEffect, useState, useContext } from 'react'
import PageSpecificHeader from './PageSpecificHeader'
import SingleProject from './SingleProject'
import AddProjectIcon from '../Icons/AddProjectIcon'
import CreateProject from './CreateProject'
import { getProjects } from '../Actions/projectActions'
import { ContextApp } from '../ContextAPI'

function Projects() {

  const { loggedIn = true,   role = "Public", donateModal, setDonateModal, volunteerModal, setVolunteerModal } = useContext(ContextApp);
  const [openModal, setOpenModal] = useState(false)
 

  const [projects, setProjects] = useState([]);


  const [toggleReload, setToggleReload] = useState(false)

  // const [projectName, setProjectName] = useState('')
  // const [address, setAddress] = useState();
  // const [projectStartDate, setProjectStartDate] = useState()
  // const [projectEndDate, setProjectEndDate] = useState()
  // const [description, setDescription] = useState('')
  // const [files, setFile] = useState([]);
  // const [existingImages, setExistingImages] = useState([]);
  // const [newImages, setNewImages] = useState([]);
  // const [imagesToDelete, setImagesToDelete] = useState([]);


  useEffect(() => {
    getAllprojects();

  }, [toggleReload])

  const getAllprojects = async () => {
    const res = await getProjects();
    if (res?.status) {
      const prj = res.projects;
      setProjects(prj);
    }
  }



  const projectItems = [
    {
      id: '1233454',
      name: 'Water Harvesting',
      image: 'raj1.jpg',
      description: 'Water harvesting is the process of collecting and storing rainwater for later use. It can be used for a variety of purposes.'
    },
    {
      id: '1233453',
      name: 'Water Harvesting',
      image: 'raj1.jpg',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Water harvesting is the process of collecting and storing rainwater for later use. It can be used for a variety of purposes.'
    },
    {
      id: '1233452',
      name: 'Water Harvesting',
      image: 'raj1.jpg',
      description: 'Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order. Water harvesting is the process of collecting and storing rainwater for later use. It can be used for a variety of purposes.'
    },
    {
      id: '1233456',
      name: 'Water Harvesting',
      image: 'raj1.jpg',
      description: 'Water harvesting is the process of collecting and storing rainwater for later use. It can be used for a variety of purposes.'
    },

  ]

  const onClose = () => {
    setOpenModal(false)
  }

  return (
    <div>
      {openModal && <CreateProject onClose={onClose} toggleReload={toggleReload} setToggleReload={setToggleReload} />}
      <PageSpecificHeader name='Projects' />
      <div className='  flex justify-center flex-col items-center gap-5'>
        <div className=' mt-6 lg:w-[70%] w-full p-2 flex flex-col justify-center items-center text-center'>
          <div className=' text-xl md:text-2xl font-bold text-blue-800 mb-4'> Restoring Water, Reviving Life, and Shaping Sustainable Futures.</div>

          <div>Water is the essence of life, and at JALSMRAKSHANAM, we’re committed to restoring it for the people, wildlife, and future of Rajasthan. Our mission goes beyond conservation — it’s about reviving hope, nurturing communities, and creating a sustainable tomorrow. Together, we can transform lives and landscapes. Join us in making a lasting impact!</div>
        </div>
        {role=='Head-Volunteer' && <div onClick={() => setOpenModal(!openModal)} className=' w-fit cursor-pointer py-2 px-4 bg-green-600 text-[14px] text-white hover:rounded-full'>Add Project</div>}
        <p class="text-sm text-gray-600 italic">
          * Click on the project to get more details.
        </p>
      </div>
      {/* <div className=' flex lg:justify-end justify-center py-2 lg:mr-36 mt-10 items-center gap-2'>
        <div onClick={()=>{setOpenModal(true)}} className=' flex bg-green-600 justify-center items-center px-2 py-2 text-white gap-2 cursor-pointer hover:rounded-full'>
          <AddProjectIcon className={'size-4'} />
          <div>Add Project</div>
        </div>
      </div> */}
      <div className=' flex flex-wrap justify-evenly gap-5 p-5'>
        {
          projects.map((item) => {
            return <SingleProject project={item} toggleReload={toggleReload} setToggleReload={setToggleReload} />
          })
        }
      </div>
    </div>
  )
}

export default Projects