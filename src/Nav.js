import React from 'react'
import image from '../src/images/bitcoin-logo-3.png'

const Nav = () => (
<div className='Nav'>
    <div className='NavGroup'>
        <img src={image} width='80' />
        <h2 className='NavText'>Crypto Trends</h2>
        <button className='NavButton'>Dark</button>
    </div>
</div>
)

export default Nav