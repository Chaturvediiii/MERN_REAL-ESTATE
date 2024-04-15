import React from 'react'
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  }
  return (
<div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="p-8 rounded-lg shadow-md max-w-md">
        <h1 className="text-4xl font-bold text-gray-800">404</h1>
        <p className="text-lg text-gray-600">Oops! Page not found.</p>
        <p className="text-gray-600">The page you are looking for might have been removed or is temporarily unavailable.</p>
        <button className="mt-4 font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" onClick={goBack}>
          Go to your previous page
        </button>
      </div>
    </div>
  )
}

