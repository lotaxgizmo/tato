import React from 'react'
import buynow from '../assets/buynow.svg'
import thinktato from '../assets/thinktato.svg'
import ball1 from '../assets/ball1.svg'
import star1 from '../assets/star1.svg'
import star2 from '../assets/star2.svg'
import straw1 from '../assets/straw1.svg'

function Welcome() {
    return (
        <div className='relative flex flex-col justify-center  items-center mt-96 px-4'>
            <img src={thinktato} alt="" className='absolute w-80 lg:w-96 top-[-223px] lg:top-[-323px] llg:mb-[50pxx]' />
            <div className="relative box bg-[#F5CB24] border-4 border-black lg:w-[818px] py-14 rounded-xl flex flex-col items-center mb-20">

                <h2 className='text-white outlined-text text-7xl mb-3 text-center'>ALL YOU CAN EAT $TATO</h2>
                <p className='text-2xl monts font-semibold mb-14 text-center'>HOW DOES IT FEEL TO HAVE A TATO BAG</p>
                <p className='text-xl lg:w-[738px] monts font-semibold mb-6 text-center'>Our mascot is none other than $TATO, the embodiment of fun, growth, and calories.
                    <br />
                    $TATO is here to bring a yummy edge to the solana blockchain, and he'll do it one transaction at a time</p>
                <a href="https://birdeye.so/token/9RQWJyXPF8CC4RFxU6LQjs3wr8tosRWx7xYAHgoR1keE?chain=solana" target="_blank" rel="noopener noreferrer" className='absolute bottom-[-44px]'>
                    <img src={buynow} alt="" className='' />
                </a>
            </div>


            <img src={star2} alt="" className='hidden lg:flex absolute top-[-33px] left-[76px]' />
            <img src={straw1} alt="" className='hidden lg:flex absolute bottom-[32px] left-[112px]' />

            <img src={star1} alt="" className='hidden lg:flex absolute top-[32px] right-[112px]' />
            <img src={ball1} alt="" className='hidden lg:flex absolute bottom-[60px] right-[153px]' />

        </div>
    )
}

export default Welcome