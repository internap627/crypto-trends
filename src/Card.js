import React from 'react'
import image from './images/stock.jpg'

const Card = () => (
    <div className='Card'>
        <img src={image} alt='stock-chart-card' />
        <h3>Bitcoin</h3>
        <p>#1</p>
        <h5>50%</h5>
        
    </div>
)

export default Card