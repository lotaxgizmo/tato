import React from 'react'
import buynow from '../assets/buynow.svg'
import aliens from '../assets/aliens.svg'
import guntato from '../assets/guntato.svg'
// import smokertato from '../assets/smokertato.svg'
import fattato from '../assets/fattato.svg'

import tato02 from '../assets/tato-02.png'
import tato03 from '../assets/tato-03.png'
import tato04 from '../assets/tato-04.png'
import tato05 from '../assets/tato-05.png'
import tato06 from '../assets/tato-06.png'

function Peep() {
    return (
        <div className='flex justify-center px-4'>

            <div className="relative box bg-[#F5CB24] border-4 border-black lg:w-[1188px] py-14 rounded-xl flex flex-col items-center mb-20">

                <h2 className='text-black outlined-textd text-center text-6xl lg:text-7xl mb-3'>PEEP THE MEMES</h2>

                <div className="images flex flex-col lg:flex-row" >
                    <img src={tato05} alt="" className='m-1 w-20' />
                    <img src={tato06} alt="" className='m-1 w-20' />

                    <img src={tato04} alt="" className='m-1 w-72' />
                </div>

                {/* <p className='text-xl lg:w-[738px] monts font-semibold mb-6 text-center'>Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum Tato is a lorem ipsum </p> */}




                <div className="relative box bg-[#ffffff] border-4 border-black lg:w-[892px] py-14 rounded-xl flex flex-col items-center mb-20">
                    <h2 className='text-black outlined-texts text-6xl lg:text-7xl mb-3 text-center'>A VIBRANT COMMUNITY</h2>

                    <p className='text-xl lg:w-[738px] monts font-semibold mb-6 text-center'>$TATO is supported by a hardened group of diamond hands who swore an oath upen their dead mother's grave that they will hold unto $TATO even to the death. And they have cool memes too.</p>
                    <a href="https://birdeye.so/token/9RQWJyXPF8CC4RFxU6LQjs3wr8tosRWx7xYAHgoR1keE?chain=solana" target="_blank" rel="noopener noreferrer" className='absolute bottom-[-44px]'>
                        <img src={buynow} alt="" className='' />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Peep