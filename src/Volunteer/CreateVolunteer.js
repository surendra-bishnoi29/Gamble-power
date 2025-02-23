import React, { useEffect, useState } from 'react'
import Modal from '../components/Modal/Modal'
import Input from '../components/utilities/Input'
import Card from '../components/utilities/Card'
import DateTimePicker from '../components/utilities/DateTimePicker'
import TextArea from '../components/utilities/TextArea'
import moment from "moment/moment";
import ImageInputPills from '../components/utilities/ImageInputPills'
import { v4 as uuidv4 } from "uuid";
import { ensureUrlSafety, getExtension, removeQueryParameters } from '../components/utilities/utilityFunctions'
import { getPresignedUrl } from '../Actions/UploadFilesActions'
import { createProject, getProjectById, updateProject } from '../Actions/projectActions'
import Notification from '../Notification';
import { Toaster, ToastIcon, toast, resolveValue } from "react-hot-toast";
import { registerVolunteer } from '../Actions/volunteerActions'
import BlueTick from './BlueTick'

function CreateVolunteer(props) {
  const { onClose, message, disabled = false, mode = 'Create', projectId, toggleReload, setToggleReload } = props

  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [email, setEmail] = useState('');
  const [mobile, setMobile] = useState('');
  const [errorMsg, setErrorMsg] = useState('')
  const [successMsg, setSuccessMsg] = useState('')
  const [loading, setLoading] = useState(false)


  const notification = (msg, type) => {
    return toast[type](msg);
  }




  const uploadFile = async (file, url) => {

    const res = await fetch(url, { method: 'PUT', body: file });
    //console.log(res)

    return res;
  }







  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setErrorMsg('')
    // notification("created", "success")

    const data = {
      name: name.trim(),
      address: address.trim(),
      mobile: mobile.trim(),
      email: email.trim()
    }

    const res = await registerVolunteer(data)

    if (res.status) {
      //console.log("success")
      setSuccessMsg("success")
    }else{
      setErrorMsg(res?.error ?? "Something went wrong")
    }
    setLoading(false)
  }

  const handleRegisterAgain = () =>{
    setSuccessMsg('')
    setErrorMsg('')
    setName('')
    setAddress('')
    setEmail('')
    setMobile('')
  }





  return (
    <>
      {successMsg ?
       ( <div>
          <BlueTick />
          {/* Thank You Message */}
          <div className="text-center mb-10 mt-4">
            <div className="text-lg font-semibold space-y-2">
              Thank you for registering with us! 🌟
            </div>
            <div className="text-sm text-gray-600">
              We’ve received your information and will be in touch with you soon. Stay tuned! 😊
            </div>
            <button
        onClick={handleRegisterAgain}
        className="mt-6 px-6 py-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
      >
        Register Again
      </button>
          </div>
         
          
        </div>)
        :
       ( <form onSubmit={handleSubmit}>
          <div className=' flex flex-col justify-center items-center'>
            <div className='  text-[25px]'>If you wondered volunteering, </div>
            <div className='  text-[25px]'>please fulfill</div>
          </div>
          <div className=' mt-10 flex flex-col gap-4 sm:p-0 p-6'>
            <div className=' flex flex-wrap gap-5'>
              <Input id='Name' width=' w-full sm:w-auto lg:w-[280px]' rounded='rounded-none' value={name} onChange={setName} disabled={disabled} required={true} />
              <Input id='Mobile' width=' w-full sm:w-auto lg:w-[280px]' rounded='rounded-none' value={mobile} onChange={setMobile} disabled={disabled} required={true} />
              <Input id='Email' width=' w-full sm:w-auto lg:w-[280px]' rounded='rounded-none' value={email} onChange={setEmail} disabled={disabled} required={false} />
            </div>
            <div>
              <TextArea id='Address' rounded='rounded-none' value={address} onChange={setAddress} disabled={disabled} required={false} />
            </div>
            {errorMsg && <div className=' text-red-600 text-[14px] flex  gap-1 flex-row items-center '> 
              <div className='flex-row items-center justify-center'> * </div> 
              <div className='flex-row items-center justify-center'> {errorMsg}</div>
              </div>}
            <div className='flex justify-center mt-4 mb-8'>
              <button type="submit" className="bg-green-500 disabled:hover:bg-green-500 hover:bg-green-700 hover:rounded-full text-white font-bold py-2 px-4 " disabled={loading || disabled} >{loading?'Sending...':'Send now'}</button>
            </div>
          </div>

        </form>)
      }
    </>
  )
}

export default CreateVolunteer