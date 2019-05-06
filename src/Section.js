import React, {useContext} from 'react'
import Card from './Card'
import {CoinContext} from './CoinContext'

const Section = () => {
    const gainers = useContext(CoinContext)
    console.log(gainers)

    return (
        <div className='CardGroup'>
        <h2>Winners</h2>
        {gainers.map(coin => <Card key={coin.id} coin={coin} />)}
      </div>
    )
}

export default Section