import React from 'react'
import buynow from '../assets/buynow2.svg'
import clownn from '../assets/clownn.svg'

function clown() {
    return (
        <div className='flex flex-col justify-center items-center mb-10 px-4'>
            <div className="relative box   border-4 border-black lg:w-[892px] py-14 rounded-xl flex flex-col items-center mb-20">
                <h2 className='text-black outlined-texts text-6xl lg:text-7xl mb-3 text-center'>THIS IS YOU</h2>
                <h2 className='text-black outlined-texts text-5xl mb-3 text-center'>IF YOU DON'T BUY</h2>

                <img src={clownn} alt="" className=' ' />
                <a href="https://birdeye.so/token/9RQWJyXPF8CC4RFxU6LQjs3wr8tosRWx7xYAHgoR1keE?chain=solana" target="_blank" rel="noopener noreferrer" className='absolute bottom-[-44px]'>
                    <img src={buynow} alt="" className='' />
                </a>
            </div>
        </div>
    )
}

export default clown