import React from 'react';
import CardElement from './CardElement';
function GameBoard(props) {

    return (
        <div id='gameBoard'>
            {props.cards.map((card, index) => 
                <CardElement handleFlip={() => props.handleFlip(card)} key={index} card={card}></CardElement>
            
            )}
        </div>
    );
}

export default GameBoard;
