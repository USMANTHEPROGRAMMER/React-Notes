import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()

  return (
    <div className='flex flex-col gap-5 items-center justify-center min-h-[calc(100vh-80px)] text-4xl'>
      <p>Home Page</p>
      <button onClick={
        () => {
          navigate('/collection/fragrances')
        }
      } className='bg-black text-white px-4 py-2 rounded-lg cursor-pointer'>Fragrances Page</button>
    </div>
  )
}

export default Home