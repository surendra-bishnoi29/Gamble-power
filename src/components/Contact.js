import React, { useState, useEffect } from 'react'
import PageSpecificHeader from './PageSpecificHeader'
import MailIcon from '../Icons/MailIcon'
import PhoneIcon from '../Icons/PhoneIcon'
import LocationPinIcon from '../Icons/LocationPinIcon'
import Input from './utilities/Input'
import TextArea from './utilities/TextArea'
import { useLocation } from 'react-router-dom';
import CreateVolunteer from '../Volunteer/CreateVolunteer'
import { config } from '../Config'

function Contact() {

  const { hash } = useLocation();

  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [disabled, setDisabled] = useState(false);
  const [address, setAddress] = useState('');

 

  useEffect(() => {
    // Scroll to top first if you want
    window.scrollTo(0, 0);

    // If there's a hash in the URL, try to scroll to that element
    if (hash) {
     
      const element = document.getElementById(hash.replace('#', ''));
      console.log("i got hash ", element)
      if (element) {
        // For smooth scrolling:
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, [hash]);


  const contactInfo = [
    {
      icon: <PhoneIcon />,
      type: 'Call us',
      value: config.universal_references.phone_number,
      url: `tel:${config.universal_references.phone_number}`
    },
    {
      icon: <MailIcon />,
      type: 'Email us',
      value: config.universal_references.email,
      url: `mailto:${config.universal_references.email}`
    },
    {
      icon: <LocationPinIcon />,
      type: 'Address',
      value: config.universal_references.address,
      
    }
  ]

  // useEffect(() => {
  //   scrollToTop();
  // }, [])

  // const scrollToTop = () => {
  //   window.scrollTo(0, 0);
  // };

  

  return (
    <div>
      <PageSpecificHeader name='Contact Us' />
      <div className=' relative w-full h-[250px] flex flex-col items-center '>
        <div className='absolute  inset-0  bg-gray-300'>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14171.957597229624!2d72.33879086822171!3d27.376046471982512!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3940986999c5368f%3A0xd05bdfe1a1307ee2!2sBap%2C%20Rajasthan%20342307!5e0!3m2!1sen!2sin!4v1734771540898!5m2!1sen!2sin"
            width="100%"
            height="250"

            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">

          </iframe>
          
        </div>
      </div>
      <div className=' relative w-full flex lg:justify-between lg:gap-0 gap-10 justify-evenly flex-wrap p-4 lg:p-7'>
        <div className=' min-w-[100px] lg:w-[350px] flex justify-end '>
          <div className='flex flex-col w-[250px] sm:text-left text-center '>
            <div className=' text-[30px] text-gray-500 font-light '>Contact Us, cause</div>
            <div className='-mt-3'>
              <div className=' text-[40px]'>They</div>
              <div className=' -mt-3  text-[40px] font-bold'>NEED</div>
              <div className=' -mt-3  text-[40px]'>your</div>
              <div className=' -mt-3  text-[40px] font-bold text-green-500'>HELP...</div>
            </div>
          </div>
        </div>
        <div>
        <div className='  lg:flex hidden z-40  justify-center'>
            <img src='raj10.png' className='w-[290px] -mt-24   h-[300px]  object-cover' />
          </div>
        </div>
        <div className=' min-w-[100px] lg:w-[310px] flex justify-center flex-col'>
          <div className=' text-[22px] text-gray-500 ml-44 mb-2 '>Contact info:</div>
          <div className='flex flex-col gap-5'>
            {
              contactInfo.map((info, index) => {
                return (

                  <a id={`${index}`} href={info?.url}  className='flex gap-5'>
                    <div className=' w-[250px]  flex flex-col items-end'>
                      <div>{info.value}</div>
                      <div className=' text-[12px]' >{info.type}</div>
                    </div>
                    <div>
                      {info.icon}
                    </div>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
      <div id='add-volunteer' className='w-full mt-4 flex justify-center items-center flex-col '>
       
       <CreateVolunteer />
      </div>

    </div>
  )
}

export default Contact