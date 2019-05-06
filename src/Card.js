import React from 'react'
import image from './images/stock.jpg'

const Card = ({coin}) => (
    <div className='Card'>
        <img src={image} alt='stock-chart-card' />
        <h3>{coin.name}</h3>
        <p>#{coin.rank}</p>
        <h5>{coin.percent_change_24h}%</h5>
        
    </div>
)

export default Card