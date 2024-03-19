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

import tato02 from '../assets/tato-02.png'
import tato03 from '../assets/tato-03.png'
import tato04 from '../assets/tato-04.png'
import tato05 from '../assets/tato-05.png'
import tato06 from '../assets/tato-06.png'

function Hero() {
    return (
        <div className='relative flex flex-col mt-2 mb-10 justify-center items-center'>
            <img src={bullish} alt="" className='hidden lg:flex px-20 mb-[30px]' />


            <div className="relative hero flex justify-center items-center">
                <img src={Herotext} alt="" className='w-[1100px] lg:mb-7 z-10 mt-60 lg:mt-10' />

                <img src={tato06} alt="" className='hidden lg:flex absolute top-[-90px] left-0 w-[230px]' />
                <img src={tato04} alt="" className='hidden lg:flex absolute top-[-20px] right-10 w-40' />
                <img src={tato02} alt="" className='hidden lg:flex absolute bottom-[-40px] left-0 w-80 z-20' />
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