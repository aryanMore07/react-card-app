import React from 'react'
import "./form.css"
import { useState } from 'react';

function Form() {

    const[cardHolderName, setCardHolderName] = useState("")
    const[cardNumber, setCardNumber] = useState("")
    const[cardMonth, setCardMonth] = useState("")
    const[cardYear, setCardYear] = useState("")
    const[cardCvv, setCardCvv] = useState("")

    const [error, setError] = useState(false);

    const clickHandler = (e) => {
        e.preventDefault();
        if(cardHolderName.length === 0 || cardNumber === 0 || cardMonth === 0 || cardYear === 0 || cardCvv === 0) {
            setError(true)
        }
        console.log("click-click");
        console.log(cardHolderName, cardNumber, cardMonth, cardYear, cardCvv);
    }

    return (
        <div className='form-div'>
            <form onSubmit={clickHandler}>
                <div className="mb-3">
                    <label htmlFor="cardHolderName-input" className="form-label">CARDHOLDER NAME</label>
                    <input onChange={(e) => {setCardHolderName(e.target.value)}} value={cardHolderName} type="text" style={{ width: "60vh" }} placeholder="CARDHOLDER NAME" className="form-control" id="cardHolderName-input" aria-describedby="emailHelp" />
                    {error && cardHolderName.length<=0 ? <div id="emailHelp" className="form-text" style={{ color: "red" }}>Please Input a valid card Name</div> : ""}
                </div>
                <div className="mb-3">
                    <label htmlFor="cardNumber-input" className="form-label">CARD NUMBER</label>
                    <input onChange={(e) => {setCardNumber(e.target.value)}} value={cardNumber} type="text" style={{ width: "60vh" }} placeholder="CARD NUMBER" className="form-control" id="cardNumber-input" />
                    {error && cardNumber.length<=0 ? <div id="emailHelp" className="form-text" style={{ color: "red" }}>Please Input a valid card number</div> : ""}
                </div>
                <div className="input-group" style={{ width: "45vh" }}>
                    <span className="input-group-text">EXP.DATE (MM/YY)</span>
                    <input onChange={(e) => {setCardMonth(e.target.value)}} value={cardMonth} type="text" style={{ width: "9vh" }} placeholder="MM" maxLength="2" aria-label="First name" className="form-control inputSmall" />
                    <input onChange={(e) => {setCardYear(e.target.value)}} value={cardYear} type="text" style={{ width: "9vh" }} placeholder="YY" maxLength="2" aria-label="Last name" className="form-control inputSmall" />
                    {error && cardMonth.length<=0 && cardYear.length<=0 ? <div id="emailHelp" className="form-text" style={{ color: "red" }}>Please Input a Expiry date</div> : ""}
                </div>
                <div className="input-group my-3" style={{ width: "45vh" }}>
                    <span className="input-group-text" id="inputGroup-sizing-default">CVV</span>
                    <input onChange={(e) => {setCardCvv(e.target.value)}} value={cardCvv} type="text" style={{ width: "12px" }} placeholder="CVV" maxLength="3" className="form-control inputSmall" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" />
                </div>
                {error && cardCvv.length<=0 ? <div id="emailHelp" className="form-text" style={{ color: "red" }}>Please Input a CVV</div> : ""}
                <div className="d-grid gap-2 my-3">
                    <button className="btn " type="submit" style={{backgroundColor:"#220930", color:"whitesmoke"}}>Confirm</button>
                </div>
            </form>
        </div>
    )
}

export default Form;
