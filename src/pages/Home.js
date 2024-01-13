import React from 'react'
import Nav from '../components/Nav'
import UserInfo from '../components/UserInfo'
import RetirementPlan from '../components/RetirementPlan'

function Home() {
  return (
    <div className='flex flex-col items-center  lg:flex-row bg-pink-300 p-1 rounded-md m-2 h-full'>
        <div className='w-[50px] bg-white h-full'>
          <Nav/>
        </div>
        <div className='w-2/4 bg-[#F5F5F5] h-full'>
          <UserInfo/>
        </div>
        <div className='w-3/4 bg-white'>
          <RetirementPlan/>
        </div>
        <div className='w-2/4 bg-purple-600'>Retirement Strategy</div>
    </div>
  )
}

export default Home