import React from 'react';

import UserImg from '../assets/UserImg.jpg';
import { CiSearch } from 'react-icons/ci';
const Footer = () => {
  return (
    
    <section className='bg-[#26304A] w-full  py-2 px-5  flex items-center justify-between'>
      <div className='flex flex-col items-start justify-center gap-2 '>
        <img src={UserImg} alt='userImg' className='w-10 rounded-full' />
        <div className='flex flex-col items-start justify-center '>
          <span className='text-sm text-white'>User Name</span>
          <span className='text-sm text-gray-500'>
            shuklakaran107@gmail.com
          </span>
        </div>
      </div>
      <CiSearch className=' text-xl text-white cursor-pointer' />
    </section>
  );
};

export default Footer;
