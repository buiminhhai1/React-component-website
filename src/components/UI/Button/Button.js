import React from 'react';
import classes from './Button.module.css';

const Button = (props) =>(
    <button
        className={classes.btnType}>
        {props.children}
    </button>
);

export default Button;