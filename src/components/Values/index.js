import React from 'react';
import ValueCard from './ValueCard';
import BulbIcon from '../../Icons/BulbIcon';
import LeafIcon from '../../Icons/LeafIcon';
import MagnifyingGlassIcon from '../../Icons/MagnifyingGlassIcon';
import GearsIcon from '../../Icons/GearsIcon';
import BadgeIcon from '../../Icons/BadgeIcon';

function Values() {
  const ValueList = [
    { value: 'Innovation', icon: <BulbIcon className={'size-6'} />, description: 'Constantly pushing the boundaries to deliver state-of-the-art energy solutions.' },
    { value: 'Sustainability', icon: <LeafIcon className={'size-6'} />, description: 'Commitment to promoting renewable energy to reducethe carbon footprint.' },
    { value: 'Customer Focus', icon: <MagnifyingGlassIcon className={'size-6'} />, description: 'Building long-lasting relationships through reliable and customized services.' },
    { value: 'Integrity', icon: <GearsIcon className={'size-7'} />, description: 'Upholding transparency, ethical practices, and accountability in all our endeavours.' },
    { value: 'Excellence', icon: <BadgeIcon className={'size-6'} />, description: 'Continuously striving for quality and precision in everything we do.' },
  ];

  return (
    <div className="relative bg-[#e2efe4] rounded-2xl flex flex-col p-16 justify-center items-center"> 
      <div className="px-5 py-1 bg-lime-100 w-fit text-lg rounded-full mb-6">OUR VALUES</div>
      <div className="flex justify-evenly flex-wrap gap-10 items-center">
        {ValueList.map((item, index) => {
          return <ValueCard key={index} value={item.value} icon={item.icon} description={item.description} />;
        })}
      </div>
    </div>
  );
}

export default Values;
