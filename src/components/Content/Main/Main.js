import React from 'react'
import Cards from './Cards/Cards'
import './Main.css'
import Text from './Text/Text'
import Trading from './Trading/Trading'

function Main() {
    return (
        <div className="main-me">
             <Trading />
             <Cards />
             <Text />
        </div>
    )
}

export default Main
