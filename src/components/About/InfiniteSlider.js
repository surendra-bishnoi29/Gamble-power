import React from "react";

const LOGOS = [
    
    // <img src='rayexp.svg' className=" w-36  h-36 object-fit" />,
    // <img src='renew.svg' className="" />,
    
    <img src='kcc.png' className=" w-36 h-36" />,
    <img src='lnt.webp' className=" w-36  h-36 object-fit" />,
    <img src='adani.png' className=" w-36  h-36 object-fit" />,
    <img src='Rays.png' className=" w-36  h-36 object-fit" />,
    <img src='c1.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c2.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c3.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c4.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c5.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c6.jpeg' className=" w-36  h-36 object-fit" />,
    // <img src='c7.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c8.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c9.jpeg' className=" w-36  h-36 object-fit" />,

    <img src='kcc.png' className=" w-36 h-36" />,
    <img src='lnt.webp' className=" w-36  h-36 object-fit" />,
    <img src='adani.png' className=" w-36  h-36 object-fit" />,
    <img src='Rays.png' className=" w-36  h-36 object-fit" />,
    <img src='c1.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c2.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c3.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c4.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c5.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c6.jpeg' className=" w-36  h-36 object-fit" />,
    // <img src='c7.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c8.jpeg' className=" w-36  h-36 object-fit" />,
    <img src='c9.jpeg' className=" w-36  h-36 object-fit" />,
  ];

export const InfiniteSlider = () => {
    return (
      <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
        <div className="animate-infinite-slider   gap-5 my-5 flex w-[calc(250px*30)]">
          {LOGOS.map((logo, index) => (
           
            
            <div key={index} className="flex slide   p-6 bg-white  rounded-lg   ">
              {logo}
            </div>
           
          ))}
          {/* {LOGOS.map((logo, index) => (
           
            
           <div key={index} className="flex slide  max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow  ">
             {logo}
           </div>
          
         ))} */}
        </div>
      </div>
    );
  };