import React, { useState }  from 'react'

import styles from './Card.module.css'

export function Card(props) {
    const { img, id, key } = props
    return (
        <div className={styles.cardFront}>
            <img 
                //title={id}
                src={img} 
                height="200"
            />
        </div>
    )
}

export function CardBack() {
    return (
        <div className={styles.cardBack}>
            <img 
                src="https://camo.githubusercontent.com/2eb688a747805c9acd144faf728c8a30f86fc4ca5fb39e6528232f0372151364/68747470733a2f2f63646e2e7261776769742e636f6d2f7075676a732f7075672d6c6f676f2f656563343336636565386664396431373236643738333963626539396431663639343639326330632f5356472f7075672d66696e616c2d6c6f676f2d5f2d636f6c6f75722d3132382e737667" 
                height="200"
            />
        </div>
    )
}

export function FlipableCard(props) {
    const { id, memory, setMemory } = props


    const [isFlipped, setFlipped] = useState(false)
    // @sergioruizsan no funciona... :(
    const checkCard = id =>{
        setFlipped(!isFlipped)
    
        console.log(id);
        setMemory([
            ...memory,
            id
        ])
    }


    return (
        <div
            className={styles.flipCard}
            //onClick={()=>checkCard(id)}>
            onClick={() => setFlipped(!isFlipped)}>
            <div className={`${styles.flipCardInner} ${ isFlipped ? styles.flipCardInnerFlipped : '' }`}>
                <Card {...props} />
                <CardBack/>
            </div>
        </div>
    )
}