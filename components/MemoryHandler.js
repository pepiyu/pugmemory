
import { FlipableCard } from '../components/Card'
import React, { useReducer} from 'react'

const initialState = {
    currentCardIndex: null,
    currentCardNumber: null,
    cardsDiscovered: [],
}

// if only one card, flipCard, nothing else, dont allow to flip again
// if two cards, flipCard, then:
    //check if card 1 and current card are same
        //if not same, flip card1 and card2
        //if same, keep both flip and dont allow to flip
function reducer(state, action){
    const { 
        currentCardIndex, 
        currentCardNumber,
        cardsDiscovered 
    } = state
    switch(action.type){
        case 'flip':
            if(!currentCardIndex){
                return {
                    ...state,
                    currentCardIndex: action.index,
                    currentCardNumber: action.cardNumber,
                }
            }
            if(currentCardIndex !== action.index){
                if(currentCardNumber === action.cardNumber){
                    return {
                        ...state,
                        currentCardIndex: null,
                        currentCardNumber: null,
                        cardsDiscovered: [
                            ...cardsDiscovered,
                            action.cardNumber
                        ]
                    }
                } else {
                    return {
                        ...state,
                        currentCardIndex: null,
                        currentCardNumber: null,
                    }
                }
            }
            return state

    }
}

function MemoryHandler(props) {
    const { cardSet } = props

    const [ state, dispatch ] = useReducer(reducer, initialState)
    const { currentCardIndex, cardsDiscovered } = state

    console.log('MemoryHandler', cardSet)
    const flippableCards = cardSet.map((cardNumber, index) => 
        <FlipableCard
         key={`flippable-${index+1}`} 
         idx={index+1}
         img={`/images/chip-${cardNumber}.png`}
         isFlipped={(currentCardIndex && currentCardIndex === index+1) 
            || cardsDiscovered.includes(cardNumber)}
         onClick={ () => {
            !cardsDiscovered.includes(cardNumber) && dispatch({ type: 'flip', index: index+1, cardNumber})
            }}
        />
    )

    return (
        <>
            {flippableCards}
        </>
    )  
}

export default MemoryHandler