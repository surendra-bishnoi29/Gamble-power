import React from 'react';

const SatisfiedClients = () => {
    return (
        <div className="flex flex-col justify-between bg-white/20 backdrop-blur-lg border-b  rounded-xl px-6 pt-8 pb-9 shadow-lg max-w-[200px] text-center relative">
            {/* Avatar Group */}
            <div className="flex justify-center -space-x-4">
                <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                    alt="Client 1"
                />
                <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-2.jpg"
                    alt="Client 2"
                />
                <img
                    className="w-10 h-10 border-2 border-white rounded-full"
                    src="https://flowbite.com/docs/images/people/profile-picture-3.jpg"
                    alt="Client 3"
                />
                <div className="flex items-center justify-center w-10 h-10 text-sm font-medium text-white bg-gray-700 border-2 border-white rounded-full">
                    80+
                </div>
            </div>

            {/* Text Section */}
            <div className="mt-6 text-left">
                <h3 className="text-white  ">
                    Our 200+ <br /> satisfied clients <br /> worldwide
                </h3>
            </div>

            {/* Decorative Element */}
            <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-lime-400 opacity-75 blur-[2px]"></div>
        </div>
    );
};

export default SatisfiedClients;
