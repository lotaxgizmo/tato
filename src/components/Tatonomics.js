import React from 'react'
// import nomics from '../assets/nomics.svg'
import tappy from '../assets/tappy.svg'
import tatorun from '../assets/tatorun.svg'

function Tatonomics() {
    return (
        <div className='flex flex-col justify-center items-center px-2'>
            <h2 className='text-white outlined-text text-6xl lg:text-8xl mb-3 text-center'>TATO GAMES</h2>
            <div className="games flex flex-row justify-center items-center">
                <a href="https://gd.games/s2moneyy/tatorun" target="_blank" rel="noopener noreferrer">
                    <img src={tatorun} alt="" className=' p-3' />
                </a>
                <a href="https://gd.games/s2moneyy/tappytato" target="_blank" rel="noopener noreferrer">
                    <img src={tappy} alt="" className=' p-3' />
                </a>
            </div>

        </div>
    )
}

export default Tatonomics