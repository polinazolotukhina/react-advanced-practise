import React, { Component } from 'react';
import stylesWrapper from './stylesWrapper';

const ButtonOne = (props)=> {
    return (
        <button style={props.styles}> I am button one</button>
    )
}
export default stylesWrapper(ButtonOne);
