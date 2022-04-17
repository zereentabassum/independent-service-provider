import React from 'react';
import { Button } from 'react-bootstrap';
import './Service.css';

const Service = ( {service} ) => {
    
    return (
        <div className='service'>
            <div className='image'>
                <img src={service.img} alt="" />
            </div>
            <div className='p-3'>
                <h2>{service.name}</h2>
                <h4>Price: ${service.price}</h4>
                <p>{service.description}</p>
                <Button variant="primary">Checkout</Button>{' '}

            </div>
        </div>
    );
};

export default Service;