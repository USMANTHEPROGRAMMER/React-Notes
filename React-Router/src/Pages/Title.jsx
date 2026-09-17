import React from 'react'

const Title = () => {
  return (
    /* flex, items-center (vertical centering), justify-center (horizontal centering) */
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-70px)] text-center">
      <h1 className="text-7xl font-bold">Usman Ghani</h1>
      <p className="text-2xl mt-4 text-gray-600">Frontend Web Developer</p>
    </div>
  )
}

export default Title