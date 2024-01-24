import React from 'react'
import Herotext from '../assets/Herotext.svg'
import buy from '../assets/buy.svg'
import telegram from '../assets/telegram.svg'
import bullish from '../assets/bullish.svg'
import aliens from '../assets/aliens.svg'
import guntato from '../assets/guntato.svg'
import tatostand from '../assets/tatostand.svg'
import smokertato from '../assets/smokertato.svg'
import fattato from '../assets/fattato.svg'
function Hero() {
    return (
        <div className='relative flex flex-col mt-2 mb-10 justify-center items-center'>
            <img src={bullish} alt="" className='hidden lg:flex px-20 mb-[30px]' />


            <div className="relative hero flex justify-center items-center">
                <img src={Herotext} alt="" className='w-[1100px] lg:mb-7 z-10 mt-60 lg:mt-10' />
                <img src={aliens} alt="" className=' absolute lg:top-[-30px] top-[95px] z-20' />
                <img src={tatostand} alt="" className='hidden lg:flex absolute top-[-90px] left-0 w-96' />
                <img src={guntato} alt="" className='hidden lg:flex absolute top-[-20px] right-10 w-40' />
                <img src={fattato} alt="" className='hidden lg:flex absolute bottom-[-40px] left-0 w-80 z-20' />
                {/* <img src={smokertato} alt="" className='absolute top-[-90px] right-20 w-60d' /> */}
            </div>

            <a href="https://birdeye.so/token/9RQWJyXPF8CC4RFxU6LQjs3wr8tosRWx7xYAHgoR1keE?chain=solana" target="_blank" rel="noopener noreferrer">
                <img src={buy} alt="" className='py-3' />
            </a>
            <a href="https://t.me/tatocoinsol" target="_blank" rel="noopener noreferrer">
                <img src={telegram} alt="" className='py-3' />
            </a>


        </div>
    )
}

export default Hero