import React from 'react';
import Card from '../components/card/Card';
import Form from '../components/form/Form';
import "./home.css";

function Homepage() {
    return (
        <div className='homediv'>
            <div className='div-left'>
                <Card />
            </div>
            <div className='div-right'>
                <Form />
            </div>
        </div>
    )
}

export default Homepage
