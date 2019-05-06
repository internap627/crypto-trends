import React, {useContext} from 'react'
import Card from './Card'
import {CoinContext} from './CoinContext'

const Section = () => {
    const coins = useContext(CoinContext)
    console.log(coins)

    return (
        <div className='CardGroup'>
        <h2>Winners</h2>
        {coins.map(coin => <Card key={coin.id} coin={coin} />)}
      </div>
    )
}

export default Section