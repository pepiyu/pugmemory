
import MemoryHandler from '../components/MemoryHandler'
import React from 'react'

function MemoryBuilder() {

    const cards = [1, 2, 3]
    const numPairs = 2
    //try with Array.from()
    const cardSet = cards.reduce((acc, val, index)=>{
        const start = index * numPairs
        const end = start + numPairs
        return acc.fill(val, start, end)
    }, new Array(cards.length * numPairs))

    const cardSetRandom = cardSet.sort(() => Math.random() - 0.5)
    console.log('MemoryBuilder', cardSetRandom)

    return (
        <MemoryHandler key={cardSetRandom.join()} cardSet={cardSetRandom}/>
    )  
}

export default MemoryBuilder