import React, {useState, useEffect, createContext} from 'react'

export const CoinContext = createContext()

export const CoinProvider = (props) => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=10`)
        .then(res => res.json())
        .then(json => setCoins(json))

    })

    

    return (
        <CoinContext.Provider value={coins}>
            {props.children}
        </CoinContext.Provider>
    )
}




