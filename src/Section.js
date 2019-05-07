import React, {useContext} from 'react'
import Card from './Card'
import {CoinContext} from './CoinContext'

const Section = ({title}) => {
    const {gainers, losers} = useContext(CoinContext)
    const coins = title == 'Winners' ? gainers : losers

    return (
        <div className='CardGroup'>
        <h2>{title}</h2>
        <div className='Cards'>
        {coins.map(coin => <Card key={coin.id} coin={coin} />)}
        </div>
      </div>
    )
}

export default Section