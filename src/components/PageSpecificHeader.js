import React from 'react'

function PageSpecificHeader(props) {
    const {name} = props
  return (
    <div className=' relative'>
        <div className='absolute w-full h-[350px] top-0 left-0 bg-black bg-opacity-75 select-none flex flex-col text-white justify-end items-center '>
          <hr className='w-[60%] bg-gray-500 h-[0.5px] border-0' />
          <span className=' text-xl py-8 font-bold w-[55%]'>{name}</span>

        </div>
        <img src='rajTour.jpg' className=' h-[350px] w-full -z-10' />
      </div>
  )
}

export default PageSpecificHeader