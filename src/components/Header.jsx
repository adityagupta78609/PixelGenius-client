import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from "../assets"
// import {BrowserRouter as Browser , Link , Route , Routes } from 'react-router-dom';
import CreatePost from '../pages/CreatePost'
const Header = () => {
  return (
    <div>

    <div className='flex justify-between w-full items-center bg-gray-500 sm:px-8 px-4 py-8 border-b border-b-[#e6ebf4]'>
      <Link to="/">
        <img src={logo} alt="logo" className='w-28 object-contain' />
      </Link>
      <Link to="/create-post" className='bg-[#6469ff] text-white px-4 py-2 font-inter font-medium rounded-md border-2 border-blue-200 hover:bg-blue-200 hover:text-black' >
        create
      </Link>
    </div>

 
    </div>
  )
}

export default Header
