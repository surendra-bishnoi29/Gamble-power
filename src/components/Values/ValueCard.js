import React from 'react';

const ValueCard = (props) => {
  const { value, description, icon } = props;

  return (
    <div className="max-w-sm relative bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Top Section with Fading Background */}
      <div className="relative h-40">
        <img
          className="absolute w-full h-full object-cover"
          src="https://jaljivnam.s3.ap-south-1.amazonaws.com/gamble-dump/public/badal.png"
          alt="Background"
        />
        {/* Gradient Overlay for Fade Effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/20 to-white"></div>
        <div className="absolute top-4 left-4 bg-green-900 w-12 h-12 rounded-full flex items-center justify-center">
          {/* Icon */}
          {icon}
        </div>
      </div>

      {/* Text Section */}
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900">{value}</h3>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
    </div>
  );
};

export default ValueCard;
