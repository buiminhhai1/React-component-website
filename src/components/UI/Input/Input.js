import React from 'react';
import classes from './Input.module.css';


const Input = (props) => {
    let inputElement = null;
    const inputClasses = [classes.InputElement];

    switch(props.elementType){
        case('input'): 
            inputElement = <input 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                />; 
            break;
        case('textarea'):
            inputElement = <textarea 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                />
            break;
        case ('select'): 
            // inputElement = <select 
            //     className={inputClasses.join(' ')}
            //     value={props.value}
            //     onChane={props.onChane}
            //     />
            break;
        default: 
            inputElement = <input 
                className={inputClasses.join(' ')}
                value={props.value}
                onChange={props.changed}
                />; 
            break;
    }
    return (
        <div className={classes.Input}>
            <label className={classes.Label}>{props.label}</label>
            {inputElement}
        </div>
    );
}


export default Input;