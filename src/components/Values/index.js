import React from 'react';
import ValueCard from './ValueCard';
import BulbIcon from '../../Icons/BulbIcon';
import LeafIcon from '../../Icons/LeafIcon';
import MagnifyingGlassIcon from '../../Icons/MagnifyingGlassIcon';
import GearsIcon from '../../Icons/GearsIcon';
import BadgeIcon from '../../Icons/BadgeIcon';

function Values() {
  const ValueList = [
    { 
      value: 'Innovation', 
      icon: <BulbIcon className={'size-5 sm:size-6'} />, 
      description: 'Constantly pushing the boundaries to deliver state-of-the-art energy solutions.' 
    },
    { 
      value: 'Sustainability', 
      icon: <LeafIcon className={'size-5 sm:size-6'} />, 
      description: 'Commitment to promoting renewable energy to reducethe carbon footprint.' 
    },
    { 
      value: 'Customer Focus', 
      icon: <MagnifyingGlassIcon className={'size-5 sm:size-6'} />, 
      description: 'Building long-lasting relationships through reliable and customized services.' 
    },
    { 
      value: 'Integrity', 
      icon: <GearsIcon className={'size-6 sm:size-7'} />, 
      description: 'Upholding transparency, ethical practices, and accountability in all our endeavours.' 
    },
    { 
      value: 'Excellence', 
      icon: <BadgeIcon className={'size-5 sm:size-6'} />, 
      description: 'Continuously striving for quality and precision in everything we do.' 
    },
  ];

  return (
    <div className="relative bg-[#e2efe4] rounded-xl sm:rounded-2xl flex flex-col p-4 sm:p-8 md:p-12 lg:p-16 justify-center items-center">
      {/* Values Badge */}
      <div className="px-3 sm:px-5 py-1 bg-lime-100 w-fit text-base sm:text-lg rounded-full mb-4 sm:mb-6">
        OUR VALUES
      </div>
      
      {/* Values Flex Container */}
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-4 lg:gap-10 w-full max-w-[1400px]">
        {ValueList.map((item, index) => (
          <div key={index} className="w-full sm:w-[calc(50%-12px)] max-w-[384px] sm:max-w-full lg:w-[calc(33.333%-28px)]">
            <ValueCard 
              value={item.value} 
              icon={item.icon} 
              description={item.description} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Values;