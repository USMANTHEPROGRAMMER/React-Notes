import React from 'react'
import {Link, Outlet} from "react-router-dom"

const Contact = () => {
  return (
    <div>
        <p>Contact</p>
        <div className="">
            <Link className='border-2 mr-4 text-2xl px-5 py-3' to="SOS">SOS</Link>
            <Link className='border-2 text-2xl px-5 py-3' to="customercare">Customer Care</Link>
        </div>

        <div className="mt-5">
            <Outlet />
        </div>
    </div>
  )
}

export default Contact