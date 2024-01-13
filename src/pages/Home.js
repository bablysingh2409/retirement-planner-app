import React from 'react'
import Nav from '../components/Nav'

function Home() {
  return (
    <div className='flex flex-col items-center  lg:flex-row bg-pink-300 p-1 rounded-md m-2'>
        <div className='w-[50px] bg-white'>
          <Nav/>
        </div>
        <div className='w-2/4 bg-yellow-300'>user Info</div>
        <div className='w-3/4 bg-gray-800'>Retirement</div>
        <div className='w-2/4 bg-purple-600'>Retirement Strategy</div>
    </div>
  )
}

export default Home