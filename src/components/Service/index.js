import React from 'react'
import SolutionCard from './SolutionCard'

function Services() {
    const serviceList = [
        {title: 'Solar Power Plant EPC (Engineering, Procurement, Construction)', image:'s1.jpg', description: 'Comprehensive end-to-end solutions for solar power plant development, including design, procurement, and construction.'},
        {title: 'Operations and Maintenance (O&M)', image:'onm.avif', description: 'Long-term maintenance services ensuring optimal performance and efficiency of solar power plants.'},
        {title: 'Consultancy for Solar Power Development', image:'consultancy.jpg', description: 'Expert advisory services for the design and execution of solar power infrastructure.'},
        {title: 'Operation & Maintenance of Grid Substations', image:'grid.jpg', description: 'Managing the smooth operation and maintenance of grid substations to ensure uninterrupted power distribution.'},
        {title: 'Transmission & Distribution Infra Development', image:'transmission.jpg', description: 'Development of robust transmission and distribution infrastructure for efficient power transmission.'},
        {title: 'Electrical Fault Rectification', image:'fault-check.jpg', description: 'Specialized in resolving electrical faults under government contracts, ensuring the reliability of electrical infrastructure'},
    ]
  return (
    <div className=' flex flex-col justify-center  w-full gap-5'>
        <div>
        <div className=' px-5 py-1 bg-lime-100 w-fit text-lg rounded-full mb-6'>SERVICE</div>
        </div>

        <div className=' flex justify-between items-center mb-12'>
            <div className=' text-3xl font-[700]'>
            Our Solar Solutions
            </div>
            <div className='text-lg mr-6'>
            We believe in the power of solar energy <br /> to transform lives and communities.
            </div>
        </div>

        <div className=' w-full flex justify-evenly flex-wrap gap-10  '>
           
           {serviceList.map((item)=>
            <SolutionCard title={item.title} image={item.image} description={item.description} />
           )}
        </div>
    </div>
  )
}

export default Services