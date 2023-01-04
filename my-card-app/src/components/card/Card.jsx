import React from 'react';
import "./card.css"

function Card() {
    return (
        <div class="panel">
            <div class="card card--front" >
                <p class="card__number">4111 1111 1111 1111</p>
                <div class="card__expiry-date" >10/17</div>
                <div class="card__owner">Jane Doe</div>
            </div>
            <div class="card card--back my-3" style={{backgroundColor:"#a2a2a2"}} >
                <div class="card__strip"></div>
                <div class="card__ccv" ><span className='cvv-digit'>303</span></div>
            </div>
        </div>
    )
}

export default Card
