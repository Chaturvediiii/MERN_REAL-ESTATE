import React from 'react'
import {FaSearch} from 'react-icons/fa'

export default function Properties() {
  return (
      <form className='bg-white p-2 rounded-lg w-100 mx-8 flex items-center'>
        <input type="text" placeholder='Search..' className='bg-transparent w-full rounded-sm border-0' />
        <FaSearch className='text-slate-600'/>
      </form>
  )
}
