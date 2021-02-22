import React from 'react'
import PriceBox from './PriceBox/PriceBox'
import TradeBox from './TradeBox/TradeBox'
import "./Trading.css"

function Trading() {
    return (
        <div className="trading-d-me">
            <PriceBox />
            <TradeBox />
        </div>
    )
}

export default Trading
