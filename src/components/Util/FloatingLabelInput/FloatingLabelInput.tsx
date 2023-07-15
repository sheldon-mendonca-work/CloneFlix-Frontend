import React from "react"
import classes from './FloatingLabelInput.module.css';

const FloatingLabelInput:React.FC<any> = (props) => {
    return <div className={`${props.className} ${classes.floatingLabelInput}`}>
        <input type={props.type} id={props.id} className={classes['floatingLabelInput-input']} placeholder={props.placeholder}/>
        <label htmlFor={props.id} className={classes['floatingLabelInput-label']}>{props.placeholder}</label>
    </div>
};

export default FloatingLabelInput;