import React, { useEffect, useState } from 'react'
import {FaSearch} from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'

export default function Properties() {
  const [searchTerm,setSearchTerm] = useState('');
  const navigate = useNavigate();
  const handleSubmit = (e) =>{
    e.preventDefault()
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm',searchTerm);
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }

  useEffect(()=>{
    const urlParams = new URLSearchParams(location.search)
    const urlSearchTerm = urlParams.get('searchTerm')
    if(urlSearchTerm){
      setSearchTerm(urlSearchTerm)
    }
  },[location.search])
  return (
      <form onSubmit={handleSubmit} className='bg-white p-2 rounded-lg w-100 mx-8 flex items-center'>
        <input 
        type="text" 
        placeholder='Search..' 
        className='bg-transparent w-full rounded-sm border-0'
        value={searchTerm}
        onChange={(e)=> setSearchTerm(e.target.value)}
        />
        <button>
        <FaSearch className='text-slate-600'/>
        </button>
      </form>
  )
}
