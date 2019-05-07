import React, {useState, useEffect, createContext} from 'react'

export const CoinContext = createContext()

export const CoinProvider = (props) => {
    const [coins, setCoins] = useState([])

    useEffect(() => {
        fetch(`https://api.coinmarketcap.com/v1/ticker/?limit=500`)
        .then(res => res.json())
        .then(json => setCoins(json))

    }, [])

    const gainers = (arr) => {
        return arr.sort((a,b) => b.percent_change_24h - a.percent_change_24h)
                .slice(0,10)
    }

    const losers = (arr) => {
        return arr.sort((a,b) => a.percent_change_24h - b.percent_change_24h)
                .slice(0,10)
    }
    

    return (
        <CoinContext.Provider value={{gainers: gainers(coins), losers: losers(coins)}}>
            {props.children}
        </CoinContext.Provider>
    )
}




