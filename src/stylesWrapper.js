import React, { Component } from 'react';
import styleBtn from './styleBtn';

const translateProps =(props) => {

    let _styles = {...styleBtn.default}
    if (props.disable){
        _styles = { ..._styles, ...styleBtn.disable}
    } else if (props.error){
        _styles = {..._styles, ...styleBtn.error}
    }
    const newProps = {...props, styles:_styles}
    return newProps;
}

export default (WrappedComponent)=>{
    return function nameDoesNotMatter(args) {
        return WrappedComponent(translateProps(args))
    }
}
