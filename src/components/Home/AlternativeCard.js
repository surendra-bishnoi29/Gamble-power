import React from 'react';

const AlternativeEnergyCard = () => {
  return (
    <div className="flex relative items-center text-left bg-white/20 backdrop-blur-lg border-b rounded-xl p-6 shadow-lg max-w-[400px]">
      {/* Image Section */}
      <div className="flex-shrink-0">
        <img
          src="alt.jpg" // Replace with the actual image URL
          alt="Solar Energy"
          className="rounded-lg w-[150px] h-[150px] object-cover"
        />
      </div>

      {/* Text Section */}
      <div className="ml-6">
        <h3 className="text-2xl font-semibold text-white">Alternative Energy</h3>
        <p className="mt-2 text-white text-lg">
          Discover the amazing ways solar energy can transform.
        </p>
      </div>
    </div>
  );
};

export default AlternativeEnergyCard;
