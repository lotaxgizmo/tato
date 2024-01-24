import React from 'react'
import bullish from '../assets/bullish.svg'

function Footer() {
    return (
        <div className='mt-10'>
            <img src={bullish} alt="" className=' hidden lg:flex px-10' />
        </div>
    )
}

export default Footer