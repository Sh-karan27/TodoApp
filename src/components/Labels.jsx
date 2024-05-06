import React, { useState } from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import { IoIosArrowUp } from 'react-icons/io';
import { FaPlus } from 'react-icons/fa6';
import { FaTag } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';

const Labels = () => {
  const [toggle, setToggle] = useState(true);

  return (
    <section
      className={`w-[90%] relative  ${
        toggle ? 'h-[50px]' : 'h-[200px] '
      }   flex items-center justify-center py-5 px-5 overflow-hidden`}>
      <div className='w-full h-full  flex flex-col items-center justify-start gap-5   rounded-xl '>
        <div className='w-full flex  items-center justify-between'>
          <h1 className='text-[#219ebc]'>Label</h1>
          <div className='flex items-center justify-center gap-1'>
            {toggle ? (
              <IoIosArrowDown
                className='text-[#219ebc] cursor-pointer'
                onClick={() => setToggle(!toggle)}
              />
            ) : (
              <IoIosArrowUp
                className='text-[#219ebc] cursor-pointer'
                onClick={() => setToggle(!toggle)}
              />
            )}
            <FaPlus className='text-[#219ebc]' />
          </div>
        </div>

        <div className=' w-full overflow-y-scroll   grid grid-cols-2 gap-5 '>
          <div className=' flex  items-center justify-between bg-[#26304A] px-1 py-1 rounded-md '>
            <div className=' flex items-center justify-center gap-1'>
              <FaTag className='text-white' />
              <h1 className='text-white'>Sport</h1>
            </div>
            <div className='bg-white p-2 rounded-full'></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Labels;
