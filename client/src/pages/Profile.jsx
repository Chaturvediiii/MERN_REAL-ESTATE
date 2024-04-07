import React from 'react'
import {useSelector} from 'react-redux'

export default function Profile() {
  const {currentUser} = useSelector((state) => state.user)
  return (
    <div className='p-3 max-w-lg mx-auto'>
      <h1 className='text-3xl font-semibold text-center my-7'>Profile</h1>
      <form className='flex flex-col gap-4'>
        <img className='rounded-full h-24 w-24 object-cover cursor-pointer self-center mt-2' src={currentUser.avatar} alt="profile" />
        <input type="text" id='username' placeholder='username' className='border p-3 rounded-lg' />
        <input type="text" id='email' placeholder='email' className='border p-3 rounded-lg' />
        <input type="text" id='password' placeholder='password' className='border p-3 rounded-lg' />
        <button className='bg-slate-700 text-white p-3 uppercase rounded-lg hover:opacity-95 disabled:opacity-80'>UPDATE</button>
      </form>
      <div className="flex justify-between text-red-700 mt-5">
        <span className='cursor-pointer'>Delete Account</span>
        <span className='cursor-pointer'>Sign out</span>
      </div>
    </div>
  )
}
