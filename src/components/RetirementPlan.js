
import React from 'react'
import RetirementChart from './Chart'
import {Chart as ChartJS} from 'chart.js/auto'
function RetirementPlan() {
    return (
        <div className='flex flex-col justify-between gap-7 p-1 ml-16 mt-9'>
            <div>
                <h3 className='text-[#4942E4] font-semibold text-sm'>Retirement Income</h3>
                <h1 className='font-semibold text-xl'>Starting Year 2056</h1>
            </div>
            <div className='flex justify-between gap-7'>
                <div>
                    <h2 className='font-bold text-2xl'>$3000,000</h2>
                    <p className='text-[#9E9FA5] text-sm'>My Goal</p>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>59%</h2>
                    <p className='text-[#9E9FA5] text-sm'>Goal Acheved</p>
                </div>
                <div>
                    <h2 className='font-bold text-2xl'>$300</h2>
                    <p className='text-[#9E9FA5] text-sm'>Est. Monthly Income</p>
                </div>
            </div>
            <div>
                <h2 className='text-black text-base font-medium'>
                    Contributions Overtime
                </h2>
                <RetirementChart/>
            </div>
            <div></div>
        </div>
    )
}

export default RetirementPlan