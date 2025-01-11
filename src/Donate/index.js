import React, { useContext } from 'react';
import Modal from '../components/Modal/Modal';
import { ContextApp } from '../ContextAPI';
import Card from '../components/utilities/Card';

function Donate() {
  const { donateModal, setDonateModal } = useContext(ContextApp);

  const toggle = () => {
    setDonateModal(!donateModal);
  };

  return (
    <Modal toggle={toggle}>
      <div className='mx-6 my-10 justify-center items-center flex'>
      <Card close={toggle}>
        <div className="flex max-h-[700px] flex-row  overflow-y-auto sm:gap-10 gap-4 max-w-6xl items-center justify-center flex-wrap lg:flex-nowrap lg:justify-center sm:p-1 bg-white ">
          {/* QR Code Section */}
         

          {/* Content Section */}
          <div className="flex flex-col justify-center items-center h-full lg:gap-10">
            {/* Heading */}
            <div className="text-4xl font-bold text-center text-blue-800">
              Donate to Restore Water
            </div>
            {/* Mission Statement */}
            <div className=" justify-center hidden sm:flex items-center h-full text-center text-lg text-gray-600">
              Join our mission to rejuvenate water sources in Rajasthan and bring hope, life, and prosperity to communities in need. Your contribution makes a lasting impact—together, we can make every drop count!
            </div>
            {/* Call to Action */}
            <button
              className="px-6 lg:py-3   font-semibold rounded-lg "
              
            >
              Contribute Now!
            </button>
          </div>

          <div className='w-full flex items-center justify-center'>
          <img
            src="qr.png"
            alt="QR Code"
            className="sm:h-[550px] h-[200px]  "
          />
          </div>
        </div>
      </Card>
      </div>
    </Modal>
  );
}

export default Donate;
