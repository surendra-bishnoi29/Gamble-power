import React from "react";

const LOGOS = [
    <img src='kcc.png' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='lnt.webp' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='adani.png' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='Rays.png' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c1.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c2.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c3.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c4.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c5.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c6.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c8.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c9.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    // Duplicate set for continuous scrolling
    <img src='kcc.png' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='lnt.webp' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='adani.png' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='Rays.png' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c1.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c2.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c3.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c4.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c5.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c6.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c8.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
    <img src='c9.jpeg' className="w-20 h-20 md:w-28 md:h-28 lg:w-36 lg:h-36 object-contain" />,
];

export const InfiniteSlider = () => {
    return (
        <div className="relative m-auto w-full overflow-hidden bg-white before:absolute before:left-0 before:top-0 before:z-[2] before:h-full before:w-[50px] md:before:w-[100px] before:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] before:content-[''] after:absolute after:right-0 after:top-0 after:z-[2] after:h-full after:w-[50px] md:after:w-[100px] after:-scale-x-100 after:bg-[linear-gradient(to_right,white_0%,rgba(255,255,255,0)_100%)] after:content-['']">
            <div className="animate-infinite-slider flex gap-3 md:gap-5 my-3 md:my-5 w-[calc(200px*24)] md:w-[calc(250px*24)]">
                {LOGOS.map((logo, index) => (
                    <div 
                        key={index} 
                        className="flex slide p-2 md:p-4 lg:p-6 bg-white rounded-lg"
                    >
                        {logo}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default InfiniteSlider;