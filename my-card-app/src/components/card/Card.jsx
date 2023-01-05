import React from 'react';
import { useState } from 'react';
import "./card.css"

function Card(props) {

    
    return (
        <div className="panel">
            <div className="card card--front" >
                <p className="card__number"> { props.cardDetails.cardNum }</p>
                <div className="card__expiry-date" >{  props.cardDetails.cardMm}/{ props.cardDetails.cardYy }</div>
                <div className="card__owner">{ props.cardDetails.cardName }</div>
            </div>
            <div className="card card--back my-3" style={{backgroundColor:"#a2a2a2"}} >
                <div className="card__strip"></div>
                <div className="card__ccv" ><span className='cvv-digit'>{ props.cardDetails.cardCvv }</span></div>
            </div>
        </div>
    )
}

export default Card
