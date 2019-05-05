import React, {useContext} from 'react'
import Card from './Card'
import {CoinContext} from './CoinContext'

const Section = () => {
    const coins = useContext(CoinContext)
    

    return (
        <div className='CardGroup'>
        <h2>Winners</h2>
        <Card />
      </div>
    )
}

export default Section