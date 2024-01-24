import React from 'react'
import nomics from '../assets/nomics.svg'

function Tatonomics() {
    return (
        <div className='flex flex-col justify-center items-center px-2'>
            <h2 className='text-white outlined-text text-6xl lg:text-8xl mb-3 text-center'>TATONOMICS</h2>
            <img src={nomics} alt="" className=' ' />

        </div>
    )
}

export default Tatonomics