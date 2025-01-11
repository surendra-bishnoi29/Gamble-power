import React from 'react'
import Modal from './Modal/Modal'
import Carousel from './carousel'
import CloseIcon from '../Icons/CloseIcon'
import Project from './Project'

function ProjectDetails(props) {
  const { onClose, projectId, setEditMode, setDeleteMode} = props
  return (
    
    <>
       <div className=' rounded-lg overflow-hidden' >

<div className='  px-2 bg-green-700 p-4  text-white flex flex-row justify-between items-center border-b-2'>
  <div className=' font-bold text-[16px] '> Event Details</div>
  <div className=' rounded-full p-2 hover:bg-gray-500 hover:bg-opacity-50 cursor-pointer ' onClick={() => { onClose() }}><CloseIcon size={5} /></div>
</div>
<Project setOpenModal={onClose} setEditMode={setEditMode} projectId={projectId} setDeleteMode={setDeleteMode}  />

</div>
    </>
    
  )
}

export default ProjectDetails