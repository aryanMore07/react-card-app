import React from 'react';
import { useState } from 'react';
import Card from '../components/card/Card';
import Form from '../components/form/Form';
import "./home.css";

function Homepage() {

    const [cardDetails, setCardDetails] = useState("");

    return (
        <div className='homediv'>
            <div className='div-left'>
                <Card cardDetails={cardDetails}/>
            </div>
            <div className='div-right'>
                <Form setCardDetails={setCardDetails} />
            </div>
        </div>
    )
}

export default Homepage
