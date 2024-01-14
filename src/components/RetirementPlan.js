
import React from 'react'
import RetirementChart from './Chart'
import { Chart as ChartJS } from 'chart.js/auto'
function RetirementPlan() {
    const radius = 85;
    const dashArray = radius * Math.PI * 2;
    const dashOffset = dashArray - (dashArray * 78) / 100;

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
                <h2 className='text-black text-base font-medium mb-4'>
                    Contributions Overtime
                </h2>
                <RetirementChart />
            </div>
            <div>
                <div>
                    <h3 className='font-semibold text-xl'>How do I compare to my peers</h3>
                    <p className='text-[#9E9FA5] text-sm'>These numbers represents current goal achievement</p>
                </div>
                <div className='flex'>
                    <div className='flex justify-between gap-4 flex-col pt-4 '>
                        <p className='text-black font-semibold text-sm border-b-2 border-gray-300 p-1'>Age:  <span className='text-[#9E9FA5] text-sm'>Under 30</span></p>
                        <p className='text-black font-semibold text-sm border-b-2 border-gray-300 p-1'>Salary: <span className='text-[#9E9FA5] text-sm'>K20-K30</span></p>
                        <p className='text-black font-semibold text-sm border-b-2 border-gray-300 p-1'>Gender: <span className='text-[#9E9FA5] text-sm'>Male</span></p>
                    </div>
                    <div className='flex gap-5 ml-8 items-center justify-center'>
                      <div>
                        <svg
                            width='100'
                            height='100'
                            viewBox={`0 0 200 200`}

                        >
                            <circle
                                cx={200 / 2}
                                cy={200 / 2}
                                strokeWidth='15px'
                                r={radius}
                                className='fill-none stroke-[#AAD9BB]'
                            />
                            <circle
                                cx={200 / 2}
                                cy={200 / 2}
                                strokeWidth='15px'
                                r={radius}
                                className='fill-none stroke-lincap-round stroke-linejoin-round stroke-[#65B741]'
                                style={{
                                    strokeDasharray: dashArray,
                                    strokeDashoffset: `${dashArray - (dashArray * 78) / 100}`
                                }}
                                transform={`rotate(-90 ${200 / 2} ${200 / 2})`}
                            />
                            <text x='50%' y='50%' textAnchor='middle' className='text-4xl font-extrabold' >78%</text>
                        </svg>
                        <span className='relative left-6 text-sm font-semibold '>Average</span>
                        </div>
                        <div>
                            <svg
                                width='100'
                                height='100'
                                viewBox={`0 0 200 200`}

                            >
                                <circle
                                    cx={200 / 2}
                                    cy={200 / 2}
                                    strokeWidth='15px'
                                    r={radius}
                                    className='fill-none stroke-[#AAD9BB]'
                                />
                                <circle
                                    cx={200 / 2}
                                    cy={200 / 2}
                                    strokeWidth='15px'
                                    r={radius}
                                    className='fill-none stroke-lincap-round stroke-linejoin-round stroke-[#65B741]'
                                    style={{
                                        strokeDasharray: dashArray,
                                        strokeDashoffset: `${dashArray - (dashArray * 95) / 100}`
                                    }}
                                    transform={`rotate(-90 ${200 / 2} ${200 / 2})`}
                                />
                                <text x='50%' y='50%' textAnchor='middle' className='text-4xl font-extrabold' >95%</text>
                            </svg>
                            <span className='relative left-10 text-sm font-semibold '>Top</span>
                        </div>
                        <div>
                            <svg
                                width='100'
                                height='100'
                                viewBox={`0 0 200 200`}

                            >
                                <circle
                                    cx={200 / 2}
                                    cy={200 / 2}
                                    strokeWidth='15px'
                                    r={radius}
                                    className='fill-none stroke-[#AAD9BB]'
                                />
                                <circle
                                    cx={200 / 2}
                                    cy={200 / 2}
                                    strokeWidth='15px'
                                    r={radius}
                                    className='fill-none stroke-lincap-round stroke-linejoin-round stroke-[#65B741]'
                                    style={{
                                        strokeDasharray: dashArray,
                                        strokeDashoffset: `${dashArray - (dashArray * 59) / 100}`
                                    }}
                                    transform={`rotate(-90 ${200 / 2} ${200 / 2})`}
                                />
                                <text x='50%' y='50%' textAnchor='middle' className='text-4xl font-extrabold' >59%</text>
                                
                            </svg>
                            <span className='relative left-12 text-sm font-semibold '>Me</span>
                        </div>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default RetirementPlan