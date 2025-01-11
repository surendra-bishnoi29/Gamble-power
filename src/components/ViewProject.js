import React, { useEffect, useState, useContext } from 'react'
import Modal from './Modal/Modal';
import { deleteEvent, getEventById } from '../Actions/eventActions';
import EventDetails from './EventDetails';
import CreateEvent from './CreateEvent';
import WarningPage from './utilities/WarningPage';
import ProjectDetails from './ProjectDetails';
import CreateProject from './CreateProject';
import { deleteProject, getProjectById } from '../Actions/projectActions';
import { ContextApp } from '../ContextAPI'

function ViewProject(props) {
  const {  projectId, onClose,  toggleReload, setToggleReload} = props;
    const { loggedIn = true,   role = "Public", donateModal, setDonateModal, volunteerModal, setVolunteerModal } = useContext(ContextApp);

  

  const [editMode, setEditMode] = useState(false);
  const [deleteMode, setDeleteMode] = useState(false);

  const [errorMsg, setErrorMsg] = useState('')

  const deleteConfirmation = (confirmation) => {
    if (confirmation) {
      deleteProjectByID(); // Only called when confirmation is true
    } else {
      closeDeleteMode(); // Only called when confirmation is false
    }
  };


  const deleteProjectByID = async () => {
    const res = await deleteProject(projectId);
    console.log("event deleted", res);
    if (res?.status) {
      console.log("res of k")
      setEditMode(false);
      setDeleteMode(false);
      setToggleReload(!toggleReload);
      onClose();
    }else{
      setErrorMsg("Something went wrong")
    }

  }

  const closeDeleteMode = () =>{
    console.log("closeing delete mode")
    setDeleteMode(false)
  }



//   useEffect(() => {
//     getSingleProjectById()
//   }, [])

//   const getSingleProjectById = async () => {
//     const res = await getProjectById(projectId);
//   }
  return (
    <Modal>
      {!deleteMode ? <div className=' max-w-[400px]  '>
        {!editMode ? <ProjectDetails onClose={onClose} setEditMode={setEditMode}   projectId={projectId} setDeleteMode={setDeleteMode}  /> : <CreateProject toggleReload={toggleReload} setToggleReload={setToggleReload} onClose={onClose} projectId={projectId} mode={'Edit'} />}
      </div>
        :
        <WarningPage targetFunction={deleteConfirmation} errorMsg={errorMsg}  />
      }

    </Modal>
  )
}

export default ViewProject