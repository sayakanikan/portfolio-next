import React from 'react'
import Loader from '../components/Loader'
import BackButton from '../components/BackButton'

const Experiences = () => {
  return (
    <div className='min-h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-center font-mono'>
      Still collecting some experiences so I suggest you to go back...
      <Loader />
      <BackButton />
    </div>
  )
}

export default Experiences