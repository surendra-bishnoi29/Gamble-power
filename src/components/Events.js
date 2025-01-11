import React, { useEffect, useState, useContext } from 'react'
import PageSpecificHeader from './PageSpecificHeader'
import EventCalendar from './EventCalendar'
import EventDetails from './EventDetails'
import CreateEvent from './CreateEvent'
import { getEvents } from '../Actions/eventActions'
import { redirect } from 'react-router-dom'
import { ContextApp } from '../ContextAPI'

function Events() {

  let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

  const { loggedIn = true,   role = "Public", donateModal, setDonateModal, volunteerModal, setVolunteerModal } = useContext(ContextApp);


  const [events, setEvents] = useState([]);
  const [toggleReload, setToggleReload] = useState(true)

  const INITIAL_EVENTS = [
    {
      id: '1234',
      title: 'custom',
      start: todayStr,
      description: "Hii i am event 1st",
      end: '2025-01-01'
    }
  ]
  const [openModal, setOpenModal] = useState(false)
  const [initialEvents, setInitialEvents] = useState([
    ...INITIAL_EVENTS
  ])
  const [loading, setLoading] = useState(true)


  useEffect(()=>{
    getAllEvent()

  },[openModal, toggleReload])


  const getAllEvent = async ()=>{
    setLoading(true)
    const res = await getEvents();
    console.log("ALl events", res)

    if(res?.status){
      setEvents(res?.events)
    }else{
      //raise error
    }

    setLoading(false)

  }

  const onClose = () => {
    setOpenModal(false)
  }
  return (
    <div>
      {openModal && <CreateEvent setInitialEvents={setEvents} initialEvents={events} onClose={onClose} />}
      <PageSpecificHeader name='Events' />
      <div className='  flex justify-center flex-col items-center gap-5'>
        <div className=' mt-6 lg:w-[70%] w-full p-2 flex flex-col justify-center items-center text-center'>
          <div className=' text-xl md:text-2xl font-bold text-blue-800 mb-4'> It’s not just water we’re restoring – it’s life, dreams, and futures.</div>

          <div>At JALSMRAKSHANAM, we work tirelessly to reinstate the lost water sources and ensure a sustainable future for the people and wildlife of Rajasthan. Let’s make a difference together!</div>
        </div>
        {role=='Head-Volunteer' && <div onClick={()=>setOpenModal(!openModal)} className=' w-fit cursor-pointer py-2 px-4 bg-green-600 text-[14px] text-white hover:rounded-full'>Create an Event</div>}
        <p class="text-sm text-gray-600 italic">
          * Click on the event to get more details.
        </p>
      </div>
      <div className=' flex w-full lg:flex-nowrap flex-wrap justify-center  gap-2 p-5'>
        <div className=' lg:w-[80%] w-full '>
          <EventCalendar INITIAL_EVENTS={events} toggleReload={toggleReload} setToggleReload={setToggleReload} />
        </div>
        {/* <div className=' lg:w-[30%] '>
          <EventDetails setOpenModal={setOpenModal} />
        </div> */}
      </div>
    </div>
  )
}

export default Events