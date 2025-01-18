import React from 'react';

const AlternativeEnergyCard = () => {
  return (
    <div className="flex flex-col sm:flex-row relative items-center text-left bg-white/20 backdrop-blur-lg border-b rounded-xl p-4 sm:p-6 shadow-lg w-full max-w-[400px]">
      {/* Image Section */}
      <div className="flex-shrink-0 w-full sm:w-auto mb-4 sm:mb-0">
        <img
          src="https://jaljivnam.s3.ap-south-1.amazonaws.com/gamble-dump/public/alt.jpg"
          alt="Solar Energy"
          className="rounded-lg w-full sm:w-[120px] md:w-[150px] h-[200px] sm:h-[120px] md:h-[150px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="sm:ml-4 md:ml-6 text-center sm:text-left">
        <h3 className="text-xl sm:text-2xl font-semibold text-white">
          Alternative Energy
        </h3>
        <p className="mt-2 text-white text-base sm:text-lg">
          Discover the amazing ways solar energy can transform.
        </p>
      </div>
    </div>
  );
};

export default AlternativeEnergyCard;