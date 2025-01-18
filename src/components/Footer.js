import React from 'react';
import Logo from './Logo';
import SocialMedia from './SocialMedia';
import { useNavigate } from 'react-router-dom'


const Footer = () => {

    const navigate = useNavigate();

    const exploreLinks = [
        {
            title: 'Home',
            link: '/',
        },
        {
            title: 'About Us',
            link: '#about',
        },
        // {
        //     title: 'Projects',
        //     link: '/projects',
        // },
        // {
        //     title: 'Events',
        //     link: '/events',
        // },
        {
            title: 'Contact Us',
            link: '#contact',
        },
    ]


    const gotoRoutes = (link) => {
        navigate(link)
    }

    return (
        <footer className=" relative bg-gray-900 bg-opacity-40  text-gray-300 text-sm  ">
            <img className=' object-cover absolute w-full h-full -z-10' src='https://jaljivnam.s3.ap-south-1.amazonaws.com/gamble-dump/public/footer.jpg' />
            <div className="container mx-auto px-4 pt-12 flex justify-center items-center">
                <div className="grid grid-cols-1 w-[1000px] lg:grid-cols-3 md:grid-cols-2 gap-8 justify-items-center items-center ">
                    {/* Logo and Description */}
                    <div className="col-span-1">
                        <div className="flex justify-center md:justify-start items-center mb-4">
                            {/* <Heart className="text-red-500 mr-2" /> */}
                            {/* <span className="text-white text-xl font-bold">JAL JIVANAM</span> */}
                            <div className='flex justify-center items-center gap-1'>
                                <Logo className='w-14 h-14' />
                                <div className=' font-bold text-white text-3xl'>
                                    Gamble Power
                                </div>
                            </div>
                        </div>
                        <p className="text-sm mb-4 ">
                            Gamble Power is a leading provider of solar energy solutions, dedicated to empowering individuals and businesses with clean, renewable energy. We believe in the power of solar energy to transform lives and communities.
                        </p>
                        <button className="text-yellow-500  flex items-center">
                            <div className='cursor-pointer' onClick={() => gotoRoutes('#about')}>  Read More <span className="ml-1">&gt;</span> </div>
                        </button>
                    </div>

                    {/* Explore Links */}
                    <div className="col-span-1 lg:block hidden">
                        <h3 className="text-white text-lg font-semibold mb-4">Explore</h3>
                        <ul className="space-y-2">
                            {exploreLinks.map((item) => (
                                <li key={item.title}>
                                    <div onClick={() => gotoRoutes(item.link)} className="hover:text-white cursor-pointer transition-all duration-300">
                                        {item.title}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Links */}
                    {/* <div className="col-span-1">
                        <h3 className="text-white text-lg font-semibold mb-4">Links</h3>
                        <ul className="space-y-2">
                            {['Podcasts', 'Privacy Policy', 'Videos', 'Terms Of Use', 'Blog Posts'].map((item) => (
                                <li key={item}>
                                    <a href="#" className="hover:text-white transition-colors duration-300">
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div> */}

                    {/* Subscribe */}
                    <div className="col-span-1 w-full sm:flex sm:justify-evenly sm:items-center  md:block">
                        <div>
                            <h3 className="text-white text-lg font-semibold mb-4">Subscribe</h3>
                            <div className="flex mb-4">
                                <input
                                    type="email"
                                    placeholder="Enter Your Email Address"
                                    className="bg-gray-800 border-0 outline-none text-white px-4 py-2 rounded-l-md flex-grow"
                                />
                                <button className="bg-green-500 text-white px-4 py-2 rounded-r-md">
                                    {/* <Mail size={20} /> */}
                                    <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 512 512"><path fill="#ffffff" d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z" /></svg>
                                </button>
                            </div>
                        </div>
                        <div className=' sm:block hidden'>
                            <p className="text-sm mb-6">Get latest updates.</p>
                            <div>
                                <SocialMedia />
                            </div>
                        </div>
                        {/* <div className="flex space-x-4">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 512 512"><path fill="#1053c6" d="M512 256C512 114.6 397.4 0 256 0S0 114.6 0 256C0 376 82.7 476.8 194.2 504.5V334.2H141.4V256h52.8V222.3c0-87.1 39.4-127.5 125-127.5c16.2 0 44.2 3.2 55.7 6.4V172c-6-.6-16.5-1-29.6-1c-42 0-58.2 15.9-58.2 57.2V256h83.6l-14.4 78.2H287V510.1C413.8 494.8 512 386.9 512 256h0z" /></svg>
                            </span>
                            <span>
                            
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 448 512"><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm297.1 84L257.3 234.6 379.4 396H283.8L209 298.1 123.3 396H75.8l111-126.9L69.7 116h98l67.7 89.5L313.6 116h47.5zM323.3 367.6L153.4 142.9H125.1L296.9 367.6h26.3z" /></svg>
                            </span>
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 448 512"><path fill="#1459d2" d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" /></svg>
                            </span>

                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-6' viewBox="0 0 448 512"><path fill="#e93363" d="M194.4 211.7a53.3 53.3 0 1 0 59.3 88.7 53.3 53.3 0 1 0 -59.3-88.7zm142.3-68.4c-5.2-5.2-11.5-9.3-18.4-12c-18.1-7.1-57.6-6.8-83.1-6.5c-4.1 0-7.9 .1-11.2 .1c-3.3 0-7.2 0-11.4-.1c-25.5-.3-64.8-.7-82.9 6.5c-6.9 2.7-13.1 6.8-18.4 12s-9.3 11.5-12 18.4c-7.1 18.1-6.7 57.7-6.5 83.2c0 4.1 .1 7.9 .1 11.1s0 7-.1 11.1c-.2 25.5-.6 65.1 6.5 83.2c2.7 6.9 6.8 13.1 12 18.4s11.5 9.3 18.4 12c18.1 7.1 57.6 6.8 83.1 6.5c4.1 0 7.9-.1 11.2-.1c3.3 0 7.2 0 11.4 .1c25.5 .3 64.8 .7 82.9-6.5c6.9-2.7 13.1-6.8 18.4-12s9.3-11.5 12-18.4c7.2-18 6.8-57.4 6.5-83c0-4.2-.1-8.1-.1-11.4s0-7.1 .1-11.4c.3-25.5 .7-64.9-6.5-83l0 0c-2.7-6.9-6.8-13.1-12-18.4zm-67.1 44.5A82 82 0 1 1 178.4 324.2a82 82 0 1 1 91.1-136.4zm29.2-1.3c-3.1-2.1-5.6-5.1-7.1-8.6s-1.8-7.3-1.1-11.1s2.6-7.1 5.2-9.8s6.1-4.5 9.8-5.2s7.6-.4 11.1 1.1s6.5 3.9 8.6 7s3.2 6.8 3.2 10.6c0 2.5-.5 5-1.4 7.3s-2.4 4.4-4.1 6.2s-3.9 3.2-6.2 4.2s-4.8 1.5-7.3 1.5l0 0c-3.8 0-7.5-1.1-10.6-3.2zM448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM357 389c-18.7 18.7-41.4 24.6-67 25.9c-26.4 1.5-105.6 1.5-132 0c-25.6-1.3-48.3-7.2-67-25.9s-24.6-41.4-25.8-67c-1.5-26.4-1.5-105.6 0-132c1.3-25.6 7.1-48.3 25.8-67s41.5-24.6 67-25.8c26.4-1.5 105.6-1.5 132 0c25.6 1.3 48.3 7.1 67 25.8s24.6 41.4 25.8 67c1.5 26.3 1.5 105.4 0 131.9c-1.3 25.6-7.1 48.3-25.8 67z" /></svg>
                            </span>
                        </div> */}
                    </div>
                </div>
            </div>
            <div className="mt-2 mb-5 py-4 border-t border-gray-800 text-center text-sm ">
                © 2025 Gamble Power,  All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;