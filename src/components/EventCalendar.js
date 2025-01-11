import React, {useState, useRef, useEffect} from 'react'
import { formatDate } from '@fullcalendar/core'
import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import timeGridPlugin from '@fullcalendar/timegrid'
import interactionPlugin from '@fullcalendar/interaction'
import './eventCalendar.css'
import ViewEvent from './ViewEvent'


function EventCalendar(props) {
  const {INITIAL_EVENTS, toggleReload, setToggleReload} = props
  const calendarRef = useRef(null)

  const [eventId, setEventId] = useState('')
  const [openViewModal, setOpenViewModal] = useState(false)

  function handleDateSelect(selectInfo) {
    let title = prompt('Please enter a new title for your event')
    let calendarApi = selectInfo.view.calendar

    calendarApi.unselect() // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: 1234,
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      })
    }

    console.log("in sake of add events", selectInfo);
  }

  function handleEventClick (a , b, c, d) {
    console.log("event has been  click", a,b,c)

    setEventId(a.event.id);
    setOpenViewModal(true);
  }

  function handlePrevMonthClick(calendar) {
    calendar.prev(); // Move to the previous month
    console.log("Moved to previous month");
  }

  function handleNextMonthClick(calendar) {
    calendar.next(); // Move to the next month
    console.log("Moved to next month");
  }

  function handleNavigation(){
    console.log("nav clicked")
  }

  // const custombutton = () =>{
  //   return <div onClick={console.log("dffdgf")}>ffvb</div>;
  // }

  const custombuttonEvent = (elmnt) =>{
    // const calendarApi = calendarRef.current.getApi()
    console.log("button clicked", elmnt)
    // if (elmnt == 'prev'){
    //   calendarApi.prev()
    // }

    // if (elmnt == 'next'){
    //   calendarApi.next()
    // }
    
    // if (elmnt == 'today'){
    //   calendarApi.today()
    // }

  }


//   const custombuttonEvent = (elmnt) =>{
    
//     if (calendarRef){
//     const calendarApi = calendarRef?.current?.getApi()
//     console.log("button clicked", calendarApi)
//     if (elmnt == 'prev' && calendarApi){
//       calendarApi.prev()
//     }else if (elmnt == 'next' && calendarApi){
//       calendarApi.next()
//     }else if (elmnt == 'today' && calendarApi){
//       calendarApi.today()
//     }
// }
//   }

const onClose = () =>{
  setOpenViewModal(!openViewModal);
}

  return (
    <div>
      {openViewModal && <ViewEvent eventId={eventId} onClose={onClose} toggleReload={toggleReload} setToggleReload={setToggleReload}  />}
        <FullCalendar
        ref={calendarRef}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          headerToolbar={{
            left: 'title',
            // center:'events',
            right: 'prevButton,nextButton todayButton'
          }}
          // initialView='dayGridMonth'
          // customButtons={{
          //   customPrev: {
          //     text: '<',
          //     click: function() {
          //       let calendarApi = document.querySelector('.fc')._calendarApi;
          //       handlePrevMonthClick(calendarApi);
          //     }
          //   },
          //   customNext: {
          //     text: '>',
          //     click: function() {
          //       let calendarApi = document.querySelector('.fc')._calendarApi;
          //       handleNextMonthClick(calendarApi);
          //     }
          //   }
          // }}
          // customButtons={
            
          // }
          customButtons = {{
            prevButton : {
              text: 'custom prev',
              icon:'chevron-left',
              click: function() {
                // alert('clicked the custom button!');
                const calendarApi = calendarRef.current.getApi()
                calendarApi.prev()
                custombuttonEvent('prev')
              }
            },
            nextButton : {
              text: 'custom next',
              icon:'chevron-right',
              click: function() {
                // alert('clicked the custom button!');
                const calendarApi = calendarRef.current.getApi()
                calendarApi.next()
                custombuttonEvent('next')
              }
            },
            todayButton :{
              text: 'Today',
              // icon:'chevron-right',
              click: function() {
                const calendarApi = calendarRef.current.getApi()
                calendarApi.today()
                custombuttonEvent('today')
              }
            }
          }
          }
          editable={false}
          selectable={false}
          selectMirror={true}
          dayMaxEvents={true}
          dragScroll={false}
          droppable={false}
          select={handleDateSelect}
          navLinkDayClick={handleNavigation}
          handleCustomRendering={()=>{
            console.log("cutom rendere")
          }}
          eventClick={handleEventClick}
          // initialEvents={INITIAL_EVENTS}
          events={INITIAL_EVENTS}
          timeZone="Asia/Kolkata"
          /*
          weekends={weekendsVisible}
           // alternatively, use the `events` setting to fetch from a feed
          select={handleDateSelect}
          eventContent={renderEventContent} // custom render function
          eventClick={handleEventClick}
          eventsSet={handleEvents} 
          eventAdd={function(){}}
          eventChange={function(){}}
          eventRemove={function(){}}
          */
        />
    </div>
  )
}

export default EventCalendar