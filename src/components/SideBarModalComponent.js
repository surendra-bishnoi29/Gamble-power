import React, { useContext, useEffect, useState } from 'react'
import Modal from './Modal/Modal'
import CloseIcon from '../Icons/CloseIcon'
import { config } from '../Config'
import { classNames } from './utilities/utilityFunctions'
import appRoutes from '../routes/appRoutes'
import SideBarItem from './SideBarItem'
import { ContextApp } from '../ContextAPI'
import PowerIcon from '../Icons/PowerIcon'
import SocialMedia from './SocialMedia'
import WarningPage from './utilities/WarningPage'

function SideBarModalComponent(props) {

    const { setSideBarModal, sideBarModal } = props

    const { loading, setLoading, role, loginModal, setLoginModal, loggedIn, setDonateModal } = useContext(ContextApp);
    const [routes, setRoutes] = useState(appRoutes)
    const [warning, setWarning] = useState(false)

    const toggle = () => {
        setSideBarModal(!sideBarModal)
    }


    const logout = (permitted = false, getWarning = true) => {
        if (getWarning) {
            setWarning(true)
            return
        }
        if (permitted) {
            localStorage.clear();
            window.location.reload();
        }
        setWarning(false)
    }



    const getPermissionToLogout = (c) => {
        logout(c, false)
    }


    useEffect(() => {
        const n_appRoutes = appRoutes.filter((route) => {
            if (!route.role || !route.role.includes(role)) {
                return route; // Skip routes that don't match the user's role
            }
            return route;
        });
        console.log("n_appRoutes in side nav", n_appRoutes)
        setRoutes(n_appRoutes);
        console.log("role in side nav", role)
    }, [role])


    return (
        <>
            {warning ? <WarningPage targetFunction={getPermissionToLogout} warningMsg={'Are you sure you want to logout ?'} /> : ''}

            <Modal toggle={toggle} className={'fixed top-0  lg:hidden left-0 w-full h-full flex justify-end items-start overflow-hidden'}>
                <div className=' fixed right-2 top-2 z-30   w-10/12 max-w-[500px]'>
                    <div className=' scrollable h-[calc(100vh-16px)] overflow-scroll bg-white !pb-20 shadow-xl ring-1 ring-neutral-900/5 rounded-2xl z-[99999] relative'>
                        <div className=' absolute right-2 top-2 p-4'>
                            <div onClick={toggle} className=' cursor-pointer '>
                                <CloseIcon />
                            </div>
                        </div>
                        <div class="rounded-3xl p-10">
                            <strong class="block pb-3 leading-none"><span class="mr-1">🙂</span> Hi there!</strong>
                            <p class="mb-7 text-sm opacity-75">If you need any more information, please feel free to contact us. We are happy to answer any questions you may have.</p>
                            <div class="flex flex-wrap gap-2">
                                <span onClick={() => { setDonateModal(true) }} className='   text-white  opacity-100 bg-gradient-to-r from-green-500 to-green-500 py-2 px-4 text-sm font-medium rounded-full cursor-pointer '>
                                    Donate
                                </span>
                                <a href={`tel:${config.universal_references.phone_number}`}>
                                    <button type="button" class="flex items-center gap-1.5 rounded-full bg-gradient-to-b from-black/5 to-black/10 px-4 py-2 text-sm font-medium">
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M164.9 24.6c-7.7-18.6-28-28.5-47.4-23.2l-88 24C12.1 30.2 0 46 0 64C0 311.4 200.6 512 448 512c18 0 33.8-12.1 38.6-29.5l24-88c5.3-19.4-4.6-39.7-23.2-47.4l-96-40c-16.3-6.8-35.2-2.1-46.3 11.6L304.7 368C234.3 334.7 177.3 277.7 144 207.3L193.3 167c13.7-11.2 18.4-30 11.6-46.3l-40-96z"></path></svg>
                                        Call us
                                    </button>
                                </a>
                                <a href="/contact-us">
                                    <button type="button" class="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-green-500 to-green-500 px-4 py-2 text-sm font-medium text-white">
                                        Contact Us
                                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 448 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"></path>
                                        </svg>
                                    </button>
                                </a>

                            </div>

                        </div>

                        <div class="w-full border-t pb-8">
                            <div class="flex w-full items-center">
                                <div class="w-full px-10 pb-5 pt-[34px] text-sm font-medium leading-none tracking-wide opacity-60">Explore</div>
                            </div>
                            <div className=' px-5'>

                                <div className=" flex  flex-col justify-start sm:gap-0 items-start  z-10  ">

                                    <div className="">
                                        <ul className='flex flex-col justify-center sm:flex-col items- -ml-4 mr-4 mt-2 first:mt-0 '>
                                            {routes.map((route, index) => (
                                                <li key={index} className={classNames(route.state == 'donate' ? ' bg-green-400 pr-1   rounded-full' : 'ml-5')}>
                                                    <SideBarItem setSideBarModal={setSideBarModal} item={route} key={index} showSidebarIcon={true} className={'cursor-pointer text-sm hover:text-green-500 text-gray-900     m-2 rounded-sm pl-2  select-none'} />
                                                </li>
                                            )
                                            )}
                                        </ul>
                                    </div>
                                    {!loggedIn ? <div onClick={() => { setLoginModal(true) }} className=' flex  gap-3 text-sm mt-2 mr-4 cursor-pointer text-gray-900 hover:text-green-400 ml-[21px]'>
                                        <PowerIcon className={'size-5'} />  Login

                                    </div>
                                        :
                                        <div onClick={() => { logout() }} className=' flex  gap-3 text-sm mt-2 mr-4 cursor-pointer text-gray-900 hover:text-green-400 ml-[21px]'>
                                            <PowerIcon className={'size-5'} />  logout
                                        </div>
                                    }
                                </div>



                            </div>
                        </div>
                        <div className="w-full border-t ">
                            <div className="flex w-full items-center">
                                <div className="w-full px-[42px] pb-5 pt-[34px] text-sm font-medium leading-none tracking-wide opacity-60">Stay Connected</div>
                            </div>
                            <div className=' px-[54px]'>
                                <SocialMedia />
                            </div>
                        </div>
                    </div>

                </div>
            </Modal>
        </>
    )
}

export default SideBarModalComponent