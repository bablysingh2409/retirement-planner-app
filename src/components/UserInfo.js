import React from 'react'

function UserInfo() {
    return (
        <div className='flex flex-col justify-between gap-7 p-1 ml-16 mt-9'>
            <div className='flex gap-4 mt-2'>
                <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpLdzd1TX_CKCXkYXZ5XLCinh6zl_J8-rDMQ&usqp=CAU' alt='img' className='w-14 rounded-full h-14' />
                <div>
                    <h1 className='text-black font-bold text-3xl'>Hi Mike</h1>
                    <p className='text-[#9E9FA5] text-sm'>welcome back</p>
                </div>
            </div>
            <div className='flex justify-between flex-col gap-4'>
                <p className='text-lg text-[#9E9FA5]'>Today</p>
                <div>
                    <h2 className='font-extrabold text-4xl'>$19,892</h2>
                    <p className='text-[#9E9FA5] text-sm'>Account Balance</p>
                </div>
                <div>
                    <h3 className='text-black font-bold text-xl'>$4,000</h3>
                    <p className='text-[#9E9FA5] text-sm'>Year-to-Date Contributions</p>
                </div>
                <div>
                    <h3 className='text-black font-bold text-xl'>$1,892</h3>
                    <p className='text-[#9E9FA5] text-sm'   >Total Interest</p>
                </div>
                <div className='flex  justify-center items-center gap-6 w-[150px] rounded-md p-2 bg-[#4942E4] text-white text-lg'>
                    <p >I want to </p>
                    <svg xmlns="http://www.w3.org/2000/svg" height="16" width="10" viewBox="0 0 320 512" style={{ fill: "white" }}><path d="M137.4 374.6c12.5 12.5 32.8 12.5 45.3 0l128-128c9.2-9.2 11.9-22.9 6.9-34.9s-16.6-19.8-29.6-19.8L32 192c-12.9 0-24.6 7.8-29.6 19.8s-2.2 25.7 6.9 34.9l128 128z" className='' /></svg>
                </div>
            </div>
            <div className='flex justify-between flex-col gap-4'>
                <p className='text-lg text-black font-semibold'>Recent Transactions</p>
                <div className='border-b-2 border-gray-300 pb-2'>
                    <p className='text-[#9E9FA5] text-sm'>2020-08-07</p>
                    <h3 className='text-black font-semibold text-sm'>Withdrawal Tranfer to Bank-XXX11</h3>
                </div>
                <div className='border-b-2 border-gray-300 pb-2'>
                    <p className='text-[#9E9FA5] text-sm'>2020-07-21</p>
                    <h3 cclassName='text-black font-semibold text-sm'>Withdrawal Tranfer to Bank-XXX11</h3>
                </div>
                <div className='border-b-2 border-gray-300 pb-2'>
                    <p className='text-[#9E9FA5] text-sm'>2020-07-16</p>
                    <h3 className='text-black font-semibold text-sm'>Withdrawal Tranfer to Bank-XXX11</h3>
                </div>

            </div>
        </div>
    )
}

export default UserInfo