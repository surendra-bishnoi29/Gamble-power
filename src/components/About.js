import React, { useContext, useEffect, useState } from 'react'
import LeafIcon from '../Icons/LeafIcon';
import HeartIcon from '../Icons/HeartIcon';
import GiftIcon from '../Icons/GiftIcon';
import ThumbsUpIcon from '../Icons/ThumbsUpIcon';
import PersonAddIcon from '../Icons/PersonAddIcon';
import ProgressRing from './utilities/ProgressRing';
import PageSpecificHeader from './PageSpecificHeader';
import { ContextApp } from '../ContextAPI'
import { Outlet, useNavigate } from 'react-router-dom'
import VolunteerList from '../Volunteer';
import VolunteerRequestList from '../Volunteer/VolunteerRequestList';
import { getProjectById, getProjects } from '../Actions/projectActions';
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import { getVolunteers } from '../Actions/volunteerActions';
// import Carousel from './carousel'

function About() {

   const { loggedIn = true,   role = "Public", donateModal, setDonateModal, volunteerModal, setVolunteerModal } = useContext(ContextApp);
 const navigate = useNavigate();


 const [listReload, setListReload] = useState(false)
 const [rolelistReload, setRoleListReload] = useState(false)

 const [totalProjectCount, setTotalProjectCount] = useState(0)
 const [totalVolunteerCount, setTotalVolunteerCount] = useState(0)


 useEffect(()=>{
  setRoleListReload(true)

  setTimeout(()=>{
    setRoleListReload(false)
  }, 500)
 },[role])

 useEffect(()=>{
    getAllProjects()
    getAllVolunteers()
 },[])


 const getAllProjects = async() =>{
  const res  = await getProjects()
  if (res?.status){
    const k = res?.projects?.length
    setTotalProjectCount(k)

  }else{
    notification("Something went wrong : projects", 'error')
  }

 }

 const getAllVolunteers = async() =>{
  const res  = await getVolunteers()
  if (res?.status){
    const k = res?.volunteers?.length
    setTotalVolunteerCount(k)

  }else{
    notification("Something went wrong : Volunteer", 'error')
  }

 }

  const features = [
    { number: '01', title: 'Pond Protection', icon: <HeartIcon />, heading: 'Pond Protection', text: 'Protect and restore ponds by ensuring cleanliness and preventing encroachments.' },
    { number: '02', title: 'HEALING', icon:  <LeafIcon />, heading: 'Green Initiatives ', text: 'Promote greenery through tree plantations and sustainable care efforts.' },
    { number: '03', title: 'ADOPTING', icon: <GiftIcon />, heading: 'Wildlife Welfare ', text: 'Safeguard wildlife habitats and protect their rights and interests.' },
    { number: '04', title: 'HELPING PEOPLE', icon: <ThumbsUpIcon />, heading: 'Helping People', text: 'We bring hope to communities by solving water issues for a sustainable future.' },
  ];

  const informations = [
    { number: totalProjectCount, icon: <HeartIcon className='size-10' />, text: 'Successful Projects' },
    { number: totalVolunteerCount, icon: <PersonAddIcon  className='size-11' />, text: 'Volunteer Reached' }
  ]

  const volunteers = [
    { name: 'Harish Paliwal', YOE: 18, photo: 'harish.png', role: 'Head volunteer', className:'w-40 h-full object-contain' },
    { name: 'Dev Kishan ', YOE: 5, photo: 'dev_kishan.png', role: 'Head volunteer',  className:'w-40 h-full object-contain' },
    { name: 'Bhagwandas Paliwal', YOE: 22, photo: 'bhagwandas.png', role: 'Head volunteer',  className:'w-32 h-full object-contain' },

    // {name:'Harish Paliwal', YOE:18, photo:'harish.png', role:'head volunteer'},
    // {name:'Harish Paliwal', YOE:18, photo:'harish.png', role:'head volunteer'},
    // {name:'Harish Paliwal', YOE:18, photo:'harish.png', role:'head volunteer'},



  ]


  const goToCreateVolunteer = () =>{
// setVolunteerModal(true)
   navigate('/contact-us#add-volunteer')

  }

   const notification = (msg, type) => {
      toast[type](msg);
    }
  

  return (
    <div>
      {/* <div className=' fixed w-full h-full  bg-black opacity-70 ' /> */}
      {/* <Carousel /> */}
     <PageSpecificHeader name='About Us' />

      {/*
    About
     */}

      <div className=' flex-wrap-reverse w-full flex justify-center  items-center relative gap-10'>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-000 to-gray-100 "></div> */}

        <div><img src='water1.png' className=' ' /> </div>
        <div className=' p-2 h-full flex justify-center w-[550px] flex-col'>
          <h2 className="text-4xl font-bold mb-3">
            WHO <span className="text-green-500 ">WE ARE?</span>
          </h2>
          <p className="text-gray-600 mb-6 text-[12px]">
          We are a dedicated organization committed to preserving water, the lifeline of our planet. Our mission is to collect and conserve rainwater, promote sustainable water practices, and ensure that every drop counts. By working with communities, we aim to provide clean, potable water and restore the balance between humanity and nature.

          </p>
          <div className=' flex flex-wrap justify-center items-center gap-8 '>
            {features.map((feature) => {
              return (
                <div className=' flex items-center'>
                  <div className="bg-green-500 gap-4 text-white p-4 h-20 w-14 flex flex-col items-center justify-center mr-4">

                    <span className="text-sm mt-1">.{feature.number}</span>
                    {feature.icon}
                  </div>
                  <div>
                    <div className=' text-green-500 uppercase'>
                      {feature.heading}
                    </div>
                    <div className=' text-[10px] w-32'>
                      {feature.text}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>

      <div className=' relative h-[210px] w-full'>
        <div className='absolute w-full h-[210px] top-0 left-0 bg-black bg-opacity-80 select-none flex flex-col text-white justify-center items-center ' >
          <div className=' w-full flex justify-center items-center flex-wrap gap-[30px] py-20 flex-col sm:flex-row sm:gap-[150px]'>
            {
              informations.map((information) => {
                return (
                  <div className=' flex justify-center  items-start gap-7'>
                    <div className=' flex items-end flex-col justify-end '>
                      <div className=' font-bold text-[30px] p-0 flex justify-end'>
                        {information.number}
                      </div>
                      <div className=' uppercase text-[12px] w-10 justify-end flex flex-col text-right items-end'>
                        {information.text}
                      </div>
                    </div>
                    <div className='mt-[8px]'>
                      {information.icon}
                    </div>
                  </div>
                )
              })

            }
          </div>

        </div>
        <img className='w-full h-[210px] object-cover' src={'raj6.jpg'} />
      </div>


      <div className=' relative  w-full '>
      <img className=' object-cover absolute w-full h-full -z-10 ' src='raj5.jpg' />
        <div className=' w-full z-[1]  top-0 left-0 bg-white bg-opacity-95 select-none flex flex-col  justify-start items-center ' >
          <div className=' flex flex-col items-center justify-center w-full p-10 gap-4'>
            <div className=' font-bold text-2xl'>OUR <span className=' text-green-500'> VOLUNTEERS</span></div>
            <div className=' w-[60%] text-[12px] text-center'>
            Our volunteers are the backbone of our mission, dedicating their time and energy to bring meaningful change. Together, we work to create a better future for communities and the environment. Join us and be part of this impactful journey.
            </div>
            <div onClick={goToCreateVolunteer} className=' cursor-pointer py-2 px-4 bg-green-600 text-[14px] text-white hover:rounded-full'>Become a volunteer</div>
            <div className=' flex flex-row z-30 flex-wrap gap-14 w-[70%] justify-center items-center mt-12 '>
              {
                volunteers.map((volunteer) => {
                  return (
                    <div className=' lg:w-1/4 flex flex-col text-center gap-5 justify-center items-center'>
                      <div className=' relative'>
                        <div className=' absolute -z-[1] right-0 -top-5 left-10'>
                          <ProgressRing text={`${volunteer.YOE}\nyears\nexp.`} />
                        </div>
                        <img src={volunteer.photo} className={volunteer.className} />
                      </div>
                      <div>
                        <div className=' font-bold text-[20px]'>{volunteer.name} </div>
                        <div className=' text-[12px]'> {volunteer.role}</div>
                      </div>
                    </div>
                  )

                })
              }
            </div>
            {!rolelistReload && <VolunteerList listReload={listReload} setListReload={setListReload} />}
            {role == 'Head-Volunteer' && <VolunteerRequestList listReload={listReload} setListReload={setListReload} />}
          </div>
        </div>
        
      </div>

    </div>
  )
}

export default About