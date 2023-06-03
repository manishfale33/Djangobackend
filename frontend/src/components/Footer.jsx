import React from 'react';
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300 dark:bg-gray-800 dark:text-white'>
      <div className='flex flex-col justify-between'>
        <div>
          <h1 className='w-full text-3xl font-bold text-[#38bdf8]'>MUNity Blogs</h1>
          <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
        </div>
        <div className='flex justify-between md:w-[75%] my-6'>
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
          <h6 className='font-medium text-gray-500'>Support</h6>
          <ul>
            <li className='py-2 text-sm'>Terms Of Use</li>
            <li className='py-2 text-sm'>Privacy Policy</li>
            <li className='py-2 text-sm'>Creators Term</li>
          </ul>
        </div>
      </div>
      <div className='flex flex-col justify-between'>
        <div>
        <h6 className='font-medium text-gray-500'>Subscribe to read blogs</h6>
          <input
            type='email'
            placeholder='Enter your email'
            className='py-2 px-4 mt-2 rounded-md border border-gray-400 focus:outline-none focus:ring-2 focus:ring-[#38bdf8] dark:bg-gray-700 dark:text-white'
          />
          <button className='bg-[#38bdf8] py-2 px-4 mt-2 rounded-md text-white'>Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;