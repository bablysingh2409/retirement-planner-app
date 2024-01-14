import React from 'react'

function RetirementStrategy() {
    return (
        <div className='flex flex-col justify-between gap-7'>
            <div className='bg-[#F5F5F5] h-[80%] w-[80%] p-4 flex flex-col gap-4 pl-6 '>
                <h2 className='text-black text-base font-medium'>
                    Retirement Strategy
                </h2>
                <div>
                    <p className='text-black font-semibold text-sm p-1'>Employee Contribution</p>
                    <input type='range' value='12%' className='w-[90%]' />
                    <span className='text-xs font-semibold relative bottom-1 left-3'>12%</span>
                </div>
                <div>
                    <p className='text-black font-semibold text-sm p-1'>Retirement Age</p>
                    <input type='range' value='65' className='w-[90%]'/>
                    <span className='text-xs font-semibold relative bottom-1 left-3'>65</span>
                </div>
                <p className='text-black font-semibold text-sm p-1'>Employee Contribution <span>8.4%</span></p>
                <p className='text-black font-semibold text-sm p-1'>Interest Rate <span>5%</span></p>
                <div className='flex  justify-center items-center gap-6 w-[80%] rounded-md p-2 bg-[#4942E4] text-white text-lg'>
                    <p >Update</p>
                </div>
                <p className='text-xs font-semibold text-[#4942E4] relative left-12 bottom-2'>view help doc</p>
            </div>
            <div>
                <div className='flex flex-col p-4 pl-4 border-l-2 border-[#4942E4] ml-4'>
                    <p className='text-[#9E9FA5] text-lg'>Are you considering a</p>
                    <span className='text-black text-sm font-extrabold'> housing Advance?</span>
                    <span className='text-[#9E9FA5] text-sm'>Limited time reduced interest</span>
                    <p className='text-xs font-semibold text-[#4942E4]'>view help doc</p>
                </div>
            </div>
        </div>
    )
}

export default RetirementStrategy