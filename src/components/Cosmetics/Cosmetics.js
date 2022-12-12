import React from 'react';
import { add, multiply } from '../utilities/Calculate/Calculate';

const Cosmetics = (props) => {

    const first = 23;
    const second = 22;
    const sum = add(first, second);
    const multi = multiply(first, second)

    return (
        <div>
            <h1>Name: {props.name}</h1>
            <h3>Age: {props.age}</h3>
            <h2>single price: {sum}</h2>
            <h2>multiply price: {multi}</h2>
        </div>
    );
};

export default Cosmetics;