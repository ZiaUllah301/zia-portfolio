import React from 'react'
// import  second from "../assets/portfolio/zia.JPG";
import {MdOutlineKeyboardArrowRight} from "react-icons/md"
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <div name='Home' className='h-screen w-full bg-white'>
      <div className=' max-w-screen-lg mx-auto flex flex-col
      items-center justify-center h-full px-4 md:flex-row'>
        <div className='flex flex-col justify-center h-full'>
          <h2 className='text-4xl sm:text-7xl font-bold '>
            I'm a Full stack Developer
          </h2>
          <p className=' text-gray-500 py-4 max-w-md'>
            I have a little Experience of building and
             designing software.
             Currently, I love to work on web application using
             technologies like
             React, Tailwind, HTML5 and Django.
          </p>
          <div>
            <Link to='Portfolio' smooth duration={500} className='group text-white w-fit px-6 py-3 mx-2
            flex items-center rounded-md bg-gradient-to-r
             from-cyan-500 to-blue-500 cursor-pointer'>
              Portfolio
              <span className='group-hover:rotate-90 duration-300'> 
                <MdOutlineKeyboardArrowRight size={25} className='ml-1'/>
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img className=' w-2/3 rounded-2xl mx-auto max-w-3xl' 
          src='zia.JPG' alt='My Profile'
           ></img>
        </div>
      </div>
      
    </div>
  )
}

export default Home;