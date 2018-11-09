import React, { Component } from 'react';
import wrapperHOC from './wrapperHOC';

const Candy = (props)=> {
    return (
        <button onClick={()=>{props.say('Polina')}}> I am {props.taste} candy, price: {props.price}, {props.name}</button>
    )
}
export default wrapperHOC(Candy, "Ksenia");
