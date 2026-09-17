import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/UserContext'

const Navbar = () => {
  const { userData } = useContext(UserContext);

  // Direct check karein ke name kya dikhana hai (No useState needed!)
  const displayName = userData ? userData.name : 'Not Logged In';

  return (
    <div className='flex bg-gray-300 shadow-md items-center justify-between px-5 py-3'>
        <div>
            <Link to="/usmanghani">Usman Ghani</Link>
        </div>
        <div> 
            <p>{displayName}</p>
        </div>
        <div className='flex gap-4'>
            <Link to="/">Home</Link>
            <Link to="/profile">Profile</Link>
            <Link to="/settings">Settings</Link>
        </div>
    </div>
  )
}

export default Navbar