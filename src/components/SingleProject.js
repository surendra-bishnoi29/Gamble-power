
import React, { useState } from 'react'
import ProjectDetails from './ProjectDetails'
import ViewProject from './ViewProject'
import moment from 'moment/moment'

function SingleProject(props) {

    const maxlength = 100
    const { project, setToggleReload, toggleReload } = props

    const [openModal, setOpenModal] = useState(false)

    const onClose = () => {
        setOpenModal(false)
    }

    return (
        <div className=''>
            {openModal && <ViewProject onClose={onClose} projectId={project.id} toggleReload={toggleReload} setToggleReload={setToggleReload} />}
            <div onClick={()=>{setOpenModal(true)}}  class="  w-full sm:min-w-[480px] md:min-w-[672px] bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
                <div class="sm:flex w-full">
                    <div class="sm:shrink-0">
                        <img class="h-48 w-full  object-cover sm:h-full sm:w-48" src={project?.images[0] ?? 'blank_scenary.png'} />
                    </div>
                    <div class="p-8 w-[calc(100vw-60px)] sm:min-w-[446px]">
                        <div class="uppercase tracking-wide text-sm text-indigo-500 font-semibold">{project.name}</div>
                        <div class="block mt-1 text-[14px] leading-tight font-medium text-black hover:underline">
                            {moment(project.start).format('DD/MMM/YYYY')} {project.start !== project.end && ` - ${moment(project.end).format('DD/MMM/YYYY')}`}
                        </div>
                        <div>
                            {project.address}
                        </div>
                        <p class="mt-2 text-slate-500">
                            {project.description.length > maxlength ? <div>{project.description.slice(0, maxlength)}... <span className=' text-blue-500 cursor-pointer'>read more</span></div> : project.description}
                        </p>
                    </div>
                </div>
            </div>
            {/* <div onClick={()=>{setOpenModal(true)}} href="#" class= " min-w-[576px] flex min-h-[162px] flex-col items-center bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                <img class="object-cover rounded-t-lg min-w-[224px]  min-h-[160]  md:w-56 md:h-40 md:rounded-none md:rounded-s-lg" src={project?.images[0] ?? 'blank_scenary.png'} alt="" />
                <div class="flex flex-col justify-between pl-4 pr-2 py-2 leading-normal">
                    <h5 class="mb-2 text-[15px] font-bold tracking-tight text-gray-900 dark:text-white">{project.name}</h5>
                    <div><span>
                        {moment(project.start).format('DD/MMM/YYYY')}
                                            {project.start !== project.end && ` - ${moment(project.end).format('DD/MMM/YYYY')}`}
                        </span>  <div>Address</div></div>
                    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{project.description.length > maxlength ? <div>{project.description.slice(0, maxlength)}... <span className=' text-blue-500 cursor-pointer'>read more</span></div> : project.description}</p>
                </div>
            </div> */}

        </div>
    )
}

export default SingleProject