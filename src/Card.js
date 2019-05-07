import React from 'react'
import image from './images/stock.jpg'

const Card = ({coin, title}) => {
    const cssClass = title == 'Winners' ? 'Card' : 'Card2'
    
    return(
    <div className={cssClass}>
        <img src={image} alt='stock-chart-card' />
        <h3>{coin.name}</h3>
        <p>#{coin.rank}</p>
        <h5>{coin.percent_change_24h}%</h5>
        
    </div>
)}

export default Card