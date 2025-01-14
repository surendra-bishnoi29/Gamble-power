import React from 'react';

function SolutionCard(props) {
    const {title, image , description} = props
  return (
    <div className="relative w-[400px] overflow-hidden rounded-3xl group">
      {/* Gradient Overlay */}
      <div className="absolute w-[400px] flex flex-col justify-end p-5 text-white h-[300px] bg-gradient-to-t from-black/90 to-black/5 transition-all duration-300 ease-in-out">
        {/* Title */}
        <div className="text-xl font-[600] transition-transform duration-300 ease-in-out ">
          {title}
        </div>
        {/* Description */}
        <div className="mt-2 opacity-0  h-[0px] group-hover:h-[100px] translate-y-10 transition-all duration-300 ease-in-out group-hover:block group-hover:opacity-100 group-hover:translate-y-0">
          {description}
        </div>
      </div>

      {/* Background Image */}
      <div>
        <img src={image} className="w-[400px] h-[300px]" alt="Solar Power Plant" />
      </div>
    </div>
  );
}

export default SolutionCard;
