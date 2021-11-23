import React from 'react'
import classes from './Input.module.css'

const Input = props => {
    return (
        <div className={classes.input}>
            <label htmlFom={props.input.id}>{props.label}</label>
            <input id={props.input.id} {...props.input} />
        </div>
    )
}

export default Input
