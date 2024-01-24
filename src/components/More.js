import React from 'react'
import onsol from '../assets/onsol.svg'
import elsee from '../assets/else.svg'
import buynoww from '../assets/buynoww.svg'


function More() {
    return (
        <div className='flex flex-col lg:flex-row justify-center mb-32 px-4'>
            <div className="left">
                <img src={onsol} alt="" className='mr-9' />
            </div>
            <div className="right lg:w-[630px] mt-20">
                <h2 className='text-black text-center outlined-texts text-6xl lg:text-7xl mb-3'>MORE TATO STUFF</h2>
                <p className='text-xl w-auto lg:w-[738px]. monts font-semibold mb-6 text-left'>Join the $TATO revolution, get your electronic shovels and fill up your bloakchain bags with a shit ton of
                    $TATO </p>

                <div className="btn flex flex-col lg:flex-row mt-10 items-center ">
                    <a href="https://birdeye.so/token/9RQWJyXPF8CC4RFxU6LQjs3wr8tosRWx7xYAHgoR1keE?chain=solana" target="_blank" rel="noopener noreferrer">
                        <img src={buynoww} alt="" className='py-2 pr-2' />
                    </a>
                    <a href="https://birdeye.so/token/9RQWJyXPF8CC4RFxU6LQjs3wr8tosRWx7xYAHgoR1keE?chain=solana" target="_blank" rel="noopener noreferrer">
                        <img src={elsee} alt="" className='py-2 pr-2' />
                    </a>
                </div>
            </div>

        </div>
    )
}

export default More