import React from 'react'
import LeafIcon from '../Icons/LeafIcon';
import HeartIcon from '../Icons/HeartIcon';
import GiftIcon from '../Icons/GiftIcon';
import ThumbsUpIcon from '../Icons/ThumbsUpIcon';
import PersonAddIcon from '../Icons/PersonAddIcon';
import ProgressRing from './utilities/ProgressRing';
import PageSpecificHeader from './PageSpecificHeader';
// import Carousel from './carousel'

function About() {
  const features = [
    { number: '01', title: 'LIFE SAVING', icon: <LeafIcon />, heading: 'LIFE SAVING', text: 'dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor' },
    { number: '02', title: 'HEALING', icon: <HeartIcon />, heading: 'HEALING ', text: 'dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor' },
    { number: '03', title: 'ADOPTING', icon: <GiftIcon />, heading: 'ADOPTING ', text: 'dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor' },
    { number: '04', title: 'HELPING PEOPLE', icon: <ThumbsUpIcon />, heading: 'HELPING PEOPLE', text: 'dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor' },
  ];

  const informations = [
    { number: '150', icon: <HeartIcon />, text: ['Successful', 'Projects'] },
    { number: '76', icon: <PersonAddIcon />, text: ['Volunteer', 'Reached'] }
  ]

  const volunteers = [
    { name: 'Harish Paliwal', YOE: 18, photo: 'harish.png', role: 'Head volunteer' },
    { name: 'Harish Paliwal', YOE: 18, photo: 'harish.png', role: 'Head volunteer' },
    { name: 'Harish Paliwal', YOE: 18, photo: 'harish.png', role: 'Head volunteer' },

    {name:'Harish Paliwal', YOE:18, photo:'harish.png', role:'head volunteer'},
    {name:'Harish Paliwal', YOE:18, photo:'harish.png', role:'head volunteer'},
    {name:'Harish Paliwal', YOE:18, photo:'harish.png', role:'head volunteer'},

  ]

  return (
    <div>
      {/* <div className=' fixed w-full h-full  bg-black opacity-70 ' /> */}
      {/* <Carousel /> */}
     <PageSpecificHeader name='About Us' />

      {/*
    About
     */}

      <div className=' h-[400px] w-full flex justify-center items-end relative gap-10'>
        {/* <div className="absolute inset-0 bg-gradient-to-r from-transparent via-gray-000 to-gray-100 "></div> */}

        <img src='water1.png' className=' h-[300px]' />
        <div className=' h-full flex justify-center w-[550px] flex-col'>
          <h2 className="text-4xl font-bold mb-3">
            WHO <span className="text-green-500 ">WE ARE?</span>
          </h2>
          <p className="text-gray-600 mb-6 text-[12px]">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor
            invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et
            justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
            ipsum dolor sit amet.
          </p>
          <div className=' flex flex-wrap gap-8 '>
            {features.map((feature) => {
              return (
                <div className=' flex items-center'>
                  <div className="bg-green-500 gap-4 text-white p-4 h-20 w-14 flex flex-col items-center justify-center mr-4">

                    <span className="text-sm mt-1">.{feature.number}</span>
                    {feature.icon}
                  </div>
                  <div>
                    <div className=' text-green-500'>
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

      <div className=' relative h-[200px] w-full'>
        <div className='absolute w-full h-[200px] top-0 left-0 bg-black bg-opacity-80 select-none flex flex-col text-white justify-center items-center ' >
          <div className=' w-full flex justify-center items-center gap-[150px]'>
            {
              informations.map((information) => {
                return (
                  <div className=' flex justify-center items-start gap-7'>
                    <div className=''>
                      <div className=' font-bold text-[30px] p-0 flex justify-end'>
                        {information.number}
                      </div>
                      <div className=' uppercase text-[12px] justify-end flex flex-col items-end'>
                        <div>Successful</div>
                        <div>Projects</div>
                      </div>
                    </div>
                    <div className='mt-[8px]'>
                      <HeartIcon className='size-10' />
                    </div>
                  </div>
                )
              })

            }
          </div>

        </div>
        <img className='w-full h-[200px] object-cover' src={'raj6.jpg'} />
      </div>


      <div className=' relative h-[792.66px] w-full '>
        <div className='absolute w-full z-[1] h-[792.66px] top-0 left-0 bg-white bg-opacity-95 select-none flex flex-col  justify-start items-center ' >
          <div className=' flex flex-col items-center justify-center w-full p-10 gap-4'>
            <div className=' font-bold text-2xl'>OUR <span className=' text-green-500'> VOLUNTEERS</span></div>
            <div className=' w-[60%] text-[12px] text-center'>
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </div>
            <div className=' cursor-pointer py-2 px-4 bg-green-600 text-[14px] text-white hover:rounded-full'>Become a volunteer</div>
            <div className=' flex flex-row flex-wrap gap-14 w-[70%] justify-between mt-12 '>
              {
                volunteers.map((volunteer) => {
                  return (
                    <div className=' w-1/4 flex flex-col text-center gap-5'>
                      <div className=' relative'>
                        <div className=' absolute -z-[1] right-0 -top-5 left-10'>
                          <ProgressRing />
                        </div>
                        <img src={volunteer.photo} className=' w-40 ' />
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
          </div>
        </div>
        <img className=' object-cover   w-full h-[792.66px] -z-10 ' src='raj5.jpg' />
      </div>

    </div>
  )
}

export default About