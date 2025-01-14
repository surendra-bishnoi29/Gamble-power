import React from 'react'

function InfoCards(props) {
    const {data, type, description} = props
  return (
    <div className=' flex justify-center item-center text-left flex-col rounded-2xl bg-blue-12   backdrop-blur-xl text-black p-7 max-w-[380px] gap-8'>
        <div className=' flex items-center gap-2'>
            <div className=' text-[40px] font-[700]'>{data}</div>
            <div className=' italic mt-5  text-xl'>{type}</div>
        </div>
        <div>
            {description}
        </div>
    </div>
  )
}

export default InfoCards