import React, { useState, useEffect } from 'react';



function Carousel(props) {
    const {images} = props
    const [currentIndex, setCurrentIndex] = useState(0);


    useEffect(() => {
       
        const interval = setInterval(() => {
            nextSlide();
            //console.log("current index : ", currentIndex)
        }, 1000); // 3 seconds interval

        return () => clearInterval(interval);// Clear interval on component unmount
    }, [currentIndex]); // Update interval when the currentIndex changes

    //   const nextSlide = () => {
    //     setCurrentIndex((prevIndex) =>
    //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
    //     );
    //   };


    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex >= images.length - 1 ? 0 : prevIndex + 1
        );

    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        );
    };

    return (
        <div>
           
        <div className="relative w-full h-full flex justify-center items-center">
            {/* Previous Arrow */}
            { (images.length>1) && <button
                onClick={prevSlide}
                className="absolute z-[3] left-0 text-white bg-gray-400 bg-opacity-50 py-4 hover:bg-slate-500 "
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>

            </button>}

            {/* Carousel Images */}
            <div className=' absolute w-full  z-[2]  bg-black opacity-60 ' />
            <div className="w-full  overflow-hidden">
                {(images.length>0) ?<img
                    src={images[currentIndex]}
                    alt="carousel"
                    className="w-full h-[236px]  object-cover  transition duration-700 ease-in-out"
                    style={{ transform: 'translateX(0)' }}
                />
                :
                <img
                    src='blank_scenary.png'
                    alt="image"
                    className="w-full h-[236px]  object-cover  transition duration-700 ease-in-out"
                    style={{ transform: 'translateX(0)' }}
                />
            
            }
            </div>

            {/* Next Arrow */}
            {(images.length>1) && <button
                onClick={nextSlide}
                className="absolute right-0  z-[3]  text-white bg-gray-400 bg-opacity-50 py-4 hover:bg-slate-500 "
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>

            </button>}

            {/* Indicators */}
            {/* <div className="absolute bottom-5 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-4 h-4 bg-white rounded-full ${index === currentIndex ? 'opacity-100' : 'opacity-50'
                            }`}
                    />
                ))}
            </div> */}
        </div>
        </div>
    );
}

export default Carousel;